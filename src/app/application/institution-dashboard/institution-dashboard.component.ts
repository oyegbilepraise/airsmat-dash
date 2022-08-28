import { HttpClient } from '@angular/common/http';
import { Component, OnInit, ViewChild } from '@angular/core';
import { ChartConfiguration, ChartData, ChartType } from 'chart.js';
import { NgxSmartModalService } from 'ngx-smart-modal';
import { ToastrService } from 'ngx-toastr';
import { ConfigService } from 'src/app/services/config.service';
import DatalabelsPlugin from 'chartjs-plugin-datalabels';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-institution-dashboard',
  templateUrl: './institution-dashboard.component.html',
  styleUrls: ['./institution-dashboard.component.scss']
})
export class InstitutionDashboardComponent implements OnInit {

  constructor(private _configService: ConfigService, private _http: HttpClient, private toastr: ToastrService, private _router: Router) { }

  admin_stat: any = []
  public showNav: Boolean = false;
  plan_name:any = ''
  loading: Boolean = false;

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

  institutionForm = new FormGroup({
    plan_name: new FormControl('', Validators.required),
  });

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

  ngOnInit(): void {
    this._configService.getOrganizationStatistics('615338460723e80011741f55').subscribe((data:any) => {
      this.admin_stat = data.data;
    })
  }

  createInstitution() {    
    this.loading = true;
    let a = this._configService.getUserDetails()
    this._configService.createLoanPlan(a.id, this.institutionForm.value.plan_name, a.id).subscribe((res:any) => {   
      if(res.status === "SUCCESS"){
        this.loading = false;
        this.toastr.success(res.success, res.message);
        this._router.navigate(['/app/institutions/loanplans'])
      }
    })
  }
}