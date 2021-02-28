import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { RoleService } from 'src/app/admin/authorization/roles/services/role.service';
import { LoginService } from '../../services/login.service';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.scss']
})
export class LoginPageComponent implements OnInit {

  myform: FormGroup;
  show: boolean
  token;
  object
  submitted = false;
  roles = [];
  constructor(private fb: FormBuilder,
    private loginService: LoginService,
    private roleService: RoleService,
    private router: Router) { }

  ngOnInit(): void {
    this.myform = this.fb.group({
      email: ['', [Validators.email, Validators.required]],
      password: ['', [Validators.required, Validators.minLength(6)]],

    });
  }

  login(): void {
    this.myform.markAllAsTouched();
    this.submitted = true;
    if (this.myform.invalid) {
      this.show = true;
      return;
    }
    this.loginService.login(this.myform.value).subscribe(res => {
      this.roleService.getPermissionByRole(res.data.role).subscribe(data => {
        data.forEach(element => {
          this.roles.push(element.permission);
          localStorage.setItem('rolesData', JSON.stringify(this.roles));
          localStorage.setItem('token', res.token);
          localStorage.setItem('userData', JSON.stringify(res.data));
          this.router.navigate(['admin/dashboard']);
          //console.log(this.roles)
        });
      })
     

    },
      err => { this.show = true; }
    )
  }

}
