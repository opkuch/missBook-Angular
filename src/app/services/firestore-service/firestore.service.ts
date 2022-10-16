import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { BehaviorSubject, Observable, of } from 'rxjs';
import { BookModel } from 'src/app/models/book.model';
import {
  addDoc, collection, deleteDoc, getDoc, doc,
  getDocs, getFirestore, updateDoc, query, orderBy, setDoc
} from "firebase/firestore";

@Injectable({
  providedIn: 'root'
})
export class FirestoreService {
  
  constructor(private firestore: AngularFirestore) { }

  _books$ = new BehaviorSubject<any>([])
  books$ = this._books$.asObservable()

  books: any[] = []
  async queryBooks(filterBy: any) {
    try {
      const q = this.firestore.collection('books').ref
      const booksSnapshot = await getDocs(q)
      this.books = booksSnapshot.docs.map(doc => {
        const bookData = doc.data()
        if (typeof bookData === 'object') {
          return {_id: doc.id, ...bookData}
        }else return
      })
      if (filterBy?.txt) {
        const txt = filterBy.txt.toLowerCase()
        this.books = this.books.filter(book => {
          const loweredTitle = book.title.toLowerCase()
          if (loweredTitle.includes(txt)) return book
        })
      }
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

async saveEntity(entity: any) {
  const q = this.firestore.collection('books').ref
  if (entity._id) {
      const copyEntitiy = JSON.parse(JSON.stringify(entity))
      const entityRef = doc(q, entity._id)
      delete copyEntitiy._id
      try {
          await updateDoc(entityRef, copyEntitiy)
          return entity
      } catch (e) {
          console.error("Error updating document: ", e);
      }
  } else {
      try {
        const newBookRef = doc(q)
        await setDoc(newBookRef, entity)
      } catch (e) {
          console.error("Error saving document: ", e);
      }
  }
}
async removeEntity(entityId: string) {
  const q = this.firestore.collection('books').ref
  try {
      await deleteDoc(doc(q, entityId))
      return true
  } catch (e) {
      console.error("Error deleting document: ", e);
      return false
  }
}
}

