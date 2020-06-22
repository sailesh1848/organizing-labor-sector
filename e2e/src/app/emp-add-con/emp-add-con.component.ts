import { Component, OnInit } from "@angular/core";
import { FormGroup, FormControl, Validators } from "@angular/forms";
import { Contract } from "../contract";
import { ContractService } from "../contract.service";
import { Employer } from "../employer";
import { Observable } from "rxjs";
import { EmployerService } from "../employer.service";
import { Skillset } from "../skillset";
import { Router, RouterLink } from '@angular/router';

@Component({
  selector: "app-emp-add-con",
  templateUrl: "./emp-add-con.component.html",
  styleUrls: ["./emp-add-con.component.css"],
})
export class EmpAddConComponent implements OnInit {
  //registerContractForm: FormGroup;
  contract = new Contract();
  submitted = false;
  skill1: Skillset = new Skillset();
  skill2: Skillset = new Skillset();
  skill3: Skillset = new Skillset();

  constructor(
    private service: ContractService,
    private empservice: EmployerService,
  ) {}

  ngOnInit(): void {
    this.submitted = false;
  }

  save() {
    this.service.postContract(this.contract)
      .subscribe(data => console.log(data), error => console.log(error));
    this.contract = new Contract();
    //this.router(['/emp']);
    //this.submitted= false;
  }

   /* this.fetchEmployers();
    this.registerContractForm = new FormGroup({
      employerId: new FormControl("", [Validators.required]),
      //employerName: new FormControl("", [Validators.required]),
      startdate: new FormControl("", [Validators.required]),
      enddate: new FormControl("", [Validators.required]),
      city: new FormControl("", [
        Validators.required,
        Validators.pattern("[a-zA-Z ]{3,50}"),
      ]),
      state: new FormControl("", Validators.required),
      totalNoOfLabourerNeeded: new FormControl("", Validators.required),
      skill_1: new FormControl("", Validators.required),
      labourerNeededSkillset1: new FormControl("",Validators.required),
      skill_2: new FormControl("", Validators.required),
      labourerNeededSkillset2: new FormControl("",Validators.required),

      skill_3: new FormControl("", Validators.required),
      labourerNeededSkillset3: new FormControl("",Validators.required),

      dailyWageSkillset1: new FormControl("", [
        Validators.required,
        Validators.min(this.thecontract.minDailyWageSkillset1),
      ]),
      dailyWageSkillset2: new FormControl("", [
        Validators.required,
        Validators.min(this.thecontract.minDailyWageSkillset2),
      ]),
      dailyWageSkillset3: new FormControl("", [
        Validators.required,
        Validators.min(this.thecontract.minDailyWageSkillset3),
      ]),
      medicalInsuranceCover: new FormControl("", [Validators.required]),
    });
    this.submitted = false;
  }
  fetchEmployers() {
    this.empservice.getEmployerList().subscribe((data) => {
      console.log(data);
      this.employers = data;
     
    });
  }

  onSubmit(savecontarct) {
   
    this.thecontract.employerId = this.registerContractForm.get(
      "employerId"
    ).value;
    this.thecontract.employmentStartDate = this.registerContractForm.get(
      "startdate"
    ).value;
    this.thecontract.employmentEndDate = this.registerContractForm.get(
      "enddate"
    ).value;
    this.thecontract.employmentCity = this.registerContractForm.get(
      "city"
    ).value;
    this.thecontract.employmentState = this.registerContractForm.get(
      "state"
    ).value;
    this.thecontract.totalNoOfLabourerNeeded = this.registerContractForm.get(
      "totalNoOfLabourerNeeded"
    ).value;

    this.thecontract.dailyWageSkillset1 = this.registerContractForm.get(
      "dailyWageSkillset1"
    ).value;
    this.thecontract.dailyWageSkillset2 = this.registerContractForm.get(
      "dailyWageSkillset2"
    ).value;
    this.thecontract.dailyWageSkillset3 = this.registerContractForm.get(
      "dailyWageSkillset3"
    ).value;
    this.thecontract.skillset1 = this.registerContractForm.get(
      "skill_1").value;
    this.thecontract.labourerNeededSkillset1 = this.registerContractForm.get(
      "labourerNeededSkillset1"
    ).value;
    this.thecontract.skillset2 = this.registerContractForm.get(
      "skill_2").value;
    this.thecontract.labourerNeededSkillset2 = this.registerContractForm.get(
      "labourerNeededSkillset2"
    ).value;
    this.thecontract.skillset3 = this.registerContractForm.get(
      "skill_3").value;
    this.thecontract.labourerNeededSkillset3 = this.registerContractForm.get(
      "labourerNeededSkillset3"
    ).value;
    this.thecontract.medicalInsuranceCover = this.registerContractForm.get(
      "medicalInsuranceCover"
    ).value;

    this.service.postContract(this.thecontract).subscribe((data) => {
      console.log(data);
    });
    this.submitted = true;
  }
  addContractForm() {
    this.submitted = false;
    this.registerContractForm.reset();
  }
  employers: Observable<Employer[]>;
*/
  skillWage1(event) {
    if (this.contract.skillset1 === 11) {
      console.log("called ", event);
      console.log(this.contract.skillset1);
      this.service.getSkillById(this.contract.skillset1).subscribe(
        (data) => {
          this.skill1 = <Skillset>data;
          this.contract.minDailyWageSkillset1 = this.skill1.minDailyWage;
          console.log(this.skill1);
        },
        (data) => console.log(data)
      );
    }
  }

  skillWage2(event) {
    if (this.contract.skillset2.toString().length === 2) {
      console.log("called ", event);
      console.log(this.contract.skillset2);
      this.service.getSkillById(this.contract.skillset2).subscribe(
        (data) => {
          this.skill2 = <Skillset>data;
          this.contract.minDailyWageSkillset2 = this.skill2.minDailyWage;
          console.log(this.skill2);
        },
        (data) => console.log(data)
      );
    }
  }

  skillWage3(event) {
    if (this.contract.skillset3.toString().length === 2) {
      console.log("called ", event);
      console.log(this.contract.skillset3);
      this.service.getSkillById(this.contract.skillset3).subscribe(
        (data) => {
          this.skill3 = <Skillset>data;
          this.contract.minDailyWageSkillset3 = this.skill3.minDailyWage;
          console.log(this.skill3);
        },
        (data) => console.log(data)
      );
    }
  }
 /* skills = [
    { id: 11, value: "Plumber" },
    { id: 12, value: "Construction" },
    { id: 13, value: "Carpenter" },
  ];*/
}
