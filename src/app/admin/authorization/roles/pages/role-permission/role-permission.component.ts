import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ActivatedRoute, Router } from '@angular/router';
import { ItemService } from '../../../permission-group-item/services/item.service';
import { GroupService } from '../../../permission-group/services/group.service';
import { RoleService } from '../../services/role.service';


@Component({
  selector: 'app-role-permission',
  templateUrl: './role-permission.component.html',
  styleUrls: ['./role-permission.component.scss']
})
export class RolePermissionComponent implements OnInit {
  completed: boolean;
  allComplete: boolean = false;
  myform: FormGroup;
  gId;
  reserve: any[] = [];;
  permissionGroup: any[] = [];
  arrayObject: any[] = [];
  groupItem: any[] = [];

  Id
  groupItemCompare: any[] = [];
  groupItemDelete: any[] = [];

  groupList = [];
  permissions

  groups;
  items: any[] = [];
  groupData: any[] = [];
  permission: any[] = [];
  allPermission: any[] = [];
  constructor(private fb: FormBuilder,
    private groupService: GroupService,
    private itemService: ItemService,
    private snackBar: MatSnackBar,
    private roleService: RoleService,
    private route: ActivatedRoute,
    private router: Router,) { }

  ngOnInit(): void {
    this.myform = this.fb.group({
      roleId: [],
      groupId: ['', {}],
      permission: ['', {}],
    });

    this.getAllGroup();

    this.route.paramMap.subscribe(params => {
      this.Id = params.get('id');
      this.edit(this.Id);
    });
  }

  edit(id): void {
    this.roleService.getPermissionId(id).subscribe(res => {
      this.permissions = res;
      //console.log(res);
      this.setData(res);
      this.groupList = res;
      this.groupList.forEach((element, i) => {
        this.groupItem.push(element.permission);
        this.groupItemCompare.push(element.permission);
        this.permissionGroup.push(element.group_id);
      });
    });
  }

  setData(data): void {
    console.log(data);
    this.myform.patchValue({
      //groupId: data.group_id,
      permission: data.permission
    });
  }

  getAllGroup() {
    this.groupService.getAllGroup().subscribe(res => {
      this.groups = res;
      this.groupData.push(res);
      this.groups.forEach(element => {
        this.itemService.getPermissionItemById(element.id).subscribe(data => {
          this.permission[element.id] = data;
          data.forEach(element => {
            this.allPermission.push(element.permission);
          });
        })
      });
    })
  }

  public checkState(permission: string): boolean {
    return this.groupItem.indexOf(permission) > -1;
  }

  checkAllByGroup(e: any, id): void {

    if (e) {
      id = id;
      this.roleService.getPermissionByGroup(id).subscribe(res => {
        console.log(res);
        res.forEach(element => {
          this.reserve.push(element.permission);
          this.groupItem.push(element.permission);

          // const x = { id: id };
          // const y = { item: element.permission };
          // const permissionObject = Object.assign(x, y);
          // this.arrayObject.push(permissionObject);

        });
      })
    }

    else {
      this.reserve.forEach(element => {
        this.groupItem = this.groupItem.filter(m => m !== element);
      });
    }

  }

  checkAll(e: any,): void {
    if (e) {
      this.groupItem = this.allPermission;
    }

    else {
      this.groupItem = [];
    }
  }



  getPermission(e: any, name: any, id: string): void {
    if (e) {
      console.log(id, name);
      const permissionName = name;
      this.gId = id;
      this.permissionGroup.push(this.gId);
      const x = { id: this.gId };
      const y = { item: permissionName };
      const permissionObject = Object.assign(x, y);
      this.arrayObject.push(permissionObject);
    }
    else {
      //this.a.push(name);
      console.log(id);
      this.groupItem = this.groupItem.filter(m => m !== name);
    }

  }

  addPermission(): void {
    this.groupItemDelete = this.groupItemCompare.filter(n => !this.groupItem.includes(n));
    this.groupItemDelete.forEach(element => {
      const object = { id: this.Id, permission: element }
      console.log(object)
      this.roleService.deletePermission(object).subscribe();
    });
    this.arrayObject.forEach((element, i) => {
      this.myform.value.roleId = this.Id;
      this.myform.value.groupId = element.id;
      this.myform.value.permission = element.item;
      const n = this.groupItemCompare.includes(this.myform.value.permission);

      if (n === false) {
        this.roleService.addPermission(this.myform.value).subscribe(data => {

        });
      }
    });
    this.openSnackBar();
    this.router.navigate(['/admin/authorization/roles/list'])
  }

  openSnackBar(): void {
    this.snackBar.open('Updated Successfully!!', 'Close', {
      duration: 2000,
      verticalPosition: 'top',
      horizontalPosition: 'end',
    });
  }

  someComplete(): boolean {
    if (this.groupItem == null) {
      return false;
    }
    return this.groupItem.filter(t => t.completed).length > 0 && !this.allComplete;
  }

}
