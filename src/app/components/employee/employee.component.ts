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
  id: string | null;
  status: string[];
  statusSelected: string;
  enabledForm: boolean;
  extForm: boolean;

  constructor(private employeeService: EmployeeService, private activateRoute: ActivatedRoute, private workService: WorkhourService, private router: Router) {
    this.employee = new EmployeeDto();
    this.workhour = new WorkhourDto();
    this.id = activateRoute.snapshot.paramMap.get('id');
    this.getById(String(this.id));
    this.status = ['Normal','Feriado', 'Folga', 'Hora extra 100%', 'Hora extra 50%', 'Falta', 'Sábado', 'Domingo'];
    this.statusSelected = '';
    this.enabledForm = true;
    this.extForm = false;
  }

  getById(id: string) {
    this.employeeService.getById(id).pipe(take(1)).subscribe({
      next: (res: EmployeeDto) => { this.employee = res },
      error: err => { this.employee = new EmployeeDto(); alert(err) }
    })
  }

  setStatus() {
    switch (this.statusSelected) {
      case 'Feriado': {
        this.enabledForm = false;
        this.extForm = false;
      }
        break;
      case 'Folga': {
        this.enabledForm = false;
        this.extForm = false;
      }
        break;
      case 'Hora extra 100%':{
        this.enabledForm = true;
        this.extForm = false;
      }
        break;
      case 'Falta':{
        this.enabledForm = false;
        this.extForm = false;
      }
        break;
      case 'Sábado': {
        this.enabledForm = false;
        this.extForm = false;
      }
        break;
      case 'Sábado 50%': {
        this.enabledForm = true;
        this.extForm = false;
      }
        break;
      case 'Hora extra 50%': {
        this.enabledForm = true;
        this.extForm = true;
      }
        break;
      case 'Normal': {
        this.enabledForm = true;
        this.extForm = false;
      }
        break; 
      case 'Domingo': {
        this.enabledForm = false;
        this.extForm = false;
      }
      break;
    }
  }

  save() {
    
    // if (!this.isNull()) {
    //   this.workService.save(this.workhour, String(this.id)).pipe(take(1)).subscribe({
    //     next: res => { alert('Horário salvo'); this.router.navigate(['funcionarios']) }
    //   })
    // } else {
    //   alert('Preencha todos os campos')
    // }
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
