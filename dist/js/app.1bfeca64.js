(function(e){function t(t){for(var a,r,o=t[0],u=t[1],l=t[2],s=0,d=[];s<o.length;s++)r=o[s],Object.prototype.hasOwnProperty.call(i,r)&&i[r]&&d.push(i[r][0]),i[r]=0;for(a in u)Object.prototype.hasOwnProperty.call(u,a)&&(e[a]=u[a]);b&&b(t);while(d.length)d.shift()();return c.push.apply(c,l||[]),n()}function n(){for(var e,t=0;t<c.length;t++){for(var n=c[t],a=!0,r=1;r<n.length;r++){var o=n[r];0!==i[o]&&(a=!1)}a&&(c.splice(t--,1),e=u(u.s=n[0]))}return e}var a={},r={app:0},i={app:0},c=[];function o(e){return u.p+"js/"+({about:"about"}[e]||e)+"."+{about:"adebdd86"}[e]+".js"}function u(t){if(a[t])return a[t].exports;var n=a[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,u),n.l=!0,n.exports}u.e=function(e){var t=[],n={about:1};r[e]?t.push(r[e]):0!==r[e]&&n[e]&&t.push(r[e]=new Promise((function(t,n){for(var a="css/"+({about:"about"}[e]||e)+"."+{about:"0124ce99"}[e]+".css",i=u.p+a,c=document.getElementsByTagName("link"),o=0;o<c.length;o++){var l=c[o],s=l.getAttribute("data-href")||l.getAttribute("href");if("stylesheet"===l.rel&&(s===a||s===i))return t()}var d=document.getElementsByTagName("style");for(o=0;o<d.length;o++){l=d[o],s=l.getAttribute("data-href");if(s===a||s===i)return t()}var b=document.createElement("link");b.rel="stylesheet",b.type="text/css",b.onload=t,b.onerror=function(t){var a=t&&t.target&&t.target.src||i,c=new Error("Loading CSS chunk "+e+" failed.\n("+a+")");c.code="CSS_CHUNK_LOAD_FAILED",c.request=a,delete r[e],b.parentNode.removeChild(b),n(c)},b.href=i;var p=document.getElementsByTagName("head")[0];p.appendChild(b)})).then((function(){r[e]=0})));var a=i[e];if(0!==a)if(a)t.push(a[2]);else{var c=new Promise((function(t,n){a=i[e]=[t,n]}));t.push(a[2]=c);var l,s=document.createElement("script");s.charset="utf-8",s.timeout=120,u.nc&&s.setAttribute("nonce",u.nc),s.src=o(e);var d=new Error;l=function(t){s.onerror=s.onload=null,clearTimeout(b);var n=i[e];if(0!==n){if(n){var a=t&&("load"===t.type?"missing":t.type),r=t&&t.target&&t.target.src;d.message="Loading chunk "+e+" failed.\n("+a+": "+r+")",d.name="ChunkLoadError",d.type=a,d.request=r,n[1](d)}i[e]=void 0}};var b=setTimeout((function(){l({type:"timeout",target:s})}),12e4);s.onerror=s.onload=l,document.head.appendChild(s)}return Promise.all(t)},u.m=e,u.c=a,u.d=function(e,t,n){u.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},u.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},u.t=function(e,t){if(1&t&&(e=u(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(u.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var a in e)u.d(n,a,function(t){return e[t]}.bind(null,a));return n},u.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return u.d(t,"a",t),t},u.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},u.p="/",u.oe=function(e){throw console.error(e),e};var l=window["webpackJsonp"]=window["webpackJsonp"]||[],s=l.push.bind(l);l.push=t,l=l.slice();for(var d=0;d<l.length;d++)t(l[d]);var b=s;c.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("56d7")},"2d45":function(e,t,n){"use strict";n("d3b7"),n("ac1f"),n("841c");var a=n("b85c"),r=(n("96cf"),n("1da1"));t["a"]={props:{selectable:{type:Function}},methods:{fetchData:function(){var e=arguments,t=this;return Object(r["a"])(regeneratorRuntime.mark((function n(){var a,r,i;return regeneratorRuntime.wrap((function(n){while(1)switch(n.prev=n.next){case 0:if(a=e.length>0&&void 0!==e[0]&&e[0],a){n.next=13;break}if(!t.loaded&&t.search.length<=1&&t.$route.query.search&&(t.search=decodeURIComponent(t.$route.query.search)),!(t.search.length<=1)||"allowEmpty"in t){n.next=13;break}if(t.selectable||t.$router.push({query:{search:void 0}}),t.data=[],t._data=JSON.stringify([]),t.loaded=!1,t.query=!1,!("afterFetch"in t)){n.next=12;break}return n.next=12,t.afterFetch();case 12:return n.abrupt("return");case 13:return r=encodeURI(templateString(a||t.path,t)),n.next=16,fetch(r);case 16:return n.next=18,n.sent.json();case 18:if(i=n.sent,a){n.next=30;break}if(!t.selectable&&t.search.length&&t.$router.push({query:{search:encodeURIComponent(t.search)}}),t.query=i.query,t.data=i.results,t._data=JSON.stringify(i.results),t.loaded=!0,!("afterFetch"in t)){n.next=28;break}return n.next=28,t.afterFetch();case 28:n.next=31;break;case 30:return n.abrupt("return",i);case 31:case"end":return n.stop()}}),n)})))()},reset:function(){this.data=JSON.parse(this._data)},itemSelected:function(e){if(this.selectable){e.preventDefault();var t,n=!1,r=Object(a["a"])(e.path);try{for(r.s();!(t=r.n()).done;){var i=t.value;if("id"in i.dataset){n=i;break}}}catch(c){r.e(c)}finally{r.f()}this.selectable(n||e.target)}}},computed:{modified:function(){return!(JSON.stringify(this.data)==this._data)}},mounted:function(){this.fetchData()}}},"2e16":function(e,t,n){},"2fad":function(e,t,n){"use strict";var a=n("7a23"),r=Object(a["G"])("data-v-2638822f");Object(a["u"])("data-v-2638822f");var i={class:"patient-view view",style:{width:"460px","margin-left":"auto","margin-right":"auto"}},c=Object(a["i"])("br",null,null,-1),o=Object(a["i"])("br",null,null,-1),u=Object(a["i"])("br",null,null,-1),l=Object(a["i"])("span",{class:"field"},"Medication:",-1),s=Object(a["i"])("br",null,null,-1),d=Object(a["i"])("br",null,null,-1),b=Object(a["i"])("span",{class:"field"},"Conditions:",-1),p=Object(a["i"])("br",null,null,-1),h=Object(a["i"])("br",null,null,-1),f=Object(a["i"])("br",null,null,-1),j={key:0},O=Object(a["h"])(" Physician: "),m=Object(a["i"])("br",null,null,-1),v=Object(a["i"])("br",null,null,-1),y=Object(a["i"])("br",null,null,-1),g=Object(a["i"])("br",null,null,-1),w=Object(a["i"])("br",null,null,-1),k={key:2,style:{opacity:"0"}},x=Object(a["i"])("br",null,null,-1),_=Object(a["i"])("br",null,null,-1),A=Object(a["i"])("br",null,null,-1),R={key:0,class:"nestedSelect"},P={key:0,class:"nestedSelect"},C=Object(a["i"])("p",null,"This cannot be undone. Are you sure you want to proceed?",-1);Object(a["s"])();var S=r((function(e,t,n,r,S,D){var N=Object(a["y"])("RecordView"),E=Object(a["y"])("PhysiciansList");return Object(a["r"])(),Object(a["e"])("div",i,[S.loaded?(Object(a["r"])(),Object(a["e"])("div",{key:0,style:[{float:"left"},{opacity:S.confirmingAction||S.selectingPhysician?"0":"1"}]},[Object(a["F"])(Object(a["i"])("input",{"onUpdate:modelValue":t[1]||(t[1]=function(e){return S.data.first_name=e}),style:{width:"200px"},placeholder:"First Name"},null,512),[[a["C"],S.data.first_name]]),Object(a["F"])(Object(a["i"])("input",{"onUpdate:modelValue":t[2]||(t[2]=function(e){return S.data.last_name=e}),style:{width:"200px"},placeholder:"Last Name"},null,512),[[a["C"],S.data.last_name]]),c,Object(a["F"])(Object(a["i"])("input",{"onUpdate:modelValue":t[3]||(t[3]=function(e){return S.data.address=e}),style:{width:"430px"},placeholder:"Address"},null,512),[[a["C"],S.data.address]]),o,u,l,s,Object(a["F"])(Object(a["i"])("input",{"onUpdate:modelValue":t[4]||(t[4]=function(e){return S.data.medication=e}),style:{width:"430px"},placeholder:"None"},null,512),[[a["C"],S.data.medication]]),d,b,p,Object(a["F"])(Object(a["i"])("input",{"onUpdate:modelValue":t[5]||(t[5]=function(e){return S.data.conditions=e}),style:{width:"430px"},placeholder:"None"},null,512),[[a["C"],S.data.conditions]]),h,f,S.data.physician_id&&S.physician?(Object(a["r"])(),Object(a["e"])("div",j,[O,Object(a["i"])("a",{href:"/database/physician/"+S.data.physician_id},"Dr. "+Object(a["A"])(S.physician.first_name)+" "+Object(a["A"])(S.physician.last_name),9,["href"])])):Object(a["f"])("",!0),m,v,Object(a["i"])("button",{onClick:t[6]||(t[6]=function(){return D.selectPhysician.apply(D,arguments)})},"Assign Physician"),Object(a["i"])("button",{onClick:t[7]||(t[7]=function(){return D.deletePatient.apply(D,arguments)})},"Delete Patient"),y,g,Object(a["i"])("button",{disabled:!e.modified,style:{"text-align":"center"},onClick:t[8]||(t[8]=function(){return D.updatePatient.apply(D,arguments)})},"Save Changes",8,["disabled"]),w,e.modified?(Object(a["r"])(),Object(a["e"])("div",{key:1,onClick:t[9]||(t[9]=function(){return e.reset.apply(e,arguments)}),style:{cursor:"pointer"}},"Undo Edits")):(Object(a["r"])(),Object(a["e"])("div",k,"No changes made")),Object(a["i"])("h3",null,Object(a["A"])(S.records.length)+" Patient Records",1),Object(a["i"])("button",{onClick:t[10]||(t[10]=function(){return D.importRecord.apply(D,arguments)})},"Import Record"),x,_,Object(a["i"])("div",null,[S.importingRecord?(Object(a["r"])(),Object(a["e"])(N,{key:0,id:"create",patient:S.data.patient_id},null,8,["patient"])):Object(a["f"])("",!0),A,S.records?(Object(a["r"])(!0),Object(a["e"])(a["a"],{key:1},Object(a["x"])(S.records,(function(e,t){return Object(a["r"])(),Object(a["e"])(N,{key:t,id:e.record_id,patient:S.data.patient_id},null,8,["id","patient"])})),128)):Object(a["f"])("",!0)]),(Object(a["r"])(),Object(a["e"])(a["b"],{to:"#app"},[S.selectingPhysician?(Object(a["r"])(),Object(a["e"])("div",R,[Object(a["i"])(E,{selectable:D.setPhysician},null,8,["selectable"])])):Object(a["f"])("",!0)])),(Object(a["r"])(),Object(a["e"])(a["b"],{to:"#app"},[S.confirmingAction?(Object(a["r"])(),Object(a["e"])("div",P,[Object(a["i"])("h3",null,Object(a["A"])(e.requestedAction),1),C,Object(a["i"])("button",{onClick:t[11]||(t[11]=function(){return e.confirmedAction.apply(e,arguments)})},"Confirm"),Object(a["i"])("button",{onClick:t[12]||(t[12]=function(){return D.canceledAction.apply(D,arguments)}),style:{"background-color":"transparent"}},"Cancel")])):Object(a["f"])("",!0)]))],4)):Object(a["f"])("",!0)])})),D=(n("99af"),n("96cf"),n("1da1")),N=(n("4de4"),n("4fad"),n("c1f9"),n("d3b7"),{methods:{fetchData:function(){var e=arguments,t=this;return Object(D["a"])(regeneratorRuntime.mark((function n(){var a,r,i,c,o;return regeneratorRuntime.wrap((function(n){while(1)switch(n.prev=n.next){case 0:if(a=e.length>0&&void 0!==e[0]&&e[0],r=e.length>1&&void 0!==e[1]&&e[1],i=r||t,"create"!=i.id||a){n.next=10;break}return i.query=!1,i.data={},i._data=JSON.stringify(t.data),i.loaded=!0,n.abrupt("return");case 10:return c=templateString(a||i.path,i),n.next=13,fetch(c);case 13:return n.next=15,n.sent.json();case 15:if(o=n.sent,a){n.next=26;break}if(i.query=o.query,i.data=o.results,i._data=JSON.stringify(o.results),i.loaded=!0,!("afterFetch"in i)){n.next=24;break}return n.next=24,i.afterFetch();case 24:n.next=27;break;case 26:return n.abrupt("return",o);case 27:case"end":return n.stop()}}),n)})))()},reset:function(){this.data=JSON.parse(this._data),"afterReset"in this&&this.afterReset()},saveData:function(){var e=arguments,t=this;return Object(D["a"])(regeneratorRuntime.mark((function n(){var a,r,i,c,o,u;return regeneratorRuntime.wrap((function(n){while(1)switch(n.prev=n.next){case 0:return a=e.length>0&&void 0!==e[0]&&e[0],r=e.length>1&&void 0!==e[1]&&e[1],r=r||t,i=templateString(a||t.path,r||t),c=JSON.parse(r._data),o=Object.fromEntries(Object.entries(r.data).filter((function(e){return e[1]!=c[e[0]]}))),"create"==r.id&&(o=r.data),console.log(o),console.log(JSON.stringify(t.data)),n.next=11,fetch(i,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(o)});case 11:return n.next=13,n.sent.json();case 13:return u=n.sent,(r||t).saveResponse=u,u.results&&"insertId"in u.results&&("id"in t.$route.params||t.$router.push({name:"Patient",params:{id:u.results.insertId}})),n.next=18,t.fetchData();case 18:return n.abrupt("return",u);case 19:case"end":return n.stop()}}),n)})))()},deleteData:function(){var e=arguments,t=this;return Object(D["a"])(regeneratorRuntime.mark((function n(){var a,r;return regeneratorRuntime.wrap((function(n){while(1)switch(n.prev=n.next){case 0:if(a=e.length>0&&void 0!==e[0]&&e[0],!0!==a){n.next=9;break}return r=templateString(t.path,t),n.next=5,fetch(r,{method:"DELETE"});case 5:return n.next=7,n.sent.json();case 7:n.sent,"afterDelete"in t&&t.afterDelete();case 9:case"end":return n.stop()}}),n)})))()}},computed:{modified:function(){return!(JSON.stringify(this.data)==this._data)}},mounted:function(){this.fetchData()}}),E=n("fedb"),F=(n("a4d3"),n("e01a"),Object(a["G"])("data-v-2e881e25"));Object(a["u"])("data-v-2e881e25");var q={class:"record-view view",style:{width:"460px","margin-left":"auto","margin-right":"auto"}},$={key:0,class:"record-content",style:{}},I=Object(a["i"])("span",{class:"field"},"Title:",-1),T=Object(a["i"])("br",null,null,-1),U=Object(a["i"])("br",null,null,-1),L=Object(a["i"])("span",{class:"field"},"Entity (Hospital or Individual):",-1),V=Object(a["i"])("br",null,null,-1),J=Object(a["i"])("br",null,null,-1),H=Object(a["i"])("span",{class:"field"},"Description:",-1),M=Object(a["i"])("br",null,null,-1),G={key:1},W={key:2},B=Object(a["i"])("br",null,null,-1),z=Object(a["i"])("br",null,null,-1),K=Object(a["i"])("br",null,null,-1),Q=Object(a["i"])("br",null,null,-1),X={key:3},Y=Object(a["i"])("br",null,null,-1),Z=Object(a["i"])("br",null,null,-1),ee=Object(a["i"])("br",null,null,-1),te={key:1,style:{opacity:"0"}},ne=Object(a["i"])("br",null,null,-1),ae={key:1,class:"record-content",style:{}},re={key:0},ie=Object(a["i"])("br",null,null,-1),ce=Object(a["i"])("br",null,null,-1),oe=Object(a["i"])("br",null,null,-1),ue={key:0,class:"nestedSelect"},le=Object(a["i"])("p",null,"This cannot be undone. Are you sure you want to proceed?",-1);Object(a["s"])();var se=F((function(e,t,n,r,i,c){return Object(a["r"])(),Object(a["e"])("div",q,[i.loaded&&(i.editing||"create"==n.id)?(Object(a["r"])(),Object(a["e"])("div",$,["create"!=n.id?(Object(a["r"])(),Object(a["e"])("span",{key:0,onClick:t[1]||(t[1]=function(){return c.toggleEditMode.apply(c,arguments)}),style:{float:"right"}},"Stop Editing")):Object(a["f"])("",!0),I,T,Object(a["F"])(Object(a["i"])("input",{"onUpdate:modelValue":t[2]||(t[2]=function(e){return i.data.title=e}),style:{width:"370px"},placeholder:"None"},null,512),[[a["C"],i.data.title]]),U,L,V,Object(a["F"])(Object(a["i"])("input",{"onUpdate:modelValue":t[3]||(t[3]=function(e){return i.data.entity=e}),style:{width:"370px"},placeholder:"None"},null,512),[[a["C"],i.data.entity]]),J,H,M,Object(a["F"])(Object(a["i"])("input",{"onUpdate:modelValue":t[4]||(t[4]=function(e){return i.data.description=e}),style:{width:"370px"},placeholder:"None"},null,512),[[a["C"],i.data.description]]),i.data.timestamp?(Object(a["r"])(),Object(a["e"])("span",G,Object(a["A"])(new Date(i.data.timestamp).toLocaleString()),1)):Object(a["f"])("",!0),"create"!=n.id?(Object(a["r"])(),Object(a["e"])("span",W,[B,z,Object(a["i"])("button",{onClick:t[5]||(t[5]=function(){return c.deleteRecord.apply(c,arguments)})},"Delete Record"),K,Q])):Object(a["f"])("",!0),e.modified?(Object(a["r"])(),Object(a["e"])("span",X,[Y,Z,Object(a["i"])("button",{disabled:!e.modified,style:{"text-align":"center"},onClick:t[6]||(t[6]=function(){return c.updateRecord.apply(c,arguments)})},"Save Changes",8,["disabled"]),ee,e.modified?(Object(a["r"])(),Object(a["e"])("div",{key:0,onClick:t[7]||(t[7]=function(){return e.reset.apply(e,arguments)}),style:{cursor:"pointer"}},"Undo Edits")):(Object(a["r"])(),Object(a["e"])("div",te,"No changes made"))])):Object(a["f"])("",!0),ne])):i.loaded?(Object(a["r"])(),Object(a["e"])("div",ae,[Object(a["i"])("span",{onClick:t[8]||(t[8]=function(){return c.toggleEditMode.apply(c,arguments)}),style:{float:"right"}},"Edit"),Object(a["i"])("h3",null,Object(a["A"])(i.data.title),1),Object(a["i"])("h4",null,Object(a["A"])(i.data.entity),1),Object(a["i"])("p",null,Object(a["A"])(i.data.description),1),i.data.timestamp?(Object(a["r"])(),Object(a["e"])("span",re,Object(a["A"])(new Date(i.data.timestamp).toLocaleString()),1)):Object(a["f"])("",!0),ie,ce,oe])):Object(a["f"])("",!0),(Object(a["r"])(),Object(a["e"])(a["b"],{to:"#app"},[i.confirmingAction?(Object(a["r"])(),Object(a["e"])("div",ue,[Object(a["i"])("h3",null,Object(a["A"])(e.requestedAction),1),le,Object(a["i"])("button",{onClick:t[9]||(t[9]=function(){return e.confirmedAction.apply(e,arguments)})},"Confirm"),Object(a["i"])("button",{onClick:t[10]||(t[10]=function(){return c.canceledAction.apply(c,arguments)}),style:{"background-color":"transparent"}},"Cancel")])):Object(a["f"])("",!0)]))])})),de=(n("a9e3"),n("2909")),be={extends:N,name:"RecordView",props:{id:Number,patient:Number},data:function(){return{table:"records",path:"/api/db/records/${this.id}.json",data:{},loaded:!1,query:!1,confirmingAction:!1,editing:!1}},methods:{updateRecord:function(){var e=this;return Object(D["a"])(regeneratorRuntime.mark((function t(){var n,a,r,i,c;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return e.data.patient_id=e.data.patient_id||e.patient,t.next=3,e.saveData();case 3:return n=t.sent,t.prev=4,a=e.$parent,r={id:n.results.insertId},"create"==e.id&&(e.$parent.loaded=!1),t.next=10,e.fetchData(e.path,r);case 10:i=t.sent,c=[i.results].concat(Object(de["a"])(a.records)),a.records=c,"create"==e.id&&(e.$parent.importingRecord=!1,e.$parent.loaded=!0),t.next=19;break;case 16:t.prev=16,t.t0=t["catch"](4),console.log(t.t0);case 19:return t.abrupt("return",n);case 20:case"end":return t.stop()}}),t,null,[[4,16]])})))()},afterFetch:function(){return Object(D["a"])(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:case"end":return e.stop()}}),e)})))()},afterReset:function(){return Object(D["a"])(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:case"end":return e.stop()}}),e)})))()},afterDelete:function(){var e=this;return Object(D["a"])(regeneratorRuntime.mark((function t(){var n;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return n=e.$parent,n.loaded=!1,t.next=4,e.$nextTick();case 4:n.loaded=!0;case 5:case"end":return t.stop()}}),t)})))()},deleteRecord:function(){var e=this;this.$parent.confirmAction("Are you sure you want to delete record '".concat(this.data.title,"'?"),(function(){e.deleteData(!0)}))},toggleEditMode:function(){this.editing=!this.editing},confirmAction:function(e,t){var n=this;this.requestedAction=e,this.confirmingAction=!0,this.confirmedAction=function(){n.confirmingAction=!1,t(n)}},canceledAction:function(){this.confirmingAction=!1,delete this.requestedAction,delete this.confirmedAction}},components:{}};n("b980");be.render=se,be.__scopeId="data-v-2e881e25";var pe=be,he={extends:N,name:"PatientView",props:{id:String},data:function(){return{table:"patients",path:"/api/db/patients/${this.id}.json",recordsPath:"/api/db/patients/${this.id}/records.json",data:{},loaded:!1,query:!1,physician:!1,records:[],selectingPhysician:!1,selectingRoom:!1,importingRecord:!1,confirmingAction:!1}},methods:{getPhysician:function(){var e=this;return Object(D["a"])(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:if(!e.physician){t.next=3;break}if(e.physician.physician_id!==e.data.physician_id){t.next=3;break}return t.abrupt("return",e.physician);case 3:if(!e.data.physician_id){t.next=10;break}return t.next=7,e.fetchData("/api/db/physicians/".concat(e.data.physician_id,".json"));case 7:e.physician=t.sent.results,t.next=11;break;case 10:e.physician=!1;case 11:return t.abrupt("return",e.physician);case 12:case"end":return t.stop()}}),t)})))()},updatePatient:function(){var e=this;return Object(D["a"])(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,e.saveData();case 2:return t.abrupt("return",t.sent);case 3:case"end":return t.stop()}}),t)})))()},fetchRecords:function(){var e=this;return Object(D["a"])(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,e.fetchData(e.recordsPath);case 2:e.records=t.sent.results;case 3:case"end":return t.stop()}}),t)})))()},afterFetch:function(){var e=this;return Object(D["a"])(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,e.fetchRecords();case 2:return t.next=4,e.getPhysician();case 4:case"end":return t.stop()}}),t)})))()},afterReset:function(){var e=this;return Object(D["a"])(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return e.physician=!1,t.next=3,e.getPhysician();case 3:case"end":return t.stop()}}),t)})))()},afterDelete:function(){var e=this;return Object(D["a"])(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:e.loaded=!1,e.$router.push({name:"Patients"});case 2:case"end":return t.stop()}}),t)})))()},selectPhysician:function(){this.selectingPhysician=!0},setPhysician:function(e){var t=e.dataset.id;this.selectingPhysician=!1,void 0!=t&&(this.data.physician_id=t,this.physician=!1,this.getPhysician())},importRecord:function(){this.importingRecord=!this.importingRecord},deletePatient:function(){var e=this;this.confirmAction("Are you sure you want to delete patient '".concat(this.data.first_name," ").concat(this.data.last_name,"'?"),(function(){e.deleteData(!0)}))},confirmAction:function(e,t){var n=this;this.requestedAction=e,this.confirmingAction=!0,this.confirmedAction=function(){n.confirmingAction=!1,t(n)}},canceledAction:function(){this.confirmingAction=!1,delete this.requestedAction,delete this.confirmedAction}},components:{PhysiciansList:E["a"],RecordView:pe}};n("3b6c");he.render=S,he.__scopeId="data-v-2638822f";t["a"]=he},3501:function(e,t,n){"use strict";n("2e16")},"3b6c":function(e,t,n){"use strict";n("c133")},"56d7":function(e,t,n){"use strict";n.r(t);n("e260"),n("e6cf"),n("cca6"),n("a79d");var a=n("7a23"),r={id:"nav"},i=Object(a["h"])("Home"),c=Object(a["h"])(" | "),o=Object(a["h"])("About");function u(e,t){var n=Object(a["y"])("router-link"),u=Object(a["y"])("router-view");return Object(a["r"])(),Object(a["e"])(a["a"],null,[Object(a["i"])("div",r,[Object(a["i"])(n,{to:"/"},{default:Object(a["E"])((function(){return[i]})),_:1}),c,Object(a["i"])(n,{to:"/about"},{default:Object(a["E"])((function(){return[o]})),_:1})]),Object(a["i"])(u)],64)}n("3501");const l={};l.render=u;var s=l,d=(n("d3b7"),n("6c02")),b={class:"home"},p=Object(a["h"])("Hospital Database"),h=Object(a["i"])("br",null,null,-1),f=Object(a["i"])("br",null,null,-1),j=Object(a["h"])("Patient Database"),O=Object(a["i"])("br",null,null,-1),m=Object(a["i"])("br",null,null,-1),v=Object(a["h"])("Physician Database"),y=Object(a["i"])("br",null,null,-1),g=Object(a["i"])("br",null,null,-1),w=Object(a["h"])("Nurse Database"),k=Object(a["i"])("br",null,null,-1),x=Object(a["i"])("br",null,null,-1),_=Object(a["i"])("br",null,null,-1),A=Object(a["i"])("br",null,null,-1),R=Object(a["h"])(" We ran out of time and weren't able to do all the things we wanted to. ");function P(e,t,n,r,i,c){var o=Object(a["y"])("router-link");return Object(a["r"])(),Object(a["e"])("div",b,[Object(a["i"])(o,{to:"/database/hospitals"},{default:Object(a["E"])((function(){return[p]})),_:1}),h,f,Object(a["i"])(o,{to:"/database/patients"},{default:Object(a["E"])((function(){return[j]})),_:1}),O,m,Object(a["i"])(o,{to:"/database/physicians"},{default:Object(a["E"])((function(){return[v]})),_:1}),y,g,Object(a["i"])(o,{to:"/database/nurses"},{default:Object(a["E"])((function(){return[w]})),_:1}),k,x,_,A,R])}var C=Object(a["G"])("data-v-1dfc7223");Object(a["u"])("data-v-1dfc7223");var S={class:"hello"},D=Object(a["g"])('<p data-v-1dfc7223> For a guide and recipes on how to configure / customize this project,<br data-v-1dfc7223> check out the <a href="https://cli.vuejs.org" target="_blank" rel="noopener" data-v-1dfc7223>vue-cli documentation</a>. </p><h3 data-v-1dfc7223>Installed CLI Plugins</h3><ul data-v-1dfc7223><li data-v-1dfc7223><a href="https://github.com/vuejs/vue-cli/tree/dev/packages/%40vue/cli-plugin-babel" target="_blank" rel="noopener" data-v-1dfc7223>babel</a></li><li data-v-1dfc7223><a href="https://github.com/vuejs/vue-cli/tree/dev/packages/%40vue/cli-plugin-router" target="_blank" rel="noopener" data-v-1dfc7223>router</a></li><li data-v-1dfc7223><a href="https://github.com/vuejs/vue-cli/tree/dev/packages/%40vue/cli-plugin-vuex" target="_blank" rel="noopener" data-v-1dfc7223>vuex</a></li></ul><h3 data-v-1dfc7223>Essential Links</h3><ul data-v-1dfc7223><li data-v-1dfc7223><a href="https://vuejs.org" target="_blank" rel="noopener" data-v-1dfc7223>Core Docs</a></li><li data-v-1dfc7223><a href="https://forum.vuejs.org" target="_blank" rel="noopener" data-v-1dfc7223>Forum</a></li><li data-v-1dfc7223><a href="https://chat.vuejs.org" target="_blank" rel="noopener" data-v-1dfc7223>Community Chat</a></li><li data-v-1dfc7223><a href="https://twitter.com/vuejs" target="_blank" rel="noopener" data-v-1dfc7223>Twitter</a></li><li data-v-1dfc7223><a href="https://news.vuejs.org" target="_blank" rel="noopener" data-v-1dfc7223>News</a></li></ul><h3 data-v-1dfc7223>Ecosystem</h3><ul data-v-1dfc7223><li data-v-1dfc7223><a href="https://router.vuejs.org" target="_blank" rel="noopener" data-v-1dfc7223>vue-router</a></li><li data-v-1dfc7223><a href="https://vuex.vuejs.org" target="_blank" rel="noopener" data-v-1dfc7223>vuex</a></li><li data-v-1dfc7223><a href="https://github.com/vuejs/vue-devtools#vue-devtools" target="_blank" rel="noopener" data-v-1dfc7223>vue-devtools</a></li><li data-v-1dfc7223><a href="https://vue-loader.vuejs.org" target="_blank" rel="noopener" data-v-1dfc7223>vue-loader</a></li><li data-v-1dfc7223><a href="https://github.com/vuejs/awesome-vue" target="_blank" rel="noopener" data-v-1dfc7223>awesome-vue</a></li></ul>',7);Object(a["s"])();var N=C((function(e,t,n,r,i,c){return Object(a["r"])(),Object(a["e"])("div",S,[Object(a["i"])("h1",null,Object(a["A"])(n.msg),1),D])})),E={name:"HelloWorld",props:{msg:String}};n("c7ad");E.render=N,E.__scopeId="data-v-1dfc7223";var F=E,q=n("2fad"),$={name:"Home",components:{HelloWorld:F,PatientView:q["a"]}};$.render=P;var I=$,T={class:"not-implemented"},U=Object(a["i"])("h1",null,"This page has not been implemented",-1),L=Object(a["i"])("p",null,"We probably ran out of time to add this feature",-1),V=Object(a["i"])("h2",null,":(",-1),J={key:0},H=Object(a["i"])("br",null,null,-1),M=Object(a["i"])("br",null,null,-1),G=Object(a["h"])(" This route apparently has a specified ID, so we'll attempt guess and load data from the API "),W=Object(a["i"])("br",null,null,-1),B=Object(a["i"])("br",null,null,-1),z=Object(a["i"])("br",null,null,-1),K=Object(a["i"])("br",null,null,-1);function Q(e,t,n,r,i,c){return Object(a["r"])(),Object(a["e"])("div",T,[U,L,V,e.$route.params.id?(Object(a["r"])(),Object(a["e"])("div",J,[H,M,G,W,B,Object(a["i"])("a",{href:i.path},Object(a["A"])(i.path),9,["href"]),z,K,Object(a["h"])(" "+Object(a["A"])(i.data),1)])):Object(a["f"])("",!0)])}n("a15b"),n("d81d"),n("a9e3"),n("ac1f"),n("1276"),n("96cf");var X=n("1da1"),Y={name:"NotImplemented",data:function(){return{path:"",data:{}}},components:{},methods:{fetchData:function(){var e=this;return Object(X["a"])(regeneratorRuntime.mark((function t(){var n,a;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return n=e.$route.path.split("/database/")[1].split("/"),n=n.map((function(e){return Number(e)==e?e:e+"s"})),a="/api/db/"+n.join("/")+".json",e.path=a,t.next=6,fetch(a);case 6:return t.next=8,t.sent.json();case 8:e.data=t.sent;case 9:case"end":return t.stop()}}),t)})))()}},mounted:function(){"id"in this.$route.params&&this.fetchData()}};Y.render=Q;var Z=Y,ee=[{path:"/",name:"Home",component:I},{path:"/about",name:"About",component:function(){return n.e("about").then(n.bind(null,"f820"))}},{path:"/database/hospitals",name:"Hospitals",component:function(){return n.e("about").then(n.bind(null,"64d0"))}},{path:"/database/hospital/:id",name:"Hospital",component:function(){return n.e("about").then(n.bind(null,"c1e2"))}},{path:"/database/hospital/:hospital_id/departments",name:"Departments",component:function(){return n.e("about").then(n.bind(null,"8ada"))}},{path:"/database/patients",name:"Patients",component:function(){return n.e("about").then(n.bind(null,"457b"))}},{path:"/database/patient/register",name:"Register Patient",component:function(){return n.e("about").then(n.bind(null,"bb0d"))}},{path:"/database/patient/:id",name:"Patient",component:function(){return n.e("about").then(n.bind(null,"b79c"))}},{path:"/database/physicians",name:"Physicians",component:function(){return n.e("about").then(n.bind(null,"8c2f"))}},{path:"/database/nurses",name:"Nurses",component:function(){return n.e("about").then(n.bind(null,"b1c2"))}},{path:"/database/physician/:id",name:"Physician",component:Z},{path:"/database/nurse/:id",name:"Nurse",component:Z},{path:"/database/department/:id",name:"Department",component:Z}],te=Object(d["a"])({history:Object(d["b"])("/"),routes:ee}),ne=te,ae=n("5502"),re=Object(ae["a"])({state:{},mutations:{},actions:{},modules:{}});window.templateString=function(e,t){return new Function("return `"+e+"`;").call(t)},Object(a["d"])(s).use(re).use(ne).mount("#app")},6556:function(e,t,n){},"7e3b":function(e,t,n){"use strict";n("6556")},"81b1":function(e,t,n){},b980:function(e,t,n){"use strict";n("81b1")},c133:function(e,t,n){},c7ad:function(e,t,n){"use strict";n("d4a6")},d4a6:function(e,t,n){},fedb:function(e,t,n){"use strict";n("ac1f"),n("841c");var a=n("7a23"),r=Object(a["G"])("data-v-3a1a811c");Object(a["u"])("data-v-3a1a811c");var i={class:"physicians-list list",style:{width:"460px","margin-left":"auto","margin-right":"auto"}},c={style:{}},o={key:0},u=Object(a["i"])("br",null,null,-1),l=Object(a["i"])("br",null,null,-1),s={key:1},d=Object(a["i"])("br",null,null,-1),b=Object(a["i"])("br",null,null,-1),p=Object(a["i"])("br",null,null,-1),h={key:2},f={style:{"margin-bottom":"0px"}};Object(a["s"])();var j=r((function(e,t,n,r,j,O){return Object(a["r"])(),Object(a["e"])("div",i,[Object(a["i"])("div",c,[e.selectable?(Object(a["r"])(),Object(a["e"])("span",o,[e.selectable?(Object(a["r"])(),Object(a["e"])("button",{key:0,onClick:t[1]||(t[1]=function(){return e.itemSelected.apply(e,arguments)}),"data-id":"0"},"Remove Selected Physician")):Object(a["f"])("",!0),u,l])):Object(a["f"])("",!0),Object(a["h"])(" "+Object(a["A"])(j.search.length>=1?"Showing":"Search")+" ",1),j.count>=0?(Object(a["r"])(),Object(a["e"])("span",s,Object(a["A"])(j.count)+" Physicians",1)):Object(a["f"])("",!0),d,Object(a["F"])(Object(a["i"])("input",{"onUpdate:modelValue":t[2]||(t[2]=function(e){return j.search=e}),style:{width:"400px"},onInput:t[3]||(t[3]=function(){return O.runSearch.apply(O,arguments)})},null,544),[[a["C"],j.search]]),b,p,j.loaded?(Object(a["r"])(),Object(a["e"])("div",h,[(Object(a["r"])(!0),Object(a["e"])(a["a"],null,Object(a["x"])(j.data,(function(n){return Object(a["r"])(),Object(a["e"])("a",{onClick:t[4]||(t[4]=function(){return e.itemSelected.apply(e,arguments)}),"data-id":n.physician_id,style:{"margin-bottom":"10px","text-decoration":"none",display:"block",color:"inherit"},href:"/database/physician/"+n.physician_id},[Object(a["i"])("h3",f,"Dr. "+Object(a["A"])(n.last_name)+", "+Object(a["A"])(n.first_name),1),Object(a["i"])("p",null,Object(a["A"])(n.education),1),Object(a["i"])("p",null,Object(a["A"])(n.address),1)],8,["data-id","href"])})),256))])):Object(a["f"])("",!0)])])})),O=(n("96cf"),n("1da1")),m=n("2d45"),v={extends:m["a"],name:"PhysiciansList",data:function(){return{table:"physicians",path:'/api/db/physicians.json?limit=30&search=${this.search ? "%" + this.search + "%" : ""}',data:{},count:0,loaded:!1,query:!1,physician:!1,search:""}},methods:{runSearch:function(){this.fetchData()},afterFetch:function(){var e=this;return Object(O["a"])(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,e.fetchData(e.path+"&count=true");case 2:e.count=t.sent.results[0]["COUNT(*)"];case 3:case"end":return t.stop()}}),t)})))()}},components:{},mounted:function(){this.afterFetch()}};n("7e3b");v.render=j,v.__scopeId="data-v-3a1a811c";t["a"]=v}});
//# sourceMappingURL=app.1bfeca64.js.map