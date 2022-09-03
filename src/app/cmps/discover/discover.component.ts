import { Component, Input, OnInit } from '@angular/core';
import {BookModel} from '../../models/book.model'

@Component({
  selector: 'discover',
  templateUrl: './discover.component.html',
  styleUrls: ['./discover.component.scss']
})
export class DiscoverComponent implements OnInit {
  @Input() 
  books!: BookModel[] | null
  fantasyBooks: Array<BookModel> = []
  thrillerBooks: Array<BookModel> = []

  constructor() { }


  ngOnInit(): void {
    if (!this.books) return
    this.fantasyBooks = this.books.slice(0, 6)
    this.thrillerBooks = this.books.slice(6, 12)
  }

}
