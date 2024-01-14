import { Component } from '@angular/core';
import { EmployeeDto } from '../../models/Employee';
import { WorkhourDto, WorkhourResponseDto } from '../../models/Workhour';
import { EmployeeService } from '../../services/employee/employee.service';
import { ActivatedRoute, Router } from '@angular/router';
import { WorkhourService } from '../../services/workhour/workhour.service';
import { take } from 'rxjs';

@Component({
  selector: 'app-edit-hour',
  templateUrl: './edit-hour.component.html',
  styleUrl: './edit-hour.component.css'
})
export class EditHourComponent {
  employee: EmployeeDto;
  workhour: WorkhourResponseDto;
  id: string | null;
  status: string[];
  statusSelected: string;
  enabledForm: boolean;
  extForm: boolean;

  constructor(private employeeService: EmployeeService, private activateRoute: ActivatedRoute, private workService: WorkhourService, private router: Router) {
    this.employee = new EmployeeDto();
    this.workhour = new WorkhourResponseDto();
    this.id = activateRoute.snapshot.paramMap.get('id');
    this.getWorhourById();
    this.status = ['Normal','Feriado', 'Folga', 'Horaextra100', 'HoraExtraNormal', 'Sabado50', 'Falta', 'Sabado', 'Domingo'];
    this.statusSelected = 'Selecione um status';
    this.enabledForm = true;
    this.extForm = false;
  }
  
  getWorhourById() {
    this.workService.getById(String(this.id)).pipe(take(1)).subscribe({
      next: (res: WorkhourResponseDto) => {this.workhour = res; this.employee = res.employee;},
      error: err => {alert('Erro')}
    });
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
      case 'Horaextra100':{
        this.enabledForm = true;
        this.extForm = false;
      }
        break;
      case 'Falta':{
        this.enabledForm = false;
        this.extForm = false;
      }
        break;
      case 'Sabado': {
        this.enabledForm = false;
        this.extForm = false;
      }
        break;
      case 'Sabado50': {
        this.enabledForm = true;
        this.extForm = false;
      }
        break;
      case 'HoraExtraNormal': {
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
    this.workhour.workhourStatus = this.statusSelected.toUpperCase();
    switch (this.statusSelected) {
      case 'Feriado': {
        this.workhour.entry = '00:00:00'
        this.workhour.breakInit = '00:00:00'
        this.workhour.breakEnd = '00:00:00'
        this.workhour.leave = '00:00:00'
        this.workhour.startExtra = null
        this.workhour.endExtra = null
      }
        break;
      case 'Folga': {
        this.workhour.entry = '00:00:00'
        this.workhour.breakInit = '00:00:00'
        this.workhour.breakEnd = '00:00:00'
        this.workhour.leave = '00:00:00'
        this.workhour.startExtra = null
        this.workhour.endExtra = null
      }
        break;
      case 'Falta':{
        this.workhour.entry = '00:00:00'
        this.workhour.breakInit = '00:00:00'
        this.workhour.breakEnd = '00:00:00'
        this.workhour.leave = '00:00:00'
        this.workhour.startExtra = null
        this.workhour.endExtra = null
      }
        break;
      case 'Sabado': {
        this.workhour.entry = '00:00:00'
        this.workhour.breakInit = '00:00:00'
        this.workhour.breakEnd = '00:00:00'
        this.workhour.leave = '00:00:00'
        this.workhour.startExtra = null
        this.workhour.endExtra = null
      }
        break; 
      case 'Domingo': {
        this.workhour.entry = '00:00:00'
        this.workhour.breakInit = '00:00:00'
        this.workhour.breakEnd = '00:00:00'
        this.workhour.leave = '00:00:00'
        this.workhour.startExtra = null
        this.workhour.endExtra = null
      }
      break;
      case 'HoraExtraNormal': {
        this.workhour.leave = this.workhour.startExtra!
      }
    }

    console.log(this.workhour)
     if (!this.isNull()) {
       this.workService.update(this.workhour).pipe(take(1)).subscribe({
         next: res => { alert('Horário salvo'); this.router.navigate(['funcionarios']) }
       })
     } else {
       alert('Preencha todos os campos')
      }
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
