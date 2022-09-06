import { Component, OnInit } from '@angular/core';
import { UserModel } from '../../models/user.model';
import { AuthService } from '../../services/auth/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.scss']
})
export class SigninComponent implements OnInit {

  user!: UserModel
  constructor(private AuthService: AuthService, private router: Router) { }


  ngOnInit(): void {
    this.user = this.AuthService.getEmptyUser()
  }

  async onSignin() {
    this.AuthService.signin({...this.user})
    this.router.navigateByUrl('/home')
  }

}
