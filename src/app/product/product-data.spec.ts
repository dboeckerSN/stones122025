import { TestBed } from '@angular/core/testing';

import { ProductData } from './product-data';
import { Product } from './product';

describe('ProductData', () => {
  let service: ProductData;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ProductData);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('"getList" should return product list', () => {
    // given + when + then
    // expect(service.getList()[0].id).toBe(0);
  });

  it('"newProduct" should add product to product list', () => {
    // given
    const product = new Product(-1, 'test', 10, 5);

    // when
    service.newProduct(product);

    // then
    // expect(service.getList()[0].id).toBe(-1);
  });
});
