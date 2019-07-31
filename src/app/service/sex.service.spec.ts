import { TestBed } from '@angular/core/testing';

import { SexService } from './sex.service';

describe('SexService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: SexService = TestBed.get(SexService);
    expect(service).toBeTruthy();
  });
});
