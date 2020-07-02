import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LoginModule } from './../../pages/login/login.module';
import { SharedModule } from './../../shared/shared.module';

import { DefaultComponent } from './default.component';
import { HomeComponent } from './../../pages/home/home.component';
import { LoginComponent } from './../../pages/login/login.component';

@NgModule({
  declarations: [
    DefaultComponent,
    LoginComponent,
    HomeComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    LoginModule
  ]
})
export class DefaultModule { }
