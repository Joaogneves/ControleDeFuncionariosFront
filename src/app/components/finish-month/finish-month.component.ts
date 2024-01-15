import { Component } from '@angular/core';
import { WorkhourService } from '../../services/workhour/workhour.service';
import { take } from 'rxjs';

@Component({
  selector: 'app-finish-month',
  templateUrl: './finish-month.component.html',
  styleUrl: './finish-month.component.css'
})
export class FinishMonthComponent {

  monthSelected: string;
  modalFinish: boolean;
  modalReport: boolean;

  resultadoTemp: any[]; 

  constructor(private service: WorkhourService) {
    this.monthSelected = 'Selecione um mês';
    this.modalFinish = false
    this.modalReport = false
    this.resultadoTemp = [];
  }
 
  setReport() {
    this.modalReport = true
    this.modalFinish = false
  }
  setFinish() {
    this.modalFinish = true
    this.modalReport = false
  }

  finish() {
    console.log('Chamou')
    this.service.finishAll(this.monthSelected).pipe(take(1)).subscribe({
      next: res => {this.resultadoTemp = res; console.log(this.resultadoTemp)},
      error: err => {alert("Erro"); console.log(err)}
    });
  }
}
