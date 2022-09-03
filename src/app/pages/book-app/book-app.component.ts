import { Component, OnInit, OnDestroy } from '@angular/core';
import { BookModel } from '../../models/book.model';
import { BookService } from '../../services/bookservice/book.service';
import { Observable, Subscription } from 'rxjs';
import { last } from 'rxjs/operators';

@Component({
  selector: 'book-app',
  templateUrl: './book-app.component.html',
  styleUrls: ['./book-app.component.scss']
})
export class BookAppComponent implements OnInit {

  public books$!: Observable<BookModel[]>
  subscription!: Subscription
  constructor(public BookService: BookService) { }

  ngOnInit(): void {
    this.BookService.loadBooks()
    this.books$ = this.BookService.books$
  }

  ngOnDestroy() {
  }

}
