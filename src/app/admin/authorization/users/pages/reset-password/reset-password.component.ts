import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { UserService } from '../../services/user.service';
import { compareValidators } from '../../services/confirm-password.directive';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-reset-password',
  templateUrl: './reset-password.component.html',
  styleUrls: ['./reset-password.component.scss']
})
export class ResetPasswordComponent implements OnInit {

  users: any = [];
  nameUser: any = [];
  submitted = false;
  show;
  myform: FormGroup;
  constructor(private userService: UserService, private fb: FormBuilder, private snackBar: MatSnackBar) { }


  ngOnInit(): void {
    this.myform = this.fb.group({
      user_id: ['',[Validators.required]],
      password: ['', [Validators.required]],
      confirm_password: ['', [Validators.required, compareValidators('password')]],
    });
    this.getAllUser();
  }

  getAllUser(): void {
    this.userService.getAllUser().subscribe(res => {
    this.users = res; this.nameUser = this.users;
    });
  }

  filterUser(val): void {
    this.users = this.nameUser.filter((unit) => unit.fullName.toLowerCase().indexOf(val) > -1);
  }

  resetPassword(): void {
    this.myform.markAllAsTouched();
    this.submitted = true;
    if (this.myform.invalid) {
      return;
    }
    this.userService.resetPassword(this.myform.value).subscribe(
      res => {
        this.openSnackBar();
        // this.myform.value.reset();
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
