import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, EmailValidator } from '@angular/forms';
import { Router } from '@angular/router';
import { MatSnackBar } from '@angular/material/snack-bar';
import { compareValidators } from '../../services/confirm-password.directive';
import { UserService } from '../../services/user.service';


@Component({
  selector: 'app-user-add',
  templateUrl: './user-add.component.html',
  styleUrls: ['./user-add.component.scss']
})
export class UserAddComponent implements OnInit {
  imgurl: string = null;
  images;
  submitted = false;
  show: boolean;
  myform: FormGroup;
  states = [{ id: 1, value: 'Active' }, { id: 0, value: 'Inactive' }];
  roles = [{ id: 1, value: 'Admin' }, { id: 0, value: 'User' }];
  gend = [{ value: 'Male' }, { value: 'Female' }];
  constructor(private fb: FormBuilder,
    private router: Router,
    private snackBar: MatSnackBar,
    private userService: UserService) { }

  ngOnInit(): void {
    this.myform = this.fb.group({
      firstName: ['', [Validators.required]],
      lastName: ['', [Validators.required]],
      mobile: ['', [Validators.required]],
      email: ['', [Validators.required, Validators.email]],
      address: ['', [Validators.required]],
      gender: ['', [Validators.required]],
      userRole: ['', [Validators.required]],
      image: ['', [Validators.required]],
      password: ['', [Validators.required]],
      confirmPassword: ['', [Validators.required, compareValidators('password')]],
      created_by: [''],
      status: []
    });
  }

  onFileSelected(event): void {
    if (event.target.files.length > 0) {
      const image = event.target.files[0];
      this.images = image;

      const reader = new FileReader();
      // tslint:disable-next-line: no-shadowed-variable
      reader.onload = (event: any) => {
        this.imgurl = event.target.result;
      };
      reader.readAsDataURL(this.images);
    }
  }

  openSnackBar(): void {
    this.snackBar.open('Successfully added!!', 'Close', {
      duration: 2000,
      verticalPosition: 'top',
      horizontalPosition: 'end',
    });
  }

  errorMessage(): void {
    this.snackBar.open('Something is error!!', 'Close', {
      duration: 2000,
      verticalPosition: 'top',
      horizontalPosition: 'end',
    });
  }


  addUser() {
    this.myform.markAllAsTouched();
    this.submitted = true;
    if (this.myform.invalid) {
      return;
    }
    const formData = new FormData();
    formData.append('image', this.images);
    formData.append('firstName', this.myform.get('firstName').value);
    formData.append('lastName', this.myform.get('lastName').value);
    formData.append('mobile', this.myform.get('mobile').value);
    formData.append('email', this.myform.get('email').value);
    formData.append('password', this.myform.get('password').value);
    formData.append('userRole', this.myform.get('userRole').value);
    formData.append('address', this.myform.get('address').value);
    formData.append('gender', this.myform.get('gender').value);
    formData.append('status', this.myform.get('status').value);
    formData.append('created_by', this.myform.value.created_by);

    this.userService.addUser(formData).subscribe(data => {
      this.openSnackBar();
      // this.router.navigate(['admin/users/user/user-list']);
    },
      error => {
        this.errorMessage();
      }
    );

  }



}
