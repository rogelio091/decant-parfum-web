"use strict";(self.webpackChunkfuse=self.webpackChunkfuse||[]).push([[49],{2049:(E,d,o)=>{o.r(d),o.d(d,{default:()=>C});var r=o(9417),f=o(8834),n=o(2102),g=o(9042),u=o(9183),c=o(9192),h=o(7122),p=o(7028),w=o(980),e=o(4438),v=o(5524);const F=["forgotPasswordNgForm"],x=()=>["/sign-in"];function y(t,l){if(1&t&&(e.j41(0,"fuse-alert",8),e.EFF(1),e.k0s()),2&t){const s=e.XpG();e.Y8G("appearance","outline")("showIcon",!1)("type",s.alert.type)("@shake","error"===s.alert.type),e.R7$(),e.SpI(" ",s.alert.message," ")}}function j(t,l){1&t&&(e.j41(0,"mat-error"),e.EFF(1," Email address is required "),e.k0s())}function k(t,l){1&t&&(e.j41(0,"mat-error"),e.EFF(1," Please enter a valid email address "),e.k0s())}function P(t,l){1&t&&(e.j41(0,"span"),e.EFF(1," Send reset link "),e.k0s())}function b(t,l){1&t&&e.nrm(0,"mat-progress-spinner",13),2&t&&e.Y8G("diameter",24)("mode","indeterminate")}const C=[{path:"",component:(()=>{class t{constructor(s,i){this._authService=s,this._formBuilder=i,this.alert={type:"success",message:""},this.showAlert=!1}ngOnInit(){this.forgotPasswordForm=this._formBuilder.group({email:["",[r.k0.required,r.k0.email]]})}sendResetLink(){this.forgotPasswordForm.invalid||(this.forgotPasswordForm.disable(),this.showAlert=!1,this._authService.forgotPassword(this.forgotPasswordForm.get("email").value).pipe((0,w.j)(()=>{this.forgotPasswordForm.enable(),this.forgotPasswordNgForm.resetForm(),this.showAlert=!0})).subscribe(s=>{this.alert={type:"success",message:"Password reset sent! You'll receive an email if you are registered on our system."}},s=>{this.alert={type:"error",message:"Email does not found! Are you sure you are already a member?"}}))}static#e=this.\u0275fac=function(i){return new(i||t)(e.rXU(v.u),e.rXU(r.ze))};static#t=this.\u0275cmp=e.VBU({type:t,selectors:[["auth-forgot-password"]],viewQuery:function(i,a){if(1&i&&e.GBs(F,5),2&i){let m;e.mGM(m=e.lsd())&&(a.forgotPasswordNgForm=m.first)}},standalone:!0,features:[e.aNF],decls:52,vars:11,consts:[["forgotPasswordNgForm","ngForm"],[1,"flex","min-w-0","flex-auto","flex-col","items-center","sm:flex-row","sm:justify-center","md:items-start","md:justify-start"],[1,"w-full","px-4","py-8","sm:bg-card","sm:w-auto","sm:rounded-2xl","sm:p-12","sm:shadow","md:flex","md:h-full","md:w-1/2","md:items-center","md:justify-end","md:rounded-none","md:p-16","md:shadow-none"],[1,"mx-auto","w-full","max-w-80","sm:mx-0","sm:w-80"],[1,"w-12"],["src","images/logo/logo.svg"],[1,"mt-8","text-4xl","font-extrabold","leading-tight","tracking-tight"],[1,"mt-0.5","font-medium"],[1,"mt-8",3,"appearance","showIcon","type"],[1,"mt-8",3,"formGroup"],[1,"w-full"],["id","email","matInput","",3,"formControlName"],["mat-flat-button","",1,"fuse-mat-button-large","mt-3","w-full",3,"click","color","disabled"],[3,"diameter","mode"],[1,"text-secondary","mt-8","text-md","font-medium"],[1,"ml-1","text-primary-500","hover:underline",3,"routerLink"],[1,"relative","hidden","h-full","w-1/2","flex-auto","items-center","justify-center","overflow-hidden","bg-gray-800","p-16","dark:border-l","md:flex","lg:px-28"],["viewBox","0 0 960 540","width","100%","height","100%","preserveAspectRatio","xMidYMax slice","xmlns","http://www.w3.org/2000/svg",1,"absolute","inset-0","pointer-events-none"],["fill","none","stroke","currentColor","stroke-width","100",1,"text-gray-700","opacity-25"],["r","234","cx","196","cy","23"],["r","234","cx","790","cy","491"],["viewBox","0 0 220 192","width","220","height","192","fill","none",1,"absolute","-top-16","-right-16","text-gray-700"],["id","837c3e70-6c3a-44e6-8854-cc48c737b659","x","0","y","0","width","20","height","20","patternUnits","userSpaceOnUse"],["x","0","y","0","width","4","height","4","fill","currentColor"],["width","220","height","192","fill","url(#837c3e70-6c3a-44e6-8854-cc48c737b659)"],[1,"relative","z-10","w-full","max-w-2xl"],[1,"text-7xl","font-bold","leading-none","text-gray-100"],[1,"mt-6","text-lg","leading-6","tracking-tight","text-gray-400"],[1,"mt-8","flex","items-center"],[1,"flex","flex-0","items-center","-space-x-1.5"],["src","images/avatars/female-18.jpg",1,"h-10","w-10","flex-0","rounded-full","object-cover","ring-4","ring-gray-800","ring-offset-1","ring-offset-gray-800"],["src","images/avatars/female-11.jpg",1,"h-10","w-10","flex-0","rounded-full","object-cover","ring-4","ring-gray-800","ring-offset-1","ring-offset-gray-800"],["src","images/avatars/male-09.jpg",1,"h-10","w-10","flex-0","rounded-full","object-cover","ring-4","ring-gray-800","ring-offset-1","ring-offset-gray-800"],["src","images/avatars/male-16.jpg",1,"h-10","w-10","flex-0","rounded-full","object-cover","ring-4","ring-gray-800","ring-offset-1","ring-offset-gray-800"],[1,"ml-4","font-medium","tracking-tight","text-gray-400"]],template:function(i,a){if(1&i){const m=e.RV6();e.j41(0,"div",1)(1,"div",2)(2,"div",3)(3,"div",4),e.nrm(4,"img",5),e.k0s(),e.j41(5,"div",6),e.EFF(6," Forgot password? "),e.k0s(),e.j41(7,"div",7),e.EFF(8," Fill the form to reset your password "),e.k0s(),e.DNE(9,y,2,5,"fuse-alert",8),e.j41(10,"form",9,0)(12,"mat-form-field",10)(13,"mat-label"),e.EFF(14,"Email address"),e.k0s(),e.nrm(15,"input",11),e.DNE(16,j,2,0,"mat-error")(17,k,2,0,"mat-error"),e.k0s(),e.j41(18,"button",12),e.bIt("click",function(){return e.eBV(m),e.Njj(a.sendResetLink())}),e.DNE(19,P,2,0,"span")(20,b,1,2,"mat-progress-spinner",13),e.k0s(),e.j41(21,"div",14)(22,"span"),e.EFF(23,"Return to"),e.k0s(),e.j41(24,"a",15),e.EFF(25,"sign in "),e.k0s()()()()(),e.j41(26,"div",16),e.qSk(),e.j41(27,"svg",17)(28,"g",18),e.nrm(29,"circle",19)(30,"circle",20),e.k0s()(),e.j41(31,"svg",21)(32,"defs")(33,"pattern",22),e.nrm(34,"rect",23),e.k0s()(),e.nrm(35,"rect",24),e.k0s(),e.joV(),e.j41(36,"div",25)(37,"div",26)(38,"div"),e.EFF(39,"Welcome to"),e.k0s(),e.j41(40,"div"),e.EFF(41,"our community"),e.k0s()(),e.j41(42,"div",27),e.EFF(43," Fuse helps developers to build organized and well coded dashboards full of beautiful and rich modules. Join us and start building your application today. "),e.k0s(),e.j41(44,"div",28)(45,"div",29),e.nrm(46,"img",30)(47,"img",31)(48,"img",32)(49,"img",33),e.k0s(),e.j41(50,"div",34),e.EFF(51," More than 17k people joined us, it's your turn "),e.k0s()()()()()}2&i&&(e.R7$(9),e.vxM(a.showAlert?9:-1),e.R7$(),e.Y8G("formGroup",a.forgotPasswordForm),e.R7$(5),e.Y8G("formControlName","email"),e.R7$(),e.vxM(a.forgotPasswordForm.get("email").hasError("required")?16:-1),e.R7$(),e.vxM(a.forgotPasswordForm.get("email").hasError("email")?17:-1),e.R7$(),e.Y8G("color","primary")("disabled",a.forgotPasswordForm.disabled),e.R7$(),e.vxM(a.forgotPasswordForm.disabled?-1:19),e.R7$(),e.vxM(a.forgotPasswordForm.disabled?20:-1),e.R7$(4),e.Y8G("routerLink",e.lJ4(10,x)))},dependencies:[p.F,r.YN,r.qT,r.me,r.BC,r.cb,r.X1,r.j4,r.JD,n.RG,n.rl,n.nJ,n.TL,g.fS,g.fg,f.Hl,f.$z,u.D6,u.LG,c.Wk],encapsulation:2,data:{animation:h.X}})}return t})()}]}}]);