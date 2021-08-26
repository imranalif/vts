import { TestBed } from '@angular/core/testing';

import { DateformateService } from './dateformate.service';

describe('DateformateService', () => {
  let service: DateformateService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DateformateService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
