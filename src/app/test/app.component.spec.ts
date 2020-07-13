import { TestBed, async } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { AppComponent } from '../app.component';
import { LocalStorageEnum } from '../enum/local-storage.enum';

describe('AppComponent', () => {

  let app: AppComponent;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        RouterTestingModule
      ],
      declarations: [
        AppComponent
      ],
    }).compileComponents()
    .then(() => {
      const fixture = TestBed.createComponent(AppComponent);
      app = fixture.componentInstance;
    });
  }));
  
  it('should create the app', () => {
    expect(app).toBeTruthy();
  });

  describe('When the method [isUserLogged] is called', () => {
    describe('and there is a user logged in', () => {
      beforeEach(() => {
        localStorage.setItem(LocalStorageEnum.USER, '{"user": "test"}');
      });
      it('should return true', () => {
        expect(app.isUserLogged()).toBeTruthy();
      });
    });

    describe('and there is not a user logged in', () => {
      beforeEach(() => {
        localStorage.removeItem(LocalStorageEnum.USER);
      });
      it('should return true', () => {
        expect(app.isUserLogged()).toBeFalsy();
      });
    });
  });
  

});
