import { Component, OnInit, ChangeDetectorRef } from "@angular/core";
import { EmployerService } from "../employer.service";
import { Employer } from "../employer";
import { Router } from "@angular/router";

@Component({
  selector: "app-admin-view-employer",
  templateUrl: "./admin-view-employer.component.html",
  styleUrls: ["./admin-view-employer.component.css"],
})
export class AdminViewEmployerComponent implements OnInit {
  employer: Employer = new Employer();
  constructor(
    private service: EmployerService,
    private router: Router,
    private cDf: ChangeDetectorRef
  ) {}

  ngOnInit(): void {
    this.service
      .getEmployerById(this.service.viewParameter)
      .subscribe((data) => {
        this.employer = <Employer>data;
      });
  }

  approveEmployer() {
    this.employer.status = "approved";
    this.service.updateEmployer(this.employer).subscribe((data) => {
      console.log(data);
      this.cDf.detectChanges();
    });
    this.router.navigate(["/view-employers"]);
  }

  rejectEmployer() {
    this.service.deleteEmployer(this.employer.employerId).subscribe((data) => {
      this.cDf.detectChanges();
    });
    this.router.navigate(["/view-employers"]);
  }
}
