import { VolumeResponse } from '../../integration/response/volume.response';
import { Builder } from 'builder-pattern';
import { VolumeModel } from '../../models/volume.model';

export class VolumeMapperStub {
    public static mockVolumeResponse(): VolumeResponse {
        return Builder<VolumeResponse>()
            .items([])
            .kind('books')
            .totalItems(2303)
        .build();
    }

    public static mockVolumeModel(): VolumeModel {
        return Builder<VolumeModel>()
            .items([])
            .kind('books')
            .totalItems(2303)
        .build();
    }
}