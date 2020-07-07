import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { SearchCardService } from './services/search-card.service';

@Component({
  selector: 'app-search-card',
  templateUrl: './search-card.component.html',
  styleUrls: ['./search-card.component.css']
})
export class SearchCardComponent implements OnInit {

  public searchForm: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private service: SearchCardService
  ) { }

  ngOnInit(): void {
    this.generateForm();
  }

  public searchVolumes(): void {
    const search = this.searchForm.getRawValue().search;
    this.service.getVolumesBySearch(search).subscribe(
      res => console.log(res)
    );
  }

  public generateForm(): void {
    this.searchForm = this.formBuilder.group({
      search: [null, Validators.required]
    });
  }

}
