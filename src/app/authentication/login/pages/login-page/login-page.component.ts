import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { RoleService } from 'src/app/admin/authorization/roles/services/role.service';
import { CustomerService } from 'src/app/admin/customer/services/customer.service';
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
  public isLoading :boolean = false;
  public loginAttemp :boolean = true;
  constructor(private fb: FormBuilder,
    private loginService: LoginService,
    private roleService: RoleService,
    private customerService:CustomerService,
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
      this.loginAttemp=false
      this.isLoading = true;
      if(res.data.user_type=="Customer"){
        this.isLoading = false;
        sessionStorage.setItem('accessToken', res.accessToken);
        sessionStorage.setItem('refreshToken', res.refreshToken);
        this.router.navigate(['/customer-map/info',res.data.id]);
        // this.customerService.getCustomerById(res.data.customer_id).subscribe(res=>{
        //   this.loginService.customerData(res)
        //   this.router.navigate(['/customer-map/info']);
        // })
      }

      else if(res.data.user_type=="Reseller"){
        this.isLoading = false;
        sessionStorage.setItem('accessToken', res.accessToken);
        sessionStorage.setItem('refreshToken', res.refreshToken);
        this.router.navigate(['/reseller/dashboard']);
        localStorage.setItem('userData', JSON.stringify(res.data));
        // this.customerService.getCustomerById(res.data.customer_id).subscribe(res=>{
        //   this.loginService.customerData(res)
        //   this.router.navigate(['/customer-map/info']);
        // })
      }

      else if(res.data.user_type=="Admin")
      {
        this.roleService.getPermissionByRole(res.data.role).subscribe(data => {
          console.log("teesttt")
          data.forEach(element => {
            this.roles.push(element.permission);
            // localStorage.setItem('rolesData', JSON.stringify(this.roles));
            // localStorage.setItem('accessToken', res.accessToken);
            // localStorage.setItem('refreshToken', res.refreshToken);


            sessionStorage.setItem('rolesData', JSON.stringify(this.roles));
            sessionStorage.setItem('accessToken', res.accessToken);
            sessionStorage.setItem('refreshToken', res.refreshToken);

            localStorage.setItem('userData', JSON.stringify(res.data));
            this.router.navigate(['admin/dashboard']);
            //console.log(this.roles)
          });
        })
      }
   
     

    },
      err => { this.show = true; }
    )
  }

}
