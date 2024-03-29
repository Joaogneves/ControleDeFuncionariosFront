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
    this.status = ['Normal', 'Feriado', 'Folga', 'Horaextra100', 'HoraExtraNormal', 'Sabado50', 'Falta', 'Sabado', 'Domingo'];
    this.statusSelected = 'Selecione um status';
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
      case 'Horaextra100': {
        this.enabledForm = true;
        this.extForm = false;
      }
        break;
      case 'Falta': {
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
      case 'Falta': {
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
    if (!this.isNull()) {
      this.workService.save(this.workhour, String(this.id)).pipe(take(1)).subscribe({
        next: res => { alert('Horário salvo'); this.router.navigate(['funcionarios']) }
      })
    } else {
      alert('Preencha todos os campos')
    }
  }

  autoComplete() {
    let date = new Date();
    let day = date.getDate();
    let month = date.getMonth() + 1;
    let year = date.getFullYear();
    let nd;
    let nm;
    nd = String(day);
    nm = String(month);
    nm = nm.length == 1 ? `0${month}`: `${month}`
    nd = nm.length == 1 ? `0${day}`: `${day}`
    console.log()
    this.statusSelected = 'Normal'
    this.workhour.workDay = `${year}-${nm}-${nd}`
    this.workhour.entry = '07:00'
    this.workhour.breakInit = '12:00'
    this.workhour.breakEnd = '13:00'
    this.workhour.leave = '17:00'
    this.workhour.startExtra = null
    this.workhour.endExtra = null
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
