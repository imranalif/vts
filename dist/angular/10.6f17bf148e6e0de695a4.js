(window.webpackJsonp=window.webpackJsonp||[]).push([[10],{"1jOF":function(t,e,c){"use strict";c.d(e,"a",(function(){return a}));var i=c("AytR"),o=c("fXoL"),r=c("tk/3");let a=(()=>{class t{constructor(t){this.http=t,this.url=i.a.apiUrl+"/driver/"}addDriver(t){return this.http.post(this.url+"/addDriver",t)}getAllDriver(){return this.http.get(this.url+"/listDriver")}getDriverById(t){return this.http.get(this.url+t+"/editDriver")}updateDriver(t,e){return this.http.put(this.url+t+"/updateDriver",e)}deleteDriver(t){return this.http.delete(this.url+t+"/deleteDriver")}addDriverWithDevice(t){return this.http.post(this.url+"/addDeviceDriver",t)}deleteDeviceDriver(t){return this.http.post(this.url+"/deleteDeviceDriver",t)}getDriverByDeviceId(t){return this.http.get(this.url+t+"/getDriverByDevice")}addDriverWithGroup(t){return this.http.post(this.url+"/addGroupDriver",t)}deleteGroupDriver(t){return this.http.post(this.url+"/deleteGroupDriver",t)}getDriverByGroupId(t){return this.http.get(this.url+t+"/getDriverByGroup")}addDriverWithUser(t){return this.http.post(this.url+"/addUserDriver",t)}deleteUserDriver(t){return this.http.post(this.url+"/deleteUserDriver",t)}getDriverByUserId(t){return this.http.get(this.url+t+"/getDriverByUser")}getAllCustomerDriver(){return this.http.get(this.url+"/listCustomerDriver")}getDriverByCustomerId(t){return this.http.get(this.url+t+"/getDriverByCustomerId")}addDriverWithCustomer(t){return this.http.post(this.url+"/addCustomerDriver",t)}deleteCustomerDriver(t){return this.http.post(this.url+"/deleteCustomerDriver",t)}}return t.\u0275fac=function(e){return new(e||t)(o.jc(r.b))},t.\u0275prov=o.Vb({token:t,factory:t.\u0275fac,providedIn:"root"}),t})()},Cp0R:function(t,e,c){"use strict";c.d(e,"a",(function(){return a}));var i=c("fXoL"),o=c("Ofeh"),r=c("tyNb");let a=(()=>{class t{constructor(t,e){this.loginService=t,this.router=e,this.assigedRole=[]}canActivate(t,e){return this.loginService.loggedIn()?(this.assigedRole=JSON.parse(localStorage.getItem("rolesData")),1==this.assigedRole.includes(t.data.roles)||(this.router.navigate(["/deny"]),!1)):(this.router.navigate(["/"]),!1)}}return t.\u0275fac=function(e){return new(e||t)(i.jc(o.a),i.jc(r.c))},t.\u0275prov=i.Vb({token:t,factory:t.\u0275fac,providedIn:"root"}),t})()},FP5Y:function(t,e,c){"use strict";c.r(e),c.d(e,"GroupModule",(function(){return Bt}));var i=c("ofXK"),o=c("3Pt+"),r=c("jAig"),a=c("KUt4"),n=c("tyNb"),s=c("Cp0R"),l=c("fXoL"),d=c("dNgK"),u=c("lLy5"),f=c("Wp6s"),m=c("kmnG"),h=c("qFsG"),p=c("7EHt"),g=c("NFeN"),b=c("d3UM"),v=c("bTqV"),O=c("FKr1");function y(t,e){1&t&&(l.fc(0,"div",20),l.Oc(1," Name is required"),l.ec())}function C(t,e){if(1&t&&(l.fc(0,"div",18),l.Nc(1,y,2,0,"div",19),l.ec()),2&t){const t=l.rc();l.Ob(1),l.xc("ngIf",t.myform.get("groupName").errors.required)}}function x(t,e){if(1&t&&(l.fc(0,"mat-option",21),l.Oc(1),l.ec()),2&t){const t=e.$implicit;l.xc("value",t.id),l.Ob(1),l.Qc(" ",t.value," ")}}function D(t,e){if(1&t&&(l.fc(0,"mat-option",21),l.Oc(1),l.ec()),2&t){const t=e.$implicit;l.xc("value",t.id),l.Ob(1),l.Qc(" ",t.value," ")}}function w(t,e){if(1&t){const t=l.gc();l.fc(0,"div",28),l.fc(1,"a"),l.fc(2,"mat-icon",15),l.nc("click",(function(){l.Fc(t);const e=l.rc().index;return l.rc().removeAttributes(e)})),l.Oc(3,"clear"),l.ec(),l.ec(),l.ec()}}function N(t,e){if(1&t&&(l.fc(0,"div",22),l.fc(1,"div",23),l.fc(2,"mat-form-field",11),l.fc(3,"mat-label"),l.Oc(4,"Name"),l.ec(),l.fc(5,"mat-select",24),l.Nc(6,D,2,2,"mat-option",13),l.ec(),l.ec(),l.fc(7,"mat-form-field",25),l.ac(8,"input",26),l.ec(),l.Nc(9,w,4,0,"div",27),l.ec(),l.ec()),2&t){const t=e.index,c=l.rc();l.Ob(1),l.xc("formArrayName",t),l.Ob(4),l.xc("id","name"+t),l.Ob(1),l.xc("ngForOf",c.nameTypes),l.Ob(2),l.xc("id","value"+t),l.Ob(1),l.xc("ngIf",c.myform.get("attributes").length>1)}}let S=(()=>{class t{constructor(t,e,c,i){this.fb=t,this.router=e,this.snackBar=c,this.groupService=i,this.object={},this.att=[],this.groups=[],this.submitted=!1,this.states=[{id:1,value:"Active"},{id:0,value:"Inactive"}],this.nameTypes=[{id:1,value:"TimeZone"},{id:2,value:"Speed Limit"},{id:3,value:"odometer"}],this.step=0}setStep(t){this.step=t}ngOnInit(){this.myform=this.fb.group({groupName:["",[o.s.required]],groupid:[],attributes:this.fb.array([])})}assignAttributes(){return this.fb.group({name:[""],value:[""]})}get fArray(){return this.myform.get("attributes")}addassignAttributes(){this.fArray.push(this.assignAttributes())}removeAttributes(t){this.myform.get("attributes").removeAt(t)}openSnackBar(){this.snackBar.open("Successfully added!!","Close",{duration:2e3,verticalPosition:"top",horizontalPosition:"end"})}addGroup(){this.submitted=!0,this.myform.invalid||(this.myform.value.attributes.forEach(t=>{this.object[t.name]=t.value}),this.myform.value.attributes=this.object,this.userData=JSON.parse(localStorage.getItem("userData")),this.myform.value.created_by=this.userData.id,console.log(this.myform.value),this.groupService.addGroup(this.myform.value).subscribe(t=>{this.openSnackBar(),this.router.navigate(["/admin/traccar/group/list"])},t=>{console.log(t)}))}}return t.\u0275fac=function(e){return new(e||t)(l.Zb(o.e),l.Zb(n.c),l.Zb(d.a),l.Zb(u.a))},t.\u0275cmp=l.Tb({type:t,selectors:[["app-group-add"]],decls:40,vars:6,consts:[[1,"customStyle"],[1,"title-style"],[3,"formGroup"],[1,"main"],[1,"mainContent"],[1,"full"],["trim","blur","matInput","","placeholder","Name","formControlName","groupName","autocomplete","off","required",""],["class","feedback",4,"ngIf"],[1,"optionalContent"],[1,"example-headers-align"],["hideToggle","",3,"expanded","opened"],["required","",1,"half"],["formControlName","groupid"],[3,"value",4,"ngFor","ngForOf"],["formArrayName","attributes",4,"ngFor","ngForOf"],[3,"click"],[1,"button"],["mat-stroked-button","","color","primary",1,"btn-block",3,"click"],[1,"feedback"],["class","red",4,"ngIf"],[1,"red"],[3,"value"],["formArrayName","attributes"],[3,"formArrayName"],["formControlName","name",3,"id"],[1,"half"],["trim","blur","matInput","","placeholder","Value","formControlName","value","autocomplete","off",3,"id"],["class","delAssigns",4,"ngIf"],[1,"delAssigns"]],template:function(t,e){1&t&&(l.fc(0,"mat-card",0),l.fc(1,"div",1),l.fc(2,"mat-card-title"),l.Oc(3,"Group Add Form"),l.ec(),l.ec(),l.fc(4,"mat-card-content"),l.fc(5,"form",2),l.fc(6,"div",3),l.fc(7,"div",4),l.fc(8,"mat-form-field",5),l.ac(9,"input",6),l.ec(),l.Nc(10,C,2,1,"div",7),l.ec(),l.fc(11,"div",8),l.fc(12,"mat-accordion",9),l.fc(13,"mat-expansion-panel",10),l.nc("opened",(function(){return e.setStep(1)})),l.fc(14,"mat-expansion-panel-header"),l.fc(15,"mat-panel-title"),l.fc(16,"mat-icon"),l.Oc(17,"add"),l.ec(),l.Oc(18," Extra "),l.ec(),l.ec(),l.fc(19,"mat-form-field",11),l.fc(20,"mat-label"),l.Oc(21,"Group"),l.ec(),l.fc(22,"mat-select",12),l.Nc(23,x,2,2,"mat-option",13),l.ec(),l.ec(),l.ec(),l.ec(),l.fc(24,"mat-accordion",9),l.fc(25,"mat-expansion-panel",10),l.nc("opened",(function(){return e.setStep(3)})),l.fc(26,"mat-expansion-panel-header"),l.fc(27,"mat-panel-title"),l.fc(28,"mat-icon"),l.Oc(29,"add"),l.ec(),l.Oc(30," Attributes "),l.ec(),l.ec(),l.Nc(31,N,10,5,"div",14),l.fc(32,"button",15),l.nc("click",(function(){return e.addassignAttributes()})),l.fc(33,"mat-icon"),l.Oc(34,"add"),l.ec(),l.ec(),l.ec(),l.ec(),l.ec(),l.ec(),l.ec(),l.ec(),l.fc(35,"mat-card-actions",16),l.fc(36,"button",17),l.nc("click",(function(){return e.addGroup()})),l.Oc(37," Add "),l.ec(),l.fc(38,"p"),l.Oc(39,"Note: Field marked with * is Mandatory"),l.ec(),l.ec(),l.ec()),2&t&&(l.Ob(5),l.xc("formGroup",e.myform),l.Ob(5),l.xc("ngIf",e.submitted&&e.myform.get("groupName").errors),l.Ob(3),l.xc("expanded",1===e.step),l.Ob(10),l.xc("ngForOf",e.groups),l.Ob(2),l.xc("expanded",3===e.step),l.Ob(6),l.xc("ngForOf",e.myform.get("attributes").controls))},directives:[f.a,f.f,f.c,o.t,o.n,o.g,m.c,h.b,o.c,o.m,o.f,o.r,i.l,p.a,p.c,p.d,p.e,g.a,m.g,b.a,i.k,f.b,v.b,O.o,o.d],styles:["mat-card[_ngcontent-%COMP%]{width:50%;top:0}.customStyle[_ngcontent-%COMP%]{border-radius:10px 10px 10px 10px;box-shadow:5px 10px 15px #1a237e}.customStyle[_ngcontent-%COMP%]   .title-style[_ngcontent-%COMP%]{color:#1a237e;text-align:center!important}.customStyle[_ngcontent-%COMP%]   .warning[_ngcontent-%COMP%]{color:red;margin-left:30px}.customStyle[_ngcontent-%COMP%]   .error_message[_ngcontent-%COMP%]{color:red;margin-left:20px;margin-top:-10px;font-size:12px}.mat-stroked-button[_ngcontent-%COMP%]{width:120px;border:1px solid #00f}.sidenav-content[_ngcontent-%COMP%]{height:120%}.button[_ngcontent-%COMP%]{margin-top:100px}.half[_ngcontent-%COMP%]{width:40%}.delAssigns[_ngcontent-%COMP%]{margin-top:25px}a[_ngcontent-%COMP%]{cursor:pointer}"]}),t})();var k=c("M9IT"),I=c("Dh3D"),A=c("+0xr"),G=c("0IaG"),M=c("1jOF"),T=c("H0VJ"),F=c("bSwM");function P(t,e){1&t&&l.ac(0,"th",11)}function R(t,e){if(1&t){const t=l.gc();l.fc(0,"td",12),l.fc(1,"mat-checkbox",13),l.nc("change",(function(c){l.Fc(t);const i=e.$implicit;return l.rc().check(c.checked,i)})),l.ec(),l.ec()}if(2&t){const t=e.$implicit,c=l.rc();l.Ob(1),l.xc("checked",c.checkState(t.id))}}function Z(t,e){1&t&&(l.fc(0,"th",11),l.Oc(1,"Name"),l.ec())}function B(t,e){if(1&t&&(l.fc(0,"td",12),l.Oc(1),l.ec()),2&t){const t=e.$implicit;l.Ob(1),l.Pc(t.name)}}function _(t,e){1&t&&(l.fc(0,"th",11),l.Oc(1,"Identifer"),l.ec())}function j(t,e){if(1&t&&(l.fc(0,"td",12),l.Oc(1),l.ec()),2&t){const t=e.$implicit;l.Ob(1),l.Pc(t.uniqueid)}}function $(t,e){1&t&&l.ac(0,"tr",14)}function V(t,e){1&t&&l.ac(0,"tr",15)}let H=(()=>{class t{constructor(t,e,c,i,o,r,a){this.driverService=t,this.snackBar=e,this.router=c,this.dialogService=i,this.dialogRef=o,this.dialog=r,this.data=a,this.dataSource=new A.k([]),this.displayedColumns=["select","name","identifier"],this.Id=a.pageValue}ngOnInit(){this.getAllDriver(),this.getAllDriverByGroup()}getAllDriver(){this.driverService.getAllDriver().subscribe(t=>{this.drivers=t,this.dataSource=new A.k(t),setTimeout(()=>this.dataSource.sort=this.sort),setTimeout(()=>this.dataSource.paginator=this.paginator)})}getAllDriverByGroup(){this.driverService.getDriverByGroupId(this.Id).subscribe(t=>{console.log(t),this.groupDrivers=t,this.groupDrivers.forEach(t=>{this.groupDrivers.push(t.driverid)})})}close(){this.dialogRef.close()}checkState(t){if(this.groupDrivers)return this.groupDrivers.indexOf(t)>-1}check(t,e){t?(this.object={groupId:this.Id,driverId:e.id},this.driverService.addDriverWithGroup(this.object).subscribe()):(this.object={groupId:this.Id,driverId:e.id},this.driverService.deleteGroupDriver(this.object).subscribe())}}return t.\u0275fac=function(e){return new(e||t)(l.Zb(M.a),l.Zb(d.a),l.Zb(n.c),l.Zb(T.a),l.Zb(G.f),l.Zb(G.b),l.Zb(G.a,8))},t.\u0275cmp=l.Tb({type:t,selectors:[["app-driver-group"]],viewQuery:function(t,e){var c;1&t&&(l.Sc(I.a,!0),l.Sc(k.a,!0)),2&t&&(l.Cc(c=l.oc())&&(e.sort=c.first),l.Cc(c=l.oc())&&(e.paginator=c.first))},decls:20,vars:3,consts:[[1,"custom-style"],[1,"table-title"],[3,"click"],["mat-table","","matTableExporter","",1,"mat-elevation-z8",3,"dataSource"],["matColumnDef","select"],["mat-header-cell","",4,"matHeaderCellDef"],["mat-cell","",4,"matCellDef"],["matColumnDef","name"],["matColumnDef","identifier"],["class","header-row","mat-header-row","",4,"matHeaderRowDef"],["class","row","mat-row","",4,"matRowDef","matRowDefColumns"],["mat-header-cell",""],["mat-cell",""],[3,"checked","change"],["mat-header-row","",1,"header-row"],["mat-row","",1,"row"]],template:function(t,e){1&t&&(l.fc(0,"div",0),l.fc(1,"div",1),l.fc(2,"h3"),l.Oc(3,"Driver Table"),l.ec(),l.fc(4,"span"),l.fc(5,"a"),l.fc(6,"mat-icon",2),l.nc("click",(function(){return e.close()})),l.Oc(7,"X"),l.ec(),l.ec(),l.ec(),l.ec(),l.fc(8,"table",3),l.dc(9,4),l.Nc(10,P,1,0,"th",5),l.Nc(11,R,2,1,"td",6),l.cc(),l.dc(12,7),l.Nc(13,Z,2,0,"th",5),l.Nc(14,B,2,1,"td",6),l.cc(),l.dc(15,8),l.Nc(16,_,2,0,"th",5),l.Nc(17,j,2,1,"td",6),l.cc(),l.Nc(18,$,1,0,"tr",9),l.Nc(19,V,1,0,"tr",10),l.ec(),l.ec()),2&t&&(l.Ob(8),l.xc("dataSource",e.dataSource),l.Ob(10),l.xc("matHeaderRowDef",e.displayedColumns),l.Ob(1),l.xc("matRowDefColumns",e.displayedColumns))},directives:[g.a,A.j,a.a,A.c,A.e,A.b,A.g,A.i,A.d,A.a,F.a,A.f,A.h],styles:["h3[_ngcontent-%COMP%]{float:left;margin-right:70%;margin-left:5%}"]}),t})();var q=c("Kqty");function E(t,e){1&t&&l.ac(0,"th",12)}function z(t,e){if(1&t){const t=l.gc();l.fc(0,"td",13),l.fc(1,"mat-checkbox",14),l.nc("change",(function(c){l.Fc(t);const i=e.$implicit;return l.rc().check(c.checked,i)})),l.ec(),l.ec()}if(2&t){const t=e.$implicit,c=l.rc();l.Ob(1),l.xc("checked",c.checkState(t.id))}}function U(t,e){1&t&&(l.fc(0,"th",12),l.Oc(1,"Type of notification"),l.ec())}function W(t,e){if(1&t&&(l.fc(0,"td",13),l.Oc(1),l.ec()),2&t){const t=e.$implicit;l.Ob(1),l.Pc(t.type)}}function X(t,e){1&t&&(l.fc(0,"th",12),l.Oc(1,"All Devices"),l.ec())}function J(t,e){if(1&t&&(l.fc(0,"td",13),l.Oc(1),l.ec()),2&t){const t=e.$implicit,c=l.rc();l.Ob(1),l.Pc(null==c.states[t.always]?null:c.states[t.always].value)}}function L(t,e){1&t&&(l.fc(0,"th",12),l.Oc(1,"Channels"),l.ec())}function Q(t,e){if(1&t&&(l.fc(0,"td",13),l.Oc(1),l.ec()),2&t){const t=e.$implicit;l.Ob(1),l.Pc(t.notificators)}}function K(t,e){1&t&&l.ac(0,"tr",15)}function Y(t,e){1&t&&l.ac(0,"tr",16)}let tt=(()=>{class t{constructor(t,e,c,i,o,r,a){this.notificationService=t,this.snackBar=e,this.router=c,this.dialogService=i,this.dialogRef=o,this.dialog=r,this.data=a,this.dataSource=new A.k([]),this.states=[{id:0,value:"NO"},{id:1,value:"YES"}],this.displayedColumns=["select","name","identifier","always"],this.Id=a.pageValue}ngOnInit(){this.getAllNotification(),this.getAllNotificationByGroup()}getAllNotification(){this.notificationService.getAllNotification().subscribe(t=>{console.log(t),this.notifications=t,this.dataSource=new A.k(t),setTimeout(()=>this.dataSource.sort=this.sort),setTimeout(()=>this.dataSource.paginator=this.paginator)})}getAllNotificationByGroup(){this.notificationService.getNotificationByGroupId(this.Id).subscribe(t=>{console.log(t),this.deviceNotifications=t,this.deviceNotifications.forEach(t=>{this.deviceNotifications.push(t.notificationid)})})}close(){this.dialogRef.close()}checkState(t){if(this.deviceNotifications)return this.deviceNotifications.indexOf(t)>-1}check(t,e){t?(this.object={groupId:this.Id,notificationId:e.id},this.notificationService.addNotificationWithGroup(this.object).subscribe()):(this.object={groupId:this.Id,notificationId:e.id},this.notificationService.deleteGroupNotification(this.object).subscribe())}}return t.\u0275fac=function(e){return new(e||t)(l.Zb(q.a),l.Zb(d.a),l.Zb(n.c),l.Zb(T.a),l.Zb(G.f),l.Zb(G.b),l.Zb(G.a,8))},t.\u0275cmp=l.Tb({type:t,selectors:[["app-notification-group"]],viewQuery:function(t,e){var c;1&t&&(l.Sc(I.a,!0),l.Sc(k.a,!0)),2&t&&(l.Cc(c=l.oc())&&(e.sort=c.first),l.Cc(c=l.oc())&&(e.paginator=c.first))},decls:23,vars:3,consts:[[1,"custom-style"],[1,"table-title"],[3,"click"],["mat-table","","matTableExporter","",1,"mat-elevation-z8",3,"dataSource"],["matColumnDef","select"],["mat-header-cell","",4,"matHeaderCellDef"],["mat-cell","",4,"matCellDef"],["matColumnDef","name"],["matColumnDef","always"],["matColumnDef","identifier"],["class","header-row","mat-header-row","",4,"matHeaderRowDef"],["class","row","mat-row","",4,"matRowDef","matRowDefColumns"],["mat-header-cell",""],["mat-cell",""],[3,"checked","change"],["mat-header-row","",1,"header-row"],["mat-row","",1,"row"]],template:function(t,e){1&t&&(l.fc(0,"div",0),l.fc(1,"div",1),l.fc(2,"h3"),l.Oc(3,"Notification Table"),l.ec(),l.fc(4,"span"),l.fc(5,"a"),l.fc(6,"mat-icon",2),l.nc("click",(function(){return e.close()})),l.Oc(7,"X"),l.ec(),l.ec(),l.ec(),l.ec(),l.fc(8,"table",3),l.dc(9,4),l.Nc(10,E,1,0,"th",5),l.Nc(11,z,2,1,"td",6),l.cc(),l.dc(12,7),l.Nc(13,U,2,0,"th",5),l.Nc(14,W,2,1,"td",6),l.cc(),l.dc(15,8),l.Nc(16,X,2,0,"th",5),l.Nc(17,J,2,1,"td",6),l.cc(),l.dc(18,9),l.Nc(19,L,2,0,"th",5),l.Nc(20,Q,2,1,"td",6),l.cc(),l.Nc(21,K,1,0,"tr",10),l.Nc(22,Y,1,0,"tr",11),l.ec(),l.ec()),2&t&&(l.Ob(8),l.xc("dataSource",e.dataSource),l.Ob(13),l.xc("matHeaderRowDef",e.displayedColumns),l.Ob(1),l.xc("matRowDefColumns",e.displayedColumns))},directives:[g.a,A.j,a.a,A.c,A.e,A.b,A.g,A.i,A.d,A.a,F.a,A.f,A.h],styles:["h3[_ngcontent-%COMP%]{float:left;margin-right:60%;margin-left:5%}"]}),t})(),et=(()=>{class t{constructor(){}ngOnInit(){}}return t.\u0275fac=function(e){return new(e||t)},t.\u0275cmp=l.Tb({type:t,selectors:[["app-maintenance-group"]],decls:2,vars:0,template:function(t,e){1&t&&(l.fc(0,"p"),l.Oc(1,"maintenance-group works!"),l.ec())},styles:[""]}),t})(),ct=(()=>{class t{constructor(){}ngOnInit(){}}return t.\u0275fac=function(e){return new(e||t)},t.\u0275cmp=l.Tb({type:t,selectors:[["app-attribute-group"]],decls:2,vars:0,template:function(t,e){1&t&&(l.fc(0,"p"),l.Oc(1,"attribute-group works!"),l.ec())},styles:[""]}),t})();var it=c("9dHA");function ot(t,e){1&t&&l.ac(0,"th",12)}function rt(t,e){if(1&t){const t=l.gc();l.fc(0,"td",13),l.fc(1,"mat-checkbox",14),l.nc("change",(function(c){l.Fc(t);const i=e.$implicit;return l.rc().check(c.checked,i)})),l.ec(),l.ec()}if(2&t){const t=e.$implicit,c=l.rc();l.Ob(1),l.xc("checked",c.checkState(t.id))}}function at(t,e){1&t&&(l.fc(0,"th",12),l.Oc(1,"Type"),l.ec())}function nt(t,e){if(1&t&&(l.fc(0,"td",13),l.Oc(1),l.ec()),2&t){const t=e.$implicit;l.Ob(1),l.Pc(t.type)}}function st(t,e){1&t&&(l.fc(0,"th",12),l.Oc(1,"Description"),l.ec())}function lt(t,e){if(1&t&&(l.fc(0,"td",13),l.Oc(1),l.ec()),2&t){const t=e.$implicit;l.Ob(1),l.Pc(t.description)}}function dt(t,e){1&t&&(l.fc(0,"th",12),l.Oc(1,"Send SMS"),l.ec())}function ut(t,e){if(1&t&&(l.fc(0,"td",13),l.Oc(1),l.ec()),2&t){const t=e.$implicit,c=l.rc();l.Ob(1),l.Pc(null==c.sms[t.textchannel]?null:c.sms[t.textchannel].value)}}function ft(t,e){1&t&&l.ac(0,"tr",15)}function mt(t,e){1&t&&l.ac(0,"tr",16)}let ht=(()=>{class t{constructor(t,e,c,i,o,r,a){this.commandService=t,this.snackBar=e,this.router=c,this.dialogService=i,this.dialogRef=o,this.dialog=r,this.data=a,this.dataSource=new A.k([]),this.displayedColumns=["select","name","description","sms"],this.sms=[{id:1,value:"true"},{id:0,value:"false"}],this.Id=a.pageValue}ngOnInit(){this.getAllCommand(),this.getAllCommandByGroup()}getAllCommand(){this.commandService.getAllCommand().subscribe(t=>{this.commands=t,this.dataSource=new A.k(t),setTimeout(()=>this.dataSource.sort=this.sort),setTimeout(()=>this.dataSource.paginator=this.paginator)})}getAllCommandByGroup(){this.commandService.getCommandByGroupId(this.Id).subscribe(t=>{console.log(t),this.groupCommands=t,this.groupCommands.forEach(t=>{this.groupCommands.push(t.commandid)})})}close(){this.dialogRef.close()}checkState(t){if(this.groupCommands)return this.groupCommands.indexOf(t)>-1}check(t,e){t?(this.object={groupId:this.Id,commandId:e.id},this.commandService.addCommandWithGroup(this.object).subscribe()):(this.object={groupId:this.Id,commandId:e.id},this.commandService.deleteGroupCommand(this.object).subscribe())}}return t.\u0275fac=function(e){return new(e||t)(l.Zb(it.a),l.Zb(d.a),l.Zb(n.c),l.Zb(T.a),l.Zb(G.f),l.Zb(G.b),l.Zb(G.a,8))},t.\u0275cmp=l.Tb({type:t,selectors:[["app-command-group"]],viewQuery:function(t,e){var c;1&t&&(l.Sc(I.a,!0),l.Sc(k.a,!0)),2&t&&(l.Cc(c=l.oc())&&(e.sort=c.first),l.Cc(c=l.oc())&&(e.paginator=c.first))},decls:23,vars:3,consts:[[1,"custom-style"],[1,"table-title"],[3,"click"],["mat-table","","matTableExporter","",1,"mat-elevation-z8",3,"dataSource"],["matColumnDef","select"],["mat-header-cell","",4,"matHeaderCellDef"],["mat-cell","",4,"matCellDef"],["matColumnDef","name"],["matColumnDef","description"],["matColumnDef","sms"],["class","header-row","mat-header-row","",4,"matHeaderRowDef"],["class","row","mat-row","",4,"matRowDef","matRowDefColumns"],["mat-header-cell",""],["mat-cell",""],[3,"checked","change"],["mat-header-row","",1,"header-row"],["mat-row","",1,"row"]],template:function(t,e){1&t&&(l.fc(0,"div",0),l.fc(1,"div",1),l.fc(2,"h3"),l.Oc(3,"Command Table"),l.ec(),l.fc(4,"span"),l.fc(5,"a"),l.fc(6,"mat-icon",2),l.nc("click",(function(){return e.close()})),l.Oc(7,"X"),l.ec(),l.ec(),l.ec(),l.ec(),l.fc(8,"table",3),l.dc(9,4),l.Nc(10,ot,1,0,"th",5),l.Nc(11,rt,2,1,"td",6),l.cc(),l.dc(12,7),l.Nc(13,at,2,0,"th",5),l.Nc(14,nt,2,1,"td",6),l.cc(),l.dc(15,8),l.Nc(16,st,2,0,"th",5),l.Nc(17,lt,2,1,"td",6),l.cc(),l.dc(18,9),l.Nc(19,dt,2,0,"th",5),l.Nc(20,ut,2,1,"td",6),l.cc(),l.Nc(21,ft,1,0,"tr",10),l.Nc(22,mt,1,0,"tr",11),l.ec(),l.ec()),2&t&&(l.Ob(8),l.xc("dataSource",e.dataSource),l.Ob(13),l.xc("matHeaderRowDef",e.displayedColumns),l.Ob(1),l.xc("matRowDefColumns",e.displayedColumns))},directives:[g.a,A.j,a.a,A.c,A.e,A.b,A.g,A.i,A.d,A.a,F.a,A.f,A.h],styles:["h3[_ngcontent-%COMP%]{float:left;margin-right:60%;margin-left:5%}"]}),t})();var pt=c("STbY");function gt(t,e){1&t&&(l.fc(0,"th",17),l.Oc(1,"Action"),l.ec())}function bt(t,e){if(1&t){const t=l.gc();l.fc(0,"button",24),l.fc(1,"mat-icon",25),l.nc("click",(function(){l.Fc(t);const e=l.rc().$implicit;return l.rc().editGroup(e)})),l.Oc(2,"edit"),l.ec(),l.ec()}}function vt(t,e){if(1&t){const t=l.gc();l.fc(0,"button",26),l.fc(1,"mat-icon",25),l.nc("click",(function(){l.Fc(t);const e=l.rc().$implicit;return l.rc().deleteGroup(e)})),l.Oc(2,"delete_outline"),l.ec(),l.ec()}}function Ot(t,e){if(1&t&&(l.fc(0,"button",27),l.fc(1,"mat-icon"),l.Oc(2,"settings"),l.ec(),l.ec()),2&t){l.rc();const t=l.Dc(5);l.xc("matMenuTriggerFor",t)}}function yt(t,e){if(1&t){const t=l.gc();l.fc(0,"td",18),l.Nc(1,bt,3,0,"button",19),l.Nc(2,vt,3,0,"button",20),l.Nc(3,Ot,3,1,"button",21),l.fc(4,"mat-menu",null,22),l.fc(6,"button",23),l.nc("click",(function(){l.Fc(t);const c=e.$implicit;return l.rc().openDriverModal(c)})),l.Oc(7,"Drivers"),l.ec(),l.fc(8,"button",23),l.nc("click",(function(){l.Fc(t);const c=e.$implicit;return l.rc().openNotificationModal(c)})),l.Oc(9,"Notifications"),l.ec(),l.fc(10,"button",23),l.nc("click",(function(){l.Fc(t);const c=e.$implicit;return l.rc().openMaintenanceModal(c)})),l.Oc(11,"Maintenance"),l.ec(),l.fc(12,"button",23),l.nc("click",(function(){l.Fc(t);const c=e.$implicit;return l.rc().openAttributeModal(c)})),l.Oc(13,"Computed Attributes"),l.ec(),l.fc(14,"button",23),l.nc("click",(function(){l.Fc(t);const c=e.$implicit;return l.rc().openCommandModal(c)})),l.Oc(15,"Saved Commands"),l.ec(),l.ec(),l.ec()}if(2&t){const t=l.rc();l.Ob(1),l.xc("ngIf",1==t.assigedRole.includes("group_edit")),l.Ob(1),l.xc("ngIf",1==t.assigedRole.includes("group_delete")),l.Ob(1),l.xc("ngIf",1==t.assigedRole.includes("group_setting"))}}function Ct(t,e){1&t&&(l.fc(0,"th",28),l.Oc(1,"ID"),l.ec())}function xt(t,e){if(1&t&&(l.fc(0,"td",18),l.Oc(1),l.ec()),2&t){const t=e.$implicit;l.Ob(1),l.Pc(t.id)}}function Dt(t,e){1&t&&(l.fc(0,"th",28),l.Oc(1,"Name"),l.ec())}function wt(t,e){if(1&t&&(l.fc(0,"td",18),l.Oc(1),l.ec()),2&t){const t=e.$implicit;l.Ob(1),l.Pc(t.name)}}function Nt(t,e){1&t&&l.ac(0,"tr",29)}function St(t,e){1&t&&l.ac(0,"tr",30)}const kt=function(){return[0]},It=function(){return[25,50,100]};function At(t,e){1&t&&(l.fc(0,"div",20),l.Oc(1," Name is required"),l.ec())}function Gt(t,e){if(1&t&&(l.fc(0,"div",18),l.Nc(1,At,2,0,"div",19),l.ec()),2&t){const t=l.rc();l.Ob(1),l.xc("ngIf",t.myform.get("groupName").errors.required)}}function Mt(t,e){if(1&t&&(l.fc(0,"mat-option",21),l.Oc(1),l.ec()),2&t){const t=e.$implicit;l.xc("value",t.id),l.Ob(1),l.Qc(" ",t.value," ")}}function Tt(t,e){if(1&t&&(l.fc(0,"mat-option",21),l.Oc(1),l.ec()),2&t){const t=e.$implicit;l.xc("value",t.id),l.Ob(1),l.Qc(" ",t.value," ")}}function Ft(t,e){if(1&t){const t=l.gc();l.fc(0,"div",28),l.fc(1,"a"),l.fc(2,"mat-icon",15),l.nc("click",(function(){l.Fc(t);const e=l.rc().index;return l.rc().removeAttributes(e)})),l.Oc(3,"clear"),l.ec(),l.ec(),l.ec()}}function Pt(t,e){if(1&t&&(l.fc(0,"div",22),l.fc(1,"div",23),l.fc(2,"mat-form-field",11),l.fc(3,"mat-label"),l.Oc(4,"Name"),l.ec(),l.fc(5,"mat-select",24),l.Nc(6,Tt,2,2,"mat-option",13),l.ec(),l.ec(),l.fc(7,"mat-form-field",25),l.ac(8,"input",26),l.ec(),l.Nc(9,Ft,4,0,"div",27),l.ec(),l.ec()),2&t){const t=e.index,c=l.rc();l.Ob(1),l.xc("formArrayName",t),l.Ob(4),l.xc("id","name"+t),l.Ob(1),l.xc("ngForOf",c.nameTypes),l.Ob(2),l.xc("id","value"+t),l.Ob(1),l.xc("ngIf",c.myform.get("attributes").length>1)}}const Rt=[{path:"add",component:S,canActivate:[s.a],data:{roles:"group_add"}},{path:"list",component:(()=>{class t{constructor(t,e,c,i,o){this.groupService=t,this.snackBar=e,this.router=c,this.dialogService=i,this.dialog=o,this.assigedRole=[],this.show=!0,this.idColumn="id",this.dataSource=new A.k([]),this.states=[{id:0,value:"Inactive"},{id:1,value:"Active"}],this.displayedColumns=["action","id","name"],this.assigedRole=JSON.parse(localStorage.getItem("rolesData"))}ngOnInit(){this.getAllGroup()}getAllGroup(){this.groupService.getAllGroup().subscribe(t=>{this.groups=t,this.dataSource=new A.k(t),setTimeout(()=>this.dataSource.sort=this.sort),setTimeout(()=>this.dataSource.paginator=this.paginator)})}editGroup(t){this.router.navigate(["admin/traccar/group/edit",t.id])}deleteGroup(t){this.dialogService.openConfirmDialog().afterClosed().subscribe(e=>{e&&(this.groupService.deleteGroup(t.id).subscribe(),this.deleteRowDataTable(t.id,this.idColumn,this.paginator,this.dataSource),this.openSnackBar())})}deleteRowDataTable(t,e,c,i){this.groups=i.data;const o=this.groups.findIndex(c=>c[e]===t);i.data.splice(o,1),i.paginator=c}openSnackBar(){this.snackBar.open("Deleted!!","Close",{duration:2e3,verticalPosition:"top",horizontalPosition:"end"})}applyFilter(t){this.dataSource.filter=t.trim().toLowerCase()}openDriverModal(t){console.log(t.id);const e=new G.d;e.disableClose=!0,e.width="600px",e.height="480px",this.dialog.open(H,{width:"580px",height:"460px",data:{pageValue:t.id}}).afterClosed().subscribe(t=>{})}openNotificationModal(t){console.log(t.id);const e=new G.d;e.disableClose=!0,e.width="600px",e.height="480px",this.dialog.open(tt,{width:"580px",height:"460px",data:{pageValue:t.id}}).afterClosed().subscribe(t=>{})}openMaintenanceModal(t){console.log(t.id);const e=new G.d;e.disableClose=!0,e.width="600px",e.height="480px",this.dialog.open(et,{width:"580px",height:"460px",data:{pageValue:t.id}}).afterClosed().subscribe(t=>{})}openAttributeModal(t){console.log(t.id);const e=new G.d;e.disableClose=!0,e.width="600px",e.height="480px",this.dialog.open(ct,{width:"580px",height:"460px",data:{pageValue:t.id}}).afterClosed().subscribe(t=>{})}openCommandModal(t){console.log(t.id);const e=new G.d;e.disableClose=!0,e.width="600px",e.height="480px",this.dialog.open(ht,{width:"580px",height:"460px",data:{pageValue:t.id}}).afterClosed().subscribe(t=>{})}}return t.\u0275fac=function(e){return new(e||t)(l.Zb(u.a),l.Zb(d.a),l.Zb(n.c),l.Zb(T.a),l.Zb(G.b))},t.\u0275cmp=l.Tb({type:t,selectors:[["app-group-list"]],viewQuery:function(t,e){var c;1&t&&(l.Sc(I.a,!0),l.Sc(k.a,!0)),2&t&&(l.Cc(c=l.oc())&&(e.sort=c.first),l.Cc(c=l.oc())&&(e.paginator=c.first))},decls:23,vars:8,consts:[[1,"custom-style"],[1,"table-title"],[1,"search-div"],[1,"filter"],["matInput","","placeholder","search","autocomplete","off",3,"keyup"],["mat-button","",1,"mat-raised-button","mat-primary",3,"click"],["mat-table","","matTableExporter","","matSort","",1,"mat-elevation-z8",3,"dataSource","hiddenColumns"],["exporter","matTableExporter"],["matColumnDef","action"],["mat-header-cell","",4,"matHeaderCellDef"],["mat-cell","",4,"matCellDef"],["matColumnDef","id"],["mat-header-cell","","mat-sort-header","",4,"matHeaderCellDef"],["matColumnDef","name"],["class","header-row","mat-header-row","",4,"matHeaderRowDef"],["class","row","mat-row","",4,"matRowDef","matRowDefColumns"],[3,"pageSizeOptions","pageSize"],["mat-header-cell",""],["mat-cell",""],["mat-icon-button","",4,"ngIf"],["mat-icon-button","","color","warn",4,"ngIf"],["mat-icon-button","","color","info",3,"matMenuTriggerFor",4,"ngIf"],["setting","matMenu"],["mat-menu-item","",3,"click"],["mat-icon-button",""],[3,"click"],["mat-icon-button","","color","warn"],["mat-icon-button","","color","info",3,"matMenuTriggerFor"],["mat-header-cell","","mat-sort-header",""],["mat-header-row","",1,"header-row"],["mat-row","",1,"row"]],template:function(t,e){if(1&t){const t=l.gc();l.fc(0,"div",0),l.fc(1,"div",1),l.fc(2,"h3"),l.Oc(3,"Group Table"),l.ec(),l.ec(),l.fc(4,"div",2),l.fc(5,"mat-form-field",3),l.fc(6,"input",4),l.nc("keyup",(function(t){return e.applyFilter(t.target.value)})),l.ec(),l.ec(),l.fc(7,"button",5),l.nc("click",(function(){return l.Fc(t),l.Dc(10).exportTable("csv",{fileName:"group"})})),l.Oc(8," CSV "),l.ec(),l.ec(),l.fc(9,"table",6,7),l.dc(11,8),l.Nc(12,gt,2,0,"th",9),l.Nc(13,yt,16,3,"td",10),l.cc(),l.dc(14,11),l.Nc(15,Ct,2,0,"th",12),l.Nc(16,xt,2,1,"td",10),l.cc(),l.dc(17,13),l.Nc(18,Dt,2,0,"th",12),l.Nc(19,wt,2,1,"td",10),l.cc(),l.Nc(20,Nt,1,0,"tr",14),l.Nc(21,St,1,0,"tr",15),l.ec(),l.ac(22,"mat-paginator",16),l.ec()}2&t&&(l.Ob(9),l.xc("dataSource",e.dataSource)("hiddenColumns",l.yc(6,kt)),l.Ob(11),l.xc("matHeaderRowDef",e.displayedColumns),l.Ob(1),l.xc("matRowDefColumns",e.displayedColumns),l.Ob(1),l.xc("pageSizeOptions",l.yc(7,It))("pageSize",25))},directives:[m.c,h.b,v.b,A.j,a.a,I.a,A.c,A.e,A.b,A.g,A.i,k.a,A.d,A.a,i.l,pt.d,pt.a,g.a,pt.c,I.b,A.f,A.h],styles:[".mat-column-action[_ngcontent-%COMP%]{width:30%!important}.filter[_ngcontent-%COMP%]{width:15%;margin-right:50%}"]}),t})(),canActivate:[s.a],data:{roles:"group_list"}},{path:"edit/:id",component:(()=>{class t{constructor(t,e,c,i,o){this.fb=t,this.router=e,this.snackBar=c,this.groupService=i,this.route=o,this.object={},this.att=[],this.groups=[],this.submitted=!1,this.states=[{id:1,value:"Active"},{id:0,value:"Inactive"}],this.nameTypes=[{id:1,value:"TimeZone"},{id:2,value:"Speed Limit"},{id:3,value:"odometer"}],this.step=0}setStep(t){this.step=t}ngOnInit(){this.myform=this.fb.group({groupName:["",[o.s.required]],groupid:[],attributes:this.fb.array([])}),this.route.paramMap.subscribe(t=>{this.Id=t.get("id"),this.edit(this.Id)})}assignAttributes(){return this.fb.group({name:[""],value:[""]})}get fArray(){return this.myform.get("attributes")}addassignAttributes(){this.fArray.push(this.assignAttributes())}removeAttributes(t){this.myform.get("attributes").removeAt(t)}edit(t){this.groupService.getGroupById(t).subscribe(t=>{this.d=t,console.log(this.d);var e=JSON.parse(this.d.attributes),c=Object.entries(e);this.attr=[],c.forEach(t=>{this.attr.push({name:t[0],value:t[1]})}),this.d.attributes=this.attr,console.log(this.d.attributes),this.setData(this.d)})}setData(t){this.myform.patchValue({groupName:t.name,groupid:t.groupid}),this.createdBy=t.created_by,this.setAttributes()}setAttributes(){let t=this.myform.controls.attributes;this.d.attributes.forEach(e=>{t.push(this.fb.group(e))})}openSnackBar(){this.snackBar.open("Updated added!!","Close",{duration:2e3,verticalPosition:"top",horizontalPosition:"end"})}updateGroup(){this.submitted=!0,this.myform.invalid||(this.myform.value.attributes.forEach(t=>{this.object[t.name]=t.value,console.log(this.myform.value.attributes)}),this.myform.value.attributes=this.object,this.userData=JSON.parse(localStorage.getItem("userData")),this.myform.value.updated_by=this.userData.id,this.myform.value.created_by=this.createdBy,this.myform.value.updated_time=new Date,console.log(this.myform.value),this.groupService.updateGroup(this.Id,this.myform.value).subscribe(t=>{this.openSnackBar(),this.router.navigate(["/admin/traccar/group/list"])}))}}return t.\u0275fac=function(e){return new(e||t)(l.Zb(o.e),l.Zb(n.c),l.Zb(d.a),l.Zb(u.a),l.Zb(n.a))},t.\u0275cmp=l.Tb({type:t,selectors:[["app-group-edit"]],decls:40,vars:6,consts:[[1,"customStyle"],[1,"title-style"],[3,"formGroup"],[1,"main"],[1,"mainContent"],[1,"full"],["trim","blur","matInput","","placeholder","Name","formControlName","groupName","autocomplete","off","required",""],["class","feedback",4,"ngIf"],[1,"optionalContent"],[1,"example-headers-align"],["hideToggle","",3,"expanded","opened"],["required","",1,"half"],["formControlName","groupid"],[3,"value",4,"ngFor","ngForOf"],["formArrayName","attributes",4,"ngFor","ngForOf"],[3,"click"],[1,"button"],["mat-stroked-button","","color","primary",1,"btn-block",3,"click"],[1,"feedback"],["class","red",4,"ngIf"],[1,"red"],[3,"value"],["formArrayName","attributes"],[3,"formArrayName"],["formControlName","name",3,"id"],[1,"half"],["trim","blur","matInput","","placeholder","Value","formControlName","value","autocomplete","off",3,"id"],["class","delAssigns",4,"ngIf"],[1,"delAssigns"]],template:function(t,e){1&t&&(l.fc(0,"mat-card",0),l.fc(1,"div",1),l.fc(2,"mat-card-title"),l.Oc(3,"Group Update Form"),l.ec(),l.ec(),l.fc(4,"mat-card-content"),l.fc(5,"form",2),l.fc(6,"div",3),l.fc(7,"div",4),l.fc(8,"mat-form-field",5),l.ac(9,"input",6),l.ec(),l.Nc(10,Gt,2,1,"div",7),l.ec(),l.fc(11,"div",8),l.fc(12,"mat-accordion",9),l.fc(13,"mat-expansion-panel",10),l.nc("opened",(function(){return e.setStep(1)})),l.fc(14,"mat-expansion-panel-header"),l.fc(15,"mat-panel-title"),l.fc(16,"mat-icon"),l.Oc(17,"add"),l.ec(),l.Oc(18," Extra "),l.ec(),l.ec(),l.fc(19,"mat-form-field",11),l.fc(20,"mat-label"),l.Oc(21,"Group"),l.ec(),l.fc(22,"mat-select",12),l.Nc(23,Mt,2,2,"mat-option",13),l.ec(),l.ec(),l.ec(),l.ec(),l.fc(24,"mat-accordion",9),l.fc(25,"mat-expansion-panel",10),l.nc("opened",(function(){return e.setStep(3)})),l.fc(26,"mat-expansion-panel-header"),l.fc(27,"mat-panel-title"),l.fc(28,"mat-icon"),l.Oc(29,"add"),l.ec(),l.Oc(30," Attributes "),l.ec(),l.ec(),l.Nc(31,Pt,10,5,"div",14),l.fc(32,"button",15),l.nc("click",(function(){return e.addassignAttributes()})),l.fc(33,"mat-icon"),l.Oc(34,"add"),l.ec(),l.ec(),l.ec(),l.ec(),l.ec(),l.ec(),l.ec(),l.ec(),l.fc(35,"mat-card-actions",16),l.fc(36,"button",17),l.nc("click",(function(){return e.updateGroup()})),l.Oc(37," Update "),l.ec(),l.fc(38,"p"),l.Oc(39,"Note: Field marked with * is Mandatory"),l.ec(),l.ec(),l.ec()),2&t&&(l.Ob(5),l.xc("formGroup",e.myform),l.Ob(5),l.xc("ngIf",e.submitted&&e.myform.get("groupName").errors),l.Ob(3),l.xc("expanded",1===e.step),l.Ob(10),l.xc("ngForOf",e.groups),l.Ob(2),l.xc("expanded",3===e.step),l.Ob(6),l.xc("ngForOf",e.myform.get("attributes").controls))},directives:[f.a,f.f,f.c,o.t,o.n,o.g,m.c,h.b,o.c,o.m,o.f,o.r,i.l,p.a,p.c,p.d,p.e,g.a,m.g,b.a,i.k,f.b,v.b,O.o,o.d],styles:[""]}),t})(),canActivate:[s.a],data:{roles:"group_edit"}}];let Zt=(()=>{class t{}return t.\u0275mod=l.Xb({type:t}),t.\u0275inj=l.Wb({factory:function(e){return new(e||t)},imports:[[n.f.forChild(Rt)],n.f]}),t})(),Bt=(()=>{class t{}return t.\u0275mod=l.Xb({type:t}),t.\u0275inj=l.Wb({factory:function(e){return new(e||t)},imports:[[i.c,Zt,r.a,o.q,o.i,a.b]]}),t})()},H0VJ:function(t,e,c){"use strict";c.d(e,"a",(function(){return s}));var i=c("fXoL"),o=c("0IaG"),r=c("NFeN"),a=c("bTqV");let n=(()=>{class t{constructor(t){this.dialogRef=t}ngOnInit(){}closeDialog(){this.dialogRef.close(!1)}}return t.\u0275fac=function(e){return new(e||t)(i.Zb(o.f))},t.\u0275cmp=i.Tb({type:t,selectors:[["app-mat-dialog"]],decls:11,vars:2,consts:[[1,"content-container"],["id","close-button",3,"click"],[1,"content-span"],["mat-flat-button","","id","no-button",3,"mat-dialog-close"],["mat-flat-button","","id","yes-button","color","warn",3,"mat-dialog-close"]],template:function(t,e){1&t&&(i.fc(0,"div"),i.fc(1,"div",0),i.fc(2,"mat-icon",1),i.nc("click",(function(){return e.closeDialog()})),i.Oc(3,"close"),i.ec(),i.fc(4,"div",2),i.Oc(5,"Are you sure to delete this record ?"),i.ec(),i.ec(),i.fc(6,"div"),i.fc(7,"button",3),i.Oc(8,"No"),i.ec(),i.fc(9,"button",4),i.Oc(10,"Yes"),i.ec(),i.ec(),i.ec()),2&t&&(i.Ob(7),i.xc("mat-dialog-close",!1),i.Ob(2),i.xc("mat-dialog-close",!0))},directives:[r.a,a.b,o.c],styles:["#close-button[_ngcontent-%COMP%]{margin-left:90%;cursor:pointer}.content-span[_ngcontent-%COMP%]{margin-left:20px;margin-bottom:20px}#no-button[_ngcontent-%COMP%]{width:30%;margin-left:7%;margin-right:25%;background-color:#ff0}#yes-button[_ngcontent-%COMP%]{width:30%}"]}),t})(),s=(()=>{class t{constructor(t){this.dialog=t}openConfirmDialog(){return this.dialog.open(n,{width:"300px",disableClose:!0,position:{top:"20px"}})}}return t.\u0275fac=function(e){return new(e||t)(i.jc(o.b))},t.\u0275prov=i.Vb({token:t,factory:t.\u0275fac,providedIn:"root"}),t})()}}]);