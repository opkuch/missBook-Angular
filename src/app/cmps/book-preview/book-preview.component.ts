import { Component, Input } from '@angular/core';
import { BookModel } from '../../models/book.model';
import { ActivatedRoute, Router} from '@angular/router'

@Component({
  selector: 'book-preview',
  templateUrl: './book-preview.component.html',
  styleUrls: ['./book-preview.component.scss']
})
export class BookPreviewComponent {
  @Input() book!: BookModel
  constructor(private route: ActivatedRoute, private router: Router) { }

  details() {
    this.router.navigate([this.book._id], {relativeTo:this.route});

  }

}
