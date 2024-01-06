import { Component } from '@angular/core';
import { EmployeeService } from '../../services/employee/employee.service';
import { take } from 'rxjs';
import { EmployeeDto } from '../../models/Employee';

@Component({
  selector: 'app-employees',
  templateUrl: './employees.component.html',
  styleUrl: './employees.component.css'
})
export class EmployeesComponent {

  employees: EmployeeDto[];
  id: number;

  constructor(private service: EmployeeService) {
    this.employees = []
    this.id = 0;
    this.getEmployees();
  }


  getEmployees() {
    this.service.getAll().pipe(take(1)).subscribe({
      next: (res:EmployeeDto[]) => {this.employees = res},
      error: erro => {this.employees = []; alert(erro)}
    })
  }

  teste() {
    console.log('Clicou');
    
  }
}
