import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { AuthService } from './../../infrastructure/auth/auth.service';
import { User } from './../../shared/users/model/user.model';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  email: User;
  password: User;

    constructor(
    private authService: AuthService,
    private router: Router
    ) {}

  ngOnInit(): void {
  }

  //TODO: teste
  login() {

  //loader

  //validate

  //post
    this.authService
          .login(this.email, this.password)
          .subscribe((data) => {
            this.authService.setOnStorage(data.authToken);
            this.router.navigate(['']);
          });
  }

}
