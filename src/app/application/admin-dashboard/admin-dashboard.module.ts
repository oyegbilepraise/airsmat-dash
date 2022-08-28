import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminDashboardRoutingModule } from './admin-dashboard-routing.module';
import { AdminDashboardComponent } from './admin-dashboard.component';
import { NgChartsModule } from 'ng2-charts';
import { NgxSmartModalModule } from 'ngx-smart-modal';
import { MatSelectSearchModule } from 'mat-select-search';
import { MatSelectModule } from '@angular/material/select';
import { MatCardModule } from '@angular/material/card';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ToastrModule } from 'ngx-toastr';

@NgModule({
  declarations: [AdminDashboardComponent],
  imports: [
    CommonModule,
    AdminDashboardRoutingModule,
    NgChartsModule,
    NgxSmartModalModule,
    MatSelectModule,
    MatCardModule,
    MatSelectSearchModule,
    FormsModule,
    ReactiveFormsModule,
    ToastrModule.forRoot(),
  ],
})
export class AdminDashboardModule {}
