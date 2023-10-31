import { TestBed } from '@angular/core/testing';
import { CanActivateFn } from '@angular/router';

import { marqueGuard } from './marque.guard';

describe('marqueGuard', () => {
  const executeGuard: CanActivateFn = (...guardParameters) => 
      TestBed.runInInjectionContext(() => marqueGuard(...guardParameters));

  beforeEach(() => {
    TestBed.configureTestingModule({});
  });

  it('should be created', () => {
    expect(executeGuard).toBeTruthy();
  });
});
