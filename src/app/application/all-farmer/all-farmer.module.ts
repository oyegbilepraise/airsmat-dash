import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AllFarmerRoutingModule } from './all-farmer-routing.module';
import { AllFarmerComponent } from './all-farmer.component';


@NgModule({
  declarations: [
    AllFarmerComponent
  ],
  imports: [
    CommonModule,
    AllFarmerRoutingModule
  ]
})
export class AllFarmerModule { }
