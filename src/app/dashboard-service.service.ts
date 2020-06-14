import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";

@Injectable({
  providedIn: "root",
})
export class DashboardServiceService {
  private baseUrl = "http://localhost:1112/LabourMgm";
  viewParameter: number;
  editParameter: number;

  constructor(private http: HttpClient) {}
  getEmployerList(): Observable<any> {
    return this.http.get(`${this.baseUrl}` + "/Employer/");
  }

  getContractList(): Observable<any> {
    return this.http.get(`${this.baseUrl}` + "/Contract/");
  }
}
