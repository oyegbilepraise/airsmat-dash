import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-all-loan',
  templateUrl: './all-loan.component.html',
  styleUrls: ['./all-loan.component.scss']
})
export class AllLoanComponent implements OnInit {

  constructor() { }

  public loanReport: any = [
    {
      name: 'Ade Farm Device',
      amount: '500,000',
      status: 'active',
      return_date: '02 Jun, 2022',
      date_requested: '02 Jun, 2022',
    },
    {
      name: 'Damilola Farm Device',
      amount: '500,000',
      status: 'active',
      return_date: '02 Jun, 2022',
      date_requested: '02 Jun, 2022',
    },
    {
      name: 'Ade Farm Device',
      amount: '500,000',
      status: 'active',
      return_date: '02 Jun, 2022',
      date_requested: '02 Jun, 2022',
    },
    {
      name: 'Ade Farm Device',
      amount: '500,000',
      status: 'rejected',
      return_date: '02 Jun, 2022',
      date_requested: '02 Jun, 2022',
    },
    {
      name: 'Ade Farm Device',
      amount: '500,000',
      status: 'rejected',
      return_date: '',
      date_requested: '02 Jun, 2022',
    },
    {
      name: 'Damilola Farm Device',
      amount: '500,000',
      status: 'ongoing',
      return_date: '',
      date_requested: '02 Jun, 2022',
    },
    {
      name: 'Ade Farm Device',
      amount: '500,000',
      status: 'active',
      return_date: '02 Jun, 2022',
      date_requested: '02 Jun, 2022',
    },
    {
      name: 'Damilola Farm Device',
      amount: '500,000',
      status: 'active',
      return_date: '02 Jun, 2022',
      date_requested: '02 Jun, 2022',
    },
    {
      name: 'Ade Farm Device',
      amount: '500,000',
      status: 'active',
      return_date: '02 Jun, 2022',
      date_requested: '02 Jun, 2022',
    },
    {
      name: 'Ade Farm Device',
      amount: '500,000',
      status: 'rejected',
      return_date: '02 Jun, 2022',
      date_requested: '02 Jun, 2022',
    },
    {
      name: 'Ade Farm Device',
      amount: '500,000',
      status: 'rejected',
      return_date: '02 Jun, 2022',
      date_requested: '02 Jun, 2022',
    },
    {
      name: 'Damilola Farm Device',
      amount: '500,000',
      status: 'pending',
      return_date: '02 Jun, 2022',
      date_requested: '02 Jun, 2022',
    },
  ];

  ngOnInit(): void {
  }

}
