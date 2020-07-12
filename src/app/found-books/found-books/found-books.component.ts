import { Component, OnInit, Input, OnChanges, Output, EventEmitter } from '@angular/core';

import { VolumeModel } from 'src/app/search-card/search-card/models/volume.model';
import { VolumeInfoModel } from 'src/app/search-card/search-card/models/volume-info.model';
import { FoundBooksEnum } from './enum/found-books.enum';

@Component({
  selector: 'app-found-books',
  templateUrl: './found-books.component.html',
  styleUrls: ['./found-books.component.css']
})
export class FoundBooksComponent implements OnInit {

  @Input()
  public search: VolumeModel;

  public selectedPage: number = 1;
  
  constructor() { }

  ngOnInit(): void {}

  public getVolumeThumbnail(volumeInfo: VolumeInfoModel): string {
    if (volumeInfo && volumeInfo.imageLinks && volumeInfo.imageLinks.thumbnail) {
      return volumeInfo.imageLinks.thumbnail;
    }
    return FoundBooksEnum.DEFAULT_THUMBNAIL;
  }

  public changePage(page: number): void {
    this.selectedPage = page;
  }

}
