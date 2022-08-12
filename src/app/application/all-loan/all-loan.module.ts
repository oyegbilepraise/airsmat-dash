import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AllLoanRoutingModule } from './all-loan-routing.module';
import { AllLoanComponent } from './all-loan.component';


@NgModule({
  declarations: [
    AllLoanComponent
  ],
  imports: [
    CommonModule,
    AllLoanRoutingModule
  ]
})
export class AllLoanModule { }
