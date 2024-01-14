import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EditHourRoutingModule } from './edit-hour-routing.module';
import { EditHourComponent } from './edit-hour.component';


@NgModule({
  declarations: [
    EditHourComponent
  ],
  imports: [
    CommonModule,
    EditHourRoutingModule
  ]
})
export class EditHourModule { }
