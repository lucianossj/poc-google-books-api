import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FoundBooksComponent } from './found-books/found-books.component';



@NgModule({
  declarations: [FoundBooksComponent],
  imports: [
    CommonModule
  ],
  exports: [
    FoundBooksComponent
  ]
})
export class FoundBooksModule { }
