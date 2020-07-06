import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { BrowserModule } from '@angular/platform-browser';

import { MatSidenavModule } from '@angular/material/sidenav';
import { MatDividerModule } from '@angular/material/divider';

import { AppRoutingModule } from './../../app-routing.module';

import { SharedModule } from './../../shared/shared.module';
import { LoginModule } from './../../pages/login/login.module';

import { DefaultComponent } from './default.component';
import { HomeComponent } from './../../pages/home/home.component';
import { AcoesComponent } from './../../pages/acoes/acoes.component';

@NgModule({
  declarations: [
    DefaultComponent,
    HomeComponent,
    AcoesComponent,
  ],
  imports: [
    CommonModule,
    RouterModule,
    AppRoutingModule,
    SharedModule,
    LoginModule,
    MatSidenavModule,
    MatDividerModule,
  ]
})
export class DefaultModule { }
