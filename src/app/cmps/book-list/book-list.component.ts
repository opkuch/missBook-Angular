import { Component, Input, OnInit } from '@angular/core';
import { BookModel } from '../../models/book.model';

@Component({
  selector: 'book-list',
  templateUrl: './book-list.component.html',
  styleUrls: ['./book-list.component.scss']
})
export class BookListComponent implements OnInit {
  @Input() books!: BookModel[] | null
  constructor() { }

  ngOnInit(): void {
  }

}
