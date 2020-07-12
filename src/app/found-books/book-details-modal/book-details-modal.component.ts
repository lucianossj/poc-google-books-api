import { Component, OnInit, TemplateRef, Input, Output, EventEmitter } from '@angular/core';

import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';
import * as moment from 'moment';

import { VolumeInfoModel } from 'src/app/search-card/search-card/models/volume-info.model';
import { FoundBooksEnum } from '../found-books/enum/found-books.enum';
import { VolumeItemModel } from 'src/app/search-card/search-card/models/volume-item.model';
import { MaturityRatingApiEnum } from './enum/maturity-rating-api.enum';
import { MaturityRatingEnum } from './enum/maturity-rating.enum';
import { BookService } from './services/book.service';

@Component({
  selector: 'app-book-details-modal',
  templateUrl: './book-details-modal.component.html',
  styleUrls: ['./book-details-modal.component.css']
})
export class BookDetailsModalComponent implements OnInit {

  public modal: BsModalRef;

  @Input()
  public item: VolumeItemModel;

  @Output()
  public storageChanged: EventEmitter<void> = new EventEmitter<void>();

  constructor(
    private bookService: BookService,
    private modalService: BsModalService
  ) { }

  ngOnInit(): void {
  }

  public openModal(template: TemplateRef<any>): void {
    const initialState = { class: 'modal-md' };
    this.modal = this.modalService.show(template, initialState);
  }

  public getVolumeThumbnail(volumeInfo: VolumeInfoModel): string {
    if (volumeInfo && volumeInfo.imageLinks && volumeInfo.imageLinks.thumbnail) {
      return volumeInfo.imageLinks.thumbnail;
    }
    return FoundBooksEnum.DEFAULT_THUMBNAIL;
  }

  public formatDate(date: string): string {
    return moment(date).format('DD/MM/YYYY')
  }

  public getMaturityRating(matureRating: string): string {
    switch(matureRating) {
      case(MaturityRatingApiEnum.MATURE):
        return MaturityRatingEnum.MATURE;
      case(MaturityRatingApiEnum.NOT_MATURE):
        return MaturityRatingEnum.NOT_MATURE;
      default:
        return MaturityRatingEnum.NOT_MATURE; 
    }
  }

  public verifyIsMature(maturityRating: string): boolean {
    return maturityRating == MaturityRatingApiEnum.MATURE;
  }

  public verifyIsNotMature(maturityRating: string): boolean {
    return maturityRating == MaturityRatingApiEnum.NOT_MATURE;
  }

  public addToFavorites(item: VolumeItemModel): void {
    this.bookService.addToFavorites(item);
    this.storageChanged.emit();
  }
  
  public removeFromFavorites(item: VolumeItemModel): void {
    this.bookService.removeFromFavorites(item);
    this.storageChanged.emit();
  }

  public verifyBookIsAlreadyFavorite(item: VolumeItemModel): boolean {
    return this.bookService.verifyBookIsAlreadyFavorite(item);
  }

}
