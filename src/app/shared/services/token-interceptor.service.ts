import { Injectable,Injector } from '@angular/core';
import { Observable, throwError, BehaviorSubject } from 'rxjs';



import {
  HttpInterceptor,
  HttpRequest,
  HttpHandler,
  HttpErrorResponse,
  HttpEvent
} from "@angular/common/http";
import { LoginService } from 'src/app/authentication/login/services/login.service';
import { catchError,switchMap } from 'rxjs/operators';
import { tokenize } from '@angular/compiler/src/ml_parser/lexer';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class TokenInterceptorService implements HttpInterceptor {

  constructor(private injector: Injector,private loginService:LoginService,
    private router:Router) { }

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<any> {
    let loginService = this.injector.get(LoginService);
    let tokenizedReq = req.clone({
      setHeaders: {
        Authorization: `Bearer ${loginService.getToken()}`
      }
    });
    return next.handle(tokenizedReq).pipe(catchError(error=>{
      console.log("=====1")
      console.log(error.status)
      if(error.status==403){
        this.loginService.logout().subscribe(res=>{
          sessionStorage.removeItem('accessToken');
          sessionStorage.removeItem('refreshToken');
          localStorage.removeItem('userData');
          sessionStorage.removeItem('rolesData');
          this.router.navigate(['/']);
        })
      }
      if (error instanceof HttpErrorResponse && error.status === 401) {
        return this.handle401Error(req, next);
      } else {
        return throwError(error);
      }
    }));
  }

  private handle401Error(request: HttpRequest<any>, next: HttpHandler) {
    return this.loginService.refreshToken().pipe(
      switchMap(token => {
        if(token.error){
          this.router.navigate(['/user/info']);
        }
        console.log(token)
        let tokenizedReq2 = request.clone({
          setHeaders: {
            Authorization: `Bearer ${token.accessToken}`
          }
        });
        //this.refreshTokenSubject.next(token.jwt);
        console.log(tokenizedReq2)
        return next.handle(tokenizedReq2);
      }
    
      ));

  }
  
  private addToken(request: HttpRequest<any>, token: string) {
    return request.clone({
      setHeaders: {
        'Authorization': `Bearer ${token}`
      }
    });
  }
  
}
