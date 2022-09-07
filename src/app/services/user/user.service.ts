import { Injectable } from '@angular/core';
import {
  AngularFirestore, AngularFirestoreDocument} from '@angular/fire/compat/firestore';
import { UserModel } from 'src/app/models/user.model';
import {doc, getDoc, collection} from 'firebase/firestore'
@Injectable({
  providedIn: 'root'
})
export class UserService {
  constructor(private db: AngularFirestore, // Inject Firestore service
  ) { }  

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
}
