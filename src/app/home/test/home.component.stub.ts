import { VolumeModel } from 'src/app/search-card/search-card/models/volume.model';
import { Builder } from 'builder-pattern';
import { BookDetailsModalStub } from 'src/app/found-books/book-details-modal/test/book-details-modal.component.stub';

export class HomeComponentStub {
    public static mockVolumeModel(): VolumeModel {
        return Builder<VolumeModel>()
            .kind('book')
            .totalItems(2303)
            .items([ BookDetailsModalStub.mockVolumeItemModel() ])
        .build();
    }
}