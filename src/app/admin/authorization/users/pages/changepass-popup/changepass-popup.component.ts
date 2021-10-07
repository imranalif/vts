import { Component, OnInit } from '@angular/core';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { MAT_DIALOG_DATA, MatDialogRef } from "@angular/material/dialog/";
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { UserService } from '../../services/user.service';
import { compareValidators } from '../../services/confirm-password.directive';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-changepass-popup',
  templateUrl: './changepass-popup.component.html',
  styleUrls: ['./changepass-popup.component.scss']
})
export class ChangepassPopupComponent implements OnInit {
  show;
  show1;
  userData;
  myform: FormGroup;
  constructor(
    private dialogRef: MatDialogRef<ChangepassPopupComponent>,
    private dialog: MatDialog,
    private userService: UserService,
    private fb: FormBuilder,
    private snackBar: MatSnackBar
  ) { }

  ngOnInit(): void {
    this.myform = this.fb.group({
      oldPassword: ['', [Validators.required]],
      password: ['', [Validators.required]],
      confirm_password: ['', [Validators.required, compareValidators('password')]],
      user_id: [''],

    });
  }

  changePassword(): void{
    this.userData = JSON.parse(localStorage.getItem('userData'));
    this.myform.value.user_id = this.userData.id;
    this.userService.changePassword(this.myform.value).subscribe(
      res => {this.openSnackBar(); },

      err => {
        {this.show1 = true; }
      }
    );
    console.log(this.myform.value);
  }

  openSnackBar(): void {
    this.snackBar.open('Reset Successfully!!', 'Close', {
      duration: 2000,
      verticalPosition: 'top',
      horizontalPosition: 'end',
    });
  }

  close() {
    this.dialogRef.close();
  }


}
