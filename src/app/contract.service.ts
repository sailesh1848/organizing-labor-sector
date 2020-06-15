import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Contract } from "./contract";
import { Observable } from "rxjs";
import { Skillset } from "./skillset";

@Injectable({
  providedIn: "root",
})
export class ContractService {
  baseURL: string = "http://localhost:1112/LabourMgm";

  viewParameter: number;
  editParameter: number;

  constructor(private http: HttpClient) {}

  postContract(contract: Contract): Observable<any> {
    return this.http.post(this.baseURL + "/Contract/", contract);
  }

  getSkillById(id: number): Observable<object> {
    return this.http.get(`${this.baseURL}/Skill/${id}`);
  }
  getContractList(): Observable<any> {
    return this.http.get(`${this.baseURL}` + "/contracts");
  }
}
