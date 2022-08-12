import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InstitutionsComponent } from './institutions.component';

const routes: Routes = [
  { path: '', component: InstitutionsComponent, children: [

  ]},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class InstitutionsRoutingModule {}
