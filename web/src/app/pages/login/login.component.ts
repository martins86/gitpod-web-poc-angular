import { Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { FormControl, Validators } from '@angular/forms';

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

  emailFormControl = new FormControl('', [
    Validators.required,
    Validators.email,
  ]);

  passwordFormControl = new FormControl('', [
    Validators.required,
    Validators.minLength(5),
  ]);

  constructor(private authService: AuthService, private router: Router) {}

  ngOnInit() {}

  //TODO: teste
  login() {
    if (
      this.emailFormControl.value === '' ||
      this.passwordFormControl.value === '' ||
      this.emailFormControl.valid === false ||
      this.passwordFormControl.valid === false
    ) {
      this.emailFormControl.markAsTouched();
      this.passwordFormControl.markAsTouched();
      return;
    }

    this.email = this.emailFormControl.value;
    this.password = this.passwordFormControl.value;

    this.loadingComponent.loadingOn();

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
