import { Component, OnInit } from '@angular/core';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';

@Component({
  selector: 'app-mat-dialog',
  templateUrl: './mat-dialog.component.html',
  styleUrls: ['./mat-dialog.component.scss']
})
export class MatDialogComponent implements OnInit {

  constructor(public dialogRef: MatDialogRef<MatDialogComponent>) { }

  ngOnInit(): void {
  }

  closeDialog(): void{
    this.dialogRef.close(false);
      }

}
