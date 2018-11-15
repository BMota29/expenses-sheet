import {Injectable} from '@angular/core';
import {HttpErrorResponse, HttpEvent, HttpHandler, HttpInterceptor} from '@angular/common/http';
import {HttpRequest} from '@angular/common/http';
import {AuthService} from './auth.service';
import {Observable, of} from 'rxjs';
import {catchError} from 'rxjs/operators';
import {Router} from '@angular/router';

@Injectable()
export class AuthInterceptor implements HttpInterceptor {

  constructor(private authService: AuthService,
              private router: Router) {
  }

  intercept(req: HttpRequest<any>,
            next: HttpHandler): Observable<HttpEvent<any>> {

    const isAuth = this.authService.isAuthenticated();

    let clonedRequest = null;
    if (isAuth) {
      clonedRequest = req.clone({
        headers: req.headers.set(
          'Authorization',
          this.authService.getToken())
      });
    }
    return next.handle(clonedRequest);
  }
}
