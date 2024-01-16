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
  searchKey:string
  employeeSelected: EmployeeDto;

  constructor(private service: EmployeeService) {
    this.employees = []
    this.id = 0;
    this.searchKey = '';
    this.getEmployees();
    this.employeeSelected = new EmployeeDto();
  }


  getEmployees() {
    this.service.getAll().pipe(take(1)).subscribe({
      next: (res:EmployeeDto[]) => {this.employees = res},
      error: erro => {this.employees = []; alert(erro)}
    })
  }
  search() {
    this.service.getByWorkplace(this.searchKey).pipe(take(1)).subscribe({
      next: (res:EmployeeDto[]) => {this.employees = res},
      error: erro => {this.employees = []; alert(erro)}
    })
  }

  selectEmployee(id: string, firstName: string, lastName: string) {
    this.employeeSelected.firstName = firstName;
    this.employeeSelected.lastName = lastName;
    this.employeeSelected.id = id;
  }

  delete(id:string) {
    this.service.delete(id).pipe(take(1)).subscribe({
      next: res => {location.href=''},
      error: err => {location.href=''}
    });
  }
}
