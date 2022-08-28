import { Component, OnInit, ViewChild } from '@angular/core';
import { ChartConfiguration, ChartData, ChartType, Color } from 'chart.js';
import { BaseChartDirective, NgChartsConfiguration } from 'ng2-charts';
import DatalabelsPlugin from 'chartjs-plugin-datalabels';
import { NgxSmartModalService } from 'ngx-smart-modal';
import { ConfigService } from 'src/app/services/config.service';
import { HttpClient } from '@angular/common/http';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-admin-dashboard',
  templateUrl: './admin-dashboard.component.html',
  styleUrls: ['./admin-dashboard.component.scss'],
})
export class AdminDashboardComponent implements OnInit {
  @ViewChild(BaseChartDirective) chart: BaseChartDirective | undefined;

  public showNav: Boolean = false;

  constructor(public ngxSmartModalService: NgxSmartModalService, private _configService: ConfigService, private _http: HttpClient, private toastr: ToastrService) {}

  institutionForm = new FormGroup({
    legal_name: new FormControl('', Validators.required),
    institution_names: new FormControl('', Validators.required),
    user: new FormControl('', Validators.required),
    industry: new FormControl('', Validators.required),
    business_type: new FormControl('', Validators.required),
    registration_type: new FormControl('', Validators.required),
    ownership_structure: new FormControl('', Validators.required),
    staff_size: new FormControl('', Validators.required),
    institution: new FormControl('', Validators.required),
  });

  get legal_name_form() {
    return this.institutionForm.get('legal_name');
  }
  get institution_name_form() {
    return this.institutionForm.get('institution_names');
  }
  get user_form() {
    return this.institutionForm.get('user');
  }
  get industry_form() {
    return this.institutionForm.get('industry');
  }
  get business_type_form() {
    return this.institutionForm.get('business_type');
  }
  get registration_type_form() {
    return this.institutionForm.get('registration_type');
  }
  get ownership_structure_form() {
    return this.institutionForm.get('ownership_structure');
  }
  get staff_size_form() {
    return this.institutionForm.get('staff_size');
  }

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

  business_types: any = [];
  business_types_list: any = [];
  industry: any = [];
  industry_list: any = [];
  ownership_structure: any = [];
  ownership_structure_list: any = [];
  registration_type: any = [];
  registration_type_list: any = [];
  staffSizes: any = [];
  staff_size_list: any = [];
  all_users: any = [];
  all_users_list: any = [];
  institution: any = [];
  institutionusers: any = [];
  institutionId: any = '';
  loading: Boolean = false;
  admin_stat: any = []

  ngOnInit(): void {
    this._configService.getSystemConfigIndustry().subscribe((res: any) => {
      this.industry = res.data;
      this.industry_list = res.data;
    });

    this._configService.getSystemConfigBT().subscribe((res: any) => {
      this.business_types = res.data;
      this.business_types_list = res.data;
    });

    this._configService.getSystemConfigBOS().subscribe((res: any) => {
      this.ownership_structure = res.data;
      this.ownership_structure_list = res.data;
    });

    this._configService.getSystemConfigStaffSizes().subscribe((res: any) => {
      this.staffSizes = res.data;
      this.staff_size_list = res.data;
    });

    this._configService.getSystemConfigBRT().subscribe((res: any) => {
      this.registration_type = res.data;
      this.registration_type_list = res.data;
    });

    this._configService.getAllUser().subscribe((res: any) => {
      let b = res.filter((m: any) => m.role.role !== 'admin');
      this.all_users = b;
      this.all_users_list = b;
    });

    this._configService.getAdminStatistics().subscribe((res: any) => {
      this.admin_stat = res.data;
    });
    
  }

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

  getUserConfig(data: any): any {
    this._configService.getUserOrganization(data.id).subscribe((res: any) => {
      this.institution = res;
      this.institutionusers = res;
    });
  }

  getUserInstitution(data: any) {
    this.institutionId = data._id;
  }

  createInstitution() {
    this.loading = true;
    this._configService
      .onboardInstitution(
        this.business_type_form?.value,
        this.industry_form?.value,
        this.institution_name_form?.value,
        this.legal_name_form?.value,
        this.ownership_structure_form?.value,
        this.registration_type_form?.value,
        this.staff_size_form?.value,
        this.institutionId
      )
      .subscribe((res: any) => {
        this.loading = false;
        this.toastr.success(res.status, res.message);
      });
  }
}
