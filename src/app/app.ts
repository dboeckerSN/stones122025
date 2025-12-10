import { DatePipe, UpperCasePipe } from '@angular/common';
import { Component, signal } from '@angular/core';
import { MatToolbar } from '@angular/material/toolbar';
import { RouterLink, RouterOutlet } from '@angular/router';

@Component({
  selector: 'stn-root',
  templateUrl: './app.html',
  styleUrl: './app.css',
  imports: [MatToolbar, RouterOutlet, RouterLink, DatePipe, UpperCasePipe],
})
export class App {
  heute = new Date();
  protected readonly title = signal('stones');

  /*addProduct(product: Product) {
    this.products.unshift(product);
  }*/
}
