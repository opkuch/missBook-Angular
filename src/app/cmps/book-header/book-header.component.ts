import { Component, OnInit, Input } from '@angular/core';
import { UserModel } from 'src/app/models/user.model';
import { AuthService } from 'src/app/services/auth-service/auth.service';
import { Router } from '@angular/router';
@Component({
  selector: 'book-header',
  templateUrl: './book-header.component.html',
  styleUrls: ['./book-header.component.scss']
})
export class BookHeaderComponent implements OnInit {

  @Input() logout!: null
  constructor(private AuthService: AuthService, private router: Router) { 
  }
  onLogout() {
    this.AuthService.signout()
    console.log(localStorage.getItem('user'))
    this.router.navigateByUrl('/home')
  }

  ngOnInit(): void {
  }


}
