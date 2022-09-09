import { Component, OnInit } from '@angular/core';
import { BookModel } from '../../models/book.model';
import { BookService } from '../../services/book-service/book.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'book-app',
  templateUrl: './book-app.component.html',
  styleUrls: ['./book-app.component.scss']
})
export class BookAppComponent implements OnInit {

  public books$!: Observable<BookModel[]>
  isLoading: Boolean = true

  constructor(public BookService: BookService) { }

  ngOnInit(): void {
    setTimeout(() => {
      this.isLoading = false
    }, 1500)
    this.BookService.loadBooks()
    this.books$ = this.BookService.books$
  }

  

}
