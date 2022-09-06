import { Component, OnInit } from '@angular/core';
import { UserModel } from '../../models/user.model';
import { AuthService } from '../../services/auth/auth.service';
@Component({
  selector: 'signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent implements OnInit {
  user!: UserModel
  constructor(public AuthService: AuthService) { }

  ngOnInit(): void {
    this.user = this.AuthService.getEmptyUser()
  }
  async onSignup() {
    this.AuthService.signup({...this.user})
  }
}
