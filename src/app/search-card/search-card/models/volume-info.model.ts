import { VolumeIndustryIdentifiersModel } from './volume-industry-identifiers.model';
import { VolumeReadingModesModel } from './volume-reading-modes.model';
import { VolumePanelizationSummaryModel } from './volume-panelization-summary.model';
import { VolumeImageLinksModel } from './volume-image-links.model';

export class VolumeInfoModel {

    constructor(
        public title?: string,
        public subtitle?: string,
        public authors?: string[],
        public publisher?: string,
        public publishedDate?: string,
        public industryIdentifiers?: VolumeIndustryIdentifiersModel[],
        public readingModes?: VolumeReadingModesModel,
        public pageCount?: number,
        public printType?: string,
        public averageRating?: number,
        public ratingsCount?: number,
        public maturityRating?: string,
        public allowAnonLogging?: boolean,
        public contentVersion?: string,
        public panelizationSummary?: VolumePanelizationSummaryModel,
        public imageLinks?: VolumeImageLinksModel,
        public language?: string,
        public previewLink?: string,
        public infoLink?: string,
        public canonicalVolumeLink?: string
    ) {}

}