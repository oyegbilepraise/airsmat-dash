import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ApplicationRoutingModule } from './application-routing.module';
import { ApplicationComponent } from './application.component';
import { ComponentsModule } from '../components/components.module';
import { DashboardComponent } from './dashboard/dashboard.component';
import { NgxSmartModalModule } from 'ngx-smart-modal';


@NgModule({
  declarations: [
    ApplicationComponent,
    DashboardComponent,
  ],
  imports: [
    CommonModule,
    ApplicationRoutingModule,
    ComponentsModule,
    NgxSmartModalModule.forRoot(),
  ]
})
export class ApplicationModule { }
