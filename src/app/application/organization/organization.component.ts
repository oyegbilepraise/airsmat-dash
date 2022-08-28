import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ConfigService } from 'src/app/services/config.service';

@Component({
  selector: 'app-organization',
  templateUrl: './organization.component.html',
  styleUrls: ['./organization.component.scss']
})
export class OrganizationComponent implements OnInit {

  constructor(private _configService: ConfigService, private _http: HttpClient) { }

  config_array:any = []

  ngOnInit(): void {
    this._configService.getInstitutionConfig('615338460723e80011741f55').subscribe((res: any) => {
      this.config_array = res.data
    })
  }

  handleClick(data:any){
    console.log(data);
  }
}