import { Component, OnInit } from '@angular/core';
import { Investor } from 'src/app/model/investor';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  investor: Investor = { id: 111, income: 3000, exp: 2000, asset: 200000, lifeexp:20 };
  constructor() { }

  ngOnInit() {
    
    
  }

}
