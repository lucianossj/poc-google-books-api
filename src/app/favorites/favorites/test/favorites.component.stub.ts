import { VolumeItemModel } from 'src/app/search-card/search-card/models/volume-item.model';
import { Builder } from 'builder-pattern';
import { VolumeInfoModel } from 'src/app/search-card/search-card/models/volume-info.model';
import { VolumeImageLinks } from 'src/app/search-card/search-card/integration/response/volume-image-links.response';

export class FavoritesComponentStub {

    public static mockVolumeItemModel(): VolumeItemModel {
        return Builder<VolumeItemModel>()
            .id('123456')
            .volumeInfo(this.mockVolumeInfoModel())
        .build();
    }

    public static mockVolumeInfoModel(): VolumeInfoModel {
        return Builder<VolumeInfoModel>()
            .title('Harry Potter')
            .authors(['JK Rowling'])
            .imageLinks(
                Builder<VolumeImageLinks>()
                    .thumbnail('harry.png')
                .build()
            )
        .build();
    }

    public getFavorites() {}
    public mockVolumeInfoModel() {}
    public navigateByUrl() {}

}