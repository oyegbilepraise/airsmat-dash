import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { InstitutionsRoutingModule } from './institutions-routing.module';
import { InstitutionsComponent } from './institutions.component';


@NgModule({
  declarations: [
    InstitutionsComponent
  ],
  imports: [
    CommonModule,
    InstitutionsRoutingModule,
  ]
})
export class InstitutionsModule { }
