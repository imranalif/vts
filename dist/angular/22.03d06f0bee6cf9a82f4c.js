(window.webpackJsonp=window.webpackJsonp||[]).push([[22],{IwCN:function(t,e,n){"use strict";n.r(e),n.d(e,"LoginModule",(function(){return P}));var o=n("ofXK"),r=n("3Pt+"),c=n("YUcS"),i=n("jAig"),a=n("tyNb"),s=n("fXoL"),l=n("Wp6s");let p=(()=>{class t{constructor(){}ngOnInit(){}}return t.\u0275fac=function(e){return new(e||t)},t.\u0275cmp=s.Tb({type:t,selectors:[["app-access-denied"]],decls:3,vars:0,template:function(t,e){1&t&&(s.fc(0,"mat-card"),s.fc(1,"h3"),s.Oc(2,"ACCESS DENIED !!!"),s.ec(),s.ec())},directives:[l.a],styles:[""]}),t})();var m=n("Ofeh"),g=n("idFR"),d=n("M5z4"),u=n("XiUz"),f=n("kmnG"),h=n("qFsG"),b=n("bTqV");function C(t,e){1&t&&(s.fc(0,"div"),s.fc(1,"p",13),s.Oc(2,"Authentic Email and Password Required"),s.ec(),s.ec())}const x=[{path:"",component:(()=>{class t{constructor(t,e,n,o,r){this.fb=t,this.loginService=e,this.roleService=n,this.customerService=o,this.router=r,this.submitted=!1,this.roles=[]}ngOnInit(){this.myform=this.fb.group({email:["",[r.s.email,r.s.required]],password:["",[r.s.required,r.s.minLength(6)]]})}login(){this.myform.markAllAsTouched(),this.submitted=!0,this.myform.invalid?this.show=!0:this.loginService.login(this.myform.value).subscribe(t=>{"Customer"==t.data.user_type?(localStorage.setItem("accessToken",t.accessToken),localStorage.setItem("refreshToken",t.refreshToken),this.router.navigate(["/customer-map/info",t.data.customer_id])):this.roleService.getPermissionByRole(t.data.role).subscribe(e=>{console.log("teesttt"),e.forEach(e=>{this.roles.push(e.permission),localStorage.setItem("rolesData",JSON.stringify(this.roles)),localStorage.setItem("accessToken",t.accessToken),localStorage.setItem("refreshToken",t.refreshToken),localStorage.setItem("userData",JSON.stringify(t.data)),this.router.navigate(["admin/dashboard"])})})},t=>{this.show=!0})}}return t.\u0275fac=function(e){return new(e||t)(s.Zb(r.e),s.Zb(m.a),s.Zb(g.a),s.Zb(d.a),s.Zb(a.c))},t.\u0275cmp=s.Tb({type:t,selectors:[["app-login-page"]],decls:18,vars:2,consts:[["fxFlex","35%","fxFlex.xs","100%",1,"customStyle"],[1,"content"],["href","hrefs://www.bdcom.com/",1,"logo"],["src","assets/admin/images/traccar.png",1,"im",2,"width","300.984px","max-height","100px"],[3,"formGroup"],[1,"full"],["autocomplete","off","formControlName","email","matInput","","placeholder","Email"],["trim","blur","type","password","autocomplete","off","formControlName","password","matInput","","placeholder","Password"],[1,"submitButton"],["mat-raised-button","","color","primary",1,"btn-block",3,"click"],[1,"link"],["href","https://www.bdcom.com/",1,"bdlink"],[4,"ngIf"],[1,"red"]],template:function(t,e){1&t&&(s.fc(0,"mat-card",0),s.fc(1,"div",1),s.fc(2,"a",2),s.ac(3,"img",3),s.ec(),s.ec(),s.fc(4,"mat-card-content"),s.fc(5,"form",4),s.fc(6,"mat-card-content"),s.fc(7,"mat-form-field",5),s.ac(8,"input",6),s.ec(),s.fc(9,"mat-form-field",5),s.ac(10,"input",7),s.ec(),s.ec(),s.fc(11,"div",8),s.fc(12,"button",9),s.nc("click",(function(){return e.login()})),s.Oc(13,"Log in"),s.ec(),s.ec(),s.fc(14,"div",10),s.fc(15,"a",11),s.Oc(16,"Developed By BDCOM Online Ltd"),s.ec(),s.ec(),s.ec(),s.ec(),s.Nc(17,C,3,0,"div",12),s.ec()),2&t&&(s.Ob(5),s.xc("formGroup",e.myform),s.Ob(12),s.xc("ngIf",e.show))},directives:[l.a,u.a,l.c,r.t,r.n,r.g,f.c,r.c,h.b,r.m,r.f,b.b,o.l],styles:['.containerr[_ngcontent-%COMP%]{position:absolute;width:100%;background-color:#cff;height:100%}.content[_ngcontent-%COMP%]{margin-left:-20px}.content[_ngcontent-%COMP%], h1[_ngcontent-%COMP%]{position:relative}h1[_ngcontent-%COMP%]{margin-top:-50px;font-size:30px}.bdcom[_ngcontent-%COMP%]{font-weight:700}.bdcom[_ngcontent-%COMP%]:hover{color:#f0f}span[_ngcontent-%COMP%]{color:purple}.im[_ngcontent-%COMP%]{margin-left:50px;text-align:center}.mat-card[_ngcontent-%COMP%]{width:400px;margin-top:100px}.mat-card[_ngcontent-%COMP%]   .full[_ngcontent-%COMP%]{width:90%}.red[_ngcontent-%COMP%]{color:red}.positronx[_ngcontent-%COMP%]{text-decoration:none;color:#fff}.box[_ngcontent-%COMP%]{margin-left:30%;position:relative;top:-30px;opacity:1;float:left;padding:60px 50px 40px;width:100%;background:#fff;border-radius:10px;transform:scale(1);-webkit-transform:scale(1);-ms-transform:scale(1);z-index:5;max-width:330px}.box.back[_ngcontent-%COMP%]{top:-20px;opacity:.8}.box.back[_ngcontent-%COMP%], .box[_ngcontent-%COMP%]:before{transform:scale(.95);-webkit-transform:scale(.95);-ms-transform:scale(.95);z-index:-1}.box[_ngcontent-%COMP%]:before{content:"";width:100%;height:30px;border-radius:10px;position:absolute;top:-10px;background:hsla(0,0%,100%,.6);left:0}.login-wrapper[_ngcontent-%COMP%]   .example-form[_ngcontent-%COMP%]{min-width:100%;max-width:300px;width:100%}.login-wrapper[_ngcontent-%COMP%]   .btn-block[_ngcontent-%COMP%], .login-wrapper[_ngcontent-%COMP%]   .example-full-width[_ngcontent-%COMP%]{width:100%}.login-wrapper[_ngcontent-%COMP%]   mat-card-header[_ngcontent-%COMP%]{text-align:center;width:100%;display:block;font-weight:700}.login-wrapper[_ngcontent-%COMP%]   mat-card-header[_ngcontent-%COMP%]   mat-card-title[_ngcontent-%COMP%]{font-size:30px;margin:0}.login-wrapper[_ngcontent-%COMP%]   .mat-card[_ngcontent-%COMP%]{padding:40px 70px 20px}.login-wrapper[_ngcontent-%COMP%]   .mat-stroked-button[_ngcontent-%COMP%]{border:1px solid;line-height:54px;background:#fff7fa}.login-wrapper[_ngcontent-%COMP%]   .mat-form-field-appearance-legacy[_ngcontent-%COMP%]   .mat-form-field-infix[_ngcontent-%COMP%]{padding:.8375em 0}.submit-button[_ngcontent-%COMP%]{background-color:#1fc8db}h1[_ngcontent-%COMP%]{text-align:center;font-weight:700;color:#00f}.submitButton[_ngcontent-%COMP%]{margin-top:30px}.link[_ngcontent-%COMP%]{text-align:right;margin-top:20px}.bdlink[_ngcontent-%COMP%], .link[_ngcontent-%COMP%]{text-decoration:none}.btn-block[_ngcontent-%COMP%], .customStyle[_ngcontent-%COMP%]{border-radius:20px 20px 20px 20px}.customStyle[_ngcontent-%COMP%]{box-shadow:5px 10px 15px #1a237e}.customStyle[_ngcontent-%COMP%]   .title-style[_ngcontent-%COMP%]{color:#1a237e;text-align:center!important;margin-bottom:25px}.customStyle[_ngcontent-%COMP%]   .warning[_ngcontent-%COMP%]{color:red;margin-left:30px}.customStyle[_ngcontent-%COMP%]   .error_message[_ngcontent-%COMP%]{color:red;margin-left:20px;margin-top:-10px;font-size:12px}.mat-raised-button[_ngcontent-%COMP%]{margin-left:10%;border-radius:20px 20px 20px 20px;width:80%;border:1px solid #00f}.sidenav-content[_ngcontent-%COMP%]{height:120%}h1[_ngcontent-%COMP%]{font-weight:600}.logo[_ngcontent-%COMP%]{margin-left:5%;margin-top:5%;margin-bottom:3%}']}),t})()},{path:"deny",component:p}];let O=(()=>{class t{}return t.\u0275mod=s.Xb({type:t}),t.\u0275inj=s.Wb({factory:function(e){return new(e||t)},imports:[[a.f.forChild(x)],a.f]}),t})(),P=(()=>{class t{}return t.\u0275mod=s.Xb({type:t}),t.\u0275inj=s.Wb({factory:function(e){return new(e||t)},imports:[[o.c,O,i.a,r.q,r.i,c.a]]}),t})()},M5z4:function(t,e,n){"use strict";n.d(e,"a",(function(){return i}));var o=n("AytR"),r=n("fXoL"),c=n("tk/3");let i=(()=>{class t{constructor(t){this.http=t,this.url=o.a.apiUrl+"/customer/"}addCustomer(t){return this.http.post(this.url+"/addCustomer",t)}getAllCustomer(t){return this.http.post(this.url+"/listCustomer",t)}getCustomerById(t){return this.http.get(this.url+t+"/editCustomer")}updateCustomer(t,e){return this.http.put(this.url+t+"/updateCustomer",e)}getAllCustomerList(){return this.http.get(this.url+"/allCustomerList")}customerSearch(t){return this.http.post(this.url+"/customerSearch",t)}DeviceByCustomer(t){return this.http.get(this.url+t+"/getDeviceByCustomer")}DeviceByCustomerWithPosition(t){return this.http.get(this.url+t+"/getDeviceByCustomerWithPosition")}}return t.\u0275fac=function(e){return new(e||t)(r.jc(c.b))},t.\u0275prov=r.Vb({token:t,factory:t.\u0275fac,providedIn:"root"}),t})()}}]);