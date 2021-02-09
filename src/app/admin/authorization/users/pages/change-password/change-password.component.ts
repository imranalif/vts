import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { UserService } from '../../services/user.service';
import { compareValidators } from '../../services/confirm-password.directive';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-change-password',
  templateUrl: './change-password.component.html',
  styleUrls: ['./change-password.component.scss']
})
export class ChangePasswordComponent implements OnInit {
  show;
  show1;
  userData;
  myform: FormGroup;
  constructor(private userService: UserService,
    private fb: FormBuilder,
    private snackBar: MatSnackBar) { }


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

}
