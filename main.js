(()=>{"use strict";var e={803:(e,n,t)=>{t.d(n,{Z:()=>i});var o=t(81),r=t.n(o),a=t(645),c=t.n(a)()(r());c.push([e.id,"/* Body Styles */\n\nhtml,body{\n  height: 100%;\n}\nbody {\n    font-family: Arial, sans-serif;\n    margin: 20;\n    padding: 0;\n    background-color: #f7f7f7;\n    display:flex;\n    flex-direction: column;\n  }\n\n\n  \n  #container{\n    background-color: rgba(0, 0, 0, 0.1);\n    flex: 1;\n  }\n\n\n  /* Header Styles */\n  header {\n    background-color: #fff;\n    padding: 20px;\n    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);\n  }\n  \n  h1 {\n    color: #333;\n    margin: 0;\n    font-size: 28px;\n  }\n  \n  /* Main Content Styles */\n  .container {\n    max-width: 1200px;\n    margin: 0 auto;\n    padding: 20px;\n  }\n  \n  .hero-image {\n    width: 100%;\n    max-height: 400px;\n  }\n  \n  p {\n    font-size: 18px;\n    line-height: 1.5;\n    margin-bottom: 20px;\n  }\n  \n  .button {\n    display: inline-block;\n    background-color: #ff8c00;\n    color: #fff;\n    padding: 10px 20px;\n    border-radius: 5px;\n    text-decoration: none;\n    font-weight: bold;\n  }\n  \n  /* Footer Styles */\n  .footer {\n    background-color: #333;\n    color: #fff;\n\n\n    font-size: 14px;\n    padding: 20px;\n    display:flex;\n    align-items: center;\n    justify-content: center;\n    gap: 10px;\n  }\n\n  .footer img{\n    height:2.5rem;\n    width: auto;\n    transition-duration: 1s;\n  }\n  \n  .footer img:hover {\n    scale:1.2;\n    transform:rotate(-360deg);\n  }\n\n  ul {\n    list-style: none;\n    padding: 0;\n    margin: 0;\n  }\n  \n  ul li {\n    display: inline-block;\n    margin-right: 10px;\n  }\n  \n  ul li button {\n    display: inline-block;\n    padding: 10px 20px;\n    background-color: #ff8c00;\n    color: #fff;\n    border: none;\n    border-radius: 5px;\n    font-size: 16px;\n    text-decoration: none;\n  }\n  \n  ul li button:hover {\n    background-color: #ffa500;\n    cursor: pointer;\n  }",""]);const i=c},645:e=>{e.exports=function(e){var n=[];return n.toString=function(){return this.map((function(n){var t="",o=void 0!==n[5];return n[4]&&(t+="@supports (".concat(n[4],") {")),n[2]&&(t+="@media ".concat(n[2]," {")),o&&(t+="@layer".concat(n[5].length>0?" ".concat(n[5]):""," {")),t+=e(n),o&&(t+="}"),n[2]&&(t+="}"),n[4]&&(t+="}"),t})).join("")},n.i=function(e,t,o,r,a){"string"==typeof e&&(e=[[null,e,void 0]]);var c={};if(o)for(var i=0;i<this.length;i++){var s=this[i][0];null!=s&&(c[s]=!0)}for(var d=0;d<e.length;d++){var l=[].concat(e[d]);o&&c[l[0]]||(void 0!==a&&(void 0===l[5]||(l[1]="@layer".concat(l[5].length>0?" ".concat(l[5]):""," {").concat(l[1],"}")),l[5]=a),t&&(l[2]?(l[1]="@media ".concat(l[2]," {").concat(l[1],"}"),l[2]=t):l[2]=t),r&&(l[4]?(l[1]="@supports (".concat(l[4],") {").concat(l[1],"}"),l[4]=r):l[4]="".concat(r)),n.push(l))}},n}},81:e=>{e.exports=function(e){return e[1]}},379:e=>{var n=[];function t(e){for(var t=-1,o=0;o<n.length;o++)if(n[o].identifier===e){t=o;break}return t}function o(e,o){for(var a={},c=[],i=0;i<e.length;i++){var s=e[i],d=o.base?s[0]+o.base:s[0],l=a[d]||0,u="".concat(d," ").concat(l);a[d]=l+1;var m=t(u),p={css:s[1],media:s[2],sourceMap:s[3],supports:s[4],layer:s[5]};if(-1!==m)n[m].references++,n[m].updater(p);else{var f=r(p,o);o.byIndex=i,n.splice(i,0,{identifier:u,updater:f,references:1})}c.push(u)}return c}function r(e,n){var t=n.domAPI(n);return t.update(e),function(n){if(n){if(n.css===e.css&&n.media===e.media&&n.sourceMap===e.sourceMap&&n.supports===e.supports&&n.layer===e.layer)return;t.update(e=n)}else t.remove()}}e.exports=function(e,r){var a=o(e=e||[],r=r||{});return function(e){e=e||[];for(var c=0;c<a.length;c++){var i=t(a[c]);n[i].references--}for(var s=o(e,r),d=0;d<a.length;d++){var l=t(a[d]);0===n[l].references&&(n[l].updater(),n.splice(l,1))}a=s}}},569:e=>{var n={};e.exports=function(e,t){var o=function(e){if(void 0===n[e]){var t=document.querySelector(e);if(window.HTMLIFrameElement&&t instanceof window.HTMLIFrameElement)try{t=t.contentDocument.head}catch(e){t=null}n[e]=t}return n[e]}(e);if(!o)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");o.appendChild(t)}},216:e=>{e.exports=function(e){var n=document.createElement("style");return e.setAttributes(n,e.attributes),e.insert(n,e.options),n}},565:(e,n,t)=>{e.exports=function(e){var n=t.nc;n&&e.setAttribute("nonce",n)}},795:e=>{e.exports=function(e){if("undefined"==typeof document)return{update:function(){},remove:function(){}};var n=e.insertStyleElement(e);return{update:function(t){!function(e,n,t){var o="";t.supports&&(o+="@supports (".concat(t.supports,") {")),t.media&&(o+="@media ".concat(t.media," {"));var r=void 0!==t.layer;r&&(o+="@layer".concat(t.layer.length>0?" ".concat(t.layer):""," {")),o+=t.css,r&&(o+="}"),t.media&&(o+="}"),t.supports&&(o+="}");var a=t.sourceMap;a&&"undefined"!=typeof btoa&&(o+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(a))))," */")),n.styleTagTransform(o,e,n.options)}(n,e,t)},remove:function(){!function(e){if(null===e.parentNode)return!1;e.parentNode.removeChild(e)}(n)}}}},589:e=>{e.exports=function(e,n){if(n.styleSheet)n.styleSheet.cssText=e;else{for(;n.firstChild;)n.removeChild(n.firstChild);n.appendChild(document.createTextNode(e))}}}},n={};function t(o){var r=n[o];if(void 0!==r)return r.exports;var a=n[o]={id:o,exports:{}};return e[o](a,a.exports,t),a.exports}t.n=e=>{var n=e&&e.__esModule?()=>e.default:()=>e;return t.d(n,{a:n}),n},t.d=(e,n)=>{for(var o in n)t.o(n,o)&&!t.o(e,o)&&Object.defineProperty(e,o,{enumerable:!0,get:n[o]})},t.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"==typeof window)return window}}(),t.o=(e,n)=>Object.prototype.hasOwnProperty.call(e,n),(()=>{var e;t.g.importScripts&&(e=t.g.location+"");var n=t.g.document;if(!e&&n&&(n.currentScript&&(e=n.currentScript.src),!e)){var o=n.getElementsByTagName("script");if(o.length)for(var r=o.length-1;r>-1&&!e;)e=o[r--].src}if(!e)throw new Error("Automatic publicPath is not supported in this browser");e=e.replace(/#.*$/,"").replace(/\?.*$/,"").replace(/\/[^\/]+$/,"/"),t.p=e})(),t.nc=void 0;var o={};(()=>{function e(){const e=document.createElement("h1");e.textContent="The Lanternpost Café";const n=document.createElement("p");n.textContent="The Lanternpost Cafe is a whimsical and cozy establishment inspired by the magical world of Narnia. Step into a charming atmosphere that transports you to a realm of enchantment and adventure. The cafe combines the warmth of a traditional coffeehouse with the ethereal ambiance of Narnia, creating a unique and memorable experience for visitors of all ages.";const t=document.createElement("button");return t.textContent="gibberish",[e,n,t]}t.d(o,{hi:()=>b,um:()=>y}),t.p;const n=[{name:"Turkish Delight Latte",description:"A creamy latte infused with the exotic flavors of Turkish delight.",price:4.99},{name:"White Witch Mocha",description:"A rich and indulgent mocha with a touch of mint, inspired by the White Witch.",price:5.49},{name:"Mr. Tumnus Toastie",description:"A delicious grilled cheese sandwich with a choice of fillings.",price:7.99}];document.getElementById("menu-list");var r=t(379),a=t.n(r),c=t(795),i=t.n(c),s=t(569),d=t.n(s),l=t(565),u=t.n(l),m=t(216),p=t.n(m),f=t(589),h=t.n(f),g=t(803),x={};x.styleTagTransform=h(),x.setAttributes=u(),x.insert=d().bind(null,"head"),x.domAPI=i(),x.insertStyleElement=p(),a()(g.Z,x),g.Z&&g.Z.locals&&g.Z.locals;const v=t.p+"97ed8e7eef60d61ca469.svg";function b(e){const n=document.createElement("div");return n.classList.add(`${e}`),n}function y(e,n){for(let t=0;t<e.length;t++)n.appendChild(e[t]);return n}const C=document.querySelector("#content"),E=document.querySelector("body");document.querySelector("footer"),document.querySelector("title"),E.insertBefore(function(){const t=document.createElement("ul"),o=document.createElement("li"),r=document.createElement("li"),a=document.createElement("li");return[o,r,a].forEach((e=>e.classList.add("button"))),o.textContent="home",r.textContent="menu",a.textContent="contact",o.addEventListener("click",(()=>{C.textContent="",y(e(),C)})),r.addEventListener("click",(()=>{C.textContent="",y(function(){let e=[];return document.createElement("h1").textContent="The Lanternpost Café Menu",n.forEach((n=>{const t=function(e){const n=document.createElement("div");n.classList.add("menu-item");const t=document.createElement("h2");t.textContent=e.name;const o=document.createElement("p");o.textContent=e.description;const r=document.createElement("p");return r.classList.add("price"),r.textContent=`$${e.price.toFixed(2)}`,n.appendChild(t),n.appendChild(o),n.appendChild(r),n}(n);e.push(t)})),e}(),C)})),a.addEventListener("click",(()=>{C.textContent="",y(function(){const e=function(){const e=document.createElement("h3");e.textContent="Message Us";const n=document.createElement("form");n.id="contact-form";const t=document.createElement("label");t.textContent="Name:";const o=document.createElement("input");o.type="text",o.id="name",o.name="name",o.required=!0;const r=document.createElement("label");r.textContent="Email:";const a=document.createElement("input");a.type="email",a.id="email",a.name="email",a.required=!0;const c=document.createElement("label");c.textContent="Message:";const i=document.createElement("textarea");i.id="message",i.name="message",i.required=!0;const s=document.createElement("button");return s.type="submit",s.textContent="Send",n.appendChild(t),n.appendChild(o),n.appendChild(r),n.appendChild(a),n.appendChild(c),n.appendChild(i),n.appendChild(s),y([e,n],b("messageUs"))}(),n=function(){const e=b("contactInfo"),n=document.createElement("h2"),t=document.createElement("h2"),o=document.createElement("h2");n.textContent="Phone Number:",t.textContent="Hours:",o.textContent="Location:";const r=document.createElement("h3"),a=document.createElement("h3"),c=document.createElement("h3");r.textContent="123-456-7890",a.textContent="Mon - Fri 9:00 AM - 5:00 PM",c.textContent="123 Main St, Narnia";const i=y([n,r],b("info")),s=y([t,a],b("info")),d=y([o,c],b("info"));return y([i,s,d],e),e}();return e.addEventListener("submit",(n=>{n.preventDefault();const t=document.getElementById("name").value,o=document.getElementById("email").value,r=document.getElementById("message").value;console.log("Name:",t),console.log("Email:",o),console.log("Message:",r),e.reset()})),[n,e]}(),C)})),y([o,r,a],t),t}(),C),y(e(),C),y(function(){const e=b("footer");e.textContent="Created by Lx. Li 2023";const n=document.createElement("a");return n.href="https://github.com/BlueDoraemon/restaurant-page-top",n.appendChild(function(e,n){const t=document.createElement("img");return t.src=e,t.classList.add("gitHub"),t}(v)),e.appendChild(n),[e]}(),E)})()})();