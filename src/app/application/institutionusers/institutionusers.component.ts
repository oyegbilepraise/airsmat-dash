import { Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-institutionusers',
  templateUrl: './institutionusers.component.html',
  styleUrls: ['./institutionusers.component.scss'],
})
export class InstitutionusersComponent implements OnInit {
  constructor(public _location: Location) {}

  public loanReport: any = [];

  public tab: String = 'approved';

  ngOnInit(): void {
    this.loanReport.push(
      {
        amount_requested: '500,000',
        date_requested: '02 Jun, 2022',
        amount_approved: '500,000',
        date_approved: '02 Jun, 2022',
      },
      {
        amount_requested: '500,000',
        date_requested: '02 Jun, 2022',
        amount_approved: '500,000',
        date_approved: '02 Jun, 2022',
      },
      {
        amount_requested: '500,000',
        date_requested: '02 Jun, 2022',
        amount_approved: '500,000',
        date_approved: '02 Jun, 2022',
      },
      {
        amount_requested: '500,000',
        date_requested: '02 Jun, 2022',
        amount_approved: '500,000',
        date_approved: '02 Jun, 2022',
      }
    );
  }

  back() {
    this._location.back();
  }

  changeTab(value: string): void {
    this.tab = value;
    if (value === 'ongoing') {
      this.loanReport = [
        {
          amount_requested: '500,000',
          date_requested: '02 Jun, 2022',
          amount_approved: '500,000',
          date_approved: '02 Jun, 2022',
        },
      ];
    } else if (value === 'approved') {
      this.loanReport = [
        {
          amount_requested: '500,000',
          date_requested: '02 Jun, 2022',
          amount_approved: '500,000',
          date_approved: '02 Jun, 2022',
        },
        {
          amount_requested: '500,000',
          date_requested: '02 Jun, 2022',
          amount_approved: '500,000',
          date_approved: '02 Jun, 2022',
        },
        {
          amount_requested: '500,000',
          date_requested: '02 Jun, 2022',
          amount_approved: '500,000',
          date_approved: '02 Jun, 2022',
        },
        {
          amount_requested: '500,000',
          date_requested: '02 Jun, 2022',
          amount_approved: '500,000',
          date_approved: '02 Jun, 2022',
        },
      ];
    } else if (value === 'rejected') {
      this.loanReport = [
        {
          amount_requested: '500,000',
          date_requested: '02 Jun, 2022',
          amount_approved: '500,000',
          date_approved: '02 Jun, 2022',
        },
        {
          amount_requested: '500,000',
          date_requested: '02 Jun, 2022',
          amount_approved: '500,000',
          date_approved: '02 Jun, 2022',
        },
        {
          amount_requested: '500,000',
          date_requested: '02 Jun, 2022',
          amount_approved: '500,000',
          date_approved: '02 Jun, 2022',
        },
        {
          amount_requested: '500,000',
          date_requested: '02 Jun, 2022',
          amount_approved: '500,000',
          date_approved: '02 Jun, 2022',
        },
      ];
    } else if (value === 'pending') {
      this.loanReport = [];
      console.log(this.loanReport);
    }
  }
}
