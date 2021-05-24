import {
  HttpEvent,
  HttpHandler,
  HttpInterceptor,
  HttpRequest,
} from '@angular/common/http'
import { Injectable } from '@angular/core'
import { Router } from '@angular/router'
import { Observable, throwError } from 'rxjs'
import { catchError } from 'rxjs/operators'

import { AlertService, AuthenticationService } from '@core/services'

@Injectable()
export class ErrorInterceptor implements HttpInterceptor {
  constructor(
    private authenticationService: AuthenticationService,
    private alertService: AlertService,
    private router: Router
  ) {}

  intercept(
    request: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    return next.handle(request).pipe(
      catchError(err => {
        if (err.status === 401) {
          // auto logout if 401 response returned from api
          this.authenticationService.logout()
          location.reload(true)
        } else if (err.status === 403) {
          // logout if 403 response returned from api
          this.authenticationService.invalidate()
          this.alertService.error(err.error.message, true)
          this.router.navigate(['/login'])
        } else if (err.status === 0) {
          return throwError(
            'We can not process your request right now. Please try again later.'
          )
        }
        const error = err.error.message || err.statusText
        return throwError(error)
      })
    )
  }
}
