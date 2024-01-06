import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { EmployeeDto } from '../../models/Employee';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
    }),
  };

  private url: string

  constructor(private http: HttpClient) {
    this.url = 'http://localhost:8080/api/employee'
  }

  register(employee: any) {
    return this.http.post(this.url, employee, this.httpOptions)
  }

  getAll(): Observable<EmployeeDto[]> {
    return this.http.get<EmployeeDto[]>(this.url)
  }

  getById(id: string): Observable<EmployeeDto> {
    return this.http.get<EmployeeDto>(this.url + '/' + id)
  }

  changeEmployee(employee: EmployeeDto): Observable<EmployeeDto> {
    return this.http.put<EmployeeDto>(this.url, employee)
  }

  getByWorkplace(keyPress: string): Observable<EmployeeDto[]> {
    return this.http.get<EmployeeDto[]>(`${this.url}/search?workplace=${keyPress}`)
  }

}
