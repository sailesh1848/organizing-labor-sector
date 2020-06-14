import { Component, OnInit } from "@angular/core";
import { ContractService } from "../contract.service";
import { Contract } from "../contract";
import { Skillset } from "../skillset";

@Component({
  selector: "app-add-contract",
  templateUrl: "./add-contract.component.html",
  styleUrls: ["./add-contract.component.css"],
})
export class AddContractComponent implements OnInit {
  contract: Contract = new Contract();
  skill1: Skillset = new Skillset();
  skill2: Skillset = new Skillset();
  skill3: Skillset = new Skillset();

  // minDailyWageSkillset1: number;
  constructor(private contractService: ContractService) {}

  ngOnInit(): void {}

  save() {
    this.contractService.postContract(this.contract).subscribe(
      (data) => console.log(data),
      (error) => console.log(error)
    );
    this.contract = new Contract();
  }

  skillWage1(event) {
    if (this.contract.skillset1.toString().length === 2) {
      console.log("called ", event);
      console.log(this.contract.skillset1);
      this.contractService.getSkillById(this.contract.skillset1).subscribe(
        (data) => {
          this.skill1 = <Skillset>data;
          this.contract.minDailyWageSkillset1 = this.skill1.minDailyWage;
          console.log(this.skill1);
        },
        (data) => console.log(data)
      );
    }
  }

  skillWage2(event) {
    if (this.contract.skillset2.toString().length === 2) {
      console.log("called ", event);
      console.log(this.contract.skillset2);
      this.contractService.getSkillById(this.contract.skillset2).subscribe(
        (data) => {
          this.skill2 = <Skillset>data;
          this.contract.minDailyWageSkillset2 = this.skill2.minDailyWage;
          console.log(this.skill2);
        },
        (data) => console.log(data)
      );
    }
  }

  skillWage3(event) {
    if (this.contract.skillset3.toString().length === 2) {
      console.log("called ", event);
      console.log(this.contract.skillset3);
      this.contractService.getSkillById(this.contract.skillset3).subscribe(
        (data) => {
          this.skill3 = <Skillset>data;
          this.contract.minDailyWageSkillset3 = this.skill3.minDailyWage;
          console.log(this.skill3);
        },
        (data) => console.log(data)
      );
    }
  }
}
