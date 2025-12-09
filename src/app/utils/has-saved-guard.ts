import { CanDeactivateFn } from '@angular/router';
import { ProductForm } from '../product/product-form/product-form';

export const hasSavedGuard: CanDeactivateFn<ProductForm> = (
  component,
  currentRoute,
  currentState,
  nextState
) => {
  if (component.hasSaved()) {
    return true;
  } else {
    return confirm('Du hast ungespeicherte Daten, willst du wirklich gehen?');
  }
};
