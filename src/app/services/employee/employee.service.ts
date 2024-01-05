import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { EmployeeDto } from '../../models/Employee';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
    }),
  };

  url: string

  constructor(private http: HttpClient) {
    this.url = 'http://localhost:8080/api/employee'
  }

  register(employee: any) {
    return this.http.post(this.url, employee, this.httpOptions)
  }
}
