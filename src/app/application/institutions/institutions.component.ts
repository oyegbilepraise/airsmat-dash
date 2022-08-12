import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-institutions',
  templateUrl: './institutions.component.html',
  styleUrls: ['./institutions.component.scss']
})
export class InstitutionsComponent implements OnInit {

  constructor() { }

  public loanReport: any = [
    {
      name: 'Ade Farm Device',
      phone: '+234 9033 000 000',
      status: true,
      date_onboarded: '02 Jun, 2022',
      contact_phone: '+234 9033 000 999'
    },
    {
      name: 'Damilola Farm Device',
      phone: '+234 9033 000 000',
      status: true,
      date_onboarded: '02 Jun, 2022',
      contact_phone: '+234 9033 000 999'
    },
    {
      name: 'Ade Farm Device',
      phone: '+234 9033 000 000',
      status: true,
      date_onboarded: '02 Jun, 2022',
      contact_phone: '+234 9033 000 999'
    },
    {
      name: 'Ade Farm Device',
      phone: '+234 9033 000 000',
      status: false,
      date_onboarded: '02 Jun, 2022',
      contact_phone: '+234 9033 000 999'
    },
    {
      name: 'Ade Farm Device',
      phone: '+234 9033 000 000',
      status: false,
      date_onboarded: '02 Jun, 2022',
      contact_phone: '+234 9033 000 999'
    },
    {
      name: 'Ade Farm Device',
      phone: '+234 9033 000 000',
      status: true,
      date_onboarded: '02 Jun, 2022',
      contact_phone: '+234 9033 000 999'
    },
    {
      name: 'Damilola Farm Device',
      phone: '+234 9033 000 000',
      status: true,
      date_onboarded: '02 Jun, 2022',
      contact_phone: '+234 9033 000 999'
    },
    {
      name: 'Ade Farm Device',
      phone: '+234 9033 000 000',
      status: true,
      date_onboarded: '02 Jun, 2022',
      contact_phone: '+234 9033 000 999'
    },
    {
      name: 'Ade Farm Device',
      phone: '+234 9033 000 000',
      status: false,
      date_onboarded: '02 Jun, 2022',
      contact_phone: '+234 9033 000 999'
    },
    {
      name: 'Ade Farm Device',
      phone: '+234 9033 000 000',
      status: true,
      date_onboarded: '02 Jun, 2022',
      contact_phone: '+234 9033 000 999'
    },
    {
      name: 'Damilola Farm Device',
      phone: '+234 9033 000 000',
      status: true,
      date_onboarded: '02 Jun, 2022',
      contact_phone: '+234 9033 000 999'
    },
    {
      name: 'Ade Farm Device',
      phone: '+234 9033 000 000',
      status: true,
      date_onboarded: '02 Jun, 2022',
      contact_phone: '+234 9033 000 999'
    },
    {
      name: 'Ade Farm Device',
      phone: '+234 9033 000 000',
      status: false,
      date_onboarded: '02 Jun, 2022',
      contact_phone: '+234 9033 000 999'
    },
    {
      name: 'Ade Farm Device',
      phone: '+234 9033 000 000',
      status: true,
      date_onboarded: '02 Jun, 2022',
      contact_phone: '+234 9033 000 999'
    },
  ];

  ngOnInit(): void {
  }

}
