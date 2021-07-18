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
  selector: 'app-attribute-device',
  templateUrl: './attribute-device.component.html',
  styleUrls: ['./attribute-device.component.scss']
})
export class AttributeDeviceComponent implements OnInit {

  attributes
  deviceAttributes;
  Id
  object
  dataSource = new MatTableDataSource<any>([]);
  @ViewChild(MatSort) sort: MatSort;
  @ViewChild(MatPaginator) paginator: MatPaginator;
  constructor(private attributeService: AttributeService,
    private snackBar: MatSnackBar,
    private router: Router,
    private dialogService: DialogService,
    private dialogRef: MatDialogRef<AttributeDeviceComponent>,
    private dialog: MatDialog,
    @Optional() @Inject(MAT_DIALOG_DATA) public data: any) {
    this.Id = data.pageValue
  }
  displayedColumns = ['select', 'name', 'identifier',];

  ngOnInit(): void {
    this.getAllDriver();
    this.getAllDriverByDevice();
  }

  getAllDriver(): void {
    this.attributeService.getAllAttribute().subscribe(res => {
      this.attributes = res;
      this.dataSource = new MatTableDataSource(res as any);
      setTimeout(() => (this.dataSource.sort = this.sort));
      setTimeout(() => (this.dataSource.paginator = this.paginator));
    });
  }

  getAllDriverByDevice(){
    this.attributeService.getAttributeByDeviceId(this.Id).subscribe(res=>{
      console.log(res);
      this.deviceAttributes=res;
      this.deviceAttributes.forEach(element => {
        this.deviceAttributes.push(element.attributeid)
      });
    })
  }

  close() {
    this.dialogRef.close();
  }

  public checkState(id: string): boolean {
    if(this.deviceAttributes){
    return this.deviceAttributes.indexOf(id) > -1;}
  }


  check(e, data) {
    if (e) {
      this.object = { deviceId: this.Id, attributeId: data.id }
      this.attributeService.addAttributeWithDevice(this.object).subscribe()
    }
    else{
      this.object = { deviceId: this.Id, attributeId: data.id }
      this.attributeService.deleteDeviceAttribute(this.object).subscribe()
    }
  }

}
