import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';

import { MatDividerModule } from '@angular/material/divider';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatMenuModule } from '@angular/material/menu';
import { MatListModule } from '@angular/material/list';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { ReactiveFormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatStepperModule } from '@angular/material/stepper';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatMomentDateModule, MomentDateAdapter } from '@angular/material-moment-adapter';
import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';

import { HeaderComponent } from './../shared/components/header/header.component';
import { SidebarComponent } from './../shared/components/sidebar/sidebar.component';
import { FooterComponent } from './../shared/components/footer/footer.component';
import { LoadingComponent } from './components/loading/loading.component';
import { SnackBarComponent } from './components/snack-bar/snack-bar.component';
import { CardStepperComponent } from './components/card-stepper/card-stepper.component';
import { SelectOptionsComponent } from './components/select-options/select-options.component';
import { DataPickerComponent } from './components/data-picker/data-picker.component';
import { MAT_DATE_LOCALE } from '@angular/material/core';
import { TableFullComponent } from './components/table-full/table-full.component';

@NgModule({
  declarations: [
    HeaderComponent,
    SidebarComponent,
    FooterComponent,
    LoadingComponent,
    SnackBarComponent,
    CardStepperComponent,
    SelectOptionsComponent,
    DataPickerComponent,
    TableFullComponent,
  ],
  imports: [
    CommonModule,
    RouterModule,
    MatDividerModule,
    MatToolbarModule,
    MatIconModule,
    MatButtonModule,
    MatMenuModule,
    MatListModule,
    MatProgressSpinnerModule,
    MatSnackBarModule,
    MatCardModule,
    MatFormFieldModule,
    ReactiveFormsModule,
    MatInputModule,
    MatSelectModule,
    MatStepperModule,
    MatDatepickerModule,
    MatMomentDateModule,
    MatTableModule,
    MatPaginatorModule,
  ],
  exports: [
    HeaderComponent,
    SidebarComponent,
    FooterComponent,
    LoadingComponent,
    SnackBarComponent,
    CardStepperComponent,
    SelectOptionsComponent,
    DataPickerComponent,
    TableFullComponent,
  ],
  providers: [
    {provide: MAT_DATE_LOCALE, useValue: 'pt-BR'},
  ],
})
export class SharedModule {}
