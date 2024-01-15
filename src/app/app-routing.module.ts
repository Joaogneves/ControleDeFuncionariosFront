import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { FinishMonthComponent } from './components/finish-month/finish-month.component';

const routes: Routes = [
  { path: 'cadastrar', loadChildren: () => import('./components/register-employee/register-employee.module').then(m => m.RegisterEmployeeModule) }, 
  { path: 'funcionarios', loadChildren: () => import('./components/employees/employees.module').then(m => m.EmployeesModule) },
  { path: 'horarios/:id', loadChildren: () => import('./components/Employee/hours/hours.module').then(m => m.HoursModule) },
  { path: '', loadChildren: () => import('./components/employees/employees.module').then(m => m.EmployeesModule) },
  { path: 'edithour/:id', loadChildren: () => import('./components/edit-hour/edit-hour.module').then(m => m.EditHourModule) },
  { path: 'finalizarmes', component: FinishMonthComponent},
  {path:'**', component: NotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
