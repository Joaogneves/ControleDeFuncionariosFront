import { Component } from '@angular/core';
import { EmployeeDto } from '../../models/Employee';
import { EmployeeService } from '../../services/employee/employee.service';
import { take } from 'rxjs';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register-employee',
  templateUrl: './register-employee.component.html',
  styleUrl: './register-employee.component.css'
})
export class RegisterEmployeeComponent {

  employee: EmployeeDto;
  invalid: boolean;
  message: string;

  constructor(private service: EmployeeService, private route: Router) {
    this.employee = new EmployeeDto();
    this.invalid = false;
    this.message = '';
  }

  register() {
    if (this.allCheck()) {
      this.invalid = true
    } else {
      this.service.register(this.employee)
        .pipe(take(1))
        .subscribe({
          next: res => {
            location.href = ''
          },
          error: err => err.status === 500 ? (this.message = 'CPF ou CNPJ inválidos', this.invalid = false): (this.message = 'Erro desconhecido ' + err.status, this.invalid = false)
        })
    }
  }

  clear() {
    this.employee = new EmployeeDto()
  }

  Confirm() {
    if (this.allCheck()) {
      this.invalid = true
      this.message = ''
    }
    else {
      this.invalid = false
      this.message = ''
    }
  }

  private allCheck(): boolean {
    return (
      this.employee.firstName == '' ||
      this.employee.lastName == '' ||
      this.employee.cnpj == '' ||
      this.employee.cpf == '' ||
      this.employee.funcao == ''
    )
  }
}
