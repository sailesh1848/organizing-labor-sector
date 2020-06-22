import { Component, OnInit, ViewChild } from "@angular/core";
import { MatTableDataSource } from "@angular/material/table";
import { MatPaginator } from "@angular/material/paginator";
import { MatSort } from "@angular/material/sort";
import { LabourService } from "../labour.service";
import { Labour } from "../labour";
import { Router } from "@angular/router";

@Component({
  selector: "app-admin-view-labourers",
  templateUrl: "./admin-view-labourers.component.html",
  styleUrls: ["./admin-view-labourers.component.css"],
})
export class AdminViewLabourersComponent implements OnInit {
  ELEMENT_DATA: Labour[];

  displayedColumns: string[] = [
    "labourer_id",
    "first_name",
    "last_name",
    "gender",
    "permanent_address_city",
    "phoneNum",
    "aadhaar_no",
    "skill_1",
    "skill_2",
    "skill_3",
    "currentlyEmployed",
    "activeStatus",
    "actions",
  ];

  dataSource = new MatTableDataSource<Labour>(this.ELEMENT_DATA);

  @ViewChild(MatPaginator, { static: true }) paginator: MatPaginator;
  @ViewChild(MatSort, { static: true }) sort: MatSort;
  constructor(private labservice: LabourService, private router: Router) {}

  ngOnInit() {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
    this.fetchAllPending();
  }
  public fetchAllPending() {
    let resp = this.labservice.getLabourList();
    resp.subscribe((report) => (this.dataSource.data = report) as Labour[]);
  }

  applyFilter(filterValue: string) {
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  editLabour(labourer_id: number) {
    this.labservice.editParameter = labourer_id;
    this.router.navigate(["/edit-labour"]);
  }
}
