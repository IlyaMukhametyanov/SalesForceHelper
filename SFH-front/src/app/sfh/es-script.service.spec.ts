import { TestBed } from '@angular/core/testing';

import { EsScriptService } from './es-script.service';

describe('EsScriptService', () => {
  let service: EsScriptService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(EsScriptService);
  });

  xit('should be created', () => {
    expect(service).toBeTruthy();
  });
});
