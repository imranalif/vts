(window.webpackJsonp=window.webpackJsonp||[]).push([[16],{Cp0R:function(t,e,c){"use strict";c.d(e,"a",(function(){return r}));var a=c("fXoL"),o=c("Ofeh"),i=c("tyNb");let r=(()=>{class t{constructor(t,e){this.loginService=t,this.router=e,this.assigedRole=[]}canActivate(t,e){return this.loginService.loggedIn()?(this.assigedRole=JSON.parse(localStorage.getItem("rolesData")),1==this.assigedRole.includes(t.data.roles)||(this.router.navigate(["/deny"]),!1)):(this.router.navigate(["/"]),!1)}}return t.\u0275fac=function(e){return new(e||t)(a.jc(o.a),a.jc(i.c))},t.\u0275prov=a.Vb({token:t,factory:t.\u0275fac,providedIn:"root"}),t})()},H0VJ:function(t,e,c){"use strict";c.d(e,"a",(function(){return s}));var a=c("fXoL"),o=c("0IaG"),i=c("NFeN"),r=c("bTqV");let n=(()=>{class t{constructor(t){this.dialogRef=t}ngOnInit(){}closeDialog(){this.dialogRef.close(!1)}}return t.\u0275fac=function(e){return new(e||t)(a.Zb(o.f))},t.\u0275cmp=a.Tb({type:t,selectors:[["app-mat-dialog"]],decls:11,vars:2,consts:[[1,"content-container"],["id","close-button",3,"click"],[1,"content-span"],["mat-flat-button","","id","no-button",3,"mat-dialog-close"],["mat-flat-button","","id","yes-button","color","warn",3,"mat-dialog-close"]],template:function(t,e){1&t&&(a.fc(0,"div"),a.fc(1,"div",0),a.fc(2,"mat-icon",1),a.nc("click",(function(){return e.closeDialog()})),a.Oc(3,"close"),a.ec(),a.fc(4,"div",2),a.Oc(5,"Are you sure to delete this record ?"),a.ec(),a.ec(),a.fc(6,"div"),a.fc(7,"button",3),a.Oc(8,"No"),a.ec(),a.fc(9,"button",4),a.Oc(10,"Yes"),a.ec(),a.ec(),a.ec()),2&t&&(a.Ob(7),a.xc("mat-dialog-close",!1),a.Ob(2),a.xc("mat-dialog-close",!0))},directives:[i.a,r.b,o.c],styles:["#close-button[_ngcontent-%COMP%]{margin-left:90%;cursor:pointer}.content-span[_ngcontent-%COMP%]{margin-left:20px;margin-bottom:20px}#no-button[_ngcontent-%COMP%]{width:30%;margin-left:7%;margin-right:25%;background-color:#ff0}#yes-button[_ngcontent-%COMP%]{width:30%}"]}),t})(),s=(()=>{class t{constructor(t){this.dialog=t}openConfirmDialog(){return this.dialog.open(n,{width:"300px",disableClose:!0,position:{top:"20px"}})}}return t.\u0275fac=function(e){return new(e||t)(a.jc(o.b))},t.\u0275prov=a.Vb({token:t,factory:t.\u0275fac,providedIn:"root"}),t})()},IqAE:function(t,e,c){"use strict";c.r(e),c.d(e,"CategoryModule",(function(){return U}));var a=c("ofXK"),o=c("3Pt+"),i=c("KUt4"),r=c("tyNb"),n=c("Cp0R"),s=c("fXoL"),l=c("dNgK"),d=c("q+pd"),u=c("Wp6s"),m=c("kmnG"),f=c("qFsG"),p=c("d3UM"),g=c("bTqV"),h=c("FKr1");function b(t,e){1&t&&(s.fc(0,"div",12),s.Oc(1," Name is required"),s.ec())}function y(t,e){if(1&t&&(s.fc(0,"div",10),s.Nc(1,b,2,0,"div",11),s.ec()),2&t){const t=s.rc();s.Ob(1),s.xc("ngIf",t.myform.get("name").errors.required)}}function v(t,e){if(1&t&&(s.fc(0,"mat-option",13),s.Oc(1),s.ec()),2&t){const t=e.$implicit;s.xc("value",t.id),s.Ob(1),s.Qc(" ",t.value," ")}}let O=(()=>{class t{constructor(t,e,c,a){this.fb=t,this.router=e,this.snackBar=c,this.categoryService=a,this.submitted=!1,this.status=[{id:1,value:"Active"},{id:0,value:"Inactive"}],this.states=[{id:0,value:"GPS Device"},{id:1,value:"Camera"},{id:2,value:"Buzzer"}]}ngOnInit(){this.myform=this.fb.group({name:["",[o.s.required]],created_by:[""],description:[""],type:[,[o.s.required]],status:[,[o.s.required]]})}openSnackBar(){this.snackBar.open("Successfully added!!","Close",{duration:2e3,verticalPosition:"top",horizontalPosition:"end"})}addCategory(){this.submitted=!0,this.myform.markAllAsTouched(),this.myform.invalid||(this.userData=JSON.parse(localStorage.getItem("userData")),this.myform.value.created_by=this.userData.id,this.categoryService.addCategory(this.myform.value).subscribe(t=>{console.log(this.myform.value),this.openSnackBar(),this.router.navigate(["/admin/inventory/category/list"])}))}}return t.\u0275fac=function(e){return new(e||t)(s.Zb(o.e),s.Zb(r.c),s.Zb(l.a),s.Zb(d.a))},t.\u0275cmp=s.Tb({type:t,selectors:[["app-category-add"]],decls:21,vars:3,consts:[[1,"customStyle"],[1,"title-style"],[3,"formGroup"],[1,"full"],["trim","blur","matInput","","placeholder","Name","formControlName","name","autocomplete","off","required",""],["class","feedback",4,"ngIf"],["matInput","","placeholder","Description","formControlName","description","autocomplete","off"],["formControlName","status","required",""],[3,"value",4,"ngFor","ngForOf"],["mat-stroked-button","","color","primary",1,"btn-block",3,"click"],[1,"feedback"],["class","red",4,"ngIf"],[1,"red"],[3,"value"]],template:function(t,e){1&t&&(s.fc(0,"mat-card",0),s.fc(1,"div",1),s.fc(2,"mat-card-title"),s.Oc(3,"Category Add Form"),s.ec(),s.ec(),s.fc(4,"mat-card-content"),s.fc(5,"form",2),s.fc(6,"mat-form-field",3),s.ac(7,"input",4),s.ec(),s.Nc(8,y,2,1,"div",5),s.fc(9,"mat-form-field",3),s.ac(10,"textarea",6),s.ec(),s.fc(11,"mat-form-field",3),s.fc(12,"mat-label"),s.Oc(13,"Status"),s.ec(),s.fc(14,"mat-select",7),s.Nc(15,v,2,2,"mat-option",8),s.ec(),s.ec(),s.ec(),s.ec(),s.fc(16,"mat-card-actions"),s.fc(17,"button",9),s.nc("click",(function(){return e.addCategory()})),s.Oc(18," Add "),s.ec(),s.fc(19,"p"),s.Oc(20,"Note: Field marked with * is Mandatory"),s.ec(),s.ec(),s.ec()),2&t&&(s.Ob(5),s.xc("formGroup",e.myform),s.Ob(3),s.xc("ngIf",e.submitted&&e.myform.get("name").errors),s.Ob(7),s.xc("ngForOf",e.status))},directives:[u.a,u.f,u.c,o.t,o.n,o.g,m.c,f.b,o.c,o.m,o.f,o.r,a.l,m.g,p.a,a.k,u.b,g.b,h.o],styles:["mat-card[_ngcontent-%COMP%]{width:50%}.customStyle[_ngcontent-%COMP%]{border-radius:10px 10px 10px 10px;box-shadow:5px 10px 15px #1a237e}.customStyle[_ngcontent-%COMP%]   .title-style[_ngcontent-%COMP%]{color:#1a237e;text-align:center!important}.customStyle[_ngcontent-%COMP%]   .warning[_ngcontent-%COMP%]{color:red;margin-left:30px}.customStyle[_ngcontent-%COMP%]   .error_message[_ngcontent-%COMP%]{color:red;margin-left:20px;margin-top:-10px;font-size:12px}.mat-stroked-button[_ngcontent-%COMP%]{width:120px;border:1px solid #00f}.sidenav-content[_ngcontent-%COMP%]{height:120%}"]}),t})();function C(t,e){1&t&&(s.fc(0,"div",12),s.Oc(1," Name is required"),s.ec())}function S(t,e){if(1&t&&(s.fc(0,"div",10),s.Nc(1,C,2,0,"div",11),s.ec()),2&t){const t=s.rc();s.Ob(1),s.xc("ngIf",t.myform.get("name").errors.required)}}function x(t,e){if(1&t&&(s.fc(0,"mat-option",13),s.Oc(1),s.ec()),2&t){const t=e.$implicit;s.xc("value",t.id),s.Ob(1),s.Qc(" ",t.value," ")}}let w=(()=>{class t{constructor(t,e,c,a,o){this.fb=t,this.router=e,this.snackBar=c,this.categoryService=a,this.route=o,this.submitted=!1,this.status=[{id:1,value:"Active"},{id:0,value:"Inactive"}],this.states=[{id:0,value:"GPS Device"},{id:1,value:"Camera"},{id:2,value:"Burzer"}]}ngOnInit(){this.myform=this.fb.group({name:["",[o.s.required]],created_by:[""],description:[""],type:[,[o.s.required]],status:[,[o.s.required]]}),this.route.paramMap.subscribe(t=>{this.Id=t.get("id"),this.edit(this.Id)})}edit(t){this.categoryService.getCategoryById(t).subscribe(t=>{this.setData(t)})}setData(t){this.myform.patchValue({name:t.name,description:t.description,type:t.type,status:t.status}),this.createdBy=t.created_by,console.log(this.createdBy)}openSnackBar(){this.snackBar.open("Successfully added!!","Close",{duration:2e3,verticalPosition:"top",horizontalPosition:"end"})}updateCategory(){this.submitted=!0,this.myform.invalid||(this.userData=JSON.parse(localStorage.getItem("userData")),this.myform.value.updated_by=this.userData.id,this.myform.value.updated_time=new Date,this.myform.value.created_by=this.createdBy,console.log(this.myform.value),this.categoryService.updateCategory(this.Id,this.myform.value).subscribe(t=>{this.openSnackBar(),this.router.navigate(["/admin/inventory/category/list"])}))}}return t.\u0275fac=function(e){return new(e||t)(s.Zb(o.e),s.Zb(r.c),s.Zb(l.a),s.Zb(d.a),s.Zb(r.a))},t.\u0275cmp=s.Tb({type:t,selectors:[["app-category-edit"]],decls:21,vars:3,consts:[[1,"customStyle"],[1,"title-style"],[3,"formGroup"],[1,"full"],["trim","blur","matInput","","placeholder","Name","formControlName","name","autocomplete","off","required",""],["class","feedback",4,"ngIf"],["matInput","","placeholder","Description","formControlName","description","autocomplete","off"],["formControlName","status","required",""],[3,"value",4,"ngFor","ngForOf"],["mat-stroked-button","","color","primary",1,"btn-block",3,"click"],[1,"feedback"],["class","red",4,"ngIf"],[1,"red"],[3,"value"]],template:function(t,e){1&t&&(s.fc(0,"mat-card",0),s.fc(1,"div",1),s.fc(2,"mat-card-title"),s.Oc(3,"Category Update Form"),s.ec(),s.ec(),s.fc(4,"mat-card-content"),s.fc(5,"form",2),s.fc(6,"mat-form-field",3),s.ac(7,"input",4),s.ec(),s.Nc(8,S,2,1,"div",5),s.fc(9,"mat-form-field",3),s.ac(10,"textarea",6),s.ec(),s.fc(11,"mat-form-field",3),s.fc(12,"mat-label"),s.Oc(13,"Status"),s.ec(),s.fc(14,"mat-select",7),s.Nc(15,x,2,2,"mat-option",8),s.ec(),s.ec(),s.ec(),s.ec(),s.fc(16,"mat-card-actions"),s.fc(17,"button",9),s.nc("click",(function(){return e.updateCategory()})),s.Oc(18," Update "),s.ec(),s.fc(19,"p"),s.Oc(20,"Note: Field marked with * is Mandatory"),s.ec(),s.ec(),s.ec()),2&t&&(s.Ob(5),s.xc("formGroup",e.myform),s.Ob(3),s.xc("ngIf",e.submitted&&e.myform.get("name").errors),s.Ob(7),s.xc("ngForOf",e.status))},directives:[u.a,u.f,u.c,o.t,o.n,o.g,m.c,f.b,o.c,o.m,o.f,o.r,a.l,m.g,p.a,a.k,u.b,g.b,h.o],styles:["mat-card[_ngcontent-%COMP%]{width:50%}.customStyle[_ngcontent-%COMP%]{border-radius:10px 10px 10px 10px;box-shadow:5px 10px 15px #1a237e}.customStyle[_ngcontent-%COMP%]   .title-style[_ngcontent-%COMP%]{color:#1a237e;text-align:center!important}.customStyle[_ngcontent-%COMP%]   .warning[_ngcontent-%COMP%]{color:red;margin-left:30px}.customStyle[_ngcontent-%COMP%]   .error_message[_ngcontent-%COMP%]{color:red;margin-left:20px;margin-top:-10px;font-size:12px}.mat-stroked-button[_ngcontent-%COMP%]{width:120px;border:1px solid #00f}.sidenav-content[_ngcontent-%COMP%]{height:120%}"]}),t})();var k=c("M9IT"),N=c("Dh3D"),_=c("+0xr"),D=c("H0VJ"),I=c("NFeN");function P(t,e){1&t&&(s.fc(0,"th",19),s.Oc(1,"Action"),s.ec())}function M(t,e){if(1&t){const t=s.gc();s.fc(0,"button",23),s.fc(1,"mat-icon",24),s.nc("click",(function(){s.Fc(t);const e=s.rc().$implicit;return s.rc().editCategory(e)})),s.Oc(2,"edit"),s.ec(),s.ec()}}function q(t,e){if(1&t){const t=s.gc();s.fc(0,"button",25),s.fc(1,"mat-icon",24),s.nc("click",(function(){s.Fc(t);const e=s.rc().$implicit;return s.rc().deleteCategory(e)})),s.Oc(2,"delete_outline"),s.ec(),s.ec()}}function R(t,e){if(1&t&&(s.fc(0,"td",20),s.Nc(1,M,3,0,"button",21),s.Nc(2,q,3,0,"button",22),s.ec()),2&t){const t=s.rc();s.Ob(1),s.xc("ngIf",1==t.assigedRole.includes("category_edit")),s.Ob(1),s.xc("ngIf",1==t.assigedRole.includes("category_delete"))}}function B(t,e){1&t&&(s.fc(0,"th",26),s.Oc(1,"ID"),s.ec())}function F(t,e){if(1&t&&(s.fc(0,"td",20),s.Oc(1),s.ec()),2&t){const t=e.$implicit;s.Ob(1),s.Pc(t.id)}}function A(t,e){1&t&&(s.fc(0,"th",26),s.Oc(1,"Name"),s.ec())}function T(t,e){if(1&t&&(s.fc(0,"td",20),s.Oc(1),s.ec()),2&t){const t=e.$implicit;s.Ob(1),s.Pc(t.name)}}function z(t,e){1&t&&(s.fc(0,"th",26),s.Oc(1,"Description"),s.ec())}function Z(t,e){if(1&t&&(s.fc(0,"td",20),s.Oc(1),s.ec()),2&t){const t=e.$implicit;s.Ob(1),s.Pc(t.description)}}function G(t,e){1&t&&(s.fc(0,"th",26),s.Oc(1,"Status"),s.ec())}function J(t,e){if(1&t&&(s.fc(0,"td",20),s.Oc(1),s.ec()),2&t){const t=e.$implicit,c=s.rc();s.Ob(1),s.Pc(null==c.status[t.status]?null:c.status[t.status].value)}}function V(t,e){1&t&&s.ac(0,"tr",27)}function $(t,e){1&t&&s.ac(0,"tr",28)}const j=function(){return[0]},H=function(){return[25,50,100]},X=[{path:"add",component:O,canActivate:[n.a],data:{roles:"category_add"}},{path:"list",component:(()=>{class t{constructor(t,e,c,a){this.categoryService=t,this.snackBar=e,this.router=c,this.dialogService=a,this.idColumn="id",this.assigedRole=[],this.dataSource=new _.k([]),this.status=[{id:1,value:"Active"},{id:0,value:"Inactive"}],this.states=[{id:0,value:"GPS Device"},{id:1,value:"Camera"},{id:2,value:"Burzer"}],this.displayedColumns=["action","id","name","description","status"],this.assigedRole=JSON.parse(localStorage.getItem("rolesData"))}ngOnInit(){this.getAllCategory(),this.removeColumn()}removeColumn(){0==this.assigedRole.includes("category_edit")&&0==this.assigedRole.includes("category_delete")&&(this.displayedColumns=["id","name","description","type","status"])}getAllCategory(){this.categoryService.getAllCategory().subscribe(t=>{this.categories=t,this.dataSource=new _.k(t),setTimeout(()=>this.dataSource.sort=this.sort),setTimeout(()=>this.dataSource.paginator=this.paginator)})}editCategory(t){this.router.navigate(["admin/inventory/category/edit",t.id])}deleteCategory(t){this.dialogService.openConfirmDialog().afterClosed().subscribe(e=>{e&&(this.categoryService.deleteCategory(t.id).subscribe(),this.deleteRowDataTable(t.id,this.idColumn,this.paginator,this.dataSource),this.openSnackBar())})}deleteRowDataTable(t,e,c,a){this.categories=a.data;const o=this.categories.findIndex(c=>c[e]===t);a.data.splice(o,1),a.paginator=c}openSnackBar(){this.snackBar.open("Deleted!!","Close",{duration:2e3,verticalPosition:"top",horizontalPosition:"end"})}applyFilter(t){this.dataSource.filter=t.trim().toLowerCase()}}return t.\u0275fac=function(e){return new(e||t)(s.Zb(d.a),s.Zb(l.a),s.Zb(r.c),s.Zb(D.a))},t.\u0275cmp=s.Tb({type:t,selectors:[["app-category-list"]],viewQuery:function(t,e){var c;1&t&&(s.Sc(N.a,!0),s.Sc(k.a,!0)),2&t&&(s.Cc(c=s.oc())&&(e.sort=c.first),s.Cc(c=s.oc())&&(e.paginator=c.first))},decls:29,vars:8,consts:[[1,"custom-style"],[1,"table-title"],[1,"search-div"],[1,"filter"],["matInput","","placeholder","search","autocomplete","off",3,"keyup"],["mat-button","",1,"mat-raised-button","mat-primary",3,"click"],["mat-table","","matTableExporter","","matSort","",1,"mat-elevation-z8",3,"dataSource","hiddenColumns"],["exporter","matTableExporter"],["matColumnDef","action"],["mat-header-cell","",4,"matHeaderCellDef"],["mat-cell","",4,"matCellDef"],["matColumnDef","id"],["mat-header-cell","","mat-sort-header","",4,"matHeaderCellDef"],["matColumnDef","name"],["matColumnDef","description"],["matColumnDef","status"],["class","header-row","mat-header-row","",4,"matHeaderRowDef"],["class","row","mat-row","",4,"matRowDef","matRowDefColumns"],[3,"pageSizeOptions","pageSize"],["mat-header-cell",""],["mat-cell",""],["mat-icon-button","",4,"ngIf"],["mat-icon-button","","color","warn",4,"ngIf"],["mat-icon-button",""],[3,"click"],["mat-icon-button","","color","warn"],["mat-header-cell","","mat-sort-header",""],["mat-header-row","",1,"header-row"],["mat-row","",1,"row"]],template:function(t,e){if(1&t){const t=s.gc();s.fc(0,"div",0),s.fc(1,"div",1),s.fc(2,"h3"),s.Oc(3,"category Table"),s.ec(),s.ec(),s.fc(4,"div",2),s.fc(5,"mat-form-field",3),s.fc(6,"input",4),s.nc("keyup",(function(t){return e.applyFilter(t.target.value)})),s.ec(),s.ec(),s.fc(7,"button",5),s.nc("click",(function(){return s.Fc(t),s.Dc(10).exportTable("csv",{fileName:"category"})})),s.Oc(8," CSV "),s.ec(),s.ec(),s.fc(9,"table",6,7),s.dc(11,8),s.Nc(12,P,2,0,"th",9),s.Nc(13,R,3,2,"td",10),s.cc(),s.dc(14,11),s.Nc(15,B,2,0,"th",12),s.Nc(16,F,2,1,"td",10),s.cc(),s.dc(17,13),s.Nc(18,A,2,0,"th",12),s.Nc(19,T,2,1,"td",10),s.cc(),s.dc(20,14),s.Nc(21,z,2,0,"th",12),s.Nc(22,Z,2,1,"td",10),s.cc(),s.dc(23,15),s.Nc(24,G,2,0,"th",12),s.Nc(25,J,2,1,"td",10),s.cc(),s.Nc(26,V,1,0,"tr",16),s.Nc(27,$,1,0,"tr",17),s.ec(),s.ac(28,"mat-paginator",18),s.ec()}2&t&&(s.Ob(9),s.xc("dataSource",e.dataSource)("hiddenColumns",s.yc(6,j)),s.Ob(17),s.xc("matHeaderRowDef",e.displayedColumns),s.Ob(1),s.xc("matRowDefColumns",e.displayedColumns),s.Ob(1),s.xc("pageSizeOptions",s.yc(7,H))("pageSize",25))},directives:[m.c,f.b,g.b,_.j,i.a,N.a,_.c,_.e,_.b,_.g,_.i,k.a,_.d,_.a,a.l,I.a,N.b,_.f,_.h],styles:[".filter[_ngcontent-%COMP%]{width:15%;margin-right:50%}"]}),t})(),canActivate:[n.a],data:{roles:"category_list"}},{path:"edit/:id",component:w,canActivate:[n.a],data:{roles:"category_edit"}}];let K=(()=>{class t{}return t.\u0275mod=s.Xb({type:t}),t.\u0275inj=s.Wb({factory:function(e){return new(e||t)},imports:[[r.f.forChild(X)],r.f]}),t})();var L=c("jAig");let U=(()=>{class t{}return t.\u0275mod=s.Xb({type:t}),t.\u0275inj=s.Wb({factory:function(e){return new(e||t)},imports:[[a.c,K,L.a,o.q,o.i,i.b]]}),t})()}}]);