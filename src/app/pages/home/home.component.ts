import { Component, OnInit, OnDestroy } from '@angular/core';
import { BookModel } from '../../models/book.model';
import { BookService } from '../../services/bookservice/book.service';
import { Observable, take, map, tap, Subscription } from 'rxjs';
import { QuoteService } from '../../services/quoteservice/quote.service';
import { QuoteModel } from '../../models/quote.model';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  books!: Array<BookModel>
  books$!: Observable<BookModel[]>
  subscription!: Subscription
  quote: any | null = null
  quoteIntervalID: number = 0
  isFade: Boolean = false

  constructor(public BookService: BookService, public QuoteService: QuoteService) { }

  ngOnInit(): void {
    this.BookService.loadBooks()
    this.books$ = this.BookService.books$
    
    this.subscription = this.QuoteService.getQuotesFromApi().subscribe(quote => {
      this.quote= quote
    })
    setInterval(() => {
      this.subscription = this.QuoteService.getQuotesFromApi().subscribe(quote => {
        this.isFade = true
        setTimeout(() => {
            this.quote = quote
            this.isFade = false
          }, 500)
      })
    }, 4500)
  }

  ngOnDestroy() {
    this.subscription.unsubscribe()
    clearInterval(this.quoteIntervalID)
  }

}
