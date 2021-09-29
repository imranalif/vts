import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { MatSnackBar } from '@angular/material/snack-bar';
import { QueryService } from 'src/app/admin/query/services/query.service';
import { UserService } from 'src/app/admin/authorization/users/services/user.service';

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
  constructor(
    private route: ActivatedRoute,
    private snackBar: MatSnackBar,
    private queryService: QueryService,
    private userService: UserService,
    private router: Router,
  ) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
      this.Id = params.get('id');
      this.edit(this.Id);
    });
  }


  edit(id){
    this.queryService.getQueryByCustomerId(id).subscribe(res=>{
      this.isLoading = false;
      this.queryData=res
      console.log(res);
      this.getAllUser();
var queueID=this.queryData.queryID
      this.queryService.getQueryProductById(queueID).subscribe(resData => {
        this.queryProducts = resData;
        console.log(resData);
      });
      this.queryService.getQueryMrcById(queueID).subscribe(response => {
        
        console.log(response);
        this.queryMrc = response;
      });

      this.queryService.getQueryActionById(queueID).subscribe(resp => {
        this.queryAction = resp;
        console.log(resp);
      });
    })
  }

  getAllUser(): void {
    this.userService.getAllUser().subscribe(res => {
      this.users = res;
      console.log(this.users[6]?.full_name)
      this.users.forEach((elem, i) => {
        this.usersIndex[elem.id] = this.users[i];
        console.log(this.usersIndex[6]?.full_name)
      }
      );
    });
  }

  goBack(){
    this.router.navigate(['/admin/customer/list']); 
  }

}
