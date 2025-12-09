import { Component, inject, output } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { Product } from '../product';

@Component({
  selector: 'stn-product-form',
  standalone: false,
  templateUrl: './product-form.html',
  styleUrl: './product-form.css',
})
export class ProductForm {
  saveProduct = output<Product>();

  // productForm = new FormGroup({
  //   name: new FormControl(),
  //   price: new FormControl(),
  //   weight: new FormControl(),
  // })

  private readonly fb = inject(FormBuilder);
  productForm = this.fb.group({
    name: [''],
    price: [0],
    weight: [0],
  });

  save() {
    const formValue = this.productForm.value;
    if (formValue.name && formValue.price && formValue.weight) {
      const product = new Product(-1, formValue.name, formValue.price, formValue.weight);
      this.saveProduct.emit(product);
      this.productForm.reset();
    }
  }
}
