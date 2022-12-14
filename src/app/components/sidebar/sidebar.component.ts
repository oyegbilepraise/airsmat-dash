import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { ConfigService } from 'src/app/services/config.service';
import { navbarData } from './nav-data';

interface SideNavToggle {
  screenWidth: number;
  collapsed: boolean;
}

declare interface RouteInfo {
  path: string;
  title: string;
}
export const ROUTES: RouteInfo[] = [
  { path: '/app/admin/dashboard', title: 'Dashboard'},
  { path: '/app/admin/institutions', title: 'Institutions'},
  { path: '/app/admin/all-loans', title: 'All Loans'},
  { path: '/app/admin/all-farmers', title: 'All Farmers'},
  { path: '/app/admin/profile', title: 'Profile'},
]

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss'],
})
export class SidebarComponent implements OnInit {
  constructor(private _configService: ConfigService) {}

  @Output() onToggleSideNav: EventEmitter<SideNavToggle> = new EventEmitter();

  collapsed = true;
  navData = navbarData;
  screenWidth = 0;
  isAdmin:any;

  ngOnInit(): void {
    if(this._configService.getUserDetails().role.role === 'admin')
    this.isAdmin = true;
    else this.isAdmin = false;
  }

  toggleCollapse() {
    this.collapsed = !this.collapsed;
    this.onToggleSideNav.emit({ collapsed: this.collapsed, screenWidth: this.screenWidth });
  }

  closeSideNav() {
    this.collapsed = false;
    this.onToggleSideNav.emit({ collapsed: this.collapsed, screenWidth: this.screenWidth });
  }
}
