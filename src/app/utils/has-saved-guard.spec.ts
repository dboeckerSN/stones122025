import { TestBed } from '@angular/core/testing';
import { CanDeactivateFn } from '@angular/router';

import { hasSavedGuard } from './has-saved-guard';

describe('hasSavedGuard', () => {
  const executeGuard: CanDeactivateFn<unknown> = (...guardParameters) => 
      TestBed.runInInjectionContext(() => hasSavedGuard(...guardParameters));

  beforeEach(() => {
    TestBed.configureTestingModule({});
  });

  it('should be created', () => {
    expect(executeGuard).toBeTruthy();
  });
});
