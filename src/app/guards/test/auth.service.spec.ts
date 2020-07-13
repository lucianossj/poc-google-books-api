import { TestBed } from '@angular/core/testing';
import { AuthService } from '../auth.service';
import { AuthServiceStub as stub } from './auth.service.stub';
import { AngularFireAuth } from '@angular/fire/auth';
import { AngularFirestore } from '@angular/fire/firestore';
import { Router } from '@angular/router';
import { AppModule } from 'src/app/app.module';
import { AngularFireModule } from '@angular/fire';
import { environment } from 'src/environments/environment';
import { of } from 'rxjs';
import { auth } from 'firebase';
import { callbackify } from 'util';

const authState = {
    isAnonymous: true,
    uid: 'AIzaSyDpVlGqUcMk7P6IzCiiDJSMMn9xDPAtY7g'
} as firebase.User;

const firebaseConfig = {
    apiKey: "AIzaSyDpVlGqUcMk7P6IzCiiDJSMMn9xDPAtY7g",
    authDomain: "studied-source-282521.firebaseapp.com",
    databaseURL: "https://studied-source-282521.firebaseio.com",
    projectId: "studied-source-282521",
    storageBucket: "studied-source-282521.appspot.com",
    messagingSenderId: "393217229425",
    appId: "1:393217229425:web:1645e9aa783f43cb1191d0"
};

describe('AuthService', () => {
    let service: AuthService;
    let fireAuth: AngularFireAuth;
    let firestore: AngularFirestore;
    let router: Router;

    beforeEach(() => {
        TestBed.configureTestingModule({
            providers: [
                AuthService,
                AngularFireAuth,
                { provide: AngularFirestore, useClass: stub },
                { provide: Router, useClass: stub },
            ],
            imports: [
                AngularFireModule.initializeApp(firebaseConfig)
            ]
        });
        fireAuth = TestBed.get(AngularFireAuth);
        router = TestBed.get(Router);
        service = TestBed.get(AuthService);
    });

    it('should be created', () => {
        expect(service).toBeTruthy();
    });

});
