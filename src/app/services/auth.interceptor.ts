import {
  HttpInterceptor,
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpErrorResponse,
} from "@angular/common/http";
import { Injectable } from "@angular/core";
import { ActivatedRoute, Router } from "@angular/router";
import { ToastrService } from "ngx-toastr";
import { Observable } from "rxjs/internal/Observable";
// import { AuthService } from "./auth.service";
import { map, catchError } from "rxjs/operators";
import { throwError } from "rxjs";

@Injectable()
export class AuthInterceptor implements HttpInterceptor {
  constructor(
    private toastr: ToastrService,
    private router: Router,
    // private authService: AuthService,
    route: ActivatedRoute
  ) {}
  intercept(
    req: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    const token = sessionStorage.getItem("airsmatBearerToken");
    if (token) {
      const cloned = req.clone({
        headers: req.headers.set("Authorization", `${token}`),
      });

      return next.handle(cloned).pipe(
        map((event: HttpEvent<any>) => {
          return event;
        }),
        catchError((err: HttpErrorResponse) => {
          if (err.status == 401) {
            if (this.router.url !== "/auth/login") {
              // this.authService.logout();
              this.router.navigate(["/auth/login"]);
              this.toastr.info(
                "Your session has expired and you have been logged out"
              );
            }
          } else if (err.status == 403) {
            this.toastr.info(
              "Please Request Permission",
              "You do not have permission to access this route"
            );
          }
          return throwError(err);
        })
      );
    } else {
      return next.handle(req).pipe(
        map((event: HttpEvent<any>) => {
          return event;
        }),
        catchError((err: HttpErrorResponse) => {
          if (err.status == 401) {
            if (this.router.url !== "/auth/login") {
              // this.authService.logout();
              this.router.navigate(["/auth/login"]);
              this.toastr.info(
                "Your session has expired and you have been logged out"
              );
            }
          } else if (err.status == 403) {
            this.toastr.info(
              "Please Request Permission",
              "You do not have permission to access this route"
            );
          }
          return throwError(err);
        })
      );
    }
  }
}
