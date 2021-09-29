import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormArray } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { MatSnackBar } from '@angular/material/snack-bar';
import { AttributeService } from 'src/app/admin/attributes/services/attribute.service';

@Component({
  selector: 'app-attribute-edit',
  templateUrl: './attribute-edit.component.html',
  styleUrls: ['./attribute-edit.component.scss']
})
export class AttributeEditComponent implements OnInit {
  d
  attr
  Id: string;
  createdBy;
  object: any = {}
  att = [];
  groups = []
  submitted = false;
  myform: FormGroup;
  userData;

  types = [{ id: 1, value: 'String' }, { id: 0, value: 'Number' },{ id: 2, value: 'Boolean' }];
  attributes = [{ id: 1, value: 'Index' }, { id: 2, value: 'DDop' }, { id: 3, value: 'PDop' }];
  constructor(private fb: FormBuilder,
    private router: Router,
    private snackBar: MatSnackBar,
    private attributeService: AttributeService,
    private route:ActivatedRoute) { }

  ngOnInit(): void {
    this.myform = this.fb.group({
      description: ['', [Validators.required]],
      attribute: [''],
      expression: [''],
      type: ['']  
    });
    this.route.paramMap.subscribe(params => {
      this.Id = params.get('id');
      this.edit(this.Id);
    });
  }


  edit(id): void {
    this.attributeService.getAttributeById(id).subscribe(data => {
      this.setData(data);
    });
  }

  setData(data): void {
    this.myform.patchValue({
     description: data.description,
     attribute: data.attribute,
     expression: data.expression,
     type: data.type,
    });
    this.createdBy=data.created_by;
 
  }

 
  openSnackBar(): void {
    this.snackBar.open('Updated added!!', 'Close', {
      duration: 2000,
      verticalPosition: 'top',
      horizontalPosition: 'end',
    });
  }

  goBack(){
    this.router.navigate(['/admin/traccar/attributes/list']);
  }

  updateAttribute() {
    this.myform.markAllAsTouched();
    this.submitted = true;
    if (this.myform.invalid) {
      return;
    }
    this.userData = JSON.parse(localStorage.getItem('userData'));
    this.myform.value.updated_by = this.userData.id;
    this.myform.value.created_by = this.createdBy;
    this.myform.value.updated_time = new Date();
    console.log(this.myform.value)
    this.attributeService.updateAttribute(this.Id,this.myform.value).subscribe(res=>{
      this.openSnackBar();
      this.router.navigate(['/admin/traccar/attributes/list']);
    })
  }

}
