(window.webpackJsonp=window.webpackJsonp||[]).push([[21],{Cp0R:function(t,e,c){"use strict";c.d(e,"a",(function(){return o}));var i=c("fXoL"),n=c("Ofeh"),a=c("tyNb");let o=(()=>{class t{constructor(t,e){this.loginService=t,this.router=e,this.assigedRole=[]}canActivate(t,e){return this.loginService.loggedIn()?(this.assigedRole=JSON.parse(sessionStorage.getItem("rolesData")),1==this.assigedRole.includes(t.data.roles)||(this.router.navigate(["/deny"]),!1)):(this.router.navigate(["/"]),!1)}}return t.\u0275fac=function(e){return new(e||t)(i.jc(n.a),i.jc(a.c))},t.\u0275prov=i.Vb({token:t,factory:t.\u0275fac,providedIn:"root"}),t})()},H0VJ:function(t,e,c){"use strict";c.d(e,"a",(function(){return s}));var i=c("fXoL"),n=c("0IaG"),a=c("NFeN"),o=c("bTqV");let r=(()=>{class t{constructor(t){this.dialogRef=t}ngOnInit(){}closeDialog(){this.dialogRef.close(!1)}}return t.\u0275fac=function(e){return new(e||t)(i.Zb(n.f))},t.\u0275cmp=i.Tb({type:t,selectors:[["app-mat-dialog"]],decls:11,vars:2,consts:[[1,"content-container"],["id","close-button",3,"click"],[1,"content-span"],["mat-flat-button","","id","no-button",3,"mat-dialog-close"],["mat-flat-button","","id","yes-button","color","warn",3,"mat-dialog-close"]],template:function(t,e){1&t&&(i.fc(0,"div"),i.fc(1,"div",0),i.fc(2,"mat-icon",1),i.nc("click",(function(){return e.closeDialog()})),i.Qc(3,"close"),i.ec(),i.fc(4,"div",2),i.Qc(5,"Are you sure to delete this record ?"),i.ec(),i.ec(),i.fc(6,"div"),i.fc(7,"button",3),i.Qc(8,"No"),i.ec(),i.fc(9,"button",4),i.Qc(10,"Yes"),i.ec(),i.ec(),i.ec()),2&t&&(i.Ob(7),i.yc("mat-dialog-close",!1),i.Ob(2),i.yc("mat-dialog-close",!0))},directives:[a.a,o.b,n.c],styles:["#close-button[_ngcontent-%COMP%]{margin-left:90%;cursor:pointer}.content-span[_ngcontent-%COMP%]{margin-left:20px;margin-bottom:20px}#no-button[_ngcontent-%COMP%]{width:30%;margin-left:7%;margin-right:25%;background-color:#ff0}#yes-button[_ngcontent-%COMP%]{width:30%}"]}),t})(),s=(()=>{class t{constructor(t){this.dialog=t}openConfirmDialog(){return this.dialog.open(r,{width:"300px",disableClose:!0,position:{top:"20px"}})}}return t.\u0275fac=function(e){return new(e||t)(i.jc(n.b))},t.\u0275prov=i.Vb({token:t,factory:t.\u0275fac,providedIn:"root"}),t})()},hxvG:function(t,e,c){"use strict";c.r(e),c.d(e,"NotificationModule",(function(){return Y}));var i=c("ofXK"),n=c("3Pt+"),a=c("jAig"),o=c("KUt4"),r=c("tyNb"),s=c("Cp0R"),l=c("fXoL"),f=c("dNgK"),d=c("Kqty"),u=c("Wp6s"),m=c("kmnG"),p=c("d3UM"),h=c("bSwM"),b=c("7EHt"),g=c("NFeN"),y=c("bTqV"),v=c("FKr1"),O=c("qFsG");function C(t,e){if(1&t&&(l.fc(0,"mat-option",19),l.Qc(1),l.ec()),2&t){const t=e.$implicit;l.yc("value",t.value),l.Ob(1),l.Sc(" ",t.value," ")}}function x(t,e){if(1&t&&(l.fc(0,"mat-option",19),l.Qc(1),l.ec()),2&t){const t=e.$implicit;l.yc("value",t.value),l.Ob(1),l.Sc(" ",t.value," ")}}function S(t,e){if(1&t&&(l.fc(0,"mat-option",19),l.Qc(1),l.ec()),2&t){const t=e.$implicit;l.yc("value",t.id),l.Ob(1),l.Sc(" ",t.value," ")}}function P(t,e){if(1&t){const t=l.gc();l.fc(0,"div",26),l.fc(1,"a"),l.fc(2,"mat-icon",16),l.nc("click",(function(){l.Hc(t);const e=l.rc().index;return l.rc().removeAttributes(e)})),l.Qc(3,"clear"),l.ec(),l.ec(),l.ec()}}function A(t,e){if(1&t&&(l.fc(0,"div",20),l.fc(1,"div",21),l.fc(2,"mat-form-field",22),l.ac(3,"input",23),l.ec(),l.fc(4,"mat-form-field",22),l.ac(5,"input",24),l.ec(),l.Pc(6,P,4,0,"div",25),l.ec(),l.ec()),2&t){const t=e.index,c=l.rc();l.Ob(1),l.yc("formArrayName",t),l.Ob(2),l.yc("id","name"+t),l.Ob(2),l.yc("id","value"+t),l.Ob(1),l.yc("ngIf",c.myform.get("attributes").length>1)}}let w=(()=>{class t{constructor(t,e,c,i){this.fb=t,this.router=e,this.snackBar=c,this.notificationService=i,this.object={},this.att=[],this.groups=[],this.submitted=!1,this.channels=[{id:1,value:"Web"},{id:0,value:"Mail"}],this.types=[{id:1,value:"Status Online"},{id:2,value:"Status Offline"},{id:3,value:"Ignition Off"}],this.step=0}setStep(t){this.step=t}ngOnInit(){this.myform=this.fb.group({type:["",[n.s.required]],all_devices:[],channels:[""],calender:[],attributes:this.fb.array([])})}assignAttributes(){return this.fb.group({name:[""],value:[""]})}get fArray(){return this.myform.get("attributes")}addassignAttributes(){this.fArray.push(this.assignAttributes())}removeAttributes(t){this.myform.get("attributes").removeAt(t)}openSnackBar(){this.snackBar.open("Successfully added!!","Close",{duration:2e3,verticalPosition:"top",horizontalPosition:"end"})}addGroup(){this.myform.markAllAsTouched(),this.submitted=!0,this.myform.invalid||(this.myform.value.attributes.forEach(t=>{this.object[t.name]=t.value}),this.myform.value.attributes=this.object,this.userData=JSON.parse(localStorage.getItem("userData")),this.myform.value.created_by=this.userData.id,console.log(this.myform.value),this.notificationService.addNotification(this.myform.value).subscribe(t=>{this.openSnackBar(),this.router.navigate(["/admin/traccar/notification/list"])},t=>{console.log(t)}))}}return t.\u0275fac=function(e){return new(e||t)(l.Zb(n.e),l.Zb(r.c),l.Zb(f.a),l.Zb(d.a))},t.\u0275cmp=l.Tb({type:t,selectors:[["app-notificain-add"]],decls:50,vars:7,consts:[[1,"customStyle"],[1,"title-style"],[3,"formGroup"],[1,"main"],[1,"mainContent"],[1,"full"],["formControlName","type","required",""],[3,"value",4,"ngFor","ngForOf"],["formControlName","all_devices","labelPosition","before",1,"checkbox"],["required","",1,"full"],["formControlName","channels"],[1,"optionalContent"],[1,"example-headers-align"],["hideToggle","",3,"expanded","opened"],["formControlName","calender"],["formArrayName","attributes",4,"ngFor","ngForOf"],[3,"click"],[1,"button"],["mat-stroked-button","","color","primary",1,"btn-block",3,"click"],[3,"value"],["formArrayName","attributes"],[3,"formArrayName"],[1,"half"],["trim","blur","matInput","","placeholder","Name","formControlName","name","autocomplete","off",3,"id"],["trim","blur","matInput","","placeholder","Value","formControlName","value","autocomplete","off",3,"id"],["class","delAssigns",4,"ngIf"],[1,"delAssigns"]],template:function(t,e){1&t&&(l.fc(0,"mat-card",0),l.fc(1,"div",1),l.fc(2,"mat-card-title"),l.Qc(3,"Notification Form"),l.ec(),l.ec(),l.fc(4,"mat-card-content"),l.fc(5,"form",2),l.fc(6,"div",3),l.fc(7,"div",4),l.fc(8,"mat-form-field",5),l.fc(9,"mat-label"),l.Qc(10,"Types"),l.ec(),l.fc(11,"mat-select",6),l.Pc(12,C,2,2,"mat-option",7),l.ec(),l.ec(),l.fc(13,"span",5),l.fc(14,"mat-checkbox",8),l.Qc(15," All Devices "),l.ec(),l.ec(),l.fc(16,"mat-form-field",9),l.fc(17,"mat-label"),l.Qc(18,"Channels"),l.ec(),l.fc(19,"mat-select",10),l.Pc(20,x,2,2,"mat-option",7),l.ec(),l.ec(),l.ec(),l.fc(21,"div",11),l.fc(22,"mat-accordion",12),l.fc(23,"mat-expansion-panel",13),l.nc("opened",(function(){return e.setStep(1)})),l.fc(24,"mat-expansion-panel-header"),l.fc(25,"mat-panel-title"),l.fc(26,"mat-icon"),l.Qc(27,"add"),l.ec(),l.Qc(28," Extra "),l.ec(),l.ec(),l.fc(29,"mat-form-field",9),l.fc(30,"mat-label"),l.Qc(31,"Calender"),l.ec(),l.fc(32,"mat-select",14),l.Pc(33,S,2,2,"mat-option",7),l.ec(),l.ec(),l.ec(),l.ec(),l.fc(34,"mat-accordion",12),l.fc(35,"mat-expansion-panel",13),l.nc("opened",(function(){return e.setStep(3)})),l.fc(36,"mat-expansion-panel-header"),l.fc(37,"mat-panel-title"),l.fc(38,"mat-icon"),l.Qc(39,"add"),l.ec(),l.Qc(40," Attributes "),l.ec(),l.ec(),l.Pc(41,A,7,4,"div",15),l.fc(42,"button",16),l.nc("click",(function(){return e.addassignAttributes()})),l.fc(43,"mat-icon"),l.Qc(44,"add"),l.ec(),l.ec(),l.ec(),l.ec(),l.ec(),l.ec(),l.ec(),l.ec(),l.fc(45,"mat-card-actions",17),l.fc(46,"button",18),l.nc("click",(function(){return e.addGroup()})),l.Qc(47," Add "),l.ec(),l.fc(48,"p"),l.Qc(49,"Note: Field marked with * is Mandatory"),l.ec(),l.ec(),l.ec()),2&t&&(l.Ob(5),l.yc("formGroup",e.myform),l.Ob(7),l.yc("ngForOf",e.types),l.Ob(8),l.yc("ngForOf",e.channels),l.Ob(3),l.yc("expanded",1===e.step),l.Ob(10),l.yc("ngForOf",e.groups),l.Ob(2),l.yc("expanded",3===e.step),l.Ob(6),l.yc("ngForOf",e.myform.get("attributes").controls))},directives:[u.a,u.f,u.c,n.t,n.n,n.g,m.c,m.g,p.a,n.m,n.f,n.r,i.l,h.a,b.a,b.c,b.d,b.e,g.a,u.b,y.b,v.o,n.d,O.b,n.c,i.m],styles:["mat-card[_ngcontent-%COMP%]{width:45%;top:0}.customStyle[_ngcontent-%COMP%]{border-radius:10px 10px 10px 10px;box-shadow:5px 10px 15px #1a237e}.customStyle[_ngcontent-%COMP%]   .title-style[_ngcontent-%COMP%]{color:#1a237e;text-align:center!important}.customStyle[_ngcontent-%COMP%]   .warning[_ngcontent-%COMP%]{color:red;margin-left:30px}.customStyle[_ngcontent-%COMP%]   .error_message[_ngcontent-%COMP%]{color:red;margin-left:20px;margin-top:-10px;font-size:12px}.mat-stroked-button[_ngcontent-%COMP%]{width:120px;border:1px solid #00f}.sidenav-content[_ngcontent-%COMP%]{height:120%}.button[_ngcontent-%COMP%]{margin-top:100px}.half[_ngcontent-%COMP%]{width:40%}.delAssigns[_ngcontent-%COMP%]{margin-top:25px}a[_ngcontent-%COMP%]{cursor:pointer}"]}),t})();function k(t,e){if(1&t&&(l.fc(0,"mat-option",19),l.Qc(1),l.ec()),2&t){const t=e.$implicit;l.yc("value",t.value),l.Ob(1),l.Sc(" ",t.value," ")}}function N(t,e){if(1&t&&(l.fc(0,"mat-option",19),l.Qc(1),l.ec()),2&t){const t=e.$implicit;l.yc("value",t.value),l.Ob(1),l.Sc(" ",t.value," ")}}function _(t,e){if(1&t&&(l.fc(0,"mat-option",19),l.Qc(1),l.ec()),2&t){const t=e.$implicit;l.yc("value",t.id),l.Ob(1),l.Sc(" ",t.value," ")}}function Q(t,e){if(1&t){const t=l.gc();l.fc(0,"div",26),l.fc(1,"a"),l.fc(2,"mat-icon",16),l.nc("click",(function(){l.Hc(t);const e=l.rc().index;return l.rc().removeAttributes(e)})),l.Qc(3,"clear"),l.ec(),l.ec(),l.ec()}}function M(t,e){if(1&t&&(l.fc(0,"div",20),l.fc(1,"div",21),l.fc(2,"mat-form-field",22),l.ac(3,"input",23),l.ec(),l.fc(4,"mat-form-field",22),l.ac(5,"input",24),l.ec(),l.Pc(6,Q,4,0,"div",25),l.ec(),l.ec()),2&t){const t=e.index,c=l.rc();l.Ob(1),l.yc("formArrayName",t),l.Ob(2),l.yc("id","name"+t),l.Ob(2),l.yc("id","value"+t),l.Ob(1),l.yc("ngIf",c.myform.get("attributes").length>1)}}let I=(()=>{class t{constructor(t,e,c,i,n){this.fb=t,this.router=e,this.snackBar=c,this.notificationService=i,this.route=n,this.groups=[],this.object={},this.att=[],this.submitted=!1,this.channels=[{id:1,value:"Web"},{id:0,value:"Mail"}],this.types=[{id:1,value:"Status Online"},{id:2,value:"Status Offline"},{id:3,value:"Ignition Off"}],this.step=0}setStep(t){this.step=t}ngOnInit(){this.myform=this.fb.group({type:["",[n.s.required]],all_devices:[],channels:[""],calender:[],attributes:this.fb.array([])}),this.route.paramMap.subscribe(t=>{this.Id=t.get("id"),this.edit(this.Id)})}assignAttributes(){return this.fb.group({name:[""],value:[""]})}get fArray(){return this.myform.get("attributes")}addassignAttributes(){this.fArray.push(this.assignAttributes())}removeAttributes(t){this.myform.get("attributes").removeAt(t)}edit(t){this.notificationService.getNotificationById(t).subscribe(t=>{this.d=t,console.log(this.d);var e=JSON.parse(this.d.attributes),c=Object.entries(e);this.attr=[],c.forEach(t=>{this.attr.push({name:t[0],value:t[1]})}),this.d.attributes=this.attr,console.log(this.d.attributes),this.setData(this.d)})}setData(t){this.myform.patchValue({type:t.type,all_devices:t.always,channels:t.notificators,calender:t.calenderid}),this.createdBy=t.created_by,this.setAttributes()}setAttributes(){let t=this.myform.controls.attributes;this.d.attributes.forEach(e=>{t.push(this.fb.group(e))})}openSnackBar(){this.snackBar.open("Updated added!!","Close",{duration:2e3,verticalPosition:"top",horizontalPosition:"end"})}updateNotification(){this.myform.markAllAsTouched(),this.submitted=!0,this.myform.invalid||(this.myform.value.attributes.forEach(t=>{this.object[t.name]=t.value,console.log(this.myform.value.attributes)}),this.myform.value.attributes=this.object,this.userData=JSON.parse(localStorage.getItem("userData")),this.myform.value.updated_by=this.userData.id,this.myform.value.created_by=this.createdBy,this.myform.value.updated_time=new Date,console.log(this.myform.value),this.notificationService.updateNotification(this.Id,this.myform.value).subscribe(t=>{this.openSnackBar(),this.router.navigate(["/admin/traccar/notification/list"])}))}}return t.\u0275fac=function(e){return new(e||t)(l.Zb(n.e),l.Zb(r.c),l.Zb(f.a),l.Zb(d.a),l.Zb(r.a))},t.\u0275cmp=l.Tb({type:t,selectors:[["app-notificain-edit"]],decls:50,vars:7,consts:[[1,"customStyle"],[1,"title-style"],[3,"formGroup"],[1,"main"],[1,"mainContent"],["required","",1,"full"],["formControlName","type"],[3,"value",4,"ngFor","ngForOf"],[1,"full"],["formControlName","all_devices","labelPosition","before",1,"checkbox"],["formControlName","channels"],[1,"optionalContent"],[1,"example-headers-align"],["hideToggle","",3,"expanded","opened"],["formControlName","calender"],["formArrayName","attributes",4,"ngFor","ngForOf"],[3,"click"],[1,"button"],["mat-stroked-button","","color","primary",1,"btn-block",3,"click"],[3,"value"],["formArrayName","attributes"],[3,"formArrayName"],[1,"half"],["trim","blur","matInput","","placeholder","Name","formControlName","name","autocomplete","off",3,"id"],["trim","blur","matInput","","placeholder","Value","formControlName","value","autocomplete","off",3,"id"],["class","delAssigns",4,"ngIf"],[1,"delAssigns"]],template:function(t,e){1&t&&(l.fc(0,"mat-card",0),l.fc(1,"div",1),l.fc(2,"mat-card-title"),l.Qc(3,"Notification Update Form"),l.ec(),l.ec(),l.fc(4,"mat-card-content"),l.fc(5,"form",2),l.fc(6,"div",3),l.fc(7,"div",4),l.fc(8,"mat-form-field",5),l.fc(9,"mat-label"),l.Qc(10,"Types"),l.ec(),l.fc(11,"mat-select",6),l.Pc(12,k,2,2,"mat-option",7),l.ec(),l.ec(),l.fc(13,"span",8),l.fc(14,"mat-checkbox",9),l.Qc(15," All Devices "),l.ec(),l.ec(),l.fc(16,"mat-form-field",5),l.fc(17,"mat-label"),l.Qc(18,"Channels"),l.ec(),l.fc(19,"mat-select",10),l.Pc(20,N,2,2,"mat-option",7),l.ec(),l.ec(),l.ec(),l.fc(21,"div",11),l.fc(22,"mat-accordion",12),l.fc(23,"mat-expansion-panel",13),l.nc("opened",(function(){return e.setStep(1)})),l.fc(24,"mat-expansion-panel-header"),l.fc(25,"mat-panel-title"),l.fc(26,"mat-icon"),l.Qc(27,"add"),l.ec(),l.Qc(28," Extra "),l.ec(),l.ec(),l.fc(29,"mat-form-field",5),l.fc(30,"mat-label"),l.Qc(31,"Calender"),l.ec(),l.fc(32,"mat-select",14),l.Pc(33,_,2,2,"mat-option",7),l.ec(),l.ec(),l.ec(),l.ec(),l.fc(34,"mat-accordion",12),l.fc(35,"mat-expansion-panel",13),l.nc("opened",(function(){return e.setStep(3)})),l.fc(36,"mat-expansion-panel-header"),l.fc(37,"mat-panel-title"),l.fc(38,"mat-icon"),l.Qc(39,"add"),l.ec(),l.Qc(40," Attributes "),l.ec(),l.ec(),l.Pc(41,M,7,4,"div",15),l.fc(42,"button",16),l.nc("click",(function(){return e.addassignAttributes()})),l.fc(43,"mat-icon"),l.Qc(44,"add"),l.ec(),l.ec(),l.ec(),l.ec(),l.ec(),l.ec(),l.ec(),l.ec(),l.fc(45,"mat-card-actions",17),l.fc(46,"button",18),l.nc("click",(function(){return e.updateNotification()})),l.Qc(47," Update "),l.ec(),l.fc(48,"p"),l.Qc(49,"Note: Field marked with * is Mandatory"),l.ec(),l.ec(),l.ec()),2&t&&(l.Ob(5),l.yc("formGroup",e.myform),l.Ob(7),l.yc("ngForOf",e.types),l.Ob(8),l.yc("ngForOf",e.channels),l.Ob(3),l.yc("expanded",1===e.step),l.Ob(10),l.yc("ngForOf",e.groups),l.Ob(2),l.yc("expanded",3===e.step),l.Ob(6),l.yc("ngForOf",e.myform.get("attributes").controls))},directives:[u.a,u.f,u.c,n.t,n.n,n.g,m.c,m.g,p.a,n.m,n.f,i.l,h.a,b.a,b.c,b.d,b.e,g.a,u.b,y.b,v.o,n.d,O.b,n.c,i.m],styles:["mat-card[_ngcontent-%COMP%]{width:45%;top:0}.customStyle[_ngcontent-%COMP%]{border-radius:10px 10px 10px 10px;box-shadow:5px 10px 15px #1a237e}.customStyle[_ngcontent-%COMP%]   .title-style[_ngcontent-%COMP%]{color:#1a237e;text-align:center!important}.customStyle[_ngcontent-%COMP%]   .warning[_ngcontent-%COMP%]{color:red;margin-left:30px}.customStyle[_ngcontent-%COMP%]   .error_message[_ngcontent-%COMP%]{color:red;margin-left:20px;margin-top:-10px;font-size:12px}.mat-stroked-button[_ngcontent-%COMP%]{width:120px;border:1px solid #00f}.sidenav-content[_ngcontent-%COMP%]{height:120%}.button[_ngcontent-%COMP%]{margin-top:100px}.half[_ngcontent-%COMP%]{width:40%}.delAssigns[_ngcontent-%COMP%]{margin-top:25px}a[_ngcontent-%COMP%]{cursor:pointer}"]}),t})();var D=c("M9IT"),F=c("Dh3D"),T=c("+0xr"),R=c("H0VJ");function B(t,e){1&t&&(l.fc(0,"th",19),l.Qc(1,"Action"),l.ec())}function j(t,e){if(1&t){const t=l.gc();l.fc(0,"button",23),l.fc(1,"mat-icon",24),l.nc("click",(function(){l.Hc(t);const e=l.rc().$implicit;return l.rc().editNotification(e)})),l.Qc(2,"edit"),l.ec(),l.ec()}}function Z(t,e){if(1&t){const t=l.gc();l.fc(0,"button",25),l.fc(1,"mat-icon",24),l.nc("click",(function(){l.Hc(t);const e=l.rc().$implicit;return l.rc().deleteNotification(e)})),l.Qc(2,"delete_outline"),l.ec(),l.ec()}}function H(t,e){if(1&t&&(l.fc(0,"td",20),l.Pc(1,j,3,0,"button",21),l.Pc(2,Z,3,0,"button",22),l.ec()),2&t){const t=l.rc();l.Ob(1),l.yc("ngIf",1==t.assigedRole.includes("notification_edit")),l.Ob(1),l.yc("ngIf",1==t.assigedRole.includes("notification_delete"))}}function E(t,e){1&t&&(l.fc(0,"th",26),l.Qc(1,"ID"),l.ec())}function $(t,e){if(1&t&&(l.fc(0,"td",20),l.Qc(1),l.ec()),2&t){const t=e.$implicit;l.Ob(1),l.Rc(t.id)}}function q(t,e){1&t&&(l.fc(0,"th",26),l.Qc(1,"Type"),l.ec())}function z(t,e){if(1&t&&(l.fc(0,"td",20),l.Qc(1),l.ec()),2&t){const t=e.$implicit;l.Ob(1),l.Rc(t.type)}}function G(t,e){1&t&&(l.fc(0,"th",26),l.Qc(1,"Channels"),l.ec())}function V(t,e){if(1&t&&(l.fc(0,"td",20),l.Qc(1),l.ec()),2&t){const t=e.$implicit;l.Ob(1),l.Rc(t.notificator)}}function J(t,e){1&t&&l.ac(0,"tr",27)}function U(t,e){1&t&&l.ac(0,"tr",28)}const X=function(){return[0]},K=function(){return[25,50,100]},W=[{path:"add",component:w,canActivate:[s.a],data:{roles:"notification_add"}},{path:"list",component:(()=>{class t{constructor(t,e,c,i){this.notificationService=t,this.snackBar=e,this.router=c,this.dialogService=i,this.assigedRole=[],this.show=!0,this.idColumn="id",this.dataSource=new T.k([]),this.states=[{id:0,value:"Inactive"},{id:1,value:"Active"}],this.displayedColumns=["action","id","type","channel"],this.assigedRole=JSON.parse(sessionStorage.getItem("rolesData"))}ngOnInit(){this.getAllNotification()}getAllNotification(){this.notificationService.getAllNotification().subscribe(t=>{this.notifications=t,this.dataSource=new T.k(t),setTimeout(()=>this.dataSource.sort=this.sort),setTimeout(()=>this.dataSource.paginator=this.paginator)})}editNotification(t){this.router.navigate(["admin/traccar/notification/edit",t.id])}deleteNotification(t){this.dialogService.openConfirmDialog().afterClosed().subscribe(e=>{e&&(this.notificationService.deleteNotification(t.id).subscribe(),this.deleteRowDataTable(t.id,this.idColumn,this.paginator,this.dataSource),this.openSnackBar())})}deleteRowDataTable(t,e,c,i){this.notifications=i.data;const n=this.notifications.findIndex(c=>c[e]===t);i.data.splice(n,1),i.paginator=c}openSnackBar(){this.snackBar.open("Deleted!!","Close",{duration:2e3,verticalPosition:"top",horizontalPosition:"end"})}applyFilter(t){this.dataSource.filter=t.trim().toLowerCase()}goAddItem(){this.router.navigate(["admin/traccar/notification/add"])}}return t.\u0275fac=function(e){return new(e||t)(l.Zb(d.a),l.Zb(f.a),l.Zb(r.c),l.Zb(R.a))},t.\u0275cmp=l.Tb({type:t,selectors:[["app-notificain-list"]],viewQuery:function(t,e){var c;1&t&&(l.Uc(F.a,!0),l.Uc(D.a,!0)),2&t&&(l.Ec(c=l.oc())&&(e.sort=c.first),l.Ec(c=l.oc())&&(e.paginator=c.first))},decls:29,vars:8,consts:[[1,"custom-style"],[1,"table-title"],[1,"search-div"],[1,"filter"],["matInput","","placeholder","search","autocomplete","off",3,"keyup"],["mat-button","",1,"mat-raised-button","mat-primary",3,"click"],["mat-button","",1,"add_button",3,"click"],["mat-table","","matTableExporter","","matSort","",1,"mat-elevation-z8",3,"dataSource","hiddenColumns"],["exporter","matTableExporter"],["matColumnDef","action"],["mat-header-cell","",4,"matHeaderCellDef"],["mat-cell","",4,"matCellDef"],["matColumnDef","id"],["mat-header-cell","","mat-sort-header","",4,"matHeaderCellDef"],["matColumnDef","type"],["matColumnDef","channel"],["class","header-row","mat-header-row","",4,"matHeaderRowDef"],["class","row","mat-row","",4,"matRowDef","matRowDefColumns"],[3,"pageSizeOptions","pageSize"],["mat-header-cell",""],["mat-cell",""],["mat-icon-button","",4,"ngIf"],["mat-icon-button","","color","warn",4,"ngIf"],["mat-icon-button",""],[3,"click"],["mat-icon-button","","color","warn"],["mat-header-cell","","mat-sort-header",""],["mat-header-row","",1,"header-row"],["mat-row","",1,"row"]],template:function(t,e){if(1&t){const t=l.gc();l.fc(0,"div",0),l.fc(1,"div",1),l.fc(2,"h3"),l.Qc(3,"Notification Table"),l.ec(),l.ec(),l.fc(4,"div",2),l.fc(5,"mat-form-field",3),l.fc(6,"input",4),l.nc("keyup",(function(t){return e.applyFilter(t.target.value)})),l.ec(),l.ec(),l.fc(7,"button",5),l.nc("click",(function(){return l.Hc(t),l.Fc(13).exportTable("csv",{fileName:"notification"})})),l.Qc(8," CSV "),l.ec(),l.fc(9,"button",6),l.nc("click",(function(){return e.goAddItem()})),l.fc(10,"mat-icon"),l.Qc(11,"add"),l.ec(),l.ec(),l.ec(),l.fc(12,"table",7,8),l.dc(14,9),l.Pc(15,B,2,0,"th",10),l.Pc(16,H,3,2,"td",11),l.cc(),l.dc(17,12),l.Pc(18,E,2,0,"th",13),l.Pc(19,$,2,1,"td",11),l.cc(),l.dc(20,14),l.Pc(21,q,2,0,"th",13),l.Pc(22,z,2,1,"td",11),l.cc(),l.dc(23,15),l.Pc(24,G,2,0,"th",13),l.Pc(25,V,2,1,"td",11),l.cc(),l.Pc(26,J,1,0,"tr",16),l.Pc(27,U,1,0,"tr",17),l.ec(),l.ac(28,"mat-paginator",18),l.ec()}2&t&&(l.Ob(12),l.yc("dataSource",e.dataSource)("hiddenColumns",l.Ac(6,X)),l.Ob(14),l.yc("matHeaderRowDef",e.displayedColumns),l.Ob(1),l.yc("matRowDefColumns",e.displayedColumns),l.Ob(1),l.yc("pageSizeOptions",l.Ac(7,K))("pageSize",25))},directives:[m.c,O.b,y.b,g.a,T.j,o.a,F.a,T.c,T.e,T.b,T.g,T.i,D.a,T.d,T.a,i.m,F.b,T.f,T.h],styles:[".filter[_ngcontent-%COMP%]{width:15%;margin-right:50%}.add_button[_ngcontent-%COMP%]{width:10%;color:#fff;margin-left:10px!important;background-color:#00f}"]}),t})(),canActivate:[s.a],data:{roles:"notification_list"}},{path:"edit/:id",component:I,canActivate:[s.a],data:{roles:"notification_edit"}}];let L=(()=>{class t{}return t.\u0275mod=l.Xb({type:t}),t.\u0275inj=l.Wb({factory:function(e){return new(e||t)},imports:[[r.f.forChild(W)],r.f]}),t})(),Y=(()=>{class t{}return t.\u0275mod=l.Xb({type:t}),t.\u0275inj=l.Wb({factory:function(e){return new(e||t)},imports:[[i.c,L,a.a,n.q,n.i,o.b]]}),t})()}}]);