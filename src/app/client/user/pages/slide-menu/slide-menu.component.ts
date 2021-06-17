import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { MAT_DIALOG_DATA, MatDialogRef } from "@angular/material/dialog/";
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { DeviceService } from 'src/app/admin/devices/services/device.service';
import { MapService } from '../../services/map.service';

@Component({
  selector: 'app-slide-menu',
  templateUrl: './slide-menu.component.html',
  styleUrls: ['./slide-menu.component.scss']
})
export class SlideMenuComponent implements OnInit {
  isOpen = false;
devices
filterDevices
myform: FormGroup;
dataSource = new MatTableDataSource<any>([]);
displayedColumns = ['select', 'name', 'identifier', 'more'];
status = [{ id: 1, value: 'Active' }, { id: 0, value: 'Inactive' }];
  constructor(
    private fb: FormBuilder,
    private deviceService: DeviceService,
    private mapService:MapService
  ) { }

  ngOnInit(): void {
    this.myform = this.fb.group({
      id: [''],
      from_date: [''],
      to_date: [''],
      status: [''],
    });
    this.getAllDevice()
  }
getAllDevice(){
  this.deviceService.getAllDevices().subscribe(res => {
    console.log(res)
    this.devices = res;
    this.dataSource = new MatTableDataSource( res as any);
  })
}

public checkState(id: string): boolean {
  if (this.devices) {
    return this.devices.indexOf(id) > -1;
  }
}


check(e, data) {
  if (e) {
    console.log(data.unique_id)
    this.mapService.updateData(data.unique_id);
  }

}

applyFilter(filterValue: string): void {
  this.dataSource.filter = filterValue.trim().toLowerCase();
}
applyDevices(val): void {
  this.devices = this.filterDevices.filter((unit) => unit.name.toLowerCase().indexOf(val) > -1);
}

getLocation(){
  

  var lat=23.804623670987468;
  var lng=90.41547226729855;
  var data={lat:lat,lng:lng}
  this.mapService.updateData(data);
}


}
