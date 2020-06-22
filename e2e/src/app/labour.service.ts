import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";

@Injectable({
  providedIn: "root",
})
export class LabourService {
  private baseUrl = "http://18.216.205.134:1112/LabourMgm";
  viewParameter: number;
  editParameter: number;

  constructor(private http: HttpClient) {}

  getLabourList(): Observable<any> {
    return this.http.get(`${this.baseUrl}` + "/labourers");
  }

  createLabour(labour: object): Observable<object> {
    return this.http.post(`${this.baseUrl}` + "/labourers", labour);
  }

  deleteLabour(labourer_id: number): Observable<any> {
    return this.http.delete(`${this.baseUrl}/labourers/${labourer_id}`, {
      responseType: "text",
    });
  }

  getLabour(labourer_id: number): Observable<Object> {
    return this.http.get(`${this.baseUrl}/labourers/${labourer_id}`);
  }

  updateLabour(labourer_id: number, value: any): Observable<Object> {
    console.log(labourer_id);
    return this.http.post(`${this.baseUrl}/labourers/${labourer_id}`, value);
  }
}
