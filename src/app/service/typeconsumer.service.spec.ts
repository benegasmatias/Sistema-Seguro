import { TestBed } from '@angular/core/testing';

import { TypeconsumerService } from './typeconsumer.service';

describe('TypeconsumerService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: TypeconsumerService = TestBed.get(TypeconsumerService);
    expect(service).toBeTruthy();
  });
});
