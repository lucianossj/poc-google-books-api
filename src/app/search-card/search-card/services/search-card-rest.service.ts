import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Observable } from 'rxjs';

import { EndpointEnum } from '../../../enum/endpoint.enum';
import { VolumeResponse } from '../integration/response/volume.response';

@Injectable()
export class SearchCardRestService {

  constructor(
    private http: HttpClient
  ) { }

  public getVolumesBySearch(search: string): Observable<VolumeResponse> {
    return this.http.get<VolumeResponse>(`${EndpointEnum.VOLUMES}?q=${search}`)
  }
}
