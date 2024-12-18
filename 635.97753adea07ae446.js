"use strict";(self.webpackChunkfuse=self.webpackChunkfuse||[]).push([[635],{3635:(E,g,s)=>{s.r(g),s.d(g,{default:()=>A});var i=s(9417),c=s(8834),l=s(2102),h=s(9213),p=s(9042),v=s(9183),d=s(9192),k=s(7122),y=s(7028),e=s(4438),x=s(5524),F=s(6246);const w=["unlockSessionNgForm"],j=()=>["/sign-out"];function S(t,m){if(1&t&&(e.j41(0,"fuse-alert",9),e.EFF(1),e.k0s()),2&t){const o=e.XpG();e.Y8G("appearance","outline")("showIcon",!1)("type",o.alert.type)("@shake","error"===o.alert.type),e.R7$(),e.SpI(" ",o.alert.message," ")}}function b(t,m){1&t&&e.nrm(0,"mat-icon",15),2&t&&e.Y8G("svgIcon","heroicons_solid:eye")}function C(t,m){1&t&&e.nrm(0,"mat-icon",15),2&t&&e.Y8G("svgIcon","heroicons_solid:eye-slash")}function U(t,m){1&t&&(e.j41(0,"span"),e.EFF(1," Unlock your session "),e.k0s())}function R(t,m){1&t&&e.nrm(0,"mat-progress-spinner",17),2&t&&e.Y8G("diameter",24)("mode","indeterminate")}const A=[{path:"",component:(()=>{class t{constructor(o,a,n,r,u){this._activatedRoute=o,this._authService=a,this._formBuilder=n,this._router=r,this._userService=u,this.alert={type:"success",message:""},this.showAlert=!1}ngOnInit(){this._userService.user$.subscribe(o=>{this.name=o.name,this._email=o.email}),this.unlockSessionForm=this._formBuilder.group({name:[{value:this.name,disabled:!0}],password:["",i.k0.required]})}unlock(){this.unlockSessionForm.invalid||(this.unlockSessionForm.disable(),this.showAlert=!1,this._authService.unlockSession({email:this._email??"",password:this.unlockSessionForm.get("password").value}).subscribe(()=>{const o=this._activatedRoute.snapshot.queryParamMap.get("redirectURL")||"/signed-in-redirect";this._router.navigateByUrl(o)},o=>{this.unlockSessionForm.enable(),this.unlockSessionNgForm.resetForm({name:{value:this.name,disabled:!0}}),this.alert={type:"error",message:"Invalid password"},this.showAlert=!0}))}static#e=this.\u0275fac=function(a){return new(a||t)(e.rXU(d.nX),e.rXU(x.u),e.rXU(i.ze),e.rXU(d.Ix),e.rXU(F.D))};static#t=this.\u0275cmp=e.VBU({type:t,selectors:[["auth-unlock-session"]],viewQuery:function(a,n){if(1&a&&e.GBs(w,5),2&a){let r;e.mGM(r=e.lsd())&&(n.unlockSessionNgForm=r.first)}},standalone:!0,features:[e.aNF],decls:60,vars:13,consts:[["unlockSessionNgForm","ngForm"],["passwordField",""],[1,"flex","min-w-0","flex-auto","flex-col","items-center","sm:flex-row","sm:justify-center","md:items-start","md:justify-start"],[1,"w-full","px-4","py-8","sm:bg-card","sm:w-auto","sm:rounded-2xl","sm:p-12","sm:shadow","md:flex","md:h-full","md:w-1/2","md:items-center","md:justify-end","md:rounded-none","md:p-16","md:shadow-none"],[1,"mx-auto","w-full","max-w-80","sm:mx-0","sm:w-80"],[1,"w-12"],["src","images/logo/logo.svg"],[1,"mt-8","text-4xl","font-extrabold","leading-tight","tracking-tight"],[1,"mt-0.5","font-medium"],[1,"mt-8",3,"appearance","showIcon","type"],[1,"mt-8",3,"formGroup"],[1,"w-full"],["id","name","matInput","",3,"formControlName"],["id","password","matInput","","type","password",3,"formControlName"],["mat-icon-button","","type","button","matSuffix","",3,"click"],[1,"icon-size-5",3,"svgIcon"],["mat-flat-button","",1,"fuse-mat-button-large","mt-3","w-full",3,"click","color","disabled"],[3,"diameter","mode"],[1,"text-secondary","mt-8","text-md","font-medium"],[1,"ml-1","text-primary-500","hover:underline",3,"routerLink"],[1,"relative","hidden","h-full","w-1/2","flex-auto","items-center","justify-center","overflow-hidden","bg-gray-800","p-16","dark:border-l","md:flex","lg:px-28"],["viewBox","0 0 960 540","width","100%","height","100%","preserveAspectRatio","xMidYMax slice","xmlns","http://www.w3.org/2000/svg",1,"absolute","inset-0","pointer-events-none"],["fill","none","stroke","currentColor","stroke-width","100",1,"text-gray-700","opacity-25"],["r","234","cx","196","cy","23"],["r","234","cx","790","cy","491"],["viewBox","0 0 220 192","width","220","height","192","fill","none",1,"absolute","-top-16","-right-16","text-gray-700"],["id","837c3e70-6c3a-44e6-8854-cc48c737b659","x","0","y","0","width","20","height","20","patternUnits","userSpaceOnUse"],["x","0","y","0","width","4","height","4","fill","currentColor"],["width","220","height","192","fill","url(#837c3e70-6c3a-44e6-8854-cc48c737b659)"],[1,"relative","z-10","w-full","max-w-2xl"],[1,"text-7xl","font-bold","leading-none","text-gray-100"],[1,"mt-6","text-lg","leading-6","tracking-tight","text-gray-400"],[1,"mt-8","flex","items-center"],[1,"flex","flex-0","items-center","-space-x-1.5"],["src","images/avatars/female-18.jpg",1,"h-10","w-10","flex-0","rounded-full","object-cover","ring-4","ring-gray-800","ring-offset-1","ring-offset-gray-800"],["src","images/avatars/female-11.jpg",1,"h-10","w-10","flex-0","rounded-full","object-cover","ring-4","ring-gray-800","ring-offset-1","ring-offset-gray-800"],["src","images/avatars/male-09.jpg",1,"h-10","w-10","flex-0","rounded-full","object-cover","ring-4","ring-gray-800","ring-offset-1","ring-offset-gray-800"],["src","images/avatars/male-16.jpg",1,"h-10","w-10","flex-0","rounded-full","object-cover","ring-4","ring-gray-800","ring-offset-1","ring-offset-gray-800"],[1,"ml-4","font-medium","tracking-tight","text-gray-400"]],template:function(a,n){if(1&a){const r=e.RV6();e.j41(0,"div",2)(1,"div",3)(2,"div",4)(3,"div",5),e.nrm(4,"img",6),e.k0s(),e.j41(5,"div",7),e.EFF(6," Unlock your session "),e.k0s(),e.j41(7,"div",8),e.EFF(8," Your session is locked due to inactivity "),e.k0s(),e.DNE(9,S,2,5,"fuse-alert",9),e.j41(10,"form",10,0)(12,"mat-form-field",11)(13,"mat-label"),e.EFF(14,"Full name"),e.k0s(),e.nrm(15,"input",12),e.k0s(),e.j41(16,"mat-form-field",11)(17,"mat-label"),e.EFF(18,"Password"),e.k0s(),e.nrm(19,"input",13,1),e.j41(21,"button",14),e.bIt("click",function(){e.eBV(r);const f=e.sdS(20);return e.Njj(f.type="password"===f.type?"text":"password")}),e.DNE(22,b,1,1,"mat-icon",15)(23,C,1,1,"mat-icon",15),e.k0s(),e.j41(24,"mat-error"),e.EFF(25," Password is required "),e.k0s()(),e.j41(26,"button",16),e.bIt("click",function(){return e.eBV(r),e.Njj(n.unlock())}),e.DNE(27,U,2,0,"span")(28,R,1,2,"mat-progress-spinner",17),e.k0s(),e.j41(29,"div",18)(30,"span"),e.EFF(31,"I'm not"),e.k0s(),e.j41(32,"a",19),e.EFF(33),e.k0s()()()()(),e.j41(34,"div",20),e.qSk(),e.j41(35,"svg",21)(36,"g",22),e.nrm(37,"circle",23)(38,"circle",24),e.k0s()(),e.j41(39,"svg",25)(40,"defs")(41,"pattern",26),e.nrm(42,"rect",27),e.k0s()(),e.nrm(43,"rect",28),e.k0s(),e.joV(),e.j41(44,"div",29)(45,"div",30)(46,"div"),e.EFF(47,"Welcome to"),e.k0s(),e.j41(48,"div"),e.EFF(49,"our community"),e.k0s()(),e.j41(50,"div",31),e.EFF(51," Fuse helps developers to build organized and well coded dashboards full of beautiful and rich modules. Join us and start building your application today. "),e.k0s(),e.j41(52,"div",32)(53,"div",33),e.nrm(54,"img",34)(55,"img",35)(56,"img",36)(57,"img",37),e.k0s(),e.j41(58,"div",38),e.EFF(59," More than 17k people joined us, it's your turn "),e.k0s()()()()()}if(2&a){const r=e.sdS(20);e.R7$(9),e.vxM(n.showAlert?9:-1),e.R7$(),e.Y8G("formGroup",n.unlockSessionForm),e.R7$(5),e.Y8G("formControlName","name"),e.R7$(4),e.Y8G("formControlName","password"),e.R7$(3),e.vxM("password"===r.type?22:-1),e.R7$(),e.vxM("text"===r.type?23:-1),e.R7$(3),e.Y8G("color","primary")("disabled",n.unlockSessionForm.disabled),e.R7$(),e.vxM(n.unlockSessionForm.disabled?-1:27),e.R7$(),e.vxM(n.unlockSessionForm.disabled?28:-1),e.R7$(4),e.Y8G("routerLink",e.lJ4(12,j)),e.R7$(),e.JRh(n.name)}},dependencies:[y.F,i.YN,i.qT,i.me,i.BC,i.cb,i.X1,i.j4,i.JD,l.RG,l.rl,l.nJ,l.TL,l.yw,p.fS,p.fg,c.Hl,c.$z,c.iY,h.m_,h.An,v.D6,v.LG,d.Wk],encapsulation:2,data:{animation:k.X}})}return t})()}]}}]);