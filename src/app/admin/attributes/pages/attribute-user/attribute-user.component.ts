import { Component, OnInit, ViewChild, Optional, Inject } from '@angular/core';
import { Router } from '@angular/router';
import { PageEvent, MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { MatSnackBar } from '@angular/material/snack-bar';
import { DialogService } from 'src/app/shared/services/dialog.service';

import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { MAT_DIALOG_DATA, MatDialogRef } from "@angular/material/dialog/";
import { AttributeService } from '../../services/attribute.service';

@Component({
  selector: 'app-attribute-user',
  templateUrl: './attribute-user.component.html',
  styleUrls: ['./attribute-user.component.scss']
})
export class AttributeUserComponent implements OnInit {

  attributes
  userAttributes;
  Id
  object
  dataSource = new MatTableDataSource<any>([]);
  @ViewChild(MatSort) sort: MatSort;
  @ViewChild(MatPaginator) paginator: MatPaginator;
  constructor(private attributeService: AttributeService,
    private snackBar: MatSnackBar,
    private router: Router,
    private dialogService: DialogService,
    private dialogRef: MatDialogRef<AttributeUserComponent>,
    private dialog: MatDialog,
    @Optional() @Inject(MAT_DIALOG_DATA) public data: any) {
    this.Id = data.pageValue
  }
  displayedColumns = ['select', 'name', 'identifier',];

  ngOnInit(): void {
    this.getAllAttribute();
    this.getAllAttributeByUser();
  }

  getAllAttribute(): void {
    this.attributeService.getAllAttribute().subscribe(res => {
      this.attributes = res;
      this.dataSource = new MatTableDataSource(res as any);
      setTimeout(() => (this.dataSource.sort = this.sort));
      setTimeout(() => (this.dataSource.paginator = this.paginator));
    });
  }

  getAllAttributeByUser(){
    this.attributeService.getAttributeByUserId(this.Id).subscribe(res=>{
      console.log(res);
      this.userAttributes=res;
      this.userAttributes.forEach(element => {
        this.userAttributes.push(element.attribute_id)
      });
    })
  }

  close() {
    this.dialogRef.close();
  }

  public checkState(id: string): boolean {
    if(this.userAttributes){
    return this.userAttributes.indexOf(id) > -1;}
  }


  check(e, data) {
    console.log(data.id)
    if (e) {
      this.object = { userId: this.Id, attributeId: data.id }
      this.attributeService.addAttributeWithUser(this.object).subscribe()
    }
    else{
      this.object = { userId: this.Id, attributeId: data.id }
      this.attributeService.deleteUserAttribute(this.object).subscribe()
    }
  }


}
