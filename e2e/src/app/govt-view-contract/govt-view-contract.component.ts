import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { Contract } from '../contract';
import { ContractService } from '../contract.service';
import { DashboardServiceService } from '../dashboard-service.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-govt-view-contract',
  templateUrl: './govt-view-contract.component.html',
  styleUrls: ['./govt-view-contract.component.css']
})
export class GovtViewContractComponent implements OnInit {

  contract: Contract = new Contract();

  id: number;

  constructor(private service: ContractService,
    private dashService: DashboardServiceService,
    private router: Router,
    private cDf: ChangeDetectorRef) { }

  ngOnInit(): void {
    this.service.getContractById(this.dashService.viewParameter).subscribe((data) =>
    {
      this.contract = <Contract>data;
    });
  }

  approveContract(){
    this.contract.status = "Approved";
    this.service.updateContract(this.contract).subscribe((data) =>
    {
      console.log(data);
      this.cDf.detectChanges();
    });
    this.router.navigate(["/dummy/gov"]);
  }

  rejectContract(){
    this.service.deleteContract(this.contract.contractId).subscribe((data) =>
    {
      console.log(data);
    });
    this.router.navigate(["/dummy/gov"]);
  }

}
