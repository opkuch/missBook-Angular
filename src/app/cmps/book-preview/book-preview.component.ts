import { Component, Input, Output, EventEmitter } from '@angular/core';
import { BookModel } from '../../models/book.model';
import { ActivatedRoute, Router} from '@angular/router'
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'book-preview',
  templateUrl: './book-preview.component.html',
  styleUrls: ['./book-preview.component.scss']
})
export class BookPreviewComponent {
  @Input() book!: BookModel
  
  constructor(private route: ActivatedRoute, private router: Router, private toastr: ToastrService) { }
  
  async details() {
    const isLogged = await this.router.navigate([this.book._id], {relativeTo:this.route})
    if (!isLogged) {
      this.toastr.warning('You need to login or signup first!', '', {
        toastClass: `user-msg warning`,
        positionClass: 'toast-top-right'            
      })
    }
  }

  async edit() {
    await this.router.navigate(['edit/' + this.book._id], {relativeTo: this.route})
  }

}
