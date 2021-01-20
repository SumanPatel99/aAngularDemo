import { TestBed } from '@angular/core/testing';

import { PartyMastersService } from './party-masters.service';

describe('PartyMastersService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: PartyMastersService = TestBed.get(PartyMastersService);
    expect(service).toBeTruthy();
  });
});
