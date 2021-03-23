import { Component, OnInit ,  HostBinding, Input } from '@angular/core';
import { Router } from '@angular/router';
import { animate, state, style, transition, trigger,AUTO_STYLE } from '@angular/animations';
import { NavItem } from '../shared/menu';
import { MenuService } from '../shared/menu.service';
const DEFAULT_DURATION = 300;
@Component({
  selector: 'app-sidemenu',
  templateUrl: './sidemenu.component.html',
  styleUrls: ['./sidemenu.component.scss'],
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


export class SidemenuComponent implements OnInit {
  assigedRole=[];
  expanded: boolean;
  rolesArray = ['admin', 'superAdmin', 'agent'];
  @HostBinding('attr.aria-expanded') ariaExpanded = this.expanded;
  @Input() item: NavItem;
  @Input() depth: number;

  isOpen = true;
  s=true;

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

 
 

  constructor(public navService: MenuService,
              public router: Router) {
    if (this.depth === undefined) {
      this.depth = 0;
    }
    this.assigedRole = JSON.parse(localStorage.getItem('rolesData'));
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

  testt(item) :boolean{
    if(item){

      //console.log(this.assigedRole.indexOf(item))
      //this.assigedRole.indexOf(item.permission) > -2
      //console.log(item.filter(value => this.assigedRole.includes(value)).length>0)
      if(item.filter(value => this.assigedRole.includes(value)) != [])
      {
        //console.log("start  ////////")
        //console.log(item.filter(value => this.assigedRole.includes(value)))

        //console.log("end  ////////")
        this.s=true;
        //return true
      }

      // if(item.filter(value => this.assigedRole.includes(value)) != [])
      // {
      //   console.log("start  ////////")
      //   console.log(item.filter(value => this.assigedRole.includes(value)))

      //   console.log("end  ////////")
      //   this.s=false;
      //   //return false
      // }
     //return item.filter(value => this.assigedRole.includes(value)) > 0; 
     return true;
     
    

    //  console.log(filteredArray)
    //  if(filteredArray!=[]){
    //  this.s='1'
    //  return true;
    //    console.log(this.s);
    // }
  
      //console.log(item.filter(value => this.assigedRole.includes(value)))
    }
 
  }


  onItemSelected(item: NavItem): void {
    if (!item.children || !item.children.length) {
      this.router.navigate([item.route]);

    }
    if (item.children && item.children.length) {

      this.expanded = !this.expanded;

    }
  }

}
