import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-all-farmer',
  templateUrl: './all-farmer.component.html',
  styleUrls: ['./all-farmer.component.scss']
})
export class AllFarmerComponent implements OnInit {

  constructor() { }

  public loanReport: any = [
    {
      amount_requested: '500,000',
      amount_approved: '500,000',
      date_onboarded: '02 Jun, 2022',
      date_approved: '02 Jun, 2022',
    },
    {
      amount_requested: '500,000',
      amount_approved: '500,000',
      date_onboarded: '02 Jun, 2022',
      date_approved: '02 Jun, 2022',
    },
    {
      amount_requested: '500,000',
      amount_approved: '500,000',
      date_onboarded: '02 Jun, 2022',
      date_approved: '02 Jun, 2022',
    },
    {
      amount_requested: '500,000',
      amount_approved: '500,000',
      date_onboarded: '02 Jun, 2022',
      date_approved: '02 Jun, 2022',
    },
  ];

  ngOnInit(): void {
  }

}
