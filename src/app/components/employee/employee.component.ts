import { Component } from '@angular/core';
import { EmployeeDto } from '../../models/Employee';
import { EmployeeService } from '../../services/employee/employee.service';
import { ActivatedRoute, Router } from '@angular/router';
import { take } from 'rxjs';
import { WorkhourDto } from '../../models/Workhour';
import { WorkhourService } from '../../services/workhour/workhour.service';

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
  id: string | null;

  constructor(private employeeService: EmployeeService, private activateRoute: ActivatedRoute, private workService: WorkhourService, private router: Router) {
    this.employee = new EmployeeDto();
    this.workhour = new WorkhourDto();
    this.id = activateRoute.snapshot.paramMap.get('id');
    this.getById(String(this.id));
    this.ext = false;
    this.ext100 = false
  }

  getById(id: string) {
    this.employeeService.getById(id).pipe(take(1)).subscribe({
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
    this.workhour.startExtra = this.workhour.leave
  }

  save() {
    if(this.ext100 && !this.ext) {
      this.workhour.itsHolliday = true
      this.workhour.startExtra = null
      this.workhour.endExtra = null
    } else if(this.ext100 && this.ext) {
      this.workhour.startExtra = this.workhour.leave
      this.workhour.itsHolliday = false
    }
    this.workService.save(this.workhour, String(this.id)).pipe(take(1)).subscribe({
      next: res => {alert('Horário salvo'); this.router.navigate(['funcionarios'])}
    })
  }
}
