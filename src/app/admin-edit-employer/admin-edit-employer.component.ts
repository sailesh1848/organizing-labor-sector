import { Component, OnInit, ChangeDetectorRef } from "@angular/core";
import { FormGroup, FormControl, Validators } from "@angular/forms";
import { EmployerService } from "../employer.service";
import { Employer } from "../employer";
import { Router } from "@angular/router";

@Component({
  selector: "app-admin-edit-employer",
  templateUrl: "./admin-edit-employer.component.html",
  styleUrls: ["./admin-edit-employer.component.css"],
})
export class AdminEditEmployerComponent implements OnInit {
  registerEmployerForm: FormGroup;
  employer: Employer = new Employer();

  constructor(
    private service: EmployerService,
    private route: Router,
    private cDF: ChangeDetectorRef
  ) {}

  ngOnInit(): void {
    this.registerEmployerForm = new FormGroup({
      employerName: new FormControl("", [
        Validators.required,
        Validators.pattern("[a-zA-Z ]{3,50}"),
      ]),
      address: new FormControl("", [
        Validators.required,
        Validators.pattern("[a-zA-Z ]{3,100}"),
      ]),
      city: new FormControl("", [
        Validators.required,
        Validators.pattern("[a-zA-Z ]{3,50}"),
      ]),
      state: new FormControl("", Validators.required),
      pincode: new FormControl("", [
        Validators.required,
        Validators.pattern("^[1-9][0-9]{5}$"),
      ]),
      contactName: new FormControl("", [
        Validators.required,
        Validators.pattern("[a-zA-Z ]{3,50}"),
      ]),
      phNo: new FormControl("", [
        Validators.required,
        Validators.pattern("[0-9]{10}"),
      ]),
      businessType: new FormControl({ value: null, disabled: true }),
      tanNo: new FormControl({ value: null, disabled: true }),
      regnNo: new FormControl({ value: null, disabled: true }),
      creationDate: new FormControl({ value: null, disabled: true }),
      lastModifiedDate: new FormControl({ value: null, disabled: true }),
      status: new FormControl("", [Validators.required]),
      employerId: new FormControl({ value: null, disabled: true }),
    });

    this.service
      .getEmployerById(this.service.editParameter)
      .subscribe((data) => {
        this.employer = <Employer>data;
      });
  }

  onSubmit() {
    this.employer.employerName = this.registerEmployerForm.get(
      "employerName"
    ).value;
    this.employer.address = this.registerEmployerForm.get("address").value;
    this.employer.city = this.registerEmployerForm.get("city").value;
    this.employer.state = this.registerEmployerForm.get("state").value;
    this.employer.pincode = this.registerEmployerForm.get("pincode").value;
    this.employer.phNo = this.registerEmployerForm.get("phNo").value;
    this.employer.businessType = this.registerEmployerForm.get(
      "businessType"
    ).value;
    this.employer.tanNo = this.registerEmployerForm.get("tanNo").value;
    this.employer.contactName = this.registerEmployerForm.get(
      "contactName"
    ).value;
    this.employer.regnNo = this.registerEmployerForm.get("regnNo").value;
    this.employer.creationDate = this.registerEmployerForm.get(
      "creationDate"
    ).value;
    this.employer.lastModifiedDate = this.registerEmployerForm.get(
      "lastModifiedDate"
    ).value;
    this.employer.employerId = this.registerEmployerForm.get(
      "employerId"
    ).value;
    this.employer.status = this.registerEmployerForm.get("status").value;

    this.service.updateEmployer(this.employer).subscribe((data) => {
      console.log(data);
      this.cDF.detectChanges();
    });

    this.route.navigate(["/list"]);
  }
}
