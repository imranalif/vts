import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ProductService } from '../../services/product.service';
import { CategoryService } from '../../../category/services/category.service';

@Component({
  selector: 'app-product-add',
  templateUrl: './product-add.component.html',
  styleUrls: ['./product-add.component.scss']
})
export class ProductAddComponent implements OnInit {

  submitted = false;
  myform: FormGroup;
  categories
  filterCategories
  userData;
  states = [{ id: 1, value: 'GPS Device' }, { id: 0, value: 'Camera' }, { id: 0, value: 'Burzer' }];
  types = [{ id: 0, value: '2G' }, { id: 1, value: '3G' }, { id: 2, value: '4G' }];
  constructor(private fb: FormBuilder,
    private router: Router,
    private snackBar: MatSnackBar,
    private productService: ProductService,
    private categoryService:CategoryService) { }

  ngOnInit(): void {
    this.myform = this.fb.group({
      category: ['', [Validators.required]],
      name: ['', [Validators.required]],
      model_company: [''],
      model_bdcom: [''],
      company: [''],
      input_quantity: [''],
      output_quantity: [''],
      fleet_management: [],
      network_type: [''],
      price: [''],
      feature: [''],
      remark: [''],
      file: [''],
      created_by: [''],
    });
    this.getAllCategory();
  }

  getAllCategory(): void {
    this.categoryService.getAllCategory().subscribe(res => {
      this.categories = res;
      this.filterCategories=this.categories
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

  applyFilter(val): void {
    this.categories = this.filterCategories.filter((unit) => unit.name.toLowerCase().indexOf(val) > -1);
  }

  addProduct(){
    this.submitted = true;
    this.myform.markAllAsTouched();
    if (this.myform.invalid) {
      return;
  }
    
    this.userData = JSON.parse(localStorage.getItem('userData'));
    this.myform.value.created_by = this.userData.id;
    this.productService.addProduct(this.myform.value).subscribe(res=>{
      this.openSnackBar();
      this.router.navigate(['/admin/inventory/product/list']);
    }
    ,
      error => {
        this.errorMessage();
      }
    )
  }


}
