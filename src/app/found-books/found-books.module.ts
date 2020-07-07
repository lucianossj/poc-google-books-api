import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ModalModule, BsModalService, BsModalRef } from 'ngx-bootstrap/modal';

import { FoundBooksComponent } from './found-books/found-books.component';
import { BookDetailsModalComponent } from './book-details-modal/book-details-modal.component';

@NgModule({
  declarations: [
    FoundBooksComponent,
    BookDetailsModalComponent
  ],
  imports: [
    CommonModule,
    ModalModule.forRoot()
  ],
  exports: [
    FoundBooksComponent
  ],
  providers: [
    BsModalService,
    BsModalRef
  ]
})
export class FoundBooksModule { }
