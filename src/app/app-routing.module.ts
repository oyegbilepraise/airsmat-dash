import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ApplicationComponent } from './application/application.component';

const routes: Routes = [
  {
    path: 'app',
    loadChildren: () =>
      import('./application/application.module').then(
        (m) => m.ApplicationModule
      ),
  },
  { path: '', component: ApplicationComponent },
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
