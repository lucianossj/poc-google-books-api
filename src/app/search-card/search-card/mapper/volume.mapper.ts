import { VolumeResponse } from '../integration/response/volume.response';
import { VolumeModel } from '../models/volume.model';
import { Builder } from 'builder-pattern';

export class VolumeMapper {
    
    public static mapVolumeResponseToModel(volumeResponse: VolumeResponse): VolumeModel {
        return Builder<VolumeModel>()
            .kind(volumeResponse.kind)
            .totalItems(volumeResponse.totalItems)
            .items(volumeResponse.items)
        .build();
    }

}