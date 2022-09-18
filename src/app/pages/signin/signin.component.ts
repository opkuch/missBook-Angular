import { Component, OnInit } from '@angular/core';
import { UserModel } from '../../models/user.model';
import { AuthService } from '../../services/auth-service/auth.service';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.scss']
})
export class SigninComponent implements OnInit {

  user!: UserModel
  constructor(private AuthService: AuthService) { }


  ngOnInit(): void {
    this.user = this.AuthService.getEmptyUser()
  }

  async onSignin() {
    this.AuthService.signin({...this.user})
  }

}
