import { Injectable, NgZone } from '@angular/core';
import {
  AngularFirestore,
  AngularFirestoreDocument,
} from '@angular/fire/compat/firestore';
import { AngularFireAuth } from "@angular/fire/compat/auth";
import { UserModel } from 'src/app/models/user.model';
import * as auth from 'firebase/auth';
import { Observable } from 'rxjs';
import { UtilService } from '../utilservice/util.service';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  userData: any // Save logged in user data

  constructor(public afs: AngularFirestore, // Inject Firestore service
    public afAuth: AngularFireAuth, // Inject Firebase auth service
    public ngZone: NgZone, // NgZone service to remove outside scope warning
    private UtilService: UtilService
  ) {
    this.afAuth.authState.subscribe((user) => {
      if (user) {
        this.userData = user;
        this.UtilService.store('user', this.userData);
      } else {
        this.UtilService.store('user', null);
      }
    })
  }

  isLoggedIn() {
    return this.UtilService.load('user')
  }

  async signin(user: UserModel) {
    const { email, password } = user
    try {
     this.userData = await this.afAuth.signInWithEmailAndPassword(email, password)
     this.UtilService.refresh()
    } catch(err) {
      console.log(err, "Couldn't signup")
    }

  }

  async signup(user: UserModel) {
    const { email, password } = user
    try {
     this.userData = await this.afAuth.createUserWithEmailAndPassword(email, password)
     this.UtilService.refresh()

    } catch(err) {
      console.log(err, "Couldn't signup")
    }
  }

  async signout() {
    await this.afAuth.signOut()
    localStorage.removeItem('user')
    this.UtilService.refresh()
  }

  getEmptyUser() {
    return {
      email: '',
      password: '',
    }
  }
}
