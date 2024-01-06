import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EmployeesComponent } from './employees.component';
import { EmployeeComponent } from '../employee/employee.component';

const routes: Routes = [
  { path: '', component: EmployeesComponent },
  { path: 'funcionario/:id', component: EmployeeComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EmployeesRoutingModule { }
