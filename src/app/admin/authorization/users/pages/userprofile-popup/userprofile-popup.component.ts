import { Component, OnInit } from '@angular/core';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { MAT_DIALOG_DATA, MatDialogRef } from "@angular/material/dialog/";

@Component({
  selector: 'app-userprofile-popup',
  templateUrl: './userprofile-popup.component.html',
  styleUrls: ['./userprofile-popup.component.scss']
})
export class UserprofilePopupComponent implements OnInit {

  constructor(
    private dialogRef: MatDialogRef<UserprofilePopupComponent>,
    private dialog: MatDialog,
  ) { }

  ngOnInit(): void {
  }

}
