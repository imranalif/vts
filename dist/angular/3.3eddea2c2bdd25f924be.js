(window.webpackJsonp=window.webpackJsonp||[]).push([[3],{"1jOF":function(t,e,r){"use strict";r.d(e,"a",(function(){return c}));var i=r("AytR"),a=r("fXoL"),o=r("tk/3");let c=(()=>{class t{constructor(t){this.http=t,this.url=i.a.apiUrl+"/driver/"}addDriver(t){return this.http.post(this.url+"/addDriver",t)}getAllDriver(){return this.http.get(this.url+"/listDriver")}getDriverById(t){return this.http.get(this.url+t+"/editDriver")}updateDriver(t,e){return this.http.put(this.url+t+"/updateDriver",e)}deleteDriver(t){return this.http.delete(this.url+t+"/deleteDriver")}addDriverWithDevice(t){return this.http.post(this.url+"/addDeviceDriver",t)}deleteDeviceDriver(t){return this.http.post(this.url+"/deleteDeviceDriver",t)}getDriverByDeviceId(t){return this.http.get(this.url+t+"/getDriverByDevice")}addDriverWithGroup(t){return this.http.post(this.url+"/addGroupDriver",t)}deleteGroupDriver(t){return this.http.post(this.url+"/deleteGroupDriver",t)}getDriverByGroupId(t){return this.http.get(this.url+t+"/getDriverByGroup")}addDriverWithUser(t){return this.http.post(this.url+"/addUserDriver",t)}deleteUserDriver(t){return this.http.post(this.url+"/deleteUserDriver",t)}getDriverByUserId(t){return this.http.get(this.url+t+"/getDriverByUser")}getAllCustomerDriver(){return this.http.get(this.url+"/listCustomerDriver")}getDriverByCustomerId(t){return this.http.get(this.url+t+"/getDriverByCustomerId")}addDriverWithCustomer(t){return this.http.post(this.url+"/addCustomerDriver",t)}deleteCustomerDriver(t){return this.http.post(this.url+"/deleteCustomerDriver",t)}}return t.\u0275fac=function(e){return new(e||t)(a.jc(o.b))},t.\u0275prov=a.Vb({token:t,factory:t.\u0275fac,providedIn:"root"}),t})()},Cp0R:function(t,e,r){"use strict";r.d(e,"a",(function(){return c}));var i=r("fXoL"),a=r("Ofeh"),o=r("tyNb");let c=(()=>{class t{constructor(t,e){this.loginService=t,this.router=e,this.assigedRole=[]}canActivate(t,e){return this.loginService.loggedIn()?(this.assigedRole=JSON.parse(sessionStorage.getItem("rolesData")),1==this.assigedRole.includes(t.data.roles)||(this.router.navigate(["/deny"]),!1)):(this.router.navigate(["/"]),!1)}}return t.\u0275fac=function(e){return new(e||t)(i.jc(a.a),i.jc(o.c))},t.\u0275prov=i.Vb({token:t,factory:t.\u0275fac,providedIn:"root"}),t})()},H0VJ:function(t,e,r){"use strict";r.d(e,"a",(function(){return s}));var i=r("fXoL"),a=r("0IaG"),o=r("NFeN"),c=r("bTqV");let n=(()=>{class t{constructor(t){this.dialogRef=t}ngOnInit(){}closeDialog(){this.dialogRef.close(!1)}}return t.\u0275fac=function(e){return new(e||t)(i.Zb(a.f))},t.\u0275cmp=i.Tb({type:t,selectors:[["app-mat-dialog"]],decls:11,vars:2,consts:[[1,"content-container"],["id","close-button",3,"click"],[1,"content-span"],["mat-flat-button","","id","no-button",3,"mat-dialog-close"],["mat-flat-button","","id","yes-button","color","warn",3,"mat-dialog-close"]],template:function(t,e){1&t&&(i.fc(0,"div"),i.fc(1,"div",0),i.fc(2,"mat-icon",1),i.nc("click",(function(){return e.closeDialog()})),i.Qc(3,"close"),i.ec(),i.fc(4,"div",2),i.Qc(5,"Are you sure to delete this record ?"),i.ec(),i.ec(),i.fc(6,"div"),i.fc(7,"button",3),i.Qc(8,"No"),i.ec(),i.fc(9,"button",4),i.Qc(10,"Yes"),i.ec(),i.ec(),i.ec()),2&t&&(i.Ob(7),i.yc("mat-dialog-close",!1),i.Ob(2),i.yc("mat-dialog-close",!0))},directives:[o.a,c.b,a.c],styles:["#close-button[_ngcontent-%COMP%]{margin-left:90%;cursor:pointer}.content-span[_ngcontent-%COMP%]{margin-left:20px;margin-bottom:20px}#no-button[_ngcontent-%COMP%]{width:30%;margin-left:7%;margin-right:25%;background-color:#ff0}#yes-button[_ngcontent-%COMP%]{width:30%}"]}),t})(),s=(()=>{class t{constructor(t){this.dialog=t}openConfirmDialog(){return this.dialog.open(n,{width:"300px",disableClose:!0,position:{top:"20px"}})}}return t.\u0275fac=function(e){return new(e||t)(i.jc(a.b))},t.\u0275prov=i.Vb({token:t,factory:t.\u0275fac,providedIn:"root"}),t})()},kDqm:function(t,e,r){"use strict";r.r(e),r.d(e,"DriverModule",(function(){return H}));var i=r("ofXK"),a=r("3Pt+"),o=r("jAig"),c=r("KUt4"),n=r("tyNb"),s=r("Cp0R"),d=r("fXoL"),l=r("dNgK"),m=r("1jOF"),u=r("Wp6s"),f=r("kmnG"),p=r("qFsG"),h=r("7EHt"),g=r("NFeN"),v=r("bTqV");function b(t,e){1&t&&(d.fc(0,"div",29),d.fc(1,"a"),d.fc(2,"mat-icon"),d.Qc(3,"clear"),d.ec(),d.ec(),d.ec())}function y(t,e){if(1&t&&(d.fc(0,"div",24),d.fc(1,"div",25),d.fc(2,"mat-form-field",13),d.ac(3,"input",26),d.ec(),d.fc(4,"mat-form-field",13),d.ac(5,"input",27),d.ec(),d.Pc(6,b,4,0,"div",28),d.ec(),d.ec()),2&t){const t=e.index,r=d.rc();d.Ob(1),d.yc("formArrayName",t),d.Ob(2),d.yc("id","name"+t),d.Ob(2),d.yc("id","value"+t),d.Ob(1),d.yc("ngIf",r.myform.get("attributes").length>1)}}let C=(()=>{class t{constructor(t,e,r,i){this.fb=t,this.router=e,this.snackBar=r,this.driverService=i,this.object={},this.att=[],this.submitted=!1,this.states=[{id:1,value:"Active"},{id:0,value:"Inactive"}],this.step=0}setStep(t){this.step=t}ngOnInit(){this.myform=this.fb.group({driverName:["",[a.s.required]],identifier:["",[a.s.required]],driving_license:["",[a.s.required]],phone:[""],email:[""],fatherName:[""],motherName:[""],presentAddress:[""],permanentAddress:[""],nid:[""],attributes:this.fb.array([])})}assignAttributes(){return this.fb.group({name:[""],value:[""]})}get fArray(){return this.myform.get("attributes")}addassignAttributes(){this.fArray.push(this.assignAttributes())}removeAttributes(t){this.myform.get("attributes").removeAt(t)}openSnackBar(){this.snackBar.open("Successfully added!!","Close",{duration:2e3,verticalPosition:"top",horizontalPosition:"end"})}addDriver(){this.myform.markAllAsTouched(),this.submitted=!0,this.myform.invalid||(console.log(this.myform.value.attributes),this.myform.value.attributes.forEach(t=>{this.object[t.name]=t.value,console.log(this.myform.value.attributes)}),this.myform.value.attributes=this.object,this.userData=JSON.parse(localStorage.getItem("userData")),this.myform.value.created_by=this.userData.id,this.driverService.addDriver(this.myform.value).subscribe(t=>{this.openSnackBar(),this.router.navigate(["/admin/traccar/driver/list"])}))}}return t.\u0275fac=function(e){return new(e||t)(d.Zb(a.e),d.Zb(n.c),d.Zb(l.a),d.Zb(m.a))},t.\u0275cmp=d.Tb({type:t,selectors:[["app-driver-add"]],decls:52,vars:4,consts:[[1,"customStyle"],[1,"title-style"],[3,"formGroup"],[1,"main"],[1,"mainContent"],[1,"full"],["trim","blur","matInput","","placeholder","Name","formControlName","driverName","autocomplete","off","required",""],["matInput","","placeholder","Identifier","formControlName","identifier","autocomplete","off","required",""],["matInput","","placeholder","Driving License","formControlName","driving_license","autocomplete","off","required",""],["matInput","","placeholder","Phone","formControlName","phone","autocomplete","off"],[1,"optionalContent"],[1,"example-headers-align"],["hideToggle","",3,"expanded","opened"],[1,"half"],["matInput","","placeholder","Father Name","formControlName","fatherName","autocomplete","off"],["matInput","","placeholder","Mother Name","formControlName","motherName","autocomplete","off"],["matInput","","placeholder","Email","formControlName","email","autocomplete","off"],["matInput","","placeholder","Present Address","formControlName","presentAddress","autocomplete","off"],["matInput","","placeholder","Permanent Address","formControlName","permanentAddress","autocomplete","off"],["matInput","","placeholder","NID","formControlName","nid","autocomplete","off"],["formArrayName","attributes",4,"ngFor","ngForOf"],[3,"click"],[1,"button"],["mat-stroked-button","","color","primary",1,"btn-block",3,"click"],["formArrayName","attributes"],[3,"formArrayName"],["trim","blur","matInput","","placeholder","Name","formControlName","name","autocomplete","off",3,"id"],["trim","blur","matInput","","placeholder","Value","formControlName","value","autocomplete","off",3,"id"],["class","delAssigns",4,"ngIf"],[1,"delAssigns"]],template:function(t,e){1&t&&(d.fc(0,"mat-card",0),d.fc(1,"div",1),d.fc(2,"mat-card-title"),d.Qc(3,"Driver Add Form"),d.ec(),d.ec(),d.fc(4,"mat-card-content"),d.fc(5,"form",2),d.fc(6,"div",3),d.fc(7,"div",4),d.fc(8,"mat-form-field",5),d.ac(9,"input",6),d.ec(),d.fc(10,"mat-form-field",5),d.ac(11,"input",7),d.ec(),d.fc(12,"mat-form-field",5),d.ac(13,"input",8),d.ec(),d.fc(14,"mat-form-field",5),d.ac(15,"input",9),d.ec(),d.ec(),d.fc(16,"div",10),d.fc(17,"mat-accordion",11),d.fc(18,"mat-expansion-panel",12),d.nc("opened",(function(){return e.setStep(1)})),d.fc(19,"mat-expansion-panel-header"),d.fc(20,"mat-panel-title"),d.fc(21,"mat-icon"),d.Qc(22,"add"),d.ec(),d.Qc(23," Personal Information "),d.ec(),d.ec(),d.fc(24,"mat-form-field",13),d.ac(25,"input",14),d.ec(),d.fc(26,"mat-form-field",13),d.ac(27,"input",15),d.ec(),d.fc(28,"mat-form-field",13),d.ac(29,"input",16),d.ec(),d.fc(30,"mat-form-field",13),d.ac(31,"textarea",17),d.ec(),d.fc(32,"mat-form-field",13),d.ac(33,"textarea",18),d.ec(),d.fc(34,"mat-form-field",13),d.ac(35,"input",19),d.ec(),d.ec(),d.ec(),d.fc(36,"mat-accordion",11),d.fc(37,"mat-expansion-panel",12),d.nc("opened",(function(){return e.setStep(3)})),d.fc(38,"mat-expansion-panel-header"),d.fc(39,"mat-panel-title"),d.fc(40,"mat-icon"),d.Qc(41,"add"),d.ec(),d.Qc(42," Attributes "),d.ec(),d.ec(),d.Pc(43,y,7,4,"div",20),d.fc(44,"button",21),d.nc("click",(function(){return e.addassignAttributes()})),d.fc(45,"mat-icon"),d.Qc(46,"add"),d.ec(),d.ec(),d.ec(),d.ec(),d.ec(),d.ec(),d.ec(),d.ec(),d.fc(47,"mat-card-actions",22),d.fc(48,"button",23),d.nc("click",(function(){return e.addDriver()})),d.Qc(49," Add "),d.ec(),d.fc(50,"p"),d.Qc(51,"Note: Field marked with * is Mandatory"),d.ec(),d.ec(),d.ec()),2&t&&(d.Ob(5),d.yc("formGroup",e.myform),d.Ob(13),d.yc("expanded",1===e.step),d.Ob(19),d.yc("expanded",3===e.step),d.Ob(6),d.yc("ngForOf",e.myform.get("attributes").controls))},directives:[u.a,u.f,u.c,a.t,a.n,a.g,f.c,p.b,a.c,a.m,a.f,a.r,h.a,h.c,h.d,h.e,g.a,i.l,u.b,v.b,a.d,i.m],styles:["mat-card[_ngcontent-%COMP%]{top:0}.main[_ngcontent-%COMP%], mat-card[_ngcontent-%COMP%]{width:90%}.mainContent[_ngcontent-%COMP%]{width:45%}.optionalContent[_ngcontent-%COMP%]{width:45%;margin-top:-200px;float:right}.customStyle[_ngcontent-%COMP%]{border-radius:10px 10px 10px 10px;box-shadow:5px 10px 15px #1a237e}.customStyle[_ngcontent-%COMP%]   .title-style[_ngcontent-%COMP%]{color:#1a237e;text-align:center!important}.customStyle[_ngcontent-%COMP%]   .warning[_ngcontent-%COMP%]{color:red;margin-left:30px}.customStyle[_ngcontent-%COMP%]   .error_message[_ngcontent-%COMP%]{color:red;margin-left:20px;margin-top:-10px;font-size:12px}.mat-stroked-button[_ngcontent-%COMP%]{width:120px;border:1px solid #00f}.sidenav-content[_ngcontent-%COMP%]{height:120%}.button[_ngcontent-%COMP%]{margin-top:120px}.half[_ngcontent-%COMP%]{width:40%}.delAssigns[_ngcontent-%COMP%]{margin-top:25px}a[_ngcontent-%COMP%]{cursor:pointer}"]}),t})();function D(t,e){if(1&t){const t=d.gc();d.fc(0,"div",30),d.fc(1,"a"),d.fc(2,"mat-icon",23),d.nc("click",(function(){d.Hc(t);const e=d.rc().index;return d.rc().removeAttributes(e)})),d.Qc(3,"clear"),d.ec(),d.ec(),d.ec()}}function O(t,e){if(1&t&&(d.fc(0,"div"),d.fc(1,"div",26),d.fc(2,"mat-form-field",14),d.ac(3,"input",27),d.ec(),d.fc(4,"mat-form-field",14),d.ac(5,"input",28),d.ec(),d.Pc(6,D,4,0,"div",29),d.ec(),d.ec()),2&t){const t=e.index,r=d.rc();d.Ob(1),d.yc("formGroupName",t),d.Ob(2),d.yc("id","name"+t),d.Ob(2),d.yc("id","value"+t),d.Ob(1),d.yc("ngIf",r.myform.get("attributes").length>1)}}let A=(()=>{class t{constructor(t,e,r,i,a){this.fb=t,this.router=e,this.snackBar=r,this.route=i,this.driverService=a,this.object={},this.att=[],this.submitted=!1,this.array=[{id:1,name:"speed",value:"25"},{id:2,name:"limit",value:"5"}],this.states=[{id:1,value:"Active"},{id:0,value:"Inactive"}],this.step=0}setStep(t){this.step=t}ngOnInit(){this.myform=this.fb.group({driverName:["",[a.s.required]],identifier:["",[a.s.required]],driving_license:["",[a.s.required]],phone:[""],email:[""],fatherName:[""],motherName:[""],presentAddress:[""],permanentAddress:[""],nid:[""],attributes:this.fb.array([])}),this.route.paramMap.subscribe(t=>{this.Id=t.get("id"),this.edit(this.Id)}),this.getAllDriver()}getAllDriver(){this.driverService.getAllDriver().subscribe(t=>{this.drivers=t,console.log(this.drivers)})}edit(t){this.driverService.getDriverById(t).subscribe(t=>{this.d=t,console.log(this.d);var e=JSON.parse(this.d.attributes),r=Object.entries(e);this.attr=[],r.forEach(t=>{this.attr.push({name:t[0],value:t[1]})}),this.d.attributes=this.attr,console.log(this.d.attributes),this.setData(this.d)})}setData(t){this.myform.patchValue({driverName:t.name,identifier:t.uniqueid,driving_license:t.driving_license,phone:t.phone,email:t.email,fatherName:t.father_name,motherName:t.mother_name,presentAddress:t.present_address,permanentAddress:t.permanent_address,nid:t.nid}),this.createdBy=t.created_by,this.setAttributes()}setAttributes(){let t=this.myform.controls.attributes;this.d.attributes.forEach(e=>{t.push(this.fb.group(e))})}assignAttributes(){return this.fb.group({name:[""],value:[""]})}get fArray(){return this.myform.get("attributes")}addassignAttributes(){this.fArray.push(this.assignAttributes())}removeAttributes(t){this.myform.get("attributes").removeAt(t)}openSnackBar(){this.snackBar.open("Updated added!!","Close",{duration:2e3,verticalPosition:"top",horizontalPosition:"end"})}goBack(){this.router.navigate(["/admin/traccar/driver/list"])}updateDriver(){this.submitted=!0,this.myform.invalid||(this.myform.value.attributes.forEach(t=>{this.object[t.name]=t.value,console.log(this.myform.value.attributes)}),this.myform.value.attributes=this.object,this.userData=JSON.parse(localStorage.getItem("userData")),this.myform.value.updated_by=this.userData.id,this.myform.value.created_by=this.createdBy,this.myform.value.updated_time=new Date,console.log(this.myform.value),this.driverService.updateDriver(this.Id,this.myform.value).subscribe(t=>{this.openSnackBar(),this.router.navigate(["/admin/traccar/driver/list"])}))}}return t.\u0275fac=function(e){return new(e||t)(d.Zb(a.e),d.Zb(n.c),d.Zb(l.a),d.Zb(n.a),d.Zb(m.a))},t.\u0275cmp=d.Tb({type:t,selectors:[["app-driver-edit"]],decls:56,vars:4,consts:[[1,"customStyle"],["mat-button","",1,"mat-primary",3,"click"],[1,"title-style"],[3,"formGroup"],[1,"main"],[1,"mainContent"],[1,"full"],["trim","blur","matInput","","placeholder","Name","formControlName","driverName","autocomplete","off","required",""],["matInput","","placeholder","Identifier","formControlName","identifier","autocomplete","off","required",""],["matInput","","placeholder","Driving License","formControlName","driving_license","autocomplete","off","required",""],["matInput","","placeholder","Phone","formControlName","phone","autocomplete","off"],[1,"optionalContent"],[1,"example-headers-align"],["hideToggle","",3,"expanded","opened"],[1,"half"],["matInput","","placeholder","Father Name","formControlName","fatherName","autocomplete","off"],["matInput","","placeholder","Mother Name","formControlName","motherName","autocomplete","off"],["matInput","","placeholder","Email","formControlName","email","autocomplete","off"],["matInput","","placeholder","Present Address","formControlName","presentAddress","autocomplete","off"],["matInput","","placeholder","Permanent Address","formControlName","permanentAddress","autocomplete","off"],["matInput","","placeholder","NID","formControlName","nid","autocomplete","off"],["formArrayName","attributes"],[4,"ngFor","ngForOf"],[3,"click"],[1,"button"],["mat-stroked-button","","color","primary",1,"btn-block",3,"click"],[3,"formGroupName"],["trim","blur","matInput","","placeholder","Name","formControlName","name","autocomplete","off",3,"id"],["trim","blur","matInput","","placeholder","Value","formControlName","value","autocomplete","off",3,"id"],["class","delAssigns",4,"ngIf"],[1,"delAssigns"]],template:function(t,e){1&t&&(d.fc(0,"mat-card",0),d.fc(1,"button",1),d.nc("click",(function(){return e.goBack()})),d.fc(2,"mat-icon"),d.Qc(3,"arrow_back"),d.ec(),d.ec(),d.fc(4,"div",2),d.fc(5,"mat-card-title"),d.Qc(6,"Driver Update Form"),d.ec(),d.ec(),d.fc(7,"mat-card-content"),d.fc(8,"form",3),d.fc(9,"div",4),d.fc(10,"div",5),d.fc(11,"mat-form-field",6),d.ac(12,"input",7),d.ec(),d.fc(13,"mat-form-field",6),d.ac(14,"input",8),d.ec(),d.fc(15,"mat-form-field",6),d.ac(16,"input",9),d.ec(),d.fc(17,"mat-form-field",6),d.ac(18,"input",10),d.ec(),d.ec(),d.fc(19,"div",11),d.fc(20,"mat-accordion",12),d.fc(21,"mat-expansion-panel",13),d.nc("opened",(function(){return e.setStep(1)})),d.fc(22,"mat-expansion-panel-header"),d.fc(23,"mat-panel-title"),d.fc(24,"mat-icon"),d.Qc(25,"add"),d.ec(),d.Qc(26," Personal Information "),d.ec(),d.ec(),d.fc(27,"mat-form-field",14),d.ac(28,"input",15),d.ec(),d.fc(29,"mat-form-field",14),d.ac(30,"input",16),d.ec(),d.fc(31,"mat-form-field",14),d.ac(32,"input",17),d.ec(),d.fc(33,"mat-form-field",14),d.ac(34,"textarea",18),d.ec(),d.fc(35,"mat-form-field",14),d.ac(36,"textarea",19),d.ec(),d.fc(37,"mat-form-field",14),d.ac(38,"input",20),d.ec(),d.ec(),d.ec(),d.fc(39,"mat-accordion",12),d.fc(40,"mat-expansion-panel",13),d.nc("opened",(function(){return e.setStep(3)})),d.fc(41,"mat-expansion-panel-header"),d.fc(42,"mat-panel-title"),d.fc(43,"mat-icon"),d.Qc(44,"add"),d.ec(),d.Qc(45," Attributes "),d.ec(),d.ec(),d.fc(46,"div",21),d.Pc(47,O,7,4,"div",22),d.ec(),d.fc(48,"button",23),d.nc("click",(function(){return e.addassignAttributes()})),d.fc(49,"mat-icon"),d.Qc(50,"add"),d.ec(),d.ec(),d.ec(),d.ec(),d.ec(),d.ec(),d.ec(),d.ec(),d.fc(51,"mat-card-actions",24),d.fc(52,"button",25),d.nc("click",(function(){return e.updateDriver()})),d.Qc(53," Update "),d.ec(),d.fc(54,"p"),d.Qc(55,"Note: Field marked with * is Mandatory"),d.ec(),d.ec(),d.ec()),2&t&&(d.Ob(8),d.yc("formGroup",e.myform),d.Ob(13),d.yc("expanded",1===e.step),d.Ob(19),d.yc("expanded",3===e.step),d.Ob(7),d.yc("ngForOf",e.myform.get("attributes").controls))},directives:[u.a,v.b,g.a,u.f,u.c,a.t,a.n,a.g,f.c,p.b,a.c,a.m,a.f,a.r,h.a,h.c,h.d,h.e,a.d,i.l,u.b,a.h,i.m],styles:["mat-card[_ngcontent-%COMP%]{top:0}.main[_ngcontent-%COMP%], mat-card[_ngcontent-%COMP%]{width:90%}.mainContent[_ngcontent-%COMP%]{width:45%}.optionalContent[_ngcontent-%COMP%]{width:45%;margin-top:-200px;float:right}.customStyle[_ngcontent-%COMP%]{border-radius:10px 10px 10px 10px;box-shadow:5px 10px 15px #1a237e}.customStyle[_ngcontent-%COMP%]   .title-style[_ngcontent-%COMP%]{margin-top:-4%;color:#1a237e;text-align:center!important}.customStyle[_ngcontent-%COMP%]   .warning[_ngcontent-%COMP%]{color:red;margin-left:30px}.customStyle[_ngcontent-%COMP%]   .error_message[_ngcontent-%COMP%]{color:red;margin-left:20px;margin-top:-10px;font-size:12px}.mat-stroked-button[_ngcontent-%COMP%]{width:120px;border:1px solid #00f}.sidenav-content[_ngcontent-%COMP%]{height:120%}.button[_ngcontent-%COMP%]{margin-top:100px}.half[_ngcontent-%COMP%]{width:40%}.delAssigns[_ngcontent-%COMP%]{margin-top:25px}a[_ngcontent-%COMP%]{cursor:pointer}"]}),t})();var I=r("M9IT"),N=r("Dh3D"),P=r("+0xr"),x=r("Iab2"),_=r("H0VJ"),w=r("0IaG");function S(t,e){1&t&&(d.fc(0,"th",19),d.Qc(1,"Action"),d.ec())}function k(t,e){if(1&t){const t=d.gc();d.fc(0,"button",23),d.fc(1,"mat-icon",24),d.nc("click",(function(){d.Hc(t);const e=d.rc().$implicit;return d.rc().editDriver(e)})),d.Qc(2,"edit"),d.ec(),d.ec()}}function M(t,e){if(1&t){const t=d.gc();d.fc(0,"button",25),d.fc(1,"mat-icon",24),d.nc("click",(function(){d.Hc(t);const e=d.rc().$implicit;return d.rc().deleteDriver(e)})),d.Qc(2,"delete_outline"),d.ec(),d.ec()}}function Q(t,e){if(1&t&&(d.fc(0,"td",20),d.Pc(1,k,3,0,"button",21),d.Pc(2,M,3,0,"button",22),d.ec()),2&t){const t=d.rc();d.Ob(1),d.yc("ngIf",1==t.assigedRole.includes("driver_edit")),d.Ob(1),d.yc("ngIf",1==t.assigedRole.includes("driver_delete"))}}function B(t,e){1&t&&(d.fc(0,"th",26),d.Qc(1,"ID"),d.ec())}function j(t,e){if(1&t&&(d.fc(0,"td",20),d.Qc(1),d.ec()),2&t){const t=e.$implicit;d.Ob(1),d.Rc(t.id)}}function F(t,e){1&t&&(d.fc(0,"th",26),d.Qc(1,"Name"),d.ec())}function R(t,e){if(1&t&&(d.fc(0,"td",20),d.Qc(1),d.ec()),2&t){const t=e.$implicit;d.Ob(1),d.Rc(t.name)}}function q(t,e){1&t&&(d.fc(0,"th",26),d.Qc(1,"Identifer"),d.ec())}function T(t,e){if(1&t&&(d.fc(0,"td",20),d.Qc(1),d.ec()),2&t){const t=e.$implicit;d.Ob(1),d.Rc(t.uniqueid)}}function G(t,e){1&t&&d.ac(0,"tr",27)}function Z(t,e){1&t&&d.ac(0,"tr",28)}const U=function(){return[0]},E=function(){return[25,50,100]},V=[{path:"add",component:C,canActivate:[s.a],data:{roles:"driver_add"}},{path:"list",component:(()=>{class t{constructor(t,e,r,i,a){this.driverService=t,this.snackBar=e,this.router=r,this.dialogService=i,this.dialog=a,this.assigedRole=[],this.show=!0,this.idColumn="id",this.dataSource=new P.k([]),this.states=[{id:0,value:"Inactive"},{id:1,value:"Active"}],this.displayedColumns=["action","id","name","identifier"],this.assigedRole=JSON.parse(sessionStorage.getItem("rolesData"))}ngOnInit(){this.getAllDriver()}getAllDriver(){this.driverService.getAllDriver().subscribe(t=>{this.drivers=t,this.dataSource=new P.k(t),setTimeout(()=>this.dataSource.sort=this.sort),setTimeout(()=>this.dataSource.paginator=this.paginator)})}editDriver(t){this.router.navigate(["admin/traccar/driver/edit",t.id])}deleteDriver(t){this.dialogService.openConfirmDialog().afterClosed().subscribe(e=>{e&&(this.driverService.deleteDriver(t.id).subscribe(),this.deleteRowDataTable(t.id,this.idColumn,this.paginator,this.dataSource),this.openSnackBar())})}deleteRowDataTable(t,e,r,i){this.drivers=i.data;const a=this.drivers.findIndex(r=>r[e]===t);i.data.splice(a,1),i.paginator=r}openSnackBar(){this.snackBar.open("Deleted!!","Close",{duration:2e3,verticalPosition:"top",horizontalPosition:"end"})}applyFilter(t){this.dataSource.filter=t.trim().toLowerCase()}goAddItem(){this.router.navigate(["/admin/traccar/driver/add"])}downloadFile(t){const e=(t,e)=>null===e?"":e,r=Object.keys(t[0]);let i=t.map(t=>r.map(r=>JSON.stringify(t[r],e)).join(","));i.unshift(r.join(","));let a=i.join("\r\n");var o=new Blob([a],{type:"text/csv"});Object(x.saveAs)(o,"myFile.csv")}}return t.\u0275fac=function(e){return new(e||t)(d.Zb(m.a),d.Zb(l.a),d.Zb(n.c),d.Zb(_.a),d.Zb(w.b))},t.\u0275cmp=d.Tb({type:t,selectors:[["app-driver-list"]],viewQuery:function(t,e){var r;1&t&&(d.Uc(N.a,!0),d.Uc(I.a,!0)),2&t&&(d.Ec(r=d.oc())&&(e.sort=r.first),d.Ec(r=d.oc())&&(e.paginator=r.first))},decls:29,vars:8,consts:[["id","myname",1,"custom-style"],[1,"table-title"],[1,"search-div"],[1,"filter"],["matInput","","placeholder","search","autocomplete","off",3,"keyup"],["mat-button","",1,"mat-raised-button","mat-primary",3,"click"],["mat-button","",1,"add_button",3,"click"],["mat-table","","matTableExporter","","matSort","",1,"mat-elevation-z8",3,"dataSource","hiddenColumns"],["exporter","matTableExporter"],["matColumnDef","action"],["mat-header-cell","",4,"matHeaderCellDef"],["mat-cell","",4,"matCellDef"],["matColumnDef","id"],["mat-header-cell","","mat-sort-header","",4,"matHeaderCellDef"],["matColumnDef","name"],["matColumnDef","identifier"],["class","header-row","mat-header-row","",4,"matHeaderRowDef"],["class","row","mat-row","",4,"matRowDef","matRowDefColumns"],[3,"pageSizeOptions","pageSize"],["mat-header-cell",""],["mat-cell",""],["mat-icon-button","",4,"ngIf"],["mat-icon-button","","color","warn",4,"ngIf"],["mat-icon-button",""],[3,"click"],["mat-icon-button","","color","warn"],["mat-header-cell","","mat-sort-header",""],["mat-header-row","",1,"header-row"],["mat-row","",1,"row"]],template:function(t,e){1&t&&(d.fc(0,"div",0),d.fc(1,"div",1),d.fc(2,"h3"),d.Qc(3,"Driver Table"),d.ec(),d.ec(),d.fc(4,"div",2),d.fc(5,"mat-form-field",3),d.fc(6,"input",4),d.nc("keyup",(function(t){return e.applyFilter(t.target.value)})),d.ec(),d.ec(),d.fc(7,"button",5),d.nc("click",(function(){return e.downloadFile(e.drivers)})),d.Qc(8," CSV "),d.ec(),d.fc(9,"button",6),d.nc("click",(function(){return e.goAddItem()})),d.fc(10,"mat-icon"),d.Qc(11,"add"),d.ec(),d.ec(),d.ec(),d.fc(12,"table",7,8),d.dc(14,9),d.Pc(15,S,2,0,"th",10),d.Pc(16,Q,3,2,"td",11),d.cc(),d.dc(17,12),d.Pc(18,B,2,0,"th",13),d.Pc(19,j,2,1,"td",11),d.cc(),d.dc(20,14),d.Pc(21,F,2,0,"th",13),d.Pc(22,R,2,1,"td",11),d.cc(),d.dc(23,15),d.Pc(24,q,2,0,"th",13),d.Pc(25,T,2,1,"td",11),d.cc(),d.Pc(26,G,1,0,"tr",16),d.Pc(27,Z,1,0,"tr",17),d.ec(),d.ac(28,"mat-paginator",18),d.ec()),2&t&&(d.Ob(12),d.yc("dataSource",e.dataSource)("hiddenColumns",d.Ac(6,U)),d.Ob(14),d.yc("matHeaderRowDef",e.displayedColumns),d.Ob(1),d.yc("matRowDefColumns",e.displayedColumns),d.Ob(1),d.yc("pageSizeOptions",d.Ac(7,E))("pageSize",25))},directives:[f.c,p.b,v.b,g.a,P.j,c.a,N.a,P.c,P.e,P.b,P.g,P.i,I.a,P.d,P.a,i.m,N.b,P.f,P.h],styles:[".filter[_ngcontent-%COMP%]{width:15%;margin-right:50%}.add_button[_ngcontent-%COMP%]{width:10%;color:#fff;margin-left:10px!important;background-color:#00f}"]}),t})(),canActivate:[s.a],data:{roles:"driver_list"}},{path:"edit/:id",component:A,canActivate:[s.a],data:{roles:"driver_edit"}}];let z=(()=>{class t{}return t.\u0275mod=d.Xb({type:t}),t.\u0275inj=d.Wb({factory:function(e){return new(e||t)},imports:[[n.f.forChild(V)],n.f]}),t})(),H=(()=>{class t{}return t.\u0275mod=d.Xb({type:t}),t.\u0275inj=d.Wb({factory:function(e){return new(e||t)},imports:[[i.c,z,o.a,a.q,a.i,c.b]]}),t})()}}]);