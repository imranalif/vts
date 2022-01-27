import { TestBed } from '@angular/core/testing';

import { ResellermapService } from './resellermap.service';

describe('ResellermapService', () => {
  let service: ResellermapService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ResellermapService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
