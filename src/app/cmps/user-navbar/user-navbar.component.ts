import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { UserModel } from 'src/app/models/user.model';
import { AuthService } from 'src/app/services/auth/auth.service';

@Component({
  selector: 'user-navbar',
  templateUrl: './user-navbar.component.html',
  styleUrls: ['./user-navbar.component.scss']
})
export class UserNavbarComponent implements OnInit {
  @Output() logout = new EventEmitter<null>();
  user!: UserModel | undefined

  constructor(private AuthService: AuthService) {
    this.user = this.AuthService.isLoggedIn()
  }

  ngOnInit(): void {
    console.log(this.user)
  }

  onLogout() {
    this.logout.emit(null)
  }

}
