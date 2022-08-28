import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ApplicationRoutingModule } from './application-routing.module';
import { ApplicationComponent } from './application.component';
import { ComponentsModule } from '../components/components.module';
import { DashboardComponent } from './dashboard/dashboard.component';
import { NgxSmartModalModule } from 'ngx-smart-modal';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { OrganizationComponent } from './organization/organization.component';
import { InstitutionDashboardComponent } from './institution-dashboard/institution-dashboard.component';
import { MatSelectModule } from '@angular/material/select';
import { MatCardModule } from '@angular/material/card';
import { MatSelectSearchModule } from 'mat-select-search';
import { NgChartsModule } from 'ng2-charts';
import { LoanDetailsComponent } from './loan-details/loan-details.component';


@NgModule({
  declarations: [
    ApplicationComponent,
    DashboardComponent,
    OrganizationComponent,
    InstitutionDashboardComponent,
    LoanDetailsComponent,
  ],
  imports: [
    CommonModule,
    ApplicationRoutingModule,
    ComponentsModule,
    NgxSmartModalModule.forRoot(),
    FormsModule, 
    ReactiveFormsModule,
    MatSelectModule,
    MatCardModule,
    MatSelectSearchModule,
    NgChartsModule
  ]
})
export class ApplicationModule { }
