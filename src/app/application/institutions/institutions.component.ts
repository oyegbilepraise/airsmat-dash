import { Component, OnInit } from '@angular/core';
import { ConfigService } from 'src/app/services/config.service';

@Component({
  selector: 'app-institutions',
  templateUrl: './institutions.component.html',
  styleUrls: ['./institutions.component.scss'],
})
export class InstitutionsComponent implements OnInit {
  constructor(private _configService: ConfigService) {}

  public loanReport: any = [];

  ngOnInit(): void {
    this._configService.getAllInstitution().subscribe((institution: any) => {
      this.loanReport = institution.data;
    });
  }
}
