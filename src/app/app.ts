import { Component, signal } from '@angular/core';
import { Product } from './product/product';

@Component({
  selector: 'stn-root',
  templateUrl: './app.html',
  standalone: false,
  styleUrl: './app.css',
})
export class App {
  protected readonly title = signal('stones');
  productParent = new Product(0, 'Grabstein Granit', 12.56, 32.45);

  onPriceChange(price: number) {
    alert('Der neue Preis ist: ' + price);
  }
}
