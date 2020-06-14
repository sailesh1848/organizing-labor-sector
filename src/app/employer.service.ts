import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";
import { Employer } from "./employer";

@Injectable({
  providedIn: "root",
})
export class EmployerService {
  private baseUrl = "http://localhost:1112/LabourMgm";
  viewParameter: number;
  editParameter: number;

  constructor(private http: HttpClient) {}
  getEmployerList(): Observable<any> {
    return this.http.get(`${this.baseUrl}` + "/Employer/");
  }

  createEmployer(employer: Employer): Observable<object> {
    return this.http.post(`${this.baseUrl}` + "/Employer/", employer);
  }

  getEmployerById(id: number): Observable<object> {
    return this.http.get(`${this.baseUrl}/Employer/${id}`);
  }

  deleteEmployer(id: number): Observable<any> {
    return this.http.delete(`${this.baseUrl}/Employer/${id}`);
  }

  updateEmployer(employer: Employer): Observable<Object> {
    return this.http.put(`${this.baseUrl}` + "/Employer/", employer);
  }
}
