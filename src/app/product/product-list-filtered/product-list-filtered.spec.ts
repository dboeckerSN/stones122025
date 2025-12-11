import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductListFiltered } from './product-list-filtered';

describe('ProductListFiltered', () => {
  let component: ProductListFiltered;
  let fixture: ComponentFixture<ProductListFiltered>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ProductListFiltered]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProductListFiltered);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
