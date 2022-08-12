import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-configurations',
  templateUrl: './configurations.component.html',
  styleUrls: ['./configurations.component.scss'],
})
export class ConfigurationsComponent implements OnInit {
  constructor(private router: Router) {}

  public configMenu = [
    { id: 1, name: 'Business Ownership Structure' },
    { id: 2, name: 'Business Registration Type' },
    { id: 3, name: 'Business Type' },
    { id: 4, name: 'Commodities' },
    { id: 5, name: 'Commodity Categories' },
    { id: 6, name: 'Currency' },
    { id: 7, name: 'Industry' },
    { id: 8, name: 'Permissions' },
    { id: 9, name: 'Roles' },
    { id: 10, name: 'Staff Sizes' },
  ];

  ngOnInit(): void {}

  routeToChild(data: any) {
    this.router.navigateByUrl(
      `/app/admin/configurations/${data.id}/${data.name}`,
      {
        state: { data },
      }
    );
  }
}
