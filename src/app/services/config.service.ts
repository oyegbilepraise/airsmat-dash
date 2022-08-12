import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { TEST_BASE_URL } from './constant.service';

@Injectable({
  providedIn: 'root',
})
export class ConfigService {
  constructor(private _http: HttpClient) {}

  getSystemConfigBOS() {
    const token: any = sessionStorage.getItem('airsmatBearerToken');
    return this._http.get(
      TEST_BASE_URL + 'system-config/findAllOwnershipStructures',
      { headers: new HttpHeaders({ Authorization: token }) }
    );
  }
  getSystemConfigBRT() {
    const token: any = sessionStorage.getItem('airsmatBearerToken');
    return this._http.get(
      TEST_BASE_URL + 'system-config/findAllBusinessRegistrationTypes',
      { headers: new HttpHeaders({ Authorization: token }) }
    );
  }
  getSystemConfigBT() {
    const token: any = sessionStorage.getItem('airsmatBearerToken');
    return this._http.get(
      TEST_BASE_URL + 'system-config/findAllBusinessTypes',
      { headers: new HttpHeaders({ Authorization: token }) }
    );
  }
  getSystemConfigCommodities() {
    const token: any = sessionStorage.getItem('airsmatBearerToken');
    return this._http.get(
      TEST_BASE_URL + 'system-config/findAllCommodities',
      { headers: new HttpHeaders({ Authorization: token }) }
    );
  }
  getSystemConfigCC() {
    const token: any = sessionStorage.getItem('airsmatBearerToken');
    return this._http.get(
      TEST_BASE_URL + 'system-config/findAllCommodity',
      { headers: new HttpHeaders({ Authorization: token }) }
    );
  }
  getSystemConfigCurrency() {
    const token: any = sessionStorage.getItem('airsmatBearerToken');
    return this._http.get(
      TEST_BASE_URL + 'system-config/findAllCurrencies',
      { headers: new HttpHeaders({ Authorization: token }) }
    );
  }
  getSystemConfigIndustry() {
    const token: any = sessionStorage.getItem('airsmatBearerToken');
    return this._http.get(
      TEST_BASE_URL + 'system-config/findAllIndustry',
      { headers: new HttpHeaders({ Authorization: token }) }
    );
  }
  getSystemConfigPermission() {}
  getSystemConfigRoles() {
    const token: any = sessionStorage.getItem('airsmatBearerToken');
    return this._http.get(
      TEST_BASE_URL + 'system-config/findAllRolesAndPermissions',
      { headers: new HttpHeaders({ Authorization: token }) }
    );
  }
  getSystemConfigStaffSizes() {
    const token: any = sessionStorage.getItem('airsmatBearerToken');
    return this._http.get(
      TEST_BASE_URL + 'system-config/findAllStaffSizes',
      { headers: new HttpHeaders({ Authorization: token }) }
    );
  }
}
