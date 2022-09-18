import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { BehaviorSubject, Observable, of } from 'rxjs';
import { BookModel } from 'src/app/models/book.model';
import {
  addDoc, collection, deleteDoc, getDoc, doc,
  getDocs, getFirestore, updateDoc, query, orderBy, startAt, endAt
} from "firebase/firestore";

@Injectable({
  providedIn: 'root'
})
export class FirestoreService {
  
  constructor(private firestore: AngularFirestore) { }

  _books$ = new BehaviorSubject<any>([])
  books$ = this._books$.asObservable()

  books: any[] = []
  async queryBooks() {
    try {
      const q = this.firestore.collection('books').ref
      const booksSnapshot = await getDocs(q)
      this.books = booksSnapshot.docs.map(doc => {
        const bookData = doc.data()
        if (typeof bookData === 'object') {
          return {_id: doc.id, ...bookData}
        }else return
      })
      this._books$.next(this.books)
    }catch(err) {
      console.log('cannot get books', err)
    }
  }
  public getById(bookId: string): Observable<BookModel | void> {
    const book = this.books.find(book => book._id === bookId)
    if (book) return of({ ...book })
    return of()
}
}