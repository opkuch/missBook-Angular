import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'explore-btn',
  templateUrl: './explore-btn.component.html',
  styleUrls: ['./explore-btn.component.scss']
})
export class ExploreBtnComponent implements OnInit {

  constructor(private router: Router) { }
  goToBooks(): void {
    console.log('hi')
    this.router.navigateByUrl('/explore')
  }

  ngOnInit(): void {
  }

}
