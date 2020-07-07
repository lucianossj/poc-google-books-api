import { VolumeEpubModel } from './volume-epub.model';
import { VolumePdfModel } from './volume-pdf.model';

export class VolumeAccessInfoModel {
    constructor(
        public country?: string,
        public viewability?: string,
        public embeddable?: boolean,
        public publicDomain?: boolean,
        public textToSpeechPermission?: string,
        public epub?: VolumeEpubModel,
        public pdf?: VolumePdfModel,
        public webReaderLink?: string,
        public accessViewStatus?: string,
        public quoteSharingAllowed?: boolean
    ) {}
}