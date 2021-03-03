import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormArray } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { MatSnackBar } from '@angular/material/snack-bar';
import { compareValidators } from '../../services/confirm-password.directive';
import { UserService } from '../../services/user.service';
import { RoleService } from '../../../roles/services/role.service';

@Component({
  selector: 'app-user-edit',
  templateUrl: './user-edit.component.html',
  styleUrls: ['./user-edit.component.scss']
})
export class UserEditComponent implements OnInit {
  d
  attr
  createdBy
  image
  password
  userData
  Id: string;
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
    private route:ActivatedRoute) { }

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
      address: ['', [Validators.required]],
      gender: ['', [Validators.required]],
      userRole: ['', [Validators.required]],
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
      attributes: this.fb.array ([this.assignAttributes()]),
    });
    this.route.paramMap.subscribe(params => {
      this.Id = params.get('id');
      this.edit(this.Id);
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


  edit(id): void {
    this.userService.getUserById(id).subscribe(data => {
      this.d = data
      console.log(this.d);
      var dAttr = JSON.parse(this.d.attributes);
      var myArrayEntries = Object.entries(dAttr);
      this.attr = [];
      myArrayEntries.forEach(key => {
        var tmpAttr = { name: key[0], value: key[1] };
        this.attr.push(tmpAttr);
      });
      this.d.attributes = this.attr;
      console.log(this.d.attributes);
      this.setData(this.d);
    });
  }

  setData(data): void {
    this.myform.patchValue({
      firstName: data.first_name,
      lastName: data.last_name,
      mobile: data.mobile,
      email: data.email,
      address: data.address,
      gender: data.gender,
      userRole: data.user_role,
      mapLayer:data.map_layer,
      latitude:data.latitude,
      longitude:data.longitude,
      zoom:data.zoom,
      hourFormat:data.hour_format,
      cordinatesFormat:data.cordinates_format,
      poiLayer:data.poi_layer,
      disabled:data.disabled,
      admin:data.admin,
      readonly:data.readonly,
      deviceReadonly:data.device_readonly,
      limitCommands:data.limit_commands,
      expiration:data.expiration,
      deviceLimit:data.device_limit,
      userLimit:data.user_limit,
      token:data.token,
      status:data.status,
    });
    this.createdBy=data.created_by;
    this.image=data.image;
    this.password=data.password
    this.setAttributes();
  }

  setAttributes() {
    let control = <FormArray>this.myform.controls.attributes;
    this.d.attributes.forEach(x => {
      control.push(this.fb.group(x));
    })
  }

  applyFilter(val): void {
    this.userRoles = this.filterRoles.filter((unit) => unit.name.toLowerCase().indexOf(val) > -1);
  }

  updateUser(){
    this.myform.markAllAsTouched();
    this.submitted = true;
    if (this.myform.invalid) {
      return;
    }

    this.myform.value.attributes.forEach(element => {
      const b = element.value
      this.object[element.name] = b;
    });
    this.myform.value.attributes = this.object;
    this.userData = JSON.parse(localStorage.getItem('userData'));
    this.myform.value.updated_by = this.userData.id;
    this.myform.value.updated_time = new Date();
    this.myform.value.created_by = this.createdBy;

    this.userService.updateUser(this.Id, this.myform.value).subscribe(data => {
      this.openSnackBar();
      this.router.navigate(['admin/authorization/users/list']); 
    });

  }

}
