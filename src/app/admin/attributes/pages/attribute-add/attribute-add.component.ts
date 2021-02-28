import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormArray } from '@angular/forms';
import { Router } from '@angular/router';
import { MatSnackBar } from '@angular/material/snack-bar';
import { AttributeService } from 'src/app/admin/attributes/services/attribute.service';

@Component({
  selector: 'app-attribute-add',
  templateUrl: './attribute-add.component.html',
  styleUrls: ['./attribute-add.component.scss']
})
export class AttributeAddComponent implements OnInit {

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
    private attributeService: AttributeService) { }

  ngOnInit(): void {
    this.myform = this.fb.group({
      description: ['', [Validators.required]],
      attribute: [''],
      expression: [''],
      type: ['']
      
    });
  }

  openSnackBar(): void {
    this.snackBar.open('Successfully added!!', 'Close', {
      duration: 2000,
      verticalPosition: 'top',
      horizontalPosition: 'end',
    });
  }

  addAttribute() {
    this.submitted = true;
    if (this.myform.invalid) {
      return;
    }
    this.userData = JSON.parse(localStorage.getItem('userData'));
    this.myform.value.created_by = this.userData.id;
    console.log(this.myform.value);
    this.attributeService.addAttribute(this.myform.value).subscribe(res => {
      this.openSnackBar();
      this.router.navigate(['/admin/attributes/list']);
    },
    err=>{
      console.log(err)
    }
    )
  }

}
