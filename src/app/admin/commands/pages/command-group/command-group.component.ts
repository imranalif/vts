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
  selector: 'app-command-group',
  templateUrl: './command-group.component.html',
  styleUrls: ['./command-group.component.scss']
})
export class CommandGroupComponent implements OnInit {

  commands
  groupCommands;
  Id
  object
  dataSource = new MatTableDataSource<any>([]);
  @ViewChild(MatSort) sort: MatSort;
  @ViewChild(MatPaginator) paginator: MatPaginator;
  constructor(private commandService: CommandService,
    private snackBar: MatSnackBar,
    private router: Router,
    private dialogService: DialogService,
    private dialogRef: MatDialogRef<CommandGroupComponent>,
    private dialog: MatDialog,
    @Optional() @Inject(MAT_DIALOG_DATA) public data: any) {
    this.Id = data.pageValue
  }
  displayedColumns = ['select', 'name', 'description','sms'];
  sms = [{ id: 1, value: 'true' }, { id: 0, value: 'false' }];

  ngOnInit(): void {
    this.getAllCommand();
    this.getAllCommandByGroup();
  }

  getAllCommand(): void {
    this.commandService.getAllCommand().subscribe(res => {
      this.commands = res;
      this.dataSource = new MatTableDataSource(res as any);
      setTimeout(() => (this.dataSource.sort = this.sort));
      setTimeout(() => (this.dataSource.paginator = this.paginator));
    });
  }

  getAllCommandByGroup(){
    this.commandService.getCommandByGroupId(this.Id).subscribe(res=>{
      console.log(res);
      this.groupCommands=res;
      this.groupCommands.forEach(element => {
        this.groupCommands.push(element.command_id)
      });
    })
  }

  close() {
    this.dialogRef.close();
  }

  public checkState(id: string): boolean {
    if(this.groupCommands){
    return this.groupCommands.indexOf(id) > -1;}
  }


  check(e, data) {
    if (e) {
      this.object = { groupId: this.Id, commandId: data.id }
      this.commandService.addCommandWithGroup(this.object).subscribe()
    }
    else{
      this.object = { groupId: this.Id, commandId: data.id }
      this.commandService.deleteGroupCommand(this.object).subscribe()
    }
  }


}
