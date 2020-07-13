import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BookDetailsModalComponent } from '../book-details-modal.component';
import { BookService } from '../services/book.service';
import { BookDetailsModalStub as stub } from './book-details-modal.component.stub';
import { BsModalService } from 'ngx-bootstrap/modal';
import { FoundBooksEnum } from '../../found-books/enum/found-books.enum';
import { LocalStorageEnum } from 'src/app/enum/local-storage.enum';

describe('BookDetailsModalComponent', () => {
  let component: BookDetailsModalComponent;
  let fixture: ComponentFixture<BookDetailsModalComponent>;

  let service: BookService;
  let modalService: BsModalService;

  let returnAny: any;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BookDetailsModalComponent ],
      providers: [
        { provide: BookService, useClass: stub },
        { provide: BsModalService, useClass: stub }
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    service = TestBed.get(BookService);
    modalService = TestBed.get(BsModalService);

    fixture = TestBed.createComponent(BookDetailsModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  describe('When the method [openModal] is called', () => {
    it('should call [modalService.show] sendind by parameter [stub.mockTemplateRef(), stub.mockInitialState()]', () => {
      spyOn(modalService, 'show');
      component.openModal(stub.mockTemplateRef());
      expect(modalService.show).toHaveBeenCalledWith(stub.mockTemplateRef(), stub.mockInitialState());
    });
  });

  describe('When the method [getVolumeThumbnail] is called', () => {
    describe('and there is a thumbnail', () => {
      it('should return the volume thumbnail', () => {
        expect(component.getVolumeThumbnail(stub.mockVolumeInfoModel())).toEqual('harry.png');
      });
    });

    describe('and there is not a thumbnail', () => {
      it('should return the default volume thumbnail', () => {
        expect(component.getVolumeThumbnail({})).toEqual(FoundBooksEnum.DEFAULT_THUMBNAIL);
      });
    });
  });
  
  describe('When the method [formatDate] is called receiving by parameter [2020-01-01]', () => {
    it('should return [01/01/2020]', () => {
      expect(component.formatDate('2020-01-01')).toEqual('01/01/2020');
    });
  });
  
  describe('When the method [getMaturiryRating] is called', () => {
    
    describe('and the maturity rating is [MATURE]', () => {
      it('should return [Adulto]', () => {
        expect(component.getMaturityRating('MATURE')).toEqual('Adulto');
      });
    });
    
    describe('and the maturity rating is [NOT_MATURE]', () => {
      it('should return [Livre]', () => {
        expect(component.getMaturityRating('NOT_MATURE')).toEqual('Livre');
      });
    });

    describe('and the maturity rating is not [MATURE] or [NOT_MATURE]', () => {
      it('should return [Livre]', () => {
        expect(component.getMaturityRating('OTHER')).toEqual('Livre');
      });
    });

  });

  describe('When the method [verifyIsMature] is called', () => {
    
    describe('and the maturity rating is [MATURE]', () => {
      it('should return true', () => {
        expect(component.verifyIsMature('MATURE')).toBeTruthy();
      });
    });
    
    describe('and the maturity rating is not [MATURE]', () => {
      it('should return false', () => {
        expect(component.verifyIsMature('NOT_MATURE')).toBeFalsy();
      });
    });

  });
  
  describe('When the method [verifyIsNotMature] is called', () => {
    
    describe('and the maturity rating is [NOT_MATURE]', () => {
      it('should return true', () => {
        expect(component.verifyIsNotMature('NOT_MATURE')).toBeTruthy();
      });
    });
    
    describe('and the maturity rating is not [NOT_MATURE]', () => {
      it('should return false', () => {
        expect(component.verifyIsNotMature('MATURE')).toBeFalsy();
      });
    });

  });

  describe('When the method [addToFavorites] is called receiving by parameter [stub.mockVolumeItemModel]', () => {
    beforeEach(() => {
      spyOn(service, 'addToFavorites');
      spyOn(component.storageChanged, 'emit');
      
      component.addToFavorites(stub.mockVolumeItemModel());
    });
    
    it('should call [service.addToFavorites] sending by parameter the volume to be added to Favorites', () => {
      expect(service.addToFavorites).toHaveBeenCalledWith(stub.mockVolumeItemModel());
    });
    it('should emit and event that inform that the localstorage have been changed', () => {
      expect(component.storageChanged.emit).toHaveBeenCalled();
    });
    
  });
  
  describe('When the method [removeFromFavorites] is called receiving by parameter [stub.mockVolumeItemModel]', () => {
    beforeEach(() => {
      spyOn(service, 'removeFromFavorites');
      spyOn(component.storageChanged, 'emit');
      
      component.removeFromFavorites(stub.mockVolumeItemModel());
    });
    
    it('should call [service.removeFromFavorites] sending by parameter the volume to be removed from the Favorites', () => {
      expect(service.removeFromFavorites).toHaveBeenCalledWith(stub.mockVolumeItemModel());
    });
    it('should emit and event that inform that the localstorage have been changed', () => {
      expect(component.storageChanged.emit).toHaveBeenCalled();
    });    
  });

  describe('When the method [verifyBookIsAlreadyFavorite] is called', () => {
    
    beforeEach(() => {
      localStorage.setItem(LocalStorageEnum.FAVORITES, JSON.stringify([stub.mockVolumeItemModel()]));
      spyOn(service, 'verifyBookIsAlreadyFavorite');
      returnAny = component.verifyBookIsAlreadyFavorite(stub.mockVolumeItemModel());
    });

    describe('And the book is already at the favorites books', () => {
      it('should call [service.verifyBookIsAlreadyFavorite] sending by parameter the book to be verified', () => {
        expect(service.verifyBookIsAlreadyFavorite).toHaveBeenCalled();  
      });
    });

  });

});
