(window.webpackJsonp=window.webpackJsonp||[]).push([[19],{Cp0R:function(t,e,c){"use strict";c.d(e,"a",(function(){return n}));var o=c("fXoL"),a=c("Ofeh"),i=c("tyNb");let n=(()=>{class t{constructor(t,e){this.loginService=t,this.router=e,this.assigedRole=[]}canActivate(t,e){return this.loginService.loggedIn()?(this.assigedRole=JSON.parse(sessionStorage.getItem("rolesData")),1==this.assigedRole.includes(t.data.roles)||(this.router.navigate(["/deny"]),!1)):(this.router.navigate(["/"]),!1)}}return t.\u0275fac=function(e){return new(e||t)(o.jc(a.a),o.jc(i.c))},t.\u0275prov=o.Vb({token:t,factory:t.\u0275fac,providedIn:"root"}),t})()},H0VJ:function(t,e,c){"use strict";c.d(e,"a",(function(){return s}));var o=c("fXoL"),a=c("0IaG"),i=c("NFeN"),n=c("bTqV");let r=(()=>{class t{constructor(t){this.dialogRef=t}ngOnInit(){}closeDialog(){this.dialogRef.close(!1)}}return t.\u0275fac=function(e){return new(e||t)(o.Zb(a.f))},t.\u0275cmp=o.Tb({type:t,selectors:[["app-mat-dialog"]],decls:11,vars:2,consts:[[1,"content-container"],["id","close-button",3,"click"],[1,"content-span"],["mat-flat-button","","id","no-button",3,"mat-dialog-close"],["mat-flat-button","","id","yes-button","color","warn",3,"mat-dialog-close"]],template:function(t,e){1&t&&(o.fc(0,"div"),o.fc(1,"div",0),o.fc(2,"mat-icon",1),o.nc("click",(function(){return e.closeDialog()})),o.Sc(3,"close"),o.ec(),o.fc(4,"div",2),o.Sc(5,"Are you sure to delete this record ?"),o.ec(),o.ec(),o.fc(6,"div"),o.fc(7,"button",3),o.Sc(8,"No"),o.ec(),o.fc(9,"button",4),o.Sc(10,"Yes"),o.ec(),o.ec(),o.ec()),2&t&&(o.Ob(7),o.yc("mat-dialog-close",!1),o.Ob(2),o.yc("mat-dialog-close",!0))},directives:[i.a,n.b,a.c],styles:["#close-button[_ngcontent-%COMP%]{margin-left:90%;cursor:pointer}.content-span[_ngcontent-%COMP%]{margin-left:20px;margin-bottom:20px}#no-button[_ngcontent-%COMP%]{width:30%;margin-left:7%;margin-right:25%;background-color:#ff0}#yes-button[_ngcontent-%COMP%]{width:30%}"]}),t})(),s=(()=>{class t{constructor(t){this.dialog=t}openConfirmDialog(){return this.dialog.open(r,{width:"300px",disableClose:!0,position:{top:"20px"}})}}return t.\u0275fac=function(e){return new(e||t)(o.jc(a.b))},t.\u0275prov=o.Vb({token:t,factory:t.\u0275fac,providedIn:"root"}),t})()},IqAE:function(t,e,c){"use strict";c.r(e),c.d(e,"CategoryModule",(function(){return H}));var o=c("ofXK"),a=c("3Pt+"),i=c("KUt4"),n=c("YUcS"),r=c("tyNb"),s=c("Cp0R"),l=c("fXoL"),d=c("dNgK"),u=c("q+pd"),m=c("Wp6s"),f=c("XiUz"),p=c("kmnG"),g=c("qFsG"),h=c("d3UM"),b=c("bTqV"),y=c("FKr1");function v(t,e){if(1&t&&(l.fc(0,"mat-option",9),l.Sc(1),l.ec()),2&t){const t=e.$implicit;l.yc("value",t.id),l.Ob(1),l.Uc(" ",t.value," ")}}let S=(()=>{class t{constructor(t,e,c,o){this.fb=t,this.router=e,this.snackBar=c,this.categoryService=o,this.submitted=!1,this.status=[{id:1,value:"Active"},{id:0,value:"Inactive"}],this.states=[{id:0,value:"GPS Device"},{id:1,value:"Camera"},{id:2,value:"Buzzer"}]}ngOnInit(){this.myform=this.fb.group({name:["",[a.u.required]],created_by:[""],description:[""],status:[,[a.u.required]]})}openSnackBar(){this.snackBar.open("Successfully added!!","Close",{duration:2e3,verticalPosition:"top",horizontalPosition:"end"})}addCategory(){this.submitted=!0,this.myform.markAllAsTouched(),this.myform.invalid?console.log("rrrr"):(this.userData=JSON.parse(localStorage.getItem("userData")),this.myform.value.created_by=this.userData.id,this.categoryService.addCategory(this.myform.value).subscribe(t=>{console.log(this.myform.value),this.openSnackBar(),this.router.navigate(["/admin/inventory/category/list"])}))}}return t.\u0275fac=function(e){return new(e||t)(l.Zb(a.e),l.Zb(r.c),l.Zb(d.a),l.Zb(u.a))},t.\u0275cmp=l.Tb({type:t,selectors:[["app-category-add"]],decls:20,vars:2,consts:[["fxFlex","50%","fxFlex.xs","100%",1,"customStyle"],[1,"title-style"],[3,"formGroup"],[1,"full"],["trim","blur","matInput","","placeholder","Name","formControlName","name","autocomplete","off","required",""],["matInput","","placeholder","Description","formControlName","description","autocomplete","off"],["formControlName","status","required",""],[3,"value",4,"ngFor","ngForOf"],["mat-stroked-button","","color","primary",1,"btn-block",3,"click"],[3,"value"]],template:function(t,e){1&t&&(l.fc(0,"mat-card",0),l.fc(1,"div",1),l.fc(2,"mat-card-title"),l.Sc(3,"Category Add Form"),l.ec(),l.ec(),l.fc(4,"mat-card-content"),l.fc(5,"form",2),l.fc(6,"mat-form-field",3),l.ac(7,"input",4),l.ec(),l.fc(8,"mat-form-field",3),l.ac(9,"textarea",5),l.ec(),l.fc(10,"mat-form-field",3),l.fc(11,"mat-label"),l.Sc(12,"Status"),l.ec(),l.fc(13,"mat-select",6),l.Rc(14,v,2,2,"mat-option",7),l.ec(),l.ec(),l.ec(),l.ec(),l.fc(15,"mat-card-actions"),l.fc(16,"button",8),l.nc("click",(function(){return e.addCategory()})),l.Sc(17," Add "),l.ec(),l.fc(18,"p"),l.Sc(19,"Note: Field marked with * is Mandatory"),l.ec(),l.ec(),l.ec()),2&t&&(l.Ob(5),l.yc("formGroup",e.myform),l.Ob(9),l.yc("ngForOf",e.status))},directives:[m.a,f.a,m.f,m.c,a.v,a.o,a.g,p.c,g.b,a.c,a.n,a.f,a.t,p.g,h.a,o.l,m.b,b.b,y.o],styles:["mat-card[_ngcontent-%COMP%]{width:50%}.customStyle[_ngcontent-%COMP%]{border-radius:10px 10px 10px 10px;box-shadow:5px 10px 15px #1a237e}.customStyle[_ngcontent-%COMP%]   .title-style[_ngcontent-%COMP%]{color:#1a237e;text-align:center!important}.customStyle[_ngcontent-%COMP%]   .warning[_ngcontent-%COMP%]{color:red;margin-left:30px}.customStyle[_ngcontent-%COMP%]   .error_message[_ngcontent-%COMP%]{color:red;margin-left:20px;margin-top:-10px;font-size:12px}.mat-stroked-button[_ngcontent-%COMP%]{width:120px;border:1px solid #00f}.sidenav-content[_ngcontent-%COMP%]{height:120%}"]}),t})();function C(t,e){if(1&t&&(l.fc(0,"mat-option",9),l.Sc(1),l.ec()),2&t){const t=e.$implicit;l.yc("value",t.id),l.Ob(1),l.Uc(" ",t.value," ")}}let O=(()=>{class t{constructor(t,e,c,o,a){this.fb=t,this.router=e,this.snackBar=c,this.categoryService=o,this.route=a,this.submitted=!1,this.status=[{id:1,value:"Active"},{id:0,value:"Inactive"}],this.states=[{id:0,value:"GPS Device"},{id:1,value:"Camera"},{id:2,value:"Burzer"}]}ngOnInit(){this.myform=this.fb.group({name:["",[a.u.required]],created_by:[""],description:[""],status:[,[a.u.required]]}),this.route.paramMap.subscribe(t=>{this.Id=t.get("id"),this.edit(this.Id)})}edit(t){this.categoryService.getCategoryById(t).subscribe(t=>{this.setData(t)})}setData(t){this.myform.patchValue({name:t.name,description:t.description,status:t.status}),this.createdBy=t.created_by,console.log(this.createdBy)}openSnackBar(){this.snackBar.open("Successfully added!!","Close",{duration:2e3,verticalPosition:"top",horizontalPosition:"end"})}updateCategory(){this.myform.markAllAsTouched(),this.submitted=!0,this.myform.invalid||(this.userData=JSON.parse(localStorage.getItem("userData")),this.myform.value.updated_by=this.userData.id,this.myform.value.updated_time=new Date,this.myform.value.created_by=this.createdBy,console.log(this.myform.value),this.categoryService.updateCategory(this.Id,this.myform.value).subscribe(t=>{this.openSnackBar(),this.router.navigate(["/admin/inventory/category/list"])}))}}return t.\u0275fac=function(e){return new(e||t)(l.Zb(a.e),l.Zb(r.c),l.Zb(d.a),l.Zb(u.a),l.Zb(r.a))},t.\u0275cmp=l.Tb({type:t,selectors:[["app-category-edit"]],decls:20,vars:2,consts:[[1,"customStyle"],[1,"title-style"],[3,"formGroup"],[1,"full"],["trim","blur","matInput","","placeholder","Name","formControlName","name","autocomplete","off","required",""],["matInput","","placeholder","Description","formControlName","description","autocomplete","off"],["formControlName","status","required",""],[3,"value",4,"ngFor","ngForOf"],["mat-stroked-button","","color","primary",1,"btn-block",3,"click"],[3,"value"]],template:function(t,e){1&t&&(l.fc(0,"mat-card",0),l.fc(1,"div",1),l.fc(2,"mat-card-title"),l.Sc(3,"Category Update Form"),l.ec(),l.ec(),l.fc(4,"mat-card-content"),l.fc(5,"form",2),l.fc(6,"mat-form-field",3),l.ac(7,"input",4),l.ec(),l.fc(8,"mat-form-field",3),l.ac(9,"textarea",5),l.ec(),l.fc(10,"mat-form-field",3),l.fc(11,"mat-label"),l.Sc(12,"Status"),l.ec(),l.fc(13,"mat-select",6),l.Rc(14,C,2,2,"mat-option",7),l.ec(),l.ec(),l.ec(),l.ec(),l.fc(15,"mat-card-actions"),l.fc(16,"button",8),l.nc("click",(function(){return e.updateCategory()})),l.Sc(17," Update "),l.ec(),l.fc(18,"p"),l.Sc(19,"Note: Field marked with * is Mandatory"),l.ec(),l.ec(),l.ec()),2&t&&(l.Ob(5),l.yc("formGroup",e.myform),l.Ob(9),l.yc("ngForOf",e.status))},directives:[m.a,m.f,m.c,a.v,a.o,a.g,p.c,g.b,a.c,a.n,a.f,a.t,p.g,h.a,o.l,m.b,b.b,y.o],styles:["mat-card[_ngcontent-%COMP%]{width:50%}.customStyle[_ngcontent-%COMP%]{border-radius:10px 10px 10px 10px;box-shadow:5px 10px 15px #1a237e}.customStyle[_ngcontent-%COMP%]   .title-style[_ngcontent-%COMP%]{color:#1a237e;text-align:center!important}.customStyle[_ngcontent-%COMP%]   .warning[_ngcontent-%COMP%]{color:red;margin-left:30px}.customStyle[_ngcontent-%COMP%]   .error_message[_ngcontent-%COMP%]{color:red;margin-left:20px;margin-top:-10px;font-size:12px}.mat-stroked-button[_ngcontent-%COMP%]{width:120px;border:1px solid #00f}.sidenav-content[_ngcontent-%COMP%]{height:120%}"]}),t})();var w=c("M9IT"),x=c("Dh3D"),k=c("+0xr"),_=c("H0VJ"),D=c("NFeN");function R(t,e){1&t&&(l.fc(0,"th",19),l.Sc(1,"Action"),l.ec())}function P(t,e){if(1&t){const t=l.gc();l.fc(0,"button",23),l.fc(1,"mat-icon",24),l.nc("click",(function(){l.Jc(t);const e=l.rc().$implicit;return l.rc().editCategory(e)})),l.Sc(2,"edit"),l.ec(),l.ec()}}function I(t,e){if(1&t){const t=l.gc();l.fc(0,"button",25),l.fc(1,"mat-icon",24),l.nc("click",(function(){l.Jc(t);const e=l.rc().$implicit;return l.rc().deleteCategory(e)})),l.Sc(2,"delete_outline"),l.ec(),l.ec()}}function M(t,e){if(1&t&&(l.fc(0,"td",20),l.Rc(1,P,3,0,"button",21),l.Rc(2,I,3,0,"button",22),l.ec()),2&t){const t=l.rc();l.Ob(1),l.yc("ngIf",1==t.assigedRole.includes("category_edit")),l.Ob(1),l.yc("ngIf",1==t.assigedRole.includes("category_delete"))}}function N(t,e){1&t&&(l.fc(0,"th",26),l.Sc(1,"ID"),l.ec())}function A(t,e){if(1&t&&(l.fc(0,"td",20),l.Sc(1),l.ec()),2&t){const t=e.$implicit;l.Ob(1),l.Tc(t.id)}}function T(t,e){1&t&&(l.fc(0,"th",26),l.Sc(1,"Name"),l.ec())}function B(t,e){if(1&t&&(l.fc(0,"td",20),l.Sc(1),l.ec()),2&t){const t=e.$implicit;l.Ob(1),l.Tc(t.name)}}function F(t,e){1&t&&(l.fc(0,"th",26),l.Sc(1,"Description"),l.ec())}function z(t,e){if(1&t&&(l.fc(0,"td",20),l.Sc(1),l.ec()),2&t){const t=e.$implicit;l.Ob(1),l.Tc(t.description)}}function Z(t,e){1&t&&(l.fc(0,"th",26),l.Sc(1,"Status"),l.ec())}function q(t,e){if(1&t&&(l.fc(0,"td",20),l.Sc(1),l.ec()),2&t){const t=e.$implicit,c=l.rc();l.Ob(1),l.Tc(null==c.status[t.status]?null:c.status[t.status].value)}}function J(t,e){1&t&&l.ac(0,"tr",27)}function G(t,e){1&t&&l.ac(0,"tr",28)}const U=function(){return[0]},V=function(){return[25,50,100]},$=[{path:"add",component:S,canActivate:[s.a],data:{roles:"category_add"}},{path:"list",component:(()=>{class t{constructor(t,e,c,o){this.categoryService=t,this.snackBar=e,this.router=c,this.dialogService=o,this.idColumn="id",this.assigedRole=[],this.dataSource=new k.k([]),this.status=[{id:0,value:"Inactive"},{id:1,value:"Active"}],this.states=[{id:0,value:"GPS Device"},{id:1,value:"Camera"},{id:2,value:"Burzer"}],this.displayedColumns=["action","id","name","description","status"],this.assigedRole=JSON.parse(sessionStorage.getItem("rolesData"))}ngOnInit(){this.getAllCategory(),this.removeColumn()}removeColumn(){0==this.assigedRole.includes("category_edit")&&0==this.assigedRole.includes("category_delete")&&(this.displayedColumns=["id","name","description","type","status"])}getAllCategory(){this.categoryService.getAllCategory().subscribe(t=>{this.categories=t,this.dataSource=new k.k(t),setTimeout(()=>this.dataSource.sort=this.sort),setTimeout(()=>this.dataSource.paginator=this.paginator)})}editCategory(t){this.router.navigate(["admin/inventory/category/edit",t.id])}deleteCategory(t){this.dialogService.openConfirmDialog().afterClosed().subscribe(e=>{e&&(this.categoryService.deleteCategory(t.id).subscribe(),this.deleteRowDataTable(t.id,this.idColumn,this.paginator,this.dataSource),this.openSnackBar())})}deleteRowDataTable(t,e,c,o){this.categories=o.data;const a=this.categories.findIndex(c=>c[e]===t);o.data.splice(a,1),o.paginator=c}openSnackBar(){this.snackBar.open("Deleted!!","Close",{duration:2e3,verticalPosition:"top",horizontalPosition:"end"})}applyFilter(t){this.dataSource.filter=t.trim().toLowerCase()}}return t.\u0275fac=function(e){return new(e||t)(l.Zb(u.a),l.Zb(d.a),l.Zb(r.c),l.Zb(_.a))},t.\u0275cmp=l.Tb({type:t,selectors:[["app-category-list"]],viewQuery:function(t,e){var c;1&t&&(l.Wc(x.a,!0),l.Wc(w.a,!0)),2&t&&(l.Ec(c=l.oc())&&(e.sort=c.first),l.Ec(c=l.oc())&&(e.paginator=c.first))},decls:29,vars:8,consts:[[1,"custom-style"],[1,"table-title"],[1,"search-div"],[1,"filter"],["matInput","","placeholder","search","autocomplete","off",3,"keyup"],["mat-button","",1,"mat-raised-button","mat-primary",3,"click"],["mat-table","","matTableExporter","","matSort","",1,"mat-elevation-z8",3,"dataSource","hiddenColumns"],["exporter","matTableExporter"],["matColumnDef","action"],["mat-header-cell","",4,"matHeaderCellDef"],["mat-cell","",4,"matCellDef"],["matColumnDef","id"],["mat-header-cell","","mat-sort-header","",4,"matHeaderCellDef"],["matColumnDef","name"],["matColumnDef","description"],["matColumnDef","status"],["class","header-row","mat-header-row","",4,"matHeaderRowDef"],["class","row","mat-row","",4,"matRowDef","matRowDefColumns"],[3,"pageSizeOptions","pageSize"],["mat-header-cell",""],["mat-cell",""],["mat-icon-button","",4,"ngIf"],["mat-icon-button","","color","warn",4,"ngIf"],["mat-icon-button",""],[3,"click"],["mat-icon-button","","color","warn"],["mat-header-cell","","mat-sort-header",""],["mat-header-row","",1,"header-row"],["mat-row","",1,"row"]],template:function(t,e){if(1&t){const t=l.gc();l.fc(0,"div",0),l.fc(1,"div",1),l.fc(2,"h3"),l.Sc(3,"category Table"),l.ec(),l.ec(),l.fc(4,"div",2),l.fc(5,"mat-form-field",3),l.fc(6,"input",4),l.nc("keyup",(function(t){return e.applyFilter(t.target.value)})),l.ec(),l.ec(),l.fc(7,"button",5),l.nc("click",(function(){return l.Jc(t),l.Fc(10).exportTable("csv",{fileName:"category"})})),l.Sc(8," CSV "),l.ec(),l.ec(),l.fc(9,"table",6,7),l.dc(11,8),l.Rc(12,R,2,0,"th",9),l.Rc(13,M,3,2,"td",10),l.cc(),l.dc(14,11),l.Rc(15,N,2,0,"th",12),l.Rc(16,A,2,1,"td",10),l.cc(),l.dc(17,13),l.Rc(18,T,2,0,"th",12),l.Rc(19,B,2,1,"td",10),l.cc(),l.dc(20,14),l.Rc(21,F,2,0,"th",12),l.Rc(22,z,2,1,"td",10),l.cc(),l.dc(23,15),l.Rc(24,Z,2,0,"th",12),l.Rc(25,q,2,1,"td",10),l.cc(),l.Rc(26,J,1,0,"tr",16),l.Rc(27,G,1,0,"tr",17),l.ec(),l.ac(28,"mat-paginator",18),l.ec()}2&t&&(l.Ob(9),l.yc("dataSource",e.dataSource)("hiddenColumns",l.Ac(6,U)),l.Ob(17),l.yc("matHeaderRowDef",e.displayedColumns),l.Ob(1),l.yc("matRowDefColumns",e.displayedColumns),l.Ob(1),l.yc("pageSizeOptions",l.Ac(7,V))("pageSize",25))},directives:[p.c,g.b,b.b,k.j,i.a,x.a,k.c,k.e,k.b,k.g,k.i,w.a,k.d,k.a,o.m,D.a,x.b,k.f,k.h],styles:[".filter[_ngcontent-%COMP%]{width:15%;margin-right:50%}"]}),t})(),canActivate:[s.a],data:{roles:"category_list"}},{path:"edit/:id",component:O,canActivate:[s.a],data:{roles:"category_edit"}}];let j=(()=>{class t{}return t.\u0275mod=l.Xb({type:t}),t.\u0275inj=l.Wb({factory:function(e){return new(e||t)},imports:[[r.f.forChild($)],r.f]}),t})();var X=c("jAig");let H=(()=>{class t{}return t.\u0275mod=l.Xb({type:t}),t.\u0275inj=l.Wb({factory:function(e){return new(e||t)},imports:[[o.c,j,X.a,a.s,a.i,i.b,n.a]]}),t})()}}]);