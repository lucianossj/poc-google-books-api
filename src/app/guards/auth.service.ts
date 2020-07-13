import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

import { Observable, of } from 'rxjs';
import { switchMap } from 'rxjs/operators';
import { AngularFireAuth } from '@angular/fire/auth';
import { AngularFirestore, AngularFirestoreDocument } from '@angular/fire/firestore';

import { UserModel } from './models/user.model';
import { LocalStorageEnum } from '../enum/local-storage.enum';
import { auth } from 'firebase';

@Injectable()
export class AuthService {

  public user: Observable<UserModel>;

  constructor(
    private fireAuth: AngularFireAuth,
    private firestore: AngularFirestore,
    private router: Router
  ) {
    this.user = this.fireAuth.authState.pipe(
      switchMap(user => {
        if (user) {
          return this.firestore.doc<UserModel>(`users/${user.uid}`).valueChanges();
        } else {
          return of(null);
        }
      })
    );
  }

  async googleSignIn() {
    const provider = new auth.GoogleAuthProvider();
    const credential = await this.fireAuth.signInWithPopup(provider);

    this.router.navigate(['/home']);

    return this.updateUserData(credential.user);
  }

  async signOut() {
    await this.fireAuth.signOut();
    localStorage.removeItem(LocalStorageEnum.USER);
    return this.router.navigate(['/login']);
  }

  private updateUserData(user: UserModel) {
    const userRef: AngularFirestoreDocument<UserModel> = this.firestore.doc(`users/${user.uid}`);

    const data = {
      uid: user.uid,
      email: user.email,
      displayName: user.displayName,
      photoURL: user.photoURL
    }

    localStorage.setItem(LocalStorageEnum.USER, JSON.stringify(user));

    return userRef.set(data, { merge: true });
  }

  public isAuthenticated(): boolean {
    return !!localStorage.getItem(LocalStorageEnum.USER);
  }

}
