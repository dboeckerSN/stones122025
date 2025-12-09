import { Component, signal } from '@angular/core';
import { Product } from './product/product';

@Component({
  selector: 'stn-root',
  templateUrl: './app.html',
  standalone: false,
  styleUrl: './app.css',
})
export class App {
  heute = new Date();
  protected readonly title = signal('stones');


  /*addProduct(product: Product) {
    this.products.unshift(product);
  }*/

  
}
