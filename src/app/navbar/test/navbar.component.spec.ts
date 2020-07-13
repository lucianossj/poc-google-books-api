import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NavbarComponent } from '../navbar.component';
import { AuthService } from 'src/app/guards/auth.service';
import { AppModule } from 'src/app/app.module';
import { NavbarComponentStub as stub } from './navbar.component.stub';
import { LocalStorageEnum } from 'src/app/enum/local-storage.enum';

describe('NavbarComponent', () => {
  let component: NavbarComponent;
  let fixture: ComponentFixture<NavbarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NavbarComponent ],
      providers: [
        NavbarComponent,
        { provide: AuthService }
      ],
      imports: [
        AppModule
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NavbarComponent);
    component = fixture.componentInstance;
    localStorage.setItem(LocalStorageEnum.USER, JSON.stringify(stub.mockUserModel()));

    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  describe('When the method [toggleNavbar] is called', () => {
    it('should invert the [navbarOpen] value', () => {
      component.navbarOpen = true;
      component.toggleNavbar();
      expect(component.navbarOpen).toBeFalsy();
    });
  });
  
  describe('When the method [getUserInfo] is called', () => {
    it('should set the [component.user] with the local storage value', () => {
      component.getUserInfo();
      expect(component.user).toEqual(stub.mockUserModel());
    });
  });
  

});
