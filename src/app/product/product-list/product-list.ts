import { Component, inject } from '@angular/core';
import { ProductData } from '../product-data';

@Component({
  selector: 'stn-product-list',
  standalone: false,
  templateUrl: './product-list.html',
  styleUrl: './product-list.css',
})
export class ProductList {
  products = inject(ProductData).getList();

  onPriceChange(price: number) {
    alert('Der neue Preis ist: ' + price);
  }
}
