import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FavoritesComponent } from './favorites/favorites.component';
import { NgxPaginationModule } from 'ngx-pagination';
import { FavoritesService } from './services/favorites.service';
import { FoundBooksModule } from '../found-books/found-books.module';

@NgModule({
  declarations: [FavoritesComponent],
  imports: [
    CommonModule,
    NgxPaginationModule,
    FoundBooksModule
  ],
  providers: [
    FavoritesService
  ]
})
export class FavoritesModule { }
