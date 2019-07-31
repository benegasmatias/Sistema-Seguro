import { TestBed } from '@angular/core/testing';

import { TypepeopleService } from './typepeople.service';

describe('TypepeopleService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: TypepeopleService = TestBed.get(TypepeopleService);
    expect(service).toBeTruthy();
  });
});
