import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RegisterEmployeeRoutingModule } from './register-employee-routing.module';
import { RegisterEmployeeComponent } from './register-employee.component';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    RegisterEmployeeComponent
  ],
  imports: [
    CommonModule,
    RegisterEmployeeRoutingModule,
    FormsModule
  ]
})
export class RegisterEmployeeModule { }
