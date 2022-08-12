import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ConfigChildRoutingModule } from './config-child-routing.module';
import { ConfigChildComponent } from './config-child.component';


@NgModule({
  declarations: [
    ConfigChildComponent
  ],
  imports: [
    CommonModule,
    ConfigChildRoutingModule
  ]
})
export class ConfigChildModule { }
