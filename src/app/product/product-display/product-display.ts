import { Component } from '@angular/core';
import { Product } from '../product';

@Component({
  selector: 'stn-product-display',
  standalone: false,
  templateUrl: './product-display.html',
  styleUrl: './product-display.css',
})
export class ProductDisplay {
  product = new Product(0, 'Grabstein Granit', 12.56, 32.45);

  increasePrice(): void {
    this.product.price += 5;
    alert('Der neue Preis ist: ' + this.product.price);
  }
}
