import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminDashboardRoutingModule } from './admin-dashboard-routing.module';
import { AdminDashboardComponent } from './admin-dashboard.component';
import { NgChartsModule } from 'ng2-charts';
import { NgxSmartModalModule } from 'ngx-smart-modal';


@NgModule({
  declarations: [
    AdminDashboardComponent
  ],
  imports: [
    CommonModule,
    AdminDashboardRoutingModule,
    NgChartsModule,
    NgxSmartModalModule,
  ]
})
export class AdminDashboardModule { }
