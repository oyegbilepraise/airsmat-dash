import { Component, OnInit, ViewChild } from '@angular/core';
import { ChartConfiguration, ChartData, ChartType, Color } from 'chart.js';
import { BaseChartDirective, NgChartsConfiguration } from 'ng2-charts';
import DatalabelsPlugin from 'chartjs-plugin-datalabels';
import { NgxSmartModalService } from 'ngx-smart-modal';

@Component({
  selector: 'app-admin-dashboard',
  templateUrl: './admin-dashboard.component.html',
  styleUrls: ['./admin-dashboard.component.scss'],
})
export class AdminDashboardComponent implements OnInit {
  @ViewChild(BaseChartDirective) chart: BaseChartDirective | undefined;

  public showNav: Boolean = false;

  constructor(public ngxSmartModalService: NgxSmartModalService) {}

  public loanReport: any = [
    {
      name: 'Ade Farm Device',
      amount: 15000,
      status: true,
      date_disbursed: '02 Jun, 2022',
      date_repaid: '02 Jun, 2022',
    },
    {
      name: 'Damilola Farm Device',
      amount: 15000,
      status: false,
      date_disbursed: '02 Jun, 2022',
      date_repaid: 'N/A',
    },
    {
      name: 'Ade Farm Device',
      amount: 15000,
      status: true,
      date_disbursed: '02 Jun, 2022',
      date_repaid: '02 Jun, 2022',
    },
    {
      name: 'Ade Farm Device',
      amount: 15000,
      status: false,
      date_disbursed: '02 Jun, 2022',
      date_repaid: '02 Jun, 2022',
    },
    {
      name: 'Ade Farm Device',
      amount: 15000,
      status: true,
      date_disbursed: '02 Jun, 2022',
      date_repaid: 'N/A',
    },
  ];

  ngOnInit(): void {}

  @ViewChild('errorModal')
  public errorModal!: NgxSmartModalService;

  public pieChartOptions: ChartConfiguration['options'] = {
    responsive: true,
    plugins: {
      legend: {
        display: true,
        position: 'top',
      },
      datalabels: {
        formatter: (value, ctx) => {
          if (ctx.chart.data.labels) {
            return ctx.chart.data.labels[ctx.dataIndex];
          }
        },
      },
    },
  };
  public doughnutChartData: ChartData<'doughnut', number[], string | string[]> =
    {
      datasets: [
        {
          data: [500, 500],
          backgroundColor: ['#F94144', '#F3722C'],
          hoverOffset: 4,
        },
      ],
    };
  public doughnutChartType: ChartType = 'doughnut';
  public pieChartPlugins = [DatalabelsPlugin];

  open() {
    this.showNav = !this.showNav;
  }

  close() {
    this.showNav = !this.showNav;
  }
}
