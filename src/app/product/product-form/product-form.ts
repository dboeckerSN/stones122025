import { Component, inject } from '@angular/core';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { Product } from '../product';
import { CustomValidators } from '../../utils/validators/custom-validators';
import { ActivatedRoute } from '@angular/router';
import { ProductData } from '../product-data';
import { map } from 'rxjs';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInput } from '@angular/material/input';
import { MatButton } from '@angular/material/button';

@Component({
  selector: 'stn-product-form',
  templateUrl: './product-form.html',
  styleUrl: './product-form.css',
  imports: [ReactiveFormsModule, MatFormFieldModule, MatInput, MatButton],
})
export class ProductForm {
  productData = inject(ProductData);

  // productForm = new FormGroup({
  // name: new FormControl('', [Validators.required, CustomValidators.alphaNum]),
  // price: new FormControl(0, [Validators.required, CustomValidators.positiv]),
  // weight: new FormControl(0, [Validators.required]),
  // })

  private readonly fb = inject(FormBuilder);
  productForm = this.fb.group({
    name: ['', [Validators.required, CustomValidators.alphaNum]],
    price: [0, [Validators.required, CustomValidators.positiv]],
    weight: [0, [Validators.required]],
  });
  id = -1;
  nameReserved = '';
  nameLength = 0;

  constructor() {
    inject(ActivatedRoute).paramMap.subscribe((paramMap) => {
      const idParam = paramMap.get('id');
      if (idParam) {
        this.id = Number(idParam);
      }
    });

    this.productForm.controls.name.valueChanges
      .pipe(map((value) => value?.split('').reverse().join('')))
      .subscribe((value) => (this.nameReserved = value ?? ''));

    this.productForm.controls.name.valueChanges.subscribe((value) => {
      this.nameLength = value ? value.length : 0;
    });
  }

  save() {
    const formValue = this.productForm.value;
    if (this.productForm.valid && formValue.name && formValue.price && formValue.weight) {
      const product: Partial<Product> = {
        name: formValue.name,
        price: formValue.price,
        weight: formValue.weight,
      };
      this.productData.newProduct(product).subscribe();
      this.productForm.reset();
    }
  }

  hasSaved() {
    const formValue = this.productForm.value;
    return !formValue.name && !formValue.price && !formValue.weight;
  }
}
