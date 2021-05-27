import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormArray } from '@angular/forms';
import { Router } from '@angular/router';
import { MatSnackBar } from '@angular/material/snack-bar';
import { compareValidators } from '../../services/confirm-password.directive';
import { UserService } from '../../services/user.service';
import { RoleService } from '../../../roles/services/role.service';
import { CustomerService } from 'src/app/admin/customer/services/customer.service';


@Component({
  selector: 'app-user-add',
  templateUrl: './user-add.component.html',
  styleUrls: ['./user-add.component.scss']
})
export class UserAddComponent implements OnInit {
  customerData
  customer_id
  imgurl: string=null
  fileUpload: File = null;
  object: any = {}
  fieldArray: Array<any> = [];
  images;
  submitted = false;
  show: boolean;
  userRoles
  filterRoles
  myform: FormGroup;
  mapTypes = [{id: 1,  value: 'OpenStree Map' }, {id: 2,  value: 'Bing Map' }, {id: 3,  value: 'Baidu Map' }];
  formats = [{id: 1,  value: 'Decimal Degrees' }, {id: 2,  value: 'Degress Decimal Minutes' }, {id: 3,  value: 'Degrees Minutes Seconds' }];
  states = [{ id: 1, value: 'Active' }, { id: 0, value: 'Inactive' }];
  roles = [{ id: 1, value: 'Admin' }, { id: 0, value: 'User' }];
  gend = [{ value: 'Male' }, { value: 'Female' }];
  constructor(private fb: FormBuilder,
    private router: Router,
    private snackBar: MatSnackBar,
    private userService: UserService,
    private rolesService:RoleService,
    private customerService: CustomerService,) { }

    // stepp = 0;
    // setStepp(index: number) {
    //   this.stepp = index;
    // }

    step = 0;
    setStep(index: number) {
      this.step = index;
    }

  ngOnInit(): void {
    this.myform = this.fb.group({
      firstName: ['', [Validators.required]],
      lastName: ['', [Validators.required]],
      mobile: ['', [Validators.required]],
      email: ['', [Validators.required, Validators.email]],
      customer_id: [''],
      address: [''],
      gender: [''],
      userRole: ['', [Validators.required]],
      image: [''],
      password: ['', [Validators.required]],
      confirmPassword: ['', [Validators.required, compareValidators('password')]],
      mapLayer:[''],
      latitude:[''],
      longitude:[''],
      zoom:[],
      hourFormat:[],
      cordinatesFormat:[''],
      poiLayer:[],
      disabled:[],
      admin:[],
      readonly:[],
      deviceReadonly:[],
      limitCommands:[],
      expiration:[],
      deviceLimit:[],
      userLimit:[],
      token:[],
      created_by: [''],
      status: [ ,[Validators.required]],
      attributes: this.fb.array ([]),
    });
    this.getAllRole();
  }

  assignAttributes() {
    return this.fb.group({
      name: [''],
      value: ['']
    });
      }

     get fArray(){
       return this.myform.get('attributes') as FormArray
     } 

      addassignTicket() {
        this.fArray.push(this.assignAttributes())
          }
    

  getAllRole(): void {
    this.rolesService.getAllRole().subscribe(res => {
      this.userRoles = res;
      this.filterRoles=this.userRoles
    });
  }

  applyFilter(val): void {
    this.userRoles = this.filterRoles.filter((unit) => unit.name.toLowerCase().indexOf(val) > -1);
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

  applySearch(e){
    const ob={name:e}
     this.customerService.customerSearch(ob).subscribe(res=>{
       this.customerData=res;
       console.log(this.customerData)
     })
   }

   onChangeCustomer(e){
    this.customer_id=e;
//     const t=this.customerData.map(item => item.id).indexOf(e);
//     console.log(t)
//     if(e){
// this.customer_id=this.customerData[t].customer_id;
// console.log(this.customer_id)
// }
  }


  addUser() {
    this.myform.markAllAsTouched();
    this.submitted = true;
    if (this.myform.invalid) {
      return;
    }
if(this.myform.value.attributes){
    this.myform.value.attributes.forEach(element => {
      const b = element.value
      this.object[element.name] = b;
    });
    
  }
  this.myform.value.attributes = this.object; 

    const formData = new FormData();
    formData.append('image', this.images);
    formData.append('firstName', this.myform.get('firstName').value);
    formData.append('lastName', this.myform.get('lastName').value);
    formData.append('mobile', this.myform.get('mobile').value);
    formData.append('email', this.myform.get('email').value);
    formData.append('customer_id', this.customer_id);
    formData.append('password', this.myform.get('password').value);
    formData.append('userRole', this.myform.get('userRole').value);
    formData.append('address', this.myform.get('address').value);
    formData.append('gender', this.myform.get('gender').value);
    formData.append('status', this.myform.get('status').value);
    
    formData.append('mapLayer', this.myform.get('mapLayer').value);
    formData.append('latitude', this.myform.get('latitude').value);
    formData.append('longitude', this.myform.get('longitude').value);
    formData.append('zoom', this.myform.get('zoom').value);
    formData.append('hourFormat', this.myform.get('hourFormat').value);
    formData.append('cordinatesFormat', this.myform.get('cordinatesFormat').value);
    formData.append('poiLayer', this.myform.get('poiLayer').value);
    formData.append('disabled', this.myform.get('disabled').value);
    formData.append('admin', this.myform.get('admin').value);
    formData.append('readonly', this.myform.get('readonly').value);
    formData.append('deviceReadonly', this.myform.get('deviceReadonly').value);
    formData.append('expiration', this.myform.get('expiration').value);
    formData.append('deviceLimit', this.myform.get('deviceLimit').value);
    formData.append('userLimit', this.myform.get('userLimit').value);
    formData.append('attributes', JSON.stringify(this.object));
    formData.append('token', this.myform.get('token').value);

    
    formData.append('created_by', this.myform.value.created_by);

    console.log(this.myform.value)

    this.userService.addUser(formData).subscribe(data => {
      this.openSnackBar();
       this.router.navigate(['admin/authorization/users/list']);
    },
      error => {
        this.errorMessage();
      }
    );

  }



}
