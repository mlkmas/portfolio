import { TestBed } from '@angular/core/testing';

import { PortfoiloInfoService } from './portfoilo-info.service';

describe('PortfoiloInfoService', () => {
  let service: PortfoiloInfoService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PortfoiloInfoService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
