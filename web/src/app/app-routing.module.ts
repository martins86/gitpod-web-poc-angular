import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SecureInnerPageGuard } from './infrastructure/guard/secure-inner-page.guard';
import { AuthGuard } from './infrastructure/guard/auth.guard';

import { DefaultComponent } from './layout/default/default.component';
import { LoginComponent } from './pages/login/login.component';
import { HomeComponent } from './pages/home/home.component';
import { FinancialAssetsComponent } from './pages/financial-assets/financial-assets.component';

const routes: Routes = [
  {
    path: 'login',
    component: LoginComponent,
    canActivate: [SecureInnerPageGuard],
  },
  {
    path: '',
    component: DefaultComponent,
    canActivate: [AuthGuard],
    children: [
      {
        path: '',
        component: HomeComponent,
        canActivate: [AuthGuard],
      },
      {
        path: 'financial-assets',
        component: FinancialAssetsComponent,
        canActivate: [AuthGuard],
      },
      {
        path: '**',
        redirectTo: '',
        pathMatch: 'full',
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
