import { Component, OnInit, ViewChild } from "@angular/core";
import { MatTableDataSource } from "@angular/material/table";
import { MatPaginator } from "@angular/material/paginator";
import { MatSort } from "@angular/material/sort";
import { EmployerService } from "../employer.service";
import { Employer } from "../employer";
import { Router } from "@angular/router";

@Component({
  selector: "app-gov-view-employers",
  templateUrl: "./gov-view-employers.component.html",
  styleUrls: ["./gov-view-employers.component.css"],
})
export class GovViewEmployersComponent implements OnInit {
  ELEMENT_DATA: Employer[];
  displayedColumns: string[] = [
    "employerId",
    "employerName",
    "city",
    "state",
    "pincode",
    "contactName",
    "phNo",
    "businessType",
    "tanNo",
    "regnNo",
    "creationDate",
    "lastModifiedDate",
    "status",
    "actions",
  ];

  dataSource = new MatTableDataSource<Employer>(this.ELEMENT_DATA);

  @ViewChild(MatPaginator, { static: true }) paginator: MatPaginator;
  @ViewChild(MatSort, { static: true }) sort: MatSort;
  constructor(private empservice: EmployerService, private router: Router) {}

  ngOnInit() {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
    this.fetchAllPending();
  }
  public fetchAllPending() {
    let resp = this.empservice.getEmployerList();
    resp.subscribe((report) => (this.dataSource.data = report) as Employer[]);
  }

  applyFilter(filterValue: string) {
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  editEmployer(employerId: number) {
    this.empservice.editParameter = employerId;
    this.router.navigate(["/edit-employer"]);
  }
}
