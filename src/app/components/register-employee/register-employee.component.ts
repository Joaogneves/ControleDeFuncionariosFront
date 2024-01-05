import { Component } from '@angular/core';
import { EmployeeDto } from '../../models/Employee';

@Component({
  selector: 'app-register-employee',
  templateUrl: './register-employee.component.html',
  styleUrl: './register-employee.component.css'
})
export class RegisterEmployeeComponent {

  employee: EmployeeDto;

  constructor() {
    this.employee = new EmployeeDto();
  }


  register() {
    console.log('Ok')
  }

  clear() {
    this.employee = new EmployeeDto()
  }
}
