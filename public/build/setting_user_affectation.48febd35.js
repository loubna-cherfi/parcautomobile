/*! For license information please see setting_user_affectation.48febd35.js.LICENSE.txt */
(self.webpackChunk=self.webpackChunk||[]).push([[976],{26189:(e,t,r)=>{"use strict";var o=r(6672),n=r.n(o);const a=JSON.parse('{"base_url":"","routes":{"app_login":{"tokens":[["text","/login"]],"defaults":[],"requirements":[],"hosttokens":[],"methods":[],"schemes":[]},"app_logout":{"tokens":[["text","/logout"]],"defaults":[],"requirements":[],"hosttokens":[],"methods":[],"schemes":[]},"app_settings_module_list":{"tokens":[["text","/setting/module/list"]],"defaults":[],"requirements":[],"hosttokens":[],"methods":[],"schemes":[]},"app_settings_module_add":{"tokens":[["text","/setting/module/add"]],"defaults":[],"requirements":[],"hosttokens":[],"methods":[],"schemes":[]},"app_settings_module_toggle_active":{"tokens":[["variable","/","[^/]++","module",true],["text","/setting/module/activer"]],"defaults":[],"requirements":[],"hosttokens":[],"methods":[],"schemes":[]},"app_settings_sousmodule_list":{"tokens":[["text","/setting/sousmodule/list"]],"defaults":[],"requirements":[],"hosttokens":[],"methods":[],"schemes":[]},"app_settings_sousmodule_add":{"tokens":[["text","/setting/sousmodule/add"]],"defaults":[],"requirements":[],"hosttokens":[],"methods":[],"schemes":[]},"app_settings_sousmodule_toggle_active":{"tokens":[["variable","/","[^/]++","sousmodule",true],["text","/setting/sousmodule/activer"]],"defaults":[],"requirements":[],"hosttokens":[],"methods":[],"schemes":[]},"app_assign_convention":{"tokens":[["text","/user/assign-convention"]],"defaults":[],"requirements":[],"hosttokens":[],"methods":["POST"],"schemes":[]},"app_assign_caisse":{"tokens":[["text","/user/assign-caisse"]],"defaults":[],"requirements":[],"hosttokens":[],"methods":["POST"],"schemes":[]},"app_duplicate_user":{"tokens":[["text","/user/duplicate-user"]],"defaults":[],"requirements":[],"hosttokens":[],"methods":["POST"],"schemes":[]}},"prefix":"","host":"localhost","port":"","scheme":"http","locale":""}');n().setRoutingData(a)},87286:(e,t,r)=>{function o(e){return o="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},o(e)}function n(e,t,r){return(t=function(e){var t=function(e,t){if("object"!==o(e)||null===e)return e;var r=e[Symbol.toPrimitive];if(void 0!==r){var n=r.call(e,t||"default");if("object"!==o(n))return n;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===t?String:Number)(e)}(e,"string");return"symbol"===o(t)?t:String(t)}(t))in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}r(57658),r(47042),r(38862),r(68309),r(69826),r(41539),r(96649),r(96078),r(82526),r(41817),r(21703),r(96647),r(9653),r(69070),r(32165),r(66992),r(78783),r(33948);r(44500).Toaster;$(document).ready((function(){var e;$("body").on("click",".menu-item",(function(){var e=$(this).attr("id");$("body #subMenu"+e).toggle("3s")})),$("body").on("click",".subMenu-item",(function(){var e=$(this).attr("id");$("body #action"+e).toggle("3s")})),$("body").on("click","#myTable tbody tr",(function(){$("#myTable tbody tr").removeClass("colorRow"),$(this).toggleClass("colorRow")})),$("body").on("click",".affectUser",(function(){var e=$(".colorRow").attr("id"),t=$("#dossier").val();e?$.ajax({type:"POST",url:"userActions",data:{idUser:e,idSite:t},success:function(e){$("#actionsAffectedToUser").empty(),$("#dossier").val("").trigger("change"),$("#affectUser").modal("show")},error:function(){toastr.error("ERROR !")}}):toastr.warning("Choisir un utilisateur!")})),$("body").on("click",".saveAffectButton",(function(){var e=[],t=[],r=$(".colorRow").attr("id"),o=$("#dossier").val();$("input.checkboxAction:checkbox:checked").each((function(){e.push($(this).attr("id").slice(12))})),$("input.checkboxAction:checkbox:not(:checked)").each((function(){t.push($(this).attr("id").slice(12))}));var n=JSON.stringify(e),a=JSON.stringify(t),s=ladda.create(document.activeElement);s.start(),$.ajax({type:"POST",url:"affectUser",data:{idUser:r,idSite:o,jsonCheckedActions:n,jsonUncheckedActions:a},success:function(e){toastr.success(e.affected+" AFFECTE - "+e.notAffected+" NON AFFECTE"),s.stop()},error:function(){toastr.error("ERROR !"),s.stop()}})})),$("body").on("click","#btn_affectUser",(function(e){$(".colorRow").attr("id")?($("#actionsAffectedToUser").empty(),$("#dossier").val("").trigger("change"),$("#affectUser").modal("toggle")):toastr.info("Selectionez un utilisateur svp !")})),console.log("hi"),$("body").on("change","#dossier",(function(){""!=$(this).val()&&$.ajax({type:"POST",url:"userActions",data:{idUser:$(".colorRow").attr("id"),idSite:$(this).val()},success:function(e){$("#actionsAffectedToUser").empty().append(e)},error:function(){toastr.error("ERROR !")}})}));var t=$("#convention_table").DataTable({language:{url:window.frenchJsonUrl},columnDefs:[{orderable:!1,targets:0}],lengthMenu:[[10,25,50,100,-1],[10,25,50,100,"Tous"]],pageLength:10});function r(e){var t=e.table().node(),r=$('tbody input[type="checkbox"]:not(:disabled)',t),o=$('tbody input[type="checkbox"]:checked:not(:disabled)',t),n=$('thead input[name="select_all"]',t).get(0);0===o.length?(n.checked=!1,"indeterminate"in n&&(n.indeterminate=!1)):o.length===r.length?(n.checked=!0,"indeterminate"in n&&(n.indeterminate=!1)):(n.checked=!0,"indeterminate"in n&&(n.indeterminate=!0))}$("body").on("click",".assignConvention",(function(){(e=$(".colorRow").attr("id"))?$.ajax({url:"findUser",method:"POST",data:{idUser:e,convention:!0},success:function(e){data=e.data,$("#user_name").val(data.username),$("#user_nom").val(data.name),$("#user_profession").val(data.professionDescription),$("#convention_table tbody").empty(),$.fn.DataTable.isDataTable("body #convention_table")&&$("#convention_table").DataTable().destroy(),$("body #list_convention").empty().append(e.html),r(t=$("#convention_table").DataTable({language:{url:window.frenchJsonUrl},columnDefs:[{orderable:!1,targets:0}],lengthMenu:[[10,25,50,100,-1],[10,25,50,100,"Tous"]],pageLength:10})),$("#assign_convention").modal("show")},error:function(e,t,r){toastr.error(e.responseText)}}):toastr.info("Choisir un utilisateur!")})),$("#convention_table tbody").on("change",'input[type="checkbox"]:enabled',(function(){var e=$(this).closest("tr");this.checked?e.addClass("colorRow"):e.removeClass("colorRow"),r(t)})),$("#convention_table tbody").on("click","tr",(function(e){if("checkbox"!==e.target.type){var t=$(this).find('input[type="checkbox"]:enabled');t.prop("checked",!t.prop("checked")).trigger("change")}})),$("#convention_table thead").on("change",'input[name="select_all"]',(function(){var e=this.checked;$('#convention_table tbody input[type="checkbox"]:enabled').each((function(){this.disabled||this.checked!==e&&$(this).prop("checked",e).trigger("change")}))})),$("body").on("click",".saveAssignConvention",(function(){var t=ladda.create(document.activeElement);t.start();var r=[];$("#convention_table tbody tr").each((function(){var e=$(this).find('input[type="checkbox"]');e.is(":checked")&&r.push(e.val())}));var o={conventionIds:r,id_user:e};$.ajax({url:Routing.generate("app_assign_convention"),method:"POST",contentType:"application/json",data:JSON.stringify(o),success:function(e){t.stop(),toastr.success(e),$("#assign_convention").modal("hide")},error:function(e,r,o){return t.stop(),toastr.error(e.responseText)}})}));var o=$("#caisse_table").DataTable({language:{url:window.frenchJsonUrl}});$("body").on("click",".assignCaisse",(function(){(e=$(".colorRow").attr("id"))?$.ajax({url:"findUser",method:"POST",data:{idUser:e,caisse:!0},success:function(e){data=e.data,$("#user_name_caisse").val(data.username),$("#user_nom_caisse").val(data.name),$("#user_profession_caisse").val(data.professionDescription),$.fn.DataTable.isDataTable("body #caisse_table")&&$("#caisse_table").DataTable().destroy(),$("body #list_caisse").empty().append(e.html),o=$("#caisse_table").DataTable({language:{url:window.frenchJsonUrl}}),$("#caisse_table tbody tr").each((function(){$(this).find('input[type="checkbox"]').is(":checked")&&$(this).addClass("colorRow")})),$("#assign_caisse").modal("show")},error:function(e,t,r){toastr.error(e.responseText)}}):toastr.info("Choisir un utilisateur!")})),$("body").on("click","#caisse_table tbody tr",(function(){$(this).hasClass("colorRow")?($(this).removeClass("colorRow"),$(this).find('input[type="checkbox"]').prop("checked",!1)):(o.$("tr").removeClass("colorRow"),o.$('input[type="checkbox"]').prop("checked",!1),$(this).addClass("colorRow"),$(this).find('input[type="checkbox"]').prop("checked",!0))})),$("body").on("click",".saveAssignCaisse",(function(){var t,r=ladda.create(document.activeElement);r.start();var a=o.rows(".colorRow").data().length>0?o.rows(".colorRow").data()[0][1]:null;$.ajax((n(t={type:"POST",url:Routing.generate("app_assign_caisse"),contentType:"application/json",data:JSON.stringify({selectedCaisse:a,id_user:e}),processData:!1},"contentType",!1),n(t,"success",(function(e){r.stop(),toastr.success(e),$("#assign_caisse").modal("hide")})),n(t,"error",(function(e,t,o){return r.stop(),toastr.error(e.responseText)})),t))})),$("body").on("click",".duplicate",(function(){(e=$(".colorRow").attr("id"))?$("#duplicate_user").modal("show"):toastr.info("Choisir un utilisateur!")})),$("body").on("submit","#duplicateUserForm",(function(t){t.preventDefault(),e=$(".colorRow").attr("id");var r=$("#duplicated_username").val(),o=$("#duplicated_nom").val(),n=$("#duplicated_password").val();if(e){var a={id_user:e,username:r,name:o,password:n},s=ladda.create(document.activeElement);s.start(),$.ajax({url:Routing.generate("app_duplicate_user"),method:"POST",contentType:"application/json",data:JSON.stringify(a),success:function(e){toastr.success("Utilisateur dupliqué avec succès"),s.stop(),$("#duplicate_user").modal("hide"),$("#duplicated_username").val(""),$("#duplicated_nom").val(""),$("#duplicated_password").val(""),$.fn.dataTable.isDataTable("#myTable")&&$("#myTable").DataTable().clear().destroy(),$("#listUsers").html(e.html),$("#myTable").DataTable({lengthMenu:[[15,25,50,-1],[15,25,50,"All"]],autoWidth:!1})},error:function(e,t,r){toastr.error(e.responseText),s.stop()}})}else toastr.info("Choisir un utilisateur!")}))}))},38709:(e,t,r)=>{"use strict";var o=r(19670),n=r(92140),a=TypeError;e.exports=function(e){if(o(this),"string"===e||"default"===e)e="string";else if("number"!==e)throw a("Incorrect hint");return n(this,e)}},53111:(e,t,r)=>{"use strict";var o=r(1702),n=r(84488),a=r(41340),s=r(81361),i=o("".replace),c=RegExp("^["+s+"]+"),u=RegExp("(^|[^"+s+"])["+s+"]+$"),l=function(e){return function(t){var r=a(n(t));return 1&e&&(r=i(r,c,"")),2&e&&(r=i(r,u,"$1")),r}};e.exports={start:l(1),end:l(2),trim:l(3)}},50863:(e,t,r)=>{"use strict";var o=r(1702);e.exports=o(1..valueOf)},81361:e=>{"use strict";e.exports="\t\n\v\f\r                　\u2028\u2029\ufeff"},69826:(e,t,r)=>{"use strict";var o=r(82109),n=r(42092).find,a=r(51223),s="find",i=!0;s in[]&&Array(1)[s]((function(){i=!1})),o({target:"Array",proto:!0,forced:i},{find:function(e){return n(this,e,arguments.length>1?arguments[1]:void 0)}}),a(s)},96078:(e,t,r)=>{"use strict";var o=r(92597),n=r(98052),a=r(38709),s=r(5112)("toPrimitive"),i=Date.prototype;o(i,s)||n(i,s,a)},68309:(e,t,r)=>{"use strict";var o=r(19781),n=r(76530).EXISTS,a=r(1702),s=r(47045),i=Function.prototype,c=a(i.toString),u=/function\b(?:\s|\/\*[\S\s]*?\*\/|\/\/[^\n\r]*[\n\r]+)*([^\s(/]*)/,l=a(u.exec);o&&!n&&s(i,"name",{configurable:!0,get:function(){try{return l(u,c(this))[1]}catch(e){return""}}})},9653:(e,t,r)=>{"use strict";var o=r(82109),n=r(31913),a=r(19781),s=r(17854),i=r(40857),c=r(1702),u=r(54705),l=r(92597),d=r(79587),f=r(47976),p=r(52190),m=r(57593),y=r(47293),h=r(8006).f,b=r(31236).f,g=r(3070).f,v=r(50863),$=r(53111).trim,_="Number",k=s[_],x=i[_],w=k.prototype,S=s.TypeError,E=c("".slice),T=c("".charCodeAt),O=function(e){var t,r,o,n,a,s,i,c,u=m(e,"number");if(p(u))throw S("Cannot convert a Symbol value to a number");if("string"==typeof u&&u.length>2)if(u=$(u),43===(t=T(u,0))||45===t){if(88===(r=T(u,2))||120===r)return NaN}else if(48===t){switch(T(u,1)){case 66:case 98:o=2,n=49;break;case 79:case 111:o=8,n=55;break;default:return+u}for(s=(a=E(u,2)).length,i=0;i<s;i++)if((c=T(a,i))<48||c>n)return NaN;return parseInt(a,o)}return+u},R=u(_,!k(" 0o1")||!k("0b1")||k("+0x1")),C=function(e){var t,r=arguments.length<1?0:k(function(e){var t=m(e,"number");return"bigint"==typeof t?t:O(t)}(e));return f(w,t=this)&&y((function(){v(t)}))?d(Object(r),this,C):r};C.prototype=w,R&&!n&&(w.constructor=C),o({global:!0,constructor:!0,wrap:!0,forced:R},{Number:C});var j=function(e,t){for(var r,o=a?h(t):"MAX_VALUE,MIN_VALUE,NaN,NEGATIVE_INFINITY,POSITIVE_INFINITY,EPSILON,MAX_SAFE_INTEGER,MIN_SAFE_INTEGER,isFinite,isInteger,isNaN,isSafeInteger,parseFloat,parseInt,fromString,range".split(","),n=0;o.length>n;n++)l(t,r=o[n])&&!l(e,r)&&g(e,r,b(t,r))};n&&x&&j(i[_],x),(R||n)&&j(i[_],k)},96649:(e,t,r)=>{"use strict";var o=r(26800),n=r(56532);o("toPrimitive"),n()},44500:(e,t,r)=>{"use strict";var o,n=Object.create,a=Object.defineProperty,s=Object.getOwnPropertyDescriptor,i=Object.getOwnPropertyNames,c=Object.getPrototypeOf,u=Object.prototype.hasOwnProperty,l=(e,t,r,o)=>{if(t&&"object"==typeof t||"function"==typeof t)for(let n of i(t))!u.call(e,n)&&n!==r&&a(e,n,{get:()=>t[n],enumerable:!(o=s(t,n))||o.enumerable});return e},d=(e,t,r)=>(r=null!=e?n(c(e)):{},l(!t&&e&&e.__esModule?r:a(r,"default",{value:e,enumerable:!0}),e)),f={};((e,t)=>{for(var r in t)a(e,r,{get:t[r],enumerable:!0})})(f,{CheckmarkIcon:()=>B,ErrorIcon:()=>M,LoaderIcon:()=>z,ToastBar:()=>re,ToastIcon:()=>Z,Toaster:()=>ie,default:()=>ce,resolveValue:()=>p,toast:()=>E,useToaster:()=>C,useToasterStore:()=>w}),e.exports=(o=f,l(a({},"__esModule",{value:!0}),o));var p=(e,t)=>(e=>"function"==typeof e)(e)?e(t):e,m=(()=>{let e=0;return()=>(++e).toString()})(),y=(()=>{let e;return()=>{if(void 0===e&&typeof window<"u"){let t=matchMedia("(prefers-reduced-motion: reduce)");e=!t||t.matches}return e}})(),h=r(67294),b=new Map,g=e=>{if(b.has(e))return;let t=setTimeout((()=>{b.delete(e),k({type:4,toastId:e})}),1e3);b.set(e,t)},v=(e,t)=>{switch(t.type){case 0:return{...e,toasts:[t.toast,...e.toasts].slice(0,20)};case 1:return t.toast.id&&(e=>{let t=b.get(e);t&&clearTimeout(t)})(t.toast.id),{...e,toasts:e.toasts.map((e=>e.id===t.toast.id?{...e,...t.toast}:e))};case 2:let{toast:r}=t;return e.toasts.find((e=>e.id===r.id))?v(e,{type:1,toast:r}):v(e,{type:0,toast:r});case 3:let{toastId:o}=t;return o?g(o):e.toasts.forEach((e=>{g(e.id)})),{...e,toasts:e.toasts.map((e=>e.id===o||void 0===o?{...e,visible:!1}:e))};case 4:return void 0===t.toastId?{...e,toasts:[]}:{...e,toasts:e.toasts.filter((e=>e.id!==t.toastId))};case 5:return{...e,pausedAt:t.time};case 6:let n=t.time-(e.pausedAt||0);return{...e,pausedAt:void 0,toasts:e.toasts.map((e=>({...e,pauseDuration:e.pauseDuration+n})))}}},$=[],_={toasts:[],pausedAt:void 0},k=e=>{_=v(_,e),$.forEach((e=>{e(_)}))},x={blank:4e3,error:4e3,success:2e3,loading:1/0,custom:4e3},w=(e={})=>{let[t,r]=(0,h.useState)(_);(0,h.useEffect)((()=>($.push(r),()=>{let e=$.indexOf(r);e>-1&&$.splice(e,1)})),[t]);let o=t.toasts.map((t=>{var r,o;return{...e,...e[t.type],...t,duration:t.duration||(null==(r=e[t.type])?void 0:r.duration)||(null==e?void 0:e.duration)||x[t.type],style:{...e.style,...null==(o=e[t.type])?void 0:o.style,...t.style}}}));return{...t,toasts:o}},S=e=>(t,r)=>{let o=((e,t="blank",r)=>({createdAt:Date.now(),visible:!0,type:t,ariaProps:{role:"status","aria-live":"polite"},message:e,pauseDuration:0,...r,id:(null==r?void 0:r.id)||m()}))(t,e,r);return k({type:2,toast:o}),o.id},E=(e,t)=>S("blank")(e,t);E.error=S("error"),E.success=S("success"),E.loading=S("loading"),E.custom=S("custom"),E.dismiss=e=>{k({type:3,toastId:e})},E.remove=e=>k({type:4,toastId:e}),E.promise=(e,t,r)=>{let o=E.loading(t.loading,{...r,...null==r?void 0:r.loading});return e.then((e=>(E.success(p(t.success,e),{id:o,...r,...null==r?void 0:r.success}),e))).catch((e=>{E.error(p(t.error,e),{id:o,...r,...null==r?void 0:r.error})})),e};var T=r(67294),O=(e,t)=>{k({type:1,toast:{id:e,height:t}})},R=()=>{k({type:5,time:Date.now()})},C=e=>{let{toasts:t,pausedAt:r}=w(e);(0,T.useEffect)((()=>{if(r)return;let e=Date.now(),o=t.map((t=>{if(t.duration===1/0)return;let r=(t.duration||0)+t.pauseDuration-(e-t.createdAt);if(!(r<0))return setTimeout((()=>E.dismiss(t.id)),r);t.visible&&E.dismiss(t.id)}));return()=>{o.forEach((e=>e&&clearTimeout(e)))}}),[t,r]);let o=(0,T.useCallback)((()=>{r&&k({type:6,time:Date.now()})}),[r]),n=(0,T.useCallback)(((e,r)=>{let{reverseOrder:o=!1,gutter:n=8,defaultPosition:a}=r||{},s=t.filter((t=>(t.position||a)===(e.position||a)&&t.height)),i=s.findIndex((t=>t.id===e.id)),c=s.filter(((e,t)=>t<i&&e.visible)).length;return s.filter((e=>e.visible)).slice(...o?[c+1]:[0,c]).reduce(((e,t)=>e+(t.height||0)+n),0)}),[t]);return{toasts:t,handlers:{updateHeight:O,startPause:R,endPause:o,calculateOffset:n}}},j=d(r(67294)),N=r(98925),I=d(r(67294)),P=r(98925),A=r(98925),D=A.keyframes`
from {
  transform: scale(0) rotate(45deg);
	opacity: 0;
}
to {
 transform: scale(1) rotate(45deg);
  opacity: 1;
}`,U=A.keyframes`
from {
  transform: scale(0);
  opacity: 0;
}
to {
  transform: scale(1);
  opacity: 1;
}`,F=A.keyframes`
from {
  transform: scale(0) rotate(90deg);
	opacity: 0;
}
to {
  transform: scale(1) rotate(90deg);
	opacity: 1;
}`,M=(0,A.styled)("div")`
  width: 20px;
  opacity: 0;
  height: 20px;
  border-radius: 10px;
  background: ${e=>e.primary||"#ff4b4b"};
  position: relative;
  transform: rotate(45deg);

  animation: ${D} 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275)
    forwards;
  animation-delay: 100ms;

  &:after,
  &:before {
    content: '';
    animation: ${U} 0.15s ease-out forwards;
    animation-delay: 150ms;
    position: absolute;
    border-radius: 3px;
    opacity: 0;
    background: ${e=>e.secondary||"#fff"};
    bottom: 9px;
    left: 4px;
    height: 2px;
    width: 12px;
  }

  &:before {
    animation: ${F} 0.15s ease-out forwards;
    animation-delay: 180ms;
    transform: rotate(90deg);
  }
`,q=r(98925),L=q.keyframes`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
`,z=(0,q.styled)("div")`
  width: 12px;
  height: 12px;
  box-sizing: border-box;
  border: 2px solid;
  border-radius: 100%;
  border-color: ${e=>e.secondary||"#e0e0e0"};
  border-right-color: ${e=>e.primary||"#616161"};
  animation: ${L} 1s linear infinite;
`,V=r(98925),J=V.keyframes`
from {
  transform: scale(0) rotate(45deg);
	opacity: 0;
}
to {
  transform: scale(1) rotate(45deg);
	opacity: 1;
}`,H=V.keyframes`
0% {
	height: 0;
	width: 0;
	opacity: 0;
}
40% {
  height: 0;
	width: 6px;
	opacity: 1;
}
100% {
  opacity: 1;
  height: 10px;
}`,B=(0,V.styled)("div")`
  width: 20px;
  opacity: 0;
  height: 20px;
  border-radius: 10px;
  background: ${e=>e.primary||"#61d345"};
  position: relative;
  transform: rotate(45deg);

  animation: ${J} 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275)
    forwards;
  animation-delay: 100ms;
  &:after {
    content: '';
    box-sizing: border-box;
    animation: ${H} 0.2s ease-out forwards;
    opacity: 0;
    animation-delay: 200ms;
    position: absolute;
    border-right: 2px solid;
    border-bottom: 2px solid;
    border-color: ${e=>e.secondary||"#fff"};
    bottom: 6px;
    left: 6px;
    height: 10px;
    width: 6px;
  }
`,Y=(0,P.styled)("div")`
  position: absolute;
`,G=(0,P.styled)("div")`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  min-width: 20px;
  min-height: 20px;
`,X=P.keyframes`
from {
  transform: scale(0.6);
  opacity: 0.4;
}
to {
  transform: scale(1);
  opacity: 1;
}`,W=(0,P.styled)("div")`
  position: relative;
  transform: scale(0.6);
  opacity: 0.4;
  min-width: 20px;
  animation: ${X} 0.3s 0.12s cubic-bezier(0.175, 0.885, 0.32, 1.275)
    forwards;
`,Z=({toast:e})=>{let{icon:t,type:r,iconTheme:o}=e;return void 0!==t?"string"==typeof t?I.createElement(W,null,t):t:"blank"===r?null:I.createElement(G,null,I.createElement(z,{...o}),"loading"!==r&&I.createElement(Y,null,"error"===r?I.createElement(M,{...o}):I.createElement(B,{...o})))},K=e=>`\n0% {transform: translate3d(0,${-200*e}%,0) scale(.6); opacity:.5;}\n100% {transform: translate3d(0,0,0) scale(1); opacity:1;}\n`,Q=e=>`\n0% {transform: translate3d(0,0,-1px) scale(1); opacity:1;}\n100% {transform: translate3d(0,${-150*e}%,-1px) scale(.6); opacity:0;}\n`,ee=(0,N.styled)("div")`
  display: flex;
  align-items: center;
  background: #fff;
  color: #363636;
  line-height: 1.3;
  will-change: transform;
  box-shadow: 0 3px 10px rgba(0, 0, 0, 0.1), 0 3px 3px rgba(0, 0, 0, 0.05);
  max-width: 350px;
  pointer-events: auto;
  padding: 8px 10px;
  border-radius: 8px;
`,te=(0,N.styled)("div")`
  display: flex;
  justify-content: center;
  margin: 4px 10px;
  color: inherit;
  flex: 1 1 auto;
  white-space: pre-line;
`,re=j.memo((({toast:e,position:t,style:r,children:o})=>{let n=e.height?((e,t)=>{let r=e.includes("top")?1:-1,[o,n]=y()?["0%{opacity:0;} 100%{opacity:1;}","0%{opacity:1;} 100%{opacity:0;}"]:[K(r),Q(r)];return{animation:t?`${(0,N.keyframes)(o)} 0.35s cubic-bezier(.21,1.02,.73,1) forwards`:`${(0,N.keyframes)(n)} 0.4s forwards cubic-bezier(.06,.71,.55,1)`}})(e.position||t||"top-center",e.visible):{opacity:0},a=j.createElement(Z,{toast:e}),s=j.createElement(te,{...e.ariaProps},p(e.message,e));return j.createElement(ee,{className:e.className,style:{...n,...r,...e.style}},"function"==typeof o?o({icon:a,message:s}):j.createElement(j.Fragment,null,a,s))})),oe=r(98925),ne=d(r(67294));(0,oe.setup)(ne.createElement);var ae=({id:e,className:t,style:r,onHeightUpdate:o,children:n})=>{let a=ne.useCallback((t=>{if(t){let r=()=>{let r=t.getBoundingClientRect().height;o(e,r)};r(),new MutationObserver(r).observe(t,{subtree:!0,childList:!0,characterData:!0})}}),[e,o]);return ne.createElement("div",{ref:a,className:t,style:r},n)},se=oe.css`
  z-index: 9999;
  > * {
    pointer-events: auto;
  }
`,ie=({reverseOrder:e,position:t="top-center",toastOptions:r,gutter:o,children:n,containerStyle:a,containerClassName:s})=>{let{toasts:i,handlers:c}=C(r);return ne.createElement("div",{style:{position:"fixed",zIndex:9999,top:16,left:16,right:16,bottom:16,pointerEvents:"none",...a},className:s,onMouseEnter:c.startPause,onMouseLeave:c.endPause},i.map((r=>{let a=r.position||t,s=((e,t)=>{let r=e.includes("top"),o=r?{top:0}:{bottom:0},n=e.includes("center")?{justifyContent:"center"}:e.includes("right")?{justifyContent:"flex-end"}:{};return{left:0,right:0,display:"flex",position:"absolute",transition:y()?void 0:"all 230ms cubic-bezier(.21,1.02,.73,1)",transform:`translateY(${t*(r?1:-1)}px)`,...o,...n}})(a,c.calculateOffset(r,{reverseOrder:e,gutter:o,defaultPosition:t}));return ne.createElement(ae,{id:r.id,key:r.id,onHeightUpdate:c.updateHeight,className:r.visible?se:"",style:s},"custom"===r.type?p(r.message,r):n?n(r):ne.createElement(re,{toast:r,position:a}))})))},ce=E},72408:(e,t)=>{"use strict";var r=Symbol.for("react.element"),o=Symbol.for("react.portal"),n=Symbol.for("react.fragment"),a=Symbol.for("react.strict_mode"),s=Symbol.for("react.profiler"),i=Symbol.for("react.provider"),c=Symbol.for("react.context"),u=Symbol.for("react.forward_ref"),l=Symbol.for("react.suspense"),d=Symbol.for("react.memo"),f=Symbol.for("react.lazy"),p=Symbol.iterator;var m={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},y=Object.assign,h={};function b(e,t,r){this.props=e,this.context=t,this.refs=h,this.updater=r||m}function g(){}function v(e,t,r){this.props=e,this.context=t,this.refs=h,this.updater=r||m}b.prototype.isReactComponent={},b.prototype.setState=function(e,t){if("object"!=typeof e&&"function"!=typeof e&&null!=e)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,e,t,"setState")},b.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")},g.prototype=b.prototype;var $=v.prototype=new g;$.constructor=v,y($,b.prototype),$.isPureReactComponent=!0;var _=Array.isArray,k=Object.prototype.hasOwnProperty,x={current:null},w={key:!0,ref:!0,__self:!0,__source:!0};function S(e,t,o){var n,a={},s=null,i=null;if(null!=t)for(n in void 0!==t.ref&&(i=t.ref),void 0!==t.key&&(s=""+t.key),t)k.call(t,n)&&!w.hasOwnProperty(n)&&(a[n]=t[n]);var c=arguments.length-2;if(1===c)a.children=o;else if(1<c){for(var u=Array(c),l=0;l<c;l++)u[l]=arguments[l+2];a.children=u}if(e&&e.defaultProps)for(n in c=e.defaultProps)void 0===a[n]&&(a[n]=c[n]);return{$$typeof:r,type:e,key:s,ref:i,props:a,_owner:x.current}}function E(e){return"object"==typeof e&&null!==e&&e.$$typeof===r}var T=/\/+/g;function O(e,t){return"object"==typeof e&&null!==e&&null!=e.key?function(e){var t={"=":"=0",":":"=2"};return"$"+e.replace(/[=:]/g,(function(e){return t[e]}))}(""+e.key):t.toString(36)}function R(e,t,n,a,s){var i=typeof e;"undefined"!==i&&"boolean"!==i||(e=null);var c=!1;if(null===e)c=!0;else switch(i){case"string":case"number":c=!0;break;case"object":switch(e.$$typeof){case r:case o:c=!0}}if(c)return s=s(c=e),e=""===a?"."+O(c,0):a,_(s)?(n="",null!=e&&(n=e.replace(T,"$&/")+"/"),R(s,t,n,"",(function(e){return e}))):null!=s&&(E(s)&&(s=function(e,t){return{$$typeof:r,type:e.type,key:t,ref:e.ref,props:e.props,_owner:e._owner}}(s,n+(!s.key||c&&c.key===s.key?"":(""+s.key).replace(T,"$&/")+"/")+e)),t.push(s)),1;if(c=0,a=""===a?".":a+":",_(e))for(var u=0;u<e.length;u++){var l=a+O(i=e[u],u);c+=R(i,t,n,l,s)}else if(l=function(e){return null===e||"object"!=typeof e?null:"function"==typeof(e=p&&e[p]||e["@@iterator"])?e:null}(e),"function"==typeof l)for(e=l.call(e),u=0;!(i=e.next()).done;)c+=R(i=i.value,t,n,l=a+O(i,u++),s);else if("object"===i)throw t=String(e),Error("Objects are not valid as a React child (found: "+("[object Object]"===t?"object with keys {"+Object.keys(e).join(", ")+"}":t)+"). If you meant to render a collection of children, use an array instead.");return c}function C(e,t,r){if(null==e)return e;var o=[],n=0;return R(e,o,"","",(function(e){return t.call(r,e,n++)})),o}function j(e){if(-1===e._status){var t=e._result;(t=t()).then((function(t){0!==e._status&&-1!==e._status||(e._status=1,e._result=t)}),(function(t){0!==e._status&&-1!==e._status||(e._status=2,e._result=t)})),-1===e._status&&(e._status=0,e._result=t)}if(1===e._status)return e._result.default;throw e._result}var N={current:null},I={transition:null},P={ReactCurrentDispatcher:N,ReactCurrentBatchConfig:I,ReactCurrentOwner:x};t.Children={map:C,forEach:function(e,t,r){C(e,(function(){t.apply(this,arguments)}),r)},count:function(e){var t=0;return C(e,(function(){t++})),t},toArray:function(e){return C(e,(function(e){return e}))||[]},only:function(e){if(!E(e))throw Error("React.Children.only expected to receive a single React element child.");return e}},t.Component=b,t.Fragment=n,t.Profiler=s,t.PureComponent=v,t.StrictMode=a,t.Suspense=l,t.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=P,t.cloneElement=function(e,t,o){if(null==e)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+e+".");var n=y({},e.props),a=e.key,s=e.ref,i=e._owner;if(null!=t){if(void 0!==t.ref&&(s=t.ref,i=x.current),void 0!==t.key&&(a=""+t.key),e.type&&e.type.defaultProps)var c=e.type.defaultProps;for(u in t)k.call(t,u)&&!w.hasOwnProperty(u)&&(n[u]=void 0===t[u]&&void 0!==c?c[u]:t[u])}var u=arguments.length-2;if(1===u)n.children=o;else if(1<u){c=Array(u);for(var l=0;l<u;l++)c[l]=arguments[l+2];n.children=c}return{$$typeof:r,type:e.type,key:a,ref:s,props:n,_owner:i}},t.createContext=function(e){return(e={$$typeof:c,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null}).Provider={$$typeof:i,_context:e},e.Consumer=e},t.createElement=S,t.createFactory=function(e){var t=S.bind(null,e);return t.type=e,t},t.createRef=function(){return{current:null}},t.forwardRef=function(e){return{$$typeof:u,render:e}},t.isValidElement=E,t.lazy=function(e){return{$$typeof:f,_payload:{_status:-1,_result:e},_init:j}},t.memo=function(e,t){return{$$typeof:d,type:e,compare:void 0===t?null:t}},t.startTransition=function(e){var t=I.transition;I.transition={};try{e()}finally{I.transition=t}},t.unstable_act=function(){throw Error("act(...) is not supported in production builds of React.")},t.useCallback=function(e,t){return N.current.useCallback(e,t)},t.useContext=function(e){return N.current.useContext(e)},t.useDebugValue=function(){},t.useDeferredValue=function(e){return N.current.useDeferredValue(e)},t.useEffect=function(e,t){return N.current.useEffect(e,t)},t.useId=function(){return N.current.useId()},t.useImperativeHandle=function(e,t,r){return N.current.useImperativeHandle(e,t,r)},t.useInsertionEffect=function(e,t){return N.current.useInsertionEffect(e,t)},t.useLayoutEffect=function(e,t){return N.current.useLayoutEffect(e,t)},t.useMemo=function(e,t){return N.current.useMemo(e,t)},t.useReducer=function(e,t,r){return N.current.useReducer(e,t,r)},t.useRef=function(e){return N.current.useRef(e)},t.useState=function(e){return N.current.useState(e)},t.useSyncExternalStore=function(e,t,r){return N.current.useSyncExternalStore(e,t,r)},t.useTransition=function(){return N.current.useTransition()},t.version="18.2.0"},67294:(e,t,r)=>{"use strict";e.exports=r(72408)},98925:(e,t)=>{let r={data:""},o=e=>"object"==typeof window?((e?e.querySelector("#_goober"):window._goober)||Object.assign((e||document.head).appendChild(document.createElement("style")),{innerHTML:" ",id:"_goober"})).firstChild:e||r,n=/(?:([\u0080-\uFFFF\w-%@]+) *:? *([^{;]+?);|([^;}{]*?) *{)|(}\s*)/g,a=/\/\*[^]*?\*\/|  +/g,s=/\n+/g,i=(e,t)=>{let r="",o="",n="";for(let a in e){let s=e[a];"@"==a[0]?"i"==a[1]?r=a+" "+s+";":o+="f"==a[1]?i(s,a):a+"{"+i(s,"k"==a[1]?"":t)+"}":"object"==typeof s?o+=i(s,t?t.replace(/([^,])+/g,(e=>a.replace(/(^:.*)|([^,])+/g,(t=>/&/.test(t)?t.replace(/&/g,e):e?e+" "+t:t)))):a):null!=s&&(a=/^--/.test(a)?a:a.replace(/[A-Z]/g,"-$&").toLowerCase(),n+=i.p?i.p(a,s):a+":"+s+";")}return r+(t&&n?t+"{"+n+"}":n)+o},c={},u=e=>{if("object"==typeof e){let t="";for(let r in e)t+=r+u(e[r]);return t}return e},l=(e,t,r,o,l)=>{let d=u(e),f=c[d]||(c[d]=(e=>{let t=0,r=11;for(;t<e.length;)r=101*r+e.charCodeAt(t++)>>>0;return"go"+r})(d));if(!c[f]){let t=d!==e?e:(e=>{let t,r,o=[{}];for(;t=n.exec(e.replace(a,""));)t[4]?o.shift():t[3]?(r=t[3].replace(s," ").trim(),o.unshift(o[0][r]=o[0][r]||{})):o[0][t[1]]=t[2].replace(s," ").trim();return o[0]})(e);c[f]=i(l?{["@keyframes "+f]:t}:t,r?"":"."+f)}let p=r&&c.g?c.g:null;return r&&(c.g=c[f]),((e,t,r,o)=>{o?t.data=t.data.replace(o,e):-1===t.data.indexOf(e)&&(t.data=r?e+t.data:t.data+e)})(c[f],t,o,p),f};function d(e){let t=this||{},r=e.call?e(t.p):e;return l(r.unshift?r.raw?((e,t,r)=>e.reduce(((e,o,n)=>{let a=t[n];if(a&&a.call){let e=a(r),t=e&&e.props&&e.props.className||/^go/.test(e)&&e;a=t?"."+t:e&&"object"==typeof e?e.props?"":i(e,""):!1===e?"":e}return e+o+(null==a?"":a)}),""))(r,[].slice.call(arguments,1),t.p):r.reduce(((e,r)=>Object.assign(e,r&&r.call?r(t.p):r)),{}):r,o(t.target),t.g,t.o,t.k)}let f,p,m,y=d.bind({g:1}),h=d.bind({k:1});t.css=d,t.extractCss=e=>{let t=o(e),r=t.data;return t.data="",r},t.glob=y,t.keyframes=h,t.setup=function(e,t,r,o){i.p=t,f=e,p=r,m=o},t.styled=function(e,t){let r=this||{};return function(){let o=arguments;function n(a,s){let i=Object.assign({},a),c=i.className||n.className;r.p=Object.assign({theme:p&&p()},i),r.o=/ *go\d+/.test(c),i.className=d.apply(r,o)+(c?" "+c:""),t&&(i.ref=s);let u=e;return e[0]&&(u=i.as||e,delete i.as),m&&u[0]&&m(i),f(u,i)}return t?t(n):n}}}},e=>{var t=t=>e(e.s=t);e.O(0,[738,193],(()=>(t(26189),t(87286))));e.O()}]);