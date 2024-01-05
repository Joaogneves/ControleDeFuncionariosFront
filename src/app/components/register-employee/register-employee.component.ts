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

  constructor(private service: EmployeeService, private route: Router) {
    this.employee = new EmployeeDto();
  }

  register() {
    if(this.allCheck()) {
        alert('Preencha todos os campos');
      } else {
        this.service.register(this.employee)
          .pipe(take(1))
          .subscribe({
            next: res => {
              console.log(res);
              alert(`Funcionário ${this.employee.firstName} cadastrado`);
              this.route.navigate([''])
            }, 
            error: err => console.log(err)
        })
      }
  }

  clear() {
    this.employee = new EmployeeDto()
  }

  private allCheck() : boolean {
    return (
      this.employee.firstName == '' || 
      this.employee.lastName == '' || 
      this.employee.cnpj == ''|| 
      this.employee.cpf == '' ||
      this.employee.funcao == ''
    )
  }
}
