import { Routes } from '@angular/router';
import { ProductList } from './product-list/product-list';
import { ProductForm } from './product-form/product-form';
import { hasSavedGuard } from '../utils/guards/has-saved-guard';
import { ProductListFiltered } from './product-list-filtered/product-list-filtered';

export const productRoutes: Routes = [
  {
    path: 'products',
    children: [
      { path: '', component: ProductList },
      { path: 'filtered', component: ProductListFiltered},
      { path: 'new', component: ProductForm, canDeactivate: [hasSavedGuard] },
      { path: 'new/:id', component: ProductForm, canDeactivate: [hasSavedGuard] },
    ],
  },
];
