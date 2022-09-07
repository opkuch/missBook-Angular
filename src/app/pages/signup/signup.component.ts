import { Component, OnInit } from '@angular/core';
import { UserModel } from '../../models/user.model';
import { AuthService } from '../../services/auth/auth.service';
import { Router } from '@angular/router';
import { UtilService } from 'src/app/services/utilservice/util.service';
@Component({
  selector: 'signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent implements OnInit {
  user!: UserModel
  constructor(private AuthService: AuthService, private router: Router) { }

  ngOnInit(): void {
    this.user = this.AuthService.getEmptyUser()
  }
  async onSignup() {
    await this.AuthService.signup({...this.user})
    this.router.navigateByUrl('/home')
  }
}
