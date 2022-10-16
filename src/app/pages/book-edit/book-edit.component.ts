import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { BookModel } from 'src/app/models/book.model';
import { FirestoreService } from '../../services/firestore-service/firestore.service';

@Component({
  selector: 'book-edit',
  templateUrl: './book-edit.component.html',
  styleUrls: ['./book-edit.component.scss']
})
export class BookEditComponent implements OnInit {

  constructor(private route: ActivatedRoute, private router: Router, private FirestoreService: FirestoreService) { }
  book: BookModel = {
    title: '',
    author: '',
    description: '',
    imgUrl: '',
    reviews: []
  }
  ngOnInit(): void {
    this.route.data.subscribe(data => {
      if(data['book']) this.book = data['book']
    })
  }

  async addBook() {
    try {
      await this.FirestoreService.saveEntity(this.book)
      await this.FirestoreService.queryBooks({})
      this.router.navigate(['explore'])
    } catch(err) {
      console.log('Cannot save book...', err)
    }

  }
}
