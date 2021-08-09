import { TestBed } from '@angular/core/testing';

import { CusmapService } from './cusmap.service';

describe('CusmapService', () => {
  let service: CusmapService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CusmapService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
