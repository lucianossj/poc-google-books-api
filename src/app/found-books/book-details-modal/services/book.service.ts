import { Injectable } from '@angular/core';
import { VolumeItemModel } from 'src/app/search-card/search-card/models/volume-item.model';
import { LocalStorageEnum } from 'src/app/enum/local-storage.enum';

@Injectable()
export class BookService {

  constructor() { }

  public addToFavorites(item: VolumeItemModel): void {
    let favorites: VolumeItemModel[] = []; 
    if (localStorage.getItem(LocalStorageEnum.FAVORITES)) {
      favorites = JSON.parse(localStorage.getItem(LocalStorageEnum.FAVORITES));
    }
    
    if (!this.verifyBookIsAlreadyFavorite(item)) {
      favorites.push(item);
      localStorage.setItem(LocalStorageEnum.FAVORITES, JSON.stringify(favorites));
    }

  }

  public removeFromFavorites(item: VolumeItemModel): void {
    let favorites: VolumeItemModel[] = []; 
    if (localStorage.getItem(LocalStorageEnum.FAVORITES)) {
      favorites = JSON.parse(localStorage.getItem(LocalStorageEnum.FAVORITES));
    }

    favorites = favorites.filter(book => book.id != item.id);
    localStorage.setItem(LocalStorageEnum.FAVORITES, JSON.stringify(favorites));
  }

  public verifyBookIsAlreadyFavorite(item: VolumeItemModel): boolean {
    let favorites: VolumeItemModel[] = []; 
    if (localStorage.getItem(LocalStorageEnum.FAVORITES)) {
      favorites = JSON.parse(localStorage.getItem(LocalStorageEnum.FAVORITES));
    }
    
    return favorites.some(book => book.id == item.id);
  }

}
