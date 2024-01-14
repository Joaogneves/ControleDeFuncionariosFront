import { Component } from '@angular/core';
import { WorkhourService } from '../../../services/workhour/workhour.service';
import { ActivatedRoute, Router } from '@angular/router';
import { take } from 'rxjs';
import { WorkhourResponseDto } from '../../../models/Workhour';
import { EmployeeDto } from '../../../models/Employee';
import { EmployeeService } from '../../../services/employee/employee.service';

@Component({
  selector: 'app-hours',
  templateUrl: './hours.component.html',
  styleUrl: './hours.component.css'
})
export class HoursComponent {

  works: WorkhourResponseDto[]
  employee: EmployeeDto
  employeeId: string | null
  constructor(private service: WorkhourService, private activatedRoute: ActivatedRoute, private eService: EmployeeService, private router: Router) {
    this.employeeId = activatedRoute.snapshot.paramMap.get('id');
    this.works = [];
    this.employee = new EmployeeDto();
    this.getAllByEmployeeId();
    this.getEmployee()
    }

  getAllByEmployeeId() {
    this.service.getByEmployee(String(this.employeeId)).pipe(take(1)).subscribe({
      next: (res: WorkhourResponseDto[]) => {this.works = res},
      error: err => {alert('Erro')}
    })
  }

  getEmployee() {
    this.eService.getById(String(this.employeeId)).pipe(take(1)).subscribe({
      next: (res: EmployeeDto) => {this.employee = res}
    })
  }

  confirmDelete(id: string) {
    if(confirm("Deseja deletar esse horário ?")) {
      this.delete(id);
    } 
  }

  delete(id: string) {
    this.service.delete(id).subscribe({
      next: res => {this.router.navigate(['funcionarios'])},
      error: err => {this.router.navigate(['funcionarios'])}
    })
  }
}
