import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { MatMenuTrigger } from '@angular/material/menu';
import { MenuService } from '../shared/menu.service';
import { Router } from '@angular/router';
import { NavItem } from '../shared/menu';


@Component({
  selector: 'app-topmenu',
  templateUrl: './topmenu.component.html',
  styleUrls: ['./topmenu.component.scss']
})
export class TopmenuComponent implements OnInit {

  data2;
data1: any = [];
  constructor(private navService: MenuService, private router: Router) { }
  opened = true;
  @ViewChild('appDrawer') appDrawer: ElementRef;

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
          iconName: 'person',
          route: 'admin/authorization/users',
          permission: 'user_link',
          children: [
            {
              displayName: 'User List',
              iconName: 'list',
              route: 'admin/authorization/users/list',
              color: '#2471A3 ',
              //permission:['user_list'],
              permission:'user_list',
            },
            {
              displayName: 'User Add',
              iconName: 'person_add',
              route: 'admin/authorization/users/add',
              color: '#2471A3 ',
              permission:'user_add',
            }
            ,
            {
              displayName: 'Reset Password',
              iconName: 'person_add',
              route: 'admin/authorization/users/reset-password',
              color: '#2471A3 ',
              permission: 'user_password_reset',

            }
          ]
        },
        {
          displayName: 'Roles',
          iconName: 'speaker_notes',
          route: 'admin/authorization/roles',
          permission: 'role_link',
          children: [
            {
              displayName: 'Role List',
              iconName: 'star_rate',
              route: 'admin/authorization/roles/list',
              color: '#2471A3',
              permission:'role_list',

            },
            {
              displayName: 'Role Add',
              iconName: 'star_rate',
              route: 'admin/authorization/roles/add',
              color: '#2471A3',
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
              iconName: 'star_rate',
              route: 'admin/authorization/group/list',
              color: '#2471A3',
              permission: 'group_list',
            },
            {
              displayName: 'Permission Group Add',
              iconName: 'star_rate',
              route: 'admin/authorization/group/add',
              color: '#2471A3',
              permission: 'group_add',
            },

          ]
        }
        ,
        {
          displayName: 'Permission Group Item',
          iconName: 'speaker_notes',
          route: 'admin/authorization/item',
          permission: 'item_link',
          children: [
            {
              displayName: 'Permission Group Item List',
              iconName: 'star_rate',
              route: 'admin/authorization/item/list',
              color: '#2471A3',
              permission: 'item_list',
            },
            {
              displayName: 'Permission Group Item Add',
              iconName: 'star_rate',
              route: 'admin/authorization/item/add',
              color: '#2471A3',
              permission: 'item_add',
            },
          ]
        }
      ]
    },
    {
      displayName: 'Drivers',
      iconName: 'speaker_notes',
      route: 'admin/driver',
      permission: 'driver_link',
      children: [
        {
          displayName: 'Driver List',
          iconName: 'star_rate',
          route: 'admin/driver/list',
          color: '#2471A3',
          permission:'driver_list',

        },
        {
          displayName: 'Driver Add',
          iconName: 'star_rate',
          route: 'admin/driver/add',
          color: '#2471A3',
          permission:'driver_add',
        }
      ]
    },
    {
      displayName: 'Groups',
      iconName: 'speaker_notes',
      route: 'admin/group',
      permission: 'group_link',
      children: [
        {
          displayName: 'Group List',
          iconName: 'star_rate',
          route: 'admin/group/list',
          color: '#2471A3',
          permission:'group_list',

        },
        {
          displayName: 'Group Add',
          iconName: 'star_rate',
          route: 'admin/group/add',
          color: '#2471A3',
          permission:'group_add',
        }
      ]
    },
    {
      displayName: 'Notifications',
      iconName: 'speaker_notes',
      route: 'admin/notification',
      permission: 'notification_link',
      children: [
        {
          displayName: 'Notification List',
          iconName: 'star_rate',
          route: 'admin/notification/list',
          color: '#2471A3',
          permission:'notification_list',

        },
        {
          displayName: 'Notification Add',
          iconName: 'star_rate',
          route: 'admin/notification/add',
          color: '#2471A3',
          permission:'notification_add',
        }
      ]
    },
    {
      displayName: 'Devices',
      iconName: 'speaker_notes',
      route: 'admin/devices',
      permission: 'device_link',
      children: [
        {
          displayName: 'Device List',
          iconName: 'star_rate',
          route: 'admin/devices/list',
          color: '#2471A3',
          permission:'device_list',

        },
        {
          displayName: 'Device Add',
          iconName: 'star_rate',
          route: 'admin/devices/add',
          color: '#2471A3',
          permission:'device_add',
        }
      ]
    },
    {
      displayName: 'Maintenance',
      iconName: 'speaker_notes',
      route: 'admin/maintenance',
      permission: 'maintenance_link',
      children: [
        {
          displayName: 'Maintenance List',
          iconName: 'star_rate',
          route: 'admin/maintenance/list',
          color: '#2471A3',
          permission:'maintenance_list',

        },
        {
          displayName: 'Maintenance Add',
          iconName: 'star_rate',
          route: 'admin/maintenance/add',
          color: '#2471A3',
          permission:'maintenance_add',
        }
      ]
    },
    {
      displayName: 'Saved Commands',
      iconName: 'speaker_notes',
      route: 'admin/commands',
      permission: 'command_link',
      children: [
        {
          displayName: 'Commands List',
          iconName: 'star_rate',
          route: 'admin/commands/list',
          color: '#2471A3',
          permission:'command_list',

        },
        {
          displayName: 'Commands Add',
          iconName: 'star_rate',
          route: 'admin/commands/add',
          color: '#2471A3',
          permission:'command_add',
        }
      ]
    },
    {
      displayName: 'Computed Attributes',
      iconName: 'speaker_notes',
      route: 'admin/attributes',
      permission: 'attribute_link',
      children: [
        {
          displayName: 'Attributes List',
          iconName: 'star_rate',
          route: 'admin/attributes/list',
          color: '#2471A3',
          permission:'attribute_list',

        },
        {
          displayName: 'Attribute Add',
          iconName: 'star_rate',
          route: 'admin/attributes/add',
          color: '#2471A3',
          permission:'attribute_add',
        }
      ]
    }
  ]

  ngOnInit(): void {
    this.navService.appDrawer = this.appDrawer;
  }

  logout(): void{
    localStorage.removeItem('token');
    localStorage.removeItem('userData');
    localStorage.removeItem('rolesData');
    this.router.navigate(['/']);
}

}
