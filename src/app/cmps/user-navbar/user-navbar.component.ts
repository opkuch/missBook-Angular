import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { UserModel } from 'src/app/models/user.model';
import { AuthService } from 'src/app/services/auth/auth.service';
@Component({
  selector: 'user-navbar',
  templateUrl: './user-navbar.component.html',
  styleUrls: ['./user-navbar.component.scss'],
})
export class UserNavbarComponent implements OnInit {
  @Output() logout = new EventEmitter<null>();
  isUser!: boolean
  constructor(private AuthService: AuthService) {
  }

  ngOnInit(): void {
    this.AuthService.authStatusListener()
    this.AuthService.currentAuthStatus.subscribe(authStatus => {
      this.isUser = authStatus
    })
  }

  onLogout() {
    this.logout.emit(null)
  }

}
