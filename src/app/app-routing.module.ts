import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ApplicationComponent } from './application/application.component';
import { ReverseAuthGuardService } from './services/reverse-auth-guard.service';

const routes: Routes = [
  { path: '', component: ApplicationComponent, canActivate: [ReverseAuthGuardService]},
  {
    path: 'app',
    loadChildren: () =>
      import('./application/application.module').then(
        (m) => m.ApplicationModule
      ),
  },
  {
    path: 'institutionusers',
    loadChildren: () =>
      import('./application/institutionusers/institutionusers.module').then(
        (m) => m.InstitutionusersModule
      ),
  },
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { useHash: true })],
  exports: [RouterModule],
})
export class AppRoutingModule {}