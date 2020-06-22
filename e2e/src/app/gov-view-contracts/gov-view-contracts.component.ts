import { Component, OnInit, ViewChild } from "@angular/core";
import { MatTableDataSource } from "@angular/material/table";
import { MatPaginator } from "@angular/material/paginator";
import { MatSort } from "@angular/material/sort";
import { ContractService } from "../contract.service";
import { Contract } from "../contract";
import { Router } from "@angular/router";

@Component({
  selector: "app-gov-view-contracts",
  templateUrl: "./gov-view-contracts.component.html",
  styleUrls: ["./gov-view-contracts.component.css"],
})
export class GovViewContractsComponent implements OnInit {
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
  constructor(private conservice: ContractService, private router: Router) {}

  ngOnInit() {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
    this.fetchAllPending();
  }
  public fetchAllPending() {
    let resp = this.conservice.getContractList();
    resp.subscribe((report) => (this.dataSource.data = report) as Contract[]);
  }

  applyFilter(filterValue: string) {
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }
}
