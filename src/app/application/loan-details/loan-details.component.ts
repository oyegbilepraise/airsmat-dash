import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { ConfigService } from 'src/app/services/config.service';
import { TEST_BASE_URL } from '../../services/constant.service';

@Component({
  selector: 'app-loan-details',
  templateUrl: './loan-details.component.html',
  styleUrls: ['./loan-details.component.scss']
})
export class LoanDetailsComponent implements OnInit {

  constructor(private _configService: ConfigService, private _http: HttpClient, private toastr: ToastrService) { }

  business_types: any = [];
  business_types_list: any = [];
  loan_details: any;
  registration_type: any = [];
  registration_type_list: any = [];
  loading: Boolean = false;
  commodities: any;
  cc: any;
  currency: any;

  loanForm = new FormGroup({
    legal_name: new FormControl('', Validators.required),
    percentage_interest: new FormControl('', Validators.required),
    offerStartDate: new FormControl('', Validators.required),
    offerEndDate: new FormControl('', Validators.required),
    loan_tenure: new FormControl('', Validators.required),
    loan_currency: new FormControl('', Validators.required),
    loan_commodity_category: new FormControl('', Validators.required),
    loan_commodity: new FormControl('', Validators.required),
    loan_amount: new FormControl('', Validators.required),
    brt: new FormControl('', Validators.required)
  });

  brt: any = ''

  ngOnInit(): void {
    this._configService.getInstitutionLoan().subscribe((res: any) => {
      this.loan_details = res.data;
    })

    this._configService.getSystemConfigBRT().subscribe((res: any) => {
      this.registration_type = res.data;
      this.registration_type_list = res.data;
    });

    this._configService.getSystemConfigCommodities().subscribe((res: any) => {
      this.commodities = res.data;
    });

    this._configService.getSystemConfigCC().subscribe((res: any) => {
      this.cc = res.data;
    });

    this._configService.getSystemConfigCurrency().subscribe((res: any) => {
      this.currency = res.data;
    });

  }

  setBrt(data: any) {
    console.log(data);

    this.brt = data
  }

  updateLoanConfig() {
    // this.loading = true;
    let a = this.loanForm.value
    const token: any = sessionStorage.getItem('airsmatBearerToken');

    this._http.put(TEST_BASE_URL + '/institutions-loans-config/updateInstitutionLoanAdditionalDetails', {
      businessRegistrationTypes: a.brt,
      loanAmount: a.loan_amount,
      loanCommodity: a.loan_commodity,
      loanCommodityCategory: a.loan_commodity_category,
      loanCurrency: a.loan_currency,
      loanTenure: a.loan_tenure,
      offerEndDate: a.offerEndDate,
      offerStartDate: a.offerStartDate,
      percentageInterest: a.percentage_interest
    },
      { headers: new HttpHeaders({ Authorization: `Bearer ${token}` }) }).subscribe((res: any) => {
        console.log(res);
      })

    // this.loading = false;
    // this.toastr.success(res.status, res.message);
  }
}
