(this["webpackJsonpreact-flipted"]=this["webpackJsonpreact-flipted"]||[]).push([[11],{599:function(e,t,n){"use strict";n.r(t),n.d(t,"amplify_s3_image",(function(){return l}));var r=n(39),o=n(97),i=n(251),a=(n(51),n(29),n(702)),c=function(e,t,n,r){return new(n||(n=Promise))((function(o,i){function a(e){try{u(r.next(e))}catch(t){i(t)}}function c(e){try{u(r.throw(e))}catch(t){i(t)}}function u(e){var t;e.done?o(e.value):(t=e.value,t instanceof n?t:new n((function(e){e(t)}))).then(a,c)}u((r=r.apply(e,t||[])).next())}))},u=function(e,t){var n,r,o,i,a={label:0,sent:function(){if(1&o[0])throw o[1];return o[1]},trys:[],ops:[]};return i={next:c(0),throw:c(1),return:c(2)},"function"===typeof Symbol&&(i[Symbol.iterator]=function(){return this}),i;function c(i){return function(c){return function(i){if(n)throw new TypeError("Generator is already executing.");for(;a;)try{if(n=1,r&&(o=2&i[0]?r.return:i[0]?r.throw||((o=r.return)&&o.call(r),0):r.next)&&!(o=o.call(r,i[1])).done)return o;switch(r=0,o&&(i=[2&i[0],o.value]),i[0]){case 0:case 1:o=i;break;case 4:return a.label++,{value:i[1],done:!1};case 5:a.label++,r=i[1],i=[0];continue;case 7:i=a.ops.pop(),a.trys.pop();continue;default:if(!(o=(o=a.trys).length>0&&o[o.length-1])&&(6===i[0]||2===i[0])){a=0;continue}if(3===i[0]&&(!o||i[1]>o[0]&&i[1]<o[3])){a.label=i[1];break}if(6===i[0]&&a.label<o[1]){a.label=o[1],o=i;break}if(o&&a.label<o[2]){a.label=o[2],a.ops.push(i);break}o[2]&&a.ops.pop(),a.trys.pop();continue}i=t.call(e,a)}catch(c){i=[6,c],r=0}finally{n=o=0}if(5&i[0])throw i[1];return{value:i[0]?i[1]:void 0,done:!0}}([i,c])}}},s=new o.a("S3Image"),l=function(){function e(e){Object(r.k)(this,e),this.contentType="binary/octet-stream",this.level=i.a.Public}return e.prototype.watchHandler=function(){return c(this,void 0,void 0,(function(){return u(this,(function(e){switch(e.label){case 0:return[4,this.load()];case 1:return e.sent(),[2]}}))}))},e.prototype.componentWillLoad=function(){return c(this,void 0,void 0,(function(){return u(this,(function(e){switch(e.label){case 0:return[4,this.load()];case 1:return e.sent(),[2]}}))}))},e.prototype.load=function(){return c(this,void 0,void 0,(function(){var e,t,n,r,o,i,c,l,f,h,p;return u(this,(function(u){switch(u.label){case 0:if(t=(e=this).imgKey,n=e.path,r=e.body,o=e.contentType,i=e.level,c=e.track,l=e.identityId,!t&&!n)return s.debug("empty imgKey and path"),[2];f=t||n,s.debug("loading "+f+"..."),u.label=1;case 1:return u.trys.push([1,5,,6]),r?[4,Object(a.e)(t,r,i,c,o,s)]:[3,3];case 2:u.sent(),u.label=3;case 3:return h=this,[4,Object(a.c)(f,i,c,l,s)];case 4:return h.src=u.sent(),[3,6];case 5:throw p=u.sent(),s.debug(p),new Error(p);case 6:return[2]}}))}))},e.prototype.render=function(){return Object(r.i)(r.b,null,this.src&&Object(r.i)("img",{src:this.src,onLoad:this.handleOnLoad,onError:this.handleOnError}))},Object.defineProperty(e,"watchers",{get:function(){return{body:["watchHandler"]}},enumerable:!1,configurable:!0}),e}();l.style=":host{height:inherit;width:inherit;--height:inherit;--width:inherit}img{height:var(--height);width:var(--width)}"},702:function(e,t,n){"use strict";n.d(t,"a",(function(){return l})),n.d(t,"b",(function(){return u})),n.d(t,"c",(function(){return s})),n.d(t,"d",(function(){return c})),n.d(t,"e",(function(){return f}));var r=n(51),o=n(29),i=function(e,t,n,r){return new(n||(n=Promise))((function(o,i){function a(e){try{u(r.next(e))}catch(t){i(t)}}function c(e){try{u(r.throw(e))}catch(t){i(t)}}function u(e){var t;e.done?o(e.value):(t=e.value,t instanceof n?t:new n((function(e){e(t)}))).then(a,c)}u((r=r.apply(e,t||[])).next())}))},a=function(e,t){var n,r,o,i,a={label:0,sent:function(){if(1&o[0])throw o[1];return o[1]},trys:[],ops:[]};return i={next:c(0),throw:c(1),return:c(2)},"function"===typeof Symbol&&(i[Symbol.iterator]=function(){return this}),i;function c(i){return function(c){return function(i){if(n)throw new TypeError("Generator is already executing.");for(;a;)try{if(n=1,r&&(o=2&i[0]?r.return:i[0]?r.throw||((o=r.return)&&o.call(r),0):r.next)&&!(o=o.call(r,i[1])).done)return o;switch(r=0,o&&(i=[2&i[0],o.value]),i[0]){case 0:case 1:o=i;break;case 4:return a.label++,{value:i[1],done:!1};case 5:a.label++,r=i[1],i=[0];continue;case 7:i=a.ops.pop(),a.trys.pop();continue;default:if(!(o=(o=a.trys).length>0&&o[o.length-1])&&(6===i[0]||2===i[0])){a=0;continue}if(3===i[0]&&(!o||i[1]>o[0]&&i[1]<o[3])){a.label=i[1];break}if(6===i[0]&&a.label<o[1]){a.label=o[1],o=i;break}if(o&&a.label<o[2]){a.label=o[2],a.ops.push(i);break}o[2]&&a.ops.pop(),a.trys.pop();continue}i=t.call(e,a)}catch(c){i=[6,c],r=0}finally{n=o=0}if(5&i[0])throw i[1];return{value:i[0]?i[1]:void 0,done:!0}}([i,c])}}},c=new Set(["apng","bmp","gif","ico","cur","jpg","jpeg","jfif","pjpeg","pjp","png","svg","tif","tiff","webp"]),u=function(e,t){var n=e.name,r=e.size,o=e.type,i=encodeURI(n);return t&&((i="string"===typeof t?t:"function"===typeof t?t({name:n,size:r,type:o}):encodeURI(JSON.stringify(t)))||(i="empty_key")),i.replace(/\s/g,"_")},s=function(e,t,n,c,u){return i(void 0,void 0,void 0,(function(){var i,s;return a(this,(function(a){switch(a.label){case 0:if(!o.a||"function"!==typeof o.a.get)throw new Error(r.n);a.label=1;case 1:return a.trys.push([1,3,,4]),[4,o.a.get(e,{level:t,track:n,identityId:c})];case 2:return i=a.sent(),u.debug("Storage image get",i),[2,i];case 3:throw s=a.sent(),new Error(s);case 4:return[2]}}))}))},l=function(e,t,n,c,u){return i(void 0,void 0,void 0,(function(){var i,s;return a(this,(function(a){switch(a.label){case 0:if(!o.a||"function"!==typeof o.a.get)throw new Error(r.n);a.label=1;case 1:return a.trys.push([1,4,,5]),[4,o.a.get(e,{download:!0,level:t,track:n,identityId:c})];case 2:return i=a.sent(),u.debug(i),[4,(l=i.Body,new Promise((function(e,t){var n=new FileReader;n.onload=function(){e(n.result)},n.onerror=function(){t("Failed to read file!"),n.abort()},n.readAsText(l)})))];case 3:return[2,a.sent()];case 4:throw s=a.sent(),new Error(s);case 5:return[2]}var l}))}))},f=function(e,t,n,c,u,s){return i(void 0,void 0,void 0,(function(){var i,l;return a(this,(function(a){switch(a.label){case 0:if(!o.a||"function"!==typeof o.a.put)throw new Error(r.n);a.label=1;case 1:return a.trys.push([1,3,,4]),[4,o.a.put(e,t,{contentType:u,level:n,track:c})];case 2:return i=a.sent(),s.debug("Upload data",i),[3,4];case 3:throw l=a.sent(),new Error(l);case 4:return[2]}}))}))}}}]);
//# sourceMappingURL=11.10c2a076.chunk.js.map