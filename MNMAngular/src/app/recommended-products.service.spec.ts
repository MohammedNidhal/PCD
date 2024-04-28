import { TestBed } from '@angular/core/testing';

import { RecommendedProductsService } from './recommended-products.service';

describe('RecommendedProductsService', () => {
  let service: RecommendedProductsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RecommendedProductsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
