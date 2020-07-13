import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FoundBooksComponent } from '../found-books.component';
import { BookDetailsModalStub as stub } from '../../book-details-modal/test/book-details-modal.component.stub';
import { FoundBooksEnum } from '../enum/found-books.enum';

describe('FoundBooksComponent', () => {
  let component: FoundBooksComponent;
  let fixture: ComponentFixture<FoundBooksComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FoundBooksComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FoundBooksComponent);
    component = fixture.componentInstance;
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

});
