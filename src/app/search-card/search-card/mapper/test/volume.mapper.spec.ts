import { VolumeMapper } from "../volume.mapper";
import { VolumeMapperStub as stub } from './volume.mapper.stub';

describe('VolumeMapper', () => {
    it('should create an instance', () => {
        const volumeMapper = new VolumeMapper();
        expect(volumeMapper).toBeTruthy();
    });

    describe('When the method [mapVolumeResponseToModel] is called', () => {
        it('should map a VolumeResponse to a VolumeModel object', () => {
            expect(VolumeMapper.mapVolumeResponseToModel(stub.mockVolumeResponse())).toEqual(stub.mockVolumeModel());
        });
    });
    
});
