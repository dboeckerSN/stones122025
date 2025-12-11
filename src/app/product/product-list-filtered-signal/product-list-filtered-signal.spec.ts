import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductListFilteredSignal } from './product-list-filtered-signal';

describe('ProductListFilteredSignal', () => {
  let component: ProductListFilteredSignal;
  let fixture: ComponentFixture<ProductListFilteredSignal>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ProductListFilteredSignal]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProductListFilteredSignal);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
