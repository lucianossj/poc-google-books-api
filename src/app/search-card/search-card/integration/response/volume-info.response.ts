import { VolumeIndustryIdentifiersResponse } from './volume-industry-identifiers.response';
import { VolumeReadingModesResponse } from './volume-reading-modes.response';
import { VolumePanelizationSummaryResponse } from './volume-panelization-summary.response';
import { VolumeImageLinks } from './volume-image-links.response';

export class VolumeInfoResponse {

    constructor(
        public title?: string,
        public subtitle?: string,
        public authors?: string[],
        public publisher?: string,
        public publishedDate?: string,
        public industryIdentifiers?: VolumeIndustryIdentifiersResponse[],
        public readingModes?: VolumeReadingModesResponse,
        public pageCount?: number,
        public printType?: string,
        public averageRating?: number,
        public ratingsCount?: number,
        public maturityRating?: string,
        public allowAnonLogging?: boolean,
        public contentVersion?: string,
        public panelizationSummary?: VolumePanelizationSummaryResponse,
        public imageLinks?: VolumeImageLinks,
        public language?: string,
        public previewLink?: string,
        public infoLink?: string,
        public canonicalVolumeLink?: string
    ) {}

}