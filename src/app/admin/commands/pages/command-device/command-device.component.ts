import { Component, OnInit, ViewChild, Optional, Inject } from '@angular/core';
import { Router } from '@angular/router';
import { PageEvent, MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { MatSnackBar } from '@angular/material/snack-bar';
import { DialogService } from 'src/app/shared/services/dialog.service';

import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { MAT_DIALOG_DATA, MatDialogRef } from "@angular/material/dialog/";
import { CommandService } from '../../services/command.service';

@Component({
  selector: 'app-command-device',
  templateUrl: './command-device.component.html',
  styleUrls: ['./command-device.component.scss']
})
export class CommandDeviceComponent implements OnInit {

  commands
  deviceCommands;
  Id
  object
  dataSource = new MatTableDataSource<any>([]);
  @ViewChild(MatSort) sort: MatSort;
  @ViewChild(MatPaginator) paginator: MatPaginator;
  constructor(private commandService: CommandService,
    private snackBar: MatSnackBar,
    private router: Router,
    private dialogService: DialogService,
    private dialogRef: MatDialogRef<CommandDeviceComponent>,
    private dialog: MatDialog,
    @Optional() @Inject(MAT_DIALOG_DATA) public data: any) {
    this.Id = data.pageValue
  }
  displayedColumns = ['select', 'name', 'description','sms'];
  sms = [{ id: 1, value: 'true' }, { id: 0, value: 'false' }];
  ngOnInit(): void {
    this.getAllDriver();
    this.getAllDriverByDevice();
  }

  getAllDriver(): void {
    this.commandService.getAllCommand().subscribe(res => {
      this.commands = res;
      this.dataSource = new MatTableDataSource(res as any);
      setTimeout(() => (this.dataSource.sort = this.sort));
      setTimeout(() => (this.dataSource.paginator = this.paginator));
    });
  }

  getAllDriverByDevice(){
    this.commandService.getCommandByDeviceId(this.Id).subscribe(res=>{
      console.log(res);
      this.deviceCommands=res;
      this.deviceCommands.forEach(element => {
        this.deviceCommands.push(element.command_id)
      });
    })
  }

  close() {
    this.dialogRef.close();
  }

  public checkState(id: string): boolean {
    if(this.deviceCommands){
    return this.deviceCommands.indexOf(id) > -1;}
  }


  check(e, data) {
    if (e) {
      this.object = { deviceId: this.Id, commandId: data.id }
      this.commandService.addCommandWithDevice(this.object).subscribe()
    }
    else{
      this.object = { deviceId: this.Id, commandId: data.id }
      this.commandService.deleteDeviceCommand(this.object).subscribe()
    }
  }

}
