import { Component, OnInit, Output } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subscription, lastValueFrom } from 'rxjs';
import { BookModel } from 'src/app/models/book.model';
import { BookService } from 'src/app/services/bookservice/book.service';

@Component({
  selector: 'book-details',
  templateUrl: './book-details.component.html',
  styleUrls: ['./book-details.component.scss']
})
export class BookDetailsComponent implements OnInit {

  constructor(private BookService: BookService, private route: ActivatedRoute) { }
  // @Output():
  book!: BookModel
  subscription!: Subscription
  ngOnInit(): void {
    this.subscription = this.route.params.subscribe(async params => {
      const book = await lastValueFrom(this.BookService.getById(params['id']))
      if (book) this.book = book
    })
  }

}
