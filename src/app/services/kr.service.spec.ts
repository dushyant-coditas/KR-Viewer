import { TestBed } from '@angular/core/testing';

import { KrService } from './kr.service';

describe('KrService', () => {
  let service: KrService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(KrService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
