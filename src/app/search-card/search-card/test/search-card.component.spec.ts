import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchCardComponent } from '../search-card.component';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';
import { SearchCardService } from '../services/search-card.service';
import { SearchCardModule } from '../../search-card.module';
import { SearchCardStub as stub } from './search-card.stub';
import { of } from 'rxjs';

describe('SearchCardComponent', () => {
  let component: SearchCardComponent;
  let fixture: ComponentFixture<SearchCardComponent>;

  let service: SearchCardService;
  let formBuilder: FormBuilder = new FormBuilder();

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SearchCardComponent ],
      providers: [
        SearchCardComponent,
        { provide: FormBuilder, useValue: formBuilder },
        { provide: SearchCardService, useClass: stub }
      ],
      imports: [
        SearchCardModule
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    service = TestBed.get(SearchCardService);
    formBuilder = TestBed.get(FormBuilder);

    fixture = TestBed.createComponent(SearchCardComponent);
    component = fixture.componentInstance;

    component.searchForm = formBuilder.group({
      search: [null, Validators.required]
    });

    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  describe('When the method [ngOnChanges] is called', () => {
    it('should call [component.searchVolumes]', () => {
      spyOn(component, 'searchVolumes');
      component.ngOnChanges();
      expect(component.searchVolumes).toHaveBeenCalled();
    });
  });
  
  describe('When the method [searchVolumes] is called', () => {
    it('should emit an event with the found volumes according with the search', () => {
      spyOn(service, 'getVolumesBySearch').and.returnValue(of(stub.mockVolumeModel()));
      spyOn(component.search, 'emit');
      component.searchVolumes();

      expect(component.search.emit).toHaveBeenCalled();
    });
  });
  

});
