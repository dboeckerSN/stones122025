import { Component, inject } from '@angular/core';
import { ProductData } from '../product-data';
import { AsyncPipe, NgClass } from '@angular/common';
import { ProductDisplay } from '../product-display/product-display';
import { MatCard } from '@angular/material/card';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'stn-product-list',
  templateUrl: './product-list.html',
  styleUrl: './product-list.css',
  imports: [NgClass, AsyncPipe, ProductDisplay, MatCard, RouterLink],
})
export class ProductList {
  products = inject(ProductData).getList();

  onPriceChange(price: number) {
    alert('Der neue Preis ist: ' + price);
  }
}
