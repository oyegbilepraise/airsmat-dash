import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ConfigService } from './config.service';

@Injectable({
  providedIn: 'root'
})
export class ReverseAuthGuardService {

  constructor(private router: Router, private _http: HttpClient, private configService: ConfigService, private activatedRoute: ActivatedRoute) { }

  canActivate(): boolean {
    // console.log(this.activatedRoute)
    return true
    // if(sessionStorage.getItem('airsmatBearerToken') && sessionStorage.getItem('airsmatUser')){
    //   let a:any = sessionStorage.getItem('airsmatUser')
    //   let b:any = JSON.parse(a)
    //     if(b.role.role === 'admin') this.router.navigate(['/app/admin/dashboard'])
    //     else this.router.navigate(['/app/institutions/dashboard'])
    //     return false;
    // } else return true;
  }
}
