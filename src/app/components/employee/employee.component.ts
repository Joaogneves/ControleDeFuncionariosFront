import { Component } from '@angular/core';
import { EmployeeDto } from '../../models/Employee';
import { EmployeeService } from '../../services/employee/employee.service';
import { ActivatedRoute } from '@angular/router';
import { take } from 'rxjs';
import { WorkhourDto } from '../../models/Workhour';

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrl: './employee.component.css'
})
export class EmployeeComponent {

  employee: EmployeeDto;
  workhour: WorkhourDto;
  ext: boolean;
  ext100: boolean

  constructor(private service: EmployeeService, activateRoute: ActivatedRoute) {
    this.employee = new EmployeeDto();
    this.workhour = new WorkhourDto();
    const id: string | null = activateRoute.snapshot.paramMap.get('id');
    this.getById(String(id));
    this.ext = false;
    this.ext100 = false
  }

  getById(id: string) {
    this.service.getById(id).pipe(take(1)).subscribe({
      next: (res:EmployeeDto) => {this.employee = res},
      error: err => {this.employee = new EmployeeDto(); alert(err)}
    })
  }

  extra() {
    if(this.ext && this.ext100) {
      this.ext = !this.ext
    }
    this.ext100 = !this.ext100
  }
  extra50() {
    this.ext = !this.ext
    console.log(this.ext);
  }

}
