import { Component, OnInit } from '@angular/core';
import {
  NavigationCancel,
  Event,
  NavigationEnd,
  NavigationError,
  NavigationStart,
  Router,
} from '@angular/router';
import { NgProgress } from 'ngx-progressbar';
import { ConfigService } from 'src/app/services/config.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit{
  title = 'airsmat';
  constructor(private _router: Router, private _configService: ConfigService) {  }

  ngOnInit(): void {
    // this._configService.getProfile().subscribe((profile:any) => {
    //   sessionStorage.setItem('airsmatUser', JSON.stringify(profile.user));
    //   if(profile.user.role.role === 'admin'){
    //     this._router.navigate(['/app/admin/dashboard'])
    //   }
    // })
  }
}