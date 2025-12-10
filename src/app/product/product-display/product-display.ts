import { Component, input, output } from '@angular/core';
import { Product } from '../product';
import { CommonModule } from '@angular/common';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInput } from '@angular/material/input';
import { MatButton } from '@angular/material/button';
import { NettoPipe } from '../../utils/pipes/netto-pipe';

@Component({
  selector: 'stn-product-display',
  templateUrl: './product-display.html',
  styleUrl: './product-display.css',
  imports: [CommonModule, MatFormFieldModule, MatInput, MatButton, NettoPipe],
})
export class ProductDisplay {
  product = input.required<Product>();
  priceChange = output<number>();
  showPrice = true;

  styleConfig = {
    borderStyle: 'dashed',
  };

  increasePrice(): void {
    this.product().price += 5;
    this.priceChange.emit(this.product().price);
  }

  togglePrice() {
    this.showPrice = !this.showPrice;
  }

  changePrice(price: number): void {
    this.product().price = price;
    this.priceChange.emit(this.product().price);
  }
}
