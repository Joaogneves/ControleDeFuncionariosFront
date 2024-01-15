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

  getById(id: string): Observable<WorkhourResponseDto> {
    return this.http.get<WorkhourResponseDto>(`${this.url}/${id}`)
  }

  save(workhour: WorkhourDto, employeeId: string): Observable<WorkhourDto> {
    return this.http.post<WorkhourDto>(`${this.url}?employeeId=${employeeId}`, workhour)
  }

  getByEmployee(employeeId: string): Observable<WorkhourResponseDto[]> {
    return this.http.get<WorkhourResponseDto[]>(`${this.url}/employee/${employeeId}`)
  }

  delete(id: string) {
    return this.http.delete(`${this.url}/${id}`)
  }

  update(workhour: WorkhourDto): Observable<WorkhourDto> {
    return this.http.put<WorkhourDto>(this.url, workhour);
  }

  finishAll(month: string): Observable<any[]> {
    return this.http.get<any[]>(`${this.url}/endmonth?month=${month}`)
  }
}
