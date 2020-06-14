import { Component, OnInit, ViewChild, ChangeDetectorRef } from "@angular/core";
import { MatTableDataSource } from "@angular/material/table";
import { MatPaginator } from "@angular/material/paginator";
import { MatSort } from "@angular/material/sort";
import { Router } from "@angular/router";
import { DashboardServiceService } from "../dashboard-service.service";
import { ContractService } from "../contract.service";
import { Contract } from "../contract";

@Component({
  selector: "app-govt-dash",
  templateUrl: "./govt-dash.component.html",
  styleUrls: ["./govt-dash.component.css"],
})
export class GovtDashComponent implements OnInit {
  ELEMENT_DATA: Contract[];
  displayedColumns: string[] = [
    "contractId",
    "employmentStartDate",
    "employmentEndDate",
    "employmentState",
    "creationDate",
  ];

  dataSource = new MatTableDataSource<Contract>(this.ELEMENT_DATA);

  @ViewChild(MatPaginator, { static: true }) paginator: MatPaginator;
  @ViewChild(MatSort, { static: true }) sort: MatSort;

  constructor(
    private service: DashboardServiceService,
    private conservice: ContractService,
    private router: Router,
    private cDS: ChangeDetectorRef
  ) {}

  ngOnInit() {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
    this.fetchAllPending();
  }

  public fetchAllPending() {
    let resp = this.service.getContractList();
    resp.subscribe(
      (report) =>
        (this.dataSource.data = report.filter(
          ({ status }) => status === "Pending"
        )) as Contract[]
    );
  }
  applyFilter(filterValue: string) {
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  viewContract(contractId: number) {
    this.service.viewParameter = contractId;
    this.router.navigate(["/view-contract"]);
  }

  editContract(contractId: number) {
    this.service.editParameter = contractId;
    this.router.navigate(["/edit-contract"]);
  }
}
