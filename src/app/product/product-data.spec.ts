import { TestBed } from '@angular/core/testing';

import { ProductData } from './product-data';
import { Product } from './product';
import { HttpClient } from '@angular/common/http';
import { firstValueFrom, of } from 'rxjs';
const mockProduct = new Product(1, 'test', 15, 20);
const api = 'https://stone-server.onrender.com/products';
describe('ProductData', () => {
  let service: ProductData;
  let mockHttpClient: Partial<HttpClient>;

  beforeEach(() => {
    mockHttpClient = {
      get: vi.fn().mockReturnValue(of([mockProduct])),
      post: vi.fn().mockReturnValue(of()),
    };

    TestBed.configureTestingModule({
      providers: [{ provide: HttpClient, useValue: mockHttpClient }],
    });
    service = TestBed.inject(ProductData);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('"getList" should return product list', () => {
    // given + when
    service.getList().subscribe((productList) => {
      // then
      expect(productList[0]).toBe(mockProduct);
      expect(mockHttpClient.get).toHaveBeenCalledWith(api);
    });
  });

  it('"getList" should return product list async await', async () => {
    // given + when
    const productList = await firstValueFrom(service.getList());

    // then
    expect(productList[0]).toBe(mockProduct);
    expect(mockHttpClient.get).toHaveBeenCalledWith(api);
  });

  it('"newProduct" should add product to product list', () => {
    // given + when
    service.newProduct(mockProduct).subscribe(() => {
      // then
      expect(mockHttpClient.post).toHaveBeenCalledWith(api, mockProduct);
    });
  });
});
