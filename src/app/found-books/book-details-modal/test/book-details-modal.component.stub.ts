import { TemplateRef, ElementRef } from '@angular/core';
import { Builder } from 'builder-pattern';
import { VolumeItemModel } from 'src/app/search-card/search-card/models/volume-item.model';
import { VolumeInfoModel } from 'src/app/search-card/search-card/models/volume-info.model';
import { VolumeImageLinks } from 'src/app/search-card/search-card/integration/response/volume-image-links.response';

export class BookDetailsModalStub {

    public static mockInitialState(): any {
        return { class: 'modal-md' };
    }

    public static mockTemplateRef(): TemplateRef<any> {
        return {
            elementRef: {
            nativeElement: '<div> </div>'
            },
            createEmbeddedView: this.mockFunction()
        };
    }

    public static mockFunction(): any { }

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

    public show() {}
    public mockVolumeInfoModel() {}
    public addToFavorites() {}
    public removeFromFavorites() {}
    public emit() {}
    public verifyBookIsAlreadyFavorite() {}

}