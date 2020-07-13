import { FormGroup } from '@angular/forms';
import { Builder } from 'builder-pattern';
import { VolumeModel } from '../models/volume.model';
import { HomeComponentStub } from 'src/app/home/test/home.component.stub';
import { VolumeMapperStub } from '../mapper/test/volume.mapper.stub';
import { VolumeResponse } from '../integration/response/volume.response';

export class SearchCardStub {

    public static mockVolumeModel(): VolumeModel {
        return VolumeMapperStub.mockVolumeModel();
    }

    public static mockVolumeResponse(): VolumeResponse {
        return VolumeMapperStub.mockVolumeResponse();
    }

    public group() {}
    public searchVolumes() {}
    public getVolumesBySearch() {}
    public emit() {}
    public get() {}

}