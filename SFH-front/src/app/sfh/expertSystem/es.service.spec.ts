import { TestBed } from '@angular/core/testing';

import { ESService } from './es.service';

describe('ESService', () => {
  let service: ESService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ESService);
  });

  xit('should be created', () => {
    expect(service).toBeTruthy();
  });
});
