(window.webpackJsonp=window.webpackJsonp||[]).push([[8],{XZqt:function(e,t,o){"use strict";o.r(t),o.d(t,"ProjectsModule",function(){return G});var i=o("ofXK"),r=o("3Pt+"),c=o("f0Cb"),n=o("Wp6s"),a=o("bTqV"),s=o("NFeN"),l=o("STbY"),p=o("tyNb"),b=o("qFsG"),m=o("kmnG"),d=o("0IaG"),u=o("d3UM"),h=o("QibW"),g=o("bSwM"),f=o("/t3+"),C=o("zkoq"),j=o("dNgK"),S=o("fXoL"),_=o("AytR"),T=o("tk/3"),v=o("vkgz");let k=(()=>{class e{constructor(e){this.http=e,this.API=_.a.API+"/templates"}getTemplates(){var e={headers:new T.c({Authorization:"Bareer "+sessionStorage.token})};return this.http.get(this.API,e).pipe(Object(v.a)(console.log))}}return e.\u0275fac=function(t){return new(t||e)(S.Xb(T.a))},e.\u0275prov=S.Jb({token:e,factory:e.\u0275fac,providedIn:"root"}),e})(),y=(()=>{class e{constructor(e){this.http=e,this.API=_.a.API+"/project_categories"}getProjectCategories(){var e={headers:new T.c({Authorization:"Bareer "+sessionStorage.token})};return this.http.get(this.API,e).pipe(Object(v.a)(console.log))}}return e.\u0275fac=function(t){return new(t||e)(S.Xb(T.a))},e.\u0275prov=S.Jb({token:e,factory:e.\u0275fac,providedIn:"root"}),e})();var w=o("qfBg"),P=o("gBDi"),B=o("LK8z"),H=o("+d0d"),N=o("FKr1");function q(e,t){if(1&e&&(S.Tb(0,"mat-option",18),S.Hc(1),S.Sb()),2&e){const e=t.$implicit;S.kc("value",e.id),S.Bb(1),S.Ic(e.title)}}function R(e,t){if(1&e&&(S.Tb(0,"mat-option",18),S.Hc(1),S.Sb()),2&e){const e=t.$implicit;S.kc("value",e.id),S.Bb(1),S.Kc("",e.code," - ",e.title,"")}}function L(e,t){if(1&e&&(S.Tb(0,"mat-option",18),S.Hc(1),S.Sb()),2&e){const e=t.$implicit;S.kc("value",e.id),S.Bb(1),S.Ic(e.title)}}function M(e,t){if(1&e&&(S.Tb(0,"mat-option",18),S.Hc(1),S.Sb()),2&e){const e=t.$implicit;S.kc("value",e.id),S.Bb(1),S.Kc("",e.firstname," ",e.lastname,"")}}function O(e,t){if(1&e&&(S.Tb(0,"mat-option",18),S.Tb(1,"mat-icon"),S.Hc(2,"dashboard"),S.Sb(),S.Tb(3,"span"),S.Hc(4),S.Sb(),S.Sb()),2&e){const e=t.$implicit;S.kc("value",e.name),S.Bb(1),S.Eb("txt-",e.name,""),S.Bb(3),S.Ic(e.label)}}function x(e,t){if(1&e){const e=S.Ub();S.Tb(0,"button",30),S.ac("click",function(){return S.uc(e),S.ec().saveData()}),S.Hc(1,"Guardar"),S.Sb()}}function I(e,t){if(1&e){const e=S.Ub();S.Tb(0,"button",30),S.ac("click",function(){return S.uc(e),S.ec().modifyData()}),S.Hc(1,"Modificar"),S.Sb()}}let F=(()=>{class e{constructor(e,t,o,i,c,n,a,s){this._templateService=e,this._projectCategoryService=t,this._userService=o,this._projectsService=i,this._companiesService=c,this._colorsService=n,this.fb=a,this.dialogRef=s,this.templates=[],this.projectCategories=[],this.users=[],this.companies=[],this.colors=[],this.modificaciones={},this.hideRequiredControl=new r.f(!1),this.floatLabelControl=new r.f("auto"),this.flagClose=!1}ngOnInit(){console.log("mode",this.mode),this.options=this.fb.group({hideRequired:this.hideRequiredControl,floatLabel:this.floatLabelControl,projectNameControl:[null],codeControl:[null],projectDescriptionControl:[null],companyControl:[null,[r.t.required]],templateControl:[null],project_categoryControl:[null],userReporterControl:[null],is_multiple_resourcesControl:[null],is_multiple_componentsControl:[null],bgColorControl:[null]}),"modify"==this.mode&&(this.options.get("projectNameControl").setValue(this.project.title),this.options.get("codeControl").setValue(this.project.code),this.options.get("projectDescriptionControl").setValue(this.project.description),this.options.get("companyControl").setValue(this.project.company.id),this.options.get("templateControl").setValue(this.project.template.id),this.options.get("project_categoryControl").setValue(this.project.project_category.id),this.options.get("userReporterControl").setValue(this.project.sysuser.id),this.options.get("is_multiple_resourcesControl").setValue(this.project.is_multiple_resources),this.options.get("is_multiple_componentsControl").setValue(this.project.is_multiple_components),this.options.get("bgColorControl").setValue(this.project.color)),this.colors=this._colorsService.getColors(),this._companiesService.getCompanies().subscribe(e=>this.companies=e),this._templateService.getTemplates().subscribe(e=>this.templates=e),this._projectCategoryService.getProjectCategories().subscribe(e=>this.projectCategories=e),this._userService.getUsers().subscribe(e=>this.users=e)}_openCompanies(e){e&&this._companiesService.getCompanies().subscribe(e=>this.companies=e)}_openTemplates(e){e&&this._templateService.getTemplates().subscribe(e=>this.templates=e)}_openProjectCategories(e){e&&this._projectCategoryService.getProjectCategories().subscribe(e=>{this.projectCategories=e,this.projectCategories=this.projectCategories.filter(e=>e.company_id==this.options.get("companyControl").value)})}_openUsers(e){e&&this._userService.getUsers().subscribe(e=>this.users=e)}getColorLabel(){var e=this.colors.filter(e=>e.name==this.options.get("bgColorControl").value)[0];return null!=e?e.label:""}onNoClick(){console.log("onNoClick")}saveData(){this.newProject={id:0,code:this.options.get("codeControl").value,title:this.options.get("projectNameControl").value,description:this.options.get("projectDescriptionControl").value,company_id:this.options.get("companyControl").value,template_id:this.options.get("templateControl").value,project_category_id:this.options.get("project_categoryControl").value,lead_id:this.options.get("userReporterControl").value,is_multiple_resources:this.options.get("is_multiple_resourcesControl").value,is_multiple_components:this.options.get("is_multiple_componentsControl").value,color:this.options.get("bgColorControl").value,is_active:"1"},this._projectsService.addProject(this.newProject),this.dialogRef.close(),this.newProject={}}modifyData(){this.newProject={id:this.project.id,code:this.options.get("codeControl").value,title:this.options.get("projectNameControl").value,description:this.options.get("projectDescriptionControl").value,company_id:this.options.get("companyControl").value,template_id:this.options.get("templateControl").value,project_category_id:this.options.get("project_categoryControl").value,lead_id:this.options.get("userReporterControl").value,is_multiple_resources:this.options.get("is_multiple_resourcesControl").value,is_multiple_components:this.options.get("is_multiple_componentsControl").value,color:this.options.get("bgColorControl").value,is_active:this.project.is_active},this.project.code!=this.newProject.code&&(this.modificaciones.code=this.newProject.code),this.project.title!=this.newProject.title&&(this.modificaciones.title=this.newProject.title),this.project.description!=this.newProject.description&&(this.modificaciones.description=this.newProject.description),this.project.company.id!=this.newProject.company_id&&(this.modificaciones.company_id=this.newProject.company_id),this.project.template.id!=this.newProject.template_id&&(this.modificaciones.template_id=this.newProject.template_id),this.project.project_category.id!=this.newProject.project_category_id&&(this.modificaciones.project_category_id=this.newProject.project_category_id),this.project.sysuser.id!=this.newProject.lead_id&&(this.modificaciones.lead_id=this.newProject.lead_id),this.project.is_multiple_resources!=this.newProject.is_multiple_resources&&(this.modificaciones.is_multiple_resources=this.newProject.is_multiple_resources),this.project.is_multiple_components!=this.newProject.is_multiple_components&&(this.modificaciones.is_multiple_components=this.newProject.is_multiple_components),this.project.color!=this.newProject.color&&(this.modificaciones.color=this.newProject.color),this.project.is_active!=this.newProject.is_active&&(this.modificaciones.is_active=this.newProject.is_active),this._projectsService.modifyProject(this.project.id,this.modificaciones),this.dialogRef.close(),this.newProject={},this.modificaciones={}}}return e.\u0275fac=function(t){return new(t||e)(S.Nb(k),S.Nb(y),S.Nb(w.a),S.Nb(P.a),S.Nb(B.a),S.Nb(H.a),S.Nb(r.e),S.Nb(d.f))},e.\u0275cmp=S.Hb({type:e,selectors:[["tecno-projects-form"]],inputs:{mode:"mode",project:"project"},decls:128,vars:68,consts:[["color","primary",1,"mat-elevation-z4",2,"border-top-left-radius","5px","border-top-right-radius","5px","width","50vw"],[1,"mat-headline"],[1,"example-container","bg-color-white","mat-elevation-z4"],[3,"formGroup"],["cols","4","rowHeight","100px"],[3,"colspan","rowspan"],["appearance","fill",1,"field-full","pl-5",3,"floatLabel"],["matInput","","formControlName","projectNameControl","placeholder","Nombre del proyecto","required",""],["matInput","","formControlName","codeControl","placeholder","C\xf3digo del proyecto","required",""],["appearance","fill",1,"field-full",3,"floatLabel"],["matInput","","formControlName","projectDescriptionControl","placeholder","Descripci\xf3n","required",""],["appearance","fill",1,"field-full","pl-5",3,"hideRequiredMarker","floatLabel"],["required","","formControlName","companyControl",3,"openedChange"],[3,"value",4,"ngFor","ngForOf"],["required","","formControlName","templateControl",3,"openedChange"],["required","","formControlName","project_categoryControl",3,"openedChange"],["required","","formControlName","userReporterControl",3,"openedChange"],["required","","formControlName","is_multiple_resourcesControl"],[3,"value"],["selected","",3,"value"],["required","","formControlName","is_multiple_componentsControl"],["required","","formControlName","bgColorControl"],["appearance","fill",3,"hideRequiredMarker","floatLabel"],["required",""],["value","option"],["value","option2"],["value","option3"],["align","end"],["mat-button","","mat-dialog-close","","color","primary"],["mat-button","","cdkFocusInitial","","color","primary",3,"click",4,"ngIf"],["mat-button","","cdkFocusInitial","","color","primary",3,"click"]],template:function(e,t){1&e&&(S.Tb(0,"mat-toolbar",0),S.Tb(1,"h1",1),S.Hc(2,"Nuevo Proyecto"),S.Sb(),S.Sb(),S.Tb(3,"div",2),S.Tb(4,"form",3),S.Tb(5,"mat-grid-list",4),S.Tb(6,"mat-grid-tile",5),S.Tb(7,"mat-form-field",6),S.Tb(8,"mat-label"),S.Hc(9,"Proyecto"),S.Sb(),S.Ob(10,"input",7),S.Sb(),S.Sb(),S.Tb(11,"mat-grid-tile",5),S.Tb(12,"mat-form-field",6),S.Tb(13,"mat-label"),S.Hc(14,"C\xf3digo"),S.Sb(),S.Ob(15,"input",8),S.Sb(),S.Sb(),S.Tb(16,"mat-grid-tile",5),S.Tb(17,"mat-form-field",9),S.Tb(18,"mat-label"),S.Hc(19,"Ingrese una descripci\xf3n del proyecto"),S.Sb(),S.Ob(20,"textarea",10),S.Sb(),S.Sb(),S.Tb(21,"mat-grid-tile",5),S.Tb(22,"mat-form-field",11),S.Tb(23,"mat-select",12),S.ac("openedChange",function(e){return t._openCompanies(e)}),S.Tb(24,"mat-option"),S.Hc(25,"--None--"),S.Sb(),S.Fc(26,q,2,2,"mat-option",13),S.Sb(),S.Tb(27,"mat-label"),S.Hc(28,"Compa\xf1\xeda"),S.Sb(),S.Sb(),S.Sb(),S.Tb(29,"mat-grid-tile",5),S.Tb(30,"mat-form-field",11),S.Tb(31,"mat-select",14),S.ac("openedChange",function(e){return t._openTemplates(e)}),S.Tb(32,"mat-option"),S.Hc(33,"-- None --"),S.Sb(),S.Fc(34,R,2,3,"mat-option",13),S.Sb(),S.Tb(35,"mat-label"),S.Hc(36,"Tipo Proyecto (Template)"),S.Sb(),S.Sb(),S.Sb(),S.Tb(37,"mat-grid-tile",5),S.Tb(38,"mat-form-field",11),S.Tb(39,"mat-select",15),S.ac("openedChange",function(e){return t._openProjectCategories(e)}),S.Tb(40,"mat-option"),S.Hc(41,"-- Seleccione una compa\xf1\xeda --"),S.Sb(),S.Fc(42,L,2,2,"mat-option",13),S.Sb(),S.Tb(43,"mat-label"),S.Hc(44,"Categor\xeda"),S.Sb(),S.Sb(),S.Sb(),S.Tb(45,"mat-grid-tile",5),S.Tb(46,"mat-form-field",11),S.Tb(47,"mat-select",16),S.ac("openedChange",function(e){return t._openUsers(e)}),S.Tb(48,"mat-option"),S.Hc(49,"-- None --"),S.Sb(),S.Fc(50,M,2,3,"mat-option",13),S.Sb(),S.Tb(51,"mat-label"),S.Hc(52,"Lider"),S.Sb(),S.Sb(),S.Sb(),S.Tb(53,"mat-grid-tile",5),S.Tb(54,"mat-form-field",11),S.Tb(55,"mat-select",17),S.Tb(56,"mat-option",18),S.Hc(57,"Si"),S.Sb(),S.Tb(58,"mat-option",19),S.Hc(59,"No"),S.Sb(),S.Sb(),S.Tb(60,"mat-label"),S.Hc(61,"Multiples recursos"),S.Sb(),S.Sb(),S.Sb(),S.Tb(62,"mat-grid-tile",5),S.Tb(63,"mat-form-field",11),S.Tb(64,"mat-select",20),S.Tb(65,"mat-option",18),S.Hc(66,"Si"),S.Sb(),S.Tb(67,"mat-option",19),S.Hc(68,"No"),S.Sb(),S.Sb(),S.Tb(69,"mat-label"),S.Hc(70,"Multiples Componentes"),S.Sb(),S.Sb(),S.Sb(),S.Tb(71,"mat-grid-tile",5),S.Tb(72,"mat-form-field",11),S.Tb(73,"mat-select",21),S.Tb(74,"mat-select-trigger"),S.Tb(75,"mat-icon"),S.Hc(76,"dashboard"),S.Sb(),S.Tb(77,"span"),S.Hc(78),S.Sb(),S.Sb(),S.Fc(79,O,5,5,"mat-option",13),S.Sb(),S.Tb(80,"mat-label"),S.Hc(81,"Color proyecto"),S.Sb(),S.Sb(),S.Sb(),S.Ob(82,"mat-grid-tile",5),S.Ob(83,"mat-grid-tile",5),S.Sb(),S.Tb(84,"mat-grid-tile",5),S.Tb(85,"mat-form-field",22),S.Tb(86,"mat-select",23),S.Tb(87,"mat-option"),S.Hc(88,"-- None --"),S.Sb(),S.Tb(89,"mat-option",24),S.Hc(90,"Complejidad 1"),S.Sb(),S.Tb(91,"mat-option",25),S.Hc(92,"Complejidad 2"),S.Sb(),S.Tb(93,"mat-option",26),S.Hc(94,"Complejidad 3"),S.Sb(),S.Sb(),S.Tb(95,"mat-label"),S.Hc(96,"Complejidad"),S.Sb(),S.Sb(),S.Sb(),S.Tb(97,"mat-grid-tile",5),S.Tb(98,"mat-form-field",22),S.Tb(99,"mat-select",23),S.Tb(100,"mat-option"),S.Hc(101,"-- None --"),S.Sb(),S.Tb(102,"mat-option",24),S.Hc(103,"Resoluci\xf3n 1"),S.Sb(),S.Tb(104,"mat-option",25),S.Hc(105,"Resoluci\xf3n 2"),S.Sb(),S.Tb(106,"mat-option",26),S.Hc(107,"Resoluci\xf3n 3"),S.Sb(),S.Sb(),S.Tb(108,"mat-label"),S.Hc(109,"Resoluci\xf3n"),S.Sb(),S.Sb(),S.Sb(),S.Tb(110,"mat-grid-tile",5),S.Tb(111,"mat-form-field",22),S.Tb(112,"mat-select",23),S.Tb(113,"mat-option"),S.Hc(114,"-- None --"),S.Sb(),S.Tb(115,"mat-option",24),S.Hc(116,"Usuario 1"),S.Sb(),S.Tb(117,"mat-option",25),S.Hc(118,"Usuario 2"),S.Sb(),S.Tb(119,"mat-option",26),S.Hc(120,"Usuario 3"),S.Sb(),S.Sb(),S.Tb(121,"mat-label"),S.Hc(122,"Reportado por"),S.Sb(),S.Sb(),S.Sb(),S.Sb(),S.Tb(123,"mat-dialog-actions",27),S.Tb(124,"button",28),S.Hc(125,"Cancelar"),S.Sb(),S.Fc(126,x,2,0,"button",29),S.Fc(127,I,2,0,"button",29),S.Sb(),S.Sb()),2&e&&(S.Bb(4),S.kc("formGroup",t.options),S.Bb(2),S.kc("colspan",2)("rowspan",1),S.Bb(1),S.kc("floatLabel",t.floatLabelControl.value),S.Bb(4),S.kc("colspan",2)("rowspan",1),S.Bb(1),S.kc("floatLabel",t.floatLabelControl.value),S.Bb(4),S.kc("colspan",4)("rowspan",1),S.Bb(1),S.kc("floatLabel",t.floatLabelControl.value),S.Bb(4),S.kc("colspan",2)("rowspan",1),S.Bb(1),S.kc("hideRequiredMarker",t.hideRequiredControl.value),S.Bb(4),S.kc("ngForOf",t.companies),S.Bb(3),S.kc("colspan",2)("rowspan",1),S.Bb(1),S.kc("hideRequiredMarker",t.hideRequiredControl.value)("floatLabel",t.floatLabelControl.value),S.Bb(4),S.kc("ngForOf",t.templates),S.Bb(3),S.kc("colspan",2)("rowspan",1),S.Bb(1),S.kc("hideRequiredMarker",t.hideRequiredControl.value)("floatLabel",t.floatLabelControl.value),S.Bb(4),S.kc("ngForOf",t.projectCategories),S.Bb(3),S.kc("colspan",2)("rowspan",1),S.Bb(1),S.kc("hideRequiredMarker",t.hideRequiredControl.value)("floatLabel",t.floatLabelControl.value),S.Bb(4),S.kc("ngForOf",t.users),S.Bb(3),S.kc("colspan",2)("rowspan",1),S.Bb(1),S.kc("hideRequiredMarker",t.hideRequiredControl.value)("floatLabel",t.floatLabelControl.value),S.Bb(2),S.kc("value",!0),S.Bb(2),S.kc("value",!1),S.Bb(4),S.kc("colspan",2)("rowspan",1),S.Bb(1),S.kc("hideRequiredMarker",t.hideRequiredControl.value)("floatLabel",t.floatLabelControl.value),S.Bb(2),S.kc("value",!0),S.Bb(2),S.kc("value",!1),S.Bb(4),S.kc("colspan",2)("rowspan",1),S.Bb(1),S.kc("hideRequiredMarker",t.hideRequiredControl.value)("floatLabel",t.floatLabelControl.value),S.Bb(3),S.Eb("txt-",t.options.get("bgColorControl").value,""),S.Bb(3),S.Ic(t.getColorLabel()),S.Bb(1),S.kc("ngForOf",t.colors),S.Bb(3),S.kc("colspan",2)("rowspan",1),S.Bb(1),S.kc("colspan",1)("rowspan",1),S.Bb(1),S.kc("colspan",1)("rowspan",1),S.Bb(1),S.kc("hideRequiredMarker",t.hideRequiredControl.value)("floatLabel",t.floatLabelControl.value),S.Bb(12),S.kc("colspan",1)("rowspan",1),S.Bb(1),S.kc("hideRequiredMarker",t.hideRequiredControl.value)("floatLabel",t.floatLabelControl.value),S.Bb(12),S.kc("colspan",1)("rowspan",1),S.Bb(1),S.kc("hideRequiredMarker",t.hideRequiredControl.value)("floatLabel",t.floatLabelControl.value),S.Bb(15),S.kc("ngIf","create"==t.mode),S.Bb(1),S.kc("ngIf","modify"==t.mode))},directives:[f.a,r.u,r.o,r.i,C.a,C.c,m.c,m.g,b.b,r.c,r.n,r.g,r.s,u.a,N.o,i.l,u.c,s.a,d.b,a.a,d.c,i.m],styles:[".example-container[_ngcontent-%COMP%]   .mat-form-field[_ngcontent-%COMP%] + .mat-form-field[_ngcontent-%COMP%]{margin-left:20px}.example-container[_ngcontent-%COMP%]   form[_ngcontent-%COMP%]{margin-bottom:20px}.example-container[_ngcontent-%COMP%]   form[_ngcontent-%COMP%] > *[_ngcontent-%COMP%]{margin:5px 0}.example-container[_ngcontent-%COMP%]   .mat-radio-button[_ngcontent-%COMP%]{margin:0 12px}.example-container[_ngcontent-%COMP%]{padding:24px}"]}),e})(),D=(()=>{class e{constructor(e,t){this.dialogRef=e,this._projectsService=t}ngOnInit(){}onNoClick(){this.dialogRef.close()}deleteProject(){this._projectsService.deleteProject(this.id),this.dialogRef.close()}}return e.\u0275fac=function(t){return new(t||e)(S.Nb(d.f),S.Nb(P.a))},e.\u0275cmp=S.Hb({type:e,selectors:[["tecno-projects-delete-warning"]],inputs:{id:"id",projectName:"projectName"},decls:11,vars:1,consts:[["color","primary",1,"mat-elevation-z4"],["align","center",1,"mat-typography"],["align","end"],["mat-button","",3,"click"],["mat-button","","mat-dialog-close",""]],template:function(e,t){1&e&&(S.Tb(0,"mat-toolbar",0),S.Tb(1,"span"),S.Hc(2,"Eliminaci\xf3n"),S.Sb(),S.Sb(),S.Tb(3,"mat-dialog-content",1),S.Tb(4,"p"),S.Hc(5),S.Sb(),S.Sb(),S.Tb(6,"mat-dialog-actions",2),S.Tb(7,"button",3),S.ac("click",function(){return t.deleteProject()}),S.Hc(8,"Si"),S.Sb(),S.Tb(9,"button",4),S.Hc(10,"No"),S.Sb(),S.Sb()),2&e&&(S.Bb(5),S.Jc(" \xbfEst\xe1 seguro de que desea eliminar el proyecto ",t.projectName,"? "))},directives:[f.a,d.d,d.b,a.a,d.c],styles:[".mat-dialog-actions[_ngcontent-%COMP%]{margin-bottom:5px;margin-right:20px}.mat-dialog-content[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{margin-top:20px;margin-left:20px;margin-right:20px}"]}),e})();const A=function(e){return["/items",e]};let V=(()=>{class e{constructor(e){this.dialog=e}ngOnInit(){}imprimir(){console.log("scope is ")}openDialog(){const e=this.dialog.open(F,{disableClose:!0});let t=e.componentInstance;t.mode="modify",t.project=this.project,e.afterClosed().subscribe(e=>{console.log("Dialog result: "+e)})}openDialogDelete(){const e=this.dialog.open(D,{disableClose:!0});let t=e.componentInstance;t.id=this.project.id,t.projectName=this.project.title,e.afterClosed().subscribe(e=>{console.log("Dialog result: "+e)})}}return e.\u0275fac=function(t){return new(t||e)(S.Nb(d.a))},e.\u0275cmp=S.Hb({type:e,selectors:[["tecno-projects-card"]],inputs:{project:"project"},decls:25,vars:11,consts:[["color","accent"],[3,"routerLink"],[1,"mat-title","txt-white"],[1,"mat-body-1"],[1,"actions-container"],[1,"caption"],[1,"profile-container"],[1,"btn-profile",3,"matMenuTriggerFor"],["xPosition","before"],["options","matMenu"],["mat-menu-item","",3,"click"]],template:function(e,t){if(1&e&&(S.Tb(0,"mat-card",0),S.Tb(1,"mat-card-content",1),S.Tb(2,"h2",2),S.Hc(3),S.Sb(),S.Tb(4,"p",3),S.Hc(5),S.Sb(),S.Sb(),S.Tb(6,"mat-card-actions",4),S.Tb(7,"span",5),S.Hc(8),S.Sb(),S.Tb(9,"div",6),S.Tb(10,"div",7),S.Tb(11,"mat-icon"),S.Hc(12,"more_vert"),S.Sb(),S.Sb(),S.Tb(13,"mat-menu",8,9),S.Tb(15,"button",10),S.ac("click",function(){return t.openDialog()}),S.Tb(16,"mat-icon"),S.Hc(17,"create"),S.Sb(),S.Tb(18,"span"),S.Hc(19,"Editar / Edit"),S.Sb(),S.Sb(),S.Tb(20,"button",10),S.ac("click",function(){return t.openDialogDelete()}),S.Tb(21,"mat-icon"),S.Hc(22,"delete"),S.Sb(),S.Tb(23,"span"),S.Hc(24,"Eliminar / Delete"),S.Sb(),S.Sb(),S.Sb(),S.Sb(),S.Sb(),S.Sb()),2&e){const e=S.rc(14);S.Eb("bg-",t.project.color," txt-white card-container card-link"),S.Bb(1),S.kc("routerLink",S.nc(9,A,t.project.id)),S.Bb(2),S.Ic(t.project.title),S.Bb(2),S.Jc(" ",t.project.description," "),S.Bb(3),S.Kc("",t.project.sysuser.firstname," ",t.project.sysuser.lastname,""),S.Bb(2),S.kc("matMenuTriggerFor",e)}},directives:[n.a,n.c,p.c,n.b,l.c,s.a,l.d,l.a],styles:[".card-container[_ngcontent-%COMP%]{display:flex;flex-direction:column;width:300px;margin:10px}.actions-container[_ngcontent-%COMP%]{display:flex;flex-direction:row;justify-content:space-between;margin-left:0;width:100%}"]}),e})();function U(e,t){1&e&&S.Ob(0,"tecno-projects-card",4),2&e&&S.kc("project",t.$implicit)}const E=[{path:"",component:(()=>{class e{constructor(e,t,o){this._projectsService=e,this.dialog=t,this._snackBar=o,this.projects=[]}ngOnInit(){this._projectsService.getProjects().subscribe(e=>{this.projects=e,console.log("proejects",e)}),this._projectsService.emitProjects.subscribe(e=>{this.projects=e,this.openSnackBar("Proyecto Eliminado","Aceptar")}),this._projectsService.emitProject.subscribe(e=>{var t=-1;for(let o=0;o<this.projects.length;o++)if(e.id==this.projects[o].id){t=o;break}-1==t?(this.projects.push(e),this.openSnackBar("Proyecto Creado","Aceptar")):(this.projects.splice(t,1,e),this.openSnackBar("Proyecto Modificado","Aceptar"))})}openDialog(){const e=this.dialog.open(F,{data:{name:this.name,animal:this.animal},disableClose:!0});e.componentInstance.mode="create",e.afterClosed().subscribe(e=>{console.log("Dialog result: "+e)})}openSnackBar(e,t){this._snackBar.open(e,t,{duration:5e3,panelClass:"succes-snack-bar"})}}return e.\u0275fac=function(t){return new(t||e)(S.Nb(P.a),S.Nb(d.a),S.Nb(j.a))},e.\u0275cmp=S.Hb({type:e,selectors:[["tecno-projects"]],decls:8,vars:1,consts:[[1,"mat-title"],[1,"cards-container","mt-15"],["class","card",3,"project",4,"ngFor","ngForOf"],["mat-fab","","color","accent","aria-label","Nuevo registro",1,"btn-new",3,"click"],[1,"card",3,"project"]],template:function(e,t){1&e&&(S.Tb(0,"h2",0),S.Hc(1,"Proyectos"),S.Sb(),S.Ob(2,"mat-divider"),S.Tb(3,"div",1),S.Fc(4,U,1,1,"tecno-projects-card",2),S.Sb(),S.Tb(5,"button",3),S.ac("click",function(){return t.openDialog()}),S.Tb(6,"mat-icon"),S.Hc(7,"add"),S.Sb(),S.Sb()),2&e&&(S.Bb(4),S.kc("ngForOf",t.projects))},directives:[c.a,i.l,a.a,s.a,V],styles:[".cards-container[_ngcontent-%COMP%]{display:flex;flex-direction:row;flex-wrap:wrap;justify-content:left;max-width:100%}"]}),e})()}];let K=(()=>{class e{}return e.\u0275mod=S.Lb({type:e}),e.\u0275inj=S.Kb({factory:function(t){return new(t||e)},imports:[[p.e.forChild(E)],p.e]}),e})();const z=[j.b,b.c,m.e,a.b,s.b,d.e,u.b,h.a,g.b,f.b,C.b,c.b,n.e,l.b];let G=(()=>{class e{}return e.\u0275mod=S.Lb({type:e}),e.\u0275inj=S.Kb({factory:function(t){return new(t||e)},imports:[[i.c,p.e,r.r,r.j,z,K],j.b,b.c,m.e,a.b,s.b,d.e,u.b,h.a,g.b,f.b,C.b,c.b,n.e,l.b]}),e})()}}]);