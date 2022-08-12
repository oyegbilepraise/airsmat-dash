import { Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ConfigService } from 'src/app/services/config.service';

@Component({
  selector: 'app-config-child',
  templateUrl: './config-child.component.html',
  styleUrls: ['./config-child.component.scss'],
})
export class ConfigChildComponent implements OnInit {
  constructor(
    private _location: Location,
    public activatedRoute: ActivatedRoute,
    private _configService: ConfigService
  ) {}

  routeName: String = '';
  id: any = '';
  configurations: any = [];
  view: any = '';

  ngOnInit(): void {
    this.activatedRoute.paramMap.subscribe((param) => {
      this.id = param.get('id');
      this.view = this.id;

      if (this.id === '1') {
        this.callGetSystemConfigBOS();
      } else if (this.id === '2') {
        this.callGetSystemConfigBRT();
      } else if (this.id === '3') {
        this.callGetSystemConfigBT();
      } else if (this.id === '4') {
        this.callGetSystemConfigCommodities();
      } else if (this.id === '5') {
        this.callGetSystemConfigCC();
      } else if (this.id === '6') {
        this.callGetSystemConfigCurrency();
      } else if (this.id === '7') {
        this.callGetSystemConfigIndustry();
      } else if (this.id === '8') {
        //
      } else if (this.id === '9') {
        this.callGetSystemConfigRoles();
      } else if (this.id === '10') {
        this.callGetSystemConfigSizes();
      }
    });
  }

  back() {
    this._location.back();
  }

  callGetSystemConfigBOS() {
    this._configService.getSystemConfigBOS().subscribe((res: any) => {
      this.configurations = res.data;
    });
  }

  callGetSystemConfigBRT() {
    this._configService.getSystemConfigBRT().subscribe((res: any) => {
      this.configurations = res.data;
    });
  }

  callGetSystemConfigBT() {
    this._configService.getSystemConfigBT().subscribe((res: any) => {
      this.configurations = res.data;
    });
  }

  callGetSystemConfigCommodities() {
    this._configService.getSystemConfigCommodities().subscribe((res: any) => {
      this.configurations = res.data;
    });
  }

  callGetSystemConfigCC() {
    this._configService.getSystemConfigCC().subscribe((res: any) => {
      this.configurations = res.data;
    });
  }

  callGetSystemConfigCurrency() {
    this._configService.getSystemConfigCurrency().subscribe((res: any) => {
      this.configurations = res.data;
    });
  }

  callGetSystemConfigIndustry() {
    this._configService.getSystemConfigIndustry().subscribe((res: any) => {
      this.configurations = res.data;
    });
  }

  callGetSystemConfigRoles() {
    this._configService.getSystemConfigRoles().subscribe((res: any) => {
      this.configurations = res.data;
    });
  }

  callGetSystemConfigSizes() {
    this._configService.getSystemConfigStaffSizes().subscribe((res: any) => {
      this.configurations = res.data;
    });
  }
}
