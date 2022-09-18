import { Component, OnInit, Output, OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subscription, lastValueFrom } from 'rxjs';
import { BookModel } from 'src/app/models/book.model';
import { BookService } from 'src/app/services/book-service/book.service';

@Component({
  selector: 'book-details',
  templateUrl: './book-details.component.html',
  styleUrls: ['./book-details.component.scss']
})
export class BookDetailsComponent implements OnInit {

  constructor(private BookService: BookService, private route: ActivatedRoute) { }
  book!: BookModel
  subscription!: Subscription
  ngOnInit(): void {
    this.route.data.subscribe(data => {
      console.log(data)
      this.book = data['book']
    })
  }
}
