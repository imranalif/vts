import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ProductService } from '../../services/product.service';
import { CategoryService } from '../../../category/services/category.service';
import { UserService } from 'src/app/admin/authorization/users/services/user.service';

@Component({
  selector: 'app-products-details',
  templateUrl: './products-details.component.html',
  styleUrls: ['./products-details.component.scss']
})
export class ProductsDetailsComponent implements OnInit {

  Id
  file
  createdBy
  submitted = false;
  myform: FormGroup;
  categories
  categoryIndex=[]
  users
  usersIndex=[]
  filterCategories
  productData
  userData;
  status = [{ id: 1, value: 'Active' }, { id: 0, value: 'Inactive' }];
  states = [{ id: 1, value: 'GPS Device' }, { id: 0, value: 'Camera' }, { id: 0, value: 'Burzer' }];
  types = [{ id: 0, value: '2G' }, { id: 1, value: '3G' }, { id: 2, value: '4G' }, { id: 2, value: '5G' }];
  quantity=[{value:2},{value:4},{value:6},{value:8}]
  constructor(private fb: FormBuilder,
    private router: Router,
    private snackBar: MatSnackBar,
    private productService: ProductService,
    private categoryService:CategoryService,
    private route:ActivatedRoute,
    private userService:UserService,) { }

  ngOnInit(): void {
    this.getAllCategory();
    this.getAllUser();

    this.route.paramMap.subscribe(params => {
      this.Id = params.get('id');
      this.edit(this.Id);
    });
  }

  getAllCategory(): void {
    this.categoryService.getAllCategory().subscribe(res => {
      this.categories = res;
      this.categories.forEach((elem, i) => {
        this.categoryIndex[elem.id] = this.categories[i];
      }
      );
    });
  }
  edit(id): void {
    this.productService.getProductById(id).subscribe(data => {
      this.productData=data;
      console.log(this.productData)
    });
  }

  getAllUser(): void {
    this.userService.getAllUser().subscribe(res => {
      this.users = res;
      this.users.forEach((elem, i) => {
        this.usersIndex[elem.id] = this.users[i];
      }
      );
    });
  }
  goBack(){
    this.router.navigate(['/admin/inventory/product/list']);
  }

}
