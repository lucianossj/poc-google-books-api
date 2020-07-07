import { VolumeEpubResponse } from './volume-epub.response';
import { VolumePdfResponse } from './volume-pdf.response';

export class VolumeAccessInfoResponse {
    constructor(
        public country?: string,
        public viewability?: string,
        public embeddable?: boolean,
        public publicDomain?: boolean,
        public textToSpeechPermission?: string,
        public epub?: VolumeEpubResponse,
        public pdf?: VolumePdfResponse,
        public webReaderLink?: string,
        public accessViewStatus?: string,
        public quoteSharingAllowed?: boolean
    ) {}
}