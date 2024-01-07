import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EmployeesComponent } from './employees.component';
import { EmployeeComponent } from '../employee/employee.component';
import { EditComponent } from '../Employee/edit/edit.component';

const routes: Routes = [
  { path: '', component: EmployeesComponent },
  { path: 'funcionario/:id', component: EmployeeComponent },
  { path: 'editar/:id', component: EditComponent },
  { path: 'horarios/:id', component: EditComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EmployeesRoutingModule { }
