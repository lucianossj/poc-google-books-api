import { TestBed } from '@angular/core/testing';

import { SearchCardRestService } from '../search-card-rest.service';

describe('SearchCardRestService', () => {
  let service: SearchCardRestService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SearchCardRestService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
