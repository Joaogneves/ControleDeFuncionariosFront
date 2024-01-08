import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: 'cadastrar', loadChildren: () => import('./components/register-employee/register-employee.module').then(m => m.RegisterEmployeeModule) }, 
  { path: 'funcionarios', loadChildren: () => import('./components/employees/employees.module').then(m => m.EmployeesModule) },
  { path: 'horarios/:id', loadChildren: () => import('./components/Employee/hours/hours.module').then(m => m.HoursModule) },
  { path: 'horario/:id', loadChildren: () => import('./components/Employee/hour/hour.module').then(m => m.HourModule) }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
