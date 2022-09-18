import { Injectable } from '@angular/core';
import { Resolve,
  RouterStateSnapshot,
  ActivatedRouteSnapshot
} from '@angular/router';
import { Observable, of } from 'rxjs';
import { BookModel } from 'src/app/models/book.model';
import { BookService } from '../book-service/book.service';
import { FirestoreService } from '../firestore-service/firestore.service';

@Injectable({
  providedIn: 'root'
})
export class BookResolver implements Resolve<Observable<BookModel | void>> {
  
  constructor(private BookService: BookService, private FirestoreService: FirestoreService) {

  }

  resolve(route: ActivatedRouteSnapshot){
    const id = route.params['id']
    return this.FirestoreService.getById(id)
  }
}
