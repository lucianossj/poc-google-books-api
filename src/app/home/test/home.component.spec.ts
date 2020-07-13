import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeComponent } from '../home.component';
import {HomeComponentStub as stub } from './home.component.stub';
import { of } from 'rxjs';

describe('HomeComponent', () => {
  let component: HomeComponent;
  let fixture: ComponentFixture<HomeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HomeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  describe('When the method [searchedVolumes] is called receiving a search by parameter', () => {
    it('should set the search value to [component.search]', () => {
      component.searchedVolumes(of(stub.mockVolumeModel()));
      component.search.subscribe(
        res => expect(res).toEqual(stub.mockVolumeModel())
      );
    });
  });
  

});
