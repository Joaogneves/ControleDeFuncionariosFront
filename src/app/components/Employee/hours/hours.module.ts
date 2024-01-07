import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HoursRoutingModule } from './hours-routing.module';
import { HoursComponent } from './hours.component';


@NgModule({
  declarations: [
    HoursComponent
  ],
  imports: [
    CommonModule,
    HoursRoutingModule
  ]
})
export class HoursModule { }
