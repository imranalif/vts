(window.webpackJsonp=window.webpackJsonp||[]).push([[8],{"+OO2":function(t,e,c){"use strict";c.r(e),c.d(e,"CustomerModule",(function(){return _t}));var i=c("ofXK"),r=c("3Pt+"),o=c("jAig"),s=c("KUt4"),n=c("YUcS"),a=c("tyNb"),u=c("M9IT"),l=c("Dh3D"),d=c("+0xr"),m=c("0IaG"),h=c("fXoL"),f=c("XCAU"),p=c("dNgK"),g=c("H0VJ"),b=c("NFeN"),v=c("bSwM");function C(t,e){1&t&&h.ac(0,"th",11)}function D(t,e){if(1&t){const t=h.gc();h.fc(0,"td",12),h.fc(1,"mat-checkbox",13),h.nc("change",(function(c){h.Fc(t);const i=e.$implicit;return h.rc().check(c.checked,i)})),h.ec(),h.ec()}if(2&t){const t=e.$implicit,c=h.rc();h.Ob(1),h.xc("checked",c.checkState(t.id))}}function O(t,e){1&t&&(h.fc(0,"th",11),h.Oc(1,"Name"),h.ec())}function y(t,e){if(1&t&&(h.fc(0,"td",12),h.Oc(1),h.ec()),2&t){const t=e.$implicit;h.Ob(1),h.Pc(t.name)}}function x(t,e){1&t&&(h.fc(0,"th",11),h.Oc(1,"Identifier"),h.ec())}function w(t,e){if(1&t&&(h.fc(0,"td",12),h.Oc(1),h.ec()),2&t){const t=e.$implicit;h.Ob(1),h.Pc(t.uniqueid)}}function S(t,e){1&t&&h.ac(0,"tr",14)}function _(t,e){1&t&&h.ac(0,"tr",15)}let P=(()=>{class t{constructor(t,e,c,i,r,o,s){this.devcieService=t,this.snackBar=e,this.router=c,this.dialogService=i,this.dialogRef=r,this.dialog=o,this.data=s,this.source=[],this.dataSource=new d.k([]),this.displayedColumns=["select","name","identifier"],this.sms=[{id:1,value:"true"},{id:0,value:"false"}],this.Id=s.pageValue}ngOnInit(){this.getAllDevice(),this.getDeviceByCustomer()}getAllDevice(){this.devcieService.getAllDevice().subscribe(t=>{console.log(t),this.devices=t,this.devices.forEach(t=>{this.source.push({id:t.id,name:t.name,identifier:t.uniqueid}),this.dataSource=new d.k(this.source),setTimeout(()=>this.dataSource.sort=this.sort),setTimeout(()=>this.dataSource.paginator=this.paginator)})})}getDeviceByCustomer(){this.devcieService.getDeviceByCustomerId(this.Id).subscribe(t=>{console.log(t),this.customerDevices=t,this.customerDevices.length>0&&this.customerDevices.forEach(t=>{this.source.push({id:t.id,name:t.name,identifier:t.uniqueid}),console.log(this.source),this.dataSource=new d.k(this.source),setTimeout(()=>this.dataSource.sort=this.sort),setTimeout(()=>this.dataSource.paginator=this.paginator),this.customerDevices.push(t.id)})})}close(){this.dialogRef.close()}checkState(t){if(this.customerDevices)return this.customerDevices.indexOf(t)>-1}check(t,e){t?(this.object={customerId:this.Id,deviceId:e.id},this.devcieService.addDeviceWithCustomer(this.object).subscribe()):(this.object={customerId:this.Id,deviceId:e.id},this.devcieService.deleteCustomerDevice(this.object).subscribe())}}return t.\u0275fac=function(e){return new(e||t)(h.Zb(f.a),h.Zb(p.a),h.Zb(a.c),h.Zb(g.a),h.Zb(m.f),h.Zb(m.b),h.Zb(m.a,8))},t.\u0275cmp=h.Tb({type:t,selectors:[["app-customer-device"]],viewQuery:function(t,e){var c;1&t&&(h.Sc(l.a,!0),h.Sc(u.a,!0)),2&t&&(h.Cc(c=h.oc())&&(e.sort=c.first),h.Cc(c=h.oc())&&(e.paginator=c.first))},decls:20,vars:3,consts:[[1,"custom-style"],[1,"table-title"],[3,"click"],["mat-table","","matTableExporter","",1,"mat-elevation-z8",3,"dataSource"],["matColumnDef","select"],["mat-header-cell","",4,"matHeaderCellDef"],["mat-cell","",4,"matCellDef"],["matColumnDef","name"],["matColumnDef","identifier"],["class","header-row","mat-header-row","",4,"matHeaderRowDef"],["class","row","mat-row","",4,"matRowDef","matRowDefColumns"],["mat-header-cell",""],["mat-cell",""],[3,"checked","change"],["mat-header-row","",1,"header-row"],["mat-row","",1,"row"]],template:function(t,e){1&t&&(h.fc(0,"div",0),h.fc(1,"div",1),h.fc(2,"h3"),h.Oc(3,"Device Table"),h.ec(),h.fc(4,"span"),h.fc(5,"a"),h.fc(6,"mat-icon",2),h.nc("click",(function(){return e.close()})),h.Oc(7,"X"),h.ec(),h.ec(),h.ec(),h.ec(),h.fc(8,"table",3),h.dc(9,4),h.Nc(10,C,1,0,"th",5),h.Nc(11,D,2,1,"td",6),h.cc(),h.dc(12,7),h.Nc(13,O,2,0,"th",5),h.Nc(14,y,2,1,"td",6),h.cc(),h.dc(15,8),h.Nc(16,x,2,0,"th",5),h.Nc(17,w,2,1,"td",6),h.cc(),h.Nc(18,S,1,0,"tr",9),h.Nc(19,_,1,0,"tr",10),h.ec(),h.ec()),2&t&&(h.Ob(8),h.xc("dataSource",e.dataSource),h.Ob(10),h.xc("matHeaderRowDef",e.displayedColumns),h.Ob(1),h.xc("matRowDefColumns",e.displayedColumns))},directives:[b.a,d.j,s.a,d.c,d.e,d.b,d.g,d.i,d.d,d.a,v.a,d.f,d.h],styles:["h3[_ngcontent-%COMP%]{float:left;margin-right:60%;margin-left:5%}"]}),t})();var k=c("1jOF");function I(t,e){1&t&&h.ac(0,"th",12)}function M(t,e){if(1&t){const t=h.gc();h.fc(0,"td",13),h.fc(1,"mat-checkbox",14),h.nc("change",(function(c){h.Fc(t);const i=e.$implicit;return h.rc().check(c.checked,i)})),h.ec(),h.ec()}if(2&t){const t=e.$implicit,c=h.rc();h.Ob(1),h.xc("checked",c.checkState(t.id))}}function N(t,e){1&t&&(h.fc(0,"th",12),h.Oc(1,"Name"),h.ec())}function B(t,e){if(1&t&&(h.fc(0,"td",13),h.Oc(1),h.ec()),2&t){const t=e.$implicit;h.Ob(1),h.Pc(t.name)}}function A(t,e){1&t&&(h.fc(0,"th",12),h.Oc(1,"Identifier"),h.ec())}function T(t,e){if(1&t&&(h.fc(0,"td",13),h.Oc(1),h.ec()),2&t){const t=e.$implicit;h.Ob(1),h.Pc(t.uniqueid)}}function R(t,e){1&t&&h.ac(0,"tr",15)}function F(t,e){1&t&&h.ac(0,"tr",16)}function Z(t,e){1&t&&(h.fc(0,"div"),h.Oc(1," No Records Found! "),h.ec())}let j=(()=>{class t{constructor(t,e,c,i,r,o,s){this.driverService=t,this.snackBar=e,this.router=c,this.dialogService=i,this.dialogRef=r,this.dialog=o,this.data=s,this.source=[],this.dataSource=new d.k([]),this.displayedColumns=["select","name","identifier"],this.Id=s.pageValue}ngOnInit(){this.getDriveByCustomer(),this.getAllCustomerDriver()}getAllCustomerDriver(){this.driverService.getAllCustomerDriver().subscribe(t=>{console.log(t),this.drivers=t,this.drivers.forEach(t=>{this.source.push({id:t.id,name:t.name,identifier:t.uniqueid}),this.dataSource=new d.k(this.source),setTimeout(()=>this.dataSource.sort=this.sort),setTimeout(()=>this.dataSource.paginator=this.paginator)})})}getDriveByCustomer(){this.driverService.getDriverByCustomerId(this.Id).subscribe(t=>{console.log(t),this.customerDrivers=t,this.customerDrivers.length>0&&this.customerDrivers.forEach(t=>{this.source.push({id:t.id,name:t.name,identifier:t.uniqueid}),console.log(this.source),this.dataSource=new d.k(this.source),setTimeout(()=>this.dataSource.sort=this.sort),setTimeout(()=>this.dataSource.paginator=this.paginator),this.customerDrivers.push(t.id)})})}close(){this.dialogRef.close()}checkState(t){if(this.customerDrivers)return this.customerDrivers.indexOf(t)>-1}check(t,e){t?(this.object={customerId:this.Id,driverId:e.id},this.driverService.addDriverWithCustomer(this.object).subscribe()):(this.object={customerId:this.Id,driverId:e.id},this.driverService.deleteCustomerDriver(this.object).subscribe())}}return t.\u0275fac=function(e){return new(e||t)(h.Zb(k.a),h.Zb(p.a),h.Zb(a.c),h.Zb(g.a),h.Zb(m.f),h.Zb(m.b),h.Zb(m.a,8))},t.\u0275cmp=h.Tb({type:t,selectors:[["app-customer-driver"]],viewQuery:function(t,e){var c;1&t&&(h.Sc(l.a,!0),h.Sc(u.a,!0)),2&t&&(h.Cc(c=h.oc())&&(e.sort=c.first),h.Cc(c=h.oc())&&(e.paginator=c.first))},decls:21,vars:4,consts:[[1,"custom-style"],[1,"table-title"],[3,"click"],["mat-table","","matTableExporter","",1,"mat-elevation-z8",3,"dataSource"],["matColumnDef","select"],["mat-header-cell","",4,"matHeaderCellDef"],["mat-cell","",4,"matCellDef"],["matColumnDef","name"],["matColumnDef","identifier"],["class","header-row","mat-header-row","",4,"matHeaderRowDef"],["class","row","mat-row","",4,"matRowDef","matRowDefColumns"],[4,"ngIf"],["mat-header-cell",""],["mat-cell",""],[3,"checked","change"],["mat-header-row","",1,"header-row"],["mat-row","",1,"row"]],template:function(t,e){1&t&&(h.fc(0,"div",0),h.fc(1,"div",1),h.fc(2,"h3"),h.Oc(3,"Driver Table"),h.ec(),h.fc(4,"span"),h.fc(5,"a"),h.fc(6,"mat-icon",2),h.nc("click",(function(){return e.close()})),h.Oc(7,"X"),h.ec(),h.ec(),h.ec(),h.ec(),h.fc(8,"table",3),h.dc(9,4),h.Nc(10,I,1,0,"th",5),h.Nc(11,M,2,1,"td",6),h.cc(),h.dc(12,7),h.Nc(13,N,2,0,"th",5),h.Nc(14,B,2,1,"td",6),h.cc(),h.dc(15,8),h.Nc(16,A,2,0,"th",5),h.Nc(17,T,2,1,"td",6),h.cc(),h.Nc(18,R,1,0,"tr",9),h.Nc(19,F,1,0,"tr",10),h.ec(),h.Nc(20,Z,2,0,"div",11),h.ec()),2&t&&(h.Ob(8),h.xc("dataSource",e.dataSource),h.Ob(10),h.xc("matHeaderRowDef",e.displayedColumns),h.Ob(1),h.xc("matRowDefColumns",e.displayedColumns),h.Ob(1),h.xc("ngIf",0===e.dataSource.data.length))},directives:[b.a,d.j,s.a,d.c,d.e,d.b,d.g,d.i,i.l,d.d,d.a,v.a,d.f,d.h],styles:["h3[_ngcontent-%COMP%]{float:left;margin-right:60%;margin-left:5%}"]}),t})();var U=c("M5z4"),L=c("Nl8B"),$=c("XiUz"),q=c("kmnG"),G=c("qFsG"),z=c("bTqV"),V=c("STbY"),W=c("znSr"),X=c("Wp6s"),E=c("Xa2L");function H(t,e){1&t&&(h.fc(0,"th",34),h.Oc(1,"Action"),h.ec())}function J(t,e){if(1&t){const t=h.gc();h.fc(0,"button",40),h.fc(1,"mat-icon",41),h.nc("click",(function(){h.Fc(t);const e=h.rc().$implicit;return h.rc().editCustomer(e.customer_id)})),h.Oc(2,"edit"),h.ec(),h.ec()}}function K(t,e){if(1&t&&(h.fc(0,"button",42),h.fc(1,"mat-icon"),h.Oc(2,"settings"),h.ec(),h.ec()),2&t){h.rc();const t=h.Dc(4);h.xc("matMenuTriggerFor",t)}}function Q(t,e){if(1&t){const t=h.gc();h.fc(0,"td",35),h.Nc(1,J,3,0,"button",36),h.Nc(2,K,3,1,"button",37),h.fc(3,"mat-menu",null,38),h.fc(5,"button",39),h.nc("click",(function(){h.Fc(t);const c=e.$implicit;return h.rc().openDeviceModal(c)})),h.Oc(6,"Devices"),h.ec(),h.fc(7,"button",39),h.nc("click",(function(){h.Fc(t);const c=e.$implicit;return h.rc().openDriverModal(c)})),h.Oc(8,"Drivers"),h.ec(),h.ec(),h.ec()}if(2&t){const t=h.rc();h.Ob(1),h.xc("ngIf",1==t.assigedRole.includes("customer_edit")),h.Ob(1),h.xc("ngIf",1==t.assigedRole.includes("customer_setting"))}}function Y(t,e){1&t&&(h.fc(0,"th",43),h.Oc(1,"#"),h.ec())}function tt(t,e){if(1&t&&(h.fc(0,"td",35),h.Oc(1),h.ec()),2&t){const t=e.$implicit;h.Ob(1),h.Pc(t.id)}}function et(t,e){1&t&&(h.fc(0,"th",43),h.Oc(1,"Customer ID"),h.ec())}function ct(t,e){if(1&t){const t=h.gc();h.fc(0,"td",35),h.fc(1,"a",41),h.nc("click",(function(){h.Fc(t);const c=e.$implicit;return h.rc().editCustomer(c.customer_id)})),h.Oc(2),h.ec(),h.ec()}if(2&t){const t=e.$implicit;h.Ob(2),h.Pc(t.customer_id)}}function it(t,e){1&t&&(h.fc(0,"th",43),h.Oc(1,"Name"),h.ec())}function rt(t,e){if(1&t&&(h.fc(0,"td",35),h.Oc(1),h.ec()),2&t){const t=e.$implicit;h.Ob(1),h.Pc(t.name)}}function ot(t,e){1&t&&(h.fc(0,"th",43),h.Oc(1,"Phone"),h.ec())}function st(t,e){if(1&t&&(h.fc(0,"td",35),h.Oc(1),h.ec()),2&t){const t=e.$implicit;h.Ob(1),h.Pc(t.phone)}}function nt(t,e){1&t&&(h.fc(0,"th",43),h.Oc(1,"Email"),h.ec())}function at(t,e){if(1&t&&(h.fc(0,"td",35),h.Oc(1),h.ec()),2&t){const t=e.$implicit;h.Ob(1),h.Pc(t.email)}}function ut(t,e){1&t&&(h.fc(0,"th",43),h.Oc(1,"Contact Address"),h.ec())}function lt(t,e){if(1&t&&(h.fc(0,"td",35),h.Oc(1),h.ec()),2&t){const t=e.$implicit;h.Ob(1),h.Pc(t.contact_address)}}function dt(t,e){1&t&&(h.fc(0,"th",43),h.Oc(1,"Billing Address"),h.ec())}function mt(t,e){if(1&t&&(h.fc(0,"td",35),h.Oc(1),h.ec()),2&t){const t=e.$implicit;h.Ob(1),h.Pc(t.billing_address)}}function ht(t,e){1&t&&h.ac(0,"tr",44)}function ft(t,e){1&t&&h.ac(0,"tr",45)}const pt=function(t){return{active:t}};function gt(t,e){if(1&t){const t=h.gc();h.fc(0,"li",47),h.fc(1,"a",41),h.nc("click",(function(){h.Fc(t);const c=e.$implicit;return h.rc(2).getCustomerByPage(c)})),h.Oc(2),h.ec(),h.ec()}if(2&t){const t=e.$implicit,c=h.rc(2);h.xc("ngClass",h.zc(2,pt,c.pager.currentPage===t)),h.Ob(2),h.Pc(t)}}const bt=function(t){return{disabled:t}};function vt(t,e){if(1&t){const t=h.gc();h.fc(0,"ul",46),h.fc(1,"li",47),h.fc(2,"a",41),h.nc("click",(function(){h.Fc(t);const e=h.rc();return e.getCustomerByPage(e.pager.currentPage-1)})),h.Oc(3,"\xab"),h.ec(),h.ec(),h.Nc(4,gt,3,4,"li",48),h.fc(5,"li",47),h.fc(6,"a",41),h.nc("click",(function(){h.Fc(t);const e=h.rc();return e.getCustomerByPage(e.pager.currentPage+1)})),h.Oc(7,"\xbb"),h.ec(),h.ec(),h.ec()}if(2&t){const t=h.rc();h.Ob(1),h.xc("ngClass",h.zc(3,bt,1===t.pager.currentPage)),h.Ob(3),h.xc("ngForOf",t.pager.pages),h.Ob(1),h.xc("ngClass",h.zc(5,bt,2===t.pager.currentPage))}}function Ct(t,e){1&t&&(h.fc(0,"mat-card",49),h.ac(1,"mat-progress-spinner",50),h.ec())}const Dt=function(){return[0]};let Ot=(()=>{class t{constructor(t,e,c,i,r,o,s){this.customerService=t,this.snackBar=e,this.router=c,this.dialogService=i,this.dialog=r,this.pagination=o,this.fb=s,this.currentPage=1,this.params={},this.pager=[],this.record=[],this.assigedRole=[],this.dataSource=new d.k([]),this.isLoading=!0,this.displayedColumns=["action","id","customer_id","name","email","phone","contact_address","billing_address"],this.assigedRole=JSON.parse(localStorage.getItem("rolesData"))}ngOnInit(){this.myform=this.fb.group({customer_id:[""],name:[""],email:[""],phone:[""]}),this.getAllCustomer()}getAllCustomerTest(){this.customerService.getAllCustomer(this.params).subscribe(t=>{this.customers=t,this.dataSource=new d.k(this.customers),setTimeout(()=>this.dataSource.sort=this.sort),setTimeout(()=>this.dataSource.paginator=this.paginator),this.isLoading=!1})}getAllCustomer(){this.params={currentPage:this.currentPage},this.customerService.getAllCustomer(this.params).subscribe(t=>{this.customers=t.rows,this.record=t.count,console.log(t.count),this.pager=this.pagination.paginate(this.record),console.log(this.pager.totalPages),this.dataSource=new d.k(this.customers),setTimeout(()=>this.dataSource.sort=this.sort),setTimeout(()=>this.dataSource.paginator=this.paginator),this.isLoading=!1})}getCustomerByPage(t){this.page=t,this.page>this.pager.totalPages||(this.params={currentPage:t,name:this.myform.value.name,customer_id:this.myform.value.customer_id,email:this.myform.value.email,phone:this.myform.value.phone},this.customerService.getAllCustomer(this.params).subscribe(e=>{this.isLoading=!1,this.customers=e.rows,console.log(this.record),this.pager=this.pagination.paginate(this.record,t),this.dataSource=new d.k(this.customers),setTimeout(()=>this.dataSource.sort=this.sort),setTimeout(()=>this.dataSource.paginator=this.paginator)}))}getCustomerBySearch(){this.params={currentPage:this.currentPage,name:this.myform.value.name,customer_id:this.myform.value.customer_id,email:this.myform.value.email,phone:this.myform.value.phone},console.log(this.params),this.customerService.getAllCustomer(this.params).subscribe(t=>{this.isLoading=!1,this.customers=t.rows,this.record=t.count,this.pager=this.pagination.paginate(this.record),this.dataSource=new d.k(this.customers),setTimeout(()=>this.dataSource.sort=this.sort),setTimeout(()=>this.dataSource.paginator=this.paginator)})}getBack(){this.getAllCustomer(),this.myform.reset()}applyFilter(t){}editCustomer(t){this.router.navigate(["admin/customer/edit",t])}openDeviceModal(t){console.log(t.customer_id);const e=new m.d;e.disableClose=!0,e.width="600px",e.height="480px",this.dialog.open(P,{width:"580px",height:"460px",data:{pageValue:t.customer_id}}).afterClosed().subscribe(t=>{})}openDriverModal(t){const e=new m.d;e.disableClose=!0,e.width="600px",e.height="480px",this.dialog.open(j,{width:"580px",height:"460px",data:{pageValue:t.customer_id}}).afterClosed().subscribe(t=>{})}}return t.\u0275fac=function(e){return new(e||t)(h.Zb(U.a),h.Zb(p.a),h.Zb(a.c),h.Zb(g.a),h.Zb(m.b),h.Zb(L.a),h.Zb(r.e))},t.\u0275cmp=h.Tb({type:t,selectors:[["app-customer-list"]],viewQuery:function(t,e){var c;1&t&&(h.Sc(l.a,!0),h.Sc(u.a,!0)),2&t&&(h.Cc(c=h.oc())&&(e.sort=c.first),h.Cc(c=h.oc())&&(e.paginator=c.first))},decls:57,vars:8,consts:[[1,"custom-style"],[1,"table-title"],["fxLayout","row","fxLayout.xs","column",1,"search-div"],["fxFlex","70%"],[3,"formGroup"],["fxLayout","row","fxLayout.xs","column"],["fxFlex.xs","100%"],["fxFlex","45%","fxFlex.xs","45%",1,"search_field"],["matInput","","placeholder","Customer Id","formControlName","customer_id","autocomplete","off"],["matInput","","placeholder","Name","formControlName","name","autocomplete","off"],["matInput","","placeholder","Email","formControlName","email","autocomplete","off"],["matInput","","placeholder","Phone","formControlName","phone","autocomplete","off"],["fxFlex","30%","fxFlex.xs","100%"],["mat-button","",1,"mat-stroked-button","mat-primary",3,"click"],["mat-button","",1,"mat-raised-button","mat-primary",3,"click"],[1,"table_container"],["mat-table","","matTableExporter","","matSort","",1,"mat-elevation-z8",3,"dataSource","hiddenColumns"],["exporter","matTableExporter"],["matColumnDef","action"],["mat-header-cell","",4,"matHeaderCellDef"],["mat-cell","",4,"matCellDef"],["matColumnDef","id"],["mat-header-cell","","mat-sort-header","",4,"matHeaderCellDef"],["matColumnDef","customer_id"],["matColumnDef","name"],["matColumnDef","phone"],["matColumnDef","email"],["matColumnDef","contact_address"],["matColumnDef","billing_address"],["class","header-row","mat-header-row","",4,"matHeaderRowDef"],["class","row","mat-row","",4,"matRowDef","matRowDefColumns"],[1,"middle"],["class","pagination",4,"ngIf"],["style","display:flex; justify-content: center; align-items: center",4,"ngIf"],["mat-header-cell",""],["mat-cell",""],["mat-icon-button","",4,"ngIf"],["mat-icon-button","","color","info",3,"matMenuTriggerFor",4,"ngIf"],["setting","matMenu"],["mat-menu-item","",3,"click"],["mat-icon-button",""],[3,"click"],["mat-icon-button","","color","info",3,"matMenuTriggerFor"],["mat-header-cell","","mat-sort-header",""],["mat-header-row","",1,"header-row"],["mat-row","",1,"row"],[1,"pagination"],[1,"pagination",3,"ngClass"],["class","pagination",3,"ngClass",4,"ngFor","ngForOf"],[2,"display","flex","justify-content","center","align-items","center"],["color","primary","mode","indeterminate"]],template:function(t,e){if(1&t){const t=h.gc();h.fc(0,"div",0),h.fc(1,"div",1),h.fc(2,"h3"),h.Oc(3,"Customer List"),h.ec(),h.ec(),h.fc(4,"div",2),h.fc(5,"div",3),h.fc(6,"form",4),h.fc(7,"div",5),h.fc(8,"div",6),h.fc(9,"mat-form-field",7),h.ac(10,"input",8),h.ec(),h.fc(11,"mat-form-field",7),h.ac(12,"input",9),h.ec(),h.ec(),h.fc(13,"div",6),h.fc(14,"mat-form-field",7),h.ac(15,"input",10),h.ec(),h.fc(16,"mat-form-field",7),h.ac(17,"input",11),h.ec(),h.ec(),h.ec(),h.ec(),h.ec(),h.fc(18,"div",12),h.fc(19,"button",13),h.nc("click",(function(){return e.getCustomerBySearch()})),h.Oc(20," Search "),h.ec(),h.fc(21,"button",13),h.nc("click",(function(){return e.getBack()})),h.Oc(22," Back "),h.ec(),h.fc(23,"button",14),h.nc("click",(function(){return h.Fc(t),h.Dc(27).exportTable("csv",{fileName:"product"})})),h.Oc(24," CSV "),h.ec(),h.ec(),h.ec(),h.fc(25,"div",15),h.fc(26,"table",16,17),h.dc(28,18),h.Nc(29,H,2,0,"th",19),h.Nc(30,Q,9,2,"td",20),h.cc(),h.dc(31,21),h.Nc(32,Y,2,0,"th",22),h.Nc(33,tt,2,1,"td",20),h.cc(),h.dc(34,23),h.Nc(35,et,2,0,"th",22),h.Nc(36,ct,3,1,"td",20),h.cc(),h.dc(37,24),h.Nc(38,it,2,0,"th",22),h.Nc(39,rt,2,1,"td",20),h.cc(),h.dc(40,25),h.Nc(41,ot,2,0,"th",22),h.Nc(42,st,2,1,"td",20),h.cc(),h.dc(43,26),h.Nc(44,nt,2,0,"th",22),h.Nc(45,at,2,1,"td",20),h.cc(),h.dc(46,27),h.Nc(47,ut,2,0,"th",22),h.Nc(48,lt,2,1,"td",20),h.cc(),h.dc(49,28),h.Nc(50,dt,2,0,"th",22),h.Nc(51,mt,2,1,"td",20),h.cc(),h.Nc(52,ht,1,0,"tr",29),h.Nc(53,ft,1,0,"tr",30),h.ec(),h.ec(),h.ec(),h.fc(54,"div",31),h.Nc(55,vt,8,7,"ul",32),h.ec(),h.Nc(56,Ct,2,0,"mat-card",33)}2&t&&(h.Ob(6),h.xc("formGroup",e.myform),h.Ob(20),h.xc("dataSource",e.dataSource)("hiddenColumns",h.yc(7,Dt)),h.Ob(26),h.xc("matHeaderRowDef",e.displayedColumns),h.Ob(1),h.xc("matRowDefColumns",e.displayedColumns),h.Ob(2),h.xc("ngIf",e.pager.pages&&e.pager.pages.length),h.Ob(1),h.xc("ngIf",e.isLoading))},directives:[$.b,$.a,r.t,r.n,r.g,q.c,G.b,r.c,r.m,r.f,z.b,d.j,s.a,l.a,d.c,d.e,d.b,d.g,d.i,i.l,d.d,d.a,V.d,V.a,b.a,V.c,l.b,d.f,d.h,i.j,W.a,i.k,X.a,E.a],styles:[".table_container[_ngcontent-%COMP%]{margin-left:2%;width:96%;margin-right:2%;overflow:auto}.filter[_ngcontent-%COMP%]{width:15%;margin-right:50%}.header[_ngcontent-%COMP%]{overflow:hidden}.table[_ngcontent-%COMP%]{width:96%!important;margin-left:2%;margin-right:2%}.spacerb[_ngcontent-%COMP%]{margin-right:5px}h3[_ngcontent-%COMP%]{font-weight:500}.row[_ngcontent-%COMP%]{height:40px!important}.fl[_ngcontent-%COMP%]{position:relative;display:flex}.closeButton[_ngcontent-%COMP%]{margin-top:20px}.search_div[_ngcontent-%COMP%]{margin-left:5%}.search_field[_ngcontent-%COMP%]{margin-left:1%;width:10%;float:left}.mat-stroked-button[_ngcontent-%COMP%]{border-radius:20px 20px 20px 20px;border:1px solid #00f}.mat-raised-button[_ngcontent-%COMP%], .mat-stroked-button[_ngcontent-%COMP%]{width:8%;margin-left:.5%}.pagination[_ngcontent-%COMP%]{display:inline-block}.pagination[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]{color:#000;float:left;padding:8px 16px;text-decoration:none;transition:background-color .3s;border:1px solid #ddd}.active[_ngcontent-%COMP%]{background-color:#29abe2;background:#4169e1;color:red}.pagination[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover:not(.active){background-color:#ddd}.middle[_ngcontent-%COMP%]{margin-left:50%}a[_ngcontent-%COMP%]{cursor:pointer}"]}),t})();var yt=c("Cp0R");let xt=(()=>{class t{constructor(t,e,c,i,r){this.fb=t,this.router=e,this.snackBar=c,this.customerService=i,this.route=r,this.submitted=!1}ngOnInit(){this.myform=this.fb.group({name:["",[r.s.required]],email:[""],phone:[""],billing_address:["",[r.s.required]],contact_address:["",[r.s.required]]}),this.route.paramMap.subscribe(t=>{this.Id=t.get("id"),this.edit(this.Id)})}edit(t){console.log(t),this.customerService.getCustomerById(t).subscribe(t=>{this.setData(t)})}setData(t){this.myform.patchValue({name:t.name,email:t.email,phone:t.phone,billing_address:t.billing_address,contact_address:t.contact_address})}goBack(){this.router.navigate(["/admin/customer/list"])}openSnackBar(){this.snackBar.open("Successfully added!!","Close",{duration:2e3,verticalPosition:"top",horizontalPosition:"end"})}updateCustomer(){this.submitted=!0,this.myform.invalid||(this.userData=JSON.parse(localStorage.getItem("userData")),this.myform.value.updated_by=this.userData.id,this.myform.value.updated_time=new Date,this.customerService.updateCustomer(this.Id,this.myform.value).subscribe(t=>{this.openSnackBar(),this.router.navigate(["/admin/customer/list"])}))}}return t.\u0275fac=function(e){return new(e||t)(h.Zb(r.e),h.Zb(a.c),h.Zb(p.a),h.Zb(U.a),h.Zb(a.a))},t.\u0275cmp=h.Tb({type:t,selectors:[["app-customer-edit"]],decls:25,vars:1,consts:[["fxFlex","50%","fxFlex.xs","100%",1,"main"],["fxLayout","column",1,"customStyle"],[3,"formGroup"],["mat-button","",3,"click"],[1,"ab"],[1,"full"],["matInput","","placeholder","Name","formControlName","name","autocomplete","off"],["matInput","","placeholder","Email","formControlName","email","autocomplete","off"],["matInput","","placeholder","Phone","formControlName","phone","autocomplete","off"],["matInput","","placeholder","Contact Address","formControlName","contact_address","autocomplete","off"],["matInput","","placeholder","Billing Address","formControlName","billing_address","autocomplete","off"],["mat-stroked-button","","color","primary",1,"btn-block",3,"click"]],template:function(t,e){1&t&&(h.fc(0,"div",0),h.fc(1,"mat-card",1),h.fc(2,"form",2),h.fc(3,"mat-card-header"),h.fc(4,"div"),h.fc(5,"button",3),h.nc("click",(function(){return e.goBack()})),h.fc(6,"mat-icon"),h.Oc(7,"arrow_back"),h.ec(),h.ec(),h.ec(),h.fc(8,"div",4),h.fc(9,"h2"),h.Oc(10,"Customer Update"),h.ec(),h.ec(),h.ec(),h.fc(11,"mat-card-content"),h.fc(12,"mat-form-field",5),h.ac(13,"input",6),h.ec(),h.fc(14,"mat-form-field",5),h.ac(15,"input",7),h.ec(),h.fc(16,"mat-form-field",5),h.ac(17,"input",8),h.ec(),h.fc(18,"mat-form-field",5),h.ac(19,"input",9),h.ec(),h.fc(20,"mat-form-field",5),h.ac(21,"input",10),h.ec(),h.ec(),h.fc(22,"mat-card-actions"),h.fc(23,"button",11),h.nc("click",(function(){return e.updateCustomer()})),h.Oc(24," Update "),h.ec(),h.ec(),h.ec(),h.ec(),h.ec()),2&t&&(h.Ob(2),h.xc("formGroup",e.myform))},directives:[$.a,X.a,$.b,r.t,r.n,r.g,X.d,z.b,b.a,X.c,q.c,G.b,r.c,r.m,r.f,X.b],styles:[".main[_ngcontent-%COMP%]{margin:auto!important}.mat-card[_ngcontent-%COMP%]{width:90%!important}.customStyle[_ngcontent-%COMP%]{border-radius:20px 20px 20px 20px;box-shadow:5px 10px 15px #1a237e}.customStyle[_ngcontent-%COMP%]   .title-style[_ngcontent-%COMP%]{color:#1a237e;text-align:center!important;margin-bottom:25px}.customStyle[_ngcontent-%COMP%]   .warning[_ngcontent-%COMP%]{color:red;margin-left:30px}.customStyle[_ngcontent-%COMP%]   .error_message[_ngcontent-%COMP%]{color:red;margin-left:20px;margin-top:-10px;font-size:12px}.full[_ngcontent-%COMP%]{width:90%}.mat-raised-button[_ngcontent-%COMP%]{border-radius:20px 20px 20px 20px;width:120px;border:1px solid #00f}.sidenav-content[_ngcontent-%COMP%]{height:120%}h1[_ngcontent-%COMP%]{font-weight:600}.arrow[_ngcontent-%COMP%]{float:right}h2[_ngcontent-%COMP%]{color:#00f}"]}),t})();const wt=[{path:"list",component:Ot,canActivate:[yt.a],data:{roles:"customer_list"}},{path:"add",component:(()=>{class t{constructor(t,e,c,i,r){this.fb=t,this.router=e,this.snackBar=c,this.customerService=i,this.route=r,this.submitted=!1}ngOnInit(){this.myform=this.fb.group({customer_id:[],name:["",[r.s.required]],email:[""],phone:[""],billing_address:["",[r.s.required]],contact_address:["",[r.s.required]]})}openSnackBar(){this.snackBar.open("Successfully added!!","Close",{duration:2e3,verticalPosition:"top",horizontalPosition:"end"})}errorMessage(){this.snackBar.open("Something is error!!","Close",{duration:2e3,verticalPosition:"top",horizontalPosition:"end"})}addCustomer(){this.submitted=!0,this.myform.invalid||(this.myform.value.customer_id=Math.floor(9e4*Math.random())+1e4,this.userData=JSON.parse(localStorage.getItem("userData")),this.myform.value.created_by=this.userData.id,this.customerService.addCustomer(this.myform.value).subscribe(t=>{this.openSnackBar(),this.router.navigate(["/admin/customer/list"])}))}}return t.\u0275fac=function(e){return new(e||t)(h.Zb(r.e),h.Zb(a.c),h.Zb(p.a),h.Zb(U.a),h.Zb(a.a))},t.\u0275cmp=h.Tb({type:t,selectors:[["app-customer-add"]],decls:19,vars:1,consts:[["fxFlex","50%","fxFlex.xs","100%",1,"customStyle"],[3,"formGroup"],[1,"title-style"],[1,"full"],["matInput","","placeholder","Name","formControlName","name","autocomplete","off"],["matInput","","placeholder","Email","formControlName","email","autocomplete","off"],["matInput","","placeholder","Phone","formControlName","phone","autocomplete","off"],["matInput","","placeholder","Contact Address","formControlName","contact_address","autocomplete","off"],["matInput","","placeholder","Billing Address","formControlName","billing_address","autocomplete","off"],["mat-stroked-button","","color","primary",1,"btn-block",3,"click"]],template:function(t,e){1&t&&(h.fc(0,"mat-card",0),h.fc(1,"form",1),h.fc(2,"div",2),h.fc(3,"mat-card-title"),h.Oc(4,"Customer Add"),h.ec(),h.ec(),h.fc(5,"mat-card-content"),h.fc(6,"mat-form-field",3),h.ac(7,"input",4),h.ec(),h.fc(8,"mat-form-field",3),h.ac(9,"input",5),h.ec(),h.fc(10,"mat-form-field",3),h.ac(11,"input",6),h.ec(),h.fc(12,"mat-form-field",3),h.ac(13,"input",7),h.ec(),h.fc(14,"mat-form-field",3),h.ac(15,"input",8),h.ec(),h.ec(),h.fc(16,"mat-card-actions"),h.fc(17,"button",9),h.nc("click",(function(){return e.addCustomer()})),h.Oc(18," Add "),h.ec(),h.ec(),h.ec(),h.ec()),2&t&&(h.Ob(1),h.xc("formGroup",e.myform))},directives:[X.a,$.a,r.t,r.n,r.g,X.f,X.c,q.c,G.b,r.c,r.m,r.f,X.b,z.b],styles:[".main[_ngcontent-%COMP%]{margin:auto!important}.mat-card[_ngcontent-%COMP%]{width:90%!important}.customStyle[_ngcontent-%COMP%]{border-radius:20px 20px 20px 20px;box-shadow:5px 10px 15px #1a237e}.customStyle[_ngcontent-%COMP%]   .title-style[_ngcontent-%COMP%]{color:#1a237e;text-align:center!important;margin-bottom:25px}.customStyle[_ngcontent-%COMP%]   .warning[_ngcontent-%COMP%]{color:red;margin-left:30px}.customStyle[_ngcontent-%COMP%]   .error_message[_ngcontent-%COMP%]{color:red;margin-left:20px;margin-top:-10px;font-size:12px}.full[_ngcontent-%COMP%]{width:90%}.mat-raised-button[_ngcontent-%COMP%]{border-radius:20px 20px 20px 20px;width:120px;border:1px solid #00f}.sidenav-content[_ngcontent-%COMP%]{height:120%}h1[_ngcontent-%COMP%]{font-weight:600}.arrow[_ngcontent-%COMP%]{float:right}h2[_ngcontent-%COMP%]{color:#00f}"]}),t})(),canActivate:[yt.a],data:{roles:"customer_add"}},{path:"edit/:id",component:xt,canActivate:[yt.a],data:{roles:"customer_edit"}}];let St=(()=>{class t{}return t.\u0275mod=h.Xb({type:t}),t.\u0275inj=h.Wb({factory:function(e){return new(e||t)},imports:[[a.f.forChild(wt)],a.f]}),t})(),_t=(()=>{class t{}return t.\u0275mod=h.Xb({type:t}),t.\u0275inj=h.Wb({factory:function(e){return new(e||t)},imports:[[i.c,St,o.a,r.q,r.i,s.b,n.a]]}),t})()},"1jOF":function(t,e,c){"use strict";c.d(e,"a",(function(){return s}));var i=c("AytR"),r=c("fXoL"),o=c("tk/3");let s=(()=>{class t{constructor(t){this.http=t,this.url=i.a.apiUrl+"/driver/"}addDriver(t){return this.http.post(this.url+"/addDriver",t)}getAllDriver(){return this.http.get(this.url+"/listDriver")}getDriverById(t){return this.http.get(this.url+t+"/editDriver")}updateDriver(t,e){return this.http.put(this.url+t+"/updateDriver",e)}deleteDriver(t){return this.http.delete(this.url+t+"/deleteDriver")}addDriverWithDevice(t){return this.http.post(this.url+"/addDeviceDriver",t)}deleteDeviceDriver(t){return this.http.post(this.url+"/deleteDeviceDriver",t)}getDriverByDeviceId(t){return this.http.get(this.url+t+"/getDriverByDevice")}addDriverWithGroup(t){return this.http.post(this.url+"/addGroupDriver",t)}deleteGroupDriver(t){return this.http.post(this.url+"/deleteGroupDriver",t)}getDriverByGroupId(t){return this.http.get(this.url+t+"/getDriverByGroup")}addDriverWithUser(t){return this.http.post(this.url+"/addUserDriver",t)}deleteUserDriver(t){return this.http.post(this.url+"/deleteUserDriver",t)}getDriverByUserId(t){return this.http.get(this.url+t+"/getDriverByUser")}getAllCustomerDriver(){return this.http.get(this.url+"/listCustomerDriver")}getDriverByCustomerId(t){return this.http.get(this.url+t+"/getDriverByCustomerId")}addDriverWithCustomer(t){return this.http.post(this.url+"/addCustomerDriver",t)}deleteCustomerDriver(t){return this.http.post(this.url+"/deleteCustomerDriver",t)}}return t.\u0275fac=function(e){return new(e||t)(r.jc(o.b))},t.\u0275prov=r.Vb({token:t,factory:t.\u0275fac,providedIn:"root"}),t})()},Cp0R:function(t,e,c){"use strict";c.d(e,"a",(function(){return s}));var i=c("fXoL"),r=c("Ofeh"),o=c("tyNb");let s=(()=>{class t{constructor(t,e){this.loginService=t,this.router=e,this.assigedRole=[]}canActivate(t,e){return this.loginService.loggedIn()?(this.assigedRole=JSON.parse(localStorage.getItem("rolesData")),1==this.assigedRole.includes(t.data.roles)||(this.router.navigate(["/deny"]),!1)):(this.router.navigate(["/"]),!1)}}return t.\u0275fac=function(e){return new(e||t)(i.jc(r.a),i.jc(o.c))},t.\u0275prov=i.Vb({token:t,factory:t.\u0275fac,providedIn:"root"}),t})()},H0VJ:function(t,e,c){"use strict";c.d(e,"a",(function(){return a}));var i=c("fXoL"),r=c("0IaG"),o=c("NFeN"),s=c("bTqV");let n=(()=>{class t{constructor(t){this.dialogRef=t}ngOnInit(){}closeDialog(){this.dialogRef.close(!1)}}return t.\u0275fac=function(e){return new(e||t)(i.Zb(r.f))},t.\u0275cmp=i.Tb({type:t,selectors:[["app-mat-dialog"]],decls:11,vars:2,consts:[[1,"content-container"],["id","close-button",3,"click"],[1,"content-span"],["mat-flat-button","","id","no-button",3,"mat-dialog-close"],["mat-flat-button","","id","yes-button","color","warn",3,"mat-dialog-close"]],template:function(t,e){1&t&&(i.fc(0,"div"),i.fc(1,"div",0),i.fc(2,"mat-icon",1),i.nc("click",(function(){return e.closeDialog()})),i.Oc(3,"close"),i.ec(),i.fc(4,"div",2),i.Oc(5,"Are you sure to delete this record ?"),i.ec(),i.ec(),i.fc(6,"div"),i.fc(7,"button",3),i.Oc(8,"No"),i.ec(),i.fc(9,"button",4),i.Oc(10,"Yes"),i.ec(),i.ec(),i.ec()),2&t&&(i.Ob(7),i.xc("mat-dialog-close",!1),i.Ob(2),i.xc("mat-dialog-close",!0))},directives:[o.a,s.b,r.c],styles:["#close-button[_ngcontent-%COMP%]{margin-left:90%;cursor:pointer}.content-span[_ngcontent-%COMP%]{margin-left:20px;margin-bottom:20px}#no-button[_ngcontent-%COMP%]{width:30%;margin-left:7%;margin-right:25%;background-color:#ff0}#yes-button[_ngcontent-%COMP%]{width:30%}"]}),t})(),a=(()=>{class t{constructor(t){this.dialog=t}openConfirmDialog(){return this.dialog.open(n,{width:"300px",disableClose:!0,position:{top:"20px"}})}}return t.\u0275fac=function(e){return new(e||t)(i.jc(r.b))},t.\u0275prov=i.Vb({token:t,factory:t.\u0275fac,providedIn:"root"}),t})()},M5z4:function(t,e,c){"use strict";c.d(e,"a",(function(){return s}));var i=c("AytR"),r=c("fXoL"),o=c("tk/3");let s=(()=>{class t{constructor(t){this.http=t,this.url=i.a.apiUrl+"/customer/"}addCustomer(t){return this.http.post(this.url+"/addCustomer",t)}getAllCustomer(t){return this.http.post(this.url+"/listCustomer",t)}getCustomerById(t){return this.http.get(this.url+t+"/editCustomer")}updateCustomer(t,e){return this.http.put(this.url+t+"/updateCustomer",e)}getAllCustomerList(){return this.http.get(this.url+"/allCustomerList")}customerSearch(t){return this.http.post(this.url+"/customerSearch",t)}DeviceByCustomer(t){return this.http.get(this.url+t+"/getDeviceByCustomer")}DeviceByCustomerWithPosition(t){return this.http.get(this.url+t+"/getDeviceByCustomerWithPosition")}}return t.\u0275fac=function(e){return new(e||t)(r.jc(o.b))},t.\u0275prov=r.Vb({token:t,factory:t.\u0275fac,providedIn:"root"}),t})()},XCAU:function(t,e,c){"use strict";c.d(e,"a",(function(){return s}));var i=c("AytR"),r=c("fXoL"),o=c("tk/3");let s=(()=>{class t{constructor(t){this.http=t,this.url=i.a.apiUrl+"/device/"}getAllDevices(){return this.http.get(this.url+"/listDevices")}addDevice(t){return this.http.post(this.url+"/addDevice",t)}getAllDevice(){return this.http.get(this.url+"/listDevice")}getDeviceById(t){return this.http.get(this.url+t+"/editDevice")}updateDevice(t,e){return this.http.put(this.url+t+"/updateDevice",e)}deleteDevice(t){return this.http.delete(this.url+t+"/deleteDevice")}addDeviceWithUser(t){return this.http.post(this.url+"/addUserDevice",t)}deleteUserDevice(t){return this.http.post(this.url+"/deleteUserDevice",t)}getDeviceByUserId(t){return this.http.get(this.url+t+"/getDeviceByUser")}getDeviceByAllUser(){return this.http.get(this.url+"/getDeviceByAllUser")}addDeviceWithCustomer(t){return this.http.post(this.url+"/addCustomerDevice",t)}deleteCustomerDevice(t){return this.http.post(this.url+"/deleteCustomerDevice",t)}getDeviceByCustomerId(t){return this.http.get(this.url+t+"/getDeviceByCustomerId")}getAllPostion(){return this.http.get(this.url+"/listPositions")}getAllPostionBySearch(t){return console.log(t),this.http.post(this.url+"/listSearchPositions",t)}getAllEvents(){return this.http.get(this.url+"/listEvents")}getDeviceWithPositionById(t){return this.http.get(this.url+t+"/getDeviceWithPositionById")}}return t.\u0275fac=function(e){return new(e||t)(r.jc(o.b))},t.\u0275prov=r.Vb({token:t,factory:t.\u0275fac,providedIn:"root"}),t})()}}]);