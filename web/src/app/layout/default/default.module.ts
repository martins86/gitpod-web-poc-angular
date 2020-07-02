import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { BrowserModule } from '@angular/platform-browser';

import { MatSidenavModule } from '@angular/material/sidenav';

import { AppRoutingModule } from './../../app-routing.module';

import { SharedModule } from './../../shared/shared.module';
import { LoginModule } from './../../pages/login/login.module';

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
    RouterModule,
    AppRoutingModule,
    SharedModule,
    LoginModule,
    MatSidenavModule,
  ]
})
export class DefaultModule { }
