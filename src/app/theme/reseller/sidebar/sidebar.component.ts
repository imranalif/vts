import { Component, OnInit,HostBinding,Input } from '@angular/core';
import { Router } from '@angular/router';
import { animate, state, style, transition, trigger, AUTO_STYLE } from '@angular/animations';
import { NavItem } from '../shared/nav';
import { NavService } from '../shared/nav.service';
import { MediaObserver, MediaChange } from '@angular/flex-layout';
import { Subscription } from 'rxjs';
const DEFAULT_DURATION = 300;

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss'],
  animations: [
    trigger('indicatorRotate', [
      state('collapsed', style({ transform: 'rotate(0deg)' })),
      state('expanded', style({ transform: 'rotate(180deg)', color: '#5B2C6F' })),
      transition('expanded <=> collapsed',
        animate('350ms cubic-bezier(0.4,0.0,0.2,1)')
      ),
    ]),

    trigger('fadeInOut', [
      state('void', style({
        opacity: 0
      })),
      transition('void <=> *', animate(1000)),
    ]),


  ]
})
export class SidebarComponent implements OnInit {

  assigedRole = [];
  expanded: boolean;
  rolesArray = ['admin', 'superAdmin', 'agent'];
  @HostBinding('attr.aria-expanded') ariaExpanded = this.expanded;
  @Input() item: NavItem;
  @Input() depth: number;

  isOpen = true;
  s = true;

  toggle(): void {
    this.isOpen = !this.isOpen;
  }

  public sideMenuSettings = {
    accordionMode: true,
    showSelectedOption: true,
    selectedOptionClass: 'my-selected-option',
    subOptionIndentation: {
      md: '56px',
      ios: '64px',
      wp: '56px'
    }
  };


  mediaSub: Subscription;

  constructor(public navService: NavService, private mediaObserver: MediaObserver,
    public router: Router) {
    if (this.depth === undefined) {
      this.depth = 0;
    }
    this.assigedRole = JSON.parse(sessionStorage.getItem('rolesData'));
    //console.log(this.assigedRole)
  }

  step = 0;
  setStep(index: number) {
    this.step = index;
  }


  ngOnInit(): void {
    this.navService.currentUrl.subscribe((url: string) => {
      if (this.item.route && url) {

        this.expanded = url.indexOf(`/${this.item.route}`) === 0;
        this.ariaExpanded = this.expanded;

      }
    });
  }

  onItemSelected(item: NavItem): void {
    if (!item.children || !item.children.length) {
      this.router.navigate([item.route]);
      //this.navService.closeNav();
      this.mediaSub = this.mediaObserver.media$.subscribe(
        (result: MediaChange) => {
          if (result.mqAlias == 'xs') {
            this.navService.closeNav();
          }
        }
      )


    }
    if (item.children && item.children.length) {

      this.expanded = !this.expanded;

    }
  }

  a() {
    this.mediaSub = this.mediaObserver.media$.subscribe(
      (result: MediaChange) => {
        if (result.mqAlias == 'xs') {

        }
      }
    )
  }


}
