import { Observable, of } from 'rxjs';
import { UserModel } from '../models/user.model';
import { NavbarComponentStub } from 'src/app/navbar/test/navbar.component.stub';
import { AngularFirestoreDocument } from '@angular/fire/firestore';
import { Builder } from 'builder-pattern';
import { AngularFireAuth } from '@angular/fire/auth';

export class AuthServiceStub {

    public static mockAuthState(): any {
        return {
            displayName: null,
            isAnonymous: true,
            uid: 'aaaabbbbccccdddd'
        }
    }

    public static mockAngularFireAuth(): any {
        return {
            auth: jasmine.createSpyObj('auth', {
                'signInAnonymously': Promise.reject({
                code: 'auth/operation-not-allowed'
                })
            }),
            authState: of(this.mockAuthState())
        };
    }

    public static mockUserModel(): UserModel {
        return NavbarComponentStub.mockUserModel();
    }

    public static mockAngularFirestoreDocument(): AngularFirestoreDocument {
        return Builder<AngularFirestoreDocument>()
        .build();
    }

    public navigate() {}
    public signInWithPopup() {}
}