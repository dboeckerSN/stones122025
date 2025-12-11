import { AsyncPipe, CurrencyPipe, NgClass } from '@angular/common';
import { Component, inject } from '@angular/core';
import { ProductDisplay } from '../product-display/product-display';
import { MatCard } from '@angular/material/card';
import { RouterLink } from '@angular/router';
import { ProductData } from '../product-data';
import { FormControl, ReactiveFormsModule } from '@angular/forms';
import { MatFormField, MatLabel } from '@angular/material/form-field';
import { MatInput } from '@angular/material/input';
import { BehaviorSubject, debounceTime, of, pipe, startWith, switchMap, tap } from 'rxjs';
import { Product } from '../product';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { ProductForm } from '../product-form/product-form';

@Component({
  selector: 'stn-product-list-filtered',
  templateUrl: './product-list-filtered.html',
  styleUrl: './product-list-filtered.css',
  imports: [
    ReactiveFormsModule,
    NgClass,
    AsyncPipe,
    ProductDisplay,
    MatCard,
    RouterLink,
    MatFormField,
    MatLabel,
    MatInput,
    CurrencyPipe,
    ProductForm,
  ],
})
export class ProductListFiltered {
  readonly #productData = inject(ProductData);
  products$ = new BehaviorSubject<Product[]>([]);
  nameFilterCtrl = new FormControl('', { nonNullable: true });
  totalPrice = 0;

  constructor() {
    this.nameFilterCtrl.valueChanges
      .pipe(
        startWith(this.nameFilterCtrl.value),
        switchMap((nameFilter) => this.#productData.getListFiltered(nameFilter)),
        takeUntilDestroyed()
      )
      .subscribe((products) => this.products$.next(products));

    this.products$.pipe(takeUntilDestroyed()).subscribe((products) => {
      this.totalPrice = products
        .map((product) => product.price)
        .reduce((prev, curr) => prev + curr, 0);
    });
  }

  onSaveProduct() {
    this.#productData
      .getListFiltered(this.nameFilterCtrl.value)
      .subscribe((products) => this.products$.next(products));
  }
}
