import { AsyncPipe, CurrencyPipe, NgClass } from '@angular/common';
import { Component, computed, inject, signal } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ProductDisplay } from '../product-display/product-display';
import { MatCard } from '@angular/material/card';
import { MatFormField, MatLabel } from '@angular/material/form-field';
import { MatInput } from '@angular/material/input';
import { ProductForm } from '../product-form/product-form';
import { ProductData } from '../product-data';
import { MatProgressBar } from '@angular/material/progress-bar';

@Component({
  selector: 'stn-product-list-filtered-signal',
  imports: [
    FormsModule,
    NgClass,
    ProductDisplay,
    MatCard,
    MatFormField,
    MatLabel,
    MatInput,
    CurrencyPipe,
    ProductForm,
    MatProgressBar,
  ],
  templateUrl: './product-list-filtered-signal.html',
  styleUrl: './product-list-filtered-signal.css',
})
export class ProductListFilteredSignal {
  nameFilterCtrl = signal('');
  readonly productResource = inject(ProductData).getListFilteredResource(this.nameFilterCtrl);

  totalPrice = computed(() =>
    this.productResource
      .value()
      .map((product) => product.price)
      .reduce((prev, curr) => prev + curr, 0)
  );

  onSaveProduct() {
    this.productResource.reload();
  }
}
