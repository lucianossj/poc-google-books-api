import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { SearchCardComponent } from './search-card/search-card.component';
import { SearchCardService } from './search-card/services/search-card.service';
import { SearchCardRestService } from './search-card/services/search-card-rest.service';

@NgModule({
  declarations: [
    SearchCardComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule
  ],
  exports: [
    SearchCardComponent
  ],
  providers: [
    SearchCardService,
    SearchCardRestService 
  ]
})
export class SearchCardModule { }
