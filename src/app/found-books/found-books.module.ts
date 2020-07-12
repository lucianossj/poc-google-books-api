import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ModalModule, BsModalService, BsModalRef } from 'ngx-bootstrap/modal';

import { FoundBooksComponent } from './found-books/found-books.component';
import { BookDetailsModalComponent } from './book-details-modal/book-details-modal.component';
import { NgxPaginationModule } from 'ngx-pagination';
import { BookService } from './book-details-modal/services/book.service';

@NgModule({
  declarations: [
    FoundBooksComponent,
    BookDetailsModalComponent
  ],
  imports: [
    CommonModule,
    ModalModule.forRoot(),
    NgxPaginationModule
  ],
  exports: [
    FoundBooksComponent,
    BookDetailsModalComponent
  ],
  providers: [
    BsModalService,
    BsModalRef,
    BookService
  ]
})
export class FoundBooksModule { }
