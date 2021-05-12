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
  files
  fileurl: string = null
  submitted = false;
  myform: FormGroup;
  categories
  filterCategories
  userData;
  status = [{ id: 1, value: 'Active' }, { id: 0, value: 'Inactive' }];
  states = [{ id: 1, value: 'GPS Device' }, { id: 0, value: 'Camera' }, { id: 0, value: 'Burzer' }];
  types = [{ id: 0, value: '2G' }, { id: 1, value: '3G' }, { id: 2, value: '4G' }, { id: 3, value: '5G' }];
  quantity=[{value:2},{value:4},{value:6},{value:8}]
  Outquantity=[{value:0},{value:2},{value:4},{value:6},{value:8}];
  selected=0;
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
      status:[]

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

  onFileSelected(event): void {
    if (event.target.files.length > 0) {
      const image = event.target.files[0];
      this.files = image;

      const reader = new FileReader();
      // tslint:disable-next-line: no-shadowed-variable
      reader.onload = (event: any) => {
        this.fileurl = event.target.result;
      };
      reader.readAsDataURL(this.files);
    }
    
  }

  addProduct(){
    console.log("test")
    this.submitted = true;
    this.myform.markAllAsTouched();
    if (this.myform.invalid) {
      console.log("return")
      return;
  }
  console.log("test    ====") 
  console.log(this.myform.value)
    this.userData = JSON.parse(localStorage.getItem('userData'));
    this.myform.value.created_by = this.userData.id;
    console.log(this.myform.value)

    const formData = new FormData();
    formData.append('file', this.files);
    formData.append('category', this.myform.get('category').value);
    formData.append('name', this.myform.get('name').value);
    formData.append('model_company', this.myform.get('model_company').value);
    formData.append('model_bdcom', this.myform.get('model_bdcom').value);
    formData.append('company', this.myform.get('company').value);
    formData.append('input_quantity', this.myform.get('input_quantity').value);
    formData.append('output_quantity', this.myform.get('output_quantity').value);
    formData.append('fleet_management', this.myform.get('fleet_management').value);
    formData.append('network_type', this.myform.get('network_type').value);
    formData.append('price', this.myform.get('price').value);
    formData.append('feature', this.myform.get('feature').value);
    formData.append('remark', this.myform.get('remark').value);
    formData.append('created_by', this.myform.value.created_by);
    formData.append('status',  this.myform.get('status').value);

    this.productService.addProduct(formData).subscribe(res=>{
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
