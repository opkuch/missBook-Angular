import { Injectable, NgZone } from '@angular/core';
import {
  AngularFirestore,
  AngularFirestoreDocument,
} from '@angular/fire/compat/firestore';
import { AngularFireAuth } from "@angular/fire/compat/auth";
import { UserModel } from 'src/app/models/user.model';
import * as auth from 'firebase/auth';
import { Observable, BehaviorSubject } from 'rxjs';
import { UtilService } from '../utilservice/util.service';
import { UserService } from '../user/user.service';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  userData: any // Save logged in user data

  constructor(public afs: AngularFirestore, // Inject Firestore service
    public afAuth: AngularFireAuth, // Inject Firebase auth service
    public ngZone: NgZone, // NgZone service to remove outside scope warning
    private UtilService: UtilService,
    private UserService: UserService
  ) {
    this.authStatusListener();
  }
  currentUser: any = null
  private authStatusSub = new BehaviorSubject(this.currentUser)
  public currentAuthStatus = this.authStatusSub.asObservable()

  authStatusListener(){
    this.afAuth.onAuthStateChanged((credential)=>{
      if(credential){
        console.log(credential)
        this.authStatusSub.next(credential)

      }
      else{
        this.authStatusSub.next(null)
        console.log('User is logged out')
      }
    })
  }
  
  async signin(user: UserModel) {
    const { email, password } = user
    try {
      if (email && password) {
        this.userData = await this.afAuth.signInWithEmailAndPassword(email, password)
      }
    } catch(err) {
      console.log(err, "Couldn't signup")
    }

  }

  async signup(user: UserModel) {
    const { email, password, displayName } = user
    try {
      if (email && password) {
        this.userData = await this.afAuth.createUserWithEmailAndPassword(email, password)
        await this.userData.user.updateProfile({displayName})
        const {uid} = this.userData.user
        await this.UserService.SetUserData({uid, email, displayName})
      }

    } catch(err) {
      console.log(err, "Couldn't signup")
    }
  }

  async signout() {
    await this.afAuth.signOut()
    localStorage.removeItem('user')
  }

  getEmptyUser() {
    return {
      uid: '',
      email: '',
      password: '',
      displayName: ''
    }
  }
}
