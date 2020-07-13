import { UserModel } from 'src/app/guards/models/user.model';
import { Builder } from 'builder-pattern';

export class NavbarComponentStub {

    public static mockUserModel(): UserModel {
        return Builder<UserModel>()
            .displayName('Fulano')
            .email('ful@ano.com')
            .photoURL('fulano.png')
            .uid('2303')
        .build();
    }

}