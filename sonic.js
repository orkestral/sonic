/*! Browser bundle of nunjucks 3.1.3  */
!function(t,n){"object"==typeof exports&&"object"==typeof module?module.exports=n():"function"==typeof define&&define.amd?define([],n):"object"==typeof exports?exports.nunjucks=n():t.nunjucks=n()}("undefined"!=typeof self?self:this,function(){return function(t){var n={};function i(r){if(n[r])return n[r].exports;var e=n[r]={i:r,l:!1,exports:{}};return t[r].call(e.exports,e,e.exports,i),e.l=!0,e.exports}return i.m=t,i.c=n,i.d=function(t,n,r){i.o(t,n)||Object.defineProperty(t,n,{configurable:!1,enumerable:!0,get:r})},i.n=function(t){var n=t&&t.__esModule?function(){return t.default}:function(){return t};return i.d(n,"a",n),n},i.o=function(t,n){return Object.prototype.hasOwnProperty.call(t,n)},i.p="",i(i.s=11)}([function(t,n,i){"use strict";var r=Array.prototype,e=Object.prototype,s={"&":"&amp;",'"':"&quot;","'":"&#39;","<":"&lt;",">":"&gt;"},o=/[&"'<>]/g,u=t.exports={};function h(t,n){return e.hasOwnProperty.call(t,n)}function f(t){return s[t]}function a(t,n,i){var r,e,s;if(t instanceof Error&&(t=(e=t).name+": "+e.message),Object.setPrototypeOf?Object.setPrototypeOf(r=Error(t),a.prototype):Object.defineProperty(r=this,"message",{enumerable:!1,writable:!0,value:t}),Object.defineProperty(r,"name",{value:"Template render error"}),Error.captureStackTrace&&Error.captureStackTrace(r,this.constructor),e){var o=Object.getOwnPropertyDescriptor(e,"stack");(s=o&&(o.get||function(){return o.value}))||(s=function(){return e.stack})}else{var u=Error(t).stack;s=function(){return u}}return Object.defineProperty(r,"stack",{get:function(){return s.call(r)}}),Object.defineProperty(r,"cause",{value:e}),r.lineno=n,r.colno=i,r.firstUpdate=!0,r.Update=function(t){var n="("+(t||"unknown path")+")";return this.firstUpdate&&(this.lineno&&this.colno?n+=" [Line "+this.lineno+", Column "+this.colno+"]":this.lineno&&(n+=" [Line "+this.lineno+"]")),n+="\n ",this.firstUpdate&&(n+=" "),this.message=n+(this.message||""),this.firstUpdate=!1,this},r}function c(t){return"[object Function]"===e.toString.call(t)}function l(t){return"[object Array]"===e.toString.call(t)}function v(t){return"[object String]"===e.toString.call(t)}function p(t){return"[object Object]"===e.toString.call(t)}function d(t){return Array.prototype.slice.call(t)}function w(t,n,i){return Array.prototype.indexOf.call(t||[],n,i)}function m(t){var n=[];for(var i in t)h(t,i)&&n.push(i);return n}u.hasOwnProp=h,u.t=function(t,n,i){if(i.Update||(i=new u.TemplateError(i)),i.Update(t),!n){var r=i;(i=Error(r.message)).name=r.name}return i},Object.setPrototypeOf?Object.setPrototypeOf(a.prototype,Error.prototype):a.prototype=Object.create(Error.prototype,{constructor:{value:a}}),u.TemplateError=a,u.escape=function(t){return t.replace(o,f)},u.isFunction=c,u.isArray=l,u.isString=v,u.isObject=p,u.groupBy=function(t,n){for(var i={},r=c(n)?n:function(t){return t[n]},e=0;e<t.length;e++){var s=t[e],o=r(s,e);(i[o]||(i[o]=[])).push(s)}return i},u.toArray=d,u.without=function(t){var n=[];if(!t)return n;for(var i=t.length,r=d(arguments).slice(1),e=-1;++e<i;)-1===w(r,t[e])&&n.push(t[e]);return n},u.repeat=function(t,n){for(var i="",r=0;r<n;r++)i+=t;return i},u.each=function(t,n,i){if(null!=t)if(r.forEach&&t.forEach===r.forEach)t.forEach(n,i);else if(t.length===+t.length)for(var e=0,s=t.length;e<s;e++)n.call(i,t[e],e,t)},u.map=function(t,n){var i=[];if(null==t)return i;if(r.map&&t.map===r.map)return t.map(n);for(var e=0;e<t.length;e++)i[i.length]=n(t[e],e);return t.length===+t.length&&(i.length=t.length),i},u.asyncIter=function(t,n,i){var r=-1;!function e(){++r<t.length?n(t[r],r,e,i):i()}()},u.asyncFor=function(t,n,i){var r=m(t||{}),e=r.length,s=-1;!function o(){var u=r[++s];s<e?n(u,t[u],s,e,o):i()}()},u.indexOf=w,u.keys=m,u.r=function(t){return m(t).map(function(n){return[n,t[n]]})},u.u=function(t){return m(t).map(function(n){return t[n]})},u.h=u.extend=function(t,n){return t=t||{},m(n).forEach(function(i){t[i]=n[i]}),t},u.inOperator=function(t,n){if(l(n)||v(n))return-1!==n.indexOf(t);if(p(n))return t in n;throw Error('Cannot use "in" operator to search for "'+t+'" in unexpected types.')}},function(t,n,i){"use strict";function r(t,n){for(var i=0;i<n.length;i++){var r=n[i];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}function e(t,n,i){return n&&r(t.prototype,n),i&&r(t,i),t}var s=i(0);var o=function(){function t(){this.init.apply(this,arguments)}return t.prototype.init=function(){},t.extend=function(t,n){return"object"==typeof t&&(n=t,t="anonymous"),function(t,n,i){i=i||{},s.keys(i).forEach(function(n){var r,e;i[n]=(r=t.prototype[n],e=i[n],"function"!=typeof r||"function"!=typeof e?e:function(){var t=this.parent;this.parent=r;var n=e.apply(this,arguments);return this.parent=t,n})});var r=function(t){function i(){return t.apply(this,arguments)||this}var r,s;return e(i,[{key:"typename",get:function(){return n}}]),s=t,(r=i).prototype.__proto__=s&&s.prototype,r.__proto__=s,i}(t);return s.h(r.prototype,i),r}(this,t,n)},e(t,[{key:"typename",get:function(){return this.constructor.name}}]),t}();t.exports=o},function(t,n,i){"use strict";var r=i(0),e=Array.from,s="function"==typeof Symbol&&Symbol.iterator&&"function"==typeof e,o=function(){function t(t,n){this.variables={},this.parent=t,this.topLevel=!1,this.isolateWrites=n}var n=t.prototype;return n.set=function(t,n,i){var r=t.split("."),e=this.variables,s=this;if(i&&(s=this.resolve(r[0],!0)))s.set(t,n);else{for(var o=0;o<r.length-1;o++){var u=r[o];e[u]||(e[u]={}),e=e[u]}e[r[r.length-1]]=n}},n.get=function(t){var n=this.variables[t];return void 0!==n?n:null},n.lookup=function(t){var n=this.parent,i=this.variables[t];return void 0!==i?i:n&&n.lookup(t)},n.resolve=function(t,n){var i=n&&this.isolateWrites?void 0:this.parent;return void 0!==this.variables[t]?this:i&&i.resolve(t)},n.push=function(n){return new t(this,n)},n.pop=function(){return this.parent},t}();function u(t){return t&&Object.prototype.hasOwnProperty.call(t,"__keywords")}function h(t){var n=t.length;return 0===n?0:u(t[n-1])?n-1:n}function f(t){if("string"!=typeof t)return t;this.val=t,this.length=t.length}f.prototype=Object.create(String.prototype,{length:{writable:!0,configurable:!0,value:0}}),f.prototype.valueOf=function(){return this.val},f.prototype.toString=function(){return this.val},t.exports={Frame:o,makeMacro:function(t,n,i){var r=this;return function(){for(var e=arguments.length,s=Array(e),o=0;o<e;o++)s[o]=arguments[o];var f,a=h(s),c=function(t){var n=t.length;if(n){var i=t[n-1];if(u(i))return i}return{}}(s);if(a>t.length)f=s.slice(0,t.length),s.slice(f.length,a).forEach(function(t,i){i<n.length&&(c[n[i]]=t)}),f.push(c);else if(a<t.length){f=s.slice(0,a);for(var l=a;l<t.length;l++){var v=t[l];f.push(c[v]),delete c[v]}f.push(c)}else f=s;return i.apply(r,f)}},makeKeywordArgs:function(t){return t.__keywords=!0,t},numArgs:h,suppressValue:function(t,n){return t=void 0!==t&&null!==t?t:"",!n||t instanceof f||(t=r.escape(t.toString())),t},ensureDefined:function(t,n,i){if(null===t||void 0===t)throw new r.TemplateError("attempted to output null or undefined value",n+1,i+1);return t},memberLookup:function(t,n){if(void 0!==t&&null!==t)return"function"==typeof t[n]?function(){for(var i=arguments.length,r=Array(i),e=0;e<i;e++)r[e]=arguments[e];return t[n].apply(t,r)}:t[n]},contextOrFrameLookup:function(t,n,i){var r=n.lookup(i);return void 0!==r?r:t.lookup(i)},callWrap:function(t,n,i,r){if(!t)throw Error("Unable to call `"+n+"`, which is undefined or falsey");if("function"!=typeof t)throw Error("Unable to call `"+n+"`, which is not a function");return t.apply(i,r)},handleError:function(t,n,i){return t.lineno?t:new r.TemplateError(t,n,i)},isArray:r.isArray,keys:r.keys,SafeString:f,copySafeness:function(t,n){return t instanceof f?new f(n):n.toString()},markSafe:function(t){var n=typeof t;return"string"===n?new f(t):"function"!==n?t:function(n){var i=t.apply(this,arguments);return"string"==typeof i?new f(i):i}},asyncEach:function(t,n,i,e){if(r.isArray(t)){var s=t.length;r.asyncIter(t,function(t,r,e){switch(n){case 1:i(t,r,s,e);break;case 2:i(t[0],t[1],r,s,e);break;case 3:i(t[0],t[1],t[2],r,s,e);break;default:t.push(r,s,e),i.apply(this,t)}},e)}else r.asyncFor(t,function(t,n,r,e,s){i(t,n,r,e,s)},e)},asyncAll:function(t,n,i,e){var s,o,u=0;function h(t,n){u++,o[t]=n,u===s&&e(null,o.join(""))}if(r.isArray(t))if(s=t.length,o=Array(s),0===s)e(null,"");else for(var f=0;f<t.length;f++){var a=t[f];switch(n){case 1:i(a,f,s,h);break;case 2:i(a[0],a[1],f,s,h);break;case 3:i(a[0],a[1],a[2],f,s,h);break;default:a.push(f,s,h),i.apply(this,a)}}else{var c=r.keys(t||{});if(s=c.length,o=Array(s),0===s)e(null,"");else for(var l=0;l<c.length;l++){var v=c[l];i(v,t[v],l,s,h)}}},inOperator:r.inOperator,fromIterator:function(t){return"object"!=typeof t||null===t||r.isArray(t)?t:s&&Symbol.iterator in t?e(t):t}}},function(t,n,i){"use strict";function r(t,n){for(var i=0;i<n.length;i++){var r=n[i];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}function e(t,n,i){return n&&r(t.prototype,n),i&&r(t,i),t}function s(t,n){t.prototype.__proto__=n&&n.prototype,t.__proto__=n}function o(t,n,i){t instanceof n&&i.push(t),t instanceof u&&t.findAll(n,i)}var u=function(t){function n(){return t.apply(this,arguments)||this}var i=n.prototype;return i.init=function(t,n){for(var i=this,r=arguments,e=arguments.length,s=Array(e>2?e-2:0),o=2;o<e;o++)s[o-2]=arguments[o];this.lineno=t,this.colno=n,this.fields.forEach(function(t,n){var e=r[n+2];void 0===e&&(e=null),i[t]=e})},i.findAll=function(t,n){var i=this;return n=n||[],this instanceof f?this.children.forEach(function(i){return o(i,t,n)}):this.fields.forEach(function(r){return o(i[r],t,n)}),n},i.iterFields=function(t){var n=this;this.fields.forEach(function(i){t(n[i],i)})},s(n,t),n}(i(1)),h=function(t){function n(){return t.apply(this,arguments)||this}return e(n,[{key:"typename",get:function(){return"Value"}},{key:"fields",get:function(){return["value"]}}]),s(n,t),n}(u),f=function(t){function n(){return t.apply(this,arguments)||this}var i=n.prototype;return i.init=function(n,i,r){t.prototype.init.call(this,n,i,r||[])},i.addChild=function(t){this.children.push(t)},e(n,[{key:"typename",get:function(){return"NodeList"}},{key:"fields",get:function(){return["children"]}}]),s(n,t),n}(u),a=f.extend("Root"),c=h.extend("Literal"),l=h.extend("Symbol"),v=f.extend("Group"),p=f.extend("Array"),d=u.extend("Pair",{fields:["key","value"]}),w=f.extend("Dict"),m=u.extend("LookupVal",{fields:["target","val"]}),b=u.extend("If",{fields:["cond","body","else_"]}),y=b.extend("IfAsync"),g=u.extend("InlineIf",{fields:["cond","body","else_"]}),k=u.extend("For",{fields:["arr","name","body","else_"]}),E=k.extend("AsyncEach"),x=k.extend("AsyncAll"),O=u.extend("Macro",{fields:["name","args","body"]}),A=O.extend("Caller"),T=u.extend("Import",{fields:["template","target","withContext"]}),_=function(t){function n(){return t.apply(this,arguments)||this}return n.prototype.init=function(n,i,r,e,s){t.prototype.init.call(this,n,i,r,e||new f,s)},e(n,[{key:"typename",get:function(){return"FromImport"}},{key:"fields",get:function(){return["template","names","withContext"]}}]),s(n,t),n}(u),N=u.extend("FunCall",{fields:["name","args"]}),S=N.extend("Filter"),j=S.extend("FilterAsync",{fields:["name","args","symbol"]}),C=w.extend("KeywordArgs"),I=u.extend("Block",{fields:["name","body"]}),F=u.extend("Super",{fields:["blockName","symbol"]}),L=u.extend("TemplateRef",{fields:["template"]}).extend("Extends"),K=u.extend("Include",{fields:["template","ignoreMissing"]}),R=u.extend("Set",{fields:["targets","value"]}),M=u.extend("Switch",{fields:["expr","cases","default"]}),B=u.extend("Case",{fields:["cond","body"]}),P=f.extend("Output"),V=u.extend("Capture",{fields:["body"]}),D=c.extend("TemplateData"),$=u.extend("UnaryOp",{fields:["target"]}),U=u.extend("BinOp",{fields:["left","right"]}),G=U.extend("In"),W=U.extend("Is"),H=U.extend("Or"),J=U.extend("And"),z=$.extend("Not"),Y=U.extend("Add"),q=U.extend("Concat"),X=U.extend("Sub"),Q=U.extend("Mul"),Z=U.extend("Div"),tt=U.extend("FloorDiv"),nt=U.extend("Mod"),it=U.extend("Pow"),rt=$.extend("Neg"),et=$.extend("Pos"),st=u.extend("Compare",{fields:["expr","ops"]}),ot=u.extend("CompareOperand",{fields:["expr","type"]}),ut=u.extend("CallExtension",{init:function(t,n,i,r){this.parent(),this.extName=t.__name||t,this.prop=n,this.args=i||new f,this.contentArgs=r||[],this.autoescape=t.autoescape},fields:["extName","prop","args","contentArgs"]}),ht=ut.extend("CallExtensionAsync");function ft(t,n,i){var r=t.split("\n");r.forEach(function(t,e){t&&(i&&e>0||!i)&&process.stdout.write(" ".repeat(n));var s=e===r.length-1?"":"\n";process.stdout.write(""+t+s)})}t.exports={Node:u,Root:a,NodeList:f,Value:h,Literal:c,Symbol:l,Group:v,Array:p,Pair:d,Dict:w,Output:P,Capture:V,TemplateData:D,If:b,IfAsync:y,InlineIf:g,For:k,AsyncEach:E,AsyncAll:x,Macro:O,Caller:A,Import:T,FromImport:_,FunCall:N,Filter:S,FilterAsync:j,KeywordArgs:C,Block:I,Super:F,Extends:L,Include:K,Set:R,Switch:M,Case:B,LookupVal:m,BinOp:U,In:G,Is:W,Or:H,And:J,Not:z,Add:Y,Concat:q,Sub:X,Mul:Q,Div:Z,FloorDiv:tt,Mod:nt,Pow:it,Neg:rt,Pos:et,Compare:st,CompareOperand:ot,CallExtension:ut,CallExtensionAsync:ht,printNodes:function t(n,i){if(i=i||0,ft(n.typename+": ",i),n instanceof f)ft("\n"),n.children.forEach(function(n){t(n,i+2)});else if(n instanceof ut)ft(n.extName+"."+n.prop+"\n"),n.args&&t(n.args,i+2),n.contentArgs&&n.contentArgs.forEach(function(n){t(n,i+2)});else{var r=[],e=null;n.iterFields(function(t,n){t instanceof u?r.push([n,t]):(e=e||{})[n]=t}),e?ft(JSON.stringify(e,null,2)+"\n",null,!0):ft("\n"),r.forEach(function(n){var r=n[0],e=n[1];ft("["+r+"] =>",i+2),t(e,i+4)})}}}},function(t,n){},function(t,n,i){"use strict";var r=i(8),e=i(16),s=i(3),o=i(0).TemplateError,u=i(2).Frame,h={"==":"==","===":"===","!=":"!=","!==":"!==","<":"<",">":">","<=":"<=",">=":">="},f=function(t){function n(){return t.apply(this,arguments)||this}var i,r,e=n.prototype;return e.init=function(t,n){this.templateName=t,this.codebuf=[],this.lastId=0,this.buffer=null,this.bufferStack=[],this.f="",this.inBlock=!1,this.throwOnUndefined=n},e.fail=function(t,n,i){throw void 0!==n&&(n+=1),void 0!==i&&(i+=1),new o(t,n,i)},e.a=function(){var t=this.v();return this.bufferStack.push(this.buffer),this.buffer=t,this.w("var "+this.buffer+' = "";'),t},e.b=function(){this.buffer=this.bufferStack.pop()},e.w=function(t){this.codebuf.push(t)},e.y=function(t){this.w(t+"\n")},e.g=function(){for(var t=this,n=arguments.length,i=Array(n),r=0;r<n;r++)i[r]=arguments[r];i.forEach(function(n){return t.y(n)})},e.k=function(t){this.buffer="output",this.f="",this.y("function "+t+"(env, context, frame, runtime, cb) {"),this.y("var lineno = null;"),this.y("var colno = null;"),this.y("var "+this.buffer+' = "";'),this.y("try {")},e.x=function(t){t||this.y("cb(null, "+this.buffer+");"),this.O(),this.y("} catch (e) {"),this.y("  cb(runtime.handleError(e, lineno, colno));"),this.y("}"),this.y("}"),this.buffer=null},e.A=function(){this.f+="})"},e.O=function(){this.y(this.f+";"),this.f=""},e.T=function(t){var n=this.f;this.f="",t.call(this),this.O(),this.f=n},e._=function(t){var n=this.v();return"function("+n+(t?","+t:"")+") {\nif("+n+") { cb("+n+"); return; }"},e.v=function(){return this.lastId++,"t_"+this.lastId},e.N=function(){return null==this.templateName?"undefined":JSON.stringify(this.templateName)},e.S=function(t,n){var i=this;t.children.forEach(function(t){i.compile(t,n)})},e.j=function(t,n,i,r){var e=this;i&&this.w(i),t.children.forEach(function(t,i){i>0&&e.w(","),e.compile(t,n)}),r&&this.w(r)},e.C=function(t,n){this.assertType(t,s.Literal,s.Symbol,s.Group,s.Array,s.Dict,s.FunCall,s.Caller,s.Filter,s.LookupVal,s.Compare,s.InlineIf,s.In,s.Is,s.And,s.Or,s.Not,s.Add,s.Concat,s.Sub,s.Mul,s.Div,s.FloorDiv,s.Mod,s.Pow,s.Neg,s.Pos,s.Compare,s.NodeList),this.compile(t,n)},e.assertType=function(t){for(var n=arguments.length,i=Array(n>1?n-1:0),r=1;r<n;r++)i[r-1]=arguments[r];i.some(function(n){return t instanceof n})||this.fail("assertType: invalid type: "+t.typename,t.lineno,t.colno)},e.compileCallExtension=function(t,n,i){var r=this,e=t.args,o=t.contentArgs,u="boolean"!=typeof t.autoescape||t.autoescape;if(i||this.w(this.buffer+" += runtime.suppressValue("),this.w('env.getExtension("'+t.extName+'")["'+t.prop+'"]('),this.w("context"),(e||o)&&this.w(","),e&&(e instanceof s.NodeList||this.fail("compileCallExtension: arguments must be a NodeList, use `parser.parseSignature`"),e.children.forEach(function(t,i){r.C(t,n),(i!==e.children.length-1||o.length)&&r.w(",")})),o.length&&o.forEach(function(t,i){if(i>0&&r.w(","),t){r.y("function(cb) {"),r.y("if(!cb) { cb = function(err) { if(err) { throw err; }}}");var e=r.a();r.T(function(){r.compile(t,n),r.y("cb(null, "+e+");")}),r.b(),r.y("return "+e+";"),r.y("}")}else r.w("null")}),i){var h=this.v();this.y(", "+this._(h)),this.y(this.buffer+" += runtime.suppressValue("+h+", "+u+" && env.opts.autoescape);"),this.A()}else this.w(")"),this.w(", "+u+" && env.opts.autoescape);\n")},e.compileCallExtensionAsync=function(t,n){this.compileCallExtension(t,n,!0)},e.compileNodeList=function(t,n){this.S(t,n)},e.compileLiteral=function(t){if("string"==typeof t.value){var n=t.value.replace(/\\/g,"\\\\");n=(n=(n=(n=n.replace(/"/g,'\\"')).replace(/\n/g,"\\n")).replace(/\r/g,"\\r")).replace(/\t/g,"\\t"),this.w('"'+n+'"')}else null===t.value?this.w("null"):this.w(t.value.toString())},e.compileSymbol=function(t,n){var i=t.value,r=n.lookup(i);r?this.w(r):this.w('runtime.contextOrFrameLookup(context, frame, "'+i+'")')},e.compileGroup=function(t,n){this.j(t,n,"(",")")},e.compileArray=function(t,n){this.j(t,n,"[","]")},e.compileDict=function(t,n){this.j(t,n,"{","}")},e.compilePair=function(t,n){var i=t.key,r=t.value;i instanceof s.Symbol?i=new s.Literal(i.lineno,i.colno,i.value):i instanceof s.Literal&&"string"==typeof i.value||this.fail("compilePair: Dict keys must be strings or names",i.lineno,i.colno),this.compile(i,n),this.w(": "),this.C(r,n)},e.compileInlineIf=function(t,n){this.w("("),this.compile(t.cond,n),this.w("?"),this.compile(t.body,n),this.w(":"),null!==t.else_?this.compile(t.else_,n):this.w('""'),this.w(")")},e.compileIn=function(t,n){this.w("runtime.inOperator("),this.compile(t.left,n),this.w(","),this.compile(t.right,n),this.w(")")},e.compileIs=function(t,n){var i=t.right.name?t.right.name.value:t.right.value;this.w('env.getTest("'+i+'").call(context, '),this.compile(t.left,n),t.right.args&&(this.w(","),this.compile(t.right.args,n)),this.w(") === true")},e.I=function(t,n,i){this.compile(t.left,n),this.w(i),this.compile(t.right,n)},e.compileOr=function(t,n){return this.I(t,n," || ")},e.compileAnd=function(t,n){return this.I(t,n," && ")},e.compileAdd=function(t,n){return this.I(t,n," + ")},e.compileConcat=function(t,n){return this.I(t,n,' + "" + ')},e.compileSub=function(t,n){return this.I(t,n," - ")},e.compileMul=function(t,n){return this.I(t,n," * ")},e.compileDiv=function(t,n){return this.I(t,n," / ")},e.compileMod=function(t,n){return this.I(t,n," % ")},e.compileNot=function(t,n){this.w("!"),this.compile(t.target,n)},e.compileFloorDiv=function(t,n){this.w("Math.floor("),this.compile(t.left,n),this.w(" / "),this.compile(t.right,n),this.w(")")},e.compilePow=function(t,n){this.w("Math.pow("),this.compile(t.left,n),this.w(", "),this.compile(t.right,n),this.w(")")},e.compileNeg=function(t,n){this.w("-"),this.compile(t.target,n)},e.compilePos=function(t,n){this.w("+"),this.compile(t.target,n)},e.compileCompare=function(t,n){var i=this;this.compile(t.expr,n),t.ops.forEach(function(t){i.w(" "+h[t.type]+" "),i.compile(t.expr,n)})},e.compileLookupVal=function(t,n){this.w("runtime.memberLookup(("),this.C(t.target,n),this.w("),"),this.C(t.val,n),this.w(")")},e.F=function(t){switch(t.typename){case"Symbol":return t.value;case"FunCall":return"the return value of ("+this.F(t.name)+")";case"LookupVal":return this.F(t.target)+'["'+this.F(t.val)+'"]';case"Literal":return t.value.toString();default:return"--expression--"}},e.compileFunCall=function(t,n){this.w("(lineno = "+t.lineno+", colno = "+t.colno+", "),this.w("runtime.callWrap("),this.C(t.name,n),this.w(', "'+this.F(t.name).replace(/"/g,'\\"')+'", context, '),this.j(t.args,n,"[","])"),this.w(")")},e.compileFilter=function(t,n){var i=t.name;this.assertType(i,s.Symbol),this.w('env.getFilter("'+i.value+'").call(context, '),this.j(t.args,n),this.w(")")},e.compileFilterAsync=function(t,n){var i=t.name,r=t.symbol.value;this.assertType(i,s.Symbol),n.set(r,r),this.w('env.getFilter("'+i.value+'").call(context, '),this.j(t.args,n),this.y(", "+this._(r)),this.A()},e.compileKeywordArgs=function(t,n){this.w("runtime.makeKeywordArgs("),this.compileDict(t,n),this.w(")")},e.compileSet=function(t,n){var i=this,r=[];t.targets.forEach(function(t){var e=t.value,s=n.lookup(e);null!==s&&void 0!==s||(s=i.v(),i.y("var "+s+";")),r.push(s)}),t.value?(this.w(r.join(" = ")+" = "),this.C(t.value,n),this.y(";")):(this.w(r.join(" = ")+" = "),this.compile(t.body,n),this.y(";")),t.targets.forEach(function(t,n){var e=r[n],s=t.value;i.y('frame.set("'+s+'", '+e+", true);"),i.y("if(frame.topLevel) {"),i.y('context.setVariable("'+s+'", '+e+");"),i.y("}"),"_"!==s.charAt(0)&&(i.y("if(frame.topLevel) {"),i.y('context.addExport("'+s+'", '+e+");"),i.y("}"))})},e.compileSwitch=function(t,n){var i=this;this.w("switch ("),this.compile(t.expr,n),this.w(") {"),t.cases.forEach(function(t,r){i.w("case "),i.compile(t.cond,n),i.w(": "),i.compile(t.body,n),t.body.children.length&&i.y("break;")}),t.default&&(this.w("default:"),this.compile(t.default,n)),this.w("}")},e.compileIf=function(t,n,i){var r=this;this.w("if("),this.C(t.cond,n),this.y(") {"),this.T(function(){r.compile(t.body,n),i&&r.w("cb()")}),t.else_?(this.y("}\nelse {"),this.T(function(){r.compile(t.else_,n),i&&r.w("cb()")})):i&&(this.y("}\nelse {"),this.w("cb()")),this.y("}")},e.compileIfAsync=function(t,n){this.w("(function(cb) {"),this.compileIf(t,n,!0),this.w("})("+this._()),this.A()},e.L=function(t,n,i,r){var e=this;[{name:"index",val:i+" + 1"},{name:"index0",val:i},{name:"revindex",val:r+" - "+i},{name:"revindex0",val:r+" - "+i+" - 1"},{name:"first",val:i+" === 0"},{name:"last",val:i+" === "+r+" - 1"},{name:"length",val:r}].forEach(function(t){e.y('frame.set("loop.'+t.name+'", '+t.val+");")})},e.compileFor=function(t,n){var i=this,r=this.v(),e=this.v(),o=this.v();if(n=n.push(),this.y("frame = frame.push();"),this.w("var "+o+" = "),this.C(t.arr,n),this.y(";"),this.w("if("+o+") {"),this.y(o+" = runtime.fromIterator("+o+");"),t.name instanceof s.Array){this.y("var "+r+";"),this.y("if(runtime.isArray("+o+")) {"),this.y("var "+e+" = "+o+".length;"),this.y("for("+r+"=0; "+r+" < "+o+".length; "+r+"++) {"),t.name.children.forEach(function(e,s){var u=i.v();i.y("var "+u+" = "+o+"["+r+"]["+s+"];"),i.y('frame.set("'+e+'", '+o+"["+r+"]["+s+"]);"),n.set(t.name.children[s].value,u)}),this.L(t,o,r,e),this.T(function(){i.compile(t.body,n)}),this.y("}"),this.y("} else {");var u=t.name.children,h=u[0],f=u[1],a=this.v(),c=this.v();n.set(h.value,a),n.set(f.value,c),this.y(r+" = -1;"),this.y("var "+e+" = runtime.keys("+o+").length;"),this.y("for(var "+a+" in "+o+") {"),this.y(r+"++;"),this.y("var "+c+" = "+o+"["+a+"];"),this.y('frame.set("'+h.value+'", '+a+");"),this.y('frame.set("'+f.value+'", '+c+");"),this.L(t,o,r,e),this.T(function(){i.compile(t.body,n)}),this.y("}"),this.y("}")}else{var l=this.v();n.set(t.name.value,l),this.y("var "+e+" = "+o+".length;"),this.y("for(var "+r+"=0; "+r+" < "+o+".length; "+r+"++) {"),this.y("var "+l+" = "+o+"["+r+"];"),this.y('frame.set("'+t.name.value+'", '+l+");"),this.L(t,o,r,e),this.T(function(){i.compile(t.body,n)}),this.y("}")}this.y("}"),t.else_&&(this.y("if (!"+e+") {"),this.compile(t.else_,n),this.y("}")),this.y("frame = frame.pop();")},e.K=function(t,n,i){var r=this,e=this.v(),o=this.v(),u=this.v(),h=i?"asyncAll":"asyncEach";if(n=n.push(),this.y("frame = frame.push();"),this.w("var "+u+" = runtime.fromIterator("),this.C(t.arr,n),this.y(");"),t.name instanceof s.Array){var f=t.name.children.length;this.w("runtime."+h+"("+u+", "+f+", function("),t.name.children.forEach(function(t){r.w(t.value+",")}),this.w(e+","+o+",next) {"),t.name.children.forEach(function(t){var i=t.value;n.set(i,i),r.y('frame.set("'+i+'", '+i+");")})}else{var a=t.name.value;this.y("runtime."+h+"("+u+", 1, function("+a+", "+e+", "+o+",next) {"),this.y('frame.set("'+a+'", '+a+");"),n.set(a,a)}this.L(t,u,e,o),this.T(function(){var s;i&&(s=r.a()),r.compile(t.body,n),r.y("next("+e+(s?","+s:"")+");"),i&&r.b()});var c=this.v();this.y("}, "+this._(c)),this.A(),i&&this.y(this.buffer+" += "+c+";"),t.else_&&(this.y("if (!"+u+".length) {"),this.compile(t.else_,n),this.y("}")),this.y("frame = frame.pop();")},e.compileAsyncEach=function(t,n){this.K(t,n)},e.compileAsyncAll=function(t,n){this.K(t,n,!0)},e.R=function(t,n){var i=this,r=[],e=null,o="macro_"+this.v(),h=void 0!==n;t.args.children.forEach(function(n,o){o===t.args.children.length-1&&n instanceof s.Dict?e=n:(i.assertType(n,s.Symbol),r.push(n))});var f,a=r.map(function(t){return"l_"+t.value}).concat(["kwargs"]),c=r.map(function(t){return'"'+t.value+'"'}),l=(e&&e.children||[]).map(function(t){return'"'+t.key.value+'"'});f=h?n.push(!0):new u,this.g("var "+o+" = runtime.makeMacro(","["+c.join(", ")+"], ","["+l.join(", ")+"], ","function ("+a.join(", ")+") {","var callerFrame = frame;","frame = "+(h?"frame.push(true);":"new runtime.Frame();"),"kwargs = kwargs || {};",'if (Object.prototype.hasOwnProperty.call(kwargs, "caller")) {','frame.set("caller", kwargs.caller); }'),r.forEach(function(t){i.y('frame.set("'+t.value+'", l_'+t.value+");"),f.set(t.value,"l_"+t.value)}),e&&e.children.forEach(function(t){var n=t.key.value;i.w('frame.set("'+n+'", '),i.w('Object.prototype.hasOwnProperty.call(kwargs, "'+n+'")'),i.w(' ? kwargs["'+n+'"] : '),i.C(t.value,f),i.w(");")});var v=this.a();return this.T(function(){i.compile(t.body,f)}),this.y("frame = "+(h?"frame.pop();":"callerFrame;")),this.y("return new runtime.SafeString("+v+");"),this.y("});"),this.b(),o},e.compileMacro=function(t,n){var i=this.R(t),r=t.name.value;n.set(r,i),n.parent?this.y('frame.set("'+r+'", '+i+");"):("_"!==t.name.value.charAt(0)&&this.y('context.addExport("'+r+'");'),this.y('context.setVariable("'+r+'", '+i+");"))},e.compileCaller=function(t,n){this.w("(function (){");var i=this.R(t,n);this.w("return "+i+";})()")},e.M=function(t,n,i,r){var e=this.v(),s=this.N(),o=this._(e),u=i?"true":"false",h=r?"true":"false";return this.w("env.getTemplate("),this.C(t.template,n),this.y(", "+u+", "+s+", "+h+", "+o),e},e.compileImport=function(t,n){var i=t.target.value,r=this.M(t,n,!1,!1);this.A(),this.y(r+".getExported("+(t.withContext?"context.getVariables(), frame, ":"")+this._(r)),this.A(),n.set(i,r),n.parent?this.y('frame.set("'+i+'", '+r+");"):this.y('context.setVariable("'+i+'", '+r+");")},e.compileFromImport=function(t,n){var i=this,r=this.M(t,n,!1,!1);this.A(),this.y(r+".getExported("+(t.withContext?"context.getVariables(), frame, ":"")+this._(r)),this.A(),t.names.children.forEach(function(t){var e,o,u=i.v();t instanceof s.Pair?(e=t.key.value,o=t.value.value):o=e=t.value,i.y("if(Object.prototype.hasOwnProperty.call("+r+', "'+e+'")) {'),i.y("var "+u+" = "+r+"."+e+";"),i.y("} else {"),i.y("cb(new Error(\"cannot import '"+e+"'\")); return;"),i.y("}"),n.set(o,u),n.parent?i.y('frame.set("'+o+'", '+u+");"):i.y('context.setVariable("'+o+'", '+u+");")})},e.compileBlock=function(t){var n=this.v();this.inBlock||this.w('(parentTemplate ? function(e, c, f, r, cb) { cb(""); } : '),this.w('context.getBlock("'+t.name.value+'")'),this.inBlock||this.w(")"),this.y("(env, context, frame, runtime, "+this._(n)),this.y(this.buffer+" += "+n+";"),this.A()},e.compileSuper=function(t,n){var i=t.blockName.value,r=t.symbol.value,e=this._(r);this.y('context.getSuper(env, "'+i+'", b_'+i+", frame, runtime, "+e),this.y(r+" = runtime.markSafe("+r+");"),this.A(),n.set(r,r)},e.compileExtends=function(t,n){var i=this.v(),r=this.M(t,n,!0,!1);this.y("parentTemplate = "+r),this.y("for(var "+i+" in parentTemplate.blocks) {"),this.y("context.addBlock("+i+", parentTemplate.blocks["+i+"]);"),this.y("}"),this.A()},e.compileInclude=function(t,n){this.y("var tasks = [];"),this.y("tasks.push("),this.y("function(callback) {");var i=this.M(t,n,!1,t.ignoreMissing);this.y("callback(null,"+i+");});"),this.y("});");var r=this.v();this.y("tasks.push("),this.y("function(template, callback){"),this.y("template.render(context.getVariables(), frame, "+this._(r)),this.y("callback(null,"+r+");});"),this.y("});"),this.y("tasks.push("),this.y("function(result, callback){"),this.y(this.buffer+" += result;"),this.y("callback(null);"),this.y("});"),this.y("env.waterfall(tasks, function(){"),this.A()},e.compileTemplateData=function(t,n){this.compileLiteral(t,n)},e.compileCapture=function(t,n){var i=this,r=this.buffer;this.buffer="output",this.y("(function() {"),this.y('var output = "";'),this.T(function(){i.compile(t.body,n)}),this.y("return output;"),this.y("})()"),this.buffer=r},e.compileOutput=function(t,n){var i=this;t.children.forEach(function(r){r instanceof s.TemplateData?r.value&&(i.w(i.buffer+" += "),i.compileLiteral(r,n),i.y(";")):(i.w(i.buffer+" += runtime.suppressValue("),i.throwOnUndefined&&i.w("runtime.ensureDefined("),i.compile(r,n),i.throwOnUndefined&&i.w(","+t.lineno+","+t.colno+")"),i.w(", env.opts.autoescape);\n"))})},e.compileRoot=function(t,n){var i=this;n&&this.fail("compileRoot: root node can't have frame"),n=new u,this.k("root"),this.y("var parentTemplate = null;"),this.S(t,n),this.y("if(parentTemplate) {"),this.y("parentTemplate.rootRenderFunc(env, context, frame, runtime, cb);"),this.y("} else {"),this.y("cb(null, "+this.buffer+");"),this.y("}"),this.x(!0),this.inBlock=!0;var r=[],e=t.findAll(s.Block);e.forEach(function(t,n){var e=t.name.value;if(-1!==r.indexOf(e))throw Error('Block "'+e+'" defined more than once.');r.push(e),i.k("b_"+e);var s=new u;i.y("var frame = frame.push(true);"),i.compile(t.body,s),i.x()}),this.y("return {"),e.forEach(function(t,n){var r="b_"+t.name.value;i.y(r+": "+r+",")}),this.y("root: root\n};")},e.compile=function(t,n){var i=this["compile"+t.typename];i?i.call(this,t,n):this.fail("compile: Cannot compile node: "+t.typename,t.lineno,t.colno)},e.getCode=function(){return this.codebuf.join("")},r=t,(i=n).prototype.__proto__=r&&r.prototype,i.__proto__=r,n}(i(1));t.exports={compile:function(t,n,i,s,o){void 0===o&&(o={});var u=new f(s,o.throwOnUndefined),h=(i||[]).map(function(t){return t.preprocess}).filter(function(t){return!!t}).reduce(function(t,n){return n(t)},t);return u.compile(e.transform(r.parse(h,i,o),n,s)),u.getCode()},Compiler:f}},function(t,n,i){"use strict";var r=i(4),e=i(1);t.exports=function(t){function n(){return t.apply(this,arguments)||this}var i,e,s=n.prototype;return s.on=function(t,n){this.listeners=this.listeners||{},this.listeners[t]=this.listeners[t]||[],this.listeners[t].push(n)},s.emit=function(t){for(var n=arguments.length,i=Array(n>1?n-1:0),r=1;r<n;r++)i[r-1]=arguments[r];this.listeners&&this.listeners[t]&&this.listeners[t].forEach(function(t){t.apply(void 0,i)})},s.resolve=function(t,n){return r.resolve(r.dirname(t),n)},s.isRelative=function(t){return 0===t.indexOf("./")||0===t.indexOf("../")},e=t,(i=n).prototype.__proto__=e&&e.prototype,i.__proto__=e,n}(e)},function(t,n,i){"use strict";function r(t,n){t.prototype.__proto__=n&&n.prototype,t.__proto__=n}var e=i(12),s=i(15),o=i(0),u=i(5),h=i(17),f=i(10),a=f.FileSystemLoader,c=f.WebLoader,l=f.PrecompiledLoader,v=i(19),p=i(20),d=i(1),w=i(2),m=w.handleError,b=w.Frame,y=i(21);function g(t,n,i){e(function(){t(n,i)})}var k={type:"code",obj:{root:function(t,n,i,r,e){try{e(null,"")}catch(t){e(m(t,null,null))}}}},E=function(t){function n(){return t.apply(this,arguments)||this}var i=n.prototype;return i.init=function(t,n){var i=this;n=this.opts=n||{},this.opts.dev=!!n.dev,this.opts.autoescape=null==n.autoescape||n.autoescape,this.opts.throwOnUndefined=!!n.throwOnUndefined,this.opts.trimBlocks=!!n.trimBlocks,this.opts.lstripBlocks=!!n.lstripBlocks,this.loaders=[],t?this.loaders=o.isArray(t)?t:[t]:a?this.loaders=[new a("views")]:c&&(this.loaders=[new c("/views")]),"undefined"!=typeof window&&window.nunjucksPrecompiled&&this.loaders.unshift(new l(window.nunjucksPrecompiled)),this.initCache(),this.globals=p(),this.filters={},this.tests={},this.asyncFilters=[],this.extensions={},this.extensionsList=[],o.r(h).forEach(function(t){var n=t[0],r=t[1];return i.addFilter(n,r)}),o.r(v).forEach(function(t){var n=t[0],r=t[1];return i.addTest(n,r)})},i.initCache=function(){this.loaders.forEach(function(t){t.cache={},"function"==typeof t.on&&t.on("update",function(n){t.cache[n]=null})})},i.addExtension=function(t,n){return n.__name=t,this.extensions[t]=n,this.extensionsList.push(n),this},i.removeExtension=function(t){var n=this.getExtension(t);n&&(this.extensionsList=o.without(this.extensionsList,n),delete this.extensions[t])},i.getExtension=function(t){return this.extensions[t]},i.hasExtension=function(t){return!!this.extensions[t]},i.addGlobal=function(t,n){return this.globals[t]=n,this},i.getGlobal=function(t){if(void 0===this.globals[t])throw Error("global not found: "+t);return this.globals[t]},i.addFilter=function(t,n,i){var r=n;return i&&this.asyncFilters.push(t),this.filters[t]=r,this},i.getFilter=function(t){if(!this.filters[t])throw Error("filter not found: "+t);return this.filters[t]},i.addTest=function(t,n){return this.tests[t]=n,this},i.getTest=function(t){if(!this.tests[t])throw Error("test not found: "+t);return this.tests[t]},i.resolveTemplate=function(t,n,i){return!(!t.isRelative||!n)&&t.isRelative(i)&&t.resolve?t.resolve(n,i):i},i.getTemplate=function(t,n,i,r,e){var s,u=this,h=this,f=null;if(t&&t.raw&&(t=t.raw),o.isFunction(i)&&(e=i,i=null,n=n||!1),o.isFunction(n)&&(e=n,n=!1),t instanceof O)f=t;else{if("string"!=typeof t)throw Error("template names must be a string: "+t);for(var a=0;a<this.loaders.length;a++){var c=this.loaders[a];if(f=c.cache[this.resolveTemplate(c,i,t)])break}}if(f)return n&&f.compile(),e?void e(null,f):f;return o.asyncIter(this.loaders,function(n,r,e,s){function o(t,i){t?s(t):i?(i.loader=n,s(null,i)):e()}t=h.resolveTemplate(n,i,t),n.async?n.getSource(t,o):o(null,n.getSource(t))},function(i,o){if(o||i||r||(i=Error("template not found: "+t)),i){if(e)return void e(i);throw i}var h;o?(h=new O(o.src,u,o.path,n),o.noCache||(o.loader.cache[t]=h)):h=new O(k,u,"",n),e?e(null,h):s=h}),s},i.express=function(t){return y(this,t)},i.render=function(t,n,i){o.isFunction(n)&&(i=n,n=null);var r=null;return this.getTemplate(t,function(t,e){if(t&&i)g(i,t);else{if(t)throw t;r=e.render(n,i)}}),r},i.renderString=function(t,n,i,r){return o.isFunction(i)&&(r=i,i={}),new O(t,this,(i=i||{}).path).render(n,r)},i.waterfall=function(t,n,i){return s(t,n,i)},r(n,t),n}(d),x=function(t){function n(){return t.apply(this,arguments)||this}var i=n.prototype;return i.init=function(t,n,i){var r=this;this.env=i||new E,this.ctx=o.extend({},t),this.blocks={},this.exported=[],o.keys(n).forEach(function(t){r.addBlock(t,n[t])})},i.lookup=function(t){return t in this.env.globals&&!(t in this.ctx)?this.env.globals[t]:this.ctx[t]},i.setVariable=function(t,n){this.ctx[t]=n},i.getVariables=function(){return this.ctx},i.addBlock=function(t,n){return this.blocks[t]=this.blocks[t]||[],this.blocks[t].push(n),this},i.getBlock=function(t){if(!this.blocks[t])throw Error('unknown block "'+t+'"');return this.blocks[t][0]},i.getSuper=function(t,n,i,r,e,s){var u=o.indexOf(this.blocks[n]||[],i),h=this.blocks[n][u+1];if(-1===u||!h)throw Error('no super block available for "'+n+'"');h(t,this,r,e,s)},i.addExport=function(t){this.exported.push(t)},i.getExported=function(){var t=this,n={};return this.exported.forEach(function(i){n[i]=t.ctx[i]}),n},r(n,t),n}(d),O=function(t){function n(){return t.apply(this,arguments)||this}var i=n.prototype;return i.init=function(t,n,i,r){if(this.env=n||new E,o.isObject(t))switch(t.type){case"code":this.tmplProps=t.obj;break;case"string":this.tmplStr=t.obj;break;default:throw Error("Unexpected template object type "+t.type+"; expected 'code', or 'string'")}else{if(!o.isString(t))throw Error("src must be a string or an object describing the source");this.tmplStr=t}if(this.path=i,r)try{this.B()}catch(t){throw o.t(this.path,this.env.opts.dev,t)}else this.compiled=!1},i.render=function(t,n,i){var r=this;"function"==typeof t?(i=t,t={}):"function"==typeof n&&(i=n,n=null);var e=!n;try{this.compile()}catch(t){var s=o.t(this.path,this.env.opts.dev,t);if(i)return g(i,s);throw s}var u=new x(t||{},this.blocks,this.env),h=n?n.push(!0):new b;h.topLevel=!0;var f=null,a=!1;return this.rootRenderFunc(this.env,u,h,w,function(t,n){if(!a)if(t&&(t=o.t(r.path,r.env.opts.dev,t),a=!0),i)e?g(i,t,n):i(t,n);else{if(t)throw t;f=n}}),f},i.getExported=function(t,n,i){"function"==typeof t&&(i=t,t={}),"function"==typeof n&&(i=n,n=null);try{this.compile()}catch(t){if(i)return i(t);throw t}var r=n?n.push():new b;r.topLevel=!0;var e=new x(t||{},this.blocks,this.env);this.rootRenderFunc(this.env,e,r,w,function(t){t?i(t,null):i(null,e.getExported())})},i.compile=function(){this.compiled||this.B()},i.B=function(){var t;if(this.tmplProps)t=this.tmplProps;else{var n=u.compile(this.tmplStr,this.env.asyncFilters,this.env.extensionsList,this.path,this.env.opts);t=Function(n)()}this.blocks=this.P(t),this.rootRenderFunc=t.root,this.compiled=!0},i.P=function(t){var n={};return o.keys(t).forEach(function(i){"b_"===i.slice(0,2)&&(n[i.slice(2)]=t[i])}),n},r(n,t),n}(d);t.exports={Environment:E,Template:O}},function(t,n,i){"use strict";var r=i(9),e=i(3),s=i(1),o=i(0),u=function(t){function n(){return t.apply(this,arguments)||this}var i,s,u=n.prototype;return u.init=function(t){this.tokens=t,this.peeked=null,this.breakOnBlocks=null,this.dropLeadingWhitespace=!1,this.extensions=[]},u.nextToken=function(t){var n;if(this.peeked){if(t||this.peeked.type!==r.TOKEN_WHITESPACE)return n=this.peeked,this.peeked=null,n;this.peeked=null}if(n=this.tokens.nextToken(),!t)for(;n&&n.type===r.TOKEN_WHITESPACE;)n=this.tokens.nextToken();return n},u.peekToken=function(){return this.peeked=this.peeked||this.nextToken(),this.peeked},u.pushToken=function(t){if(this.peeked)throw Error("pushToken: can only push one token on between reads");this.peeked=t},u.error=function(t,n,i){if(void 0===n||void 0===i){var r=this.peekToken()||{};n=r.lineno,i=r.colno}return void 0!==n&&(n+=1),void 0!==i&&(i+=1),new o.TemplateError(t,n,i)},u.fail=function(t,n,i){throw this.error(t,n,i)},u.skip=function(t){var n=this.nextToken();return!(!n||n.type!==t)||(this.pushToken(n),!1)},u.expect=function(t){var n=this.nextToken();return n.type!==t&&this.fail("expected "+t+", got "+n.type,n.lineno,n.colno),n},u.skipValue=function(t,n){var i=this.nextToken();return!(!i||i.type!==t||i.value!==n)||(this.pushToken(i),!1)},u.skipSymbol=function(t){return this.skipValue(r.TOKEN_SYMBOL,t)},u.advanceAfterBlockEnd=function(t){var n;return t||((n=this.peekToken())||this.fail("unexpected end of file"),n.type!==r.TOKEN_SYMBOL&&this.fail("advanceAfterBlockEnd: expected symbol token or explicit name to be passed"),t=this.nextToken().value),(n=this.nextToken())&&n.type===r.TOKEN_BLOCK_END?"-"===n.value.charAt(0)&&(this.dropLeadingWhitespace=!0):this.fail("expected block end in "+t+" statement"),n},u.advanceAfterVariableEnd=function(){var t=this.nextToken();t&&t.type===r.TOKEN_VARIABLE_END?this.dropLeadingWhitespace="-"===t.value.charAt(t.value.length-this.tokens.tags.VARIABLE_END.length-1):(this.pushToken(t),this.fail("expected variable end"))},u.parseFor=function(){var t,n,i=this.peekToken();if(this.skipSymbol("for")?(t=new e.For(i.lineno,i.colno),n="endfor"):this.skipSymbol("asyncEach")?(t=new e.AsyncEach(i.lineno,i.colno),n="endeach"):this.skipSymbol("asyncAll")?(t=new e.AsyncAll(i.lineno,i.colno),n="endall"):this.fail("parseFor: expected for{Async}",i.lineno,i.colno),t.name=this.parsePrimary(),t.name instanceof e.Symbol||this.fail("parseFor: variable name expected for loop"),this.peekToken().type===r.TOKEN_COMMA){var s=t.name;for(t.name=new e.Array(s.lineno,s.colno),t.name.addChild(s);this.skip(r.TOKEN_COMMA);){var o=this.parsePrimary();t.name.addChild(o)}}return this.skipSymbol("in")||this.fail('parseFor: expected "in" keyword for loop',i.lineno,i.colno),t.arr=this.parseExpression(),this.advanceAfterBlockEnd(i.value),t.body=this.parseUntilBlocks(n,"else"),this.skipSymbol("else")&&(this.advanceAfterBlockEnd("else"),t.else_=this.parseUntilBlocks(n)),this.advanceAfterBlockEnd(),t},u.parseMacro=function(){var t=this.peekToken();this.skipSymbol("macro")||this.fail("expected macro");var n=this.parsePrimary(!0),i=this.parseSignature(),r=new e.Macro(t.lineno,t.colno,n,i);return this.advanceAfterBlockEnd(t.value),r.body=this.parseUntilBlocks("endmacro"),this.advanceAfterBlockEnd(),r},u.parseCall=function(){var t=this.peekToken();this.skipSymbol("call")||this.fail("expected call");var n=this.parseSignature(!0)||new e.NodeList,i=this.parsePrimary();this.advanceAfterBlockEnd(t.value);var r=this.parseUntilBlocks("endcall");this.advanceAfterBlockEnd();var s=new e.Symbol(t.lineno,t.colno,"caller"),o=new e.Caller(t.lineno,t.colno,s,n,r),u=i.args.children;return u[u.length-1]instanceof e.KeywordArgs||u.push(new e.KeywordArgs),u[u.length-1].addChild(new e.Pair(t.lineno,t.colno,s,o)),new e.Output(t.lineno,t.colno,[i])},u.parseWithContext=function(){var t=this.peekToken(),n=null;return this.skipSymbol("with")?n=!0:this.skipSymbol("without")&&(n=!1),null!==n&&(this.skipSymbol("context")||this.fail("parseFrom: expected context after with/without",t.lineno,t.colno)),n},u.parseImport=function(){var t=this.peekToken();this.skipSymbol("import")||this.fail("parseImport: expected import",t.lineno,t.colno);var n=this.parseExpression();this.skipSymbol("as")||this.fail('parseImport: expected "as" keyword',t.lineno,t.colno);var i=this.parseExpression(),r=this.parseWithContext(),s=new e.Import(t.lineno,t.colno,n,i,r);return this.advanceAfterBlockEnd(t.value),s},u.parseFrom=function(){var t=this.peekToken();this.skipSymbol("from")||this.fail("parseFrom: expected from");var n=this.parseExpression();this.skipSymbol("import")||this.fail("parseFrom: expected import",t.lineno,t.colno);for(var i,s=new e.NodeList;;){var o=this.peekToken();if(o.type===r.TOKEN_BLOCK_END){s.children.length||this.fail("parseFrom: Expected at least one import name",t.lineno,t.colno),"-"===o.value.charAt(0)&&(this.dropLeadingWhitespace=!0),this.nextToken();break}s.children.length>0&&!this.skip(r.TOKEN_COMMA)&&this.fail("parseFrom: expected comma",t.lineno,t.colno);var u=this.parsePrimary();if("_"===u.value.charAt(0)&&this.fail("parseFrom: names starting with an underscore cannot be imported",u.lineno,u.colno),this.skipSymbol("as")){var h=this.parsePrimary();s.addChild(new e.Pair(u.lineno,u.colno,u,h))}else s.addChild(u);i=this.parseWithContext()}return new e.FromImport(t.lineno,t.colno,n,s,i)},u.parseBlock=function(){var t=this.peekToken();this.skipSymbol("block")||this.fail("parseBlock: expected block",t.lineno,t.colno);var n=new e.Block(t.lineno,t.colno);n.name=this.parsePrimary(),n.name instanceof e.Symbol||this.fail("parseBlock: variable name expected",t.lineno,t.colno),this.advanceAfterBlockEnd(t.value),n.body=this.parseUntilBlocks("endblock"),this.skipSymbol("endblock"),this.skipSymbol(n.name.value);var i=this.peekToken();return i||this.fail("parseBlock: expected endblock, got end of file"),this.advanceAfterBlockEnd(i.value),n},u.parseExtends=function(){var t=this.peekToken();this.skipSymbol("extends")||this.fail("parseTemplateRef: expected extends");var n=new e.Extends(t.lineno,t.colno);return n.template=this.parseExpression(),this.advanceAfterBlockEnd(t.value),n},u.parseInclude=function(){var t=this.peekToken();this.skipSymbol("include")||this.fail("parseInclude: expected include");var n=new e.Include(t.lineno,t.colno);return n.template=this.parseExpression(),this.skipSymbol("ignore")&&this.skipSymbol("missing")&&(n.ignoreMissing=!0),this.advanceAfterBlockEnd(t.value),n},u.parseIf=function(){var t,n=this.peekToken();this.skipSymbol("if")||this.skipSymbol("elif")||this.skipSymbol("elseif")?t=new e.If(n.lineno,n.colno):this.skipSymbol("ifAsync")?t=new e.IfAsync(n.lineno,n.colno):this.fail("parseIf: expected if, elif, or elseif",n.lineno,n.colno),t.cond=this.parseExpression(),this.advanceAfterBlockEnd(n.value),t.body=this.parseUntilBlocks("elif","elseif","else","endif");var i=this.peekToken();switch(i&&i.value){case"elseif":case"elif":t.else_=this.parseIf();break;case"else":this.advanceAfterBlockEnd(),t.else_=this.parseUntilBlocks("endif"),this.advanceAfterBlockEnd();break;case"endif":t.else_=null,this.advanceAfterBlockEnd();break;default:this.fail("parseIf: expected elif, else, or endif, got end of file")}return t},u.parseSet=function(){var t=this.peekToken();this.skipSymbol("set")||this.fail("parseSet: expected set",t.lineno,t.colno);for(var n,i=new e.Set(t.lineno,t.colno,[]);(n=this.parsePrimary())&&(i.targets.push(n),this.skip(r.TOKEN_COMMA)););return this.skipValue(r.TOKEN_OPERATOR,"=")?(i.value=this.parseExpression(),this.advanceAfterBlockEnd(t.value)):this.skip(r.TOKEN_BLOCK_END)?(i.body=new e.Capture(t.lineno,t.colno,this.parseUntilBlocks("endset")),i.value=null,this.advanceAfterBlockEnd()):this.fail("parseSet: expected = or block end in set tag",t.lineno,t.colno),i},u.parseSwitch=function(){var t=this.peekToken();this.skipSymbol("switch")||this.skipSymbol("case")||this.skipSymbol("default")||this.fail('parseSwitch: expected "switch," "case" or "default"',t.lineno,t.colno);var n=this.parseExpression();this.advanceAfterBlockEnd("switch"),this.parseUntilBlocks("case","default","endswitch");var i,r=this.peekToken(),s=[];do{this.skipSymbol("case");var o=this.parseExpression();this.advanceAfterBlockEnd("switch");var u=this.parseUntilBlocks("case","default","endswitch");s.push(new e.Case(r.line,r.col,o,u)),r=this.peekToken()}while(r&&"case"===r.value);switch(r.value){case"default":this.advanceAfterBlockEnd(),i=this.parseUntilBlocks("endswitch"),this.advanceAfterBlockEnd();break;case"endswitch":this.advanceAfterBlockEnd();break;default:this.fail('parseSwitch: expected "case," "default" or "endswitch," got EOF.')}return new e.Switch(t.lineno,t.colno,n,s,i)},u.parseStatement=function(){var t=this.peekToken();if(t.type!==r.TOKEN_SYMBOL&&this.fail("tag name expected",t.lineno,t.colno),this.breakOnBlocks&&-1!==o.indexOf(this.breakOnBlocks,t.value))return null;switch(t.value){case"raw":return this.parseRaw();case"verbatim":return this.parseRaw("verbatim");case"if":case"ifAsync":return this.parseIf();case"for":case"asyncEach":case"asyncAll":return this.parseFor();case"block":return this.parseBlock();case"extends":return this.parseExtends();case"include":return this.parseInclude();case"set":return this.parseSet();case"macro":return this.parseMacro();case"call":return this.parseCall();case"import":return this.parseImport();case"from":return this.parseFrom();case"filter":return this.parseFilterStatement();case"switch":return this.parseSwitch();default:if(this.extensions.length)for(var n=0;n<this.extensions.length;n++){var i=this.extensions[n];if(-1!==o.indexOf(i.tags||[],t.value))return i.parse(this,e,r)}this.fail("unknown block tag: "+t.value,t.lineno,t.colno)}},u.parseRaw=function(t){for(var n="end"+(t=t||"raw"),i=RegExp("([\\s\\S]*?){%\\s*("+t+"|"+n+")\\s*(?=%})%}"),r=1,s="",o=null,u=this.advanceAfterBlockEnd();(o=this.tokens.V(i))&&r>0;){var h=o[0],f=o[1],a=o[2];a===t?r+=1:a===n&&(r-=1),0===r?(s+=f,this.tokens.backN(h.length-f.length)):s+=h}return new e.Output(u.lineno,u.colno,[new e.TemplateData(u.lineno,u.colno,s)])},u.parsePostfix=function(t){for(var n,i=this.peekToken();i;){if(i.type===r.TOKEN_LEFT_PAREN)t=new e.FunCall(i.lineno,i.colno,t,this.parseSignature());else if(i.type===r.TOKEN_LEFT_BRACKET)(n=this.parseAggregate()).children.length>1&&this.fail("invalid index"),t=new e.LookupVal(i.lineno,i.colno,t,n.children[0]);else{if(i.type!==r.TOKEN_OPERATOR||"."!==i.value)break;this.nextToken();var s=this.nextToken();s.type!==r.TOKEN_SYMBOL&&this.fail("expected name as lookup value, got "+s.value,s.lineno,s.colno),n=new e.Literal(s.lineno,s.colno,s.value),t=new e.LookupVal(i.lineno,i.colno,t,n)}i=this.peekToken()}return t},u.parseExpression=function(){return this.parseInlineIf()},u.parseInlineIf=function(){var t=this.parseOr();if(this.skipSymbol("if")){var n=this.parseOr(),i=t;(t=new e.InlineIf(t.lineno,t.colno)).body=i,t.cond=n,this.skipSymbol("else")?t.else_=this.parseOr():t.else_=null}return t},u.parseOr=function(){for(var t=this.parseAnd();this.skipSymbol("or");){var n=this.parseAnd();t=new e.Or(t.lineno,t.colno,t,n)}return t},u.parseAnd=function(){for(var t=this.parseNot();this.skipSymbol("and");){var n=this.parseNot();t=new e.And(t.lineno,t.colno,t,n)}return t},u.parseNot=function(){var t=this.peekToken();return this.skipSymbol("not")?new e.Not(t.lineno,t.colno,this.parseNot()):this.parseIn()},u.parseIn=function(){for(var t=this.parseIs();;){var n=this.nextToken();if(!n)break;var i=n.type===r.TOKEN_SYMBOL&&"not"===n.value;if(i||this.pushToken(n),!this.skipSymbol("in")){i&&this.pushToken(n);break}var s=this.parseIs();t=new e.In(t.lineno,t.colno,t,s),i&&(t=new e.Not(t.lineno,t.colno,t))}return t},u.parseIs=function(){var t=this.parseCompare();if(this.skipSymbol("is")){var n=this.skipSymbol("not"),i=this.parseCompare();t=new e.Is(t.lineno,t.colno,t,i),n&&(t=new e.Not(t.lineno,t.colno,t))}return t},u.parseCompare=function(){for(var t=["==","===","!=","!==","<",">","<=",">="],n=this.parseConcat(),i=[];;){var r=this.nextToken();if(!r)break;if(-1===t.indexOf(r.value)){this.pushToken(r);break}i.push(new e.CompareOperand(r.lineno,r.colno,this.parseConcat(),r.value))}return i.length?new e.Compare(i[0].lineno,i[0].colno,n,i):n},u.parseConcat=function(){for(var t=this.parseAdd();this.skipValue(r.TOKEN_TILDE,"~");){var n=this.parseAdd();t=new e.Concat(t.lineno,t.colno,t,n)}return t},u.parseAdd=function(){for(var t=this.parseSub();this.skipValue(r.TOKEN_OPERATOR,"+");){var n=this.parseSub();t=new e.Add(t.lineno,t.colno,t,n)}return t},u.parseSub=function(){for(var t=this.parseMul();this.skipValue(r.TOKEN_OPERATOR,"-");){var n=this.parseMul();t=new e.Sub(t.lineno,t.colno,t,n)}return t},u.parseMul=function(){for(var t=this.parseDiv();this.skipValue(r.TOKEN_OPERATOR,"*");){var n=this.parseDiv();t=new e.Mul(t.lineno,t.colno,t,n)}return t},u.parseDiv=function(){for(var t=this.parseFloorDiv();this.skipValue(r.TOKEN_OPERATOR,"/");){var n=this.parseFloorDiv();t=new e.Div(t.lineno,t.colno,t,n)}return t},u.parseFloorDiv=function(){for(var t=this.parseMod();this.skipValue(r.TOKEN_OPERATOR,"//");){var n=this.parseMod();t=new e.FloorDiv(t.lineno,t.colno,t,n)}return t},u.parseMod=function(){for(var t=this.parsePow();this.skipValue(r.TOKEN_OPERATOR,"%");){var n=this.parsePow();t=new e.Mod(t.lineno,t.colno,t,n)}return t},u.parsePow=function(){for(var t=this.parseUnary();this.skipValue(r.TOKEN_OPERATOR,"**");){var n=this.parseUnary();t=new e.Pow(t.lineno,t.colno,t,n)}return t},u.parseUnary=function(t){var n,i=this.peekToken();return n=this.skipValue(r.TOKEN_OPERATOR,"-")?new e.Neg(i.lineno,i.colno,this.parseUnary(!0)):this.skipValue(r.TOKEN_OPERATOR,"+")?new e.Pos(i.lineno,i.colno,this.parseUnary(!0)):this.parsePrimary(),t||(n=this.parseFilter(n)),n},u.parsePrimary=function(t){var n,i=this.nextToken(),s=null;if(i?i.type===r.TOKEN_STRING?n=i.value:i.type===r.TOKEN_INT?n=parseInt(i.value,10):i.type===r.TOKEN_FLOAT?n=parseFloat(i.value):i.type===r.TOKEN_BOOLEAN?"true"===i.value?n=!0:"false"===i.value?n=!1:this.fail("invalid boolean: "+i.value,i.lineno,i.colno):i.type===r.TOKEN_NONE?n=null:i.type===r.TOKEN_REGEX&&(n=RegExp(i.value.body,i.value.flags)):this.fail("expected expression, got end of file"),void 0!==n?s=new e.Literal(i.lineno,i.colno,n):i.type===r.TOKEN_SYMBOL?s=new e.Symbol(i.lineno,i.colno,i.value):(this.pushToken(i),s=this.parseAggregate()),t||(s=this.parsePostfix(s)),s)return s;throw this.error("unexpected token: "+i.value,i.lineno,i.colno)},u.parseFilterName=function(){for(var t=this.expect(r.TOKEN_SYMBOL),n=t.value;this.skipValue(r.TOKEN_OPERATOR,".");)n+="."+this.expect(r.TOKEN_SYMBOL).value;return new e.Symbol(t.lineno,t.colno,n)},u.parseFilterArgs=function(t){return this.peekToken().type===r.TOKEN_LEFT_PAREN?this.parsePostfix(t).args.children:[]},u.parseFilter=function(t){for(;this.skip(r.TOKEN_PIPE);){var n=this.parseFilterName();t=new e.Filter(n.lineno,n.colno,n,new e.NodeList(n.lineno,n.colno,[t].concat(this.parseFilterArgs(t))))}return t},u.parseFilterStatement=function(){var t=this.peekToken();this.skipSymbol("filter")||this.fail("parseFilterStatement: expected filter");var n=this.parseFilterName(),i=this.parseFilterArgs(n);this.advanceAfterBlockEnd(t.value);var r=new e.Capture(n.lineno,n.colno,this.parseUntilBlocks("endfilter"));this.advanceAfterBlockEnd();var s=new e.Filter(n.lineno,n.colno,n,new e.NodeList(n.lineno,n.colno,[r].concat(i)));return new e.Output(n.lineno,n.colno,[s])},u.parseAggregate=function(){var t,n=this.nextToken();switch(n.type){case r.TOKEN_LEFT_PAREN:t=new e.Group(n.lineno,n.colno);break;case r.TOKEN_LEFT_BRACKET:t=new e.Array(n.lineno,n.colno);break;case r.TOKEN_LEFT_CURLY:t=new e.Dict(n.lineno,n.colno);break;default:return null}for(;;){var i=this.peekToken().type;if(i===r.TOKEN_RIGHT_PAREN||i===r.TOKEN_RIGHT_BRACKET||i===r.TOKEN_RIGHT_CURLY){this.nextToken();break}if(t.children.length>0&&(this.skip(r.TOKEN_COMMA)||this.fail("parseAggregate: expected comma after expression",n.lineno,n.colno)),t instanceof e.Dict){var s=this.parsePrimary();this.skip(r.TOKEN_COLON)||this.fail("parseAggregate: expected colon after dict key",n.lineno,n.colno);var o=this.parseExpression();t.addChild(new e.Pair(s.lineno,s.colno,s,o))}else{var u=this.parseExpression();t.addChild(u)}}return t},u.parseSignature=function(t,n){var i=this.peekToken();if(!n&&i.type!==r.TOKEN_LEFT_PAREN){if(t)return null;this.fail("expected arguments",i.lineno,i.colno)}i.type===r.TOKEN_LEFT_PAREN&&(i=this.nextToken());for(var s=new e.NodeList(i.lineno,i.colno),o=new e.KeywordArgs(i.lineno,i.colno),u=!1;;){if(i=this.peekToken(),!n&&i.type===r.TOKEN_RIGHT_PAREN){this.nextToken();break}if(n&&i.type===r.TOKEN_BLOCK_END)break;if(u&&!this.skip(r.TOKEN_COMMA))this.fail("parseSignature: expected comma after expression",i.lineno,i.colno);else{var h=this.parseExpression();this.skipValue(r.TOKEN_OPERATOR,"=")?o.addChild(new e.Pair(h.lineno,h.colno,h,this.parseExpression())):s.addChild(h)}u=!0}return o.children.length&&s.addChild(o),s},u.parseUntilBlocks=function(){for(var t=this.breakOnBlocks,n=arguments.length,i=Array(n),r=0;r<n;r++)i[r]=arguments[r];this.breakOnBlocks=i;var e=this.parse();return this.breakOnBlocks=t,e},u.parseNodes=function(){for(var t,n=[];t=this.nextToken();)if(t.type===r.TOKEN_DATA){var i=t.value,s=this.peekToken(),o=s&&s.value;this.dropLeadingWhitespace&&(i=i.replace(/^\s*/,""),this.dropLeadingWhitespace=!1),s&&(s.type===r.TOKEN_BLOCK_START&&"-"===o.charAt(o.length-1)||s.type===r.TOKEN_VARIABLE_START&&"-"===o.charAt(this.tokens.tags.VARIABLE_START.length)||s.type===r.TOKEN_COMMENT&&"-"===o.charAt(this.tokens.tags.COMMENT_START.length))&&(i=i.replace(/\s*$/,"")),n.push(new e.Output(t.lineno,t.colno,[new e.TemplateData(t.lineno,t.colno,i)]))}else if(t.type===r.TOKEN_BLOCK_START){this.dropLeadingWhitespace=!1;var u=this.parseStatement();if(!u)break;n.push(u)}else if(t.type===r.TOKEN_VARIABLE_START){var h=this.parseExpression();this.dropLeadingWhitespace=!1,this.advanceAfterVariableEnd(),n.push(new e.Output(t.lineno,t.colno,[h]))}else t.type===r.TOKEN_COMMENT?this.dropLeadingWhitespace="-"===t.value.charAt(t.value.length-this.tokens.tags.COMMENT_END.length-1):this.fail("Unexpected token at top-level: "+t.type,t.lineno,t.colno);return n},u.parse=function(){return new e.NodeList(0,0,this.parseNodes())},u.parseAsRoot=function(){return new e.Root(0,0,this.parseNodes())},s=t,(i=n).prototype.__proto__=s&&s.prototype,i.__proto__=s,n}(s);t.exports={parse:function(t,n,i){var e=new u(r.lex(t,i));return void 0!==n&&(e.extensions=n),e.parseAsRoot()},Parser:u}},function(t,n,i){"use strict";var r=i(0),e="{%",s="%}",o="{{",u="}}",h="{#",f="#}";function a(t,n,i,r){return{type:t,value:n,lineno:i,colno:r}}var c=function(){function t(t,n){this.str=t,this.index=0,this.len=t.length,this.lineno=0,this.colno=0,this.in_code=!1;var i=(n=n||{}).tags||{};this.tags={BLOCK_START:i.blockStart||e,BLOCK_END:i.blockEnd||s,VARIABLE_START:i.variableStart||o,VARIABLE_END:i.variableEnd||u,COMMENT_START:i.commentStart||h,COMMENT_END:i.commentEnd||f},this.trimBlocks=!!n.trimBlocks,this.lstripBlocks=!!n.lstripBlocks}var n=t.prototype;return n.nextToken=function(){var t,n=this.lineno,i=this.colno;if(this.in_code){var e=this.current();if(this.isFinished())return null;if('"'===e||"'"===e)return a("string",this.D(e),n,i);if(t=this.$(" \n\t\r "))return a("whitespace",t,n,i);if((t=this.U(this.tags.BLOCK_END))||(t=this.U("-"+this.tags.BLOCK_END)))return this.in_code=!1,this.trimBlocks&&("\n"===(e=this.current())?this.forward():"\r"===e&&(this.forward(),"\n"===(e=this.current())?this.forward():this.back())),a("block-end",t,n,i);if((t=this.U(this.tags.VARIABLE_END))||(t=this.U("-"+this.tags.VARIABLE_END)))return this.in_code=!1,a("variable-end",t,n,i);if("r"===e&&"/"===this.str.charAt(this.index+1)){this.forwardN(2);for(var s="";!this.isFinished();){if("/"===this.current()&&"\\"!==this.previous()){this.forward();break}s+=this.current(),this.forward()}for(var o=["g","i","m","y"],u="";!this.isFinished();){if(!(-1!==o.indexOf(this.current())))break;u+=this.current(),this.forward()}return a("regex",{body:s,flags:u},n,i)}if(-1!=="()[]{}%*-+~/#,:|.<>=!".indexOf(e)){this.forward();var h,f=["==","===","!=","!==","<=",">=","//","**"],c=e+this.current();switch(-1!==r.indexOf(f,c)&&(this.forward(),e=c,-1!==r.indexOf(f,c+this.current())&&(e=c+this.current(),this.forward())),e){case"(":h="left-paren";break;case")":h="right-paren";break;case"[":h="left-bracket";break;case"]":h="right-bracket";break;case"{":h="left-curly";break;case"}":h="right-curly";break;case",":h="comma";break;case":":h="colon";break;case"~":h="tilde";break;case"|":h="pipe";break;default:h="operator"}return a(h,e,n,i)}if((t=this.G(" \n\t\r ()[]{}%*-+~/#,:|.<>=!")).match(/^[-+]?[0-9]+$/))return"."===this.current()?(this.forward(),a("float",t+"."+this.$("0123456789"),n,i)):a("int",t,n,i);if(t.match(/^(true|false)$/))return a("boolean",t,n,i);if("none"===t)return a("none",t,n,i);if("null"===t)return a("none",t,n,i);if(t)return a("symbol",t,n,i);throw Error("Unexpected value while parsing: "+t)}var l,v=this.tags.BLOCK_START.charAt(0)+this.tags.VARIABLE_START.charAt(0)+this.tags.COMMENT_START.charAt(0)+this.tags.COMMENT_END.charAt(0);if(this.isFinished())return null;if((t=this.U(this.tags.BLOCK_START+"-"))||(t=this.U(this.tags.BLOCK_START)))return this.in_code=!0,a("block-start",t,n,i);if((t=this.U(this.tags.VARIABLE_START+"-"))||(t=this.U(this.tags.VARIABLE_START)))return this.in_code=!0,a("variable-start",t,n,i);t="";var p=!1;for(this.W(this.tags.COMMENT_START)&&(p=!0,t=this.U(this.tags.COMMENT_START));null!==(l=this.G(v));){if(t+=l,(this.W(this.tags.BLOCK_START)||this.W(this.tags.VARIABLE_START)||this.W(this.tags.COMMENT_START))&&!p){if(this.lstripBlocks&&this.W(this.tags.BLOCK_START)&&this.colno>0&&this.colno<=t.length){var d=t.slice(-this.colno);if(/^\s+$/.test(d)&&!(t=t.slice(0,-this.colno)).length)return this.nextToken()}break}if(this.W(this.tags.COMMENT_END)){if(!p)throw Error("unexpected end of comment");t+=this.U(this.tags.COMMENT_END);break}t+=this.current(),this.forward()}if(null===l&&p)throw Error("expected end of comment, got end of file");return a(p?"comment":"data",t,n,i)},n.D=function(t){this.forward();for(var n="";!this.isFinished()&&this.current()!==t;){var i=this.current();if("\\"===i){switch(this.forward(),this.current()){case"n":n+="\n";break;case"t":n+="\t";break;case"r":n+="\r";break;default:n+=this.current()}this.forward()}else n+=i,this.forward()}return this.forward(),n},n.W=function(t){return this.index+t.length>this.len?null:this.str.slice(this.index,this.index+t.length)===t},n.U=function(t){return this.W(t)?(this.index+=t.length,t):null},n.G=function(t){return this.H(!0,t||"")},n.$=function(t){return this.H(!1,t)},n.H=function(t,n){if(this.isFinished())return null;var i=n.indexOf(this.current());if(t&&-1===i||!t&&-1!==i){var r=this.current();this.forward();for(var e=n.indexOf(this.current());(t&&-1===e||!t&&-1!==e)&&!this.isFinished();)r+=this.current(),this.forward(),e=n.indexOf(this.current());return r}return""},n.V=function(t){var n=this.currentStr().match(t);return n?(this.forwardN(n[0].length),n):null},n.isFinished=function(){return this.index>=this.len},n.forwardN=function(t){for(var n=0;n<t;n++)this.forward()},n.forward=function(){this.index++,"\n"===this.previous()?(this.lineno++,this.colno=0):this.colno++},n.backN=function(t){for(var n=0;n<t;n++)this.back()},n.back=function(){if(this.index--,"\n"===this.current()){this.lineno--;var t=this.src.lastIndexOf("\n",this.index-1);this.colno=-1===t?this.index:this.index-t}else this.colno--},n.current=function(){return this.isFinished()?"":this.str.charAt(this.index)},n.currentStr=function(){return this.isFinished()?"":this.str.substr(this.index)},n.previous=function(){return this.str.charAt(this.index-1)},t}();t.exports={lex:function(t,n){return new c(t,n)},TOKEN_STRING:"string",TOKEN_WHITESPACE:"whitespace",TOKEN_DATA:"data",TOKEN_BLOCK_START:"block-start",TOKEN_BLOCK_END:"block-end",TOKEN_VARIABLE_START:"variable-start",TOKEN_VARIABLE_END:"variable-end",TOKEN_COMMENT:"comment",TOKEN_LEFT_PAREN:"left-paren",TOKEN_RIGHT_PAREN:"right-paren",TOKEN_LEFT_BRACKET:"left-bracket",TOKEN_RIGHT_BRACKET:"right-bracket",TOKEN_LEFT_CURLY:"left-curly",TOKEN_RIGHT_CURLY:"right-curly",TOKEN_OPERATOR:"operator",TOKEN_COMMA:"comma",TOKEN_COLON:"colon",TOKEN_TILDE:"tilde",TOKEN_PIPE:"pipe",TOKEN_INT:"int",TOKEN_FLOAT:"float",TOKEN_BOOLEAN:"boolean",TOKEN_NONE:"none",TOKEN_SYMBOL:"symbol",TOKEN_SPECIAL:"special",TOKEN_REGEX:"regex"}},function(t,n,i){"use strict";var r=i(6),e=i(18).PrecompiledLoader,s=function(t){function n(n,i){var r;return(r=t.call(this)||this).baseURL=n||".",i=i||{},r.useCache=!!i.useCache,r.async=!!i.async,r}var i,r,e=n.prototype;return e.resolve=function(t,n){throw Error("relative templates not support in the browser yet")},e.getSource=function(t,n){var i,r=this.useCache;return this.fetch(this.baseURL+"/"+t,function(e,s){if(e)if(n)n(e.content);else{if(404!==e.status)throw e.content;i=null}else i={src:s,path:t,noCache:!r},n&&n(null,i)}),i},e.fetch=function(t,n){if("undefined"==typeof window)throw Error("WebLoader can only by used in a browser");var i=new XMLHttpRequest,r=!0;i.onreadystatechange=function(){4===i.readyState&&r&&(r=!1,0===i.status||200===i.status?n(null,i.responseText):n({status:i.status,content:i.responseText}))},t+=(-1===t.indexOf("?")?"?":"&")+"s="+(new Date).getTime(),i.open("GET",t,this.async),i.send()},r=t,(i=n).prototype.__proto__=r&&r.prototype,i.__proto__=r,n}(r);t.exports={WebLoader:s,PrecompiledLoader:e}},function(t,n,i){"use strict";var r,e=i(0),s=i(7),o=s.Environment,u=s.Template,h=i(6),f=i(10),a=i(22),c=i(5),l=i(8),v=i(9),p=i(2),d=i(3),w=i(24);function m(t,n){var i;return n=n||{},e.isObject(t)&&(n=t,t=null),f.FileSystemLoader?i=new f.FileSystemLoader(t,{watch:n.watch,noCache:n.noCache}):f.WebLoader&&(i=new f.WebLoader(t,{useCache:n.web&&n.web.useCache,async:n.web&&n.web.async})),r=new o(i,n),n&&n.express&&r.express(n.express),r}t.exports={Environment:o,Template:u,Loader:h,FileSystemLoader:f.FileSystemLoader,PrecompiledLoader:f.PrecompiledLoader,WebLoader:f.WebLoader,compiler:c,parser:l,lexer:v,runtime:p,lib:e,nodes:d,installJinjaCompat:w,configure:m,reset:function(){r=void 0},compile:function(t,n,i,e){return r||m(),new u(t,n,i,e)},render:function(t,n,i){return r||m(),r.render(t,n,i)},renderString:function(t,n,i){return r||m(),r.renderString(t,n,i)},precompile:a?a.precompile:void 0,precompileString:a?a.precompileString:void 0}},function(t,n,i){"use strict";var r=i(13),e=[],s=[],o=r.makeRequestCallFromTimer(function(){if(s.length)throw s.shift()});function u(t){var n;(n=e.length?e.pop():new h).task=t,r(n)}function h(){this.task=null}t.exports=u,h.prototype.call=function(){try{this.task.call()}catch(t){u.onerror?u.onerror(t):(s.push(t),o())}finally{this.task=null,e[e.length]=this}}},function(t,n,i){"use strict";!function(n){function i(t){e.length||(r(),!0),e[e.length]=t}t.exports=i;var r,e=[],s=0,o=1024;function u(){for(;s<e.length;){var t=s;if(s+=1,e[t].call(),s>o){for(var n=0,i=e.length-s;n<i;n++)e[n]=e[n+s];e.length-=s,s=0}}e.length=0,s=0,!1}var h,f,a,c=void 0!==n?n:self,l=c.MutationObserver||c.WebKitMutationObserver;function v(t){return function(){var n=setTimeout(r,0),i=setInterval(r,50);function r(){clearTimeout(n),clearInterval(i),t()}}}"function"==typeof l?(h=1,f=new l(u),a=document.createTextNode(""),f.observe(a,{characterData:!0}),r=function(){h=-h,a.data=h}):r=v(u),i.requestFlush=r,i.makeRequestCallFromTimer=v}(i(14))},function(t,n){var i;i=function(){return this}();try{i=i||Function("return this")()||(0,eval)("this")}catch(t){"object"==typeof window&&(i=window)}t.exports=i},function(t,n,i){var r;!function(i){"use strict";var e=function(){var t=Array.prototype.slice.call(arguments);"function"==typeof t[0]&&t[0].apply(null,t.splice(1))},s=function(t){"function"==typeof setImmediate?setImmediate(t):"undefined"!=typeof process&&process.nextTick?process.nextTick(t):setTimeout(t,0)},o=Array.isArray||function(t){return"[object Array]"===Object.prototype.toString.call(t)},u=function(t,n,i){var r=i?s:e;if(n=n||function(){},!o(t))return n(Error("First argument to waterfall must be an array of functions"));if(!t.length)return n();var u=function(t){return function(i){if(i)n.apply(null,arguments),n=function(){};else{var e=Array.prototype.slice.call(arguments,1),s=t.next();s?e.push(u(s)):e.push(n),r(function(){t.apply(null,e)})}}};u(function(t){var n=function(i){var r=function(){return t.length&&t[i].apply(null,arguments),r.next()};return r.next=function(){return i<t.length-1?n(i+1):null},r};return n(0)}(t))()};void 0===(r=function(){return u}.apply(n,[]))||(t.exports=r)}()},function(t,n,i){"use strict";var r=i(3),e=i(0),s=0;function o(){return"hole_"+s++}function u(t,n){for(var i=null,r=0;r<t.length;r++){var e=n(t[r]);e!==t[r]&&(i||(i=t.slice()),i[r]=e)}return i||t}function h(t,n,i){if(!(t instanceof r.Node))return t;if(!i){var e=n(t);if(e&&e!==t)return e}if(t instanceof r.NodeList){var s=u(t.children,function(t){return h(t,n,i)});s!==t.children&&(t=new r[t.typename](t.lineno,t.colno,s))}else if(t instanceof r.CallExtension){var o=h(t.args,n,i),f=u(t.contentArgs,function(t){return h(t,n,i)});o===t.args&&f===t.contentArgs||(t=new r[t.typename](t.extName,t.prop,o,f))}else{var a=t.fields.map(function(n){return t[n]}),c=u(a,function(t){return h(t,n,i)});c!==a&&(t=new r[t.typename](t.lineno,t.colno),c.forEach(function(n,i){t[t.fields[i]]=n}))}return i&&n(t)||t}function f(t,n){return h(t,n,!0)}function a(t,n,i){var s=[],u=f(i?t[i]:t,function(t){var i;return t instanceof r.Block?t:((t instanceof r.Filter&&-1!==e.indexOf(n,t.name.value)||t instanceof r.CallExtensionAsync)&&(i=new r.Symbol(t.lineno,t.colno,o()),s.push(new r.FilterAsync(t.lineno,t.colno,t.name,t.args,i))),i)});return i?t[i]=u:t=u,s.length?(s.push(t),new r.NodeList(t.lineno,t.colno,s)):t}function c(t,n){return function(t){return f(t,function(t){if(t instanceof r.If||t instanceof r.For){var n=!1;if(h(t,function(t){if(t instanceof r.FilterAsync||t instanceof r.IfAsync||t instanceof r.AsyncEach||t instanceof r.AsyncAll||t instanceof r.CallExtensionAsync)return n=!0,t}),n){if(t instanceof r.If)return new r.IfAsync(t.lineno,t.colno,t.cond,t.body,t.else_);if(t instanceof r.For&&!(t instanceof r.AsyncAll))return new r.AsyncEach(t.lineno,t.colno,t.arr,t.name,t.body,t.else_)}}})}(function(t){return h(t,function(t){if(t instanceof r.Block){var n=!1,i=o();t.body=h(t.body,function(t){if(t instanceof r.FunCall&&"super"===t.name.value)return n=!0,new r.Symbol(t.lineno,t.colno,i)}),n&&t.body.children.unshift(new r.Super(0,0,t.name,new r.Symbol(0,0,i)))}})}(function(t,n){return f(t,function(t){return t instanceof r.Output?a(t,n):t instanceof r.Set?a(t,n,"value"):t instanceof r.For?a(t,n,"arr"):t instanceof r.If?a(t,n,"cond"):t instanceof r.CallExtension?a(t,n,"args"):void 0})}(t,n)))}t.exports={transform:function(t,n){return c(t,n||[])}}},function(t,n,i){"use strict";var r=i(0),e=i(2),s=t.exports={};function o(t,n){return null===t||void 0===t||!1===t?n:t}function u(t){return t!=t}function h(t){var n=(t=o(t,"")).toLowerCase();return e.copySafeness(t,n.charAt(0).toUpperCase()+n.slice(1))}function f(t){if(r.isString(t))return t.split("");if(r.isObject(t))return r.r(t||{}).map(function(t){return{key:t[0],value:t[1]}});if(r.isArray(t))return t;throw new r.TemplateError("list filter: type not iterable")}function a(t){return e.copySafeness(t,t.replace(/^\s*|\s*$/g,""))}s.abs=Math.abs,s.batch=function(t,n,i){var r,e=[],s=[];for(r=0;r<t.length;r++)r%n==0&&s.length&&(e.push(s),s=[]),s.push(t[r]);if(s.length){if(i)for(r=s.length;r<n;r++)s.push(i);e.push(s)}return e},s.capitalize=h,s.center=function(t,n){if(t=o(t,""),n=n||80,t.length>=n)return t;var i=n-t.length,s=r.repeat(" ",i/2-i%2),u=r.repeat(" ",i/2);return e.copySafeness(t,s+t+u)},s.default=function(t,n,i){return i?t||n:void 0!==t?t:n},s.dictsort=function(t,n,i){if(!r.isObject(t))throw new r.TemplateError("dictsort filter: val must be an object");var e,s=[];for(var o in t)s.push([o,t[o]]);if(void 0===i||"key"===i)e=0;else{if("value"!==i)throw new r.TemplateError("dictsort filter: You can only sort by either key or value");e=1}return s.sort(function(t,i){var s=t[e],o=i[e];return n||(r.isString(s)&&(s=s.toUpperCase()),r.isString(o)&&(o=o.toUpperCase())),s>o?1:s===o?0:-1}),s},s.dump=function(t,n){return JSON.stringify(t,null,n)},s.escape=function(t){return t instanceof e.SafeString?t:(t=null===t||void 0===t?"":t,e.markSafe(r.escape(t.toString())))},s.safe=function(t){return t instanceof e.SafeString?t:(t=null===t||void 0===t?"":t,e.markSafe(t.toString()))},s.first=function(t){return t[0]},s.forceescape=function(t){return t=null===t||void 0===t?"":t,e.markSafe(r.escape(t.toString()))},s.groupby=function(t,n){return r.groupBy(t,n)},s.indent=function(t,n,i){if(""===(t=o(t,"")))return"";n=n||4;var s=t.split("\n"),u=r.repeat(" ",n),h=s.map(function(t,n){return 0!==n||i?""+u+t+"\n":t+"\n"}).join("");return e.copySafeness(t,h)},s.join=function(t,n,i){return n=n||"",i&&(t=r.map(t,function(t){return t[i]})),t.join(n)},s.last=function(t){return t[t.length-1]},s.length=function(t){var n=o(t,"");return void 0!==n?"function"==typeof Map&&n instanceof Map||"function"==typeof Set&&n instanceof Set?n.size:!r.isObject(n)||n instanceof e.SafeString?n.length:r.keys(n).length:0},s.list=f,s.lower=function(t){return(t=o(t,"")).toLowerCase()},s.nl2br=function(t){return null===t||void 0===t?"":e.copySafeness(t,t.replace(/\r\n|\n/g,"<br />\n"))},s.random=function(t){return t[Math.floor(Math.random()*t.length)]},s.rejectattr=function(t,n){return t.filter(function(t){return!t[n]})},s.selectattr=function(t,n){return t.filter(function(t){return!!t[n]})},s.replace=function(t,n,i,r){var s=t;if(n instanceof RegExp)return t.replace(n,i);void 0===r&&(r=-1);var o="";if("number"==typeof n)n=""+n;else if("string"!=typeof n)return t;if("number"==typeof t&&(t=""+t),"string"!=typeof t&&!(t instanceof e.SafeString))return t;if(""===n)return o=i+t.split("").join(i)+i,e.copySafeness(t,o);var u=t.indexOf(n);if(0===r||-1===u)return t;for(var h=0,f=0;u>-1&&(-1===r||f<r);)o+=t.substring(h,u)+i,h=u+n.length,f++,u=t.indexOf(n,h);return h<t.length&&(o+=t.substring(h)),e.copySafeness(s,o)},s.reverse=function(t){var n;return(n=r.isString(t)?f(t):r.map(t,function(t){return t})).reverse(),r.isString(t)?e.copySafeness(t,n.join("")):n},s.round=function(t,n,i){var r=Math.pow(10,n=n||0);return("ceil"===i?Math.ceil:"floor"===i?Math.floor:Math.round)(t*r)/r},s.slice=function(t,n,i){for(var r=Math.floor(t.length/n),e=t.length%n,s=[],o=0,u=0;u<n;u++){var h=o+u*r;u<e&&o++;var f=o+(u+1)*r,a=t.slice(h,f);i&&u>=e&&a.push(i),s.push(a)}return s},s.sum=function(t,n,i){return void 0===i&&(i=0),n&&(t=r.map(t,function(t){return t[n]})),i+t.reduce(function(t,n){return t+n},0)},s.sort=e.makeMacro(["value","reverse","case_sensitive","attribute"],[],function(t,n,i,e){var s=r.map(t,function(t){return t});return s.sort(function(t,s){var o=e?t[e]:t,u=e?s[e]:s;return!i&&r.isString(o)&&r.isString(u)&&(o=o.toLowerCase(),u=u.toLowerCase()),o<u?n?1:-1:o>u?n?-1:1:0}),s}),s.string=function(t){return e.copySafeness(t,t)},s.striptags=function(t,n){var i=a((t=o(t,"")).replace(/<\/?([a-z][a-z0-9]*)\b[^>]*>|<!--[\s\S]*?-->/gi,"")),r="";return r=n?i.replace(/^ +| +$/gm,"").replace(/ +/g," ").replace(/(\r\n)/g,"\n").replace(/\n\n\n+/g,"\n\n"):i.replace(/\s+/gi," "),e.copySafeness(t,r)},s.title=function(t){var n=(t=o(t,"")).split(" ").map(function(t){return h(t)});return e.copySafeness(t,n.join(" "))},s.trim=a,s.truncate=function(t,n,i,r){var s=t;if(t=o(t,""),n=n||255,t.length<=n)return t;if(i)t=t.substring(0,n);else{var u=t.lastIndexOf(" ",n);-1===u&&(u=n),t=t.substring(0,u)}return t+=void 0!==r&&null!==r?r:"...",e.copySafeness(s,t)},s.upper=function(t){return(t=o(t,"")).toUpperCase()},s.urlencode=function(t){var n=encodeURIComponent;return r.isString(t)?n(t):(r.isArray(t)?t:r.r(t)).map(function(t){var i=t[0],r=t[1];return n(i)+"="+n(r)}).join("&")};var c=/^(?:\(|<|&lt;)?(.*?)(?:\.|,|\)|\n|&gt;)?$/,l=/^[\w.!#$%&'*+\-\/=?\^`{|}~]+@[a-z\d\-]+(\.[a-z\d\-]+)+$/i,v=/^https?:\/\/.*$/,p=/^www\./,d=/\.(?:org|net|com)(?:\:|\/|$)/;s.urlize=function(t,n,i){u(n)&&(n=1/0);var r=!0===i?' rel="nofollow"':"";return t.split(/(\s+)/).filter(function(t){return t&&t.length}).map(function(t){var i=t.match(c),e=i?i[1]:t,s=e.substr(0,n);return v.test(e)?'<a href="'+e+'"'+r+">"+s+"</a>":p.test(e)?'<a href="http://'+e+'"'+r+">"+s+"</a>":l.test(e)?'<a href="mailto:'+e+'">'+e+"</a>":d.test(e)?'<a href="http://'+e+'"'+r+">"+s+"</a>":t}).join("")},s.wordcount=function(t){var n=(t=o(t,""))?t.match(/\w+/g):null;return n?n.length:null},s.float=function(t,n){var i=parseFloat(t);return u(i)?n:i},s.int=function(t,n){var i=parseInt(t,10);return u(i)?n:i},s.d=s.default,s.e=s.escape},function(t,n,i){"use strict";var r=function(t){function n(n){var i;return(i=t.call(this)||this).precompiled=n||{},i}var i,r;return n.prototype.getSource=function(t){return this.precompiled[t]?{src:{type:"code",obj:this.precompiled[t]},path:t}:null},r=t,(i=n).prototype.__proto__=r&&r.prototype,i.__proto__=r,n}(i(6));t.exports={PrecompiledLoader:r}},function(t,n,i){"use strict";var r=i(2).SafeString;n.callable=function(t){return"function"==typeof t},n.defined=function(t){return void 0!==t},n.divisibleby=function(t,n){return t%n==0},n.escaped=function(t){return t instanceof r},n.equalto=function(t,n){return t===n},n.eq=n.equalto,n.sameas=n.equalto,n.even=function(t){return t%2==0},n.falsy=function(t){return!t},n.ge=function(t,n){return t>=n},n.greaterthan=function(t,n){return t>n},n.gt=n.greaterthan,n.le=function(t,n){return t<=n},n.lessthan=function(t,n){return t<n},n.lt=n.lessthan,n.lower=function(t){return t.toLowerCase()===t},n.ne=function(t,n){return t!==n},n.null=function(t){return null===t},n.number=function(t){return"number"==typeof t},n.odd=function(t){return t%2==1},n.string=function(t){return"string"==typeof t},n.truthy=function(t){return!!t},n.undefined=function(t){return void 0===t},n.upper=function(t){return t.toUpperCase()===t},n.iterable=function(t){return"undefined"!=typeof Symbol?!!t[Symbol.iterator]:Array.isArray(t)||"string"==typeof t},n.mapping=function(t){var n=null!==t&&void 0!==t&&"object"==typeof t&&!Array.isArray(t);return Set?n&&!(t instanceof Set):n}},function(t,n,i){"use strict";t.exports=function(){return{range:function(t,n,i){void 0===n?(n=t,t=0,i=1):i||(i=1);var r=[];if(i>0)for(var e=t;e<n;e+=i)r.push(e);else for(var s=t;s>n;s+=i)r.push(s);return r},cycler:function(){return t=Array.prototype.slice.call(arguments),n=-1,{current:null,reset:function(){n=-1,this.current=null},next:function(){return++n>=t.length&&(n=0),this.current=t[n],this.current}};var t,n},joiner:function(t){return function(t){t=t||",";var n=!0;return function(){var i=n?"":t;return n=!1,i}}(t)}}}},function(t,n,i){"use strict";var r=i(4);t.exports=function(t,n){function i(t,n){if(this.name=t,this.path=t,this.defaultEngine=n.defaultEngine,this.ext=r.extname(t),!this.ext&&!this.defaultEngine)throw Error("No default engine was specified and no extension was provided.");this.ext||(this.name+=this.ext=("."!==this.defaultEngine[0]?".":"")+this.defaultEngine)}return i.prototype.render=function(n,i){t.render(this.name,n,i)},n.set("view",i),n.set("nunjucksEnv",t),t}},function(t,n,i){"use strict";var r=i(4),e=i(4),s=i(0).t,o=i(5),u=i(7).Environment,h=i(23);function f(t,n){return!!Array.isArray(n)&&n.some(function(n){return t.match(n)})}function a(t,n){(n=n||{}).isString=!0;var i=n.env||new u([]),r=n.wrapper||h;if(!n.name)throw Error('the "name" option is required when compiling a string');return r([c(t,n.name,i)],n)}function c(t,n,i){var r,e=(i=i||new u([])).asyncFilters,h=i.extensionsList;n=n.replace(/\\/g,"/");try{r=o.compile(t,e,h,n,i.opts)}catch(t){throw s(n,!1,t)}return{name:n,template:r}}t.exports={precompile:function(t,n){var i=(n=n||{}).env||new u([]),s=n.wrapper||h;if(n.isString)return a(t,n);var o=r.existsSync(t)&&r.statSync(t),l=[],v=[];if(o.isFile())l.push(c(r.readFileSync(t,"utf-8"),n.name||t,i));else if(o.isDirectory()){!function i(s){r.readdirSync(s).forEach(function(o){var u=e.join(s,o),h=u.substr(e.join(t,"/").length),a=r.statSync(u);a&&a.isDirectory()?f(h+="/",n.exclude)||i(u):f(h,n.include)&&v.push(u)})}(t);for(var p=0;p<v.length;p++){var d=v[p].replace(e.join(t,"/"),"");try{l.push(c(r.readFileSync(v[p],"utf-8"),d,i))}catch(t){if(!n.force)throw t;console.error(t)}}}return s(l,n)},precompileString:a}},function(t,n,i){"use strict";t.exports=function(t,n){var i="";n=n||{};for(var r=0;r<t.length;r++){var e=JSON.stringify(t[r].name);i+="(function() {(window.nunjucksPrecompiled = window.nunjucksPrecompiled || {})["+e+"] = (function() {\n"+t[r].template+"\n})();\n",n.asFunction&&(i+="return function(ctx, cb) { return nunjucks.render("+e+", ctx, cb); }\n"),i+="})();\n"}return i}},function(t,n,i){"use strict";t.exports=function(){var t,n,i=this.runtime,r=this.lib,e=this.compiler.Compiler,s=this.parser.Parser,o=this.nodes,u=this.lexer,h=i.contextOrFrameLookup,f=i.memberLookup;function a(t){return{index:t.index,lineno:t.lineno,colno:t.colno}}if(e&&(t=e.prototype.assertType),s&&(n=s.prototype.parseAggregate),i.contextOrFrameLookup=function(t,n,i){var r=h.apply(this,arguments);if(void 0!==r)return r;switch(i){case"True":return!0;case"False":return!1;case"None":return null;default:return}},o&&e&&s){var c=o.Node.extend("Slice",{fields:["start","stop","step"],init:function(t,n,i,r,e){i=i||new o.Literal(t,n,null),r=r||new o.Literal(t,n,null),e=e||new o.Literal(t,n,1),this.parent(t,n,i,r,e)}});e.prototype.assertType=function(n){n instanceof c||t.apply(this,arguments)},e.prototype.compileSlice=function(t,n){this.w("("),this.C(t.start,n),this.w("),("),this.C(t.stop,n),this.w("),("),this.C(t.step,n),this.w(")")},s.prototype.parseAggregate=function(){var t=this,i=a(this.tokens);i.colno--,i.index--;try{return n.apply(this)}catch(n){var e=a(this.tokens),s=function(){return r.h(t.tokens,e),n};r.h(this.tokens,i),this.peeked=!1;var h=this.peekToken();if(h.type!==u.TOKEN_LEFT_BRACKET)throw s();this.nextToken();for(var f=new c(h.lineno,h.colno),l=!1,v=0;v<=f.fields.length&&!this.skip(u.TOKEN_RIGHT_BRACKET);v++){if(v===f.fields.length){if(!l)break;this.fail("parseSlice: too many slice components",h.lineno,h.colno)}this.skip(u.TOKEN_COLON)?l=!0:(f[f.fields[v]]=this.parseExpression(),l=this.skip(u.TOKEN_COLON)||l)}if(!l)throw s();return new o.Array(h.lineno,h.colno,[f])}}}function l(t,n){return Object.prototype.hasOwnProperty.call(t,n)}var v={pop:function(t){if(void 0===t)return this.pop();if(t>=this.length||t<0)throw Error("KeyError");return this.splice(t,1)},append:function(t){return this.push(t)},remove:function(t){for(var n=0;n<this.length;n++)if(this[n]===t)return this.splice(n,1);throw Error("ValueError")},count:function(t){for(var n=0,i=0;i<this.length;i++)this[i]===t&&n++;return n},index:function(t){var n;if(-1===(n=this.indexOf(t)))throw Error("ValueError");return n},find:function(t){return this.indexOf(t)},insert:function(t,n){return this.splice(t,0,n)}},p={items:function(){return r.r(this)},values:function(){return r.u(this)},keys:function(){return r.keys(this)},get:function(t,n){var i=this[t];return void 0===i&&(i=n),i},has_key:function(t){return l(this,t)},pop:function(t,n){var i=this[t];if(void 0===i&&void 0!==n)i=n;else{if(void 0===i)throw Error("KeyError");delete this[t]}return i},popitem:function(){var t=r.keys(this);if(!t.length)throw Error("KeyError");var n=t[0],i=this[n];return delete this[n],[n,i]},setdefault:function(t,n){return void 0===n&&(n=null),t in this||(this[t]=n),this[t]},update:function(t){return r.h(this,t),null}};return p.iteritems=p.items,p.itervalues=p.values,p.iterkeys=p.keys,i.memberLookup=function(t,n,e){return 4===arguments.length?function(t,n,r,e){t=t||[],null===n&&(n=e<0?t.length-1:0),null===r?r=e<0?-1:t.length:r<0&&(r+=t.length),n<0&&(n+=t.length);for(var s=[],o=n;!(o<0||o>t.length||e>0&&o>=r||e<0&&o<=r);o+=e)s.push(i.memberLookup(t,o));return s}.apply(this,arguments):(t=t||{},r.isArray(t)&&l(v,n)?v[n].bind(t):r.isObject(t)&&l(p,n)?p[n].bind(t):f.apply(this,arguments))},function(){i.contextOrFrameLookup=h,i.memberLookup=f,e&&(e.prototype.assertType=t),s&&(s.prototype.parseAggregate=n)}}}])});
//# sourceMappingURL=nunjucks.min.js.map

Class = function (proto) {
    var _const = proto.__init__ || function () {};
    return _const.prototype = proto, _const
}, Watch = Class({
    typename: "sonic.State",
    __init__: function (state, handler) {
        this.state = state, this.handler = handler
    },
    unwatch: function () {
        this.state.unwatch(this.handler)
    }
}), State = Class({
    typename: "sonic.State",
    __init__: function (value) {
        this.watchers = [], this.value = value
    },
    set: function (value) {
        return this.value = value, this.notify(), this
    },
    shadowset: function (value) {
        return this.value = value, this
    },
    get: function () {
        return this.value
    },
    notify: function () {
        for (var index = 0; index < this.watchers.length; index++) this.watchers[index](this);
        return this
    },
    watch: function (handler) {
        return this.watchers.push(handler), new Watch(this, handler)
    },
    unwatch: function (handler) {
        var index = this.watchers.indexOf(handler);
        return this.watchers.splice(index, 1), this
    }
}), document.addEventListener("DOMContentLoaded", () => {
    document.querySelectorAll("[sonic]").forEach(elem => {
        for (var template = nunjucks.compile(elem.innerHTML), scope = eval("(" + elem.getAttribute("sonic") + ")"), keys = Object.keys(scope), buildContext = function () {
                for (var result = {}, index = 0; index < keys.length; index++) {
                    var key = keys[index],
                        value = scope[key];
                    "sonic.State" == value.typename ? result[key] = value.get() : result[key] = value
                }
                return result
            }, index = 0; index < keys.length; index++) {
            var key = keys[index],
                value = scope[key];
            "sonic.State" == value.typename && value.watch((function () {
                template.render(buildContext(), (function (error, rendered) {
                     error || (elem.innerHTML = rendered)
                }))
            }))
        }
        elem.innerHTML = template.render(buildContext())
    }), document.querySelectorAll("input[bind-to]").forEach((function (elem) {
        var state = eval(elem.getAttribute("bind-to"));
        state.watch((function () {
            elem.value != state.value && (elem.value = state.value)
        })), elem.value = state.value, "keyup keypress keydown blur focus change".split(" ").forEach(eventName => {
            elem.addEventListener(eventName, () => {
                elem.value != state.value && state.set(elem.value)
            }, !1)
        })
    }))
});


var requirejs, require, define;
(function (global, setTimeout) {
    var req, s, head, baseElement, dataMain, src,
        interactiveScript, currentlyAddingScript, mainScript, subPath,
        version = '2.3.5',
        commentRegExp = /\/\*[\s\S]*?\*\/|([^:"'=]|^)\/\/.*$/mg,
        cjsRequireRegExp = /[^.]\s*require\s*\(\s*["']([^'"\s]+)["']\s*\)/g,
        jsSuffixRegExp = /\.js$/,
        currDirRegExp = /^\.\//,
        op = Object.prototype,
        ostring = op.toString,
        hasOwn = op.hasOwnProperty,
        isBrowser = !!(typeof window !== 'undefined' && typeof navigator !== 'undefined' && window.document),
        isWebWorker = !isBrowser && typeof importScripts !== 'undefined',
        //PS3 indicates loaded and complete, but need to wait for complete
        //specifically. Sequence is 'loading', 'loaded', execution,
        // then 'complete'. The UA check is unfortunate, but not sure how
        //to feature test w/o causing perf issues.
        readyRegExp = isBrowser && navigator.platform === 'PLAYSTATION 3' ?
                      /^complete$/ : /^(complete|loaded)$/,
        defContextName = '_',
        //Oh the tragedy, detecting opera. See the usage of isOpera for reason.
        isOpera = typeof opera !== 'undefined' && opera.toString() === '[object Opera]',
        contexts = {},
        cfg = {},
        globalDefQueue = [],
        useInteractive = false;

    //Could match something like ')//comment', do not lose the prefix to comment.
    function commentReplace(match, singlePrefix) {
        return singlePrefix || '';
    }

    function isFunction(it) {
        return ostring.call(it) === '[object Function]';
    }

    function isArray(it) {
        return ostring.call(it) === '[object Array]';
    }

    /**
     * Helper function for iterating over an array. If the func returns
     * a true value, it will break out of the loop.
     */
    function each(ary, func) {
        if (ary) {
            var i;
            for (i = 0; i < ary.length; i += 1) {
                if (ary[i] && func(ary[i], i, ary)) {
                    break;
                }
            }
        }
    }

    /**
     * Helper function for iterating over an array backwards. If the func
     * returns a true value, it will break out of the loop.
     */
    function eachReverse(ary, func) {
        if (ary) {
            var i;
            for (i = ary.length - 1; i > -1; i -= 1) {
                if (ary[i] && func(ary[i], i, ary)) {
                    break;
                }
            }
        }
    }

    function hasProp(obj, prop) {
        return hasOwn.call(obj, prop);
    }

    function getOwn(obj, prop) {
        return hasProp(obj, prop) && obj[prop];
    }

    /**
     * Cycles over properties in an object and calls a function for each
     * property value. If the function returns a truthy value, then the
     * iteration is stopped.
     */
    function eachProp(obj, func) {
        var prop;
        for (prop in obj) {
            if (hasProp(obj, prop)) {
                if (func(obj[prop], prop)) {
                    break;
                }
            }
        }
    }

    /**
     * Simple function to mix in properties from source into target,
     * but only if target does not already have a property of the same name.
     */
    function mixin(target, source, force, deepStringMixin) {
        if (source) {
            eachProp(source, function (value, prop) {
                if (force || !hasProp(target, prop)) {
                    if (deepStringMixin && typeof value === 'object' && value &&
                        !isArray(value) && !isFunction(value) &&
                        !(value instanceof RegExp)) {

                        if (!target[prop]) {
                            target[prop] = {};
                        }
                        mixin(target[prop], value, force, deepStringMixin);
                    } else {
                        target[prop] = value;
                    }
                }
            });
        }
        return target;
    }

    //Similar to Function.prototype.bind, but the 'this' object is specified
    //first, since it is easier to read/figure out what 'this' will be.
    function bind(obj, fn) {
        return function () {
            return fn.apply(obj, arguments);
        };
    }

    function scripts() {
        return document.getElementsByTagName('script');
    }

    function defaultOnError(err) {
        throw err;
    }

    //Allow getting a global that is expressed in
    //dot notation, like 'a.b.c'.
    function getGlobal(value) {
        if (!value) {
            return value;
        }
        var g = global;
        each(value.split('.'), function (part) {
            g = g[part];
        });
        return g;
    }

    /**
     * Constructs an error with a pointer to an URL with more information.
     * @param {String} id the error ID that maps to an ID on a web page.
     * @param {String} message human readable error.
     * @param {Error} [err] the original error, if there is one.
     *
     * @returns {Error}
     */
    function makeError(id, msg, err, requireModules) {
        var e = new Error(msg + '\nhttp://requirejs.org/docs/errors.html#' + id);
        e.requireType = id;
        e.requireModules = requireModules;
        if (err) {
            e.originalError = err;
        }
        return e;
    }

    if (typeof define !== 'undefined') {
        //If a define is already in play via another AMD loader,
        //do not overwrite.
        return;
    }

    if (typeof requirejs !== 'undefined') {
        if (isFunction(requirejs)) {
            //Do not overwrite an existing requirejs instance.
            return;
        }
        cfg = requirejs;
        requirejs = undefined;
    }

    //Allow for a require config object
    if (typeof require !== 'undefined' && !isFunction(require)) {
        //assume it is a config object.
        cfg = require;
        require = undefined;
    }

    function newContext(contextName) {
        var inCheckLoaded, Module, context, handlers,
            checkLoadedTimeoutId,
            config = {
                //Defaults. Do not set a default for map
                //config to speed up normalize(), which
                //will run faster if there is no default.
                waitSeconds: 7,
                baseUrl: './',
                paths: {},
                bundles: {},
                pkgs: {},
                shim: {},
                config: {}
            },
            registry = {},
            //registry of just enabled modules, to speed
            //cycle breaking code when lots of modules
            //are registered, but not activated.
            enabledRegistry = {},
            undefEvents = {},
            defQueue = [],
            defined = {},
            urlFetched = {},
            bundlesMap = {},
            requireCounter = 1,
            unnormalizedCounter = 1;

        /**
         * Trims the . and .. from an array of path segments.
         * It will keep a leading path segment if a .. will become
         * the first path segment, to help with module name lookups,
         * which act like paths, but can be remapped. But the end result,
         * all paths that use this function should look normalized.
         * NOTE: this method MODIFIES the input array.
         * @param {Array} ary the array of path segments.
         */
        function trimDots(ary) {
            var i, part;
            for (i = 0; i < ary.length; i++) {
                part = ary[i];
                if (part === '.') {
                    ary.splice(i, 1);
                    i -= 1;
                } else if (part === '..') {
                    // If at the start, or previous value is still ..,
                    // keep them so that when converted to a path it may
                    // still work when converted to a path, even though
                    // as an ID it is less than ideal. In larger point
                    // releases, may be better to just kick out an error.
                    if (i === 0 || (i === 1 && ary[2] === '..') || ary[i - 1] === '..') {
                        continue;
                    } else if (i > 0) {
                        ary.splice(i - 1, 2);
                        i -= 2;
                    }
                }
            }
        }

        /**
         * Given a relative module name, like ./something, normalize it to
         * a real name that can be mapped to a path.
         * @param {String} name the relative name
         * @param {String} baseName a real name that the name arg is relative
         * to.
         * @param {Boolean} applyMap apply the map config to the value. Should
         * only be done if this normalization is for a dependency ID.
         * @returns {String} normalized name
         */
        function normalize(name, baseName, applyMap) {
            var pkgMain, mapValue, nameParts, i, j, nameSegment, lastIndex,
                foundMap, foundI, foundStarMap, starI, normalizedBaseParts,
                baseParts = (baseName && baseName.split('/')),
                map = config.map,
                starMap = map && map['*'];

            //Adjust any relative paths.
            if (name) {
                name = name.split('/');
                lastIndex = name.length - 1;

                // If wanting node ID compatibility, strip .js from end
                // of IDs. Have to do this here, and not in nameToUrl
                // because node allows either .js or non .js to map
                // to same file.
                if (config.nodeIdCompat && jsSuffixRegExp.test(name[lastIndex])) {
                    name[lastIndex] = name[lastIndex].replace(jsSuffixRegExp, '');
                }

                // Starts with a '.' so need the baseName
                if (name[0].charAt(0) === '.' && baseParts) {
                    //Convert baseName to array, and lop off the last part,
                    //so that . matches that 'directory' and not name of the baseName's
                    //module. For instance, baseName of 'one/two/three', maps to
                    //'one/two/three.js', but we want the directory, 'one/two' for
                    //this normalization.
                    normalizedBaseParts = baseParts.slice(0, baseParts.length - 1);
                    name = normalizedBaseParts.concat(name);
                }

                trimDots(name);
                name = name.join('/');
            }

            //Apply map config if available.
            if (applyMap && map && (baseParts || starMap)) {
                nameParts = name.split('/');

                outerLoop: for (i = nameParts.length; i > 0; i -= 1) {
                    nameSegment = nameParts.slice(0, i).join('/');

                    if (baseParts) {
                        //Find the longest baseName segment match in the config.
                        //So, do joins on the biggest to smallest lengths of baseParts.
                        for (j = baseParts.length; j > 0; j -= 1) {
                            mapValue = getOwn(map, baseParts.slice(0, j).join('/'));

                            //baseName segment has config, find if it has one for
                            //this name.
                            if (mapValue) {
                                mapValue = getOwn(mapValue, nameSegment);
                                if (mapValue) {
                                    //Match, update name to the new value.
                                    foundMap = mapValue;
                                    foundI = i;
                                    break outerLoop;
                                }
                            }
                        }
                    }

                    //Check for a star map match, but just hold on to it,
                    //if there is a shorter segment match later in a matching
                    //config, then favor over this star map.
                    if (!foundStarMap && starMap && getOwn(starMap, nameSegment)) {
                        foundStarMap = getOwn(starMap, nameSegment);
                        starI = i;
                    }
                }

                if (!foundMap && foundStarMap) {
                    foundMap = foundStarMap;
                    foundI = starI;
                }

                if (foundMap) {
                    nameParts.splice(0, foundI, foundMap);
                    name = nameParts.join('/');
                }
            }

            // If the name points to a package's name, use
            // the package main instead.
            pkgMain = getOwn(config.pkgs, name);

            return pkgMain ? pkgMain : name;
        }

        function removeScript(name) {
            if (isBrowser) {
                each(scripts(), function (scriptNode) {
                    if (scriptNode.getAttribute('data-requiremodule') === name &&
                            scriptNode.getAttribute('data-requirecontext') === context.contextName) {
                        scriptNode.parentNode.removeChild(scriptNode);
                        return true;
                    }
                });
            }
        }

        function hasPathFallback(id) {
            var pathConfig = getOwn(config.paths, id);
            if (pathConfig && isArray(pathConfig) && pathConfig.length > 1) {
                //Pop off the first array value, since it failed, and
                //retry
                pathConfig.shift();
                context.require.undef(id);

                //Custom require that does not do map translation, since
                //ID is "absolute", already mapped/resolved.
                context.makeRequire(null, {
                    skipMap: true
                })([id]);

                return true;
            }
        }

        //Turns a plugin!resource to [plugin, resource]
        //with the plugin being undefined if the name
        //did not have a plugin prefix.
        function splitPrefix(name) {
            var prefix,
                index = name ? name.indexOf('!') : -1;
            if (index > -1) {
                prefix = name.substring(0, index);
                name = name.substring(index + 1, name.length);
            }
            return [prefix, name];
        }

        /**
         * Creates a module mapping that includes plugin prefix, module
         * name, and path. If parentModuleMap is provided it will
         * also normalize the name via require.normalize()
         *
         * @param {String} name the module name
         * @param {String} [parentModuleMap] parent module map
         * for the module name, used to resolve relative names.
         * @param {Boolean} isNormalized: is the ID already normalized.
         * This is true if this call is done for a define() module ID.
         * @param {Boolean} applyMap: apply the map config to the ID.
         * Should only be true if this map is for a dependency.
         *
         * @returns {Object}
         */
        function makeModuleMap(name, parentModuleMap, isNormalized, applyMap) {
            var url, pluginModule, suffix, nameParts,
                prefix = null,
                parentName = parentModuleMap ? parentModuleMap.name : null,
                originalName = name,
                isDefine = true,
                normalizedName = '';

            //If no name, then it means it is a require call, generate an
            //internal name.
            if (!name) {
                isDefine = false;
                name = '_@r' + (requireCounter += 1);
            }

            nameParts = splitPrefix(name);
            prefix = nameParts[0];
            name = nameParts[1];

            if (prefix) {
                prefix = normalize(prefix, parentName, applyMap);
                pluginModule = getOwn(defined, prefix);
            }

            //Account for relative paths if there is a base name.
            if (name) {
                if (prefix) {
                    if (isNormalized) {
                        normalizedName = name;
                    } else if (pluginModule && pluginModule.normalize) {
                        //Plugin is loaded, use its normalize method.
                        normalizedName = pluginModule.normalize(name, function (name) {
                            return normalize(name, parentName, applyMap);
                        });
                    } else {
                        // If nested plugin references, then do not try to
                        // normalize, as it will not normalize correctly. This
                        // places a restriction on resourceIds, and the longer
                        // term solution is not to normalize until plugins are
                        // loaded and all normalizations to allow for async
                        // loading of a loader plugin. But for now, fixes the
                        // common uses. Details in #1131
                        normalizedName = name.indexOf('!') === -1 ?
                                         normalize(name, parentName, applyMap) :
                                         name;
                    }
                } else {
                    //A regular module.
                    normalizedName = normalize(name, parentName, applyMap);

                    //Normalized name may be a plugin ID due to map config
                    //application in normalize. The map config values must
                    //already be normalized, so do not need to redo that part.
                    nameParts = splitPrefix(normalizedName);
                    prefix = nameParts[0];
                    normalizedName = nameParts[1];
                    isNormalized = true;

                    url = context.nameToUrl(normalizedName);
                }
            }

            //If the id is a plugin id that cannot be determined if it needs
            //normalization, stamp it with a unique ID so two matching relative
            //ids that may conflict can be separate.
            suffix = prefix && !pluginModule && !isNormalized ?
                     '_unnormalized' + (unnormalizedCounter += 1) :
                     '';

            return {
                prefix: prefix,
                name: normalizedName,
                parentMap: parentModuleMap,
                unnormalized: !!suffix,
                url: url,
                originalName: originalName,
                isDefine: isDefine,
                id: (prefix ?
                        prefix + '!' + normalizedName :
                        normalizedName) + suffix
            };
        }

        function getModule(depMap) {
            var id = depMap.id,
                mod = getOwn(registry, id);

            if (!mod) {
                mod = registry[id] = new context.Module(depMap);
            }

            return mod;
        }

        function on(depMap, name, fn) {
            var id = depMap.id,
                mod = getOwn(registry, id);

            if (hasProp(defined, id) &&
                    (!mod || mod.defineEmitComplete)) {
                if (name === 'defined') {
                    fn(defined[id]);
                }
            } else {
                mod = getModule(depMap);
                if (mod.error && name === 'error') {
                    fn(mod.error);
                } else {
                    mod.on(name, fn);
                }
            }
        }

        function onError(err, errback) {
            var ids = err.requireModules,
                notified = false;

            if (errback) {
                errback(err);
            } else {
                each(ids, function (id) {
                    var mod = getOwn(registry, id);
                    if (mod) {
                        //Set error on module, so it skips timeout checks.
                        mod.error = err;
                        if (mod.events.error) {
                            notified = true;
                            mod.emit('error', err);
                        }
                    }
                });

                if (!notified) {
                    req.onError(err);
                }
            }
        }

        /**
         * Internal method to transfer globalQueue items to this context's
         * defQueue.
         */
        function takeGlobalQueue() {
            //Push all the globalDefQueue items into the context's defQueue
            if (globalDefQueue.length) {
                each(globalDefQueue, function(queueItem) {
                    var id = queueItem[0];
                    if (typeof id === 'string') {
                        context.defQueueMap[id] = true;
                    }
                    defQueue.push(queueItem);
                });
                globalDefQueue = [];
            }
        }

        handlers = {
            'require': function (mod) {
                if (mod.require) {
                    return mod.require;
                } else {
                    return (mod.require = context.makeRequire(mod.map));
                }
            },
            'exports': function (mod) {
                mod.usingExports = true;
                if (mod.map.isDefine) {
                    if (mod.exports) {
                        return (defined[mod.map.id] = mod.exports);
                    } else {
                        return (mod.exports = defined[mod.map.id] = {});
                    }
                }
            },
            'module': function (mod) {
                if (mod.module) {
                    return mod.module;
                } else {
                    return (mod.module = {
                        id: mod.map.id,
                        uri: mod.map.url,
                        config: function () {
                            return getOwn(config.config, mod.map.id) || {};
                        },
                        exports: mod.exports || (mod.exports = {})
                    });
                }
            }
        };

        function cleanRegistry(id) {
            //Clean up machinery used for waiting modules.
            delete registry[id];
            delete enabledRegistry[id];
        }

        function breakCycle(mod, traced, processed) {
            var id = mod.map.id;

            if (mod.error) {
                mod.emit('error', mod.error);
            } else {
                traced[id] = true;
                each(mod.depMaps, function (depMap, i) {
                    var depId = depMap.id,
                        dep = getOwn(registry, depId);

                    //Only force things that have not completed
                    //being defined, so still in the registry,
                    //and only if it has not been matched up
                    //in the module already.
                    if (dep && !mod.depMatched[i] && !processed[depId]) {
                        if (getOwn(traced, depId)) {
                            mod.defineDep(i, defined[depId]);
                            mod.check(); //pass false?
                        } else {
                            breakCycle(dep, traced, processed);
                        }
                    }
                });
                processed[id] = true;
            }
        }

        function checkLoaded() {
            var err, usingPathFallback,
                waitInterval = config.waitSeconds * 1000,
                //It is possible to disable the wait interval by using waitSeconds of 0.
                expired = waitInterval && (context.startTime + waitInterval) < new Date().getTime(),
                noLoads = [],
                reqCalls = [],
                stillLoading = false,
                needCycleCheck = true;

            //Do not bother if this call was a result of a cycle break.
            if (inCheckLoaded) {
                return;
            }

            inCheckLoaded = true;

            //Figure out the state of all the modules.
            eachProp(enabledRegistry, function (mod) {
                var map = mod.map,
                    modId = map.id;

                //Skip things that are not enabled or in error state.
                if (!mod.enabled) {
                    return;
                }

                if (!map.isDefine) {
                    reqCalls.push(mod);
                }

                if (!mod.error) {
                    //If the module should be executed, and it has not
                    //been inited and time is up, remember it.
                    if (!mod.inited && expired) {
                        if (hasPathFallback(modId)) {
                            usingPathFallback = true;
                            stillLoading = true;
                        } else {
                            noLoads.push(modId);
                            removeScript(modId);
                        }
                    } else if (!mod.inited && mod.fetched && map.isDefine) {
                        stillLoading = true;
                        if (!map.prefix) {
                            //No reason to keep looking for unfinished
                            //loading. If the only stillLoading is a
                            //plugin resource though, keep going,
                            //because it may be that a plugin resource
                            //is waiting on a non-plugin cycle.
                            return (needCycleCheck = false);
                        }
                    }
                }
            });

            if (expired && noLoads.length) {
                //If wait time expired, throw error of unloaded modules.
                err = makeError('timeout', 'Load timeout for modules: ' + noLoads, null, noLoads);
                err.contextName = context.contextName;
                return onError(err);
            }

            //Not expired, check for a cycle.
            if (needCycleCheck) {
                each(reqCalls, function (mod) {
                    breakCycle(mod, {}, {});
                });
            }

            //If still waiting on loads, and the waiting load is something
            //other than a plugin resource, or there are still outstanding
            //scripts, then just try back later.
            if ((!expired || usingPathFallback) && stillLoading) {
                //Something is still waiting to load. Wait for it, but only
                //if a timeout is not already in effect.
                if ((isBrowser || isWebWorker) && !checkLoadedTimeoutId) {
                    checkLoadedTimeoutId = setTimeout(function () {
                        checkLoadedTimeoutId = 0;
                        checkLoaded();
                    }, 50);
                }
            }

            inCheckLoaded = false;
        }

        Module = function (map) {
            this.events = getOwn(undefEvents, map.id) || {};
            this.map = map;
            this.shim = getOwn(config.shim, map.id);
            this.depExports = [];
            this.depMaps = [];
            this.depMatched = [];
            this.pluginMaps = {};
            this.depCount = 0;

            /* this.exports this.factory
               this.depMaps = [],
               this.enabled, this.fetched
            */
        };

        Module.prototype = {
            init: function (depMaps, factory, errback, options) {
                options = options || {};

                //Do not do more inits if already done. Can happen if there
                //are multiple define calls for the same module. That is not
                //a normal, common case, but it is also not unexpected.
                if (this.inited) {
                    return;
                }

                this.factory = factory;

                if (errback) {
                    //Register for errors on this module.
                    this.on('error', errback);
                } else if (this.events.error) {
                    //If no errback already, but there are error listeners
                    //on this module, set up an errback to pass to the deps.
                    errback = bind(this, function (err) {
                        this.emit('error', err);
                    });
                }

                //Do a copy of the dependency array, so that
                //source inputs are not modified. For example
                //"shim" deps are passed in here directly, and
                //doing a direct modification of the depMaps array
                //would affect that config.
                this.depMaps = depMaps && depMaps.slice(0);

                this.errback = errback;

                //Indicate this module has be initialized
                this.inited = true;

                this.ignore = options.ignore;

                //Could have option to init this module in enabled mode,
                //or could have been previously marked as enabled. However,
                //the dependencies are not known until init is called. So
                //if enabled previously, now trigger dependencies as enabled.
                if (options.enabled || this.enabled) {
                    //Enable this module and dependencies.
                    //Will call this.check()
                    this.enable();
                } else {
                    this.check();
                }
            },

            defineDep: function (i, depExports) {
                //Because of cycles, defined callback for a given
                //export can be called more than once.
                if (!this.depMatched[i]) {
                    this.depMatched[i] = true;
                    this.depCount -= 1;
                    this.depExports[i] = depExports;
                }
            },

            fetch: function () {
                if (this.fetched) {
                    return;
                }
                this.fetched = true;

                context.startTime = (new Date()).getTime();

                var map = this.map;

                //If the manager is for a plugin managed resource,
                //ask the plugin to load it now.
                if (this.shim) {
                    context.makeRequire(this.map, {
                        enableBuildCallback: true
                    })(this.shim.deps || [], bind(this, function () {
                        return map.prefix ? this.callPlugin() : this.load();
                    }));
                } else {
                    //Regular dependency.
                    return map.prefix ? this.callPlugin() : this.load();
                }
            },

            load: function () {
                var url = this.map.url;

                //Regular dependency.
                if (!urlFetched[url]) {
                    urlFetched[url] = true;
                    context.load(this.map.id, url);
                }
            },

            /**
             * Checks if the module is ready to define itself, and if so,
             * define it.
             */
            check: function () {
                if (!this.enabled || this.enabling) {
                    return;
                }

                var err, cjsModule,
                    id = this.map.id,
                    depExports = this.depExports,
                    exports = this.exports,
                    factory = this.factory;

                if (!this.inited) {
                    // Only fetch if not already in the defQueue.
                    if (!hasProp(context.defQueueMap, id)) {
                        this.fetch();
                    }
                } else if (this.error) {
                    this.emit('error', this.error);
                } else if (!this.defining) {
                    //The factory could trigger another require call
                    //that would result in checking this module to
                    //define itself again. If already in the process
                    //of doing that, skip this work.
                    this.defining = true;

                    if (this.depCount < 1 && !this.defined) {
                        if (isFunction(factory)) {
                            //If there is an error listener, favor passing
                            //to that instead of throwing an error. However,
                            //only do it for define()'d  modules. require
                            //errbacks should not be called for failures in
                            //their callbacks (#699). However if a global
                            //onError is set, use that.
                            if ((this.events.error && this.map.isDefine) ||
                                req.onError !== defaultOnError) {
                                try {
                                    exports = context.execCb(id, factory, depExports, exports);
                                } catch (e) {
                                    err = e;
                                }
                            } else {
                                exports = context.execCb(id, factory, depExports, exports);
                            }

                            // Favor return value over exports. If node/cjs in play,
                            // then will not have a return value anyway. Favor
                            // module.exports assignment over exports object.
                            if (this.map.isDefine && exports === undefined) {
                                cjsModule = this.module;
                                if (cjsModule) {
                                    exports = cjsModule.exports;
                                } else if (this.usingExports) {
                                    //exports already set the defined value.
                                    exports = this.exports;
                                }
                            }

                            if (err) {
                                err.requireMap = this.map;
                                err.requireModules = this.map.isDefine ? [this.map.id] : null;
                                err.requireType = this.map.isDefine ? 'define' : 'require';
                                return onError((this.error = err));
                            }

                        } else {
                            //Just a literal value
                            exports = factory;
                        }

                        this.exports = exports;

                        if (this.map.isDefine && !this.ignore) {
                            defined[id] = exports;

                            if (req.onResourceLoad) {
                                var resLoadMaps = [];
                                each(this.depMaps, function (depMap) {
                                    resLoadMaps.push(depMap.normalizedMap || depMap);
                                });
                                req.onResourceLoad(context, this.map, resLoadMaps);
                            }
                        }

                        //Clean up
                        cleanRegistry(id);

                        this.defined = true;
                    }

                    //Finished the define stage. Allow calling check again
                    //to allow define notifications below in the case of a
                    //cycle.
                    this.defining = false;

                    if (this.defined && !this.defineEmitted) {
                        this.defineEmitted = true;
                        this.emit('defined', this.exports);
                        this.defineEmitComplete = true;
                    }

                }
            },

            callPlugin: function () {
                var map = this.map,
                    id = map.id,
                    //Map already normalized the prefix.
                    pluginMap = makeModuleMap(map.prefix);

                //Mark this as a dependency for this plugin, so it
                //can be traced for cycles.
                this.depMaps.push(pluginMap);

                on(pluginMap, 'defined', bind(this, function (plugin) {
                    var load, normalizedMap, normalizedMod,
                        bundleId = getOwn(bundlesMap, this.map.id),
                        name = this.map.name,
                        parentName = this.map.parentMap ? this.map.parentMap.name : null,
                        localRequire = context.makeRequire(map.parentMap, {
                            enableBuildCallback: true
                        });

                    //If current map is not normalized, wait for that
                    //normalized name to load instead of continuing.
                    if (this.map.unnormalized) {
                        //Normalize the ID if the plugin allows it.
                        if (plugin.normalize) {
                            name = plugin.normalize(name, function (name) {
                                return normalize(name, parentName, true);
                            }) || '';
                        }

                        //prefix and name should already be normalized, no need
                        //for applying map config again either.
                        normalizedMap = makeModuleMap(map.prefix + '!' + name,
                                                      this.map.parentMap,
                                                      true);
                        on(normalizedMap,
                            'defined', bind(this, function (value) {
                                this.map.normalizedMap = normalizedMap;
                                this.init([], function () { return value; }, null, {
                                    enabled: true,
                                    ignore: true
                                });
                            }));

                        normalizedMod = getOwn(registry, normalizedMap.id);
                        if (normalizedMod) {
                            //Mark this as a dependency for this plugin, so it
                            //can be traced for cycles.
                            this.depMaps.push(normalizedMap);

                            if (this.events.error) {
                                normalizedMod.on('error', bind(this, function (err) {
                                    this.emit('error', err);
                                }));
                            }
                            normalizedMod.enable();
                        }

                        return;
                    }

                    //If a paths config, then just load that file instead to
                    //resolve the plugin, as it is built into that paths layer.
                    if (bundleId) {
                        this.map.url = context.nameToUrl(bundleId);
                        this.load();
                        return;
                    }

                    load = bind(this, function (value) {
                        this.init([], function () { return value; }, null, {
                            enabled: true
                        });
                    });

                    load.error = bind(this, function (err) {
                        this.inited = true;
                        this.error = err;
                        err.requireModules = [id];

                        //Remove temp unnormalized modules for this module,
                        //since they will never be resolved otherwise now.
                        eachProp(registry, function (mod) {
                            if (mod.map.id.indexOf(id + '_unnormalized') === 0) {
                                cleanRegistry(mod.map.id);
                            }
                        });

                        onError(err);
                    });

                    //Allow plugins to load other code without having to know the
                    //context or how to 'complete' the load.
                    load.fromText = bind(this, function (text, textAlt) {
                        /*jslint evil: true */
                        var moduleName = map.name,
                            moduleMap = makeModuleMap(moduleName),
                            hasInteractive = useInteractive;

                        //As of 2.1.0, support just passing the text, to reinforce
                        //fromText only being called once per resource. Still
                        //support old style of passing moduleName but discard
                        //that moduleName in favor of the internal ref.
                        if (textAlt) {
                            text = textAlt;
                        }

                        //Turn off interactive script matching for IE for any define
                        //calls in the text, then turn it back on at the end.
                        if (hasInteractive) {
                            useInteractive = false;
                        }

                        //Prime the system by creating a module instance for
                        //it.
                        getModule(moduleMap);

                        //Transfer any config to this other module.
                        if (hasProp(config.config, id)) {
                            config.config[moduleName] = config.config[id];
                        }

                        try {
                            req.exec(text);
                        } catch (e) {
                            return onError(makeError('fromtexteval',
                                             'fromText eval for ' + id +
                                            ' failed: ' + e,
                                             e,
                                             [id]));
                        }

                        if (hasInteractive) {
                            useInteractive = true;
                        }

                        //Mark this as a dependency for the plugin
                        //resource
                        this.depMaps.push(moduleMap);

                        //Support anonymous modules.
                        context.completeLoad(moduleName);

                        //Bind the value of that module to the value for this
                        //resource ID.
                        localRequire([moduleName], load);
                    });

                    //Use parentName here since the plugin's name is not reliable,
                    //could be some weird string with no path that actually wants to
                    //reference the parentName's path.
                    plugin.load(map.name, localRequire, load, config);
                }));

                context.enable(pluginMap, this);
                this.pluginMaps[pluginMap.id] = pluginMap;
            },

            enable: function () {
                enabledRegistry[this.map.id] = this;
                this.enabled = true;

                //Set flag mentioning that the module is enabling,
                //so that immediate calls to the defined callbacks
                //for dependencies do not trigger inadvertent load
                //with the depCount still being zero.
                this.enabling = true;

                //Enable each dependency
                each(this.depMaps, bind(this, function (depMap, i) {
                    var id, mod, handler;

                    if (typeof depMap === 'string') {
                        //Dependency needs to be converted to a depMap
                        //and wired up to this module.
                        depMap = makeModuleMap(depMap,
                                               (this.map.isDefine ? this.map : this.map.parentMap),
                                               false,
                                               !this.skipMap);
                        this.depMaps[i] = depMap;

                        handler = getOwn(handlers, depMap.id);

                        if (handler) {
                            this.depExports[i] = handler(this);
                            return;
                        }

                        this.depCount += 1;

                        on(depMap, 'defined', bind(this, function (depExports) {
                            if (this.undefed) {
                                return;
                            }
                            this.defineDep(i, depExports);
                            this.check();
                        }));

                        if (this.errback) {
                            on(depMap, 'error', bind(this, this.errback));
                        } else if (this.events.error) {
                            // No direct errback on this module, but something
                            // else is listening for errors, so be sure to
                            // propagate the error correctly.
                            on(depMap, 'error', bind(this, function(err) {
                                this.emit('error', err);
                            }));
                        }
                    }

                    id = depMap.id;
                    mod = registry[id];

                    //Skip special modules like 'require', 'exports', 'module'
                    //Also, don't call enable if it is already enabled,
                    //important in circular dependency cases.
                    if (!hasProp(handlers, id) && mod && !mod.enabled) {
                        context.enable(depMap, this);
                    }
                }));

                //Enable each plugin that is used in
                //a dependency
                eachProp(this.pluginMaps, bind(this, function (pluginMap) {
                    var mod = getOwn(registry, pluginMap.id);
                    if (mod && !mod.enabled) {
                        context.enable(pluginMap, this);
                    }
                }));

                this.enabling = false;

                this.check();
            },

            on: function (name, cb) {
                var cbs = this.events[name];
                if (!cbs) {
                    cbs = this.events[name] = [];
                }
                cbs.push(cb);
            },

            emit: function (name, evt) {
                each(this.events[name], function (cb) {
                    cb(evt);
                });
                if (name === 'error') {
                    //Now that the error handler was triggered, remove
                    //the listeners, since this broken Module instance
                    //can stay around for a while in the registry.
                    delete this.events[name];
                }
            }
        };

        function callGetModule(args) {
            //Skip modules already defined.
            if (!hasProp(defined, args[0])) {
                getModule(makeModuleMap(args[0], null, true)).init(args[1], args[2]);
            }
        }

        function removeListener(node, func, name, ieName) {
            //Favor detachEvent because of IE9
            //issue, see attachEvent/addEventListener comment elsewhere
            //in this file.
            if (node.detachEvent && !isOpera) {
                //Probably IE. If not it will throw an error, which will be
                //useful to know.
                if (ieName) {
                    node.detachEvent(ieName, func);
                }
            } else {
                node.removeEventListener(name, func, false);
            }
        }

        /**
         * Given an event from a script node, get the requirejs info from it,
         * and then removes the event listeners on the node.
         * @param {Event} evt
         * @returns {Object}
         */
        function getScriptData(evt) {
            //Using currentTarget instead of target for Firefox 2.0's sake. Not
            //all old browsers will be supported, but this one was easy enough
            //to support and still makes sense.
            var node = evt.currentTarget || evt.srcElement;

            //Remove the listeners once here.
            removeListener(node, context.onScriptLoad, 'load', 'onreadystatechange');
            removeListener(node, context.onScriptError, 'error');

            return {
                node: node,
                id: node && node.getAttribute('data-requiremodule')
            };
        }

        function intakeDefines() {
            var args;

            //Any defined modules in the global queue, intake them now.
            takeGlobalQueue();

            //Make sure any remaining defQueue items get properly processed.
            while (defQueue.length) {
                args = defQueue.shift();
                if (args[0] === null) {
                    return onError(makeError('mismatch', 'Mismatched anonymous define() module: ' +
                        args[args.length - 1]));
                } else {
                    //args are id, deps, factory. Should be normalized by the
                    //define() function.
                    callGetModule(args);
                }
            }
            context.defQueueMap = {};
        }

        context = {
            config: config,
            contextName: contextName,
            registry: registry,
            defined: defined,
            urlFetched: urlFetched,
            defQueue: defQueue,
            defQueueMap: {},
            Module: Module,
            makeModuleMap: makeModuleMap,
            nextTick: req.nextTick,
            onError: onError,

            /**
             * Set a configuration for the context.
             * @param {Object} cfg config object to integrate.
             */
            configure: function (cfg) {
                //Make sure the baseUrl ends in a slash.
                if (cfg.baseUrl) {
                    if (cfg.baseUrl.charAt(cfg.baseUrl.length - 1) !== '/') {
                        cfg.baseUrl += '/';
                    }
                }

                // Convert old style urlArgs string to a function.
                if (typeof cfg.urlArgs === 'string') {
                    var urlArgs = cfg.urlArgs;
                    cfg.urlArgs = function(id, url) {
                        return (url.indexOf('?') === -1 ? '?' : '&') + urlArgs;
                    };
                }

                //Save off the paths since they require special processing,
                //they are additive.
                var shim = config.shim,
                    objs = {
                        paths: true,
                        bundles: true,
                        config: true,
                        map: true
                    };

                eachProp(cfg, function (value, prop) {
                    if (objs[prop]) {
                        if (!config[prop]) {
                            config[prop] = {};
                        }
                        mixin(config[prop], value, true, true);
                    } else {
                        config[prop] = value;
                    }
                });

                //Reverse map the bundles
                if (cfg.bundles) {
                    eachProp(cfg.bundles, function (value, prop) {
                        each(value, function (v) {
                            if (v !== prop) {
                                bundlesMap[v] = prop;
                            }
                        });
                    });
                }

                //Merge shim
                if (cfg.shim) {
                    eachProp(cfg.shim, function (value, id) {
                        //Normalize the structure
                        if (isArray(value)) {
                            value = {
                                deps: value
                            };
                        }
                        if ((value.exports || value.init) && !value.exportsFn) {
                            value.exportsFn = context.makeShimExports(value);
                        }
                        shim[id] = value;
                    });
                    config.shim = shim;
                }

                //Adjust packages if necessary.
                if (cfg.packages) {
                    each(cfg.packages, function (pkgObj) {
                        var location, name;

                        pkgObj = typeof pkgObj === 'string' ? {name: pkgObj} : pkgObj;

                        name = pkgObj.name;
                        location = pkgObj.location;
                        if (location) {
                            config.paths[name] = pkgObj.location;
                        }

                        //Save pointer to main module ID for pkg name.
                        //Remove leading dot in main, so main paths are normalized,
                        //and remove any trailing .js, since different package
                        //envs have different conventions: some use a module name,
                        //some use a file name.
                        config.pkgs[name] = pkgObj.name + '/' + (pkgObj.main || 'main')
                                     .replace(currDirRegExp, '')
                                     .replace(jsSuffixRegExp, '');
                    });
                }

                //If there are any "waiting to execute" modules in the registry,
                //update the maps for them, since their info, like URLs to load,
                //may have changed.
                eachProp(registry, function (mod, id) {
                    //If module already has init called, since it is too
                    //late to modify them, and ignore unnormalized ones
                    //since they are transient.
                    if (!mod.inited && !mod.map.unnormalized) {
                        mod.map = makeModuleMap(id, null, true);
                    }
                });

                //If a deps array or a config callback is specified, then call
                //require with those args. This is useful when require is defined as a
                //config object before require.js is loaded.
                if (cfg.deps || cfg.callback) {
                    context.require(cfg.deps || [], cfg.callback);
                }
            },

            makeShimExports: function (value) {
                function fn() {
                    var ret;
                    if (value.init) {
                        ret = value.init.apply(global, arguments);
                    }
                    return ret || (value.exports && getGlobal(value.exports));
                }
                return fn;
            },

            makeRequire: function (relMap, options) {
                options = options || {};

                function localRequire(deps, callback, errback) {
                    var id, map, requireMod;

                    if (options.enableBuildCallback && callback && isFunction(callback)) {
                        callback.__requireJsBuild = true;
                    }

                    if (typeof deps === 'string') {
                        if (isFunction(callback)) {
                            //Invalid call
                            return onError(makeError('requireargs', 'Invalid require call'), errback);
                        }

                        //If require|exports|module are requested, get the
                        //value for them from the special handlers. Caveat:
                        //this only works while module is being defined.
                        if (relMap && hasProp(handlers, deps)) {
                            return handlers[deps](registry[relMap.id]);
                        }

                        //Synchronous access to one module. If require.get is
                        //available (as in the Node adapter), prefer that.
                        if (req.get) {
                            return req.get(context, deps, relMap, localRequire);
                        }

                        //Normalize module name, if it contains . or ..
                        map = makeModuleMap(deps, relMap, false, true);
                        id = map.id;

                        if (!hasProp(defined, id)) {
                            return onError(makeError('notloaded', 'Module name "' +
                                        id +
                                        '" has not been loaded yet for context: ' +
                                        contextName +
                                        (relMap ? '' : '. Use require([])')));
                        }
                        return defined[id];
                    }

                    //Grab defines waiting in the global queue.
                    intakeDefines();

                    //Mark all the dependencies as needing to be loaded.
                    context.nextTick(function () {
                        //Some defines could have been added since the
                        //require call, collect them.
                        intakeDefines();

                        requireMod = getModule(makeModuleMap(null, relMap));

                        //Store if map config should be applied to this require
                        //call for dependencies.
                        requireMod.skipMap = options.skipMap;

                        requireMod.init(deps, callback, errback, {
                            enabled: true
                        });

                        checkLoaded();
                    });

                    return localRequire;
                }

                mixin(localRequire, {
                    isBrowser: isBrowser,

                    /**
                     * Converts a module name + .extension into an URL path.
                     * *Requires* the use of a module name. It does not support using
                     * plain URLs like nameToUrl.
                     */
                    toUrl: function (moduleNamePlusExt) {
                        var ext,
                            index = moduleNamePlusExt.lastIndexOf('.'),
                            segment = moduleNamePlusExt.split('/')[0],
                            isRelative = segment === '.' || segment === '..';

                        //Have a file extension alias, and it is not the
                        //dots from a relative path.
                        if (index !== -1 && (!isRelative || index > 1)) {
                            ext = moduleNamePlusExt.substring(index, moduleNamePlusExt.length);
                            moduleNamePlusExt = moduleNamePlusExt.substring(0, index);
                        }

                        return context.nameToUrl(normalize(moduleNamePlusExt,
                                                relMap && relMap.id, true), ext,  true);
                    },

                    defined: function (id) {
                        return hasProp(defined, makeModuleMap(id, relMap, false, true).id);
                    },

                    specified: function (id) {
                        id = makeModuleMap(id, relMap, false, true).id;
                        return hasProp(defined, id) || hasProp(registry, id);
                    }
                });

                //Only allow undef on top level require calls
                if (!relMap) {
                    localRequire.undef = function (id) {
                        //Bind any waiting define() calls to this context,
                        //fix for #408
                        takeGlobalQueue();

                        var map = makeModuleMap(id, relMap, true),
                            mod = getOwn(registry, id);

                        mod.undefed = true;
                        removeScript(id);

                        delete defined[id];
                        delete urlFetched[map.url];
                        delete undefEvents[id];

                        //Clean queued defines too. Go backwards
                        //in array so that the splices do not
                        //mess up the iteration.
                        eachReverse(defQueue, function(args, i) {
                            if (args[0] === id) {
                                defQueue.splice(i, 1);
                            }
                        });
                        delete context.defQueueMap[id];

                        if (mod) {
                            //Hold on to listeners in case the
                            //module will be attempted to be reloaded
                            //using a different config.
                            if (mod.events.defined) {
                                undefEvents[id] = mod.events;
                            }

                            cleanRegistry(id);
                        }
                    };
                }

                return localRequire;
            },

            /**
             * Called to enable a module if it is still in the registry
             * awaiting enablement. A second arg, parent, the parent module,
             * is passed in for context, when this method is overridden by
             * the optimizer. Not shown here to keep code compact.
             */
            enable: function (depMap) {
                var mod = getOwn(registry, depMap.id);
                if (mod) {
                    getModule(depMap).enable();
                }
            },

            /**
             * Internal method used by environment adapters to complete a load event.
             * A load event could be a script load or just a load pass from a synchronous
             * load call.
             * @param {String} moduleName the name of the module to potentially complete.
             */
            completeLoad: function (moduleName) {
                var found, args, mod,
                    shim = getOwn(config.shim, moduleName) || {},
                    shExports = shim.exports;

                takeGlobalQueue();

                while (defQueue.length) {
                    args = defQueue.shift();
                    if (args[0] === null) {
                        args[0] = moduleName;
                        //If already found an anonymous module and bound it
                        //to this name, then this is some other anon module
                        //waiting for its completeLoad to fire.
                        if (found) {
                            break;
                        }
                        found = true;
                    } else if (args[0] === moduleName) {
                        //Found matching define call for this script!
                        found = true;
                    }

                    callGetModule(args);
                }
                context.defQueueMap = {};

                //Do this after the cycle of callGetModule in case the result
                //of those calls/init calls changes the registry.
                mod = getOwn(registry, moduleName);

                if (!found && !hasProp(defined, moduleName) && mod && !mod.inited) {
                    if (config.enforceDefine && (!shExports || !getGlobal(shExports))) {
                        if (hasPathFallback(moduleName)) {
                            return;
                        } else {
                            return onError(makeError('nodefine',
                                             'No define call for ' + moduleName,
                                             null,
                                             [moduleName]));
                        }
                    } else {
                        //A script that does not call define(), so just simulate
                        //the call for it.
                        callGetModule([moduleName, (shim.deps || []), shim.exportsFn]);
                    }
                }

                checkLoaded();
            },

            /**
             * Converts a module name to a file path. Supports cases where
             * moduleName may actually be just an URL.
             * Note that it **does not** call normalize on the moduleName,
             * it is assumed to have already been normalized. This is an
             * internal API, not a public one. Use toUrl for the public API.
             */
            nameToUrl: function (moduleName, ext, skipExt) {
                var paths, syms, i, parentModule, url,
                    parentPath, bundleId,
                    pkgMain = getOwn(config.pkgs, moduleName);

                if (pkgMain) {
                    moduleName = pkgMain;
                }

                bundleId = getOwn(bundlesMap, moduleName);

                if (bundleId) {
                    return context.nameToUrl(bundleId, ext, skipExt);
                }

                //If a colon is in the URL, it indicates a protocol is used and it is just
                //an URL to a file, or if it starts with a slash, contains a query arg (i.e. ?)
                //or ends with .js, then assume the user meant to use an url and not a module id.
                //The slash is important for protocol-less URLs as well as full paths.
                if (req.jsExtRegExp.test(moduleName)) {
                    //Just a plain path, not module name lookup, so just return it.
                    //Add extension if it is included. This is a bit wonky, only non-.js things pass
                    //an extension, this method probably needs to be reworked.
                    url = moduleName + (ext || '');
                } else {
                    //A module that needs to be converted to a path.
                    paths = config.paths;

                    syms = moduleName.split('/');
                    //For each module name segment, see if there is a path
                    //registered for it. Start with most specific name
                    //and work up from it.
                    for (i = syms.length; i > 0; i -= 1) {
                        parentModule = syms.slice(0, i).join('/');

                        parentPath = getOwn(paths, parentModule);
                        if (parentPath) {
                            //If an array, it means there are a few choices,
                            //Choose the one that is desired
                            if (isArray(parentPath)) {
                                parentPath = parentPath[0];
                            }
                            syms.splice(0, i, parentPath);
                            break;
                        }
                    }

                    //Join the path parts together, then figure out if baseUrl is needed.
                    url = syms.join('/');
                    url += (ext || (/^data\:|^blob\:|\?/.test(url) || skipExt ? '' : '.js'));
                    url = (url.charAt(0) === '/' || url.match(/^[\w\+\.\-]+:/) ? '' : config.baseUrl) + url;
                }

                return config.urlArgs && !/^blob\:/.test(url) ?
                       url + config.urlArgs(moduleName, url) : url;
            },

            //Delegates to req.load. Broken out as a separate function to
            //allow overriding in the optimizer.
            load: function (id, url) {
                req.load(context, id, url);
            },

            /**
             * Executes a module callback function. Broken out as a separate function
             * solely to allow the build system to sequence the files in the built
             * layer in the right sequence.
             *
             * @private
             */
            execCb: function (name, callback, args, exports) {
                return callback.apply(exports, args);
            },

            /**
             * callback for script loads, used to check status of loading.
             *
             * @param {Event} evt the event from the browser for the script
             * that was loaded.
             */
            onScriptLoad: function (evt) {
                //Using currentTarget instead of target for Firefox 2.0's sake. Not
                //all old browsers will be supported, but this one was easy enough
                //to support and still makes sense.
                if (evt.type === 'load' ||
                        (readyRegExp.test((evt.currentTarget || evt.srcElement).readyState))) {
                    //Reset interactive script so a script node is not held onto for
                    //to long.
                    interactiveScript = null;

                    //Pull out the name of the module and the context.
                    var data = getScriptData(evt);
                    context.completeLoad(data.id);
                }
            },

            /**
             * Callback for script errors.
             */
            onScriptError: function (evt) {
                var data = getScriptData(evt);
                if (!hasPathFallback(data.id)) {
                    var parents = [];
                    eachProp(registry, function(value, key) {
                        if (key.indexOf('_@r') !== 0) {
                            each(value.depMaps, function(depMap) {
                                if (depMap.id === data.id) {
                                    parents.push(key);
                                    return true;
                                }
                            });
                        }
                    });
                    return onError(makeError('scripterror', 'Script error for "' + data.id +
                                             (parents.length ?
                                             '", needed by: ' + parents.join(', ') :
                                             '"'), evt, [data.id]));
                }
            }
        };

        context.require = context.makeRequire();
        return context;
    }

    /**
     * Main entry point.
     *
     * If the only argument to require is a string, then the module that
     * is represented by that string is fetched for the appropriate context.
     *
     * If the first argument is an array, then it will be treated as an array
     * of dependency string names to fetch. An optional function callback can
     * be specified to execute when all of those dependencies are available.
     *
     * Make a local req variable to help Caja compliance (it assumes things
     * on a require that are not standardized), and to give a short
     * name for minification/local scope use.
     */
    req = requirejs = function (deps, callback, errback, optional) {

        //Find the right context, use default
        var context, config,
            contextName = defContextName;

        // Determine if have config object in the call.
        if (!isArray(deps) && typeof deps !== 'string') {
            // deps is a config object
            config = deps;
            if (isArray(callback)) {
                // Adjust args if there are dependencies
                deps = callback;
                callback = errback;
                errback = optional;
            } else {
                deps = [];
            }
        }

        if (config && config.context) {
            contextName = config.context;
        }

        context = getOwn(contexts, contextName);
        if (!context) {
            context = contexts[contextName] = req.s.newContext(contextName);
        }

        if (config) {
            context.configure(config);
        }

        return context.require(deps, callback, errback);
    };

    /**
     * Support require.config() to make it easier to cooperate with other
     * AMD loaders on globally agreed names.
     */
    req.config = function (config) {
        return req(config);
    };

    /**
     * Execute something after the current tick
     * of the event loop. Override for other envs
     * that have a better solution than setTimeout.
     * @param  {Function} fn function to execute later.
     */
    req.nextTick = typeof setTimeout !== 'undefined' ? function (fn) {
        setTimeout(fn, 4);
    } : function (fn) { fn(); };

    /**
     * Export require as a global, but only if it does not already exist.
     */
    if (!require) {
        require = req;
    }

    req.version = version;

    //Used to filter out dependencies that are already paths.
    req.jsExtRegExp = /^\/|:|\?|\.js$/;
    req.isBrowser = isBrowser;
    s = req.s = {
        contexts: contexts,
        newContext: newContext
    };

    //Create default context.
    req({});

    //Exports some context-sensitive methods on global require.
    each([
        'toUrl',
        'undef',
        'defined',
        'specified'
    ], function (prop) {
        //Reference from contexts instead of early binding to default context,
        //so that during builds, the latest instance of the default context
        //with its config gets used.
        req[prop] = function () {
            var ctx = contexts[defContextName];
            return ctx.require[prop].apply(ctx, arguments);
        };
    });

    if (isBrowser) {
        head = s.head = document.getElementsByTagName('head')[0];
        //If BASE tag is in play, using appendChild is a problem for IE6.
        //When that browser dies, this can be removed. Details in this jQuery bug:
        //http://dev.jquery.com/ticket/2709
        baseElement = document.getElementsByTagName('base')[0];
        if (baseElement) {
            head = s.head = baseElement.parentNode;
        }
    }

    /**
     * Any errors that require explicitly generates will be passed to this
     * function. Intercept/override it if you want custom error handling.
     * @param {Error} err the error object.
     */
    req.onError = defaultOnError;

    /**
     * Creates the node for the load command. Only used in browser envs.
     */
    req.createNode = function (config, moduleName, url) {
        var node = config.xhtml ?
                document.createElementNS('http://www.w3.org/1999/xhtml', 'html:script') :
                document.createElement('script');
        node.type = config.scriptType || 'text/javascript';
        node.charset = 'utf-8';
        node.async = true;
        return node;
    };

    /**
     * Does the request to load a module for the browser case.
     * Make this a separate function to allow other environments
     * to override it.
     *
     * @param {Object} context the require context to find state.
     * @param {String} moduleName the name of the module.
     * @param {Object} url the URL to the module.
     */
    req.load = function (context, moduleName, url) {
        var config = (context && context.config) || {},
            node;
        if (isBrowser) {
            //In the browser so use a script tag
            node = req.createNode(config, moduleName, url);

            node.setAttribute('data-requirecontext', context.contextName);
            node.setAttribute('data-requiremodule', moduleName);

            //Set up load listener. Test attachEvent first because IE9 has
            //a subtle issue in its addEventListener and script onload firings
            //that do not match the behavior of all other browsers with
            //addEventListener support, which fire the onload event for a
            //script right after the script execution. See:
            //https://connect.microsoft.com/IE/feedback/details/648057/script-onload-event-is-not-fired-immediately-after-script-execution
            //UNFORTUNATELY Opera implements attachEvent but does not follow the script
            //script execution mode.
            if (node.attachEvent &&
                    //Check if node.attachEvent is artificially added by custom script or
                    //natively supported by browser
                    //read https://github.com/requirejs/requirejs/issues/187
                    //if we can NOT find [native code] then it must NOT natively supported.
                    //in IE8, node.attachEvent does not have toString()
                    //Note the test for "[native code" with no closing brace, see:
                    //https://github.com/requirejs/requirejs/issues/273
                    !(node.attachEvent.toString && node.attachEvent.toString().indexOf('[native code') < 0) &&
                    !isOpera) {
                //Probably IE. IE (at least 6-8) do not fire
                //script onload right after executing the script, so
                //we cannot tie the anonymous define call to a name.
                //However, IE reports the script as being in 'interactive'
                //readyState at the time of the define call.
                useInteractive = true;

                node.attachEvent('onreadystatechange', context.onScriptLoad);
                //It would be great to add an error handler here to catch
                //404s in IE9+. However, onreadystatechange will fire before
                //the error handler, so that does not help. If addEventListener
                //is used, then IE will fire error before load, but we cannot
                //use that pathway given the connect.microsoft.com issue
                //mentioned above about not doing the 'script execute,
                //then fire the script load event listener before execute
                //next script' that other browsers do.
                //Best hope: IE10 fixes the issues,
                //and then destroys all installs of IE 6-9.
                //node.attachEvent('onerror', context.onScriptError);
            } else {
                node.addEventListener('load', context.onScriptLoad, false);
                node.addEventListener('error', context.onScriptError, false);
            }
            node.src = url;

            //Calling onNodeCreated after all properties on the node have been
            //set, but before it is placed in the DOM.
            if (config.onNodeCreated) {
                config.onNodeCreated(node, config, moduleName, url);
            }

            //For some cache cases in IE 6-8, the script executes before the end
            //of the appendChild execution, so to tie an anonymous define
            //call to the module name (which is stored on the node), hold on
            //to a reference to this node, but clear after the DOM insertion.
            currentlyAddingScript = node;
            if (baseElement) {
                head.insertBefore(node, baseElement);
            } else {
                head.appendChild(node);
            }
            currentlyAddingScript = null;

            return node;
        } else if (isWebWorker) {
            try {
                //In a web worker, use importScripts. This is not a very
                //efficient use of importScripts, importScripts will block until
                //its script is downloaded and evaluated. However, if web workers
                //are in play, the expectation is that a build has been done so
                //that only one script needs to be loaded anyway. This may need
                //to be reevaluated if other use cases become common.

                // Post a task to the event loop to work around a bug in WebKit
                // where the worker gets garbage-collected after calling
                // importScripts(): https://webkit.org/b/153317
                setTimeout(function() {}, 0);
                importScripts(url);

                //Account for anonymous modules
                context.completeLoad(moduleName);
            } catch (e) {
                context.onError(makeError('importscripts',
                                'importScripts failed for ' +
                                    moduleName + ' at ' + url,
                                e,
                                [moduleName]));
            }
        }
    };

    function getInteractiveScript() {
        if (interactiveScript && interactiveScript.readyState === 'interactive') {
            return interactiveScript;
        }

        eachReverse(scripts(), function (script) {
            if (script.readyState === 'interactive') {
                return (interactiveScript = script);
            }
        });
        return interactiveScript;
    }

    //Look for a data-main script attribute, which could also adjust the baseUrl.
    if (isBrowser && !cfg.skipDataMain) {
        //Figure out baseUrl. Get it from the script tag with require.js in it.
        eachReverse(scripts(), function (script) {
            //Set the 'head' where we can append children by
            //using the script's parent.
            if (!head) {
                head = script.parentNode;
            }

            //Look for a data-main attribute to set main script for the page
            //to load. If it is there, the path to data main becomes the
            //baseUrl, if it is not already set.
            dataMain = script.getAttribute('data-main');
            if (dataMain) {
                //Preserve dataMain in case it is a path (i.e. contains '?')
                mainScript = dataMain;

                //Set final baseUrl if there is not already an explicit one,
                //but only do so if the data-main value is not a loader plugin
                //module ID.
                if (!cfg.baseUrl && mainScript.indexOf('!') === -1) {
                    //Pull off the directory of data-main for use as the
                    //baseUrl.
                    src = mainScript.split('/');
                    mainScript = src.pop();
                    subPath = src.length ? src.join('/')  + '/' : './';

                    cfg.baseUrl = subPath;
                }

                //Strip off any trailing .js since mainScript is now
                //like a module name.
                mainScript = mainScript.replace(jsSuffixRegExp, '');

                //If mainScript is still a path, fall back to dataMain
                if (req.jsExtRegExp.test(mainScript)) {
                    mainScript = dataMain;
                }

                //Put the data-main script in the files to load.
                cfg.deps = cfg.deps ? cfg.deps.concat(mainScript) : [mainScript];

                return true;
            }
        });
    }

    /**
     * The function that handles definitions of modules. Differs from
     * require() in that a string for the module should be the first argument,
     * and the function to execute after dependencies are loaded should
     * return a value to define the module corresponding to the first argument's
     * name.
     */
    define = function (name, deps, callback) {
        var node, context;

        //Allow for anonymous modules
        if (typeof name !== 'string') {
            //Adjust args appropriately
            callback = deps;
            deps = name;
            name = null;
        }

        //This module may not have dependencies
        if (!isArray(deps)) {
            callback = deps;
            deps = null;
        }

        //If no name, and callback is a function, then figure out if it a
        //CommonJS thing with dependencies.
        if (!deps && isFunction(callback)) {
            deps = [];
            //Remove comments from the callback string,
            //look for require calls, and pull them into the dependencies,
            //but only if there are function args.
            if (callback.length) {
                callback
                    .toString()
                    .replace(commentRegExp, commentReplace)
                    .replace(cjsRequireRegExp, function (match, dep) {
                        deps.push(dep);
                    });

                //May be a CommonJS thing even without require calls, but still
                //could use exports, and module. Avoid doing exports and module
                //work though if it just needs require.
                //REQUIRES the function to expect the CommonJS variables in the
                //order listed below.
                deps = (callback.length === 1 ? ['require'] : ['require', 'exports', 'module']).concat(deps);
            }
        }

        //If in IE 6-8 and hit an anonymous define() call, do the interactive
        //work.
        if (useInteractive) {
            node = currentlyAddingScript || getInteractiveScript();
            if (node) {
                if (!name) {
                    name = node.getAttribute('data-requiremodule');
                }
                context = contexts[node.getAttribute('data-requirecontext')];
            }
        }

        //Always save off evaluating the def call until the script onload handler.
        //This allows multiple modules to be in a file without prematurely
        //tracing dependencies, and allows for anonymous module support,
        //where the module name is not known until the script onload event
        //occurs. If no context, use the global queue, and get it processed
        //in the onscript load callback.
        if (context) {
            context.defQueue.push([name, deps, callback]);
            context.defQueueMap[name] = true;
        } else {
            globalDefQueue.push([name, deps, callback]);
        }
    };

    define.amd = {
        jQuery: true
    };

    /**
     * Executes the text. Normally just uses eval, but can be modified
     * to use a better, environment-specific call. Only used for transpiling
     * loader plugins, not for plain JS modules.
     * @param {String} text the text to execute/evaluate.
     */
    req.exec = function (text) {
        /*jslint evil: true */
        return eval(text);
    };

    //Set up with config info.
    req(cfg);
}(this, (typeof setTimeout === 'undefined' ? undefined : setTimeout)));

class Sonic {

    static state(value){
        return new State(value)
    }

}