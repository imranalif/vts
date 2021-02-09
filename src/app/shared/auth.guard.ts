import { Injectable, OnInit  } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { LoginService } from '../authentication/login/services/login.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  data
  assigedRole=[];
  constructor(private loginService:LoginService,private router:Router) {
    
   }

  //  ngOnInit(): void {
  //   this.data = JSON.parse(localStorage.getItem('rolesData'));
  //   this.assigedRole=this.data;
  // }

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
      if (this.loginService.loggedIn()) {
        this.assigedRole=JSON.parse(localStorage.getItem('rolesData'));
        const roles = route.data.roles;
        const n = this.assigedRole.includes(roles); 
        if(n==true){
          return true;
        }
        else{
          this.router.navigate(["/deny"]);
          return false; 
        }
        
      } else {
        this.router.navigate(["/"]);
        return false;
      }
  }
  
}
