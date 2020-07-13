import { TestBed } from '@angular/core/testing';

import { SearchCardRestService } from '../search-card-rest.service';
import { SearchCardStub as stub } from '../../test/search-card.stub';
import { HttpClient } from '@angular/common/http';
import { of } from 'rxjs';

describe('SearchCardRestService', () => {
  let service: SearchCardRestService;
  let http: HttpClient;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        SearchCardRestService,
        { provide: HttpClient, useClass: stub }
      ]
    });
    http = TestBed.get(HttpClient);
    service = TestBed.get(SearchCardRestService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  describe('When the method [getVolumesBySearch] is called receiving by parameter a search', () => {
    it('should return a response with the search result', () => {
      spyOn(http, 'get').and.returnValue(of(stub.mockVolumeResponse()));
      service.getVolumesBySearch('harry+potter').subscribe(
        res => {
          expect(res).toEqual(stub.mockVolumeResponse())
        }
      );
    });
  });
  

});
