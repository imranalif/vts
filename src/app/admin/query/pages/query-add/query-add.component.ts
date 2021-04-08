import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormArray } from '@angular/forms';
import { Router } from '@angular/router';
import { MatSnackBar } from '@angular/material/snack-bar';
import { QueryService } from '../../services/query.service';
import { CategoryService } from 'src/app/admin/inventory/category/services/category.service';
import { ProductService } from 'src/app/admin/inventory/product/services/product.service';

@Component({
  selector: 'app-query-add',
  templateUrl: './query-add.component.html',
  styleUrls: ['./query-add.component.scss']
})
export class QueryAddComponent implements OnInit {
  files
  fileurl: string = null
  object
  objIndex
  unitPrice
  unitPriceIndex = []
  queryID
  categories
  filterCategories
  products
  filterProducts
  productIndex = []
  submitted = false;
  myform: FormGroup;
  userData;
  states = [{ id: 1, value: 'GPS Device' }, { id: 0, value: 'Camera' }, { id: 0, value: 'Burzer' }];
  priorities = [{ id: 1, value: 'Low' }, { id: 0, value: 'High' }, { id: 0, value: 'Medium' }];
  sources = [{ id: 1, value: 'Phone' }, { id: 0, value: 'Email' }, { id: 0, value: 'Web' }];
  types = [{ id: 1, value: 'Document' }, { id: 0, value: 'Image' }, { id: 0, value: 'Binary' }];
  constructor(private fb: FormBuilder,
    private router: Router,
    private snackBar: MatSnackBar,
    private queryService: QueryService,
    private categoryService: CategoryService,
    private productService: ProductService) { }

  ngOnInit(): void {
    this.myform = this.fb.group({
      name: ['', [Validators.required]],
      phone: ['', [Validators.required]],
      email: ['', [Validators.email]],
      contact_address: ['', [Validators.required]],
      billing_address: ['', [Validators.required]],
      source: ['', [Validators.required]],
      status: [''],
      remarks: [''],
      type: ['', [Validators.required]],
      priority: ['', [Validators.required]],
      // category: [],
      // complementary: [],
      // model: [''],
      // quantity: [''],
      // amount: [''],
      // title: [''],
      // price: [''],
      created_by: [''],
      products: this.fb.array([this.moreProducts()]),
      mrc: this.fb.array([this.moreMrc()]),
      files: this.fb.array([this.moreFile()]),
    });
    this.getAllCategory();
  }

  moreProducts() {
    return this.fb.group({
      category: [],
      complementary: [],
      model: [''],
      quantity: [ ],
      price: [],
    });
  }

  get fArray() {
    return this.myform.get('products') as FormArray
  }

  addMoreProducts() {
    this.fArray.push(this.moreProducts())
  }

  removeAttributes(index) {
    (<FormArray>this.myform.get('products')).removeAt(index);
  }

  moreMrc() {
    return this.fb.group({
      title: [''],
      amount: [''],
    });
  }

  get Array() {
    return this.myform.get('mrc') as FormArray
  }

  addMoreMrc() {
    this.Array.push(this.moreMrc())
  }

  removeMrc(index) {
    (<FormArray>this.myform.get('mrc')).removeAt(index);
  }

  moreFile() {
    return this.fb.group({
      type: [''],
      file: [''],
    });
  }

  get fileArray() {
    return this.myform.get('files') as FormArray
  }

  addMoreFile() {
    this.fileArray.push(this.moreFile())
  }

  removeFile(index) {
    (<FormArray>this.myform.get('files')).removeAt(index);
  }

  getAllCategory(): void {
    this.categoryService.getAllCategory().subscribe(res => {
      this.categories = res;
      this.filterCategories = this.categories
    });
  }

  applyFilter(val): void {
    this.categories = this.filterCategories.filter((unit) => unit.name.toLowerCase().indexOf(val) > -1);
  }
  applyFilterP(val): void {
    this.products = this.filterProducts.filter((unit) => unit.model_bdcom.toLowerCase().indexOf(val) > -1);
  }

  openSnackBar(): void {
    this.snackBar.open('Successfully added!!', 'Close', {
      duration: 2000,
      verticalPosition: 'top',
      horizontalPosition: 'end',
    });
  }

  onChange(id, i) {
    this.productService.getProductByCategory(id).subscribe(res => {
      this.productIndex[i] = this.products = res;
      console.log(this.products)
      this.filterProducts = this.products;
    })

    const model = this.myform.get('products');
    model.setValidators(Validators.required);
    model.updateValueAndValidity();
  }

  isActive(e): void {
    const camp = this.myform.get('campaign');
    if (e === 'Agent') {
      camp.setValidators(Validators.required);
    }  else {
      camp.clearValidators();
    }
    camp.updateValueAndValidity();
   }

  onChangeModel(id, i) {
    console.log(id)
    this.objIndex = this.products.findIndex((obj => obj.model_bdcom == id));
    console.log(this.objIndex)
    this.unitPriceIndex[i] = this.unitPrice = this.products[this.objIndex].price;
    console.log(this.products[this.objIndex].price)
  }

  onFileSelected(event): void {
    if (event.target.files.length > 0) {
      const image = event.target.files[0];
      this.files = image;
      console.log(this.files)

      const reader = new FileReader();
      // tslint:disable-next-line: no-shadowed-variable
      reader.onload = (event: any) => {
        this.fileurl = event.target.result;
      };
      reader.readAsDataURL(this.files);
    }

  }

  addQuery() {
    this.submitted = true;
    this.myform.markAllAsTouched();
    if (this.myform.invalid) {
      return;
    }
    this.queryID = Math.random().toString().slice(2, 11);
    this.myform.value.queryID = this.queryID;
    this.userData = JSON.parse(localStorage.getItem('userData'));
    this.myform.value.created_by = this.userData.id;
    this.object = {
      queryID: this.queryID, name: this.myform.value.name, email: this.myform.value.email,remarks: this.myform.value.remarks,
      phone: this.myform.value.phone, contact_address: this.myform.value.contact_address, billing_address: this.myform.value.billing_address, source: this.myform.value.source,
      type: this.myform.value.type, priority: this.myform.value.priority, created_by: this.myform.value.created_by, status: 'New'
    }
    this.myform.value.products.forEach(element => {
      element.totalPrice = element.price * element.quantity;
      element.queryID = this.queryID;
      this.queryService.addQueryProduct(element).subscribe();
      console.log(element)
    });

    this.myform.value.mrc.forEach(element => {
      element.queryID = this.queryID;
      this.queryService.addQueryMrc(element).subscribe();
      console.log(element)
    });

    this.myform.value.files.forEach(element => {
      element.queryID = this.queryID;
      console.log(element.file)
      const formData = new FormData();
      formData.append('file', this.files);
      formData.append('queryID', this.queryID);
      formData.append('type', this.myform.get('type').value);
      this.queryService.addQueryFile(formData).subscribe();
      //console.log(element)
    });

    this.queryService.addQuery(this.object).subscribe(res => {
      this.openSnackBar();
      this.router.navigate(['/admin/query/list']);
    })
  }


}
