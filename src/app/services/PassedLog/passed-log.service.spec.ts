import { TestBed } from '@angular/core/testing';

import { PassedLogService } from './passed-log.service';

describe('PassedLogService', () => {
  let service: PassedLogService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PassedLogService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
