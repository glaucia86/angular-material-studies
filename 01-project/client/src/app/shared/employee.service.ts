import { Injectable } from '@angular/core';
import { Employee } from './employee';
import { environment } from 'src/environments/environment';
import { Observable, throwError } from 'rxjs';
import { catchError, map } from 'rxjs/operators';
import {
  HttpClient,
  HttpHeaders,
  HttpErrorResponse
} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  endpoint: string = environment.baseUrl;
  headers = new HttpHeaders().set('Content-Type', 'application/json');

  constructor(private http: HttpClient) { }

  /**
   * Method responsible for adding a new employee
   * (POST) http://localhost:3000/api/v1/employees
   */
  createEmployee(employee: Employee): Observable<any> {
    return this
      .http
      .post(`${this.endpoint}/employees`, employee)
      .pipe(catchError(this.handleError));
  }

  /**
   * Method responsible for getting all employees
   * (GET) http://localhost:3000/api/v1/employees
   */
  getEmployees() {
    return this
      .http
      .get(`${this.endpoint}/employees`);
  }

  /**
   * Method responsible for getting a single employee
   * (GET) http://localhost:3000/api/v1/employees/:id
   */
  getEmployee(id: string): Observable<any> {
    return this
      .http
      .get(`${this.endpoint}/employees/${id}`)
      .pipe(catchError(this.handleError));
  }

  /**
   * Method responsible for updating a single employee
   * (PUT) http://localhost:3000/api/v1/employees/:id
   */
  updateEmployee(id: string, employee: Employee): Observable<any> {
    return this
      .http
      .put(`${this.endpoint}/employees/${id}`, employee)
      .pipe(catchError(this.handleError));
  }

  /**
   * Method responsible for deleting a single employee
   * (DELETE) http://localhost:3000/api/v1/employees/:id
   */
  deleteEmployee(id: string): Observable<any> {
    return this
      .http
      .delete(`${this.endpoint}/employees/${id}`)
      .pipe(catchError(this.handleError));
  }

  /**
   * Method responsible for handling errors
   */
  handleError(error: HttpErrorResponse) {
    let errorMessage = '';
    if (error.error instanceof ErrorEvent) {
      errorMessage = error.error.message;
    } else {
      errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
    }

    console.log(errorMessage);

    return throwError(() => {
      return errorMessage;
    });
  }
}
