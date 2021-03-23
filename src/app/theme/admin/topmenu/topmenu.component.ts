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
          displayName: 'Query Details',
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
      displayName: 'Drivers',
      iconName: 'handyman',
      route: 'admin/driver',
      permission: 'driver_link',
      children: [
        {
          displayName: 'Driver List',
          iconName: 'list',
          route: 'admin/driver/list',
          color: '#c1c1c1',
          permission:'driver_list',

        },
        {
          displayName: 'Driver Add',
          iconName: 'add',
          route: 'admin/driver/add',
          color: '#c1c1c1',
          permission:'driver_add',
        }
      ]
    },

    {
      displayName: 'Groups',
      iconName: 'groups',
      route: 'admin/group',
      permission: 'group_link',
      children: [
        {
          displayName: 'Group List',
          iconName: 'list',
          route: 'admin/group/list',
          color: '#c1c1c1',
          permission:'group_list',

        },
        {
          displayName: 'Group Add',
          iconName: 'add',
          route: 'admin/group/add',
          color: '#c1c1c1',
          permission:'group_add',
        }
      ]
    },
    {
      displayName: 'Notifications',
      iconName: 'notifications',
      route: 'admin/notification',
      permission: 'notification_link',
      children: [
        {
          displayName: 'Notification List',
          iconName: 'list',
          route: 'admin/notification/list',
          color: '#c1c1c1',
          permission:'notification_list',

        },
        {
          displayName: 'Notification Add',
          iconName: 'add',
          route: 'admin/notification/add',
          color: '#c1c1c1',
          permission:'notification_add',
        }
      ]
    },
    {
      displayName: 'Devices',
      iconName: 'commute',
      route: 'admin/devices',
      permission: 'device_link',
      children: [
        {
          displayName: 'Device List',
          iconName: 'list',
          route: 'admin/devices/list',
          color: '#c1c1c1',
          permission:'device_list',

        },
        {
          displayName: 'Device Add',
          iconName: 'add',
          route: 'admin/devices/add',
          color: '#c1c1c1',
          permission:'device_add',
        }
      ]
    },
    {
      displayName: 'Maintenance',
      iconName: 'engineering',
      route: 'admin/maintenance',
      permission: 'maintenance_link',
      children: [
        {
          displayName: 'Maintenance List',
          iconName: 'list',
          route: 'admin/maintenance/list',
          color: '#c1c1c1',
          permission:'maintenance_list',

        },
        {
          displayName: 'Maintenance Add',
          iconName: 'add',
          route: 'admin/maintenance/add',
          color: '#c1c1c1',
          permission:'maintenance_add',
        }
      ]
    },
    {
      displayName: 'Saved Commands',
      iconName: 'touch_app',
      route: 'admin/commands',
      permission: 'command_link',
      children: [
        {
          displayName: 'Commands List',
          iconName: 'list',
          route: 'admin/commands/list',
          color: '#c1c1c1',
          permission:'command_list',

        },
        {
          displayName: 'Commands Add',
          iconName: 'add',
          route: 'admin/commands/add',
          color: '#c1c1c1',
          permission:'command_add',
        }
      ]
    },
    {
      displayName: 'Computed Attributes',
      iconName: 'edit_attributes',
      route: 'admin/attributes',
      permission: 'attribute_link',
      children: [
        {
          displayName: 'Attributes List',
          iconName: 'list',
          route: 'admin/attributes/list',
          color: '#c1c1c1',
          permission:'attribute_list',

        },
        {
          displayName: 'Attribute Add',
          iconName: 'add',
          route: 'admin/attributes/add',
          color: '#c1c1c1',
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
