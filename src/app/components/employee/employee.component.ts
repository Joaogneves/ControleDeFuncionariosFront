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
  missing: boolean
  holiday: boolean

  constructor(private employeeService: EmployeeService, private activateRoute: ActivatedRoute, private workService: WorkhourService, private router: Router) {
    this.employee = new EmployeeDto();
    this.workhour = new WorkhourDto();
    this.id = activateRoute.snapshot.paramMap.get('id');
    this.getById(String(this.id));
    this.ext = false;
    this.ext100 = false
    this.missing = false
    this.holiday = false
  }

  getById(id: string) {
    this.employeeService.getById(id).pipe(take(1)).subscribe({
      next: (res: EmployeeDto) => { this.employee = res },
      error: err => { this.employee = new EmployeeDto(); alert(err) }
    })
  }

  extra() {
    if (this.ext && this.ext100) {
      this.ext = !this.ext
    }
    this.ext100 = !this.ext100
  }
  extra50() {
    this.ext = !this.ext
    this.workhour.startExtra = this.workhour.leave
  }

  save() {
    if (this.missing) {
      this.workhour.missing = true;
      this.workhour.entry = '00:00'
      this.workhour.breakInit = '00:00'
      this.workhour.breakEnd = '00:00'
      this.workhour.leave = '00:00'
      this.workhour.startExtra = '00:00'
      this.workhour.endExtra = '00:00'
    }
    if (this.ext100 && !this.ext) {
      this.workhour.itsHoliday = true
      this.workhour.startExtra = null
      this.workhour.endExtra = null
    } else if (this.ext100 && this.ext) {
      this.workhour.startExtra = this.workhour.leave
      this.workhour.itsHoliday = false
    }
    if (!this.isNull()) {
      this.workService.save(this.workhour, String(this.id)).pipe(take(1)).subscribe({
        next: res => { alert('Horário salvo'); this.router.navigate(['funcionarios']) }
      })
    } else {
      alert('Preencha todos os campos')
    }
  }

  setMissing() {
    this.missing = !this.missing;
  }

  setHoliday() {
    this.holiday = !this.holiday
  }

  private isNull(): boolean {
    return (
      this.workhour.workDay == '' ||
      this.workhour.entry == '' ||
      this.workhour.leave == '' ||
      this.workhour.breakInit == '' ||
      this.workhour.breakEnd == ''
    )
  }
}
