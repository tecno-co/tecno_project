(window.webpackJsonp=window.webpackJsonp||[]).push([[11],{i7zL:function(t,e,i){"use strict";i.r(e),i.d(e,"TimesModule",function(){return lt});var c=i("ofXK"),a=i("zkoq"),s=i("7EHt"),n=i("bSwM"),r=i("MutI"),l=i("vxfF"),o=i("3Pt+"),b=i("iadO"),m=i("FKr1"),d=i("bTqV"),u=i("kmnG"),p=i("qFsG"),h=i("+0xr"),f=i("NFeN"),S=i("M9IT"),T=i("tyNb"),g=i("fXoL"),k=i("h4iA"),w=i("tk/3"),_=i("AytR");let y=(()=>{class t{constructor(t){this.http=t,this.API=_.a.API+"/item_record_times_filter_report",this.emitFilter=new g.o}getFilteredTimes(t,e=null){if("json"==t.format){let e={headers:new w.c({Authorization:"Bareer "+sessionStorage.token}),params:t};return this.http.get(""+this.API,e).subscribe(e=>{this.emitFilter.emit({data:e,params:t})})}if("excel"==t.format){let i={params:t,headers:new w.c({Authorization:"Bareer "+sessionStorage.token}),responseType:"blob"};this.http.get(""+this.API,i).subscribe(t=>{let i=t.type,c=[];c.push(t);let a=document.createElement("a");a.href=window.URL.createObjectURL(new Blob(c,{type:i})),a.setAttribute("download",e||"Report "+new Date),document.body.appendChild(a),a.click()})}}}return t.\u0275fac=function(e){return new(e||t)(g.Xb(w.a))},t.\u0275prov=g.Jb({token:t,factory:t.\u0275fac,providedIn:"root"}),t})();var v=i("qfBg"),F=i("ZOSX"),x=i("gBDi"),C=i("8cn1");function H(t,e){if(1&t){const t=g.Ub();g.Tb(0,"mat-list-item"),g.Tb(1,"mat-checkbox",12),g.ac("click",function(){g.uc(t);const i=e.$implicit;return g.ec().clickUserC(i.id)}),g.Hc(2),g.Sb(),g.Sb()}if(2&t){const t=e.$implicit;g.Bb(2),g.Kc(" ",t.firstname," ",t.lastname," ")}}function D(t,e){if(1&t){const t=g.Ub();g.Tb(0,"mat-list-item"),g.Tb(1,"mat-checkbox",12),g.ac("click",function(){g.uc(t);const i=e.$implicit;return g.ec().clickUserM(i.id)}),g.Hc(2),g.Sb(),g.Sb()}if(2&t){const t=e.$implicit;g.Bb(2),g.Kc(" ",t.firstname," ",t.lastname," ")}}function B(t,e){if(1&t){const t=g.Ub();g.Tb(0,"mat-list-item"),g.Tb(1,"mat-checkbox",12),g.ac("click",function(){g.uc(t);const i=e.$implicit;return g.ec().clickProject(i.id)}),g.Hc(2),g.Sb(),g.Sb()}if(2&t){const t=e.$implicit;g.Bb(2),g.Jc(" ",t.title," ")}}function O(t,e){if(1&t){const t=g.Ub();g.Tb(0,"mat-list-item"),g.Tb(1,"mat-checkbox",12),g.ac("click",function(){g.uc(t);const i=e.$implicit;return g.ec().clickItem(i.id)}),g.Hc(2),g.Sb(),g.Sb()}if(2&t){const t=e.$implicit;g.Bb(2),g.Jc(" ",t.title," ")}}function j(t,e){if(1&t){const t=g.Ub();g.Tb(0,"mat-list-item"),g.Tb(1,"mat-checkbox",12),g.ac("click",function(){g.uc(t);const i=e.$implicit;return g.ec().clickTimeType(i.id)}),g.Hc(2),g.Sb(),g.Sb()}if(2&t){const t=e.$implicit;g.Bb(2),g.Jc(" ",t.title," ")}}let M=(()=>{class t{constructor(t,e,i,c,a,s,n,r,l){this._usersService=t,this._itemsService=e,this._projectsService=i,this._timeTypesService=c,this._iconsService=a,this.fb=s,this.datepipe=n,this._timesFilterService=r,this.route=l,this.usersCSelected=[],this.usersMSelected=[],this.projectsSelected=[],this.timeTypesSelected=[],this.itemsSelected=[],this.hideRequiredControl=new o.f(!1),this.floatLabelControl=new o.f("auto")}ngOnInit(){this.route.data.subscribe(t=>{this.icons=t.icons}),this._usersService.getUsers().subscribe(t=>this.users=t),this._itemsService.getItems().subscribe(t=>this.items=t),this._projectsService.getProjects().subscribe(t=>this.projects=t),this._timeTypesService.getTimeTypes().subscribe(t=>this.timeTypes=t),this.dates=this.fb.group({hideRequired:this.hideRequiredControl,floatLabel:this.floatLabelControl,startDate:[],endDate:[]}),this.filtrar()}clickUserC(t){this.usersCSelected.includes(t)?this.usersCSelected=this.usersCSelected.filter(e=>e!=t):this.usersCSelected.push(t)}clickUserM(t){this.usersMSelected.includes(t)?this.usersMSelected=this.usersMSelected.filter(e=>e!=t):this.usersMSelected.push(t)}clickProject(t){this.projectsSelected.includes(t)?this.projectsSelected=this.projectsSelected.filter(e=>e!=t):this.projectsSelected.push(t)}clickItem(t){this.itemsSelected.includes(t)?this.itemsSelected=this.itemsSelected.filter(e=>e!=t):this.itemsSelected.push(t)}clickTimeType(t){this.timeTypesSelected.includes(t)?this.timeTypesSelected=this.timeTypesSelected.filter(e=>e!=t):this.timeTypesSelected.push(t)}parseDate(t){if(t+""=="Invalid Date"||null==t)return null;{let i;try{i=new Date(t)}catch(e){i=new Date}finally{return this.datepipe.transform(i,"yyyy-MM-dd")}}}getIcon(t){return this.icons.filter(e=>e.id==t)[0].title}filtrar(){var t={sysuser_id:sessionStorage.id,format:"json"};this.usersCSelected.length>0&&(t.user_creates_id=this.usersCSelected[0]),this.usersMSelected.length>0&&(t.user_updates_id=this.usersMSelected[0]),this.usersMSelected.length>0&&(t.user_updates_id=this.usersMSelected[0]),this.projectsSelected.length>0&&(t.project_id=this.projectsSelected[0]),this.itemsSelected.length>0&&(t.item_id=this.itemsSelected[0]),this.timeTypesSelected.length>0&&(t.time_type_id=this.timeTypesSelected[0]);var e=this.parseDate(this.dates.get("startDate").value);null!=e&&(t.date_from=e);var i=this.parseDate(this.dates.get("endDate").value);null!=i&&(t.date_until=i),this._timesFilterService.getFilteredTimes(t)}}return t.\u0275fac=function(e){return new(e||t)(g.Nb(v.a),g.Nb(F.a),g.Nb(x.a),g.Nb(k.a),g.Nb(C.a),g.Nb(o.e),g.Nb(c.e),g.Nb(y),g.Nb(T.a))},t.\u0275cmp=g.Hb({type:t,selectors:[["tecno-times-filter"]],decls:62,vars:16,consts:[[1,"general-container","mt-10"],[2,"width","100%"],[1,"example-viewport",3,"itemSize"],[4,"cdkVirtualFor","cdkVirtualForOf"],[3,"formGroup"],[1,"field-full"],["matInput","","formControlName","startDate",3,"matDatepicker"],["matSuffix","",3,"for"],["picker",""],["matInput","","formControlName","endDate",3,"matDatepicker"],["picker2",""],["mat-flat-button","","color","primary",2,"width","80%","margin","10%",3,"click"],[3,"click"]],template:function(t,e){if(1&t&&(g.Tb(0,"div",0),g.Tb(1,"mat-accordion",1),g.Tb(2,"mat-expansion-panel",1),g.Tb(3,"mat-expansion-panel-header"),g.Tb(4,"mat-panel-title"),g.Hc(5," Usuario creaci\xf3n "),g.Sb(),g.Sb(),g.Tb(6,"cdk-virtual-scroll-viewport",2),g.Tb(7,"mat-list"),g.Fc(8,H,3,2,"mat-list-item",3),g.Sb(),g.Sb(),g.Sb(),g.Tb(9,"mat-expansion-panel",1),g.Tb(10,"mat-expansion-panel-header"),g.Tb(11,"mat-panel-title"),g.Hc(12," Usuario modificaci\xf3n "),g.Sb(),g.Sb(),g.Tb(13,"cdk-virtual-scroll-viewport",2),g.Tb(14,"mat-list"),g.Fc(15,D,3,2,"mat-list-item",3),g.Sb(),g.Sb(),g.Sb(),g.Tb(16,"mat-expansion-panel",1),g.Tb(17,"mat-expansion-panel-header"),g.Tb(18,"mat-panel-title"),g.Hc(19," Proyectos "),g.Sb(),g.Sb(),g.Tb(20,"cdk-virtual-scroll-viewport",2),g.Tb(21,"mat-list"),g.Fc(22,B,3,1,"mat-list-item",3),g.Sb(),g.Sb(),g.Sb(),g.Tb(23,"mat-expansion-panel",1),g.Tb(24,"mat-expansion-panel-header"),g.Tb(25,"mat-panel-title"),g.Hc(26," Requerimientos "),g.Sb(),g.Sb(),g.Tb(27,"cdk-virtual-scroll-viewport",2),g.Tb(28,"mat-list"),g.Fc(29,O,3,1,"mat-list-item",3),g.Sb(),g.Sb(),g.Sb(),g.Tb(30,"mat-expansion-panel",1),g.Tb(31,"mat-expansion-panel-header"),g.Tb(32,"mat-panel-title"),g.Hc(33," Tipos "),g.Sb(),g.Sb(),g.Tb(34,"cdk-virtual-scroll-viewport",2),g.Tb(35,"mat-list"),g.Fc(36,j,3,1,"mat-list-item",3),g.Sb(),g.Sb(),g.Sb(),g.Tb(37,"mat-expansion-panel",1),g.Tb(38,"mat-expansion-panel-header"),g.Tb(39,"mat-panel-title"),g.Hc(40," Fecha "),g.Sb(),g.Sb(),g.Tb(41,"cdk-virtual-scroll-viewport",2),g.Tb(42,"form",4),g.Tb(43,"mat-list"),g.Tb(44,"mat-list-item"),g.Tb(45,"mat-form-field",5),g.Tb(46,"mat-label"),g.Hc(47,"Fecha Inicial"),g.Sb(),g.Ob(48,"input",6),g.Ob(49,"mat-datepicker-toggle",7),g.Ob(50,"mat-datepicker",null,8),g.Sb(),g.Sb(),g.Tb(52,"mat-list-item"),g.Tb(53,"mat-form-field",5),g.Tb(54,"mat-label"),g.Hc(55,"Fecha final"),g.Sb(),g.Ob(56,"input",9),g.Ob(57,"mat-datepicker-toggle",7),g.Ob(58,"mat-datepicker",null,10),g.Sb(),g.Sb(),g.Sb(),g.Sb(),g.Sb(),g.Sb(),g.Sb(),g.Tb(60,"button",11),g.ac("click",function(){return e.filtrar()}),g.Hc(61,"Filtrar"),g.Sb(),g.Sb()),2&t){const t=g.rc(51),i=g.rc(59);g.Bb(6),g.kc("itemSize",4),g.Bb(2),g.kc("cdkVirtualForOf",e.users),g.Bb(5),g.kc("itemSize",4),g.Bb(2),g.kc("cdkVirtualForOf",e.users),g.Bb(5),g.kc("itemSize",4),g.Bb(2),g.kc("cdkVirtualForOf",e.projects),g.Bb(5),g.kc("itemSize",4),g.Bb(2),g.kc("cdkVirtualForOf",e.items),g.Bb(5),g.kc("itemSize",4),g.Bb(2),g.kc("cdkVirtualForOf",e.timeTypes),g.Bb(5),g.kc("itemSize",4),g.Bb(1),g.kc("formGroup",e.dates),g.Bb(6),g.kc("matDatepicker",t),g.Bb(1),g.kc("for",t),g.Bb(7),g.kc("matDatepicker",i),g.Bb(1),g.kc("for",i)}},directives:[s.a,s.c,s.g,s.h,l.e,l.a,r.a,l.d,o.u,o.o,o.i,r.b,u.c,u.g,p.b,o.c,b.d,o.n,o.g,b.f,u.h,b.c,d.a,n.a],styles:[".general-container[_ngcontent-%COMP%]{width:400px}.checkbox[_ngcontent-%COMP%]{justify-content:flex-start!important;width:100%!important}.example-viewport[_ngcontent-%COMP%]{height:200px;width:350px}"]}),t})();function R(t,e){1&t&&(g.Tb(0,"th",27),g.Hc(1," Id Usuario "),g.Sb())}function P(t,e){if(1&t&&(g.Tb(0,"td",28),g.Hc(1),g.Sb()),2&t){const t=e.$implicit;g.Bb(1),g.Jc(" ",t.user_creates.id," ")}}function I(t,e){1&t&&(g.Tb(0,"th",29),g.Hc(1," Usuario "),g.Sb())}function $(t,e){if(1&t&&(g.Tb(0,"td",28),g.Hc(1),g.Sb()),2&t){const t=e.$implicit;g.Bb(1),g.Kc(" ",t.user_creates.firstname," ",t.user_creates.lastname," ")}}function z(t,e){1&t&&(g.Tb(0,"th",30),g.Hc(1," Tipo "),g.Sb())}function N(t,e){if(1&t&&(g.Tb(0,"td",28),g.Hc(1),g.Sb()),2&t){const t=e.$implicit;g.Bb(1),g.Jc(" ",t.time_type.title," ")}}function U(t,e){1&t&&(g.Tb(0,"th",31),g.Hc(1," Tarea "),g.Sb())}function q(t,e){if(1&t&&(g.Tb(0,"td",28),g.Hc(1),g.Sb()),2&t){const t=e.$implicit;g.Bb(1),g.Jc(" ",t.description," ")}}function A(t,e){1&t&&(g.Tb(0,"th",27),g.Hc(1," Fecha Trabajada "),g.Sb())}function J(t,e){if(1&t&&(g.Tb(0,"td",28),g.Hc(1),g.Sb()),2&t){const t=e.$implicit;g.Bb(1),g.Jc(" ",t.date_work," ")}}function L(t,e){1&t&&(g.Tb(0,"th",32),g.Hc(1," Tiempo "),g.Sb())}function Q(t,e){if(1&t&&(g.Tb(0,"td",28),g.Hc(1),g.Sb()),2&t){const t=e.$implicit;g.Bb(1),g.Kc(" ",t.hours,"h ",t.minutes,"m ")}}function K(t,e){1&t&&(g.Tb(0,"th",32),g.Hc(1," Proyecto "),g.Sb())}function V(t,e){if(1&t&&(g.Tb(0,"td",28),g.Hc(1),g.Sb()),2&t){const t=e.$implicit;g.Bb(1),g.Jc(" ",t.project.title," ")}}function E(t,e){1&t&&(g.Tb(0,"th",33),g.Hc(1," # Req "),g.Sb())}function G(t,e){if(1&t&&(g.Tb(0,"td",28),g.Hc(1),g.Sb()),2&t){const t=e.$implicit;g.Bb(1),g.Jc(" ",t.item.id," ")}}function X(t,e){1&t&&(g.Tb(0,"th",33),g.Hc(1," Requerimiento "),g.Sb())}function Z(t,e){if(1&t&&(g.Tb(0,"td",28),g.Hc(1),g.Sb()),2&t){const t=e.$implicit;g.Bb(1),g.Jc(" ",t.item.title," ")}}function W(t,e){1&t&&(g.Tb(0,"th",29),g.Hc(1," Actualizaci\xf3n "),g.Sb())}function Y(t,e){if(1&t&&(g.Tb(0,"td",28),g.Hc(1),g.Sb()),2&t){const t=e.$implicit;g.Bb(1),g.Kc(" ",t.user_updates.firstname," ",t.user_updates.lastname," ")}}function tt(t,e){1&t&&g.Ob(0,"tr",34)}function et(t,e){1&t&&g.Ob(0,"tr",35)}const it=function(){return[10,20,50,100]};function ct(t,e){if(1&t&&(g.Tb(0,"div",5),g.Tb(1,"table",6),g.Rb(2,7),g.Fc(3,R,2,0,"th",8),g.Fc(4,P,2,1,"td",9),g.Qb(),g.Rb(5,10),g.Fc(6,I,2,0,"th",11),g.Fc(7,$,2,2,"td",9),g.Qb(),g.Rb(8,12),g.Fc(9,z,2,0,"th",13),g.Fc(10,N,2,1,"td",9),g.Qb(),g.Rb(11,14),g.Fc(12,U,2,0,"th",15),g.Fc(13,q,2,1,"td",9),g.Qb(),g.Rb(14,16),g.Fc(15,A,2,0,"th",8),g.Fc(16,J,2,1,"td",9),g.Qb(),g.Rb(17,17),g.Fc(18,L,2,0,"th",18),g.Fc(19,Q,2,2,"td",9),g.Qb(),g.Rb(20,19),g.Fc(21,K,2,0,"th",18),g.Fc(22,V,2,1,"td",9),g.Qb(),g.Rb(23,20),g.Fc(24,E,2,0,"th",21),g.Fc(25,G,2,1,"td",9),g.Qb(),g.Rb(26,22),g.Fc(27,X,2,0,"th",21),g.Fc(28,Z,2,1,"td",9),g.Qb(),g.Rb(29,23),g.Fc(30,W,2,0,"th",11),g.Fc(31,Y,2,2,"td",9),g.Qb(),g.Fc(32,tt,1,0,"tr",24),g.Fc(33,et,1,0,"tr",25),g.Sb(),g.Ob(34,"mat-paginator",26),g.Sb()),2&t){const t=g.ec();g.Bb(1),g.kc("dataSource",t.dataSource),g.Bb(31),g.kc("matHeaderRowDef",t.displayedColumns),g.Bb(1),g.kc("matRowDefColumns",t.displayedColumns),g.Bb(1),g.kc("pageSizeOptions",g.mc(6,it))("length",100)("pageSize",50)}}function at(t,e){1&t&&(g.Tb(0,"div",36),g.Tb(1,"h1"),g.Hc(2,"No se encontraron registros"),g.Sb(),g.Sb())}const st=[{path:"",component:(()=>{class t{constructor(t,e){this._timeTypesService=t,this._timesFilterService=e,this.displayedColumns=["user_id","date_work","item_id","item_title","time_type","description","user_creates_name","project_title","time","user_updates_name"],this.dataSource=new h.p,this.datos=[]}set matPaginator(t){t._intl.itemsPerPageLabel="Elementos en pantalla:",this.paginator=t,this.setDataSourceAttributes()}setDataSourceAttributes(){this.dataSource.paginator=this.paginator}ngAfterViewInit(){this.dataSource.paginator=this.paginator}ngOnInit(){this._timeTypesService.getTimeTypes().subscribe(t=>this.timeTypes=t),this._timesFilterService.emitFilter.subscribe(t=>{var e=[];for(let i=0;i<t.data.length;i++)e.push(t.data[i]);this.dataSource.data=e,this.paramsDownload=t.params,this.paramsDownload.format="excel"})}getType(t){let e=this.timeTypes.filter(e=>e.id==t)[0];return null!=e?""+e.title:""}getTiempo(t,e){return(e=""+e).length<2&&(e="0"+e),(t=""+t).length<2&&(t="0"+t),`${t}:${e}`}download(){this._timesFilterService.getFilteredTimes(this.paramsDownload)}lleno(){return this.dataSource.data.length>0}}return t.\u0275fac=function(e){return new(e||t)(g.Nb(k.a),g.Nb(y))},t.\u0275cmp=g.Hb({type:t,selectors:[["tecno-times"]],viewQuery:function(t,e){var i;1&t&&(g.Lc(S.a,!0),g.Lc(S.a,!0)),2&t&&(g.qc(i=g.bc())&&(e.paginator=i.first),g.qc(i=g.bc())&&(e.matPaginator=i.first))},decls:12,vars:2,consts:[[1,"buttons"],["mat-mini-fab","","color","accent","aria-label","Descargar archivo Excel",3,"click"],[1,"container-general"],["class","container-list m-10 mat-elevation-z8","style","color: white;",4,"ngIf"],["class","container-message",4,"ngIf"],[1,"container-list","m-10","mat-elevation-z8",2,"color","white"],["mat-table","",3,"dataSource"],["matColumnDef","user_id"],["mat-header-cell","","style","width: 120px;",4,"matHeaderCellDef"],["mat-cell","","class","pr-20",4,"matCellDef"],["matColumnDef","user_creates_name"],["mat-header-cell","","style","width: 300px;",4,"matHeaderCellDef"],["matColumnDef","time_type"],["mat-header-cell","",4,"matHeaderCellDef"],["matColumnDef","description"],["mat-header-cell","","style","width: 400px;",4,"matHeaderCellDef"],["matColumnDef","date_work"],["matColumnDef","time"],["mat-header-cell","","style","width: 150px;",4,"matHeaderCellDef"],["matColumnDef","project_title"],["matColumnDef","item_id"],["mat-header-cell","","style","width: 500px;",4,"matHeaderCellDef"],["matColumnDef","item_title"],["matColumnDef","user_updates_name"],["mat-header-row","",4,"matHeaderRowDef"],["mat-row","",4,"matRowDef","matRowDefColumns"],["showFirstLastButtons","",3,"pageSizeOptions","length","pageSize"],["mat-header-cell","",2,"width","120px"],["mat-cell","",1,"pr-20"],["mat-header-cell","",2,"width","300px"],["mat-header-cell",""],["mat-header-cell","",2,"width","400px"],["mat-header-cell","",2,"width","150px"],["mat-header-cell","",2,"width","500px"],["mat-header-row",""],["mat-row",""],[1,"container-message"]],template:function(t,e){1&t&&(g.Tb(0,"h2"),g.Hc(1,"Tiempos/"),g.Sb(),g.Tb(2,"h1"),g.Hc(3,"Tiempos"),g.Sb(),g.Tb(4,"div",0),g.Tb(5,"button",1),g.ac("click",function(){return e.download()}),g.Tb(6,"mat-icon"),g.Hc(7,"get_app"),g.Sb(),g.Sb(),g.Sb(),g.Tb(8,"div",2),g.Ob(9,"tecno-times-filter"),g.Fc(10,ct,35,7,"div",3),g.Fc(11,at,3,0,"div",4),g.Sb()),2&t&&(g.Bb(10),g.kc("ngIf",e.lleno()),g.Bb(1),g.kc("ngIf",!e.lleno()))},directives:[d.a,f.a,M,c.m,h.o,h.c,h.i,h.b,h.k,h.n,S.a,h.h,h.a,h.j,h.m],styles:[".container-general[_ngcontent-%COMP%]{display:flex;flex-direction:row;justify-content:space-around;width:100%}.container-list[_ngcontent-%COMP%]{display:flex;flex-direction:column;width:calc(100% - 440px);overflow-y:auto}.container-message[_ngcontent-%COMP%]{display:flex;flex-direction:column;width:70%;height:100%;align-items:center;justify-items:center}mat-divider[_ngcontent-%COMP%]{margin-top:5px;margin-bottom:5px;width:100%;border-width:1px}.text-inside-grid[_ngcontent-%COMP%]{position:absolute;left:5px}mat-table[_ngcontent-%COMP%]{background-color:#ff0;width:100%}.buttons[_ngcontent-%COMP%]{display:flex;flex-direction:row;justify-content:flex-end;width:97%;margin-bottom:10px}"]}),t})()}];let nt=(()=>{class t{}return t.\u0275mod=g.Lb({type:t}),t.\u0275inj=g.Kb({factory:function(e){return new(e||t)},imports:[[T.e.forChild(st)],T.e]}),t})();const rt=[a.b,s.b,n.b,r.c,b.e,m.n,d.b,u.e,p.c,m.u,h.q,f.b,S.b];let lt=(()=>{class t{}return t.\u0275mod=g.Lb({type:t}),t.\u0275inj=g.Kb({factory:function(e){return new(e||t)},imports:[[c.c,rt,l.g,o.r,nt],a.b,s.b,n.b,r.c,b.e,m.n,d.b,u.e,p.c,m.u,h.q,f.b,S.b,l.g,o.r]}),t})()}}]);