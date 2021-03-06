import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ProductService } from '../../services/product.service';
import { CategoryService } from '../../../category/services/category.service';

@Component({
  selector: 'app-product-edit',
  templateUrl: './product-edit.component.html',
  styleUrls: ['./product-edit.component.scss']
})
export class ProductEditComponent implements OnInit {
  Id
  file
  createdBy
  submitted = false;
  myform: FormGroup;
  categories
  filterCategories
  userData;
  status = [{ id: 1, value: 'Active' }, { id: 0, value: 'Inactive' }];

  types = [{ id: 0, value: '2G' }, { id: 1, value: '3G' }, { id: 2, value: '4G' }, { id: 2, value: '5G' }];
  quantity=[{value:2},{value:4},{value:6},{value:8}]
  outquantity=[{value:0},{value:2},{value:4},{value:6},{value:8}];
  constructor(private fb: FormBuilder,
    private router: Router,
    private snackBar: MatSnackBar,
    private productService: ProductService,
    private categoryService:CategoryService,
    private route:ActivatedRoute) { }

  ngOnInit(): void {
    this.myform = this.fb.group({
      category: ['', [Validators.required]],
      name: ['', [Validators.required]],
      model_company: [''],
      model_bdcom: [''],
      company: [''],
      input_quantity: [],
      output_quantity: [],
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

    this.route.paramMap.subscribe(params => {
      this.Id = params.get('id');
      this.edit(this.Id);
    });
  }

  getAllCategory(): void {
    this.categoryService.getAllCategory().subscribe(res => {
      this.categories = res;
      this.filterCategories=this.categories
    });
  }
  edit(id): void {
    this.productService.getProductById(id).subscribe(data => {
      this.setData(data);
    });
  }

  setData(data): void {
    this.myform.patchValue({
      category: data.category,
      name: data.name,
      model_company: data.model_company,
      model_bdcom: data.model_bdcom,
      company: data.company,
      input_quantity: data.input_quantity,
      output_quantity: data.output_quantity,
      fleet_management: data.fleet_management,
      network_type: data.network_type,
      price: data.price,
      feature: data.feature,
      remark: data.remark,
      status: data.status,
      //file: data.file
    });
    this.file=data.file;
    this.createdBy = data.created_by;
  }

  openSnackBar(): void {
    this.snackBar.open('Successfully added!!', 'Close', {
      duration: 2000,
      verticalPosition: 'top',
      horizontalPosition: 'end',
    });
  }

  applyFilter(val): void {
    this.categories = this.filterCategories.filter((unit) => unit.name.toLowerCase().indexOf(val) > -1);
  }

  goBack(){
    this.router.navigate(['/admin/inventory/product/list']);
  }

  updateProduct(): void{
    this.submitted = true;
    if (this.myform.invalid) {
      return;
  }
   
    this.userData = JSON.parse(localStorage.getItem('userData'));
    this.myform.value.updated_by = this.userData.id;
    this.myform.value.updated_time = new Date();
    this.myform.value.created_by = this.createdBy;
    this.myform.value.file = this.file;
    console.log(this.myform.value);
    this.productService.updateProduct(this.Id, this.myform.value).subscribe(data => {
      this.openSnackBar();
      this.router.navigate(['/admin/inventory/product/list']); 
    });
  }

}
