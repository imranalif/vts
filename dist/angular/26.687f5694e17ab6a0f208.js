(window.webpackJsonp=window.webpackJsonp||[]).push([[26],{n4TO:function(e,t,c){"use strict";c.r(t),c.d(t,"CustomerMapModule",(function(){return ne}));var i=c("ofXK"),o=c("tyNb"),n=c("4R65"),a=(c("b1UB"),c("CvBG"),c("mD1w"),c("eapw"),c("I8tt"),c("fXoL")),r=c("pD6V"),s=c("2Vo4");let l=(()=>{class e{constructor(){this.deviceDataSent=new s.a(""),this.deviceRemoveRequest=new s.a(""),this.deviceDetailsSent=new s.a(""),this.deviceLocationSent=new s.a(""),this.deviceHistorySent=new s.a(""),this.tabIndexSent=new s.a(""),this.deviceMoveSent=new s.a(""),this.deviceToggleSent=new s.a(""),this.motionConSent=new s.a(""),this.motionStoponSent=new s.a(""),this.deviceDataCatch=this.deviceDataSent.asObservable(),this.deviceRemoveFromMap=this.deviceRemoveRequest.asObservable(),this.deviceDetailsCatch=this.deviceDetailsSent.asObservable(),this.deviceLocationCatch=this.deviceLocationSent.asObservable(),this.deviceHistoryCatch=this.deviceHistorySent.asObservable(),this.tabIndexCatch=this.tabIndexSent.asObservable(),this.deviceMoveCatch=this.deviceMoveSent.asObservable(),this.deviceToggleCatch=this.deviceToggleSent.asObservable(),this.motionConCatch=this.deviceToggleSent.asObservable(),this.motionStoponCatch=this.motionStoponSent.asObservable()}deviceDataExchange(e){console.log(e),this.deviceDataSent.next(e)}deviceRemove(e){console.log(e),this.deviceRemoveRequest.next(e)}deviceDetails(e){console.log(e),this.deviceDetailsSent.next(e)}deviceLocation(e){console.log(e),this.deviceLocationSent.next(e)}deviceHistory(e){console.log(e),this.deviceHistorySent.next(e)}tabIndex(e){this.tabIndexSent.next(e)}deviceMove(e){console.log(e),this.deviceMoveSent.next(e)}deviceToggle(e){console.log(e),this.deviceToggleSent.next(e)}motionControl(e){console.log(e),this.motionConSent.next(e)}motionStop(e){this.motionStoponSent.next(e)}}return e.\u0275fac=function(t){return new(t||e)},e.\u0275prov=a.Vb({token:e,factory:e.\u0275fac,providedIn:"root"}),e})();var m=c("Ofeh"),d=c("XCAU"),u=c("XiUz"),h=c("bTqV"),g=c("STbY"),f=c("NFeN"),p=c("+0xr"),b=c("3Pt+"),v=c("M5z4"),O=c("wZkO"),x=c("kmnG"),y=c("qFsG"),C=c("7EHt"),M=c("MutI"),w=c("bSwM"),S=c("d3UM"),D=c("z17N"),k=c("FKr1"),P=c("Wp6s"),_=c("Xa2L");function T(e,t){if(1&e){const e=a.gc();a.fc(0,"mat-list-item",28),a.fc(1,"mat-checkbox",29),a.nc("change",(function(c){a.Fc(e);const i=t.$implicit;return a.rc(2).check(c.checked,i)})),a.ec(),a.fc(2,"a",30),a.nc("click",(function(){a.Fc(e);const c=t.$implicit;return a.rc(2).getLocation(c)})),a.Oc(3),a.ec(),a.fc(4,"a",31),a.fc(5,"mat-icon"),a.Oc(6,"more_vert"),a.ec(),a.ec(),a.fc(7,"mat-menu",13,14),a.fc(9,"button",15),a.Oc(10,"Hospital List"),a.ec(),a.fc(11,"button",16),a.Oc(12," Hospital Map "),a.ec(),a.ec(),a.ec()}if(2&e){const e=t.$implicit,c=a.Dc(8),i=a.rc(2);a.Ob(1),a.xc("checked",i.checkState(e.uniqueid)),a.Ob(2),a.Pc(e.name),a.Ob(1),a.xc("matMenuTriggerFor",c)}}function I(e,t){if(1&e){const e=a.gc();a.fc(0,"div"),a.fc(1,"div",21),a.fc(2,"mat-form-field",22),a.fc(3,"input",23),a.nc("keyup",(function(t){return a.Fc(e),a.rc().applyFilter(t.target.value)})),a.ec(),a.ec(),a.fc(4,"button",24),a.Oc(5," + "),a.ec(),a.fc(6,"button",24),a.Oc(7," - "),a.ec(),a.ec(),a.fc(8,"div"),a.fc(9,"mat-accordion"),a.fc(10,"mat-nav-list"),a.fc(11,"mat-expansion-panel",25),a.fc(12,"mat-expansion-panel-header"),a.fc(13,"mat-checkbox",26),a.nc("click",(function(t){return a.Fc(e),t.stopPropagation()}))("keydown",(function(t){return a.Fc(e),t.stopPropagation()}))("change",(function(t){return a.Fc(e),a.rc().checkByCustomer(t.checked)})),a.Oc(14),a.ec(),a.ec(),a.Nc(15,T,13,3,"mat-list-item",27),a.ec(),a.ec(),a.ec(),a.ec(),a.ec()}if(2&e){const e=a.rc();a.Ob(3),a.xc("checked",e.box),a.Ob(8),a.xc("expanded",!1),a.Ob(2),a.xc("checked",e.checkStateC(1)),a.Ob(1),a.Qc(" ",null==e.customer?null:e.customer.name," "),a.Ob(1),a.xc("ngForOf",e.customerDevices)}}function L(e,t){1&e&&(a.fc(0,"th",32),a.Oc(1,"Time"),a.ec())}function F(e,t){if(1&e&&(a.fc(0,"td",33),a.fc(1,"a"),a.Oc(2),a.sc(3,"date"),a.ec(),a.ec()),2&e){const e=t.$implicit;a.Ob(2),a.Pc(a.uc(3,1,e.eventtime,"medium"))}}function N(e,t){1&e&&(a.fc(0,"th",32),a.Oc(1,"Name"),a.ec())}function A(e,t){if(1&e&&(a.fc(0,"td",33),a.Oc(1),a.ec()),2&e){const e=a.rc();a.Ob(1),a.Pc(null==e.customerDevices[0]?null:e.customerDevices[0].name)}}function E(e,t){1&e&&(a.fc(0,"th",32),a.Oc(1,"Events"),a.ec())}function z(e,t){if(1&e&&(a.fc(0,"td",33),a.Oc(1),a.ec()),2&e){const e=t.$implicit;a.Ob(1),a.Pc(e.type)}}function H(e,t){1&e&&a.ac(0,"th",32)}function R(e,t){if(1&e&&(a.fc(0,"td",33),a.fc(1,"a",34),a.fc(2,"mat-icon"),a.Oc(3,"more_vert"),a.ec(),a.ec(),a.ec()),2&e){a.rc();const e=a.Dc(20);a.Ob(1),a.xc("matMenuTriggerFor",e)}}function B(e,t){1&e&&a.ac(0,"tr",35)}function Z(e,t){1&e&&a.ac(0,"tr",36)}function G(e,t){if(1&e&&(a.fc(0,"mat-option",50),a.Oc(1),a.ec()),2&e){const e=t.$implicit;a.xc("value",e.deviceid),a.Ob(1),a.Qc(" ",e.name," ")}}function q(e,t){if(1&e){const e=a.gc();a.fc(0,"div"),a.fc(1,"form",37),a.fc(2,"mat-form-field",38),a.fc(3,"mat-label"),a.Oc(4,"Device"),a.ec(),a.fc(5,"mat-select",39,40),a.nc("ngModelChange",(function(t){return a.Fc(e),a.rc().selected=t})),a.fc(7,"input",41),a.nc("keyup",(function(t){return a.Fc(e),a.rc().applyFilter(t.target.value)})),a.ec(),a.fc(8,"a",42),a.fc(9,"mat-icon",43),a.nc("click",(function(){return a.Fc(e),a.Dc(6).close()})),a.Oc(10,"clear"),a.ec(),a.ec(),a.Nc(11,G,2,2,"mat-option",44),a.ec(),a.ec(),a.fc(12,"mat-form-field"),a.ac(13,"input",45),a.ac(14,"owl-date-time",null,46),a.ec(),a.fc(16,"mat-form-field"),a.ac(17,"input",47),a.ac(18,"owl-date-time",null,48),a.ec(),a.ec(),a.fc(20,"button",49),a.nc("click",(function(){return a.Fc(e),a.rc().loadHistory()})),a.Oc(21," Load History "),a.ec(),a.ec()}if(2&e){const e=a.Dc(15),t=a.Dc(19),c=a.rc();a.Ob(1),a.xc("formGroup",c.myform),a.Ob(4),a.xc("ngModel",c.selected),a.Ob(6),a.xc("ngForOf",c.customerDevices),a.Ob(2),a.xc("owlDateTime",e)("owlDateTimeTrigger",e),a.Ob(4),a.xc("owlDateTime",t)("owlDateTimeTrigger",t)}}function j(e,t){1&e&&(a.fc(0,"mat-card",51),a.ac(1,"mat-progress-spinner",52),a.ec())}function Q(e,t){1&e&&(a.fc(0,"div"),a.Oc(1," No Records Found! "),a.ec())}let X=(()=>{class e{constructor(e,t,c,i,o){this.fb=e,this.route=t,this.customerService=c,this.deviceService=i,this.cusmapService=o,this.DeviceItem=[],this.devicelog=[],this.devicelogMatch=[],this.dataSource=new p.k([]),this.dataEvents=new p.k([]),this.displayedColumns2=["time","device_id","event","more"],this.selected=1}ngOnInit(){this.myform=this.fb.group({id:[],from_date:[""],to_date:[""],status:[""],customer_id:[""],d:[""]}),this.route.paramMap.subscribe(e=>{this.Id=e.get("id"),this.getCustomerDevices(this.Id)}),this.getAllEvents()}getCustomerDevices(e){this.customerService.getCustomerById(e).subscribe(e=>{this.customer=e,console.log(e)}),this.customerService.DeviceByCustomerWithPosition(e).subscribe(e=>{this.customerDevices=e,console.log(this.customerDevices),e.forEach((e,t)=>{this.devicelog.push(e.deviceid)}),this.dataSource=new p.k(e),console.log(this.devicelog)})}objectTab(e){console.log("index => ",e.index);var t=e.index;2==t&&setTimeout(()=>{const e=new Date;var t=new Date(e.getFullYear(),e.getMonth(),e.getDate());this.myform.patchValue({from_date:t,to_date:new Date})},100),0!=t&&1!=t||this.cusmapService.tabIndex({id:1})}applyFilter(e){}applyDevices(e){this.customerDevices=this.filterDevices.filter(t=>t.name.toLowerCase().indexOf(e)>-1)}check(e,t){e?(console.log(t),this.devicelogMatch.push(t.deviceid),this.devicelog.toString()===this.devicelogMatch.toString()&&this.DeviceItem.push(1),this.cusmapService.deviceDataExchange([t])):(this.devicelogMatch=this.devicelogMatch.filter(e=>e!==t.deviceid),this.DeviceItem=this.DeviceItem.filter(e=>1!==e),this.cusmapService.deviceRemove([t]))}checkByCustomer(e){e?(this.customerDevices.forEach((e,t)=>{this.DeviceItem.push(e.uniqueid)}),this.cusmapService.deviceDataExchange(this.customerDevices)):(this.DeviceItem=[],this.cusmapService.deviceRemove(this.customerDevices))}checkState(e){if(this.customerDevices)return this.DeviceItem.indexOf(e)>-1}checkStateC(e){if(this.customerDevices)return this.DeviceItem.indexOf(e)>-1}getAllEvents(){this.deviceService.getAllEvents().subscribe(e=>{this.Events=e,this.dataEvents=new p.k(e)})}loadHistory(){this.isLoading=!0;const e={from_date:this.myform.value.from_date,to_date:this.myform.value.to_date};console.log(this.myform.value),this.deviceService.getHistoryPostionBySearch(e).subscribe(e=>{console.log(e),this.historyData=e,this.isLoading=!1,this.cusmapService.deviceHistory(e)})}getLocation(e){this.cusmapService.deviceLocation({lat:e.latitude,lng:e.longitude}),this.cusmapService.deviceDetails(e)}}return e.\u0275fac=function(t){return new(t||e)(a.Zb(b.e),a.Zb(o.a),a.Zb(v.a),a.Zb(d.a),a.Zb(l))},e.\u0275cmp=a.Tb({type:e,selectors:[["app-side-menu"]],decls:32,vars:7,consts:[[1,"container"],[3,"selectedTabChange"],["allTabs",""],["label","Objects"],[4,"ngIf"],["label","Events"],["mat-table","","matTableExporter","",1,"mat-elevation-z8",3,"dataSource"],["matColumnDef","time"],["mat-header-cell","",4,"matHeaderCellDef"],["mat-cell","",4,"matCellDef"],["matColumnDef","device_id"],["matColumnDef","event"],["matColumnDef","more"],[1,"dropdown-content"],["hospital","matMenu"],["mat-menu-item","","routerLink","/"],["mat-menu-item","","routerLink","info/map"],["class","header-row","mat-header-row","",4,"matHeaderRowDef"],["class","row","mat-row","",4,"matRowDef","matRowDefColumns"],["label","History"],["style","display:flex; justify-content: center; align-items: center",4,"ngIf"],[1,"search-div"],[1,"filter"],["matInput","","placeholder","search","autocomplete","off",3,"checked","keyup"],[1,"btn"],[1,"space",2,"clear","both",3,"expanded"],[3,"checked","click","keydown","change"],["class","item",4,"ngFor","ngForOf"],[1,"item"],[1,"name",3,"checked","change"],[1,"devicename",3,"click"],[1,"b2",3,"matMenuTriggerFor"],["mat-header-cell",""],["mat-cell",""],[3,"matMenuTriggerFor"],["mat-header-row","",1,"header-row"],["mat-row","",1,"row"],[3,"formGroup"],[1,"half"],["formControlName","id",3,"ngModel","ngModelChange"],["sl",""],["matInput","","placeholder","search","autocomplete","off",1,"filterBox",3,"keyup"],[1,"closeButton"],[3,"click"],[3,"value",4,"ngFor","ngForOf"],["matInput","","formControlName","from_date","placeholder","Date Time",3,"owlDateTime","owlDateTimeTrigger"],["dt1",""],["matInput","","formControlName","to_date","placeholder","To Time",3,"owlDateTime","owlDateTimeTrigger"],["dt2",""],["mat-raised-button","","color","primary",1,"btn-block",3,"click"],[3,"value"],[2,"display","flex","justify-content","center","align-items","center"],["color","primary","mode","indeterminate"]],template:function(e,t){1&e&&(a.fc(0,"div",0),a.fc(1,"mat-tab-group",1,2),a.nc("selectedTabChange",(function(e){return t.objectTab(e)})),a.fc(3,"mat-tab",3),a.Nc(4,I,16,5,"div",4),a.ec(),a.fc(5,"mat-tab",5),a.fc(6,"table",6),a.dc(7,7),a.Nc(8,L,2,0,"th",8),a.Nc(9,F,4,4,"td",9),a.cc(),a.dc(10,10),a.Nc(11,N,2,0,"th",8),a.Nc(12,A,2,1,"td",9),a.cc(),a.dc(13,11),a.Nc(14,E,2,0,"th",8),a.Nc(15,z,2,1,"td",9),a.cc(),a.dc(16,12),a.Nc(17,H,1,0,"th",8),a.Nc(18,R,4,1,"td",9),a.cc(),a.fc(19,"mat-menu",13,14),a.fc(21,"button",15),a.Oc(22,"Alert"),a.ec(),a.fc(23,"button",16),a.Oc(24," Delete "),a.ec(),a.ec(),a.Nc(25,B,1,0,"tr",17),a.Nc(26,Z,1,0,"tr",18),a.ec(),a.ec(),a.fc(27,"mat-tab",19),a.Nc(28,q,22,7,"div",4),a.fc(29,"div"),a.Nc(30,j,2,0,"mat-card",20),a.ec(),a.Nc(31,Q,2,0,"div",4),a.ec(),a.ec(),a.ec()),2&e&&(a.Ob(4),a.xc("ngIf",t.customerDevices),a.Ob(2),a.xc("dataSource",t.dataEvents),a.Ob(19),a.xc("matHeaderRowDef",t.displayedColumns2),a.Ob(1),a.xc("matRowDefColumns",t.displayedColumns2),a.Ob(2),a.xc("ngIf",t.customerDevices),a.Ob(2),a.xc("ngIf",t.isLoading),a.Ob(1),a.xc("ngIf",""==t.historyData))},directives:[O.b,O.a,i.l,p.j,p.c,p.e,p.b,g.d,g.a,o.d,p.g,p.i,x.c,y.b,C.a,M.d,C.c,C.d,w.a,i.k,M.b,g.c,f.a,p.d,p.a,p.f,p.h,b.t,b.n,b.g,x.g,S.a,b.m,b.f,b.c,D.b,D.d,D.a,h.b,k.o,P.a,_.a],pipes:[i.e],styles:[".container[_ngcontent-%COMP%]{width:100%}table[_ngcontent-%COMP%]{width:95%!important} .mat-tab-label,  .mat-tab-label-active{min-width:0!important;padding:10px!important;margin:10px!important}.filter[_ngcontent-%COMP%]{margin-left:5px!important}.btn[_ngcontent-%COMP%]{width:30px!important;background-color:#00f;margin-left:5px}.mat-column-select[_ngcontent-%COMP%]{width:10%!important}.mat-column-name[_ngcontent-%COMP%]{width:80%!important}.mat-column-more[_ngcontent-%COMP%]{width:10%!important}a[_ngcontent-%COMP%]{cursor:pointer}mat-menu[_ngcontent-%COMP%]{margin-left:50px!important;position:absolute}.dropdown-content[_ngcontent-%COMP%]{display:none;position:absolute;background-color:#f9f9f9;min-width:160px;box-shadow:0 8px 16px 0 rgba(0,0,0,.2);z-index:20}.cdk-overlay-container[_ngcontent-%COMP%]{position:fixed!important;z-index:3000!important}.filterBox[_ngcontent-%COMP%]{width:150px;height:25px;margin-left:10px;margin-top:5px;margin-bottom:5px;border-radius:10px 10px 10px 10px;border:2px solid #000}.closeButton[_ngcontent-%COMP%]{margin-top:20px}.space[_ngcontent-%COMP%]{margin-bottom:2px}.group[_ngcontent-%COMP%]{font-weight:500}.group[_ngcontent-%COMP%], .item[_ngcontent-%COMP%]{font-size:14px}.item[_ngcontent-%COMP%]{width:120%}.devicename[_ngcontent-%COMP%]{margin-top:5px;margin-left:5px;text-align:center}.clock[_ngcontent-%COMP%]{width:70%!important}.mat-list-base[_ngcontent-%COMP%]   .mat-list-item[_ngcontent-%COMP%]   .mat-list-item-content[_ngcontent-%COMP%], .mat-list-base[_ngcontent-%COMP%]   .mat-list-option[_ngcontent-%COMP%]   .mat-list-item-content[_ngcontent-%COMP%]{display:flex;flex-direction:row;align-items:center;box-sizing:border-box;padding:0 10px;height:unset}"]}),e})();var U=c("zkoq");function $(e,t){1&e&&(a.fc(0,"h3"),a.Oc(1,"Name"),a.ec())}let V=(()=>{class e{constructor(e){this.cusmapService=e}ngOnInit(){this.cusmapService.deviceDetailsCatch.subscribe(e=>{e&&(console.log(e),this.deviceData=e,console.log(this.deviceData))})}}return e.\u0275fac=function(t){return new(t||e)(a.Zb(l))},e.\u0275cmp=a.Tb({type:e,selectors:[["app-bottom-details"]],decls:43,vars:8,consts:[["fxLayout","row",1,"container"],["fxFlex","30%"],[4,"ngIf"],["cols","1","rowHeight","20px"],[1,"vertical"],["fxFlex","70%"],["cols","4","rowHeight","20px"]],template:function(e,t){1&e&&(a.fc(0,"div",0),a.fc(1,"div",1),a.Nc(2,$,2,0,"h3",2),a.fc(3,"h3"),a.Oc(4),a.ec(),a.ac(5,"hr"),a.fc(6,"mat-grid-list",3),a.fc(7,"mat-grid-tile"),a.fc(8,"mat-label"),a.fc(9,"b"),a.Oc(10," Address:"),a.ec(),a.ec(),a.Oc(11),a.ec(),a.fc(12,"mat-grid-tile"),a.fc(13,"mat-label"),a.fc(14,"b"),a.Oc(15," Time:"),a.ec(),a.ec(),a.Oc(16),a.ec(),a.ec(),a.ec(),a.ac(17,"div",4),a.fc(18,"div",5),a.fc(19,"h3"),a.Oc(20,"Sensor"),a.ec(),a.ac(21,"hr"),a.fc(22,"mat-grid-list",6),a.fc(23,"mat-grid-tile"),a.fc(24,"mat-label"),a.fc(25,"b"),a.Oc(26," Phone:"),a.ec(),a.ec(),a.Oc(27),a.ec(),a.fc(28,"mat-grid-tile"),a.fc(29,"mat-label"),a.fc(30,"b"),a.Oc(31," Model:"),a.ec(),a.ec(),a.Oc(32),a.ec(),a.fc(33,"mat-grid-tile"),a.fc(34,"mat-label"),a.fc(35,"b"),a.Oc(36," Category:"),a.ec(),a.ec(),a.Oc(37),a.ec(),a.fc(38,"mat-grid-tile"),a.fc(39,"mat-label"),a.fc(40,"b"),a.Oc(41," Identification:"),a.ec(),a.ec(),a.Oc(42),a.ec(),a.ec(),a.ec(),a.ec()),2&e&&(a.Ob(2),a.xc("ngIf",!t.deviceData),a.Ob(2),a.Pc(null==t.deviceData?null:t.deviceData.name),a.Ob(7),a.Qc(" ",null==t.deviceData?null:t.deviceData.contact," "),a.Ob(5),a.Qc(" ",null==t.deviceData?null:t.deviceData.servertime," "),a.Ob(11),a.Qc(" ",null==t.deviceData?null:t.deviceData.contact," "),a.Ob(5),a.Qc(" ",null==t.deviceData?null:t.deviceData.model," "),a.Ob(5),a.Qc(" ",null==t.deviceData?null:t.deviceData.category," "),a.Ob(5),a.Qc(" ",null==t.deviceData?null:t.deviceData.attributes.status," "))},directives:[u.b,u.a,i.l,U.a,U.c,x.g],styles:[".container[_ngcontent-%COMP%]{width:100%;background-color:#f5f5f5}.f[_ngcontent-%COMP%]{width:30%;float:left}.f[_ngcontent-%COMP%], .s[_ngcontent-%COMP%]{height:100%;background-color:#deb887}.s[_ngcontent-%COMP%]{width:70%!important}.vertical[_ngcontent-%COMP%]{width:3px;background-color:grey}"]}),e})();function W(e,t){if(1&e&&(a.fc(0,"mat-option",13),a.Oc(1),a.ec()),2&e){const e=t.$implicit;a.xc("value",e.value),a.Ob(1),a.Qc(" ",e.value," ")}}let Y=(()=>{class e{constructor(e,t){this.cusmapService=e,this.fb=t,this.speedControl=[{value:1},{value:2},{value:3},{value:4},{value:5},{value:6}],this.selected=1}ngOnInit(){this.myform=this.fb.group({motion:[]})}start(){this.cusmapService.deviceMove({id:101})}stop(){this.cusmapService.motionStop({id:100})}toggle(){console.log("toggle"),this.cusmapService.deviceToggle({id:101})}onChange(e){this.cusmapService.motionControl(e)}}return e.\u0275fac=function(t){return new(t||e)(a.Zb(l),a.Zb(b.e))},e.\u0275cmp=a.Tb({type:e,selectors:[["app-history-info"]],decls:19,vars:3,consts:[[1,"container"],["label","Speed"],[1,"top_margin"],[1,"a"],[3,"click"],[1,"a",3,"formGroup"],[1,"space"],["formControlName","motion",3,"ngModel","ngModelChange"],[3,"value",4,"ngFor","ngForOf"],["label","Altitude"],["label","GSM"],["label","Battery"],["label","Ignition"],[3,"value"]],template:function(e,t){1&e&&(a.fc(0,"div",0),a.fc(1,"mat-tab-group"),a.fc(2,"mat-tab",1),a.fc(3,"div",2),a.fc(4,"a",3),a.fc(5,"mat-icon",4),a.nc("click",(function(){return t.start()})),a.Oc(6,"play_arrow"),a.ec(),a.ec(),a.fc(7,"a",3),a.fc(8,"mat-icon",4),a.nc("click",(function(){return t.toggle()})),a.Oc(9,"pause"),a.ec(),a.ec(),a.ec(),a.fc(10,"div"),a.fc(11,"form",5),a.fc(12,"mat-form-field",6),a.fc(13,"mat-select",7),a.nc("ngModelChange",(function(e){return t.selected=e}))("ngModelChange",(function(e){return t.onChange(e)})),a.Nc(14,W,2,2,"mat-option",8),a.ec(),a.ec(),a.ec(),a.ec(),a.ec(),a.ac(15,"mat-tab",9),a.ac(16,"mat-tab",10),a.ac(17,"mat-tab",11),a.ac(18,"mat-tab",12),a.ec(),a.ec()),2&e&&(a.Ob(11),a.xc("formGroup",t.myform),a.Ob(2),a.xc("ngModel",t.selected),a.Ob(1),a.xc("ngForOf",t.speedControl))},directives:[O.b,O.a,f.a,b.t,b.n,b.g,x.c,S.a,b.m,b.f,i.k,k.o],styles:[".container[_ngcontent-%COMP%]{width:100%}.a[_ngcontent-%COMP%]{float:left}.space[_ngcontent-%COMP%]{width:20%}"]}),e})();function J(e,t){if(1&e&&(a.fc(0,"div",23),a.fc(1,"a",24),a.ac(2,"img",25),a.ac(3,"span",26),a.ec(),a.ec()),2&e){a.rc();const e=a.Dc(24);a.Ob(1),a.xc("matMenuTriggerFor",e)}}function K(e,t){if(1&e&&(a.fc(0,"a",27),a.ac(1,"img",25),a.ac(2,"span",26),a.ec()),2&e){a.rc();const e=a.Dc(24);a.xc("matMenuTriggerFor",e)}}const ee=[{path:"info/:id",component:(()=>{class e{constructor(e,t,c,i,o){this.mediaObserver=e,this.cusmapService=t,this.loginService=c,this.routing=i,this.deviceService=o,this.devices=[],this.marker=[],this.markerArray=[],this.engineArray=[],this.parkArray=[],this.storeLatlng=[],this.timeArray=[]}ngOnInit(){this.mediaSub=this.mediaObserver.media$.subscribe(e=>{this.deviceXs="xs"===e.mqAlias}),this.myIcon=n.icon({iconUrl:"./assets/client/images/mm.png",iconSize:[20,40],iconAnchor:[12,39],color:"green",className:"icon"}),this.myIcon2=n.icon({iconUrl:"./assets/client/images/nn.png",iconSize:[20,40],iconAnchor:[12,39],color:"green",className:"icon"}),this.myIcon3=n.icon({iconUrl:"./assets/client/images/bike.png",iconSize:[40,80],iconAnchor:[12,69],color:"green",className:"icon"}),this.map=n.map("mapid",{center:[23.767776299452247,90.40417671203615],zoom:15,zoomControl:!1});var e=n.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png").addTo(this.map),t=n.tileLayer("http://{s}.google.com/vt/lyrs=m&x={x}&y={y}&z={z}",{center:[33.590241,130.421222],maxZoom:20,subdomains:["mt0","mt1","mt2","mt3"]});e.addTo(this.map);var c=n.layerGroup(this.markerArray);this.baseMaps={OSM:e,"Google Map":t};var i={Objects:c};this.deviceService.getMovingPosition({id:1}).subscribe(e=>{console.log(e)}),n.control.layers(this.baseMaps,i).addTo(this.map);var o=n.control.sidebar("sidebar").addTo(this.map);o.show(),n.easyButton("fa-exchange",(function(e,t){o.toggle()})).addTo(this.map);var a,r=n.control.bar("menu",{position:"bottom",visible:!1}).addTo(this.map);r.show(),n.easyButton("fa-exchange",(function(e,t){r.toggle()}),{position:"bottomright"}).addTo(this.map),this.historyBar=n.control.bar("history",{position:"bottom",visible:!1}).addTo(this.map),this.cusmapService.deviceDataCatch.subscribe(e=>{if(e){console.log(e),e.forEach(e=>{a=n.marker([e.latitude,e.longitude],{icon:this.myIcon3}).bindTooltip(e.name,{permanent:!0}).bindPopup(e.name+" <br> Address: "+e.contact+" <br> Model: "+e.model+" <br> Phone: "+e.phone+" <br> Type: "+e.category,{closeOnClick:!1,autoClose:!1}).addTo(this.map)});var t=n.polyline([]).addTo(this.map);setInterval(()=>{this.deviceService.getMovingPosition({id:1}).subscribe(c=>{console.log(e),c.forEach(e=>{n.layerGroup(),this.markerArray=n.layerGroup(),console.log(e),this.marker=a.setLatLng([e.latitude,e.longitude]).bindPopup(e.name+" <br> Address: "+e.contact+" <br> Model: "+e.model+" <br> Phone: "+e.phone+" <br> Type: "+e.category,{closeOnClick:!1,autoClose:!1}),this.line=t.addLatLng(n.latLng(e.latitude,e.longitude)).arrowheads({fill:!0,frequency:"endonly"})})})},1e4)}}),this.cusmapService.deviceRemoveFromMap.subscribe(e=>{e&&(console.log(this.markerArray),e.forEach(e=>{console.log(e.uniqueid),this.map.removeLayer(a)}))}),this.cusmapService.deviceLocationCatch.subscribe(e=>{e&&this.map.panTo(new n.LatLng(e.lat,e.lng))}),this.cusmapService.deviceHistoryCatch.subscribe(e=>{if(console.log(e),e){r.hide(),this.map.removeLayer(a),this.historyBar.show();var t=n.polyline([]).addTo(this.map);this.positions=e,""!=this.positions&&(this.positions.forEach((e,c)=>{let i=new Date(e.servertime);this.timeArray.push(i);var o=(this.timeArray[c]-this.timeArray[c-1])/6e4;o>20&&(this.engine=n.marker([e.latitude,e.longitude],{icon:this.myIcon}).bindPopup(e.deviceid+" <br> Address: "+e.latitude+" <br> Model: "+e.longitude+" <br> Speed: "+e.speed+" <br> Power: "+e.course,{closeOnClick:!1,autoClose:!1}).openPopup(),this.engineArray.push(this.engine),this.history=n.layerGroup(this.engineArray)),o<20&&o>5&&(this.park=n.marker([e.latitude,e.longitude],{icon:this.myIcon2}).bindPopup(e.deviceid+" <br> Address: "+e.latitude+" <br> Model: "+e.longitude+" <br> Speed: "+e.speed+" <br> Power: "+e.course,{closeOnClick:!1,autoClose:!1}).openPopup().addTo(this.map),this.parkArray.push(this.park),this.parking=n.layerGroup(this.parkArray)),this.route=t.addLatLng(n.latLng(e.latitude,e.longitude)),this.arrow=this.route.arrowheads({size:"12px",color:"red",yawn:40,frequency:10}),this.storeLatlng.push([e.latitude,e.longitude])}),this.parking.addTo(this.map),this.polylineMotion=n.motion.polyline(this.storeLatlng,{color:" "},{auto:!1,duration:3e4,easing:n.Motion.Ease.easeInOutQuart},{removeOnEnd:!0,icon:this.myIcon3}).addTo(this.map))}}),this.cusmapService.deviceMoveCatch.subscribe(e=>{e&&this.polylineMotion.motionStart()}),this.cusmapService.deviceToggleCatch.subscribe(e=>{e&&this.polylineMotion.motionToggle()}),this.cusmapService.motionConCatch.subscribe(e=>{e&&(console.log(e),this.polylineMotion.motionSpeed(e))}),this.cusmapService.motionStoponCatch.subscribe(e=>{e&&this.polylineMotion.motionStop()}),this.cusmapService.tabIndexCatch.subscribe(e=>{e&&(this.map.removeLayer(this.route),this.map.removeLayer(this.parking),r.show(),this.historyBar.hide())})}logout(){this.loginService.logout().subscribe(e=>{localStorage.removeItem("accessToken"),localStorage.removeItem("refreshToken"),this.routing.navigate(["/"])})}}return e.\u0275fac=function(t){return new(t||e)(a.Zb(r.g),a.Zb(l),a.Zb(m.a),a.Zb(o.c),a.Zb(d.a))},e.\u0275cmp=a.Tb({type:e,selectors:[["app-map-info"]],decls:47,vars:3,consts:[["id","t","fxLayout","row","fxLayout.xs","column","color","primary",1,"mi"],["fxFlex","70%","fxLayout","row","fxLayout.xs","100%"],["fxFlex","80%"],["src","assets/client/images/traccar.png","width","130","alt","avatar"],["fxLayout","row","fxFlex","30%",4,"ngIf"],["fxFlex","25%","fxLayout.xs","100%"],[1,"position"],["mat-button","",1,"menu",3,"matMenuTriggerFor"],[1,"col"],["mat-button","","routerLink","/",1,"col"],["hospital","matMenu"],["mat-menu-item","","routerLink","/"],["mat-menu-item","","routerLink","info/map"],["mat-button","",3,"matMenuTriggerFor",4,"ngIf"],["menu","matMenu"],["routerLink","authorization/users/user-profile","mat-menu-item",""],["routerLink","authorization/users/change-password","mat-menu-item",""],["mat-menu-item",""],[3,"click"],["id","mapid",2,"width","100%","height","90%"],["id","sidebar",2,"width","100%","height","100%"],["id","menu",2,"height","150px"],["id","history",2,"height","150px"],["fxLayout","row","fxFlex","30%"],["id","r","mat-button","",3,"matMenuTriggerFor"],["src","assets/client/images/avatar.png","width","35","alt","avatar",1,"logout-image"],[1,"align-middle"],["mat-button","",3,"matMenuTriggerFor"]],template:function(e,t){if(1&e&&(a.fc(0,"div",0),a.fc(1,"div",1),a.fc(2,"div",2),a.ac(3,"img",3),a.ec(),a.Nc(4,J,4,1,"div",4),a.ec(),a.fc(5,"div",5),a.fc(6,"div",6),a.fc(7,"button",7),a.fc(8,"span",8),a.Oc(9,"Tools"),a.ec(),a.fc(10,"mat-icon",8),a.Oc(11,"arrow_drop_down"),a.ec(),a.ec(),a.fc(12,"button",9),a.Oc(13,"Setup"),a.ec(),a.fc(14,"button",9),a.Oc(15,"Chat"),a.ec(),a.fc(16,"mat-menu",null,10),a.fc(18,"button",11),a.Oc(19,"Alerts"),a.ec(),a.fc(20,"button",12),a.Oc(21," Routes "),a.ec(),a.ec(),a.Nc(22,K,3,1,"a",13),a.fc(23,"mat-menu",null,14),a.fc(25,"a",15),a.fc(26,"mat-icon"),a.Oc(27,"account_circle"),a.ec(),a.fc(28,"span"),a.Oc(29,"Profile"),a.ec(),a.ec(),a.fc(30,"a",16),a.fc(31,"mat-icon"),a.Oc(32,"settings"),a.ec(),a.fc(33,"span"),a.Oc(34,"Change Pass "),a.ec(),a.ec(),a.fc(35,"a",17),a.fc(36,"mat-icon"),a.Oc(37,"exit_to_app"),a.ec(),a.fc(38,"span",18),a.nc("click",(function(){return t.logout()})),a.Oc(39,"Logout"),a.ec(),a.ec(),a.ec(),a.ec(),a.ec(),a.ec(),a.ac(40,"div",19),a.fc(41,"div",20),a.ac(42,"app-side-menu"),a.ec(),a.fc(43,"div",21),a.ac(44,"app-bottom-details"),a.ec(),a.fc(45,"div",22),a.ac(46,"app-history-info"),a.ec()),2&e){const e=a.Dc(17);a.Ob(4),a.xc("ngIf",t.deviceXs),a.Ob(3),a.xc("matMenuTriggerFor",e),a.Ob(15),a.xc("ngIf",!t.deviceXs)}},directives:[u.b,u.a,i.l,h.b,g.c,f.a,o.d,g.d,g.a,o.e,X,V,Y,h.a],styles:["h2[_ngcontent-%COMP%]{margin-top:3%}.mi[_ngcontent-%COMP%]{width:100%!important;background-color:#3f51b5;float:left}.space[_ngcontent-%COMP%]{flex:1 1 auto}.col[_ngcontent-%COMP%], .colm[_ngcontent-%COMP%]{color:#fff}.colm[_ngcontent-%COMP%]{margin-left:2%}.map[_ngcontent-%COMP%]{width:100%}a[_ngcontent-%COMP%]{cursor:pointer}table[_ngcontent-%COMP%]   td[_ngcontent-%COMP%]{padding:25px 30px!important}.tab[_ngcontent-%COMP%]{overflow:hidden;border:1px solid #ccc;background-color:#e63e3e}.tab[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]{background-color:inherit;float:left;border:none;outline:none;cursor:pointer;padding:14px 16px;transition:.3s}.tab[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]:hover{background-color:#ddd}.tab[_ngcontent-%COMP%]   button.active[_ngcontent-%COMP%]{background-color:#ccc}#bottommenu[_ngcontent-%COMP%]{width:900px!important}.easy-button-button.disabled[_ngcontent-%COMP%]{display:none}.position[_ngcontent-%COMP%]{margin-top:2%;margin-left:10%}.admin_button[_ngcontent-%COMP%]{margin-top:.5%}"]}),e})()}];let te=(()=>{class e{}return e.\u0275mod=a.Xb({type:e}),e.\u0275inj=a.Wb({factory:function(t){return new(t||e)},imports:[[o.f.forChild(ee)],o.f]}),e})();var ce=c("jAig"),ie=c("YUcS"),oe=c("xoCY");let ne=(()=>{class e{}return e.\u0275mod=a.Xb({type:e}),e.\u0275inj=a.Wb({factory:function(t){return new(t||e)},imports:[[i.c,te,ce.a,ie.a,oe.c,oe.e,b.q,b.i]]}),e})()}}]);