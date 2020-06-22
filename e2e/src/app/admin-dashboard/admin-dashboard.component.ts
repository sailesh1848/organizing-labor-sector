import { Component, OnInit, ViewChild, ChangeDetectorRef } from "@angular/core";
import { Employer } from "../employer";
import { DashboardServiceService } from "../dashboard-service.service";
import { Observable, Subject } from "rxjs";
import { EmployerService } from "../employer.service";
import { MatTableDataSource } from "@angular/material/table";
import { MatPaginator } from "@angular/material/paginator";
import { MatSort } from "@angular/material/sort";
import { Router } from "@angular/router";
import { AdminViewEmployersComponent } from "../admin-view-employers/admin-view-employers.component";
import { DashBoardCounts } from "../dashBoardCounts.model";

@Component({
  selector: "app-admin-dashboard",
  templateUrl: "./admin-dashboard.component.html",
  styleUrls: ["./admin-dashboard.component.css"],
})
export class AdminDashboardComponent implements OnInit {
  ELEMENT_DATA: Employer[];
  displayedColumns: string[] = [
    "employerId",
    "employerName",
    "city",
    "state",
    "businessType",
    "status",
    "actions",
  ];

  dashBoardCounts: DashBoardCounts;

  dataSource = new MatTableDataSource<Employer>(this.ELEMENT_DATA);

  @ViewChild(MatPaginator, { static: true }) paginator: MatPaginator;
  @ViewChild(MatSort, { static: true }) sort: MatSort;
  constructor(
    private adminservice: DashboardServiceService,
    private service: EmployerService,
    private router: Router,
    private cDS: ChangeDetectorRef
  ) {}

  ngOnInit() {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
    this.fetchAllPending();
    this.fetchDashBoardCounts();
  }
  public fetchAllPending() {
    let resp = this.adminservice.getEmployerList();
    resp.subscribe(
      (report) =>
        (this.dataSource.data = report.filter(
          ({ status }) => status === "Pending"
        )) as Employer[]
    );
  }

  public fetchDashBoardCounts() {
    this.adminservice.getDashBoardCounts().subscribe((data) => {
      this.dashBoardCounts = data;
      console.log(this.dashBoardCounts);
    });
  }

  applyFilter(filterValue: string) {
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  viewEmployer(employerId: number) {
    this.service.viewParameter = employerId;
    this.router.navigate(["/view-employer"]);
  }

  editEmployer(employerId: number) {
    this.service.editParameter = employerId;
    this.router.navigate(["/edit-employer"]);
  }
}
