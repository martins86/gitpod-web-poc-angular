import { Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';

import { AuthService } from './../../infrastructure/auth/auth.service';
import { User } from './../../shared/users/model/user.model';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  email: User;
  password: User;

  @ViewChild('snackBarComponent')
  snackBarComponent: any;

  @ViewChild('loadingComponent')
  loadingComponent: any;

  constructor(private authService: AuthService, private router: Router) {}

  ngOnInit() {}

  //TODO: teste
  login() {
    //loader
    this.loadingComponent.loadingOn();

    //validate

    //post
    this.authService.login(this.email, this.password).subscribe(
      (data) => {
        this.authService.setOnStorage(data.authToken);
        this.router.navigate(['']);
      },
      (error) => {
        this.loadingComponent.loadingOff();
        this.snackBarComponent.openSnackBar(error, 'invalid');
      }
    );
  }
}
