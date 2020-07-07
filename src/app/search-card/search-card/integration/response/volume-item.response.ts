import { VolumeInfoResponse } from './volume-info.response';
import { VolumeSalesInfoResponse } from './volume-sales-info.response';
import { VolumeAccessInfoResponse } from './volume-access-info-response';
import { VolumeSearchInfoResponse } from './volume-search-info.response';

export class VolumeItemResponse {
    
    constructor(
        public kind?: string,
        public id?: string,
        public etag?: string,
        public selfLink?: string,
        public volumeInfo?: VolumeInfoResponse,
        public salesInfo?: VolumeSalesInfoResponse,
        public accessInfo?: VolumeAccessInfoResponse,
        public searchInfo?: VolumeSearchInfoResponse
    ) {}

}