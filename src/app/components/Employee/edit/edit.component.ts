import { Component } from '@angular/core';
import { EmployeeDto } from '../../../models/Employee';
import { EmployeeService } from '../../../services/employee/employee.service';
import { ActivatedRoute } from '@angular/router';
import { take } from 'rxjs';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrl: './edit.component.css'
})
export class EditComponent {

  employee: EmployeeDto

  constructor(private service: EmployeeService, activateRoute: ActivatedRoute) {
    this.employee = new EmployeeDto;
    const id: string | null = activateRoute.snapshot.paramMap.get('id');
    this.getById(String(id));
  }

  getById(id: string) {
    this.service.getById(id).pipe(take(1)).subscribe({
      next: (res:EmployeeDto) => {this.employee = res},
      error: err => {this.employee = new EmployeeDto(); alert(err)}
    })
  }

  changeEmployee() {
    this.service.changeEmployee(this.employee).pipe(take(1)).subscribe({
      next: (res:EmployeeDto) => {this.employee = res, location.href = ''},
      error: err => {alert(err)}
    })
  }
}
