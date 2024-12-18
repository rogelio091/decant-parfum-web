"use strict";(self.webpackChunkfuse=self.webpackChunkfuse||[]).push([[653],{1653:(Y,p,n)=>{n.r(p),n.d(p,{default:()=>G});var r=n(9417),d=n(8834),c=n(2765),l=n(2102),g=n(9213),f=n(9042),h=n(9183),v=n(9192),y=n(7122),x=n(7028),e=n(4438),k=n(5524);const w=["signUpNgForm"],j=()=>["/sign-in"],F=()=>["./"];function U(t,m){if(1&t&&(e.j41(0,"fuse-alert",10),e.EFF(1),e.k0s()),2&t){const i=e.XpG();e.Y8G("appearance","outline")("showIcon",!1)("type",i.alert.type)("@shake","error"===i.alert.type),e.R7$(),e.SpI(" ",i.alert.message," ")}}function C(t,m){1&t&&(e.j41(0,"mat-error"),e.EFF(1," Full name is required "),e.k0s())}function b(t,m){1&t&&(e.j41(0,"mat-error"),e.EFF(1," Email address is required "),e.k0s())}function E(t,m){1&t&&(e.j41(0,"mat-error"),e.EFF(1," Please enter a valid email address "),e.k0s())}function S(t,m){1&t&&e.nrm(0,"mat-icon",17),2&t&&e.Y8G("svgIcon","heroicons_solid:eye")}function N(t,m){1&t&&e.nrm(0,"mat-icon",17),2&t&&e.Y8G("svgIcon","heroicons_solid:eye-slash")}function R(t,m){1&t&&(e.j41(0,"span"),e.EFF(1," Create your free account "),e.k0s())}function A(t,m){1&t&&e.nrm(0,"mat-progress-spinner",22),2&t&&e.Y8G("diameter",24)("mode","indeterminate")}const G=[{path:"",component:(()=>{class t{constructor(i,s,o){this._authService=i,this._formBuilder=s,this._router=o,this.alert={type:"success",message:""},this.showAlert=!1}ngOnInit(){this.signUpForm=this._formBuilder.group({name:["",r.k0.required],email:["",[r.k0.required,r.k0.email]],password:["",r.k0.required],company:[""],agreements:["",r.k0.requiredTrue]})}signUp(){this.signUpForm.invalid||(this.signUpForm.disable(),this.showAlert=!1,this._authService.signUp(this.signUpForm.value).subscribe(i=>{this._router.navigateByUrl("/confirmation-required")},i=>{this.signUpForm.enable(),this.signUpNgForm.resetForm(),this.alert={type:"error",message:"Something went wrong, please try again."},this.showAlert=!0}))}static#e=this.\u0275fac=function(s){return new(s||t)(e.rXU(k.u),e.rXU(r.ze),e.rXU(v.Ix))};static#t=this.\u0275cmp=e.VBU({type:t,selectors:[["auth-sign-up"]],viewQuery:function(s,o){if(1&s&&e.GBs(w,5),2&s){let a;e.mGM(a=e.lsd())&&(o.signUpNgForm=a.first)}},standalone:!0,features:[e.aNF],decls:79,vars:23,consts:[["signUpNgForm","ngForm"],["passwordField",""],[1,"flex","min-w-0","flex-auto","flex-col","items-center","sm:flex-row","sm:justify-center","md:items-start","md:justify-start"],[1,"w-full","px-4","py-8","sm:bg-card","sm:w-auto","sm:rounded-2xl","sm:p-12","sm:shadow","md:flex","md:h-full","md:w-1/2","md:items-center","md:justify-end","md:rounded-none","md:p-16","md:shadow-none"],[1,"mx-auto","w-full","max-w-80","sm:mx-0","sm:w-80"],[1,"w-12"],["src","images/logo/logo.svg"],[1,"mt-8","text-4xl","font-extrabold","leading-tight","tracking-tight"],[1,"mt-0.5","flex","items-baseline","font-medium"],[1,"ml-1","text-primary-500","hover:underline",3,"routerLink"],[1,"mt-8",3,"appearance","showIcon","type"],[1,"mt-8",3,"formGroup"],[1,"w-full"],["id","name","matInput","",3,"formControlName"],["id","email","matInput","",3,"formControlName"],["id","password","matInput","","type","password",3,"formControlName"],["mat-icon-button","","type","button","matSuffix","",3,"click"],[1,"icon-size-5",3,"svgIcon"],["id","company-confirm","matInput","",3,"formControlName"],[1,"mt-1.5","inline-flex","w-full","items-end"],[1,"-ml-2",3,"color","formControlName"],["mat-flat-button","",1,"fuse-mat-button-large","mt-6","w-full",3,"click","color","disabled"],[3,"diameter","mode"],[1,"relative","hidden","h-full","w-1/2","flex-auto","items-center","justify-center","overflow-hidden","bg-gray-800","p-16","dark:border-l","md:flex","lg:px-28"],["viewBox","0 0 960 540","width","100%","height","100%","preserveAspectRatio","xMidYMax slice","xmlns","http://www.w3.org/2000/svg",1,"absolute","inset-0","pointer-events-none"],["fill","none","stroke","currentColor","stroke-width","100",1,"text-gray-700","opacity-25"],["r","234","cx","196","cy","23"],["r","234","cx","790","cy","491"],["viewBox","0 0 220 192","width","220","height","192","fill","none",1,"absolute","-top-16","-right-16","text-gray-700"],["id","837c3e70-6c3a-44e6-8854-cc48c737b659","x","0","y","0","width","20","height","20","patternUnits","userSpaceOnUse"],["x","0","y","0","width","4","height","4","fill","currentColor"],["width","220","height","192","fill","url(#837c3e70-6c3a-44e6-8854-cc48c737b659)"],[1,"relative","z-10","w-full","max-w-2xl"],[1,"text-7xl","font-bold","leading-none","text-gray-100"],[1,"mt-6","text-lg","leading-6","tracking-tight","text-gray-400"],[1,"mt-8","flex","items-center"],[1,"flex","flex-0","items-center","-space-x-1.5"],["src","images/avatars/female-18.jpg",1,"h-10","w-10","flex-0","rounded-full","object-cover","ring-4","ring-gray-800","ring-offset-1","ring-offset-gray-800"],["src","images/avatars/female-11.jpg",1,"h-10","w-10","flex-0","rounded-full","object-cover","ring-4","ring-gray-800","ring-offset-1","ring-offset-gray-800"],["src","images/avatars/male-09.jpg",1,"h-10","w-10","flex-0","rounded-full","object-cover","ring-4","ring-gray-800","ring-offset-1","ring-offset-gray-800"],["src","images/avatars/male-16.jpg",1,"h-10","w-10","flex-0","rounded-full","object-cover","ring-4","ring-gray-800","ring-offset-1","ring-offset-gray-800"],[1,"ml-4","font-medium","tracking-tight","text-gray-400"]],template:function(s,o){if(1&s){const a=e.RV6();e.j41(0,"div",2)(1,"div",3)(2,"div",4)(3,"div",5),e.nrm(4,"img",6),e.k0s(),e.j41(5,"div",7),e.EFF(6," Sign up "),e.k0s(),e.j41(7,"div",8)(8,"div"),e.EFF(9,"Already have an account?"),e.k0s(),e.j41(10,"a",9),e.EFF(11,"Sign in "),e.k0s()(),e.DNE(12,U,2,5,"fuse-alert",10),e.j41(13,"form",11,0)(15,"mat-form-field",12)(16,"mat-label"),e.EFF(17,"Full name"),e.k0s(),e.nrm(18,"input",13),e.DNE(19,C,2,0,"mat-error"),e.k0s(),e.j41(20,"mat-form-field",12)(21,"mat-label"),e.EFF(22,"Email address"),e.k0s(),e.nrm(23,"input",14),e.DNE(24,b,2,0,"mat-error")(25,E,2,0,"mat-error"),e.k0s(),e.j41(26,"mat-form-field",12)(27,"mat-label"),e.EFF(28,"Password"),e.k0s(),e.nrm(29,"input",15,1),e.j41(31,"button",16),e.bIt("click",function(){e.eBV(a);const u=e.sdS(30);return e.Njj(u.type="password"===u.type?"text":"password")}),e.DNE(32,S,1,1,"mat-icon",17)(33,N,1,1,"mat-icon",17),e.k0s(),e.j41(34,"mat-error"),e.EFF(35," Password is required "),e.k0s()(),e.j41(36,"mat-form-field",12)(37,"mat-label"),e.EFF(38,"Company"),e.k0s(),e.nrm(39,"input",18),e.k0s(),e.j41(40,"div",19)(41,"mat-checkbox",20)(42,"span"),e.EFF(43,"I agree with"),e.k0s(),e.j41(44,"a",9),e.EFF(45,"Terms "),e.k0s(),e.j41(46,"span"),e.EFF(47,"and"),e.k0s(),e.j41(48,"a",9),e.EFF(49,"Privacy Policy "),e.k0s()()(),e.j41(50,"button",21),e.bIt("click",function(){return e.eBV(a),e.Njj(o.signUp())}),e.DNE(51,R,2,0,"span")(52,A,1,2,"mat-progress-spinner",22),e.k0s()()()(),e.j41(53,"div",23),e.qSk(),e.j41(54,"svg",24)(55,"g",25),e.nrm(56,"circle",26)(57,"circle",27),e.k0s()(),e.j41(58,"svg",28)(59,"defs")(60,"pattern",29),e.nrm(61,"rect",30),e.k0s()(),e.nrm(62,"rect",31),e.k0s(),e.joV(),e.j41(63,"div",32)(64,"div",33)(65,"div"),e.EFF(66,"Welcome to"),e.k0s(),e.j41(67,"div"),e.EFF(68,"our community"),e.k0s()(),e.j41(69,"div",34),e.EFF(70," Fuse helps developers to build organized and well coded dashboards full of beautiful and rich modules. Join us and start building your application today. "),e.k0s(),e.j41(71,"div",35)(72,"div",36),e.nrm(73,"img",37)(74,"img",38)(75,"img",39)(76,"img",40),e.k0s(),e.j41(77,"div",41),e.EFF(78," More than 17k people joined us, it's your turn "),e.k0s()()()()()}if(2&s){const a=e.sdS(30);e.R7$(10),e.Y8G("routerLink",e.lJ4(20,j)),e.R7$(2),e.vxM(o.showAlert?12:-1),e.R7$(),e.Y8G("formGroup",o.signUpForm),e.R7$(5),e.Y8G("formControlName","name"),e.R7$(),e.vxM(o.signUpForm.get("name").hasError("required")?19:-1),e.R7$(4),e.Y8G("formControlName","email"),e.R7$(),e.vxM(o.signUpForm.get("email").hasError("required")?24:-1),e.R7$(),e.vxM(o.signUpForm.get("email").hasError("email")?25:-1),e.R7$(4),e.Y8G("formControlName","password"),e.R7$(3),e.vxM("password"===a.type?32:-1),e.R7$(),e.vxM("text"===a.type?33:-1),e.R7$(6),e.Y8G("formControlName","company"),e.R7$(2),e.Y8G("color","primary")("formControlName","agreements"),e.R7$(3),e.Y8G("routerLink",e.lJ4(21,F)),e.R7$(4),e.Y8G("routerLink",e.lJ4(22,F)),e.R7$(2),e.Y8G("color","primary")("disabled",o.signUpForm.disabled),e.R7$(),e.vxM(o.signUpForm.disabled?-1:51),e.R7$(),e.vxM(o.signUpForm.disabled?52:-1)}},dependencies:[v.Wk,x.F,r.YN,r.qT,r.me,r.BC,r.cb,r.X1,r.j4,r.JD,l.RG,l.rl,l.nJ,l.TL,l.yw,f.fS,f.fg,d.Hl,d.$z,d.iY,g.m_,g.An,c.g7,c.So,h.D6,h.LG],encapsulation:2,data:{animation:y.X}})}return t})()}]}}]);