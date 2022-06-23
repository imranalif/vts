import { Component, OnInit } from '@angular/core';
import { MatDialog, MAT_DIALOG_DATA, MatDialogRef } from "@angular/material/dialog/";

@Component({
  selector: 'app-alert-add',
  templateUrl: './alert-add.component.html',
  styleUrls: ['./alert-add.component.scss']
})
export class AlertAddComponent implements OnInit {

  constructor(
    private dialogRef: MatDialogRef<AlertAddComponent>,
    private dialog: MatDialog,
  ) { }

  ngOnInit(): void {
    this.dialogRef.disableClose = true;
  }

  public close(): void {
    this.dialogRef.close();
  }

}
