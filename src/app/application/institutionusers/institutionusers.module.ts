import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { InstitutionusersRoutingModule } from './institutionusers-routing.module';
import { InstitutionusersComponent } from './institutionusers.component';


@NgModule({
  declarations: [
    InstitutionusersComponent
  ],
  imports: [
    CommonModule,
    InstitutionusersRoutingModule
  ]
})
export class InstitutionusersModule { }
