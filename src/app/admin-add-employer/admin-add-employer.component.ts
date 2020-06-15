import { Component, OnInit } from "@angular/core";
import { FormGroup, FormControl, Validators } from "@angular/forms";
import { Employer } from "../employer";
import { EmployerService } from "../employer.service";

@Component({
  selector: "app-admin-add-employer",
  templateUrl: "./admin-add-employer.component.html",
  styleUrls: ["./admin-add-employer.component.css"],
})
export class AdminAddEmployerComponent implements OnInit {
  registerEmployerForm: FormGroup;
  theemployer = new Employer();
  submitted = false;

  constructor(private service: EmployerService) {}

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
      businessType: new FormControl("", [
        Validators.required,
        Validators.pattern("[0-9]{2}"),
      ]),
      tanNo: new FormControl("", [
        Validators.required,
        Validators.pattern("[0-9]{10}"),
      ]),
      regnNo: new FormControl("", [
        Validators.required,
        Validators.pattern("[0-9]{10}"),
      ]),
    });
    this.submitted = false;
  }

  onSubmit(saveemployer) {
    this.theemployer.employerName = this.registerEmployerForm.get(
      "employerName"
    ).value;
    this.theemployer.address = this.registerEmployerForm.get("address").value;
    this.theemployer.city = this.registerEmployerForm.get("city").value;
    this.theemployer.state = this.registerEmployerForm.get("state").value;
    this.theemployer.pincode = this.registerEmployerForm.get("pincode").value;
    this.theemployer.phNo = this.registerEmployerForm.get("phNo").value;
    this.theemployer.businessType = this.registerEmployerForm.get(
      "businessType"
    ).value;
    this.theemployer.tanNo = this.registerEmployerForm.get("tanNo").value;
    this.theemployer.contactName = this.registerEmployerForm.get(
      "contactName"
    ).value;
    this.theemployer.regnNo = this.registerEmployerForm.get("regnNo").value;

    this.service.createEmployer(this.theemployer).subscribe((data) => {
      console.log(data);
    });
    this.submitted = true;
  }
  addEmployerForm() {
    this.submitted = false;
    this.registerEmployerForm.reset();
  }

  bts = [
    { id: 11, value: "Manufacturing" },
    { id: 12, value: "Construction" },
    { id: 13, value: "Logistics" },
  ];
}
