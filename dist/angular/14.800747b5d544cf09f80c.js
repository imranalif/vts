(window.webpackJsonp=window.webpackJsonp||[]).push([[14],{Cp0R:function(t,e,c){"use strict";c.d(e,"a",(function(){return n}));var o=c("fXoL"),i=c("Ofeh"),a=c("tyNb");let n=(()=>{class t{constructor(t,e){this.loginService=t,this.router=e,this.assigedRole=[]}canActivate(t,e){return this.loginService.loggedIn()?(this.assigedRole=JSON.parse(localStorage.getItem("rolesData")),1==this.assigedRole.includes(t.data.roles)||(this.router.navigate(["/deny"]),!1)):(this.router.navigate(["/"]),!1)}}return t.\u0275fac=function(e){return new(e||t)(o.jc(i.a),o.jc(a.c))},t.\u0275prov=o.Vb({token:t,factory:t.\u0275fac,providedIn:"root"}),t})()},H0VJ:function(t,e,c){"use strict";c.d(e,"a",(function(){return s}));var o=c("fXoL"),i=c("0IaG"),a=c("NFeN"),n=c("bTqV");let r=(()=>{class t{constructor(t){this.dialogRef=t}ngOnInit(){}closeDialog(){this.dialogRef.close(!1)}}return t.\u0275fac=function(e){return new(e||t)(o.Zb(i.f))},t.\u0275cmp=o.Tb({type:t,selectors:[["app-mat-dialog"]],decls:11,vars:2,consts:[[1,"content-container"],["id","close-button",3,"click"],[1,"content-span"],["mat-flat-button","","id","no-button",3,"mat-dialog-close"],["mat-flat-button","","id","yes-button","color","warn",3,"mat-dialog-close"]],template:function(t,e){1&t&&(o.fc(0,"div"),o.fc(1,"div",0),o.fc(2,"mat-icon",1),o.nc("click",(function(){return e.closeDialog()})),o.Qc(3,"close"),o.ec(),o.fc(4,"div",2),o.Qc(5,"Are you sure to delete this record ?"),o.ec(),o.ec(),o.fc(6,"div"),o.fc(7,"button",3),o.Qc(8,"No"),o.ec(),o.fc(9,"button",4),o.Qc(10,"Yes"),o.ec(),o.ec(),o.ec()),2&t&&(o.Ob(7),o.yc("mat-dialog-close",!1),o.Ob(2),o.yc("mat-dialog-close",!0))},directives:[a.a,n.b,i.c],styles:["#close-button[_ngcontent-%COMP%]{margin-left:90%;cursor:pointer}.content-span[_ngcontent-%COMP%]{margin-left:20px;margin-bottom:20px}#no-button[_ngcontent-%COMP%]{width:30%;margin-left:7%;margin-right:25%;background-color:#ff0}#yes-button[_ngcontent-%COMP%]{width:30%}"]}),t})(),s=(()=>{class t{constructor(t){this.dialog=t}openConfirmDialog(){return this.dialog.open(r,{width:"300px",disableClose:!0,position:{top:"20px"}})}}return t.\u0275fac=function(e){return new(e||t)(o.jc(i.b))},t.\u0275prov=o.Vb({token:t,factory:t.\u0275fac,providedIn:"root"}),t})()},Wy11:function(t,e,c){"use strict";c.r(e),c.d(e,"PermissionGroupModule",(function(){return U}));var o=c("ofXK"),i=c("3Pt+"),a=c("jAig"),n=c("KUt4"),r=c("tyNb"),s=c("Cp0R"),u=c("fXoL"),l=c("dNgK"),d=c("ypsF"),m=c("Wp6s"),f=c("kmnG"),p=c("qFsG"),g=c("d3UM"),h=c("bTqV"),b=c("FKr1");function v(t,e){if(1&t&&(u.fc(0,"mat-option",9),u.Qc(1),u.ec()),2&t){const t=e.$implicit;u.yc("value",t.id),u.Ob(1),u.Sc(" ",t.value," ")}}let y=(()=>{class t{constructor(t,e,c,o){this.fb=t,this.router=e,this.snackBar=c,this.groupService=o,this.submitted=!1,this.states=[{id:1,value:"Active"},{id:0,value:"Inactive"}]}ngOnInit(){this.myform=this.fb.group({name:["",[i.s.required]],created_by:[""],description:[""],status:[]})}openSnackBar(){this.snackBar.open("Successfully added!!","Close",{duration:2e3,verticalPosition:"top",horizontalPosition:"end"})}addGroup(){this.myform.markAllAsTouched(),this.submitted=!0,this.myform.invalid||(this.userData=JSON.parse(localStorage.getItem("userData")),this.myform.value.created_by=this.userData.id,this.groupService.addGroup(this.myform.value).subscribe(t=>{this.openSnackBar(),this.router.navigate(["/admin/authorization/group/list"])}))}}return t.\u0275fac=function(e){return new(e||t)(u.Zb(i.e),u.Zb(r.c),u.Zb(l.a),u.Zb(d.a))},t.\u0275cmp=u.Tb({type:t,selectors:[["app-group-add"]],decls:20,vars:2,consts:[[1,"customStyle"],[1,"title-style"],[3,"formGroup"],["appearance","outline",1,"full"],["trim","blur","matInput","","placeholder","Name *","formControlName","name","autocomplete","off","required",""],["matInput","","placeholder","Description","formControlName","description","autocomplete","off"],["formControlName","status","required",""],[3,"value",4,"ngFor","ngForOf"],["mat-raised-button","","color","primary",1,"btn-block",3,"click"],[3,"value"]],template:function(t,e){1&t&&(u.fc(0,"mat-card",0),u.fc(1,"div",1),u.fc(2,"h1"),u.Qc(3,"Group Add Form"),u.ec(),u.ec(),u.fc(4,"mat-card-content"),u.fc(5,"form",2),u.fc(6,"mat-form-field",3),u.ac(7,"input",4),u.ec(),u.fc(8,"mat-form-field",3),u.ac(9,"textarea",5),u.ec(),u.fc(10,"mat-form-field",3),u.fc(11,"mat-label"),u.Qc(12,"Status"),u.ec(),u.fc(13,"mat-select",6),u.Pc(14,v,2,2,"mat-option",7),u.ec(),u.ec(),u.ec(),u.ec(),u.fc(15,"mat-card-actions"),u.fc(16,"button",8),u.nc("click",(function(){return e.addGroup()})),u.Qc(17," Add "),u.ec(),u.fc(18,"p"),u.Qc(19,"Note: Field marked with * is Mandatory"),u.ec(),u.ec(),u.ec()),2&t&&(u.Ob(5),u.yc("formGroup",e.myform),u.Ob(9),u.yc("ngForOf",e.states))},directives:[m.a,m.c,i.t,i.n,i.g,f.c,p.b,i.c,i.m,i.f,i.r,f.g,g.a,o.l,m.b,h.b,b.o],styles:[".customStyle[_ngcontent-%COMP%]{border-radius:20px 20px 20px 20px;box-shadow:5px 10px 15px #1a237e}.customStyle[_ngcontent-%COMP%]   .title-style[_ngcontent-%COMP%]{color:#1a237e;text-align:center!important;font-weight:600;margin-bottom:25px}.customStyle[_ngcontent-%COMP%]   .warning[_ngcontent-%COMP%]{color:red;margin-left:30px}.customStyle[_ngcontent-%COMP%]   .error_message[_ngcontent-%COMP%]{color:red;margin-left:20px;margin-top:-10px;font-size:12px}.mat-raised-button[_ngcontent-%COMP%]{border-radius:20px 20px 20px 20px;width:120px;border:1px solid #00f}.sidenav-content[_ngcontent-%COMP%]{height:120%}h1[_ngcontent-%COMP%]{font-weight:600}"]}),t})();var C=c("NFeN");function O(t,e){1&t&&(u.fc(0,"div",13),u.Qc(1," Name is required"),u.ec())}function S(t,e){if(1&t&&(u.fc(0,"div",11),u.Pc(1,O,2,0,"div",12),u.ec()),2&t){const t=u.rc();u.Ob(1),u.yc("ngIf",t.myform.get("name").errors.required)}}function P(t,e){if(1&t&&(u.fc(0,"mat-option",14),u.Qc(1),u.ec()),2&t){const t=e.$implicit;u.yc("value",t.id),u.Ob(1),u.Sc(" ",t.value," ")}}let w=(()=>{class t{constructor(t,e,c,o,i){this.fb=t,this.router=e,this.groupService=c,this.route=o,this.snackBar=i,this.submitted=!1,this.states=[{id:1,value:"Active"},{id:0,value:"Inactive"}]}ngOnInit(){this.myform=this.fb.group({name:["",[i.s.required]],created_by:[""],description:[""],status:["",[i.s.required]]}),this.route.paramMap.subscribe(t=>{this.Id=t.get("id"),this.edit(this.Id)})}edit(t){this.groupService.getGroupById(t).subscribe(t=>{this.setData(t)})}setData(t){this.myform.patchValue({name:t.name,description:t.description,status:t.status}),this.createdBy=t.created_by,console.log(this.createdBy)}openSnackBar(){this.snackBar.open("Updated Successfully!!","Close",{duration:2e3,verticalPosition:"top",horizontalPosition:"end"})}goBack(){this.router.navigate(["admin/authorization/group/list"])}updateGroup(){this.submitted=!0,this.myform.invalid||(this.userData=JSON.parse(localStorage.getItem("userData")),this.myform.value.updated_by=this.userData.id,this.myform.value.updated_time=new Date,this.myform.value.created_by=this.createdBy,console.log(this.myform.value),this.groupService.updateGroup(this.Id,this.myform.value).subscribe(t=>{this.openSnackBar(),this.router.navigate(["admin/authorization/group/list"])}))}}return t.\u0275fac=function(e){return new(e||t)(u.Zb(i.e),u.Zb(r.c),u.Zb(d.a),u.Zb(r.a),u.Zb(l.a))},t.\u0275cmp=u.Tb({type:t,selectors:[["app-group-edit"]],decls:24,vars:3,consts:[[1,"customStyle"],["mat-button","",1,"mat-primary",3,"click"],[1,"title-style"],[3,"formGroup"],[1,"full"],["trim","blur","matInput","","placeholder","Name","formControlName","name","autocomplete","off","required",""],["class","feedback",4,"ngIf"],["matInput","","placeholder","Description","formControlName","description","autocomplete","off"],["formControlName","status","required",""],[3,"value",4,"ngFor","ngForOf"],["mat-stroked-button","","color","primary",1,"btn-block",3,"click"],[1,"feedback"],["class","red",4,"ngIf"],[1,"red"],[3,"value"]],template:function(t,e){1&t&&(u.fc(0,"mat-card",0),u.fc(1,"button",1),u.nc("click",(function(){return e.goBack()})),u.fc(2,"mat-icon"),u.Qc(3,"arrow_back"),u.ec(),u.ec(),u.fc(4,"div",2),u.fc(5,"mat-card-title"),u.Qc(6,"Permission Group Update Form"),u.ec(),u.ec(),u.fc(7,"mat-card-content"),u.fc(8,"form",3),u.fc(9,"mat-form-field",4),u.ac(10,"input",5),u.ec(),u.Pc(11,S,2,1,"div",6),u.fc(12,"mat-form-field",4),u.ac(13,"textarea",7),u.ec(),u.fc(14,"mat-form-field",4),u.fc(15,"mat-label"),u.Qc(16,"Status"),u.ec(),u.fc(17,"mat-select",8),u.Pc(18,P,2,2,"mat-option",9),u.ec(),u.ec(),u.ec(),u.ec(),u.fc(19,"mat-card-actions"),u.fc(20,"button",10),u.nc("click",(function(){return e.updateGroup()})),u.Qc(21," Update "),u.ec(),u.fc(22,"p"),u.Qc(23,"Note: Field marked with * is Mandatory"),u.ec(),u.ec(),u.ec()),2&t&&(u.Ob(8),u.yc("formGroup",e.myform),u.Ob(3),u.yc("ngIf",e.submitted&&e.myform.get("name").errors),u.Ob(7),u.yc("ngForOf",e.states))},directives:[m.a,h.b,C.a,m.f,m.c,i.t,i.n,i.g,f.c,p.b,i.c,i.m,i.f,i.r,o.m,f.g,g.a,o.l,m.b,b.o],styles:["mat-card[_ngcontent-%COMP%]{width:50%;top:30px}.customStyle[_ngcontent-%COMP%]{border-radius:10px 10px 10px 10px;box-shadow:5px 10px 15px #1a237e}.customStyle[_ngcontent-%COMP%]   .title-style[_ngcontent-%COMP%]{margin-top:-4%;color:#1a237e;text-align:center!important;margin-bottom:15px}.customStyle[_ngcontent-%COMP%]   .warning[_ngcontent-%COMP%]{color:red;margin-left:30px}.customStyle[_ngcontent-%COMP%]   .error_message[_ngcontent-%COMP%]{color:red;margin-left:20px;margin-top:-10px;font-size:12px}.mat-stroked-button[_ngcontent-%COMP%]{width:120px;border:1px solid #00f}.sidenav-content[_ngcontent-%COMP%]{height:120%}"]}),t})();var x=c("M9IT"),k=c("Dh3D"),_=c("+0xr"),D=c("H0VJ");function I(t,e){1&t&&(u.fc(0,"th",19),u.Qc(1,"Action"),u.ec())}function M(t,e){if(1&t){const t=u.gc();u.fc(0,"button",23),u.fc(1,"mat-icon",24),u.nc("click",(function(){u.Hc(t);const e=u.rc().$implicit;return u.rc().editGroup(e)})),u.Qc(2,"edit"),u.ec(),u.ec()}}function Q(t,e){if(1&t){const t=u.gc();u.fc(0,"button",25),u.fc(1,"mat-icon",24),u.nc("click",(function(){u.Hc(t);const e=u.rc().$implicit;return u.rc().deleteGroup(e)})),u.Qc(2,"delete_outline"),u.ec(),u.ec()}}function G(t,e){if(1&t&&(u.fc(0,"td",20),u.Pc(1,M,3,0,"button",21),u.Pc(2,Q,3,0,"button",22),u.ec()),2&t){const t=u.rc();u.Ob(1),u.yc("ngIf",1==t.assigedRole.includes("group_edit")),u.Ob(1),u.yc("ngIf",1==t.assigedRole.includes("group_delete"))}}function N(t,e){1&t&&(u.fc(0,"th",26),u.Qc(1,"ID"),u.ec())}function R(t,e){if(1&t&&(u.fc(0,"td",20),u.Qc(1),u.ec()),2&t){const t=e.$implicit;u.Ob(1),u.Rc(t.id)}}function A(t,e){1&t&&(u.fc(0,"th",26),u.Qc(1,"Name"),u.ec())}function B(t,e){if(1&t&&(u.fc(0,"td",20),u.Qc(1),u.ec()),2&t){const t=e.$implicit;u.Ob(1),u.Rc(t.name)}}function F(t,e){1&t&&(u.fc(0,"th",26),u.Qc(1,"Description"),u.ec())}function T(t,e){if(1&t&&(u.fc(0,"td",20),u.Qc(1),u.ec()),2&t){const t=e.$implicit;u.Ob(1),u.Rc(t.description)}}function z(t,e){1&t&&(u.fc(0,"th",26),u.Qc(1,"Status"),u.ec())}function Z(t,e){if(1&t&&(u.fc(0,"td",20),u.Qc(1),u.ec()),2&t){const t=e.$implicit,c=u.rc();u.Ob(1),u.Rc(null==c.states[t.status]?null:c.states[t.status].value)}}function q(t,e){1&t&&u.ac(0,"tr",27)}function H(t,e){1&t&&u.ac(0,"tr",28)}const J=function(){return[0]},V=function(){return[25,50,100]},$=[{path:"add",component:y,canActivate:[s.a],data:{roles:"group_add"}},{path:"list",component:(()=>{class t{constructor(t,e,c,o){this.groupService=t,this.snackBar=e,this.router=c,this.dialogService=o,this.assigedRole=[],this.show=!0,this.idColumn="id",this.dataSource=new _.k([]),this.states=[{id:0,value:"Inactive"},{id:1,value:"Active"}],this.displayedColumns=["action","id","name","description","status"],this.assigedRole=JSON.parse(localStorage.getItem("rolesData"))}ngOnInit(){this.getAllGroup(),this.removeColumn()}removeColumn(){0==this.assigedRole.includes("group_edit")&&0==this.assigedRole.includes("group_delete")&&(this.displayedColumns=["id","name","description","status"])}getAllGroup(){this.groupService.getAllGroup().subscribe(t=>{this.groups=t,this.dataSource=new _.k(t),setTimeout(()=>this.dataSource.sort=this.sort),setTimeout(()=>this.dataSource.paginator=this.paginator)})}editGroup(t){this.router.navigate(["admin/authorization/group/edit",t.id])}editPermission(t){this.router.navigate(["admin/users/roles/role-permission",t.id])}deleteGroup(t){this.dialogService.openConfirmDialog().afterClosed().subscribe(e=>{e&&(this.groupService.deleteGroup(t.id).subscribe(),this.deleteRowDataTable(t.id,this.idColumn,this.paginator,this.dataSource),this.openSnackBar())})}deleteRowDataTable(t,e,c,o){this.groups=o.data;const i=this.groups.findIndex(c=>c[e]===t);o.data.splice(i,1),o.paginator=c}openSnackBar(){this.snackBar.open("Deleted!!","Close",{duration:2e3,verticalPosition:"top",horizontalPosition:"end"})}applyFilter(t){this.dataSource.filter=t.trim().toLowerCase()}goAddItem(){this.router.navigate(["admin/authorization/group/add"])}}return t.\u0275fac=function(e){return new(e||t)(u.Zb(d.a),u.Zb(l.a),u.Zb(r.c),u.Zb(D.a))},t.\u0275cmp=u.Tb({type:t,selectors:[["app-group-list"]],viewQuery:function(t,e){var c;1&t&&(u.Uc(k.a,!0),u.Uc(x.a,!0)),2&t&&(u.Ec(c=u.oc())&&(e.sort=c.first),u.Ec(c=u.oc())&&(e.paginator=c.first))},decls:32,vars:8,consts:[[1,"custom-style"],[1,"table-title"],[1,"search-div"],[1,"filter"],["matInput","","placeholder","search","autocomplete","off",3,"keyup"],["mat-button","",1,"mat-raised-button","mat-primary",3,"click"],["mat-table","","matTableExporter","","matSort","",1,"mat-elevation-z8",3,"dataSource","hiddenColumns"],["exporter","matTableExporter"],["matColumnDef","action"],["mat-header-cell","",4,"matHeaderCellDef"],["mat-cell","",4,"matCellDef"],["matColumnDef","id"],["mat-header-cell","","mat-sort-header","",4,"matHeaderCellDef"],["matColumnDef","name"],["matColumnDef","description"],["matColumnDef","status"],["class","header-row","mat-header-row","",4,"matHeaderRowDef"],["class","row","mat-row","",4,"matRowDef","matRowDefColumns"],[3,"pageSizeOptions","pageSize"],["mat-header-cell",""],["mat-cell",""],["mat-icon-button","",4,"ngIf"],["mat-icon-button","","color","warn",4,"ngIf"],["mat-icon-button",""],[3,"click"],["mat-icon-button","","color","warn"],["mat-header-cell","","mat-sort-header",""],["mat-header-row","",1,"header-row"],["mat-row","",1,"row"]],template:function(t,e){if(1&t){const t=u.gc();u.fc(0,"div",0),u.fc(1,"div",1),u.fc(2,"h3"),u.Qc(3,"Permission Group Table"),u.ec(),u.ec(),u.fc(4,"div",2),u.fc(5,"mat-form-field",3),u.fc(6,"input",4),u.nc("keyup",(function(t){return e.applyFilter(t.target.value)})),u.ec(),u.ec(),u.fc(7,"button",5),u.nc("click",(function(){return u.Hc(t),u.Fc(13).exportTable("csv",{fileName:"role"})})),u.Qc(8," CSV "),u.ec(),u.fc(9,"button",5),u.nc("click",(function(){return e.goAddItem()})),u.fc(10,"mat-icon"),u.Qc(11,"add"),u.ec(),u.ec(),u.ec(),u.fc(12,"table",6,7),u.dc(14,8),u.Pc(15,I,2,0,"th",9),u.Pc(16,G,3,2,"td",10),u.cc(),u.dc(17,11),u.Pc(18,N,2,0,"th",12),u.Pc(19,R,2,1,"td",10),u.cc(),u.dc(20,13),u.Pc(21,A,2,0,"th",12),u.Pc(22,B,2,1,"td",10),u.cc(),u.dc(23,14),u.Pc(24,F,2,0,"th",12),u.Pc(25,T,2,1,"td",10),u.cc(),u.dc(26,15),u.Pc(27,z,2,0,"th",12),u.Pc(28,Z,2,1,"td",10),u.cc(),u.Pc(29,q,1,0,"tr",16),u.Pc(30,H,1,0,"tr",17),u.ec(),u.ac(31,"mat-paginator",18),u.ec()}2&t&&(u.Ob(12),u.yc("dataSource",e.dataSource)("hiddenColumns",u.Ac(6,J)),u.Ob(17),u.yc("matHeaderRowDef",e.displayedColumns),u.Ob(1),u.yc("matRowDefColumns",e.displayedColumns),u.Ob(1),u.yc("pageSizeOptions",u.Ac(7,V))("pageSize",25))},directives:[f.c,p.b,h.b,C.a,_.j,n.a,k.a,_.c,_.e,_.b,_.g,_.i,x.a,_.d,_.a,o.m,k.b,_.f,_.h],styles:[".filter[_ngcontent-%COMP%]{width:15%;margin-right:50%}.spacerb[_ngcontent-%COMP%]{margin-right:5px}h3[_ngcontent-%COMP%]{font-weight:500}"]}),t})(),canActivate:[s.a],data:{roles:"group_list"}},{path:"edit/:id",component:w,canActivate:[s.a],data:{roles:"group_edit"}}];let j=(()=>{class t{}return t.\u0275mod=u.Xb({type:t}),t.\u0275inj=u.Wb({factory:function(e){return new(e||t)},imports:[[r.f.forChild($)],r.f]}),t})(),U=(()=>{class t{}return t.\u0275mod=u.Xb({type:t}),t.\u0275inj=u.Wb({factory:function(e){return new(e||t)},imports:[[o.c,j,a.a,i.q,i.i,n.b]]}),t})()}}]);