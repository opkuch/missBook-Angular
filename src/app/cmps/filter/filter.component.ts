import { Component, OnInit } from '@angular/core';
import { FirestoreService } from 'src/app/services/firestore-service/firestore.service';

@Component({
  selector: 'filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.scss']
})
export class FilterComponent implements OnInit {
  filterBy: any = {
    txt: ''
  }
  constructor(private FirestoreService: FirestoreService) { }

  ngOnInit(): void {
  }

  async filterBooks() {
    try {
      await this.FirestoreService.queryBooks(this.filterBy)
    } catch(err) {
      console.log('cannot filter books', err)
    }
  }

}
