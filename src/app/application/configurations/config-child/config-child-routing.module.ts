import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ConfigChildComponent } from './config-child.component';

const routes: Routes = [{ path: '', component: ConfigChildComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ConfigChildRoutingModule { }
