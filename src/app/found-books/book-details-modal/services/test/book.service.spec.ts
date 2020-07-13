import { TestBed } from '@angular/core/testing';

import { BookService } from '../book.service';
import { BookDetailsModalStub as stub } from '../../test/book-details-modal.component.stub';
import { LocalStorageEnum } from 'src/app/enum/local-storage.enum';
import { VolumeItemModel } from 'src/app/search-card/search-card/models/volume-item.model';

describe('BookService', () => {
  let service: BookService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        BookService
      ]
    });
    service = TestBed.get(BookService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  describe('When the method [addToFavorites] is called receiving by parameter a book', () => {
    beforeEach(() => {
      localStorage.setItem(LocalStorageEnum.FAVORITES, JSON.stringify([]));
      service.addToFavorites(stub.mockVolumeItemModel());
    });
    it('should add the book to the favorites', () => {  
      const favorites: VolumeItemModel[] = JSON.parse(localStorage.getItem(LocalStorageEnum.FAVORITES));
      expect(favorites.some(book => book.id == stub.mockVolumeItemModel().id)).toBeTruthy();
    });
  });

  describe('When the method [removeFromFavorites] is called receiving by parameter a book', () => {
    beforeEach(() => {
      localStorage.setItem(LocalStorageEnum.FAVORITES, JSON.stringify([ stub.mockVolumeItemModel(), {} ]));
      service.removeFromFavorites(stub.mockVolumeItemModel());
    });
    it('should remove the book from the favorites', () => {  
      const favorites: VolumeItemModel[] = JSON.parse(localStorage.getItem(LocalStorageEnum.FAVORITES));
      expect(favorites.some(book => book.id == stub.mockVolumeItemModel().id)).toBeFalsy();
    });
  });

  describe('When the method [verifyBookIsAlreadyFavorite] is called', () => {
    describe('And the book is already at the favorites books', () => {
      it('should return true', () => {
        localStorage.setItem(LocalStorageEnum.FAVORITES, JSON.stringify([stub.mockVolumeItemModel()]));
        expect(service.verifyBookIsAlreadyFavorite(stub.mockVolumeItemModel())).toBeTruthy();  
      });
    });

  });

});
