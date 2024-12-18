"use strict";(self.webpackChunkfuse=self.webpackChunkfuse||[]).push([[600],{4219:(T,f,r)=>{r.r(f),r.d(f,{default:()=>$});var d=r(9417),c=r(8834),u=r(2102),p=r(9213),g=r(9042),h=r(9183),w=r(9192),v=r(7122),y=r(7028);class x{static isEmptyInputValue(o){return null==o||0===o.length}static mustMatch(o,a){return i=>{const n=i.get(o),s=i.get(a);if(!n||!s||(s.hasError("mustMatch")&&(delete s.errors.mustMatch,s.updateValueAndValidity()),this.isEmptyInputValue(s.value)||n.value===s.value))return null;const l={mustMatch:!0};return s.setErrors(l),l}}}var F=r(980),t=r(4438),j=r(5524);const C=["resetPasswordNgForm"],P=()=>["/sign-in"];function k(e,o){if(1&e&&(t.j41(0,"fuse-alert",10),t.EFF(1),t.k0s()),2&e){const a=t.XpG();t.Y8G("appearance","outline")("showIcon",!1)("type",a.alert.type)("@shake","error"===a.alert.type),t.R7$(),t.SpI(" ",a.alert.message," ")}}function R(e,o){1&e&&t.nrm(0,"mat-icon",15),2&e&&t.Y8G("svgIcon","heroicons_solid:eye")}function b(e,o){1&e&&t.nrm(0,"mat-icon",15),2&e&&t.Y8G("svgIcon","heroicons_solid:eye-slash")}function E(e,o){1&e&&t.nrm(0,"mat-icon",15),2&e&&t.Y8G("svgIcon","heroicons_solid:eye")}function A(e,o){1&e&&t.nrm(0,"mat-icon",15),2&e&&t.Y8G("svgIcon","heroicons_solid:eye-slash")}function M(e,o){1&e&&(t.j41(0,"mat-error"),t.EFF(1," Password confirmation is required "),t.k0s())}function N(e,o){1&e&&(t.j41(0,"mat-error"),t.EFF(1," Passwords must match "),t.k0s())}function G(e,o){1&e&&(t.j41(0,"span"),t.EFF(1," Reset your password "),t.k0s())}function I(e,o){1&e&&t.nrm(0,"mat-progress-spinner",18),2&e&&t.Y8G("diameter",24)("mode","indeterminate")}const $=[{path:"",component:(()=>{class e{constructor(a,i){this._authService=a,this._formBuilder=i,this.alert={type:"success",message:""},this.showAlert=!1}ngOnInit(){this.resetPasswordForm=this._formBuilder.group({password:["",d.k0.required],passwordConfirm:["",d.k0.required]},{validators:x.mustMatch("password","passwordConfirm")})}resetPassword(){this.resetPasswordForm.invalid||(this.resetPasswordForm.disable(),this.showAlert=!1,this._authService.resetPassword(this.resetPasswordForm.get("password").value).pipe((0,F.j)(()=>{this.resetPasswordForm.enable(),this.resetPasswordNgForm.resetForm(),this.showAlert=!0})).subscribe(a=>{this.alert={type:"success",message:"Your password has been reset."}},a=>{this.alert={type:"error",message:"Something went wrong, please try again."}}))}static#t=this.\u0275fac=function(i){return new(i||e)(t.rXU(j.u),t.rXU(d.ze))};static#e=this.\u0275cmp=t.VBU({type:e,selectors:[["auth-reset-password"]],viewQuery:function(i,n){if(1&i&&t.GBs(C,5),2&i){let s;t.mGM(s=t.lsd())&&(n.resetPasswordNgForm=s.first)}},standalone:!0,features:[t.aNF],decls:66,vars:16,consts:[["resetPasswordNgForm","ngForm"],["passwordField",""],["passwordConfirmField",""],[1,"flex","min-w-0","flex-auto","flex-col","items-center","sm:flex-row","sm:justify-center","md:items-start","md:justify-start"],[1,"w-full","px-4","py-8","sm:bg-card","sm:w-auto","sm:rounded-2xl","sm:p-12","sm:shadow","md:flex","md:h-full","md:w-1/2","md:items-center","md:justify-end","md:rounded-none","md:p-16","md:shadow-none"],[1,"mx-auto","w-full","max-w-80","sm:mx-0","sm:w-80"],[1,"w-12"],["src","images/logo/logo.svg"],[1,"mt-8","text-4xl","font-extrabold","leading-tight","tracking-tight"],[1,"mt-0.5","font-medium"],[1,"mt-8",3,"appearance","showIcon","type"],[1,"mt-8",3,"formGroup"],[1,"w-full"],["id","password","matInput","","type","password",3,"formControlName"],["mat-icon-button","","type","button","matSuffix","",3,"click"],[1,"icon-size-5",3,"svgIcon"],["id","password-confirm","matInput","","type","password",3,"formControlName"],["mat-flat-button","",1,"fuse-mat-button-large","mt-3","w-full",3,"click","color","disabled"],[3,"diameter","mode"],[1,"text-secondary","mt-8","text-md","font-medium"],[1,"ml-1","text-primary-500","hover:underline",3,"routerLink"],[1,"relative","hidden","h-full","w-1/2","flex-auto","items-center","justify-center","overflow-hidden","bg-gray-800","p-16","dark:border-l","md:flex","lg:px-28"],["viewBox","0 0 960 540","width","100%","height","100%","preserveAspectRatio","xMidYMax slice","xmlns","http://www.w3.org/2000/svg",1,"absolute","inset-0","pointer-events-none"],["fill","none","stroke","currentColor","stroke-width","100",1,"text-gray-700","opacity-25"],["r","234","cx","196","cy","23"],["r","234","cx","790","cy","491"],["viewBox","0 0 220 192","width","220","height","192","fill","none",1,"absolute","-top-16","-right-16","text-gray-700"],["id","837c3e70-6c3a-44e6-8854-cc48c737b659","x","0","y","0","width","20","height","20","patternUnits","userSpaceOnUse"],["x","0","y","0","width","4","height","4","fill","currentColor"],["width","220","height","192","fill","url(#837c3e70-6c3a-44e6-8854-cc48c737b659)"],[1,"relative","z-10","w-full","max-w-2xl"],[1,"text-7xl","font-bold","leading-none","text-gray-100"],[1,"mt-6","text-lg","leading-6","tracking-tight","text-gray-400"],[1,"mt-8","flex","items-center"],[1,"flex","flex-0","items-center","-space-x-1.5"],["src","images/avatars/female-18.jpg",1,"h-10","w-10","flex-0","rounded-full","object-cover","ring-4","ring-gray-800","ring-offset-1","ring-offset-gray-800"],["src","images/avatars/female-11.jpg",1,"h-10","w-10","flex-0","rounded-full","object-cover","ring-4","ring-gray-800","ring-offset-1","ring-offset-gray-800"],["src","images/avatars/male-09.jpg",1,"h-10","w-10","flex-0","rounded-full","object-cover","ring-4","ring-gray-800","ring-offset-1","ring-offset-gray-800"],["src","images/avatars/male-16.jpg",1,"h-10","w-10","flex-0","rounded-full","object-cover","ring-4","ring-gray-800","ring-offset-1","ring-offset-gray-800"],[1,"ml-4","font-medium","tracking-tight","text-gray-400"]],template:function(i,n){if(1&i){const s=t.RV6();t.j41(0,"div",3)(1,"div",4)(2,"div",5)(3,"div",6),t.nrm(4,"img",7),t.k0s(),t.j41(5,"div",8),t.EFF(6," Reset your password "),t.k0s(),t.j41(7,"div",9),t.EFF(8," Create a new password for your account "),t.k0s(),t.DNE(9,k,2,5,"fuse-alert",10),t.j41(10,"form",11,0)(12,"mat-form-field",12)(13,"mat-label"),t.EFF(14,"Password"),t.k0s(),t.nrm(15,"input",13,1),t.j41(17,"button",14),t.bIt("click",function(){t.eBV(s);const m=t.sdS(16);return t.Njj(m.type="password"===m.type?"text":"password")}),t.DNE(18,R,1,1,"mat-icon",15)(19,b,1,1,"mat-icon",15),t.k0s(),t.j41(20,"mat-error"),t.EFF(21," Password is required "),t.k0s()(),t.j41(22,"mat-form-field",12)(23,"mat-label"),t.EFF(24,"Password (Confirm)"),t.k0s(),t.nrm(25,"input",16,2),t.j41(27,"button",14),t.bIt("click",function(){t.eBV(s);const m=t.sdS(26);return t.Njj(m.type="password"===m.type?"text":"password")}),t.DNE(28,E,1,1,"mat-icon",15)(29,A,1,1,"mat-icon",15),t.k0s(),t.DNE(30,M,2,0,"mat-error")(31,N,2,0,"mat-error"),t.k0s(),t.j41(32,"button",17),t.bIt("click",function(){return t.eBV(s),t.Njj(n.resetPassword())}),t.DNE(33,G,2,0,"span")(34,I,1,2,"mat-progress-spinner",18),t.k0s(),t.j41(35,"div",19)(36,"span"),t.EFF(37,"Return to"),t.k0s(),t.j41(38,"a",20),t.EFF(39,"sign in "),t.k0s()()()()(),t.j41(40,"div",21),t.qSk(),t.j41(41,"svg",22)(42,"g",23),t.nrm(43,"circle",24)(44,"circle",25),t.k0s()(),t.j41(45,"svg",26)(46,"defs")(47,"pattern",27),t.nrm(48,"rect",28),t.k0s()(),t.nrm(49,"rect",29),t.k0s(),t.joV(),t.j41(50,"div",30)(51,"div",31)(52,"div"),t.EFF(53,"Welcome to"),t.k0s(),t.j41(54,"div"),t.EFF(55,"our community"),t.k0s()(),t.j41(56,"div",32),t.EFF(57," Fuse helps developers to build organized and well coded dashboards full of beautiful and rich modules. Join us and start building your application today. "),t.k0s(),t.j41(58,"div",33)(59,"div",34),t.nrm(60,"img",35)(61,"img",36)(62,"img",37)(63,"img",38),t.k0s(),t.j41(64,"div",39),t.EFF(65," More than 17k people joined us, it's your turn "),t.k0s()()()()()}if(2&i){const s=t.sdS(16),l=t.sdS(26);t.R7$(9),t.vxM(n.showAlert?9:-1),t.R7$(),t.Y8G("formGroup",n.resetPasswordForm),t.R7$(5),t.Y8G("formControlName","password"),t.R7$(3),t.vxM("password"===s.type?18:-1),t.R7$(),t.vxM("text"===s.type?19:-1),t.R7$(6),t.Y8G("formControlName","passwordConfirm"),t.R7$(3),t.vxM("password"===l.type?28:-1),t.R7$(),t.vxM("text"===l.type?29:-1),t.R7$(),t.vxM(n.resetPasswordForm.get("passwordConfirm").hasError("required")?30:-1),t.R7$(),t.vxM(n.resetPasswordForm.get("passwordConfirm").hasError("mustMatch")?31:-1),t.R7$(),t.Y8G("color","primary")("disabled",n.resetPasswordForm.disabled),t.R7$(),t.vxM(n.resetPasswordForm.disabled?-1:33),t.R7$(),t.vxM(n.resetPasswordForm.disabled?34:-1),t.R7$(4),t.Y8G("routerLink",t.lJ4(15,P))}},dependencies:[y.F,d.YN,d.qT,d.me,d.BC,d.cb,d.X1,d.j4,d.JD,u.RG,u.rl,u.nJ,u.TL,u.yw,g.fS,g.fg,c.Hl,c.$z,c.iY,p.m_,p.An,h.D6,h.LG,w.Wk],encapsulation:2,data:{animation:v.X}})}return e})()}]}}]);