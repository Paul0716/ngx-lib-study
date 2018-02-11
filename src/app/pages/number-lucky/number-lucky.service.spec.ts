import { TestBed, inject } from '@angular/core/testing';

import { NumberLuckyService } from './number-lucky.service';

describe('NumberLuckyService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [NumberLuckyService]
    });
  });

  it('should be created', inject([NumberLuckyService], (service: NumberLuckyService) => {
    expect(service).toBeTruthy();
  }));
});
