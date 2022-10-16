import { Component, OnInit } from '@angular/core';
import { BookModel } from '../../models/book.model';
import { BehaviorSubject, Observable } from 'rxjs';
import { FirestoreService } from 'src/app/services/firestore-service/firestore.service';

@Component({
  selector: 'book-app',
  templateUrl: './book-app.component.html',
  styleUrls: ['./book-app.component.scss']
})
export class BookAppComponent implements OnInit {

  public books$!: Observable<BookModel[]>
  isLoading: Boolean = false

  constructor(private FirestoreService: FirestoreService) { }

  ngOnInit(): void {
    // setTimeout(() => {
    //   this.isLoading = false
    // }, 1500)
    this.FirestoreService.queryBooks({txt: ''})
    this.books$ = this.FirestoreService.books$
  }

  

}
