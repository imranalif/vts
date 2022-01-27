import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { MatMenuTrigger } from '@angular/material/menu';
import { NavService } from '../shared/nav.service';
import { Router } from '@angular/router';
import { NavItem } from '../shared/nav';
import { MediaObserver, MediaChange } from '@angular/flex-layout';
import { Subscription } from 'rxjs';
import { LoginService } from 'src/app/authentication/login/services/login.service';

@Component({
  selector: 'app-topbar',
  templateUrl: './topbar.component.html',
  styleUrls: ['./topbar.component.scss']
})
export class TopbarComponent implements OnInit {
  userData
  sideMode = "side"
  data2;
  data1: any = [];
  mediaSub: Subscription;
  constructor(private navService: NavService, private router: Router,
    private mediaObserver: MediaObserver,private loginService:LoginService) {
      this.userData = JSON.parse(localStorage.getItem('userData'));
     }
  opened = true;
  @ViewChild('appDrawer', { static: true }) appDrawer: ElementRef;

  @ViewChild(MatMenuTrigger) trigger: MatMenuTrigger;
  navItems: NavItem[] = [
    {
      displayName: 'Customer ',
      iconName: 'people_alt',
      route: 'reseller/reseller-customer',
      children: [
        {
          displayName: 'Customer List',
          iconName: 'list',
          route: 'reseller/reseller-customer/list',
          color: '#c1c1c1',

        },
        {
          displayName: 'Customer Add',
          iconName: 'add',
          route: 'reseller/reseller-customer/add',
          color: '#c1c1c1',
        }
      ]
    },


  ]

  ngOnInit(): void {
    console.log(this.userData)
    this.navService.appDrawer = this.appDrawer;
    this.mediaSub = this.mediaObserver.media$.subscribe(
      (result: MediaChange) => {
        if (result.mqAlias == 'xs') {
          this.opened = false;
          this.sideMode = "over"
        }

        else {
          this.opened = true;
          this.sideMode = "side"
        }
        if (result.mqAlias == 'xl')
          this.opened = true;
        console.log(result.mqAlias)
      }
    )
  }


  logout(): void{
    this.loginService.logout().subscribe(res=>{
      sessionStorage.removeItem('accessToken');
      sessionStorage.removeItem('refreshToken');
      localStorage.removeItem('userData');
      sessionStorage.removeItem('rolesData');
      this.router.navigate(['/']);
    })
  
}

goto(){
  this.router.navigate(['reseller-map/view',this.userData.customer_id]);
}
}


