import { VolumeInfoModel } from './volume-info.model';
import { VolumeSalesInfoModel } from './volume-sales-info.model';
import { VolumeAccessInfoModel } from './volume-access-info.model';
import { VolumeSearchInfoModel } from './volume-search-info.model';

export class VolumeItemModel {
    
    constructor(
        public kind?: string,
        public id?: string,
        public etag?: string,
        public selfLink?: string,
        public volumeInfo?: VolumeInfoModel,
        public salesInfo?: VolumeSalesInfoModel,
        public accessInfo?: VolumeAccessInfoModel,
        public searchInfo?: VolumeSearchInfoModel
    ) {}

}