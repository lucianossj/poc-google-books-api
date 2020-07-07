import { Injectable } from '@angular/core';

import { map } from 'rxjs/operators';

import { SearchCardRestService } from './search-card-rest.service';
import { Observable } from 'rxjs';
import { VolumeModel } from '../models/volume.model';
import { VolumeMapper } from '../mapper/volume.mapper';

@Injectable()
export class SearchCardService {

  constructor(
    private restService: SearchCardRestService
  ) { }

  public getVolumesBySearch(search: string): Observable<VolumeModel> {
    return this.restService.getVolumesBySearch(search).pipe(
      map(volume => VolumeMapper.mapVolumeResponseToModel(volume))
    );
  }
}
