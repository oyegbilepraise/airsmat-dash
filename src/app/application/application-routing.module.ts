import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ApplicationComponent } from './application.component';
import { InstitutionusersComponent } from './institutionusers/institutionusers.component';

const routes: Routes = [
  {
    path: '',
    component: ApplicationComponent,
    children: [
      {
        path: 'admin/dashboard',
        loadChildren: () =>
          import('./admin-dashboard/admin-dashboard.module').then(
            (m) => m.AdminDashboardModule
          ),
      },
      {
        path: 'admin/institutions',
        loadChildren: () =>
          import('./institutions/institutions.module').then(
            (m) => m.InstitutionsModule
          ),
      },
      {
        path: 'admin/all-loans',
        loadChildren: () =>
          import('./all-loan/all-loan.module').then((m) => m.AllLoanModule),
      },
      {
        path: 'admin/all-farmers',
        loadChildren: () =>
          import('./all-farmer/all-farmer.module').then(
            (m) => m.AllFarmerModule
          ),
      },
      {
        path: 'admin/profile',
        loadChildren: () =>
          import('./profile/profile.module').then((m) => m.ProfileModule),
      },
      {
        path: 'admin/configurations',
        loadChildren: () =>
          import('./configurations/configurations.module').then((m) => m.ConfigurationsModule),
      },
      { path: 'admin/configurations/:id/:name', loadChildren: () => import('./configurations/config-child/config-child.module').then(m => m.ConfigChildModule) },
      {
        path: 'admin/institutions/:id/:name',
        component: InstitutionusersComponent,
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ApplicationRoutingModule {}
