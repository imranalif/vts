import { Component, OnInit,ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { PageEvent, MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { MatSnackBar } from '@angular/material/snack-bar';

import { DialogService } from 'src/app/shared/services/dialog.service';
import { CommandService } from '../../services/command.service';

@Component({
  selector: 'app-command-list',
  templateUrl: './command-list.component.html',
  styleUrls: ['./command-list.component.scss']
})
export class CommandListComponent implements OnInit {

  assigedRole = []
  show = true;

  private idColumn = 'id';
  commands;
  dataSource = new MatTableDataSource<any>([]);
  @ViewChild(MatSort) sort: MatSort;
  @ViewChild(MatPaginator) paginator: MatPaginator;
  states = [{ id: 0, value: 'Inactive' }, { id: 1, value: 'Active' }];
  displayedColumns = ['action', 'id', 'name', 'identifier',];
  constructor(private commandService: CommandService,
    private snackBar: MatSnackBar,
    private router: Router,
    private dialogService: DialogService) {
    this.assigedRole = JSON.parse(localStorage.getItem('rolesData'));
  }

  ngOnInit(): void {
    this.getAllCommand();
  }

  getAllCommand(): void {
    this.commandService.getAllCommand().subscribe(res => {
      this.commands = res;
      this.dataSource = new MatTableDataSource(res as any);
      setTimeout(() => (this.dataSource.sort = this.sort));
      setTimeout(() => (this.dataSource.paginator = this.paginator));
    });
  }

  editCommand(data): void{
    this.router.navigate(['admin/commands/edit', data.id]);
  }



  deleteCommand(data): void {
    this.dialogService.openConfirmDialog()
    .afterClosed().subscribe(res => {
      if (res){
         this.commandService.deleteCommand(data.id).subscribe();
         this.deleteRowDataTable (data.id, this.idColumn, this.paginator, this.dataSource);
         this.openSnackBar();
      }
    });
  }

  private deleteRowDataTable(recordId, idColumn, paginator, dataSource): void {
   this.commands = dataSource.data;
   const itemIndex = this.commands.findIndex(obj => obj[idColumn] === recordId);
   dataSource.data.splice(itemIndex, 1);
   dataSource.paginator = paginator;
  }


  openSnackBar(): void {
    this.snackBar.open('Deleted!!', 'Close', {
      duration: 2000,
      verticalPosition: 'top',
      horizontalPosition: 'end',
    }); }

    applyFilter(filterValue: string): void {
      this.dataSource.filter = filterValue.trim().toLowerCase();
    }

    goAddItem(){
      this.router.navigate(['admin/traccar/commands/add']);
    }



}
