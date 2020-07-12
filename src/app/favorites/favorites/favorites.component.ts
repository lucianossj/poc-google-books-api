import { Component, OnInit } from '@angular/core';
import { VolumeItemModel } from 'src/app/search-card/search-card/models/volume-item.model';
import { VolumeInfoModel } from 'src/app/search-card/search-card/models/volume-info.model';
import { FoundBooksEnum } from 'src/app/found-books/found-books/enum/found-books.enum';
import { FavoritesService } from '../services/favorites.service';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';

@Component({
  selector: 'app-favorites',
  templateUrl: './favorites.component.html',
  styleUrls: ['./favorites.component.css']
})
export class FavoritesComponent implements OnInit {

  public favorites: VolumeItemModel[];

  public selectedPage: number = 1;

  constructor(
    private service: FavoritesService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.getFavorites();
  }

  public getFavorites(): void {
    this.favorites = this.service.getFavorites();
  }

  public getVolumeThumbnail(volumeInfo: VolumeInfoModel): string {
    if (volumeInfo && volumeInfo.imageLinks && volumeInfo.imageLinks.thumbnail) {
      return volumeInfo.imageLinks.thumbnail;
    }
    return FoundBooksEnum.DEFAULT_THUMBNAIL;
  }

  public changePage(page: number): void {
    this.selectedPage = page;
  }

  public redirectToHome(): void {
    this.router.navigateByUrl('/home');
  }

}
