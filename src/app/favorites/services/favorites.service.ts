import { Injectable } from '@angular/core';

import { VolumeItemModel } from 'src/app/search-card/search-card/models/volume-item.model';
import { LocalStorageEnum } from 'src/app/enum/local-storage.enum';

@Injectable()
export class FavoritesService {

  constructor() { }

  public getFavorites(): VolumeItemModel[] {
    return JSON.parse(localStorage.getItem(LocalStorageEnum.FAVORITES));
  }

}
