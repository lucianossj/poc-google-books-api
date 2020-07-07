import { VolumeItemModel } from './volume-item.model';

export class VolumeModel {

    constructor(
        public kind?: string,
        public totalItems?: number,
        public items?: VolumeItemModel[]
    ) {}

}