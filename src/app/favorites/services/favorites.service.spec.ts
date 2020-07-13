import { TestBed } from '@angular/core/testing';

import { FavoritesService } from './favorites.service';
import { LocalStorageEnum } from 'src/app/enum/local-storage.enum';
import { FavoritesComponentStub as stub } from '../favorites/test/favorites.component.stub'; 

describe('FavoritesService', () => {
  let service: FavoritesService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        FavoritesService
      ]
    });
  });

  beforeEach(() => {
    service = TestBed.get(FavoritesService);

    localStorage.setItem(LocalStorageEnum.FAVORITES, JSON.stringify([ stub.mockVolumeItemModel() ]));
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  describe('When the method [getFavorites] is called', () => {
    it('should return all the favorites books at the localstorage', () => {
      expect(service.getFavorites()).toEqual([stub.mockVolumeItemModel()]);
    });
  });
  

});
