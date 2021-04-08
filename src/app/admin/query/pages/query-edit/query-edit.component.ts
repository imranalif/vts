import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormArray } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { MatSnackBar } from '@angular/material/snack-bar';
import { QueryService } from '../../services/query.service';
import { CategoryService } from 'src/app/admin/inventory/category/services/category.service';
import { ProductService } from 'src/app/admin/inventory/product/services/product.service';

@Component({
  selector: 'app-query-edit',
  templateUrl: './query-edit.component.html',
  styleUrls: ['./query-edit.component.scss']
})
export class QueryEditComponent implements OnInit {
  autoID
  d
  createdBy
  queryData
  users
  queryProducts
  queryMrc;
  categories
  categoryIndex=[]
  fileurl: string = null
  usersIndex = [];
  Id
  object
  objIndex
  unitPrice
  unitPriceIndex=[]
  queryID
  filterCategories
  products
  filterProducts
  productIndex=[]
  submitted = false;
  myform: FormGroup;
  userData;

  isLoading = true;
  states = [{ id: 1, value: 'GPS Device' }, { id: 0, value: 'Camera' }, { id: 0, value: 'Burzer' }];
  priorities = [{ id: 1, value: 'Low' }, { id: 0, value: 'High' }, { id: 0, value: 'Medium' }];
  sources = [{ id: 1, value: 'Phone' }, { id: 0, value: 'Email' }, { id: 0, value: 'Web' }];
  constructor(
    private fb: FormBuilder,
    private router: Router,
    private snackBar: MatSnackBar,
    private queryService: QueryService,
    private route: ActivatedRoute,
    private categoryService: CategoryService,
    private productService: ProductService
  ) { }

  ngOnInit(): void {
    this.myform = this.fb.group({
      name: ['', [Validators.required]],
      phone: ['', [Validators.required]],
      email: ['', [Validators.email]],
      contact_address: ['', [Validators.required]],
      billing_address: ['', [Validators.required]],
      source: ['', [Validators.required]],
      type: ['', [Validators.required]],
      priority: ['', [Validators.required]],
      remarks: [''],
      // category: [],
      // complementary: [],
      // model: [''],
      // quantity: [''],
      // amount: [''],
      // title: [''],
      // price: [''],
      created_by: [''],
      products: this.fb.array([]),
      mrc: this.fb.array([]),
    });
    this.getAllCategory();

    this.route.paramMap.subscribe(params => {
      this.Id = params.get('id');
      this.edit(this.Id);
    });
  }

  edit(id): void {
    this.queryService.getQueryById(id).subscribe(data => {
      this.queryData = data;
      
      this.queryService.getQueryProductById(id).subscribe(res => {
        this.queryProducts = res;
        this.setProducts();
      });
      this.queryService.getQueryMrcById(id).subscribe(response => {
        this.isLoading = false;
        this.queryMrc = response;
        this.setMrc();
        console.log(this.queryMrc)
      });
      this.setData(data);
    });  
  }


  setData(data): void {
    this.myform.patchValue({
      name: data.name,
      phone: data.phone,
      email: data.email,
      contact_address: data.contact_address,
      biling_address: data.biling_address,
      source: data.source,
      type: data.type,
      priority: data.priority,
    });
    this.createdBy = data.created_by;
    this.autoID=data.id;
    
  }

  setProducts() {
    let control = <FormArray>this.myform.controls.products;
    console.log(this.queryProducts)
let i=0
    this.queryProducts.forEach(x => {
      this.onChange(x,i++);
      //this.onChangeModel(x.model,i++)
      console.log(x.category)
      control.push(this.fb.group(x));
    })
  }
  setMrc() {
    let control = <FormArray>this.myform.controls.mrc;
    this.queryMrc.forEach(x => {
      control.push(this.fb.group(x));
    })
  }


  moreProducts() {
    return this.fb.group({
      category: [],
      complementary: [],
      model: [''],
      quantity: [],
      unit_price: [],
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
      title:[''],
      amount:[''],
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

  onChange(id,i) {
    console.log("=======")
    console.log(id)
    this.productService.getProductByCategory(id.category).subscribe(res=>{
      this.productIndex[i]=this.products=res;
      this.onChangeModel(id.model,i);
      console.log(this.products)
this.filterProducts=this.products;
    })
  }

  onChangeV(id,i) {
    console.log("=======")
    console.log(id)
    this.productService.getProductByCategory(id).subscribe(res=>{
      this.productIndex[i]=this.products=res;
      console.log(this.products)
this.filterProducts=this.products;
    })
  }

  onChangeModel(id,i) {
   console.log(this.products)
   console.log(id)
   this.objIndex = this.products.findIndex((obj => obj.model_bdcom == id));
   console.log(this.objIndex)
   this.unitPriceIndex[i]=this.unitPrice=this.products[this.objIndex].price;
   console.log(this.products[this.objIndex].price)
  }

  goBack(){
    this.router.navigate(['/admin/query/list']);
  }


  updateQuery() {
    this.submitted = true;
    this.myform.markAllAsTouched();
    if (this.myform.invalid) {
      return;
    }
    // this.queryID = Math.random().toString().slice(2, 11);
    // this.myform.value.queryID = this.queryID;
     this.userData = JSON.parse(localStorage.getItem('userData'));
    this.myform.value.created_by = this.userData.id;
    this.object={queryID:this.Id,name:this.myform.value.name,email:this.myform.value.email,
    phone:this.myform.value.phone,address:this.myform.value.address,source:this.myform.value.source,
  type:this.myform.value.type,priority:this.myform.value.priority,created_by:this.createdBy}
    this.myform.value.products.forEach(element => {
      element.totalPrice=element.unit_price*element.quantity;
      //element.queryID=this.queryID;
      this.queryService.updateQueryProduct(element.id,element).subscribe();
      console.log(this.Id)
      console.log(element)
    });

    this.myform.value.mrc.forEach(element => {
      element.queryID=this.queryID;
      this.queryService.updateQueryMrc(element.id,element).subscribe();
      console.log(element)
    });
    this.queryService.updateQuery(this.autoID,this.object).subscribe(res => {
      this.openSnackBar();
      this.router.navigate(['/admin/query/list']);
    })
  }


}
