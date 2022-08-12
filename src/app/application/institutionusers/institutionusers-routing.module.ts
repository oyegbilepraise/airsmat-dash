import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InstitutionusersComponent } from './institutionusers.component';

const routes: Routes = [{ path: '', component: InstitutionusersComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class InstitutionusersRoutingModule { }
