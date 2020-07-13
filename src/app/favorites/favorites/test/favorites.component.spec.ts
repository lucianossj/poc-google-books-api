import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FavoritesComponent } from '../favorites.component';
import { FavoritesService } from '../../services/favorites.service';
import { Router } from '@angular/router';
import { FavoritesComponentStub as stub} from './favorites.component.stub';
import { FoundBooksEnum } from 'src/app/found-books/found-books/enum/found-books.enum';

describe('FavoritesComponent', () => {
  let component: FavoritesComponent;
  let fixture: ComponentFixture<FavoritesComponent>;

  let service: FavoritesService;
  let router: Router;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        FavoritesComponent
      ],
      providers: [
        FavoritesComponent,
        { provide: FavoritesService, useClass: stub },
        { provide: Router, useClass: stub }
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    component = TestBed.get(FavoritesComponent);
    service = TestBed.get(FavoritesService);
    router = TestBed.get(Router);

    fixture = TestBed.createComponent(FavoritesComponent);
    component = fixture.componentInstance;

    spyOn(service, 'getFavorites').and.returnValue([ stub.mockVolumeItemModel() ]);

    fixture.detectChanges();
  });
  
  it('should create', () => {
    expect(component).toBeTruthy();
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
  
  describe('When the method [changePage] is called receiving by parameter [23]', () => {
    it('should set the [component.selectedPage] to [23]', () => {
      component.changePage(23);
      expect(component.selectedPage).toEqual(23);
    });
  });

  describe('When the method [redirectToHome] is called', () => {
    it('should call [router.navigateByUrl] sendind by parameter [/home]', () => {
      
      spyOn(router, 'navigateByUrl');
      component.redirectToHome();

      expect(router.navigateByUrl).toHaveBeenCalledWith('/home');
    });
  });
  

});
