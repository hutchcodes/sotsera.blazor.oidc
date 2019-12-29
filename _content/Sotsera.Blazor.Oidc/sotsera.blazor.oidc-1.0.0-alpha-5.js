/*!
 * Copyright (c) Alessandro Ghidini. All rights reserved.
 * Licensed under the Apache License, Version 2.0. See License.txt in the project root or http://www.apache.org/licenses/LICENSE-2.0 for license information.
 * Based on https://github.com/IdentityModel/oidc-client-js by Brock Allen & Dominick Baier licensed under the Apache License, Version 2.0
 */!function(e){var t={};function n(o){if(t[o])return t[o].exports;var r=t[o]={i:o,l:!1,exports:{}};return e[o].call(r.exports,r,r.exports,n),r.l=!0,r.exports}n.m=e,n.c=t,n.d=function(e,t,o){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:o})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var o=Object.create(null);if(n.r(o),Object.defineProperty(o,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)n.d(o,r,function(t){return e[t]}.bind(null,r));return o},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=0)}([function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var o=n(1),r=window.sotsera||{};r.blazor=r.blazor||{},r.blazor.oidc=new o.default,window.sotsera=r},function(e,t,n){"use strict";var o=this&&this.__awaiter||function(e,t,n,o){return new(n||(n=Promise))(function(r,i){function u(e){try{a(o.next(e))}catch(e){i(e)}}function s(e){try{a(o.throw(e))}catch(e){i(e)}}function a(e){e.done?r(e.value):new n(function(t){t(e.value)}).then(u,s)}a((o=o.apply(e,t||[])).next())})},r=this&&this.__generator||function(e,t){var n,o,r,i,u={label:0,sent:function(){if(1&r[0])throw r[1];return r[1]},trys:[],ops:[]};return i={next:s(0),throw:s(1),return:s(2)},"function"==typeof Symbol&&(i[Symbol.iterator]=function(){return this}),i;function s(i){return function(s){return function(i){if(n)throw new TypeError("Generator is already executing.");for(;u;)try{if(n=1,o&&(r=2&i[0]?o.return:i[0]?o.throw||((r=o.return)&&r.call(o),0):o.next)&&!(r=r.call(o,i[1])).done)return r;switch(o=0,r&&(i=[2&i[0],r.value]),i[0]){case 0:case 1:r=i;break;case 4:return u.label++,{value:i[1],done:!1};case 5:u.label++,o=i[1],i=[0];continue;case 7:i=u.ops.pop(),u.trys.pop();continue;default:if(!(r=(r=u.trys).length>0&&r[r.length-1])&&(6===i[0]||2===i[0])){u=0;continue}if(3===i[0]&&(!r||i[1]>r[0]&&i[1]<r[3])){u.label=i[1];break}if(6===i[0]&&u.label<r[1]){u.label=r[1],r=i;break}if(r&&u.label<r[2]){u.label=r[2],u.ops.push(i);break}r[2]&&u.ops.pop(),u.trys.pop();continue}i=t.call(e,u)}catch(e){i=[6,e],o=0}finally{n=r=0}if(5&i[0])throw i[1];return{value:i[0]?i[1]:void 0,done:!0}}([i,s])}}};Object.defineProperty(t,"__esModule",{value:!0});var i=n(2),u=n(3),s=n(4),a=function(){function e(){var e=this;this.sessionFrameTimeout=5e3,this.init=function(t){return e.interop=t,Promise.resolve()},this.openPopup=function(t){return void 0===e.popup&&(e.popup=new u.Popup),s.default(t.timeout,e.popup.open(t))},this.authenticationCallback=function(){return o(e,void 0,void 0,function(){return r(this,function(e){return[2,this.popupCallback("CompleteAuthenticationAsync")]})})},this.logoutCallback=function(){return e.popupCallback("CompleteLogoutAsync")},this.silentRenewCallback=function(){return new Promise(function(e,t){t("Not implemented yet")})},this.popupCallback=function(t){return o(e,void 0,void 0,function(){var e;return r(this,function(n){switch(n.label){case 0:return e=this.popup,void 0===this.interop?[2,Promise.reject("Oidc Interop service not initialized")]:null==e?[2,Promise.reject("Invalid popup handler")]:[4,this.interop.invokeMethodAsync(t,e.url).then(function(){return e.close()})];case 1:return[2,n.sent()]}})})}}return e.prototype.initSessionFrame=function(e){return o(this,void 0,void 0,function(){var t;return r(this,function(n){switch(n.label){case 0:return void 0!==this.sessionFrame?[2,Promise.resolve()]:(t=this,[4,new i.Frame(e).load()]);case 1:return t.sessionFrame=n.sent(),this.sessionFrameTimeout=e.timeout,[2,Promise.resolve()]}})})},e.prototype.postToSessionFrame=function(e){return void 0===this.sessionFrame?Promise.reject("Check session service not initialized"):s.default(this.sessionFrameTimeout,this.sessionFrame.postToFrame(e))},e}();t.default=a},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var o=function(){function e(e){this.waitingForResponse=!1,this.frame=window.document.createElement("iframe"),this.frame.src=e.url,this.frame.style.display="none",this.origin=e.origin}return Object.defineProperty(e.prototype,"contentWindow",{get:function(){return this.frame.contentWindow},enumerable:!0,configurable:!0}),e.prototype.load=function(){var e=this;return new Promise(function(t){e.frame.onload=function(){return t(e)},window.document.body.appendChild(e.frame)})},e.prototype.cleanUp=function(){window.document.body.removeChild(this.frame)},e.prototype.postToFrame=function(e){var t=this;return this.waitingForResponse?Promise.reject("Already waiting for a previous message response"):(this.waitingForResponse=!0,new Promise(function(n,o){var r=function(e){window.removeEventListener("message",r),t.waitingForResponse=!1,t.origin!==e.origin?o("invalid origin: "+e.origin):t.contentWindow!==e.source?o("invalid source window"):n(e.data)};window.addEventListener("message",r),t.contentWindow.postMessage(e,t.origin)}))},e}();t.Frame=o},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var o=function(){function e(){this.popup=null}return Object.defineProperty(e.prototype,"url",{get:function(){return null===this.popup?null:this.popup.location.href},enumerable:!0,configurable:!0}),e.prototype.open=function(e){this.close();var t=e;return this.popup=window.open(t.url,t.target,t.features,t.replace),this.popup?(this.popup.window.focus(),Promise.resolve()):Promise.reject("Unable to open the popup")},e.prototype.close=function(){null!==this.popup&&this.popup.close(),this.popup=null},e}();t.Popup=o},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e,t){return new Promise(function(n,o){var r=setTimeout(function(){o("Promise timed out after "+e+"ms.")},e);t.then(function(e){clearTimeout(r),n(e)}).catch(function(e){clearTimeout(r),o(e)})})}}]);