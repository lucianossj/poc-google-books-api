import { Component, OnInit, Input, OnChanges } from '@angular/core';
import { VolumeModel } from 'src/app/search-card/search-card/models/volume.model';
import { Observable } from 'rxjs';
import { VolumeInfoModel } from 'src/app/search-card/search-card/models/volume-info.model';
import { FoundBooksEnum } from './enum/found-books.enum';

@Component({
  selector: 'app-found-books',
  templateUrl: './found-books.component.html',
  styleUrls: ['./found-books.component.css']
})
export class FoundBooksComponent implements OnInit, OnChanges {

  @Input()
  public search: Observable<VolumeModel>;

  constructor() { }

  ngOnInit(): void {
  }

  ngOnChanges(): void {
  }

  public getVolumeThumbnail(volumeInfo: VolumeInfoModel): string {
    if (volumeInfo && volumeInfo.imageLinks && volumeInfo.imageLinks.thumbnail) {
      return volumeInfo.imageLinks.thumbnail;
    }
    return FoundBooksEnum.DEFAULT_THUMBNAIL;
  }

}
