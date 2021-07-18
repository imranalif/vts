import { Component, OnInit, ViewChild, Optional, Inject } from '@angular/core';
import { Router } from '@angular/router';
import { PageEvent, MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { MatSnackBar } from '@angular/material/snack-bar';
import { DialogService } from 'src/app/shared/services/dialog.service';

import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { MAT_DIALOG_DATA, MatDialogRef } from "@angular/material/dialog/";
import { GroupService } from '../../services/group.service';


@Component({
  selector: 'app-group-user',
  templateUrl: './group-user.component.html',
  styleUrls: ['./group-user.component.scss']
})
export class GroupUserComponent implements OnInit {

  commands
  userGroups;
  Id
  object
  dataSource = new MatTableDataSource<any>([]);
  @ViewChild(MatSort) sort: MatSort;
  @ViewChild(MatPaginator) paginator: MatPaginator;
  constructor(private groupService: GroupService,
    private snackBar: MatSnackBar,
    private router: Router,
    private dialogService: DialogService,
    private dialogRef: MatDialogRef<GroupUserComponent>,
    private dialog: MatDialog,
    @Optional() @Inject(MAT_DIALOG_DATA) public data: any) {
    this.Id = data.pageValue
  }
  displayedColumns = ['select', 'name', ];
  sms = [{ id: 1, value: 'true' }, { id: 0, value: 'false' }];

  ngOnInit(): void {
    this.getAllDevice();
    this.getAllDeviceByUser();
  }

  getAllDevice(): void {
    this.groupService.getAllGroup().subscribe(res => {
      this.commands = res;
      this.dataSource = new MatTableDataSource(res as any);
      setTimeout(() => (this.dataSource.sort = this.sort));
      setTimeout(() => (this.dataSource.paginator = this.paginator));
    });
  }

  getAllDeviceByUser(){
    this.groupService.getGroupByUserId(this.Id).subscribe(res=>{
      console.log(res);
      this.userGroups=res;
      this.userGroups.forEach(element => {
        this.userGroups.push(element.groupid)
      });
    })
  }

  close() {
    this.dialogRef.close();
  }

  public checkState(id: string): boolean {
    if(this.userGroups){
    return this.userGroups.indexOf(id) > -1;}
  }


  check(e, data) {
    if (e) {
      this.object = { userId: this.Id, groupId: data.id }
      this.groupService.addGroupWithUser(this.object).subscribe()
    }
    else{
      this.object = { userId: this.Id, groupId: data.id }
      this.groupService.deleteUserGroup(this.object).subscribe()
    }
  }


}
