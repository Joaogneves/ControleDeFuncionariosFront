import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { WorkhourDto, WorkhourResponseDto } from '../../models/Workhour';

@Injectable({
  providedIn: 'root'
})
export class WorkhourService {

  private url: string;
  constructor(private http: HttpClient) { 
    this.url = 'http://localhost:8080/api/workhour'
  }

  save(workhour: WorkhourDto, employeeId: string): Observable<WorkhourDto> {
    return this.http.post<WorkhourDto>(`${this.url}?employeeId=${employeeId}`, workhour)
  }

  getByEmployee(employeeId: string): Observable<WorkhourResponseDto[]> {
    return this.http.get<WorkhourResponseDto[]>(`${this.url}/employee/${employeeId}`)
  }
}
