import { TestBed } from '@angular/core/testing';

import { WorkhourService } from './workhour.service';

describe('WorkhourService', () => {
  let service: WorkhourService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(WorkhourService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
