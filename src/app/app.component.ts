import { Component } from '@angular/core';
import {
  NavigationCancel,
  Event,
  NavigationEnd,
  NavigationError,
  NavigationStart,
  Router,
} from '@angular/router';
import { NgProgress } from 'ngx-progressbar';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'airsmat';
  // navigationInterceptor: any;

  constructor(private _router: Router) {
    // this._router.events.subscribe((event: Event) => {
    //   this.navigationInterceptor(event);
    // });
  }

  private navigationInterceptor(event: Event): void {
    if (event instanceof NavigationStart) {
      console.log('start', { event });
    }
    if (event instanceof NavigationEnd) {
      console.log('end', { event });
    }
    if (event instanceof NavigationCancel) {
      console.log('cancen', { event });
    }
    if (event instanceof NavigationError) {
      console.log('error', { event });
    }
  }
}
