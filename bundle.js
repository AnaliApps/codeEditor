(()=>{"use strict";var e={208:(e,n,t)=>{t.d(n,{A:()=>s});var r=t(601),a=t.n(r),i=t(314),o=t.n(i)()(a());o.push([e.id,"@import url(https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css);"]),o.push([e.id,"*{\n    margin: 0;\n    padding: 0;\n    font-family: 'Poppins','sans-serif';\n    box-sizing: border-box;\n}\nbody{\n    background: #454545;\n    color: #fff;\n}\n\n.main-container{\n    display: flex;\n    flex-direction: column;\n    width: 92%;\n    height: 100vh;\n    padding: 20px;\n    overflow: auto;\n}\n .left,.right{\n    flex-basis: 100%;\n    padding: 10px;\n}\n\ntextarea{\n    width: 100%;\n    height: 30vh;\n    background: #1f1f1f;\n    color: #fff;\n    padding: 10px 20px;\n    border: 0;\n    outline: 0;\n    font-size: 18px;\n    overflow-y: auto;\n}\niframe{\n    width: 100%;\n    height: 30vh;\n    background: #fff;\n    border: 0;\n    outline: 0;\n}\n    \nlabel i{\n    margin-right: 10px;\n    margin-left: 10px;\n}\nlabel{\n    display: flex;\n    align-items: center;\n    background-color: #000;\n    height: 30px;\n}\n@media only screen and (min-width: 768px){\n    .main-container{\n        width:760px;\n        flex-direction: row;\n    }\n    .left,.right{\n        flex-basis: 50%;\n    }\n    textarea{\n        height: 30%;\n       \n    }\n    iframe{\n        height: 95%;\n    }\n}  \n@media only screen and (min-width: 900px){\n    .main-container{\n        width:95%;\n        flex-direction: row;\n    }\n    .left,.right{\n        flex-basis: 50%;\n    }\n    iframe{\n        height: 95vh;\n    }\n}",""]);const s=o},314:e=>{e.exports=function(e){var n=[];return n.toString=function(){return this.map((function(n){var t="",r=void 0!==n[5];return n[4]&&(t+="@supports (".concat(n[4],") {")),n[2]&&(t+="@media ".concat(n[2]," {")),r&&(t+="@layer".concat(n[5].length>0?" ".concat(n[5]):""," {")),t+=e(n),r&&(t+="}"),n[2]&&(t+="}"),n[4]&&(t+="}"),t})).join("")},n.i=function(e,t,r,a,i){"string"==typeof e&&(e=[[null,e,void 0]]);var o={};if(r)for(var s=0;s<this.length;s++){var c=this[s][0];null!=c&&(o[c]=!0)}for(var l=0;l<e.length;l++){var d=[].concat(e[l]);r&&o[d[0]]||(void 0!==i&&(void 0===d[5]||(d[1]="@layer".concat(d[5].length>0?" ".concat(d[5]):""," {").concat(d[1],"}")),d[5]=i),t&&(d[2]?(d[1]="@media ".concat(d[2]," {").concat(d[1],"}"),d[2]=t):d[2]=t),a&&(d[4]?(d[1]="@supports (".concat(d[4],") {").concat(d[1],"}"),d[4]=a):d[4]="".concat(a)),n.push(d))}},n}},601:e=>{e.exports=function(e){return e[1]}},72:e=>{var n=[];function t(e){for(var t=-1,r=0;r<n.length;r++)if(n[r].identifier===e){t=r;break}return t}function r(e,r){for(var i={},o=[],s=0;s<e.length;s++){var c=e[s],l=r.base?c[0]+r.base:c[0],d=i[l]||0,u="".concat(l," ").concat(d);i[l]=d+1;var f=t(u),p={css:c[1],media:c[2],sourceMap:c[3],supports:c[4],layer:c[5]};if(-1!==f)n[f].references++,n[f].updater(p);else{var h=a(p,r);r.byIndex=s,n.splice(s,0,{identifier:u,updater:h,references:1})}o.push(u)}return o}function a(e,n){var t=n.domAPI(n);return t.update(e),function(n){if(n){if(n.css===e.css&&n.media===e.media&&n.sourceMap===e.sourceMap&&n.supports===e.supports&&n.layer===e.layer)return;t.update(e=n)}else t.remove()}}e.exports=function(e,a){var i=r(e=e||[],a=a||{});return function(e){e=e||[];for(var o=0;o<i.length;o++){var s=t(i[o]);n[s].references--}for(var c=r(e,a),l=0;l<i.length;l++){var d=t(i[l]);0===n[d].references&&(n[d].updater(),n.splice(d,1))}i=c}}},659:e=>{var n={};e.exports=function(e,t){var r=function(e){if(void 0===n[e]){var t=document.querySelector(e);if(window.HTMLIFrameElement&&t instanceof window.HTMLIFrameElement)try{t=t.contentDocument.head}catch(e){t=null}n[e]=t}return n[e]}(e);if(!r)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");r.appendChild(t)}},540:e=>{e.exports=function(e){var n=document.createElement("style");return e.setAttributes(n,e.attributes),e.insert(n,e.options),n}},56:(e,n,t)=>{e.exports=function(e){var n=t.nc;n&&e.setAttribute("nonce",n)}},825:e=>{e.exports=function(e){if("undefined"==typeof document)return{update:function(){},remove:function(){}};var n=e.insertStyleElement(e);return{update:function(t){!function(e,n,t){var r="";t.supports&&(r+="@supports (".concat(t.supports,") {")),t.media&&(r+="@media ".concat(t.media," {"));var a=void 0!==t.layer;a&&(r+="@layer".concat(t.layer.length>0?" ".concat(t.layer):""," {")),r+=t.css,a&&(r+="}"),t.media&&(r+="}"),t.supports&&(r+="}");var i=t.sourceMap;i&&"undefined"!=typeof btoa&&(r+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(i))))," */")),n.styleTagTransform(r,e,n.options)}(n,e,t)},remove:function(){!function(e){if(null===e.parentNode)return!1;e.parentNode.removeChild(e)}(n)}}}},113:e=>{e.exports=function(e,n){if(n.styleSheet)n.styleSheet.cssText=e;else{for(;n.firstChild;)n.removeChild(n.firstChild);n.appendChild(document.createTextNode(e))}}}},n={};function t(r){var a=n[r];if(void 0!==a)return a.exports;var i=n[r]={id:r,exports:{}};return e[r](i,i.exports,t),i.exports}t.n=e=>{var n=e&&e.__esModule?()=>e.default:()=>e;return t.d(n,{a:n}),n},t.d=(e,n)=>{for(var r in n)t.o(n,r)&&!t.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:n[r]})},t.o=(e,n)=>Object.prototype.hasOwnProperty.call(e,n),t.nc=void 0;var r=t(72),a=t.n(r),i=t(825),o=t.n(i),s=t(659),c=t.n(s),l=t(56),d=t.n(l),u=t(540),f=t.n(u),p=t(113),h=t.n(p),m=t(208),v={};v.styleTagTransform=h(),v.setAttributes=d(),v.insert=c().bind(null,"head"),v.domAPI=o(),v.insertStyleElement=f(),a()(m.A,v),m.A&&m.A.locals&&m.A.locals,document.body.appendChild(function(){let e=document.createElement("div");return e.setAttribute("class","main-container"),e.innerHTML='\n    <div class="left">\n            <label><i class="fa fa-html5" aria-hidden="true"></i>HTML</label>\n            <textarea id="htmlCode" class="codeArea"></textarea>\n\n            <label> <i class="fa fa-css3" aria-hidden="true"></i>CSS</label>\n            <textarea id="cssCode" class="codeArea"></textarea>\n\n            <label><i class="fa fa-jsfiddle" aria-hidden="true"></i>JS</label>\n            <textarea id="jsCode" class="codeArea"></textarea>\n    </div>\n    <div class="right">\n            <label><i class="fa fa-play" aria-hidden="true"></i>OUTPUT</label>\n            <iframe id="output"></iframe>\n    </div>\n    ',e}());let b=document.querySelectorAll(".codeArea"),g=document.querySelector("#output");b.forEach((e=>{e.addEventListener("keyup",(()=>{let n="",t="";"htmlCode"===e.getAttribute("id")?(n+=e.value,g.contentDocument.body.innerHTML=n):"cssCode"===e.getAttribute("id")?(t+=e.value,g.contentDocument.body.innerHTML+="<style>"+t+"</style>"):"jsCode"===e.getAttribute("id")&&g.contentWindow.eval(e.value)}))}))})();