import { Component, Input, OnInit } from '@angular/core';
import { BookModel } from '../../models/book.model';
import { ActivatedRoute, Router } from '@angular/router'
import { ToastrService } from 'ngx-toastr';
import { FirestoreService } from '../../services/firestore-service/firestore.service';

@Component({
  selector: 'book-list',
  templateUrl: './book-list.component.html',
  styleUrls: ['./book-list.component.scss']
})
export class BookListComponent implements OnInit {
  @Input() books!: BookModel[] | null
  constructor(private FirestoreService: FirestoreService, private route: ActivatedRoute, private router: Router, private toastr: ToastrService) { }

  ngOnInit(): void {
  }

  async toEdit() {
    const isLogged = await this.router.navigate(['edit'], { relativeTo: this.route })
    if (!isLogged) {
      this.toastr.warning('You need to login or signup first!', '', {
        toastClass: `user-msg`,
        positionClass: 'toast-top-right'
      })
    }
  }

  async deleteBook(bookId: string) {
    const isDelete = await this.FirestoreService.removeEntity(bookId)
    if (isDelete) {
      await this.FirestoreService.queryBooks({})
      this.toastr.success('Book deleted', '', {
        toastClass: `user-msg`,
        positionClass: 'toast-top-right'
      })
    }
    else {
      this.toastr.error('Cannot delete book', '', {
        toastClass: `user-msg`,
        positionClass: 'toast-top-right'
      })
    }
  }
}
