import { Component, Input, Output, EventEmitter } from '@angular/core';
import { BookModel } from '../../models/book.model';
import { ActivatedRoute, Router } from '@angular/router'
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'book-preview',
  templateUrl: './book-preview.component.html',
  styleUrls: ['./book-preview.component.scss']
})
export class BookPreviewComponent {
  @Input() book!: BookModel
  @Output() deleteBook: EventEmitter<any> = new EventEmitter()

  constructor(private route: ActivatedRoute, private router: Router, private toastr: ToastrService) { }

  async details() {
    const isLogged = await this.router.navigate([this.book._id], { relativeTo: this.route })
    if (!isLogged) {
      this.showMsg('You need to login or signup first!', '', 'warning')
    }

  }
  async edit() {
    const isLogged = await this.router.navigate(['edit/' + this.book._id], { relativeTo: this.route })
    if (!isLogged) {
      this.showMsg('You need to login or signup first!', '', 'warning')
    }
  }

  async delete() {
    this.deleteBook.emit(this.book._id)
  }

  showMsg(title: string, body: string, type: string) {

    this.toastr.warning(title, body, {
      toastClass: `user-msg ${type}`,
      positionClass: 'toast-top-right'
    })
  }

}
