import { Component, OnInit, Output, EventEmitter, OnChanges, Input } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { SearchCardService } from './services/search-card.service';
import { VolumeModel } from './models/volume.model';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-search-card',
  templateUrl: './search-card.component.html',
  styleUrls: ['./search-card.component.css']
})
export class SearchCardComponent implements OnInit, OnChanges {

  public searchForm: FormGroup;

  @Output()
  public search: EventEmitter<Observable<VolumeModel>> = new EventEmitter<Observable<VolumeModel>>();

  constructor(
    private formBuilder: FormBuilder,
    private service: SearchCardService
  ) { }

  ngOnInit(): void {
    this.generateForm();
  }

  ngOnChanges(): void {
    this.searchVolumes();
  }

  public searchVolumes(): void {
    if (this.searchForm) {
      const search = this.searchForm.getRawValue().search;
      this.search.emit(this.service.getVolumesBySearch(search));
    }
  }

  public generateForm(): void {
    this.searchForm = this.formBuilder.group({
      search: [null, Validators.required]
    });
  }

}
