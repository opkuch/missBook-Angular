import { Injectable, NgZone } from '@angular/core';
import {
  AngularFirestore,
  AngularFirestoreDocument,
} from '@angular/fire/compat/firestore';
import { AngularFireAuth } from "@angular/fire/compat/auth";
import { UserModel } from 'src/app/models/user.model';
import * as auth from 'firebase/auth';
import { Observable, BehaviorSubject, of } from 'rxjs';
import { UtilService } from '../utilservice/util.service';
import { ToastrService } from 'ngx-toastr';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  userData: any // Save logged in user data
  isLoggedIn: boolean = false
  constructor(
    public afAuth: AngularFireAuth, // Inject Firebase auth service
    public ngZone: NgZone, // NgZone service to remove outside scope warning
    private UtilService: UtilService,
    private toastr: ToastrService,
    private router: Router,
    private db: AngularFirestore
  ) {
    this.authStatusListener();
  }
  currentUser: any = null
  private authStatusSub = new BehaviorSubject(this.currentUser)
  public currentAuthStatus = this.authStatusSub.asObservable()
  SetUserData(user: any) {
    const userRef: AngularFirestoreDocument<any> = this.db.doc(
      `users/${user.uid}`
    )
    const userData: UserModel = {
      uid: user.uid,
      email: user.email,
      displayName: user.displayName,
    }
    return userRef.set(userData, {
      merge: true,
    })
  }

  authStatusListener(){
    this.afAuth.onAuthStateChanged((credential)=>{
      if(credential){
        this.authStatusSub.next(credential)
        this.isLoggedIn = true
      }
      else{
        this.authStatusSub.next(null)
        this.isLoggedIn = false
        console.log('User is logged out')
      }
    })
  }

  showMsg(body: string, title: string, type: string) {
    this.toastr.success(title,body, {
      toastClass: `user-msg ${type}`,
      positionClass: 'toast-top-right'            
    });
  }

  checkUserLogin(): Observable<boolean> {
    return of(this.isLoggedIn)
  }
  async signin(user: UserModel) {
    const { email, password } = user
    try {
      if (email && password) {
        this.userData = await this.afAuth.signInWithEmailAndPassword(email, password)
        this.showMsg('', 'Login succeeded!', 'success')
        this.router.navigateByUrl('/home')
      }
    } catch(err) {
      console.log(err, "Couldn't signup")
      this.showMsg('', 'Login failed!', 'error')
    }

  }

  async signup(user: UserModel) {
    const { email, password, displayName } = user
    try {
      if (email && password) {
        this.userData = await this.afAuth.createUserWithEmailAndPassword(email, password)
        await this.userData.user.updateProfile({displayName})
        const {uid} = this.userData.user
        await this.SetUserData({uid, email, displayName})
        this.showMsg('', 'Signup succeeded!', 'success')
        this.router.navigateByUrl('/home')

      }

    } catch(err) {
      console.log(err, "Couldn't signup")
      this.showMsg('', 'Signup failed!', 'error')

    }
  }

  async signout() {
    try {
      await this.afAuth.signOut()
      this.showMsg('', 'Logout succeeded!', 'success')

    }catch(err) {
      console.log('cannot logout', err)
      this.showMsg('', 'Logout failed!', 'error')

    }
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
