import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HeaderComponent } from './../shared/components/header/header.component';
import { SidebarComponent } from './../shared/components/sidebar/sidebar.component';
import { FooterComponent } from './../shared/components/footer/footer.component';

@NgModule({
  declarations: [
  HeaderComponent,
  SidebarComponent,
  FooterComponent,
  ],
  imports: [
    CommonModule
  ],
  exports:[
  HeaderComponent,
  SidebarComponent,
  FooterComponent,
  ]
})
export class SharedModule { }
