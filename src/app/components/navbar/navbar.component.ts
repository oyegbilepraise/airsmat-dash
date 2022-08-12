import { Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ROUTES } from '../sidebar/sidebar.component';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
})
export class NavbarComponent implements OnInit {
  public listTitles: any;
  public location: Location;
  constructor(location: Location, private route: ActivatedRoute) {
    this.location = location;
  }

  ngOnInit(): void {
    this.listTitles = ROUTES.filter((listTitle) => listTitle);
  }

  getTitle(){
    let me = this.location.path().toString().split('/')
    let newNav = (me[me.length - 1]);
    if(newNav.includes('%20')) {
      newNav = newNav.replace(/%20/g, ' ');  
    }
    return newNav.toLocaleUpperCase()
    
  }
}
