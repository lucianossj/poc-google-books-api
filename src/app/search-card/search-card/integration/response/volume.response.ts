import { VolumeItemResponse } from './volume-item.response';

export class VolumeResponse {

    constructor(
        public kind?: string,
        public totalItems?: number,
        public items?: VolumeItemResponse[]
    ) {}

}