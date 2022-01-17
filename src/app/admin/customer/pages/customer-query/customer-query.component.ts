import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { MatSnackBar } from '@angular/material/snack-bar';
import { QueryService } from 'src/app/admin/query/services/query.service';
import { UserService } from 'src/app/admin/authorization/users/services/user.service';
import { CustomerService } from '../../services/customer.service';

@Component({
  selector: 'app-customer-query',
  templateUrl: './customer-query.component.html',
  styleUrls: ['./customer-query.component.scss']
})
export class CustomerQueryComponent implements OnInit {
  Id
  queryData
  queryProducts
  queryMrc;
  queryAction;
  isLoading = true;
  usersIndex = [];
  users;
  resale = [ { id: 0, value: 'NO ' },{ id: 1, value: 'YES' }];
  constructor(
    private route: ActivatedRoute,
    private snackBar: MatSnackBar,
    private queryService: QueryService,
    private customerService: CustomerService,
    private userService: UserService,
    private router: Router,
  ) { 
    this.getAllUser();
  }

  ngOnInit(): void {
   
    this.route.paramMap.subscribe(params => {
      this.Id = params.get('id');
    
    });
  }


  edit(id){
    this.customerService.getCustomerById(id).subscribe(res=>{
    
      this.queryData=res
      this.isLoading = false;
      console.log(res);
      
// var queueID=this.queryData.queryID
//       this.queryService.getQueryProductById(queueID).subscribe(resData => {
//         this.queryProducts = resData;
//         console.log(resData);
//       });
      // this.queryService.getQueryMrcById(queueID).subscribe(response => {
        
      //   console.log(response);
      //   this.queryMrc = response;
      // });

      // this.queryService.getQueryActionById(queueID).subscribe(resp => {
      //   this.queryAction = resp;
      //   console.log(resp);
      // });
    })
  }

  getAllUser(): void {
    this.userService.getAllUser().subscribe(res => {
      this.edit(this.Id);
      this.users = res;
      console.log(this.users)
      this.users.forEach((elem, i) => {
        this.usersIndex[elem.id] = this.users[i];
        console.log(this.usersIndex[2]?.name)
      }
      );
    });
  }

  goBack(){
    this.router.navigate(['/admin/customer/list']); 
  }

}
