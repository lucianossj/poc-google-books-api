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
    return this.http.get<VolumeResponse>(`${EndpointEnum.VOLUMES}?q=${search}&maxResults=40`)
  }

  public getVolumesBySearchAndPage(search: string, selectedPage: number): Observable<VolumeResponse> {
    return this.http.get<VolumeResponse>(`${EndpointEnum.VOLUMES}?q=${search}&startIndex=${(selectedPage + 1) * 10}&maxResults=10`)
  }

}
