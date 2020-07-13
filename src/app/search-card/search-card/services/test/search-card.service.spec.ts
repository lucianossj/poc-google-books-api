import { TestBed } from '@angular/core/testing';

import { SearchCardService } from '../search-card.service';
import { SearchCardRestService } from '../search-card-rest.service';
import { SearchCardStub as stub } from '../../test/search-card.stub';
import { of } from 'rxjs';

describe('SearchCardService', () => {
  let service: SearchCardService;
  let restService: SearchCardRestService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        SearchCardService,
        { provide: SearchCardRestService, useClass: stub }
      ]
    });
    restService = TestBed.get(SearchCardRestService);
    service = TestBed.get(SearchCardService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  describe('When the method [getVolumesBySearch] is called receiving by parameter a search', () => {
    beforeEach(() => {
      spyOn(restService, 'getVolumesBySearch').and.returnValue(of(stub.mockVolumeResponse()));
      service.getVolumesBySearch('harry+potter');
    });
    
    it('should map the return value from response to model', () => {
      service.getVolumesBySearch('harry+potter').subscribe(res => {
        expect(res).toEqual(stub.mockVolumeModel());
      });
    });
    it('should call [restService.getVolumesBySearch] with the search value', () => {
      expect(restService.getVolumesBySearch).toHaveBeenCalledWith('harry+potter');
    });
  });
  

});
