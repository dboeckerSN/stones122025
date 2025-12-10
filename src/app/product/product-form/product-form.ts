import { Component, inject } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Product } from '../product';
import { CustomValidators } from '../../utils/validators/custom-validators';
import { ActivatedRoute } from '@angular/router';
import { ProductData } from '../product-data';

@Component({
  selector: 'stn-product-form',
  standalone: false,
  templateUrl: './product-form.html',
  styleUrl: './product-form.css',
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

  constructor() {
    inject(ActivatedRoute).paramMap.subscribe((paramMap) => {
      const idParam = paramMap.get('id');
      if (idParam) {
        this.id = Number(idParam);
      }
    });
  }

  save() {
    const formValue = this.productForm.value;
    if (this.productForm.valid && formValue.name && formValue.price && formValue.weight) {
      const product = new Product(this.id, formValue.name, formValue.price, formValue.weight);
      this.productData.newProduct(product);
      this.productForm.reset();
    }
  }

  hasSaved() {
    const formValue = this.productForm.value;
    return !formValue.name && !formValue.price && !formValue.weight;
  }
}
