import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { MatMenuTrigger } from '@angular/material/menu';
import { MenuService } from '../shared/menu.service';
import { Router } from '@angular/router';
import { NavItem } from '../shared/menu';
import { MediaObserver, MediaChange } from '@angular/flex-layout';
import { Subscription } from 'rxjs';
import { LoginService } from 'src/app/authentication/login/services/login.service';


@Component({
  selector: 'app-topmenu',
  templateUrl: './topmenu.component.html',
  styleUrls: ['./topmenu.component.scss']
})
export class TopmenuComponent implements OnInit {
sideMode="side"
  data2;
data1: any = [];
mediaSub: Subscription;
  constructor(private navService: MenuService, private router: Router,
    private mediaObserver: MediaObserver,private loginService:LoginService) { }
  opened = true;
  @ViewChild('appDrawer', { static: true }) appDrawer: ElementRef;

  @ViewChild(MatMenuTrigger) trigger: MatMenuTrigger;

  navItems: NavItem[] = [
    // {
    //   displayName: 'Dashboard',
    //   iconName: 'public',
    //   route: 'path/dashboard',
    //   // children: [
    //   //   {
    //   //     displayName: 'Dashboard View',
    //   //     iconName: 'speaker_notes',
    //   //     route: 'core/dashboard/dashboard-view',
    //   //   }
    //   // ]
    // },
    {
      displayName: 'Users',
      iconName: 'people',
      route: 'admin/authorization',
      permission: 'users_menu',
      children: [
        {
          displayName: 'User',
          iconName: 'manage_accounts',
          route: 'admin/authorization/users',
          permission: 'user_link',
          children: [
            {
              displayName: 'User List',
              iconName: 'list',
              route: 'admin/authorization/users/list',
              color: '#c1c1c1 ',
              //permission:['user_list'],
              permission:'user_list',
            },
            {
              displayName: 'User Add',
              iconName: 'person_add',
              route: 'admin/authorization/users/add',
              color: '#c1c1c1 ',
              permission:'user_add',
            }
            ,
            {
              displayName: 'Reset Password',
              iconName: 'enhanced_encryption',
              route: 'admin/authorization/users/reset-password',
              color: '#c1c1c1 ',
              permission: 'user_password_reset',

            }
          ]
        },
        {
          displayName: 'Roles',
          iconName: 'admin_panel_settings',
          route: 'admin/authorization/roles',
          permission: 'role_link',
          children: [
            {
              displayName: 'Role List',
              iconName: 'list',
              route: 'admin/authorization/roles/list',
              color: '#c1c1c1',
              permission:'role_list',

            },
            {
              displayName: 'Role Add',
              iconName: 'add',
              route: 'admin/authorization/roles/add',
              color: '#c1c1c1',
              permission:'role_add',
            }
          ]
        }
        ,
        {
          displayName: 'Permission Group',
          iconName: 'speaker_notes',
          route: 'admin/authorization/group',
          permission: 'group_link',
          children: [
            {
              displayName: 'Permission Group List',
              iconName: 'list',
              route: 'admin/authorization/group/list',
              color: '#c1c1c1',
              permission: 'group_list',
            },
            {
              displayName: 'Permission Group Add',
              iconName: 'add',
              route: 'admin/authorization/group/add',
              color: '#c1c1c1',
              permission: 'group_add',
            },

          ]
        }
        ,
        {
          displayName: 'Permission Group Item',
          iconName: 'perm_data_setting',
          route: 'admin/authorization/item',
          permission: 'item_link',
          children: [
            {
              displayName: 'Permission Group Item List',
              iconName: 'list',
              route: 'admin/authorization/item/list',
              color: '#c1c1c1',
              permission: 'item_list',
            },
            {
              displayName: 'Permission Group Item Add',
              iconName: 'add',
              route: 'admin/authorization/item/add',
              color: '#c1c1c1',
              permission: 'item_add',
            },
          ]
        }
      ]
    },
    {
      displayName: 'Inventory',
      iconName: 'inventory',
      route: 'admin/inventory',
      permission: 'inventory_link',
      children: [
        {
          displayName: 'Category',
          iconName: 'category',
          route: 'admin/inventory/category',
          permission: 'category_link',
          children: [
            {
              displayName: 'Category List',
              iconName: 'list',
              route: 'admin/inventory/category/list',
              color: '#c1c1c1',
              permission:'category_list',

            },
            {
              displayName: 'Category Add',
              iconName: 'add',
              route: 'admin/inventory/category/add',
              color: '#c1c1c1',
              permission:'category_add',
            }
          ]
        },
        // {
        //   displayName: 'Document Type',
        //   iconName: 'article',
        //   route: 'admin/inventory/document-type',
        //   permission: 'document_type_link',
        //   children: [
        //     {
        //       displayName: 'Type List',
        //       iconName: 'list',
        //       route: 'admin/inventory/document-type/list',
        //       color: '#c1c1c1',
        //       permission:'document_type_list',

        //     },
        //     {
        //       displayName: 'Type Add',
        //       iconName: 'add',
        //       route: 'admin/inventory/document-type/add',
        //       color: '#c1c1c1',
        //       permission:'document_type_add',
        //     }
        //   ]
        // },
        {
          displayName: 'Product',
          iconName: 'production_quantity_limits',
          route: 'admin/inventory/product',
          permission: 'product_link',
          children: [
            {
              displayName: 'Product List',
              iconName: 'list',
              route: 'admin/inventory/product/list',
              color: '#c1c1c1',
              permission:'product_list',

            },
            {
              displayName: 'Product Add',
              iconName: 'add',
              route: 'admin/inventory/product/add',
              color: '#c1c1c1',
              permission:'product_add',
            }
          ]
        }
      ]
    },
    {
      displayName: 'Customer Query',
      iconName: 'query_stats',
      route: 'admin/query',
      permission: 'query_link',
      children: [
        {
          displayName: 'Query List',
          iconName: 'list',
          route: 'admin/query/list',
          color: '#c1c1c1',
          permission:'query_list',

        },
        {
          displayName: 'Query Add',
          iconName: 'add',
          route: 'admin/query/add',
          color: '#c1c1c1',
          permission:'query_add',
        }
      ]
    },

    {
      displayName: 'Customer ',
      iconName: 'people_alt',
      route: 'admin/customer',
      permission: 'customer_link',
      children: [
        {
          displayName: 'Customer List',
          iconName: 'list',
          route: 'admin/customer/list',
          color: '#c1c1c1',
          permission:'customer_list',

        },
        {
          displayName: 'Customer Add',
          iconName: 'add',
          route: 'admin/customer/add',
          color: '#c1c1c1',
          permission:'customer_add',
        }
      ]
    },


    {
      displayName: 'Traccar',
      iconName: 'commute',
      route: 'admin/traccar',
      permission: 'traccar_link',
      children: [




    {
      displayName: 'Drivers',
      iconName: 'handyman',
      route: 'admin/traccar/driver',
      permission: 'driver_link',
      children: [
        {
          displayName: 'Driver List',
          iconName: 'list',
          route: 'admin/traccar/driver/list',
          color: '#c1c1c1',
          permission:'driver_list',

        },
        {
          displayName: 'Driver Add',
          iconName: 'add',
          route: 'admin/traccar/driver/add',
          color: '#c1c1c1',
          permission:'driver_add',
        }
      ]
    },
    {
      displayName: 'Geofences',
      iconName: 'handyman',
      route: 'admin/traccar/geofences',
      permission: 'geofence_link',
      children: [
        {
          displayName: 'Geofence List',
          iconName: 'list',
          route: 'admin/traccar/geofences/list',
          color: '#c1c1c1',
          permission:'geofence_list',

        },
        {
          displayName: 'Geofence Add',
          iconName: 'add',
          route: 'admin/traccar/geofences/add',
          color: '#c1c1c1',
          permission:'geofence_add',
        }
      ]
    },

    {
      displayName: 'Groups',
      iconName: 'groups',
      route: 'admin/traccar/group',
      permission: 'group_link',
      children: [
        {
          displayName: 'Group List',
          iconName: 'list',
          route: 'admin/traccar/group/list',
          color: '#c1c1c1',
          permission:'group_list',

        },
        {
          displayName: 'Group Add',
          iconName: 'add',
          route: 'admin/traccar/group/add',
          color: '#c1c1c1',
          permission:'group_add',
        }
      ]
    },
    {
      displayName: 'Notifications',
      iconName: 'notifications',
      route: 'admin/traccar/notification',
      permission: 'notification_link',
      children: [
        {
          displayName: 'Notification List',
          iconName: 'list',
          route: 'admin/traccar/notification/list',
          color: '#c1c1c1',
          permission:'notification_list',

        },
        {
          displayName: 'Notification Add',
          iconName: 'add',
          route: 'admin/traccar/notification/add',
          color: '#c1c1c1',
          permission:'notification_add',
        }
      ]
    },
    {
      displayName: 'Devices',
      iconName: 'commute',
      route: 'admin/traccar/devices',
      permission: 'device_link',
      children: [
        {
          displayName: 'Device List',
          iconName: 'list',
          route: 'admin/traccar/devices/list',
          color: '#c1c1c1',
          permission:'device_list',

        },
        {
          displayName: 'Device Add',
          iconName: 'add',
          route: 'admin/traccar/devices/add',
          color: '#c1c1c1',
          permission:'device_add',
        },
        {
          displayName: 'Device Category List',
          iconName: 'list',
          route: 'admin/traccar/devices/dcat-list',
          color: '#c1c1c1',
          permission:'device_category_list',

        },
        {
          displayName: 'Device Category Add',
          iconName: 'add',
          route: 'admin/traccar/devices/dcat-add',
          color: '#c1c1c1',
          permission:'device_category_add',
        }
      ]
    },
    {
      displayName: 'Maintenance',
      iconName: 'engineering',
      route: 'admin/traccar/maintenance',
      permission: 'maintenance_link',
      children: [
        {
          displayName: 'Maintenance List',
          iconName: 'list',
          route: 'admin/traccar/maintenance/list',
          color: '#c1c1c1',
          permission:'maintenance_list',

        },
        {
          displayName: 'Maintenance Add',
          iconName: 'add',
          route: 'admin/traccar/maintenance/add',
          color: '#c1c1c1',
          permission:'maintenance_add',
        }
      ]
    },
    {
      displayName: 'Saved Commands',
      iconName: 'touch_app',
      route: 'admin/traccar/commands',
      permission: 'command_link',
      children: [
        {
          displayName: 'Commands List',
          iconName: 'list',
          route: 'admin/traccar/commands/list',
          color: '#c1c1c1',
          permission:'command_list',

        },
        {
          displayName: 'Commands Add',
          iconName: 'add',
          route: 'admin/traccar/commands/add',
          color: '#c1c1c1',
          permission:'command_add',
        }
      ]
    },
    {
      displayName: 'Computed Attributes',
      iconName: 'edit_attributes',
      route: 'admin/traccar/attributes',
      permission: 'attribute_link',
      children: [
        {
          displayName: 'Attributes List',
          iconName: 'list',
          route: 'admin/traccar/attributes/list',
          color: '#c1c1c1',
          permission:'attribute_list',

        },
        {
          displayName: 'Attribute Add',
          iconName: 'add',
          route: 'admin/traccar/attributes/add',
          color: '#c1c1c1',
          permission:'attribute_add',
        }
      ]
    }
  
  ]},
  {
    displayName: 'Reports',
    iconName: 'report',
    route: 'admin/report',
    permission: 'report_link',
    children: [
      {
        displayName: 'Position Report',
        iconName: 'category',
        route: 'admin/report/position',
        permission: 'position_report',
        
      },
      {
        displayName: 'Drives And Stops Report',
        iconName: 'model_training',
        route: 'admin/report/drives_stops',
        permission: 'drives_stops_report',
        
      },
      {
        displayName: 'Ignition ON/OFF Report',
        iconName: 'play_for_work',
        route: 'admin/report/ignition_report',
        permission: 'ignition_report',
        
      },
      {
        displayName: 'Parking Report',
        iconName: 'park',
        route: 'admin/report/parking_report',
        permission: 'parking_report',
        
      },
      {
        displayName: 'Online Report',
        iconName: 'online_prediction',
        route: 'admin/report/online_report',
        permission: 'online_report',
        
      },
      {
        displayName: 'Offine Report',
        iconName: 'offline_bolt',
        route: 'admin/report/offline_report',
        permission: 'offline_report',
        
      },
      
    ]
  },


  ]

  ngOnInit(): void {
    this.navService.appDrawer = this.appDrawer;
    this.mediaSub = this.mediaObserver.media$.subscribe(
      (result: MediaChange) => {
        if(result.mqAlias=='xs'){
          this.opened=false;
          this.sideMode="over"
        }
       
else{
  this.opened=true;
  this.sideMode="side"
}
        if(result.mqAlias=='xl')
        this.opened=true;
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
  this.router.navigate(['admin/dashboard']);
}

}
