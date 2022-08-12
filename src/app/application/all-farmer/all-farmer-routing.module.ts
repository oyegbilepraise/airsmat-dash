import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AllFarmerComponent } from './all-farmer.component';

const routes: Routes = [{ path: '', component: AllFarmerComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AllFarmerRoutingModule { }
