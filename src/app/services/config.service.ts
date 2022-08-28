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
    return this._http.get(TEST_BASE_URL + 'system-config/findAllCommodities', {
      headers: new HttpHeaders({ Authorization: token }),
    });
  }
  getSystemConfigCC() {
    const token: any = sessionStorage.getItem('airsmatBearerToken');
    return this._http.get(TEST_BASE_URL + 'system-config/findAllCommodity', {
      headers: new HttpHeaders({ Authorization: token }),
    });
  }
  getSystemConfigCurrency() {
    const token: any = sessionStorage.getItem('airsmatBearerToken');
    return this._http.get(TEST_BASE_URL + 'system-config/findAllCurrencies', {
      headers: new HttpHeaders({ Authorization: token }),
    });
  }
  getSystemConfigIndustry() {
    const token: any = sessionStorage.getItem('airsmatBearerToken');
    return this._http.get(TEST_BASE_URL + 'system-config/findAllIndustry', {
      headers: new HttpHeaders({ Authorization: token }),
    });
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
    return this._http.get(TEST_BASE_URL + 'system-config/findAllStaffSizes', {
      headers: new HttpHeaders({ Authorization: token }),
    });
  }

  getAllUser() {
    const token: any = sessionStorage.getItem('airsmatBearerToken');
    return this._http.get('https://api.airsmat.com/api/smatauth/users', {
      headers: new HttpHeaders({ Authorization: `Bearer ${token}` }),
    });
  }

  getUserOrganization(data: any) {
    const token: any = sessionStorage.getItem('airsmatBearerToken');
    return this._http.get(
      `https://api.airsmat.com/api/org/organizations/users/${data}`,
      {
        headers: new HttpHeaders({ Authorization: `Bearer ${token}` }),
      }
    );
  }

  onboardInstitution(
    businessType: any,
    industry: any,
    institutionName: any,
    legalBusinessName: any,
    ownershipStructure: any,
    registrationType: any,
    staffSize: any,
    institutionId: any
  ) {
    const token: any = sessionStorage.getItem('airsmatBearerToken');
    return this._http.post(
      TEST_BASE_URL + 'institutions/onboardNewInstitution',
      {
        businessType,
        industry,
        institutionName,
        legalBusinessName,
        ownershipStructure,
        registrationType,
        staffSize,
        institutionId,
      },
      { headers: new HttpHeaders({ Authorization: token }) }
    );
  }

  getUserDetails(){
    let a:any = sessionStorage.getItem('airsmatUser')
    return JSON.parse(a);
  }

  getAllInstitution() {
    const token: any = sessionStorage.getItem('airsmatBearerToken');
    return this._http.get(TEST_BASE_URL + 'institutions/getAllInstitutions', {
      headers: new HttpHeaders({ Authorization: token }),
    });
  }

  getAdminStatistics(){
    const token: any = sessionStorage.getItem('airsmatBearerToken');
    return this._http.get(TEST_BASE_URL + 'loan-statistics/findLoanStatisticsForPlatform', {
      headers: new HttpHeaders({ Authorization: token }),
    });
  }

  getProfile(){
    const token: any = sessionStorage.getItem('airsmatBearerToken');
    return this._http.get(
      `https://api.airsmat.com/api/smatauth/auth/profile`,
      {
        headers: new HttpHeaders({ Authorization: `Bearer ${token}` }),
      }
    );
  }

  getOrganizationStatistics(institutionId: any){
    const token: any = sessionStorage.getItem('airsmatBearerToken');
    return this._http.get(TEST_BASE_URL + 'loan-statistics/findStatisticsForInstitution/' + institutionId, {
      headers: new HttpHeaders({ Authorization: `Bearer ${token}` }),
    })
  }
  
  getInstitutionConfig(institutionId: any){
    const token: any = sessionStorage.getItem('airsmatBearerToken');
    return this._http.get(TEST_BASE_URL + 'institution-config/getInstitutionConfig/' + institutionId, {
      headers: new HttpHeaders({ Authorization: `${token}` }),
    })
  }

  getInstitutionLoan(){
    let a:any = sessionStorage.getItem('airsmatUser')
    let b = JSON.parse(a)
    const token: any = sessionStorage.getItem('airsmatBearerToken');
    return this._http.get(TEST_BASE_URL + 'institutions-loans-config/getInstitutionDetails/' + b.id, {
      headers: new HttpHeaders({ Authorization: `${token}` }),
    })

  }

  createLoanPlan(institutionId:any, planName:any, created_by:any) {
    const token: any = sessionStorage.getItem('airsmatBearerToken');
    return this._http.post(TEST_BASE_URL + 'institutions-loans-config/createInstitutionLoanConfig', {institutionId, planName, created_by}, {
      headers: new HttpHeaders({ Authorization: `${token}` }),
    })
  }


}
