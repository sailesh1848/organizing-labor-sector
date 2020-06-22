import { Component, OnInit } from "@angular/core";
import { FormControl, FormGroup, Validators } from "@angular/forms";
import { LabourService } from "../labour.service";
import { Labour } from "../labour";

@Component({
  selector: "app-admin-add-labourer",
  templateUrl: "./admin-add-labourer.component.html",
  styleUrls: ["./admin-add-labourer.component.css"],
})
export class AdminAddLabourerComponent implements OnInit {
  constructor(private labourservice: LabourService) {}

  labour: Labour = new Labour();
  submitted = false;

  ngOnInit() {
    this.submitted = false;
  }

  laboursaveform = new FormGroup({
    labour_first_name: new FormControl("", [
      Validators.required,
      Validators.pattern("^[A-Za-z]{3,50}"),
    ]),
    labour_last_name: new FormControl("", [
      Validators.pattern("^[A-Za-z]{3,50}"),
    ]),
    labour_dob: new FormControl("", [Validators.required]),
    gender: new FormControl("", [Validators.required]),
    skill_1: new FormControl("", [Validators.required]),
    skill_2: new FormControl(""),
    skill_3: new FormControl(""),
    permanent_address: new FormControl("", [
      Validators.required,
      Validators.minLength(3),
    ]),
    permanent_address_city: new FormControl("", [
      Validators.required,
      Validators.pattern("[A-Za-z]{3,50}"),
    ]),
    permanent_address_state: new FormControl([Validators.required]),
    permanent_address_pinCode: new FormControl("", [
      Validators.required,
      Validators.pattern("^[1-9][0-9]{5}$"),
    ]),
    aadhaar_no: new FormControl("", [
      Validators.required,
      Validators.pattern("[0-9]{12}"),
    ]),
    phoneNum: new FormControl("", [Validators.pattern("[0-9]{10}")]),
    pan_no: new FormControl("", [
      Validators.pattern("[A-Z]{5}[0-9]{4}[A-Z]{1}"),
    ]),
    currentlyEmployed: new FormControl("", [Validators.required]),
    activeStatus: new FormControl("", [Validators.required]),
  });

  saveLabour(saveLabour) {
    this.labour = new Labour();
    this.labour.first_name = this.FirstName.value;
    this.labour.last_name = this.LastName.value;
    this.labour.date_of_birth = this.DOB.value;
    this.labour.gender = this.Gender.value;
    this.labour.skill_1 = this.Skill1.value;
    this.labour.skill_2 = this.Skill2.value;
    this.labour.skill_3 = this.Skill3.value;
    this.labour.permanent_address = this.Address.value;
    this.labour.permanent_address_city = this.City.value;
    this.labour.permanent_address_state = this.State.value;
    this.labour.permanent_address_pin_code = this.Pincode.value;
    this.labour.aadhaar_no = this.Aaadhar.value;
    this.labour.phoneNum = this.PhoneNumber.value;
    this.labour.pan_no = this.Pan.value;
    this.labour.currentlyEmployed = this.CurrentlyEmployed.value;
    this.labour.activeStatus = this.ActiveStatus.value;
    this.submitted = true;
    this.save();
  }

  save() {
    this.labourservice.createLabour(this.labour).subscribe(
      (data) => console.log(data),
      (error) => console.log(error)
    );
    console.log(this.labour);
    this.labour = new Labour();
  }

  get FirstName() {
    return this.laboursaveform.get("labour_first_name");
  }

  get LastName() {
    return this.laboursaveform.get("labour_last_name");
  }

  get DOB() {
    return this.laboursaveform.get("labour_dob");
  }

  get Address() {
    return this.laboursaveform.get("permanent_address");
  }

  get City() {
    return this.laboursaveform.get("permanent_address_city");
  }

  get State() {
    return this.laboursaveform.get("permanent_address_state");
  }

  get Pincode() {
    return this.laboursaveform.get("permanent_address_pinCode");
  }

  get Aaadhar() {
    return this.laboursaveform.get("aadhaar_no");
  }

  get Pan() {
    return this.laboursaveform.get("pan_no");
  }

  get Gender() {
    return this.laboursaveform.get("gender");
  }

  get Skill1() {
    return this.laboursaveform.get("skill_1");
  }

  get Skill2() {
    return this.laboursaveform.get("skill_2");
  }

  get Skill3() {
    return this.laboursaveform.get("skill_3");
  }

  get PhoneNumber() {
    return this.laboursaveform.get("phoneNum");
  }

  get CurrentlyEmployed() {
    return this.laboursaveform.get("currentlyEmployed");
  }

  get ActiveStatus() {
    return this.laboursaveform.get("activeStatus");
  }

  addLabourForm() {
    this.submitted = false;
    this.laboursaveform.reset();
  }

  skills = [
    { id: 1, value: "Plumber" },
    { id: 2, value: "Construction" },
    { id: 3, value: "Carpenter" },
  ];
}
