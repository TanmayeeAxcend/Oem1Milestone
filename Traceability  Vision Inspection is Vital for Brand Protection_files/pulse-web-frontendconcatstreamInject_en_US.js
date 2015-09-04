/* Auto generated, hash = 6s67q99eefwv8eg95dxq2xpyd */
//     Underscore.js 1.6.0
//     http://underscorejs.org
//     (c) 2009-2014 Jeremy Ashkenas, DocumentCloud and Investigative Reporters & Editors
//     Underscore may be freely distributed under the MIT license.
(function(){var n=this,t=n._,r={},e=Array.prototype,u=Object.prototype,i=Function.prototype,a=e.push,o=e.slice,c=e.concat,l=u.toString,f=u.hasOwnProperty,s=e.forEach,p=e.map,h=e.reduce,v=e.reduceRight,g=e.filter,d=e.every,m=e.some,y=e.indexOf,b=e.lastIndexOf,x=Array.isArray,w=Object.keys,_=i.bind,j=function(n){return n instanceof j?n:this instanceof j?void(this._wrapped=n):new j(n)};"undefined"!=typeof exports?("undefined"!=typeof module&&module.exports&&(exports=module.exports=j),exports._=j):n._=j,j.VERSION="1.6.0";var A=j.each=j.forEach=function(n,t,e){if(null==n)return n;if(s&&n.forEach===s)n.forEach(t,e);else if(n.length===+n.length){for(var u=0,i=n.length;i>u;u++)if(t.call(e,n[u],u,n)===r)return}else for(var a=j.keys(n),u=0,i=a.length;i>u;u++)if(t.call(e,n[a[u]],a[u],n)===r)return;return n};j.map=j.collect=function(n,t,r){var e=[];return null==n?e:p&&n.map===p?n.map(t,r):(A(n,function(n,u,i){e.push(t.call(r,n,u,i))}),e)};var O="Reduce of empty array with no initial value";j.reduce=j.foldl=j.inject=function(n,t,r,e){var u=arguments.length>2;if(null==n&&(n=[]),h&&n.reduce===h)return e&&(t=j.bind(t,e)),u?n.reduce(t,r):n.reduce(t);if(A(n,function(n,i,a){u?r=t.call(e,r,n,i,a):(r=n,u=!0)}),!u)throw new TypeError(O);return r},j.reduceRight=j.foldr=function(n,t,r,e){var u=arguments.length>2;if(null==n&&(n=[]),v&&n.reduceRight===v)return e&&(t=j.bind(t,e)),u?n.reduceRight(t,r):n.reduceRight(t);var i=n.length;if(i!==+i){var a=j.keys(n);i=a.length}if(A(n,function(o,c,l){c=a?a[--i]:--i,u?r=t.call(e,r,n[c],c,l):(r=n[c],u=!0)}),!u)throw new TypeError(O);return r},j.find=j.detect=function(n,t,r){var e;return k(n,function(n,u,i){return t.call(r,n,u,i)?(e=n,!0):void 0}),e},j.filter=j.select=function(n,t,r){var e=[];return null==n?e:g&&n.filter===g?n.filter(t,r):(A(n,function(n,u,i){t.call(r,n,u,i)&&e.push(n)}),e)},j.reject=function(n,t,r){return j.filter(n,function(n,e,u){return!t.call(r,n,e,u)},r)},j.every=j.all=function(n,t,e){t||(t=j.identity);var u=!0;return null==n?u:d&&n.every===d?n.every(t,e):(A(n,function(n,i,a){return(u=u&&t.call(e,n,i,a))?void 0:r}),!!u)};var k=j.some=j.any=function(n,t,e){t||(t=j.identity);var u=!1;return null==n?u:m&&n.some===m?n.some(t,e):(A(n,function(n,i,a){return u||(u=t.call(e,n,i,a))?r:void 0}),!!u)};j.contains=j.include=function(n,t){return null==n?!1:y&&n.indexOf===y?n.indexOf(t)!=-1:k(n,function(n){return n===t})},j.invoke=function(n,t){var r=o.call(arguments,2),e=j.isFunction(t);return j.map(n,function(n){return(e?t:n[t]).apply(n,r)})},j.pluck=function(n,t){return j.map(n,j.property(t))},j.where=function(n,t){return j.filter(n,j.matches(t))},j.findWhere=function(n,t){return j.find(n,j.matches(t))},j.max=function(n,t,r){if(!t&&j.isArray(n)&&n[0]===+n[0]&&n.length<65535)return Math.max.apply(Math,n);var e=-1/0,u=-1/0;return A(n,function(n,i,a){var o=t?t.call(r,n,i,a):n;o>u&&(e=n,u=o)}),e},j.min=function(n,t,r){if(!t&&j.isArray(n)&&n[0]===+n[0]&&n.length<65535)return Math.min.apply(Math,n);var e=1/0,u=1/0;return A(n,function(n,i,a){var o=t?t.call(r,n,i,a):n;u>o&&(e=n,u=o)}),e},j.shuffle=function(n){var t,r=0,e=[];return A(n,function(n){t=j.random(r++),e[r-1]=e[t],e[t]=n}),e},j.sample=function(n,t,r){return null==t||r?(n.length!==+n.length&&(n=j.values(n)),n[j.random(n.length-1)]):j.shuffle(n).slice(0,Math.max(0,t))};var E=function(n){return null==n?j.identity:j.isFunction(n)?n:j.property(n)};j.sortBy=function(n,t,r){return t=E(t),j.pluck(j.map(n,function(n,e,u){return{value:n,index:e,criteria:t.call(r,n,e,u)}}).sort(function(n,t){var r=n.criteria,e=t.criteria;if(r!==e){if(r>e||r===void 0)return 1;if(e>r||e===void 0)return-1}return n.index-t.index}),"value")};var F=function(n){return function(t,r,e){var u={};return r=E(r),A(t,function(i,a){var o=r.call(e,i,a,t);n(u,o,i)}),u}};j.groupBy=F(function(n,t,r){j.has(n,t)?n[t].push(r):n[t]=[r]}),j.indexBy=F(function(n,t,r){n[t]=r}),j.countBy=F(function(n,t){j.has(n,t)?n[t]++:n[t]=1}),j.sortedIndex=function(n,t,r,e){r=E(r);for(var u=r.call(e,t),i=0,a=n.length;a>i;){var o=i+a>>>1;r.call(e,n[o])<u?i=o+1:a=o}return i},j.toArray=function(n){return n?j.isArray(n)?o.call(n):n.length===+n.length?j.map(n,j.identity):j.values(n):[]},j.size=function(n){return null==n?0:n.length===+n.length?n.length:j.keys(n).length},j.first=j.head=j.take=function(n,t,r){return null==n?void 0:null==t||r?n[0]:0>t?[]:o.call(n,0,t)},j.initial=function(n,t,r){return o.call(n,0,n.length-(null==t||r?1:t))},j.last=function(n,t,r){return null==n?void 0:null==t||r?n[n.length-1]:o.call(n,Math.max(n.length-t,0))},j.rest=j.tail=j.drop=function(n,t,r){return o.call(n,null==t||r?1:t)},j.compact=function(n){return j.filter(n,j.identity)};var M=function(n,t,r){return t&&j.every(n,j.isArray)?c.apply(r,n):(A(n,function(n){j.isArray(n)||j.isArguments(n)?t?a.apply(r,n):M(n,t,r):r.push(n)}),r)};j.flatten=function(n,t){return M(n,t,[])},j.without=function(n){return j.difference(n,o.call(arguments,1))},j.partition=function(n,t){var r=[],e=[];return A(n,function(n){(t(n)?r:e).push(n)}),[r,e]},j.uniq=j.unique=function(n,t,r,e){j.isFunction(t)&&(e=r,r=t,t=!1);var u=r?j.map(n,r,e):n,i=[],a=[];return A(u,function(r,e){(t?e&&a[a.length-1]===r:j.contains(a,r))||(a.push(r),i.push(n[e]))}),i},j.union=function(){return j.uniq(j.flatten(arguments,!0))},j.intersection=function(n){var t=o.call(arguments,1);return j.filter(j.uniq(n),function(n){return j.every(t,function(t){return j.contains(t,n)})})},j.difference=function(n){var t=c.apply(e,o.call(arguments,1));return j.filter(n,function(n){return!j.contains(t,n)})},j.zip=function(){for(var n=j.max(j.pluck(arguments,"length").concat(0)),t=new Array(n),r=0;n>r;r++)t[r]=j.pluck(arguments,""+r);return t},j.object=function(n,t){if(null==n)return{};for(var r={},e=0,u=n.length;u>e;e++)t?r[n[e]]=t[e]:r[n[e][0]]=n[e][1];return r},j.indexOf=function(n,t,r){if(null==n)return-1;var e=0,u=n.length;if(r){if("number"!=typeof r)return e=j.sortedIndex(n,t),n[e]===t?e:-1;e=0>r?Math.max(0,u+r):r}if(y&&n.indexOf===y)return n.indexOf(t,r);for(;u>e;e++)if(n[e]===t)return e;return-1},j.lastIndexOf=function(n,t,r){if(null==n)return-1;var e=null!=r;if(b&&n.lastIndexOf===b)return e?n.lastIndexOf(t,r):n.lastIndexOf(t);for(var u=e?r:n.length;u--;)if(n[u]===t)return u;return-1},j.range=function(n,t,r){arguments.length<=1&&(t=n||0,n=0),r=arguments[2]||1;for(var e=Math.max(Math.ceil((t-n)/r),0),u=0,i=new Array(e);e>u;)i[u++]=n,n+=r;return i};var R=function(){};j.bind=function(n,t){var r,e;if(_&&n.bind===_)return _.apply(n,o.call(arguments,1));if(!j.isFunction(n))throw new TypeError;return r=o.call(arguments,2),e=function(){if(!(this instanceof e))return n.apply(t,r.concat(o.call(arguments)));R.prototype=n.prototype;var u=new R;R.prototype=null;var i=n.apply(u,r.concat(o.call(arguments)));return Object(i)===i?i:u}},j.partial=function(n){var t=o.call(arguments,1);return function(){for(var r=0,e=t.slice(),u=0,i=e.length;i>u;u++)e[u]===j&&(e[u]=arguments[r++]);for(;r<arguments.length;)e.push(arguments[r++]);return n.apply(this,e)}},j.bindAll=function(n){var t=o.call(arguments,1);if(0===t.length)throw new Error("bindAll must be passed function names");return A(t,function(t){n[t]=j.bind(n[t],n)}),n},j.memoize=function(n,t){var r={};return t||(t=j.identity),function(){var e=t.apply(this,arguments);return j.has(r,e)?r[e]:r[e]=n.apply(this,arguments)}},j.delay=function(n,t){var r=o.call(arguments,2);return setTimeout(function(){return n.apply(null,r)},t)},j.defer=function(n){return j.delay.apply(j,[n,1].concat(o.call(arguments,1)))},j.throttle=function(n,t,r){var e,u,i,a=null,o=0;r||(r={});var c=function(){o=r.leading===!1?0:j.now(),a=null,i=n.apply(e,u),e=u=null};return function(){var l=j.now();o||r.leading!==!1||(o=l);var f=t-(l-o);return e=this,u=arguments,0>=f?(clearTimeout(a),a=null,o=l,i=n.apply(e,u),e=u=null):a||r.trailing===!1||(a=setTimeout(c,f)),i}},j.debounce=function(n,t,r){var e,u,i,a,o,c=function(){var l=j.now()-a;t>l?e=setTimeout(c,t-l):(e=null,r||(o=n.apply(i,u),i=u=null))};return function(){i=this,u=arguments,a=j.now();var l=r&&!e;return e||(e=setTimeout(c,t)),l&&(o=n.apply(i,u),i=u=null),o}},j.once=function(n){var t,r=!1;return function(){return r?t:(r=!0,t=n.apply(this,arguments),n=null,t)}},j.wrap=function(n,t){return j.partial(t,n)},j.compose=function(){var n=arguments;return function(){for(var t=arguments,r=n.length-1;r>=0;r--)t=[n[r].apply(this,t)];return t[0]}},j.after=function(n,t){return function(){return--n<1?t.apply(this,arguments):void 0}},j.keys=function(n){if(!j.isObject(n))return[];if(w)return w(n);var t=[];for(var r in n)j.has(n,r)&&t.push(r);return t},j.values=function(n){for(var t=j.keys(n),r=t.length,e=new Array(r),u=0;r>u;u++)e[u]=n[t[u]];return e},j.pairs=function(n){for(var t=j.keys(n),r=t.length,e=new Array(r),u=0;r>u;u++)e[u]=[t[u],n[t[u]]];return e},j.invert=function(n){for(var t={},r=j.keys(n),e=0,u=r.length;u>e;e++)t[n[r[e]]]=r[e];return t},j.functions=j.methods=function(n){var t=[];for(var r in n)j.isFunction(n[r])&&t.push(r);return t.sort()},j.extend=function(n){return A(o.call(arguments,1),function(t){if(t)for(var r in t)n[r]=t[r]}),n},j.pick=function(n){var t={},r=c.apply(e,o.call(arguments,1));return A(r,function(r){r in n&&(t[r]=n[r])}),t},j.omit=function(n){var t={},r=c.apply(e,o.call(arguments,1));for(var u in n)j.contains(r,u)||(t[u]=n[u]);return t},j.defaults=function(n){return A(o.call(arguments,1),function(t){if(t)for(var r in t)n[r]===void 0&&(n[r]=t[r])}),n},j.clone=function(n){return j.isObject(n)?j.isArray(n)?n.slice():j.extend({},n):n},j.tap=function(n,t){return t(n),n};var S=function(n,t,r,e){if(n===t)return 0!==n||1/n==1/t;if(null==n||null==t)return n===t;n instanceof j&&(n=n._wrapped),t instanceof j&&(t=t._wrapped);var u=l.call(n);if(u!=l.call(t))return!1;switch(u){case"[object String]":return n==String(t);case"[object Number]":return n!=+n?t!=+t:0==n?1/n==1/t:n==+t;case"[object Date]":case"[object Boolean]":return+n==+t;case"[object RegExp]":return n.source==t.source&&n.global==t.global&&n.multiline==t.multiline&&n.ignoreCase==t.ignoreCase}if("object"!=typeof n||"object"!=typeof t)return!1;for(var i=r.length;i--;)if(r[i]==n)return e[i]==t;var a=n.constructor,o=t.constructor;if(a!==o&&!(j.isFunction(a)&&a instanceof a&&j.isFunction(o)&&o instanceof o)&&"constructor"in n&&"constructor"in t)return!1;r.push(n),e.push(t);var c=0,f=!0;if("[object Array]"==u){if(c=n.length,f=c==t.length)for(;c--&&(f=S(n[c],t[c],r,e)););}else{for(var s in n)if(j.has(n,s)&&(c++,!(f=j.has(t,s)&&S(n[s],t[s],r,e))))break;if(f){for(s in t)if(j.has(t,s)&&!c--)break;f=!c}}return r.pop(),e.pop(),f};j.isEqual=function(n,t){return S(n,t,[],[])},j.isEmpty=function(n){if(null==n)return!0;if(j.isArray(n)||j.isString(n))return 0===n.length;for(var t in n)if(j.has(n,t))return!1;return!0},j.isElement=function(n){return!(!n||1!==n.nodeType)},j.isArray=x||function(n){return"[object Array]"==l.call(n)},j.isObject=function(n){return n===Object(n)},A(["Arguments","Function","String","Number","Date","RegExp"],function(n){j["is"+n]=function(t){return l.call(t)=="[object "+n+"]"}}),j.isArguments(arguments)||(j.isArguments=function(n){return!(!n||!j.has(n,"callee"))}),"function"!=typeof/./&&(j.isFunction=function(n){return"function"==typeof n}),j.isFinite=function(n){return isFinite(n)&&!isNaN(parseFloat(n))},j.isNaN=function(n){return j.isNumber(n)&&n!=+n},j.isBoolean=function(n){return n===!0||n===!1||"[object Boolean]"==l.call(n)},j.isNull=function(n){return null===n},j.isUndefined=function(n){return n===void 0},j.has=function(n,t){return f.call(n,t)},j.noConflict=function(){return n._=t,this},j.identity=function(n){return n},j.constant=function(n){return function(){return n}},j.property=function(n){return function(t){return t[n]}},j.matches=function(n){return function(t){if(t===n)return!0;for(var r in n)if(n[r]!==t[r])return!1;return!0}},j.times=function(n,t,r){for(var e=Array(Math.max(0,n)),u=0;n>u;u++)e[u]=t.call(r,u);return e},j.random=function(n,t){return null==t&&(t=n,n=0),n+Math.floor(Math.random()*(t-n+1))},j.now=Date.now||function(){return(new Date).getTime()};var T={escape:{"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#x27;"}};T.unescape=j.invert(T.escape);var I={escape:new RegExp("["+j.keys(T.escape).join("")+"]","g"),unescape:new RegExp("("+j.keys(T.unescape).join("|")+")","g")};j.each(["escape","unescape"],function(n){j[n]=function(t){return null==t?"":(""+t).replace(I[n],function(t){return T[n][t]})}}),j.result=function(n,t){if(null==n)return void 0;var r=n[t];return j.isFunction(r)?r.call(n):r},j.mixin=function(n){A(j.functions(n),function(t){var r=j[t]=n[t];j.prototype[t]=function(){var n=[this._wrapped];return a.apply(n,arguments),z.call(this,r.apply(j,n))}})};var N=0;j.uniqueId=function(n){var t=++N+"";return n?n+t:t},j.templateSettings={evaluate:/<%([\s\S]+?)%>/g,interpolate:/<%=([\s\S]+?)%>/g,escape:/<%-([\s\S]+?)%>/g};var q=/(.)^/,B={"'":"'","\\":"\\","\r":"r","\n":"n","	":"t","\u2028":"u2028","\u2029":"u2029"},D=/\\|'|\r|\n|\t|\u2028|\u2029/g;j.template=function(n,t,r){var e;r=j.defaults({},r,j.templateSettings);var u=new RegExp([(r.escape||q).source,(r.interpolate||q).source,(r.evaluate||q).source].join("|")+"|$","g"),i=0,a="__p+='";n.replace(u,function(t,r,e,u,o){return a+=n.slice(i,o).replace(D,function(n){return"\\"+B[n]}),r&&(a+="'+\n((__t=("+r+"))==null?'':_.escape(__t))+\n'"),e&&(a+="'+\n((__t=("+e+"))==null?'':__t)+\n'"),u&&(a+="';\n"+u+"\n__p+='"),i=o+t.length,t}),a+="';\n",r.variable||(a="with(obj||{}){\n"+a+"}\n"),a="var __t,__p='',__j=Array.prototype.join,"+"print=function(){__p+=__j.call(arguments,'');};\n"+a+"return __p;\n";try{e=new Function(r.variable||"obj","_",a)}catch(o){throw o.source=a,o}if(t)return e(t,j);var c=function(n){return e.call(this,n,j)};return c.source="function("+(r.variable||"obj")+"){\n"+a+"}",c},j.chain=function(n){return j(n).chain()};var z=function(n){return this._chain?j(n).chain():n};j.mixin(j),A(["pop","push","reverse","shift","sort","splice","unshift"],function(n){var t=e[n];j.prototype[n]=function(){var r=this._wrapped;return t.apply(r,arguments),"shift"!=n&&"splice"!=n||0!==r.length||delete r[0],z.call(this,r)}}),A(["concat","join","slice"],function(n){var t=e[n];j.prototype[n]=function(){return z.call(this,t.apply(this._wrapped,arguments))}}),j.extend(j.prototype,{chain:function(){return this._chain=!0,this},value:function(){return this._wrapped}}),"function"==typeof define&&define.amd&&define("underscore",[],function(){return j})}).call(this);

//     Fiber.js 1.0.5
//     @author: Kirollos Risk
//
//     Copyright (c) 2012 LinkedIn.
//     All Rights Reserved. Apache Software License 2.0
//     http://www.apache.org/licenses/LICENSE-2.0

(function () {
  /*jshint bitwise: true, camelcase: false, curly: true, eqeqeq: true,
    forin: false, immed: true, indent: 2, latedef: true, newcap: false,
    noarg: true, noempty: false, nonew: true, plusplus: false,
    quotmark: single, regexp: false, undef: true, unused: true, strict: false,
    trailing: true, asi: false, boss: false, debug: false, eqnull: true,
    es5: false, esnext: false, evil: true, expr: false, funcscope: false,
    iterator: false, lastsemic: false, laxbreak: false, laxcomma: false,
    loopfunc: false, multistr: true, onecase: false, proto: false,
    regexdash: false, scripturl: false, smarttabs: false, shadow: true,
    sub: true, supernew: true, validthis: false */

  /*global exports, global, define, module */

  (function (root, factory) {
    if (typeof exports === 'object') {
      // Node. Does not work with strict CommonJS, but
      // only CommonJS-like environments that support module.exports,
      // like Node.
      module.exports = factory(this);
    } else if (typeof define === 'function' && define.amd) {
      // AMD. Register as an anonymous module.
      define(function () {
        return factory(root);
      });
    } else {
      // Browser globals (root is window)
      root.Fiber = factory(root);
    }
  }(this, function (global) {

    // Baseline setup
    // --------------

    // Stores whether the object is being initialized. i.e., whether
    // to run the `init` function, or not.
    var initializing = false,

    // Keep a few prototype references around - for speed access,
    // and saving bytes in the minified version.
    ArrayProto = Array.prototype,

    // Save the previous value of `Fiber`.
    previousFiber = global.Fiber;

    // Helper function to copy properties from one object to the other.
    function copy(from, to) {
      var name;
      for (name in from) {
        if (from.hasOwnProperty(name)) {
          to[name] = from[name];
        }
      }
    }

    // The base `Fiber` implementation.
    function Fiber() {}

    // ###Extend
    //
    // Returns a subclass.
    Fiber.extend = function (fn) {
      // Keep a reference to the current prototye.
      var parent = this.prototype,

      // Invoke the function which will return an object literal used to
      // define the prototype. Additionally, pass in the parent prototype,
      // which will allow instances to use it.
      properties = fn(parent),

      // Stores the constructor's prototype.
      proto;

      // The constructor function for a subclass.
      function child() {
        if (!initializing) {
          // Custom initialization is done in the `init` method.
          this.init.apply(this, arguments);
          // Prevent subsequent calls to `init`. Note: although a `delete
          // this.init` would remove the `init` function from the instance, it
          // would still exist in its super class' prototype.  Therefore,
          // explicitly set `init` to `void 0` to obtain the `undefined`
          // primitive value (in case the global's `undefined` property has
          // been re-assigned).
          this.init = void 0;
        }
      }

      // Instantiate a base class (but only create the instance, without
      // running `init`). And, make every `constructor` instance an instance
      // of `this` and of `constructor`.
      initializing = true;
      proto = child.prototype = new this;
      initializing = false;

      // Add default `init` function, which a class may override; it should
      // call the super class' `init` function (if it exists);
      proto.init = function () {
        if (typeof parent.init === 'function') {
          parent.init.apply(this, arguments);
        }
      };

       // Copy the properties over onto the new prototype.
      copy(properties, proto);

      // Enforce the constructor to be what we expect.
      proto.constructor = child;

      // Keep a reference to the parent prototype.
      // (Note: currently used by decorators and mixins, so that the parent
      // can be inferred).
      child.__base__ = parent;

      // Make this class extendable, this can be overridden by providing a
      // custom extend method on the proto.
      child.extend = child.prototype.extend || Fiber.extend;


      return child;
    };

    // Utilities
    // ---------

    // ###Proxy
    //
    // Returns a proxy object for accessing base methods with a given context.
    //
    // - `base`: the instance' parent class prototype.
    // - `instance`: a Fiber class instance.
    //
    // Overloads:
    //
    // - `Fiber.proxy( instance )`
    // - `Fiber.proxy( base, instance )`
    //
    Fiber.proxy = function (base, instance) {
      var name,
        iface = {},
        wrap;

      // If there's only 1 argument specified, then it is the instance,
      // thus infer `base` from its constructor.
      if (arguments.length === 1) {
        instance = base;
        base = instance.constructor.__base__;
      }

      // Returns a function which calls another function with `instance` as
      // the context.
      wrap = function (fn) {
        return function () {
          return base[fn].apply(instance, arguments);
        };
      };

      // For each function in `base`, create a wrapped version.
      for (name in base) {
        if (base.hasOwnProperty(name) && typeof base[name] === 'function') {
          iface[name] = wrap(name);
        }
      }
      return iface;
    };

    // ###Decorate
    //
    // Decorate an instance with given decorator(s).
    //
    // - `instance`: a Fiber class instance.
    // - `decorator[s]`: the argument list of decorator functions.
    //
    // Note: when a decorator is executed, the argument passed in is the super
    // class' prototype, and the context (i.e. the `this` binding) is the
    // instance.
    //
    //  *Example usage:*
    //
    //     function Decorator( base ) {
    //       // this === obj
    //       return {
    //         greet: function() {
    //           console.log('hi!');
    //         }
    //       };
    //     }
    //
    //     var obj = new Bar(); // Some instance of a Fiber class
    //     Fiber.decorate(obj, Decorator);
    //     obj.greet(); // hi!
    //
    Fiber.decorate = function (instance /*, decorator[s] */) {
      var i,
        // Get the base prototype.
        base = instance.constructor.__base__,
        // Get all the decorators in the arguments.
        decorators = ArrayProto.slice.call(arguments, 1),
        len = decorators.length;

      for (i = 0; i < len; i++) {
        copy(decorators[i].call(instance, base), instance);
      }
    };

    // ###Mixin
    //
    // Add functionality to a Fiber definition
    //
    // - `definition`: a Fiber class definition.
    // - `mixin[s]`: the argument list of mixins.
    //
    // Note: when a mixing is executed, the argument passed in is the super
    // class' prototype (i.e., the base)
    //
    // Overloads:
    //
    // - `Fiber.mixin( definition, mix_1 )`
    // - `Fiber.mixin( definition, mix_1, ..., mix_n )`
    //
    // *Example usage:*
    //
    //     var Definition = Fiber.extend(function(base) {
    //       return {
    //         method1: function(){}
    //       }
    //     });
    //
    //     function Mixin(base) {
    //       return {
    //         method2: function(){}
    //       }
    //     }
    //
    //     Fiber.mixin(Definition, Mixin);
    //     var obj = new Definition();
    //     obj.method2();
    //
    Fiber.mixin = function (definition /*, mixin[s] */) {
      var i,
        // Get the base prototype.
        base = definition.__base__,
        // Get all the mixins in the arguments.
        mixins = ArrayProto.slice.call(arguments, 1),
        len = mixins.length;

      for (i = 0; i < len; i++) {
        copy(mixins[i](base), definition.prototype);
      }
    };

    // ###noConflict
    //
    // Run Fiber.js in *noConflict* mode, returning the `fiber` variable to
    // its previous owner. Returns a reference to the Fiber object.
    Fiber.noConflict = function () {
      global.Fiber = previousFiber;
      return Fiber;
    };

    return Fiber;
  }));
} ());
/**
 * @license
 * Inject (c) 2011 LinkedIn [https://github.com/linkedin/inject] Apache Software License 2.0
 * lscache (c) 2011 Pamela Fox [https://github.com/pamelafox/lscache] Apache Software License 2.0
 * GoWithTheFlow.js (c) 2011 Jerome Etienne, [https://github.com/jeromeetienne/gowiththeflow.js] MIT License
 */
!(function(context, undefined){
/*jshint unused:false, evil:true */
/*global navigator:true, Object:true, localStorage:true */
/*
Inject
Copyright 2011 LinkedIn

Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at

    http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing,
software distributed under the License is distributed on an "AS
IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either
express or implied.   See the License for the specific language
governing permissions and limitations under the License.
*/

/**
 * a test to determine if this is the IE engine (needed
 * for source in eval commands)
 * @constant
 */
var IS_IE = eval('/*@cc_on!@*/false');

// sniffs and assigns UA tests
(function () {
  var ua = navigator.userAgent.toLowerCase();
  if (ua.indexOf('gecko') !== -1) {
    IS_GK = true;
  }
})();

/**
 * a storagetoken identifier we use for the bucket (lscache)
 * @constant
 */
var FILE_STORAGE_TOKEN = 'INJECT';

/**
 * the version of data storage schema for lscache
 * @constant
 */
var LSCACHE_SCHEMA_VERSION = 1;

/**
 * the schema version string for validation of lscache schema
 * @constant
 */
var LSCACHE_SCHEMA_VERSION_STRING = '!version';

/**
 * the cache version string for validation of developer lscache code
 * @constant
 */
var LSCACHE_APP_KEY_STRING = '!appCacheKey';

/**
 * AMD modules that are deferred have this set
 * as their "arg[0]" as a way to flag
 * @constant
 */
var AMD_DEFERRED = '###DEFERRED###';

/**
 * the namespace for inject() that is publicly reachable
 * @constant
 */
var NAMESPACE = 'Inject';

/**
 * Regex for identifying things that end in *.js or *.txt
 * @constant
 */
var FILE_SUFFIX_REGEX = /.*?\.(js|txt)(\?.*)?$/;

/**
 * This is the basic suffix for JS files. When there is no
 * extension, we add this if enabled
 * @constant
 */
var BASIC_FILE_SUFFIX = '.js';

/** prefixes for URLs that begin with http/https
 * @constant
 */
var HOST_PREFIX_REGEX = /^https?:\/\//;

/**
 * suffix for URLs used to capture everything up to / or the
 * end of the string
 * @constant
 */
var HOST_SUFFIX_REGEX = /^(.*?)(\/.*|$)/;

/**
 * a regular expression for slicing a response from iframe communication into its parts
 * (1) Anything up to a space (status code)
 * (2) Anything up to a space (moduleid)
 * (3) Any text up until the end of the string (file)
 * @constant
 **/
var RESPONSE_SLICER_REGEX = /^(.+?)[\s]+([\w\W]+?)[\s]+([\w\W]+)$/m;

/**
 * a regex to locate the function () opener
 * @constant
 */
var FUNCTION_REGEX = /^[\s\(]*function[^\(]*\(([^)]*)\)/;

/**
 * a regex to locate newlines within a function body
 * @constant
 */
var FUNCTION_NEWLINES_REGEX = /\/\/.*?[\r\n]|\/\*(?:.|[\r\n])*?\*\//g;

/**
 * captures the body of a JS function
 * @constant
 */
var FUNCTION_BODY_REGEX = /[\w\W]*?\{([\w\W]*)\}/m;

/**
 * locate whitespace within a function body
 * @constant
 */
var WHITESPACE_REGEX = /\s+/g;

/**
 * Extract require() statements from within a larger string.
 * Used by analyzer to parse files.
 * @constant
 */
var REQUIRE_REGEX = new RegExp(
  '(?:^|[\\s;,=\\?:\\}\\)\\(])' + // begins with start of string, and any symbol a function call() can follow
  'require[\\s]*\\('+             // the keyword "require", whitespace, and then an opening paren
  '[\'"]'+                        // a quoted stirng (require takes a single or double quoted string)
  '([^\'"]+?)'+                   // the valid characters for a "module identifier"... includes AMD characters. You cannot match a quote
  '[\'"]' +                       // the closing quote character
  '\\)',                          // end of paren for "require"
  'gim'                           // flags: global, case-insensitive, multiline
);

/**
 * Extract define() statements from within a larger string.
 * Used by analyzer to parse files.
 * @constant
 */
var DEFINE_REGEX = new RegExp(
  '(?:^|[\\s;,\\?\\}\\)\\(])' +   // begins with start of string, and any symbol a function call() can follow
  'define[\\s]*\\(' +             // the "define" keyword, followed by optional whitespace and its opening paren
  '[\\w\\W]*?\\[' +               // anything (don't care) until we hit the first [
  '([\\w\\W]*?)' +                // our match (contents of the array)
  '\\]',                          // the closing bracket
  'gim'                           // flags: global, case-insensitive, multiline
);

/**
 * Extract terms from define statements.
 * Used by analyzer to parse files in conjunction with DEFINE_REGEX.
 * @constant
 */
var DEFINE_TERM_REGEX = new RegExp(
  '[\'"]' +                       // a quote
  '([\\w\\W]*?)' +                // the term inside of quotes
  '[\'"]',                        // the closing quotes
  'gim'                           // flags: global, case-insensitive, multiline
);

/**
 * extract define() statements from within a larger string
 * note: this was changed to resolve #177, we used the
 * don't-be-greedy modifiers on the \S and \w\W sections
 * @constant
 */
var IS_AMD_REGEX = /(?:^|[\s]+)define[\s]*\(/g;

/**
 * index of all commonJS builtins in a function arg collection
 * @constant
 */
var BUILTINS = {require: true, exports: true, module: true};

/**
 * a regex for replacing builtins and quotes
 * @constant
 */
var BUILTINS_REPLACE_REGEX = /[\s]|"|'|(require)|(exports)|(module)/g;

/**
 * capture anything that involves require*, aggressive to cut
 * down the number of lines we analyze
 * @constant
 */
var GREEDY_REQUIRE_REXEX = /require.*/;

/**
 * match comments in our file (so we can strip during a static analysis)
 * @constant
 */
var JS_COMMENTS_REGEX = /(\/\*([\s\S]*?)\*\/|([^:]|^)\/\/(.*)$)/mg;

/**
 * identifies a path as relative
 * @constant
 */
var RELATIVE_PATH_REGEX = /^(\.{1,2}\/).+/;

/**
 * identifies a path as absolute fully-qualified URL
 * @constant
 */
var ABSOLUTE_PATH_REGEX = /^([A-Za-z]+:)?\/\//;

/**
 * The :// part of the protocol (to remove when splitting on / for URLs)
 * @constant
 */
var PROTOCOL_REGEX = /:\/\//;

/**
 * A string equivalent of the protocol regex
 * @constant
 */
var PROTOCOL_STRING = '://';

/**
 * A replacement for :// that doesn't contain slashes
 * @constant
 */
var PROTOCOL_EXPANDED_REGEX = /__INJECT_PROTOCOL_COLON_SLASH_SLASH__/;

/**
 * A string version of the expanded protocol regex
 * @constant
 */
var PROTOCOL_EXPANDED_STRING = '__INJECT_PROTOCOL_COLON_SLASH_SLASH__';

/**
 * the default hasOwnProperty method
 */
var HAS_OWN_PROPERTY = Object.prototype.hasOwnProperty;

/**
 * run a test to determine if localstorage is available
 * @constant
 */
var HAS_LOCAL_STORAGE = (function () {
  try {
    localStorage.setItem('injectLStest', 'ok');
    localStorage.removeItem('injectLStest');
    return true;
  }
  catch (err) {
    return false;
  }
})();

;/*jshint unused:false */
/*global window:true, XMLHttpRequest:true, ActiveXObject:true, console:true */
/*
Inject
Copyright 2011 LinkedIn

Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at

    http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing,
software distributed under the License is distributed on an "AS
IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either
express or implied.   See the License for the specific language
governing permissions and limitations under the License.
*/

/**
    User configuration options
    @property {string} moduleRoot Base path for all module includes
      @see InjectCore.setModuleRoot
    @property {number} fileExpires Time (in seconds) for how long to preserve
      items in cache @see InjectCore.setExpires
    @property {boolean} useSuffix Specify true to append file suffix when
      resolving an identifier to a URL.  @see RulesEngine.resolveFile
    @property {object} xd Contains properties related to cross-domain requests
    @property {string|null} xd.relayFile URL to easyXDM provider document
    @property {object} debug
    @property {boolean} debug.sourceMap Specify true to enable source
      mapping @see Executor
    @property {boolean} debug.logging Specify true to enable logging
      @see debugLog
    @type {object}
    @global
 */
var userConfig = {
  moduleRoot: null,
  fileExpires: 0,
  useSuffix: true,
  xd: {
    relayFile: null
  },
  debug: {
    sourceMap: false,
    logging: false
  }
};

/**
    The local scope
    @global
 */
var context = this;

/**
    Mappings for module => handling defined by the user.
    @global
  */
var userModules = {};

/**
    Returns whether or not 'property' exists in 'object' as a Function
    or Object.
    @param {object} object The object to inspect.
    @param {*} property The property to assert exists in 'object'
    @return {Boolean} true if 'property' exists in 'object', and false
      otherwise.
    @function
    @global
 */
var isHostMethod = function (object, property) {
  // Return if typeof is 'function', 'object' or 'unknown' (can occur for IE)
  // See http://stackoverflow.com/questions/10982739/typeof-returning-unknown-in-ie
  var t = typeof object[property];
  return t === 'function' || (!!(t === 'object' && object[property])) || t === 'unknown';
};

/**
    Calls the specified function in the specified scope.
    @param {Function} fn The function to call.
    @param {object} scope The scope to execute the function in.
    @return {*} The result of calling fn.
    @function
    @global
 */
function proxy(fn, scope) {
  if (!scope) {
    throw new Error('proxying requires a scope');
  }
  if (!fn) {
    throw new Error('proxying requires a function');
  }
  return function () {
    return fn.apply(scope, arguments);
  };
}

/**
    Apples fn to each item in given collection.
    @param {*[]} collection An array of arbitrary elements.
    @param {Function} fn A function that takes one argument.
      Each element from 'collection' will be passed to 'fn'.
    @function
    @global
 */
function each(collection, fn) {
  for (var i = 0, len = collection.length; i < len; i++) {
    fn(collection[i]);
  }
}

/**
    Function for logging debug output.
    @type {Function}
    @global
 */
var debugLog = function () {};
// TODO: more robust logging solution
(function () {
  var logs = [];
  var canLog = (typeof(console) !== 'undefined' && console.log  && typeof(console.log) === 'function');
  var doLog = function (origin, message) {
    if (userConfig.debug && userConfig.debug.logging) {
      console.log('## ' + origin + ' ##' + '\n' + message);
    }
  };
  if (canLog) {
    debugLog = doLog;
  }
})();

/**
    Methods to add and remove events based on browser capabilities.
    @param {Object} obj A target object to add or remove a listener.
    @param {String} evt The event type.
    @param {Function} fn The target function to add or remove.
    @param {Boolean} capture Use capturing if supported.
    @function
    @global
 */
var addListener, removeListener;
(function(win) {
  if (win.addEventListener) {
    addListener = function(el, evt, fn, capture) {
      el.addEventListener(evt, fn, capture || false);
    };
    removeListener = function(el, evt, fn, capture) {
      el.removeEventListener(evt, fn, capture || false);
    };
  }
  else {
    addListener = function(el, evt, fn) {
      el.attachEvent('on' + evt, fn);
    };
    removeListener = function(el, evt, fn) {
      el.detachEvent('on' + evt, fn);
    };
  }
}(window));;/*jshint unused:false */
/*
Inject
Copyright 2011 LinkedIn

Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at

    http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing,
software distributed under the License is distributed on an "AS
IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either
express or implied.   See the License for the specific language
governing permissions and limitations under the License.
*/

/**
 * Below are the "sandboxing" wrappers for our commonJS implementation
 * we reach in to the inject namespace (default "Inject"), into the
 * INTERNAL object, which contains methods reachable during the eval.
 * Markers in the file for dynamic content are identified with
 * __DOUBLE_UNDERSCORES__, while internal variables are marked with
 * __singleUnderscores
 * @file This file contains the commonJS header and footers
**/

/**
    CommonJS header with placeholders for Inject namespace, module ID,
    module URI, function ID and pointcut before advice.
    @type {string}
    @global
*/
var commonJSHeader = (['',
  '__INJECT_NS__.INTERNAL.executor.__FUNCTION_ID__.fn = function() {',
  '  with (window) {',
  '    __INJECT_NS__.INTERNAL.executor.__FUNCTION_ID__.innerFn = function() {',
  '      // id: __MODULE_ID__ uri: __MODULE_URI__',
  '      var module = __INJECT_NS__.INTERNAL.executor.__FUNCTION_ID__.module,',
  '          require = __INJECT_NS__.INTERNAL.executor.__FUNCTION_ID__.require,',
  '          define = __INJECT_NS__.INTERNAL.executor.__FUNCTION_ID__.define,',
  '          exports = module.exports;',  
  '      try{module.undefined_function();}catch(e){module.__error_line = e;}' // NOTE: Must be on one line for clean error reporting
  ]).join('\n');

/**
    CommonJS footer with placeholders for Inject namespace, exception, and
    pointcut after advice.
    @type {string}
    @global
*/
var commonJSFooter = (['',
  '      __INJECT_NS__.INTERNAL.executor.__FUNCTION_ID__.module = module;',
  '    };',
  '    __INJECT_NS__.INTERNAL.defineExecutingModuleAs("__MODULE_ID__", "__MODULE_URI__");',
  '    try {',
  '      __INJECT_NS__.INTERNAL.executor.__FUNCTION_ID__.innerFn.call(__INJECT_NS__.INTERNAL.executor.__FUNCTION_ID__.module);',
  '    }',
  '    catch (__EXCEPTION__) {',
  '      __INJECT_NS__.INTERNAL.executor.__FUNCTION_ID__.module.__error = __EXCEPTION__;',
  '    }',
  '    __INJECT_NS__.INTERNAL.undefineExecutingModule();',
  '  }',
  '};',
  '']).join('\n');
;//     Fiber.js 1.0.5
//     @author: Kirollos Risk
//
//     Copyright (c) 2012 LinkedIn.
//     All Rights Reserved. Apache Software License 2.0
//     http://www.apache.org/licenses/LICENSE-2.0

(function () {
  /*jshint bitwise: true, camelcase: false, curly: true, eqeqeq: true,
    forin: false, immed: true, indent: 2, latedef: true, newcap: false,
    noarg: true, noempty: false, nonew: true, plusplus: false,
    quotmark: single, regexp: false, undef: true, unused: true, strict: false,
    trailing: true, asi: false, boss: false, debug: false, eqnull: true,
    es5: false, esnext: false, evil: true, expr: false, funcscope: false,
    iterator: false, lastsemic: false, laxbreak: false, laxcomma: false,
    loopfunc: false, multistr: true, onecase: false, proto: false,
    regexdash: false, scripturl: false, smarttabs: false, shadow: true,
    sub: true, supernew: true, validthis: false */

  /*global exports, global, define, module */

  (function (root, factory) {
    if (typeof exports === 'object') {
      // Node. Does not work with strict CommonJS, but
      // only CommonJS-like environments that support module.exports,
      // like Node.
      module.exports = factory(this);
    } else if (typeof define === 'function' && define.amd) {
      // AMD. Register as an anonymous module.
      define(function () {
        return factory(root);
      });
    } else {
      // Browser globals (root is window)
      root.Fiber = factory(root);
    }
  }(this, function (global) {

    // Baseline setup
    // --------------

    // Stores whether the object is being initialized. i.e., whether
    // to run the `init` function, or not.
    var initializing = false,

    // Keep a few prototype references around - for speed access,
    // and saving bytes in the minified version.
    ArrayProto = Array.prototype,

    // Save the previous value of `Fiber`.
    previousFiber = global.Fiber;

    // Helper function to copy properties from one object to the other.
    function copy(from, to) {
      var name;
      for (name in from) {
        if (from.hasOwnProperty(name)) {
          to[name] = from[name];
        }
      }
    }

    // The base `Fiber` implementation.
    function Fiber() {}

    // ###Extend
    //
    // Returns a subclass.
    Fiber.extend = function (fn) {
      // Keep a reference to the current prototye.
      var parent = this.prototype,

      // Invoke the function which will return an object literal used to
      // define the prototype. Additionally, pass in the parent prototype,
      // which will allow instances to use it.
      properties = fn(parent),

      // Stores the constructor's prototype.
      proto;

      // The constructor function for a subclass.
      function child() {
        if (!initializing) {
          // Custom initialization is done in the `init` method.
          this.init.apply(this, arguments);
          // Prevent subsequent calls to `init`. Note: although a `delete
          // this.init` would remove the `init` function from the instance, it
          // would still exist in its super class' prototype.  Therefore,
          // explicitly set `init` to `void 0` to obtain the `undefined`
          // primitive value (in case the global's `undefined` property has
          // been re-assigned).
          this.init = void 0;
        }
      }

      // Instantiate a base class (but only create the instance, without
      // running `init`). And, make every `constructor` instance an instance
      // of `this` and of `constructor`.
      initializing = true;
      proto = child.prototype = new this;
      initializing = false;

      // Add default `init` function, which a class may override; it should
      // call the super class' `init` function (if it exists);
      proto.init = function () {
        if (typeof parent.init === 'function') {
          parent.init.apply(this, arguments);
        }
      };

       // Copy the properties over onto the new prototype.
      copy(properties, proto);

      // Enforce the constructor to be what we expect.
      proto.constructor = child;

      // Keep a reference to the parent prototype.
      // (Note: currently used by decorators and mixins, so that the parent
      // can be inferred).
      child.__base__ = parent;

      // Make this class extendable, this can be overridden by providing a
      // custom extend method on the proto.
      child.extend = child.prototype.extend || Fiber.extend;


      return child;
    };

    // Utilities
    // ---------

    // ###Proxy
    //
    // Returns a proxy object for accessing base methods with a given context.
    //
    // - `base`: the instance' parent class prototype.
    // - `instance`: a Fiber class instance.
    //
    // Overloads:
    //
    // - `Fiber.proxy( instance )`
    // - `Fiber.proxy( base, instance )`
    //
    Fiber.proxy = function (base, instance) {
      var name,
        iface = {},
        wrap;

      // If there's only 1 argument specified, then it is the instance,
      // thus infer `base` from its constructor.
      if (arguments.length === 1) {
        instance = base;
        base = instance.constructor.__base__;
      }

      // Returns a function which calls another function with `instance` as
      // the context.
      wrap = function (fn) {
        return function () {
          return base[fn].apply(instance, arguments);
        };
      };

      // For each function in `base`, create a wrapped version.
      for (name in base) {
        if (base.hasOwnProperty(name) && typeof base[name] === 'function') {
          iface[name] = wrap(name);
        }
      }
      return iface;
    };

    // ###Decorate
    //
    // Decorate an instance with given decorator(s).
    //
    // - `instance`: a Fiber class instance.
    // - `decorator[s]`: the argument list of decorator functions.
    //
    // Note: when a decorator is executed, the argument passed in is the super
    // class' prototype, and the context (i.e. the `this` binding) is the
    // instance.
    //
    //  *Example usage:*
    //
    //     function Decorator( base ) {
    //       // this === obj
    //       return {
    //         greet: function() {
    //           console.log('hi!');
    //         }
    //       };
    //     }
    //
    //     var obj = new Bar(); // Some instance of a Fiber class
    //     Fiber.decorate(obj, Decorator);
    //     obj.greet(); // hi!
    //
    Fiber.decorate = function (instance /*, decorator[s] */) {
      var i,
        // Get the base prototype.
        base = instance.constructor.__base__,
        // Get all the decorators in the arguments.
        decorators = ArrayProto.slice.call(arguments, 1),
        len = decorators.length;

      for (i = 0; i < len; i++) {
        copy(decorators[i].call(instance, base), instance);
      }
    };

    // ###Mixin
    //
    // Add functionality to a Fiber definition
    //
    // - `definition`: a Fiber class definition.
    // - `mixin[s]`: the argument list of mixins.
    //
    // Note: when a mixing is executed, the argument passed in is the super
    // class' prototype (i.e., the base)
    //
    // Overloads:
    //
    // - `Fiber.mixin( definition, mix_1 )`
    // - `Fiber.mixin( definition, mix_1, ..., mix_n )`
    //
    // *Example usage:*
    //
    //     var Definition = Fiber.extend(function(base) {
    //       return {
    //         method1: function(){}
    //       }
    //     });
    //
    //     function Mixin(base) {
    //       return {
    //         method2: function(){}
    //       }
    //     }
    //
    //     Fiber.mixin(Definition, Mixin);
    //     var obj = new Definition();
    //     obj.method2();
    //
    Fiber.mixin = function (definition /*, mixin[s] */) {
      var i,
        // Get the base prototype.
        base = definition.__base__,
        // Get all the mixins in the arguments.
        mixins = ArrayProto.slice.call(arguments, 1),
        len = mixins.length;

      for (i = 0; i < len; i++) {
        copy(mixins[i](base), definition.prototype);
      }
    };

    // ###noConflict
    //
    // Run Fiber.js in *noConflict* mode, returning the `fiber` variable to
    // its previous owner. Returns a reference to the Fiber object.
    Fiber.noConflict = function () {
      global.Fiber = previousFiber;
      return Fiber;
    };

    return Fiber;
  }));
} ());;/*
Inject
Copyright 2011 LinkedIn

Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at

    http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing,
software distributed under the License is distributed on an "AS
IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either
express or implied.   See the License for the specific language
governing permissions and limitations under the License.
*/

var Fiber = this.Fiber.noConflict();;/*
Go With the Flow
Copyright (c) 2011 Jerome Etienne, http://jetienne.com

Permission is hereby granted, free of charge, to any person obtaining
a copy of this software and associated documentation files (the
"Software"), to deal in the Software without restriction, including
without limitation the rights to use, copy, modify, merge, publish,
distribute, sublicense, and/or sell copies of the Software, and to
permit persons to whom the Software is furnished to do so, subject to
the following conditions:

The above copyright notice and this permission notice shall be
included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND,
EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND
NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE
LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION
OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION
WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
*/

var Flow  = function(){
  var self, stack = [], timerId = setTimeout(function(){ timerId = null; self._next(); }, 0);
  return self = {
    destroy : function(){ timerId && clearTimeout(timerId); },
    par : function(callback, isSeq){
      if(isSeq || !(stack[stack.length-1] instanceof Array)) stack.push([]);
      stack[stack.length-1].push(callback);
      return self;
    },seq : function(callback){ return self.par(callback, true);  },
    _next : function(err, result){
      var errors = [], results = [], callbacks = stack.shift() || [], nbReturn = callbacks.length, isSeq = nbReturn == 1;
      for(var i = 0; i < callbacks.length; i++){
        (function(fct, index){
          fct(function(error, result){
            errors[index] = error;
            results[index]  = result;   
            if(--nbReturn == 0) self._next(isSeq?errors[0]:errors, isSeq?results[0]:results)
          }, err, result)
        })(callbacks[i], i);
      }
    }
  }
};;/**
 * lscache library
 * Copyright (c) 2011, Pamela Fox
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *       http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/** @ignore */
var lscache=function(){function k(){if(void 0!==g)return g;try{l("__lscachetest__","__lscachetest__"),f("__lscachetest__"),g=!0}catch(a){g=!1}return g}function o(){void 0===j&&(j=null!=window.JSON);return j}function l(a,b){localStorage.removeItem(e+c+a);localStorage.setItem(e+c+a,b)}function f(a){localStorage.removeItem(e+c+a)}var e="lscache-",p=Math.floor(144E9),g,j,c="";return{set:function(a,b,h){if(k()){if("string"!==typeof b){if(!o())return;try{b=JSON.stringify(b)}catch(g){return}}try{l(a,b)}catch(j){if("QUOTA_EXCEEDED_ERR"===
j.name||"NS_ERROR_DOM_QUOTA_REACHED"===j.name){for(var m=[],d,i=0;i<localStorage.length;i++)if(d=localStorage.key(i),0===d.indexOf(e+c)&&0>d.indexOf("-cacheexpiration")){d=d.substr((e+c).length);var n=localStorage.getItem(e+c+(d+"-cacheexpiration")),n=n?parseInt(n,10):p;m.push({key:d,size:(localStorage.getItem(e+c+d)||"").length,expiration:n})}m.sort(function(a,b){return b.expiration-a.expiration});for(i=(b||"").length;m.length&&0<i;)d=m.pop(),f(d.key),f(d.key+"-cacheexpiration"),i-=d.size;try{l(a,
b)}catch(q){return}}else return}h?l(a+"-cacheexpiration",(Math.floor((new Date).getTime()/6E4)+h).toString(10)):f(a+"-cacheexpiration")}},get:function(a){if(!k())return null;var b=a+"-cacheexpiration",h=localStorage.getItem(e+c+b);if(h&&(h=parseInt(h,10),Math.floor((new Date).getTime()/6E4)>=h))return f(a),f(b),null;a=localStorage.getItem(e+c+a);if(!a||!o())return a;try{return JSON.parse(a)}catch(g){return a}},remove:function(a){if(!k())return null;f(a);f(a+"-cacheexpiration")},supported:function(){return k()},
flush:function(){if(k())for(var a=localStorage.length-1;0<=a;--a){var b=localStorage.key(a);0===b.indexOf(e+c)&&localStorage.removeItem(b)}},setBucket:function(a){c=a},resetBucket:function(){c=""}}}();;/*
Inject
Copyright 2011 LinkedIn

Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at

    http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing,
software distributed under the License is distributed on an "AS
IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either
express or implied.   See the License for the specific language
governing permissions and limitations under the License.
*/

(function () {
  /*
  lscache configuration
  requires: localstorage, lscache
  Test the schema version inside of lscache, and if it has changed, flush the cache
  */
  var schemaVersion;
  if (HAS_LOCAL_STORAGE && lscache) {
    lscache.setBucket(FILE_STORAGE_TOKEN);
    schemaVersion = lscache.get(LSCACHE_SCHEMA_VERSION_STRING);

    if (schemaVersion && schemaVersion > 0 && schemaVersion < LSCACHE_SCHEMA_VERSION) {
      lscache.flush();
      lscache.set(LSCACHE_SCHEMA_VERSION_STRING, LSCACHE_SCHEMA_VERSION);
    }
  }
})();;/*
Inject
Copyright 2011 LinkedIn

Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at

    http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing,
software distributed under the License is distributed on an "AS
IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either
express or implied.   See the License for the specific language
governing permissions and limitations under the License.
*/

var reURI = /^((http.?:)\/\/([^:\/\s]+)(:\d+)*)/; // returns groups for protocol (2), domain (3) and port (4) 

function addListener(el, evt, fn) {
  if (window.addEventListener) {
    el.addEventListener(evt, fn, false);
  }
  else {
    el.attachEvent('on' + evt, fn);
  }
}

function getDomainName(url) {
  return url.match(reURI)[3];
}

function sendMessage(target, targetsUrl, command, params) {
  if (!params) {
    params = {};
  }
  
  params = JSON.stringify(params);
  target.postMessage([command, params].join(':'), targetsUrl);
}

var getXHR = (function() {
  var XMLHttpFactories = [
    function () { return new XMLHttpRequest(); },
    function () { return new ActiveXObject("Msxml2.XMLHTTP"); },
    function () { return new ActiveXObject("Msxml3.XMLHTTP"); },
    function () { return new ActiveXObject("Microsoft.XMLHTTP"); }
  ];

  var xmlhttp = false;
  for (var i=0;i<XMLHttpFactories.length;i++) {
    try {
      XMLHttpFactories[i]();
      xmlhttp = XMLHttpFactories[i];
    }
    catch (e) {
      continue;
    }
    break;
  }

  return xmlhttp;
}());;/*
Inject
Copyright 2011 LinkedIn

Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at

    http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing,
software distributed under the License is distributed on an "AS
IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either
express or implied.   See the License for the specific language
governing permissions and limitations under the License.
*/

/**
 * The analyzer module handles extract the clean dependencies list
 * from a given file and supports remove buildin modules from a
 * given module list
 * @file
**/
var Analyzer;
(function () {
  var AsStatic = Fiber.extend(function () {
    return {
      /**
       * analyzer initialization
       * @constructs Analyzer
       */
      init: function () {},
      
      /**
       * Clean up moduleIds by removing all buildin modules
       * (requie, exports, module) from a given module list
       * @method Analyzer.stripBuiltins
       * @param {Array} modules - a dirty list of modules
       * @public
       * @returns {Array} a clean list of modules without buildins
       */

      stripBuiltins: function (modules) {
        var strippedModuleList = [],
            len = modules.length,
            i = 0;

        for (i; i < len; i++) {
          //modules[i] is the moduleId
          if (!BUILTINS[modules[i]]) {
            strippedModuleList.push(modules[i]);
          }
        }
        return strippedModuleList;
      },

      
      /**
       * Extract the clean dependency requires from a given file as
       * String, remove all buildin requires, merge requires from
       * AMD define purpose
       * @method Analyzer.extractRequires
       * @param {String} file - a string of a file
       * @public
       * @returns {Array} a clean list of dependency requires from a
       * module file
       */
      extractRequires: function (file) {
        /*jshint boss:true */

        var dependencies = [],
            dependencyCache = {
              require: 1,
              module: 1,
              exports: 1
            },
            item,
            term,
            dep;

        if (!file) {
          return [];
        }

        file = file.replace(JS_COMMENTS_REGEX, '');

        while (item = REQUIRE_REGEX.exec(file)) {
          dep = item[1];
          if (!dependencyCache[dep]) {
            dependencyCache[dep] = 1;
            dependencies.push(dep);
          }
        }
        
        while (item = DEFINE_REGEX.exec(file)) {
          while (term = DEFINE_TERM_REGEX.exec(item[1])) {
            dep = term[1];
            if (!dependencyCache[dep]) {
              dependencyCache[dep] = 1;
              dependencies.push(dep);
            }
          }
        }
        
        return dependencies;
      }
    };
  });
  Analyzer = new AsStatic();
})();
;/*global context:true */
/*
Inject
Copyright 2011 LinkedIn

Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at

    http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing,
software distributed under the License is distributed on an "AS
IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either
express or implied.   See the License for the specific language
governing permissions and limitations under the License.
*/


/**
 * Communicator handles the logic for
 * downloading and executing required files and dependencies
 * @file
 */
var Communicator;
(function () {
  var AsStatic = Fiber.extend(function () {
    
    var alreadyListening = false;
    var socket;
    var socketInProgress;
    var socketQueue = [];
    var socketQueueCache = {};
    
    function resolveSocketQueue() {
      var lQueue = socketQueue;
      socketQueue = [];
      socketQueueCache = {};
      for (var i = 0, len = lQueue.length; i < len; i++) {
        sendMessage(socket.contentWindow, userConfig.xd.relayFile, 'fetch', {
          url: lQueue[i]
        });
      }
    }
    
    function addSocketQueue(lUrl) {
      if (!socketQueueCache[lUrl]) {
        socketQueueCache[lUrl] = 1;
        socketQueue.push(lUrl);
      }
    }
    
    function beginListening() {
      if (alreadyListening) {
        return;
      }
      alreadyListening = true;
    
      addListener(window, 'message', function(e) {
        var commands, command, params;
      
        if (!userConfig.xd.relayFile) {
          return;
        }
      
        if (getDomainName(e.origin) !== getDomainName(userConfig.xd.relayFile)) {
          return;
        }
      
        commands = e.data.split(/:/);
        command = commands.shift();

        switch (command) {
        case 'ready':
          socketInProgress = false;
          resolveSocketQueue();
          break;
        case 'fetchFail':
        case 'fetchOk':
          params = JSON.parse(commands.join(':'));
          resolveCompletedFile(params.url, params.status, params.responseText);
        }
      });
    }
    
    /**
     * Clear the records to socket connections and
     * downloaded files
     * @function
     * @private
     */
    function clearCaches() {
      downloadCompleteQueue = {};
    }

    /**
     * Write file contents to local storage
     * @function
     * @param {string} url - url to use as a key to store file content
     * @param {string} contents file contents to be stored in cache
     * @private
     * @returns a function adhearing to the lscache set() method
     */
    function writeToCache(url, contents) {
      // lscache and passthrough
      if (userConfig.fileExpires > 0) {
        return lscache.set(url, contents, userConfig.fileExpires);
      }
      else {
        return null;
      }
    }

    /**
     * read cached file contents from local storage
     * @function
     * @param {string} url - url key that the content is stored under
     * @private
     * @returns the content that is stored under the url key
     *
     */
    function readFromCache(url) {
      // lscache and passthrough
      if (userConfig.fileExpires > 0) {
        return lscache.get(url);
      }
      else {
        return null;
      }
    }

    /**
     * function that resolves all callbacks that are associated
     * to the loaded file
     * @function
     * @param {string} url - The location of the module that has loaded
     * @param {int} statusCode - The result of the attempt to load the file at url
     * @param {string} contents - The contents that were loaded from url
     * @private
     */
    function resolveCompletedFile(url, statusCode, contents) {
      statusCode = 1 * statusCode;
      debugLog('Communicator (' + url + ')', 'status ' + statusCode + '. Length: ' +
          ((contents) ? contents.length : 'NaN'));

      // write cache
      if (statusCode === 200 && !userConfig.xd.relayFile) {
        writeToCache(url, contents);
      }
      
      // all non-200 codes create a runtime error that includes the error code
      if (statusCode !== 200) {
        contents = 'throw new Error(\'Error ' + statusCode + ': Unable to retrieve ' + url + '\');';
      }

      // locate all callbacks associated with the URL
      each(downloadCompleteQueue[url], function (cb) {
        cb(contents);
      });
      downloadCompleteQueue[url] = [];
    }

    /**
     * Creates a standard xmlHttpRequest
     * @function
     * @param {string} url - url where the content is located
     * @private
     */
    function sendViaIframe(url) {
      beginListening();
      if (socket && !socketInProgress) {
        sendMessage(socket.contentWindow, userConfig.xd.relayFile, 'fetch', {
          url: url
        });
      }
      else if (socket && socketInProgress) {
        addSocketQueue(url);
        return;
      }
      else {
        socketInProgress = true;
        addSocketQueue(url);
        var iframeSrc = userConfig.xd.relayFile;
        
        socket = document.createElement('iframe');
        iframeSrc += (iframeSrc.indexOf('?') < 0) ? '?' : '&';
        iframeSrc += 'injectReturn=' + encodeURIComponent(location.href);
        socket.src = iframeSrc;
        
        socket.style.visibility = 'hidden';
        socket.style.border = 0;
        socket.style.width = '1px';
        socket.style.height = '1px';
        socket.style.left = '-5000px';
        socket.style.top = '-5000px';
        socket.style.opacity = '0';

        window.setTimeout(function() {
          if (!document.body.firsChild) {
            document.body.appendChild(socket);
          }
          else {
            document.body.insertBefore(socket, document.body.firstChild);
          }
        });
      }
    }

    /**
     * Get contents via xhr for cross-domain requests
     * @function
     * @param {string} url - url where the content is located
     * @private
     */
    function sendViaXHR(url) {
      var xhr = getXHR();
      xhr.open('GET', url);
      xhr.onreadystatechange = function () {
        if (xhr.readyState === 4) {
          resolveCompletedFile(url, xhr.status, xhr.responseText);
        }
      };
      xhr.send(null);
    }

    return {
      /**
       * The Communicator object is meant to be instantiated once, and have its
       * reference assigned to a location outside of the closure.
       * @constructs Communicator
       */
      init: function () {
        this.clearCaches();
      },

      /**
       * clear list of socket connections and list of downloaded files
       * @method Communicator.clearCaches
       * @public
       */
      clearCaches: function () {
        clearCaches();
      },

      /**
       * A noop for just running the callback. Useful for a passthrough
       * operation
       * @param {string} moduleId - The id of the module to be fetched
       * @param {string} url - The location of the script to be fetched
       * @param {object} callback - The function callback to execute after the file is retrieved and loaded
       * @public
       */
      noop: function (moduleId, url, callback) {
        callback('');
      },

      /**
       * retrieve file via download or cache keyed by the given url
       * @method Communicator.get
       * @param {string} moduleId - The id of the module to be fetched
       * @param {string} url - The location of the script to be fetched
       * @param {object} callback - The function callback to execute after the file is retrieved and loaded
       * @public
       */
      get: function (moduleId, url, callback) {
        if (!downloadCompleteQueue[url]) {
          downloadCompleteQueue[url] = [];
        }

        debugLog('Communicator (' + url + ')', 'requesting');

        if (!userConfig.xd.relayFile) {
          var cachedResults = readFromCache(url);
          if (cachedResults) {
            debugLog('Communicator (' + url + ')', 'retireved from cache. length: ' + cachedResults.length);
            callback(cachedResults);
            return;
          }
        }

        debugLog('Communicator (' + url + ')', 'queued');
        if (downloadCompleteQueue[url].length) {
          downloadCompleteQueue[url].push(callback);
          debugLog('Communicator (' + url + ')', 'request already in progress');
          return;
        }
        downloadCompleteQueue[url].push(callback);
        
        // local xhr
        if (!userConfig.xd.relayFile) {
          sendViaXHR(url);
          return;
        }
        
        // remote xhr
        sendViaIframe(url);
      }
    };
  });
  Communicator = new AsStatic();
})();
;/*jshint evil:true */
/*global context:true, document:true */

/*
Inject
Copyright 2011 LinkedIn

Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at

http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing,
software distributed under the License is distributed on an "AS
IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either
express or implied.   See the License for the specific language
governing permissions and limitations under the License.
*/

/**
 * The executor module handles the raw JS execution and sandboxing
 * of modules when they are ran. The resulting exports are cached
 * here for later. The executor is also the authority on what
 * modules have been AMD-defined, are broken, or contain circular
 * references.
 * @file
 **/
var Executor;
(function() {
  
  //Cache to store errors thrown by failed modules(indexed by moduleId)
  //getModule uses this to return the right error when asked for a broken module
  var moduleFailureCache = {};

  /**
   * the document head
   * @private
   * @type {boolean}
   */
  var docHead = false;
  
  /**
   * Determines if an object has its own property. Uses {} instead of a local
   * object in case the hasOwnProperty property has been overwritten
   * @method Executor.hasOwnProperty
   * @private
   * @param {Object} obj - the object to test for a property on
   * @param {String} prop - the prop to test for
   * @returns Boolean
   */
  function hasOwnProperty(obj, prop) {
    return {}.prototype.hasOwnProperty.call(obj, prop);
  }

  // capture document head
  try {
    docHead = document.getElementsByTagName('head')[0];
  } catch (e) {
    docHead = false;
  }

  // stack normalizer from https://github.com/eriwen/javascript-stacktrace/blob/master/stacktrace.js
  var stacknorm = {
    /**
     * Mode could differ for different exception, e.g.
     * exceptions in Chrome may or may not have arguments or stack.
     *
     * @return {String} mode of operation for the exception
     */
    mode: function(e) {
      if (e['arguments'] && e.stack) {
        return 'chrome';
      } else if (e.stack && e.sourceURL) {
        return 'safari';
      } else if (e.stack && e.number) {
        return 'ie';
      } else if (e.stack && e.fileName) {
        return 'firefox';
      } else if (e.message && e['opera#sourceloc']) {
        // e.message.indexOf("Backtrace:") > -1 -> opera9
        // 'opera#sourceloc' in e -> opera9, opera10a
        // !e.stacktrace -> opera9
        if (!e.stacktrace) {
          return 'opera9'; // use e.message
        }
        if (e.message.indexOf('\n') > -1 && e.message.split('\n').length > e.stacktrace.split('\n').length) {
          // e.message may have more stack entries than e.stacktrace
          return 'opera9'; // use e.message
        }
        return 'opera10a'; // use e.stacktrace
      } else if (e.message && e.stack && e.stacktrace) {
        // e.stacktrace && e.stack -> opera10b
        if (e.stacktrace.indexOf("called from line") < 0) {
          return 'opera10b'; // use e.stacktrace, format differs from 'opera10a'
        }
        // e.stacktrace && e.stack -> opera11
        return 'opera11'; // use e.stacktrace, format differs from 'opera10a', 'opera10b'
      } else if (e.stack && !e.fileName) {
        // phantomJS looks like chrome, but only returns line numbers
        // We can look for [\d]+:[\d]+)?\n|$
        // Chrome 27 does not have e.arguments as earlier versions,
        // but still does not have e.fileName as Firefox
        var hasColumns = /:[\d]+:[\d]+\)?(\n|$)/;
        return (hasColumns.test(e.stack)) ? 'chrome' : 'phantom';
      }
      return 'other';
    },
  
    /**
     * Given an Error object, return a formatted Array based on Chrome's stack string.
     *
     * @param e - Error object to inspect
     * @return Array<String> of function calls, files and line numbers
     */
    chrome: function(e) {
      return (e.stack + '\n')
        .replace(/^\s+(at eval )?at\s+/gm, '') // remove 'at' and indentation
        .replace(/^([^\(]+?)([\n$])/gm, '{anonymous}() ($1)$2')
        .replace(/^Object.<anonymous>\s*\(([^\)]+)\)/gm, '{anonymous}() ($1)')
        .replace(/^(.+) \((.+)\)$/gm, '$1@$2')
        .split('\n')
        .slice(1, -1);
    },
    
    /**
     * Given an Error object, return a formatted Array based on PhantomJS's stack string.
     *
     * @param e - Error object to inspect
     * @return Array<String> of function calls, files and line numbers
     */
    phantom: function(e) {
      return (e.stack + '\n')
        .replace(/^\s+(at eval )?at\s+/gm, '') // remove 'at' and indentation
        .replace(/^([^\(]+?)([\n$])/gm, '{anonymous}() ($1)$2')
        .replace(/^Object.<anonymous>\s*\(([^\)]+)\)/gm, '{anonymous}() ($1)')
        .replace(/^(.+) \((.+)\)$/gm, '$1@$2')
        .replace(/(.+):([0-9]+)(\)?)/g, '$1:$2:0$3')
        .split('\n')
        .slice(1, -1);
    },

    /**
     * Given an Error object, return a formatted Array based on Safari's stack string.
     *
     * @param e - Error object to inspect
     * @return Array<String> of function calls, files and line numbers
     */
    safari: function(e) {
      return e.stack.replace(/\[native code\]\n/m, '')
        .replace(/^(?=\w+Error\:).*$\n/m, '')
        .replace(/^@/gm, '{anonymous}()@')
        .split('\n');
    },

    /**
     * Given an Error object, return a formatted Array based on IE's stack string.
     *
     * @param e - Error object to inspect
     * @return Array<String> of function calls, files and line numbers
     */
    ie: function(e) {
      return e.stack
        .replace(/^\s*at\s+(.*)$/gm, '$1')
        .replace(/^Anonymous function\s+/gm, '{anonymous}() ')
        .replace(/^(.+)\s+\((.+)\)$/gm, '$1@$2')
        .split('\n')
        .slice(1);
    },

    /**
     * Given an Error object, return a formatted Array based on Firefox's stack string.
     *
     * @param e - Error object to inspect
     * @return Array<String> of function calls, files and line numbers
     */
    firefox: function(e) {
      return e.stack.replace(/(?:\n@:0)?\s+$/m, '')
        .replace(/^(?:\((\S*)\))?@/gm, '{anonymous}($1)@')
        .split('\n');
    },

    opera11: function(e) {
      var ANON = '{anonymous}', lineRE = /^.*line (\d+), column (\d+)(?: in (.+))? in (\S+):$/;
      var lines = e.stacktrace.split('\n'), result = [];

      for (var i = 0, len = lines.length; i < len; i += 2) {
        var match = lineRE.exec(lines[i]);
        if (match) {
          var location = match[4] + ':' + match[1] + ':' + match[2];
          var fnName = match[3] || "global code";
          fnName = fnName.replace(/<anonymous function: (\S+)>/, "$1").replace(/<anonymous function>/, ANON);
          result.push(fnName + '@' + location + ' -- ' + lines[i + 1].replace(/^\s+/, ''));
        }
      }

      return result;
    },

    opera10b: function(e) {
      // "<anonymous function: run>([arguments not available])@file://localhost/G:/js/stacktrace.js:27\n" +
      // "printStackTrace([arguments not available])@file://localhost/G:/js/stacktrace.js:18\n" +
      // "@file://localhost/G:/js/test/functional/testcase1.html:15"
      var lineRE = /^(.*)@(.+):(\d+)$/;
      var lines = e.stacktrace.split('\n'), result = [];

      for (var i = 0, len = lines.length; i < len; i++) {
        var match = lineRE.exec(lines[i]);
        if (match) {
          var fnName = match[1] ? (match[1] + '()') : "global code";
          result.push(fnName + '@' + match[2] + ':' + match[3]);
        }
      }

      return result;
    },

    /**
     * Given an Error object, return a formatted Array based on Opera 10's stacktrace string.
     *
     * @param e - Error object to inspect
     * @return Array<String> of function calls, files and line numbers
     */
    opera10a: function(e) {
      // "  Line 27 of linked script file://localhost/G:/js/stacktrace.js\n"
      // "  Line 11 of inline#1 script in file://localhost/G:/js/test/functional/testcase1.html: In function foo\n"
      var ANON = '{anonymous}', lineRE = /Line (\d+).*script (?:in )?(\S+)(?:: In function (\S+))?$/i;
      var lines = e.stacktrace.split('\n'), result = [];

      for (var i = 0, len = lines.length; i < len; i += 2) {
        var match = lineRE.exec(lines[i]);
        if (match) {
          var fnName = match[3] || ANON;
          result.push(fnName + '()@' + match[2] + ':' + match[1] + ' -- ' + lines[i + 1].replace(/^\s+/, ''));
        }
      }

      return result;
    },

    // Opera 7.x-9.2x only!
    opera9: function(e) {
      // "  Line 43 of linked script file://localhost/G:/js/stacktrace.js\n"
      // "  Line 7 of inline#1 script in file://localhost/G:/js/test/functional/testcase1.html\n"
      var ANON = '{anonymous}', lineRE = /Line (\d+).*script (?:in )?(\S+)/i;
      var lines = e.message.split('\n'), result = [];

      for (var i = 2, len = lines.length; i < len; i += 2) {
        var match = lineRE.exec(lines[i]);
        if (match) {
          result.push(ANON + '()@' + match[2] + ':' + match[1] + ' -- ' + lines[i + 1].replace(/^\s+/, ''));
        }
      }

      return result;
    },

    // Safari 5-, IE 9-, and others
    other: function(curr) {
      var ANON = '{anonymous}', fnRE = /function\s*([\w\-$]+)?\s*\(/i, stack = [], fn, args, maxStackSize = 10;
      while (curr && curr['arguments'] && stack.length < maxStackSize) {
        fn = fnRE.test(curr.toString()) ? RegExp.$1 || ANON : ANON;
        args = Array.prototype.slice.call(curr['arguments'] || []);
        stack[stack.length] = fn + '(' + this.stringifyArguments(args) + ')';
        curr = curr.caller;
      }
      return stack;
    }
  };

  /**
   * execute a javascript module after wrapping it in sandbox code
   * this way, the entire module process is encapsulated
   * The options contain:
   * <pre>
   * moduleId     - the id of the module
   * functionId   - the anonymous function id
   * preamble     - the sandbox preamble code
   * epilogue     - the sandbox epilogue code
   * originalCode - the original unmodified code
   * url          - the URL used to retrieve the module
   * </pre>
   * @function
   * @param {String} code - the code to execute
   * @param {Object} options - a collection of options
   */
  function executeJavaScriptModule(code, functionId) {
    var meta = context.Inject.INTERNAL.executor[functionId];
    var module = meta.module;
    var failed = false;
    var sourceString = IS_IE ? '' : '//@ sourceURL=' + module.uri;
    var result;
    var err;

    // add source string in sourcemap compatible browsers
    code = [code, sourceString].join('\n');

    // Parse file and catch any parse errors
    try {
      eval(code);
    }
    catch(ex) {
      // this file will fail when directly injected. We can leverage that to generate a
      // proper syntax error, removing the LinkJS dependency completely. While the debugging
      // is not as perfect, the 15k savings are well worth it. Window level reporting is
      // undisturbed by this change
      ex.message = 'Parse error in ' + module.id + ' (' + module.uri + ') please check for an uncaught error ' + ex.message;
      var scr = document.createElement('script');
      scr.src = module.uri;
      scr.type = 'text/javascript';
      docHead.appendChild(scr);
      return {
        __error: ex
      };
    }

    // We only reach here if there are no parse errors
    // We can now evaluate using either the eval()
    // method or just running the function we built.
    // if there is not a registered function in the INTERNAL namespace, there
    // must have been a syntax error. Firefox mandates an eval to expose it, so
    // we use that as the least common denominator
    if (userConfig.debug.sourceMap) {
      // if sourceMap is enabled
      // create a version of our code that can be put through eval with the
      // sourcemap string enabled. This allows some browsers (Chrome and Firefox)
      // to properly see file names instead of just "eval" as the file name in inspectors
      var toExec = code.replace(/([\w\W]+?)=([\w\W]*\})[\w\W]*?$/, '$1 = ($2)();');
      toExec = [toExec, sourceString].join('\n');

      eval(toExec);
      
      if (module.__error) {
        module.__error.message = 'Runtime error in ' + module.id + '(' + module.uri + ') ' + module.__error.message;
      }
    }
    else {
      // there is an executable object AND source maps are off
      // just run it. Try/catch will capture exceptions and put them
      // into result.__error internally for us from the commonjs harness
      // NOTE: these all receive "-1" due to the semicolon auto added by the Executor at the end of
      // the preamble.
      // __EXCEPTION__.lineNumber - Inject.INTERNAL.modules.exec2.__error_line.lineNumber - 1
      context.Inject.INTERNAL.executor[functionId].fn();

      if (module.__error) {
        module.__error.message = 'Runtime error in ' + module.id + '(' + module.uri + ') ' + module.__error.message;
      }
    }
  }

  var AsStatic = Fiber.extend(function() {
    var functionCount = 0;
    return {
      /**
       * Create the executor and initialize its caches
       * @constructs Executor
       */
      init : function() {
        this.clearCaches();
      },

      /**
       * Clear all the caches for the executor
       * @method Executor.clearCaches
       * @public
       */
      clearCaches : function() {
        // cache of resolved exports
        this.cache = {};
        
        // any modules that had errors
        this.errors = {};

        // the stack of AMD define functions, because they "could" be anonymous
        this.anonymousAMDStack = [];
      },

      /**
       * Define the executing module by a moduleId and path.
       * when using AMD style defines with just CommonJS
       * wrappers, it's important to know what module we are
       * currently trying to run.
       * @method Executor.defineExecutingModuleAs
       * @param {string} moduleId - the module ID being ran
       * @param {string} path - the path for the current module
       * @public
       */
      defineExecutingModuleAs : function(moduleId, path) {
        return this.anonymousAMDStack.push({
          id : moduleId,
          path : path
        });
      },

      /**
       * Remove the currently executing module from the define stack
       * @method Executor.undefineExecutingModule
       * @public
       */
      undefineExecutingModule : function() {
        return this.anonymousAMDStack.pop();
      },

      /**
       * Get the current executing AMD module
       * @method Executor.getCurrentExecutingAMD
       * @public
       * @returns {object} the id and path of the current module
       */
      getCurrentExecutingAMD : function() {
        return this.anonymousAMDStack[this.anonymousAMDStack.length - 1];
      },

      /**
       * Get the cached version of a module ID, accounting
       * for any possible aliases. If an alias exists,
       * the cache is also updated
       * @method Executor.getFromCache
       * @param {String} idAlias - an ID or alias to get
       * @returns {Object} module at the ID or alias
       */
      getFromCache : function(idAlias) {
        var alias = RulesEngine.getOriginalName(idAlias);
        var err;
        var errorMessage;
        var e;
        var module;
        var stackMode;
        var mainTrace;
        var offsetTrace;
        var mainTracePieces;
        var offsetTracePieces;
        var actualLine;
        var actualChar;
        
        if (HAS_OWN_PROPERTY.call(this.errors, idAlias) && this.errors[idAlias]) {
          err = this.errors[idAlias];
        }
        else if (alias && HAS_OWN_PROPERTY.call(this.errors, alias) && this.errors[alias]) {
          err = this.errors[alias];
        }
        
        // check by moduleID
        if (this.cache[idAlias]) {
          module = this.cache[idAlias];
        }
        else if(alias && this.cache[alias]) {
          this.cache[idAlias] = this.cache[alias];
          module = this.cache[alias];
        }
        
        if (err) {
          errorMessage = 'module ' + idAlias + ' failed to load successfully';
          errorMessage += (err) ? ': ' + err.message : '';
          
          // building a better stack trace
          if (module && module.__error_line) {
            // runtime errors need better stack trace
            stackMode = stacknorm.mode(err);
            mainTrace = stacknorm[stackMode](err);
            offsetTrace = stacknorm[stackMode](module.__error_line);
            mainTracePieces = mainTrace[0].split(/:/);
            offsetTracePieces = offsetTrace[0].split(/:/);
            
            actualLine =  mainTracePieces[mainTracePieces.length - 2] - offsetTracePieces[offsetTracePieces.length - 2];
            actualLine = actualLine - 1;
            
            actualChar = mainTracePieces[mainTracePieces.length - 1];
            
            errorMessage = errorMessage + ' @ Line: ' + actualLine + ' Column: ' + actualChar + ' ';
          }
          
          err.message = errorMessage;
          
          throw err;
        }
        
        return module || null;
      },

      /**
       * Create a module if it doesn't exist, and store it locally
       * @method Executor.createModule
       * @param {string} moduleId - the module identifier
       * @param {string} path - the module's proposed URL
       * @public
       * @returns {Object} - a module object representation
       */
      createModule : function(moduleId, qualifiedId, path) {
        var module;
        
        if (!(/\!/.test(moduleId)) && this.cache[moduleId]) {
          this.cache[qualifiedId] = this.cache[moduleId];
          return this.cache[moduleId];
        }
        
        module = {};
        module.id = moduleId || null;
        module.qualifiedId = qualifiedId || null;
        module.uri = path || null;
        module.exports = {};
        module.exec = false;
        module.setExports = function(xobj) {
          var name;
          for (name in module.exports) {
            if (Object.hasOwnProperty.call(module.exports, name)) {
              debugLog('cannot setExports when exports have already been set. setExports skipped');
              return;
            }
          }
          switch (typeof(xobj)) {
            case 'object':
              // objects are enumerated and added
              for (name in xobj) {
                module.exports[name] = xobj[name];
              }
              break;
            case 'function':
              module.exports = xobj;
              break;
            default:
              // non objects are written directly, blowing away exports
              module.exports = xobj;
              break;
          }
        };
        
        // Important AMD item. Do not store any IDs with an !
        if (!(/\!/.test(moduleId))) {
          this.cache[moduleId] = module;
        }
        
        this.cache[qualifiedId] = module;
        
        return module;
      },

      /**
       * Get the module matching the specified Identifier
       * @method Executor.getModule
       * @param {string} moduleId - the module ID
       * @public
       * @returns {object} the module at the identifier
       */
      getModule : function(moduleId, undef) {
        return this.getFromCache(moduleId) || undef;
      },
      
      /**
       * Build a sandbox around and execute a module
       * @method Executor.runModule
       * @param {object} module - the module
       * @param {string} code - the code to execute
       * @returns {Object} a module object
       * @public
       */
      runModule : function(module, code) {
        debugLog('Executor', 'executing ' + module.uri);

        var functionId = 'exec' + (functionCount++);
        var localMeta = {};
        context.Inject.INTERNAL.executor[functionId] = localMeta;
        
        localMeta.module = module;
        localMeta.require = RequireContext.createRequire(module.id, module.uri, module.qualifiedId);
        localMeta.define = RequireContext.createInlineDefine(module, localMeta.require);

        function swapUnderscoreVars(text) {
          return text.replace(/__MODULE_ID__/g, module.id)
            .replace(/__MODULE_URI__/g, module.uri)
            .replace(/__FUNCTION_ID__/g, functionId)
            .replace(/__INJECT_NS__/g, NAMESPACE);
        }

        var header = swapUnderscoreVars(commonJSHeader);
        var footer = swapUnderscoreVars(commonJSFooter);
        var runCommand = ([header, ';', code, footer]).join('\n');

        executeJavaScriptModule(runCommand, functionId);

        // if a global error object was created
        if (module.__error) {
          // context[NAMESPACE].clearCache();
          // exit early, this module is broken
          debugLog('Executor', 'broken', module.id, module.uri, module.exports);
          this.errors[module.id] = module.__error;
        }

        debugLog('Executor', 'executed', module.id, module.uri, module.exports);
      }
    };
  });
  Executor = new AsStatic();
})();

;/*
Inject
Copyright 2011 LinkedIn

Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at

    http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing,
software distributed under the License is distributed on an "AS
IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either
express or implied.   See the License for the specific language
governing permissions and limitations under the License.
*/

/**
 * The InjectCore is the main configuration point for Inject.
 * It is able to create require() and define() methods within a
 * path context, as well as assign configuration for the
 * various options.
 * @file
**/
var InjectCore;
(function () {
  var AsStatic = Fiber.extend(function () {
    return {
      /**
       * The InjectCore object is meant to be instantiated once, and have its
       * reference assigned to a location outside of the closure.
       * @constructs InjectCore
       */
      init: function () {},

      /**
       * add a plugin to the Inject system
       * @method InjectCore.plugin
       * @param {string} plugin - the name of the plugin (comes before ! in require calls)
       * @param {object} ruleSet - a ruleSet to be assigned to addRule
       * @param {object} functions - a collection of functions to be made available under .plugins[plugin]
       */
      plugin: function (plugin, ruleSet, functions, scope) {
        RulesEngine.addRule(new RegExp('^' + plugin + '!'), ruleSet);
        scope.plugins = scope.plugins || {};
        scope.plugins[plugin] = functions;
      },

      /**
       * set the base path for all module includes
       * @method InjectCore.setModuleRoot
       * @param {string} root - the fully qualified URL for modules to be included from
       * @public
       */
      setModuleRoot: function (root) {
        userConfig.moduleRoot = root;
      },

      /**
       * set the cross domain configuration
       * the cross domain config is an object consisting of two properties,
       * the relayHtml. The HTML file should be
       * located on the remote server (for example the CDN).
       * @method InjectCore.setCrossDomain
       * @param {object} crossDomainConfig - the confuiguration object
       * @public
       */
      setCrossDomain: function (crossDomainConfig) {
        userConfig.xd.relayFile = crossDomainConfig.relayFile || null;
      },

      /**
       * Set the useSuffix value. useSuffix is used to determine globally if
       * a ".js" extension should be added to files by default
       * @method InjectCore.setUseSuffix
       * @param {Boolean} useSuffix - should a suffix be used
       * @public
       */
      setUseSuffix: function (useSuffix) {
        userConfig.useSuffix = useSuffix;
      },

      /**
       * clear the localstorage caches
       * @method InjectCore.clearCache
       * @public
       */
      clearCache: function () {
        if (HAS_LOCAL_STORAGE && lscache) {
          lscache.flush();
        }
      },

      /**
       * set a time (in seconds) for how long to preserve items in cache
       * the default time is 300 seconds
       * @method InjectCore.setExpires
       * @param {int} seconds - the number of seconds to retain files for
       * @public
       * @see userConfig.fileExpires
       */
      setExpires: function (seconds) {
        userConfig.fileExpires = seconds || 0;
      },

      /**
       * set a unique cache identifier for Inject. This allows the parent
       * page to "bust" the cache by invoking setCacheKey with a different
       * value.
       * @method InjectCore.setCacheKey
       * @param {string} cacheKey - the identifier to reference this cache version
       * @public
       */
      setCacheKey: function (cacheKey) {
        var lscacheAppCacheKey;

        if (!HAS_LOCAL_STORAGE || !lscache) {
          return false;
        }

        lscacheAppCacheKey = lscache.get(LSCACHE_APP_KEY_STRING);

        if ((!cacheKey && lscacheAppCacheKey) ||
             (lscacheAppCacheKey !== null && lscacheAppCacheKey !== cacheKey) ||
             (lscacheAppCacheKey === null && cacheKey)) {
          lscache.flush();
          lscache.set(LSCACHE_APP_KEY_STRING, cacheKey);
        }
      },

      /**
       * reset the entire Inject system. This clears the cache, execution caches,
       * and any communicator caches.
       * @method InjectCore.reset
       * @public
       */
      reset: function () {
        this.clearCache();
        Executor.clearCaches();
        Communicator.clearCaches();
      },

      /**
       * enable debugging options. For a full list of debugging options,
       * the wiki page for "Debugging Options" lists the possible keys
       * and impact
       * @method InjectCore.enableDebug
       * @param {string} key - the debugging key to enable or disable
       * @param {boolean} value - the value to assign for the key, defaults to true
       * @public
       */
      enableDebug: function (key, value) {
        userConfig.debug[key] = value || true;
      }
    };
  });
  // Assign the instantiated object outside of our closure
  InjectCore = new AsStatic();
})();
;/*global context:true */
/*
Inject
Copyright 2011 LinkedIn

Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at

    http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing,
software distributed under the License is distributed on an "AS
IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either
express or implied.   See the License for the specific language
governing permissions and limitations under the License.
*/

/**
 * RequireContext is an instance object which provides the
 * CommonJS and AMD interfaces of require(string),
 * require(array, callback) ensure (require.ensure),
 * run (require.run), and define.
 * @file
**/
var RequireContext = Fiber.extend(function () {
  return {
    /**
     * Creates a new RequireContext
     * @constructs RequireContext
     * @param {String} id - the current module ID for this context
     * @param {String} path - the current module URL for this context
     * @param {String} qualifiedId - a (from)-joined collection of paths
     * @public
     */
    init: function (id, path, qualifiedId) {
      this.id = id || null;
      this.path = path || null;
      this.qualifiedId = qualifiedId || null;
    },

    /**
     * Log an operation for this context
     * @method RequireContext#log
     * @param {String} message - the message to log
     * @protected
     */
    log: function (message) {
      debugLog('RequireContext for ' + this.path, message);
    },

    /**
     * get the path associated with this context
     * @method RequireContext#getPath
     * @public
     * @returns {String} the path for the current context
     */
    getPath: function () {
      if (!userConfig.moduleRoot) {
        throw new Error('moduleRoot must be defined. Please use Inject.setModuleRoot()');
      }
      return this.path || userConfig.moduleRoot;
    },

    /**
     * get the ID associated with this context
     * @method RequireContext#getId
     * @public
     * @returns {String} the id of the current context
     */
    getId: function () {
      return this.id || '';
    },

    /**
     * The CommonJS and AMD require interface<br>
     * CommonJS: <strong>require(moduleId)</strong><br>
     * AMD: <strong>require(moduleList, callback)</strong>
     * @method RequireContext#require
     * @param {String|Array} moduleIdOrList - a string (CommonJS) or Array (AMD) of modules to include
     * @param {Function} callback - a callback (AMD) to run on completion
     * @public
     * @returns {Object|null} the object at the module ID (CommonJS) or null (AMD)
     * @see <a href="http://wiki.commonjs.org/wiki/Modules/1.0">http://wiki.commonjs.org/wiki/Modules/1.0</a>
     * @see <a href="https://github.com/amdjs/amdjs-api/wiki/require">https://github.com/amdjs/amdjs-api/wiki/require</a>
     */
    require: function (moduleIdOrList, callback) {
      var module;
      var identifier;
      var assignedModule;
      var qualifiedId;

      if (typeof(moduleIdOrList) === 'string') {
        this.log('CommonJS require(string) of ' + moduleIdOrList);
        if (/^[\d]+$/.test(moduleIdOrList)) {
          throw new Error('require() must be a string containing a-z, slash(/), dash(-), and dots(.)');
        }

        // try to get the module a couple different ways
        identifier = RulesEngine.resolveModule(moduleIdOrList, this.getId());
        qualifiedId = RequireContext.qualifiedId(identifier, this.qualifiedId);

        // try the qualified path if we had a qualified ID
        if (qualifiedId) {
          module = Executor.getModule(qualifiedId);
        }
        
        // if we still don't have a module from a qualified path, try a direct get
        if (!module) {
          module = Executor.getModule(identifier);
        }
        
        // still no module means it was never seen in a loading path
        if (!module) {
          throw new Error('module ' + moduleIdOrList + ' is not available');
        }
        
        // if the module has an error, we need to throw it
        if (module.__error) {
          throw module.__error;
        }
        
        // now it's safe to return the exports
        return module.exports;
      }

      // AMD require
      this.log('AMD require(Array) of ' + moduleIdOrList.join(', '));
      var resolved = [];
      this.ensure(moduleIdOrList, proxy(function (localRequire) {
        for (var i = 0, len = moduleIdOrList.length; i < len; i++) {
          switch(moduleIdOrList[i]) {
          case 'require':
            resolved.push(localRequire);
            break;
          case 'module':
          case 'exports':
            throw new Error('require(array, callback) doesn\'t create a module. You cannot use module/exports here');
          default:
            resolved.push(localRequire(moduleIdOrList[i]));
          }
        }
        callback.apply(context, resolved);
      }, this));
    },

    /**
     * the CommonJS require.ensure interface based on the async/a spec
     * @method RequireContext#ensure
     * @param {Array} moduleList - an array of modules to load
     * @param {Function} callback - a callback to run when all modules are loaded
     * @public
     * @see <a href="http://wiki.commonjs.org/wiki/Modules/Async/A">http://wiki.commonjs.org/wiki/Modules/Async/A</a>
     */
    ensure: function (moduleList, callback) {
      if (Object.prototype.toString.call(moduleList) !== '[object Array]') {
        throw new Error('require.ensure() must take an Array as the first argument');
      }

      this.log('CommonJS require.ensure(array) of ' + moduleList.join(', '));

      // strip builtins (CommonJS doesn't download or make these available)
      moduleList = Analyzer.stripBuiltins(moduleList);

      var require = proxy(this.require, this);
      this.process(moduleList, function(root) {
        if (typeof callback == 'function') {
          callback(require);
        }
      });
    },

    /**
     * Run a module as a one-time approach. This is common verbage
     * in many AMD based systems
     * @method RequireContext#run
     * @param {String} moduleId - the module ID to run
     * @public
     */
    run: function (moduleId) {
      this.log('AMD require.run(string) of ' + moduleId);
      this.ensure([moduleId]);
    },

    /**
     * Define a module with its arguments. Define has multiple signatures:
     * <ul>
     *  <li>define(id, dependencies, factory)</li>
     *  <li>define(id, factory)</li>
     *  <li>define(dependencies, factory)</li>
     *  <li>define(factory)</li>
     * </ul>
     * @method RequireContext#define
     * @param {string} id - if provided, the name of the module being defined
     * @param {Array} dependencies - if provided, an array of dependencies for this module
     * @param {Object|Function} factory - an object literal that defines the module or a function to run that will define the module
     * @public
     * @see <a href="https://github.com/amdjs/amdjs-api/wiki/AMD">https://github.com/amdjs/amdjs-api/wiki/AMD</a>
     */
    define: function () {
      var args = Array.prototype.slice.call(arguments, 0);
      var id = null;
      var dependencies = ['require', 'exports', 'module'];
      var dependenciesDeclared = false;
      var factory = {};
      var remainingDependencies = [];
      var resolvedDependencyList = [];
      var tempModuleId = null;

      // these are the various AMD interfaces and what they map to
      // we loop through the args by type and map them down into values
      // while not efficient, it makes this overloaed interface easier to
      // maintain
      var interfaces = {
        'string array object': ['id', 'dependencies', 'factory'],
        'string object':       ['id', 'factory'],
        'array object':        ['dependencies', 'factory'],
        'object':              ['factory']
      };
      var key = [];
      var value;
      var i;
      for (i = 0, len = args.length; i < len; i++) {
        if (Object.prototype.toString.apply(args[i]) === '[object Array]') {
          key.push('array');
        }
        else if (typeof(args[i]) === 'object' || typeof(args[i]) === 'function') {
          key.push('object');
        }
        else {
          key.push(typeof(args[i]));
        }
      }
      key = key.join(' ');

      if (!interfaces[key]) {
        throw new Error('You did not use an AMD compliant interface. Please check your define() calls');
      }

      key = interfaces[key];
      for (i = 0, len = key.length; i < len; i++) {
        value = args[i];
        switch (key[i]) {
        case 'id':
          id = value;
          break;
        case 'dependencies':
          dependencies = value;
          dependenciesDeclared = true;
          break;
        case 'factory':
          factory = value;
          break;
        }
      }

      // handle anonymous modules
      if (!id) {
        currentExecutingAMD = Executor.getCurrentExecutingAMD();
        if (currentExecutingAMD) {
          id = currentExecutingAMD.id;
        }
        else {
          throw new Error('Anonymous AMD module used, but it was not included as a dependency. This is most often caused by an anonymous define() from a script tag.');
        }
        this.log('AMD identified anonymous module as ' + id);
      }      
      
      this.process(id, dependencies, function(root) {
        // don't bobther with the artificial root we created
        if (!root.data.resolvedId) {
          return;
        }
        // all modules have been ran, now to deal with this guy's args
        var resolved = [];
        var deps = (dependenciesDeclared) ? dependencies : ['require', 'exports', 'module'];
        var require = RequireContext.createRequire(root.data.resolvedId, root.data.resolvedUrl);
        var module = Executor.createModule(root.data.resolvedId, RequireContext.qualifiedId(root), root.data.resolvedUrl);
        var result;
        for (var i = 0, len = deps.length; i < len; i++) {
          switch(deps[i]) {
          case 'require':
            resolved.push(require);
            break;
          case 'module':
            resolved.push(module);
            break;
          case 'exports':
            resolved.push(module.exports);
            break;
          default:
            resolved.push(require(deps[i]));
          }
        }
        if (typeof factory === 'function') {
          result = factory.apply(module, resolved);
          if (result) {
            module.exports = result;
          }
        }
        else if (typeof factory === 'object') {
          module.exports = factory;
        }
        module.amd = true;
        module.exec = true;
      });
    },
    
    /**
     * Process all the modules selected by the various CJS / AMD interfaces
     * builds a tree to handle the dependency download and execution
     * upon completion, calls the provided callback, returning the root node
     * @method RequireContext#process
     * @param {Array} dependencies - an array of dependencies to process
     * @param {Function} callback - a function called when the module tree is downloaded and processed
     * @private
     */
    process: function(possibleId) {
      var id, dependencies, callback;
      
      if (typeof possibleId !== 'string') {
        id = this.id;
        dependencies = arguments[0];
        callback = arguments[1];
      }
      else {
        id = arguments[0];
        dependencies = arguments[1];
        callback = arguments[2];
      }
      
      var root = new TreeNode();
      var count = dependencies.length;
      var node;
      var runner;
      var runners = [];
      var resolveCount = function() {
        if (count === 0 || --count === 0) {
          runner = new TreeRunner(root);
          runner.execute(function() {
            callback(root);
          });
        }
      };
      root.data.originalId = id;
      root.data.resolvedId = id;
      root.data.resolvedUrl = RulesEngine.resolveFile(id, this.path);
      
      if (dependencies.length) {
        for (i = 0, len = dependencies.length; i < len; i++) {
          if (BUILTINS[dependencies[i]]) {
            resolveCount();
            continue;
          }
          
          // add the node always at this point, we just may not need
          // to download it.
          node = new TreeNode();
          node.data.originalId = dependencies[i];
          root.addChild(node);
          
          if (Executor.getModule(dependencies[i])) {
            resolveCount();
            continue;
          }
          else if (Executor.getModule(RequireContext.qualifiedId(RulesEngine.resolveModule(node.data.originalId, root.data.resolvedId), node))) {
            resolveCount();
            continue;
          }
          else {
            runner = new TreeRunner(node);
            runners.push(runner);
            runner.download(resolveCount);
          }
        }
      }
      else {
        resolveCount();
      }
    }
  };
});

/**
 * create a require() method within a given context path
 * relative require() calls can be based on the provided
 * id and path
 * @method RequireContext.createRequire
 * @param {string} id - the module identifier for relative module IDs
 * @param {string} path - the module path for relative path operations
 * @public
 * @returns a function adhearing to CommonJS and AMD require()
 */
RequireContext.createRequire = function (id, path, qualifiedId) {
  var req = new RequireContext(id, path, qualifiedId);
  var require = proxy(req.require, req);

  require.ensure = proxy(req.ensure, req);
  require.run = proxy(req.run, req);
  // resolve an identifier to a URL (AMD compatibility)
  require.toUrl = function (identifier) {
    var resolvedId = RulesEngine.resolveModule(identifier, id);
    var resolvedPath = RulesEngine.resolveFile(resolvedId, path, true);
    return resolvedPath;
  };
  return require;
};

/**
 * create a define() method within a given context path
 * relative define() calls can be based on the provided
 * id and path
 * @method RequireContext.createDefine
 * @param {string} id - the module identifier for relative module IDs
 * @param {string} path - the module path for relative path operations
 * @param {boolean} disableAMD - if provided, define.amd will be false, disabling AMD detection
 * @public
 * @returns a function adhearing to the AMD define() method
 */
RequireContext.createDefine = function (id, path, disableAMD) {
  var req = new RequireContext(id, path);
  var define = proxy(req.define, req);
  define.amd = (disableAMD) ? false : {};
  return define;
};

/**
 * generate a Qualified ID
 * A qualified ID behaves differently than a module ID. Based on it's parents,
 * it refers to the ID as based on the chain of modules that were executed to
 * invoke it. While this may be a reference to another module, a qualified ID is
 * the real source of truth for where a module may be found
 * @method RequireContext.qualifiedId
 * @public
 * @param {Object} rootOrId - either a {TreeNode} or {String} representing the current ID
 * @param {String} qualifiedId - if provided, the qualfied ID is used instead of parent references
 * @returns {String}
 */
RequireContext.qualifiedId = function(rootOrId, qualifiedId) {
  var out = [];
  
  if (typeof rootOrId === 'string') {
    if (qualifiedId) {
      return [rootOrId, qualifiedId].join('(from)');
    }
    else {
      return rootOrId;
    }
  }
  else {
    rootOrId.parents(function(node) {
      if (node.data.resolvedId) {
        out.push(node.data.resolvedId);
      }
    });
    return out.join('(from)');
  }
};

/**
 * Creates a synchronous define() function as used inside of the Inject Sandbox
 * Unlike a global define(), this local define already has a module context and
 * a local require function. It is used inside of the sandbox because at
 * execution time, it's assumed all dependencies have been resolved. This is
 * a much lighter version of RequireContext#define
 * @method RequireContext.createInlineDefine
 * @public
 * @param {Object} module - a module object from the Executor
 * @param {Function} require - a synchronous require function
 * @returns {Function}
 */
RequireContext.createInlineDefine = function(module, require) {
  var define = function() {
    // this is a serial define and is no longer functioning asynchronously',
    function isArray(a) {
      return (Object.prototype.toString.call(a) === '[object Array]');
    }
    var deps = [];
    var depends = ['require', 'exports', 'module'];
    var factory = {};
    var result;
    for (var i = 0, len = arguments.length; i < len; i++) {
      if (isArray(arguments[i])) {
        depends = arguments[i];
        break;
      }
    }
    factory = arguments[arguments.length - 1];
    for (var d = 0, dlen = depends.length; d < dlen; d++) {
      switch(depends[d]) {
      case 'require':
        deps.push(require);
        break;
      case 'module':
        deps.push(module);
        break;
      case 'exports':
        deps.push(module.exports);
        break;
      default:
        deps.push(require(depends[d]));
      }
    }
    if (typeof factory === 'function') {
      result = factory.apply(module, deps);
      if (result) {
        module.exports = result;
      }
    }
    else if (typeof factory === 'object') {
      module.exports = factory;
    }
    module.amd = true;
    module.exec = true;
  };
  define.amd = {};
  return define;
};
;/*
Inject
Copyright 2011 LinkedIn

Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at

    http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing,
software distributed under the License is distributed on an "AS
IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either
express or implied.   See the License for the specific language
governing permissions and limitations under the License.
*/

/**
 * The Rules Engine is used to handle the deriving of pointcut and path
 * information for a given module identifier. It maintains an internal
 * rules table for the environment, and also caches the results of its
 * resolution.
 * @file
**/

var RulesEngine;
(function () {

  // this regex is used to strip leading slashes
  var LEADING_SLASHES_REGEX = /^\/+/g;

  /**
   * Return the "base" directory of a given path
   * @method RulesEngine.basedir
   * @private
   * @param {String} dir - the directory or path to get the basedir of
   */
  var basedir = function(dir) {
    dir = dir.split('/');
    dir.pop();
    dir = dir.join('/');
    return dir;
  };

  var AsStatic = Fiber.extend(function () {
    return {
      /**
       * Create a RulesEngine Object
       * @constructs RulesEngine
       */
      init: function () {
        this.clearRules();
      },

      /**
       * Clear all the rules (and thus all the caches)
       * Used to reset the rules engine
       * @method RulesEngine.clearRules
       */
      clearRules: function() {
        this.moduleRules = [];
        this.fileRules = [];
        this.contentRules = [];
        this.fetchRules = [];
        this.aliasRules = {};
        this.revAliasRules = {};
        this.dirty = {
          moduleRules: true,
          fileRules: true,
          contentRules: true,
          fetchRules: true,
          aliasRules: true,
          revAliasRules: true
        };
        this.caches = {
          moduleRules: {},
          fileRules: {},
          contentRules: {},
          fetchRules: {},
          aliasRules: {},
          revAliasRules: {}
        };

        // deprecated
        // deprecated legacy pointcuts from addRule
        this.addRuleCounter = 0;
        this.addRulePointcuts = {};
        // end deprecated
      },

      /**
       * Add a rule to the collection
       * @method RulesEngine.add
       * @private
       * @param {String} type - the type of rule to add
       * @param {Regex|String} matches - what does this match against
       * @param {Function} rule - the rule to apply
       * @param {Object} options - the options for this rule
       */
      add: function (type, matches, rule, options) {
        this.dirty[type] = true;
        options = options || {};
        var weight = options.weight || this[type].length;
        var last = options.last || false;
        this[type].push({
          matches: matches,
          fn: (typeof rule === 'function') ? rule : function() { return rule; },
          weight: weight,
          last: last,
          all: options
        });
      },

      /**
       * Clear a specific cache
       * @method RulesEngine.clearCache
       * @private
       * @param {String} type - the type of cache to clear
       */
      clearCache: function(type) {
        this.caches[type] = {};
      },

      /**
       * Sort a collection of rules by weight
       * @method RulesEngine.sort
       * @private
       * @param {String} type - the type of rules to sort
       */
      sort: function (type) {
        if (!this.dirty[type]) {
          return;
        }
        this.clearCache(type);
        this[type].sort(function (a, b) {
          return b.weight - a.weight;
        });
        this.dirty[type] = false;
      },

      /**
       * Get the deprecated pointcuts. This method exists
       * while the addRule structure is deprecated
       * @deprecated
       * @method RulesEngine.getDeprecatedPointcuts
       * @param {String} moduleId - the module id to get pointcuts for
       * @returns {Array}
       */
      getDeprecatedPointcuts: function(moduleId) {
        return this.addRulePointcuts[moduleId] || [];
      },

      /**
       * Add a rule to the database. It can be called as:<br>
       * addRule(regexMatch, weight, ruleSet)<br>
       * addRule(regexMatch, ruleSet)<br>
       * addRule(ruleSet)<br>
       * The ruleSet object to apply contains a set of options.
       * <ul>
       * <li>ruleSet.matches: replaces regexMatch if found</li>
       * <li>ruleSet.weight: replaces weight if found</li>
       * <li>ruleSet.last: if true, no further rules are ran</li>
       * <li>ruleSet.path: a path to use instead of a derived path<br>
       *  you can also set ruleSet.path to a function, and that function will
       *  passed the current path for mutation</li>
       * <li>ruleSet.pointcuts.afterFetch: a function to mutate the file after retrieval, but before analysis</li>
       * </ul>
       * @method RulesEngine.addRule
       * @param {RegExp|String} matches - a stirng or regex to match on
       * @param {int} weight - a weight for the rule. Larger values run later
       * @param {Object} rule - an object containing the rules to apply
       * @public
       * @deprecated
       */
      addRule: function (matches, weight, rule) {
        if (!rule) {
          rule = weight;
          weight = null;
        }
        if (!rule) {
          rule = {};
        }
        if (typeof rule === 'string') {
          rule = {
            path: rule
          };
        }
        if (!rule.weight) {
          rule.weight = this.addRuleCounter++;
        }

        if (rule.path) {
          this.addFileRule(matches, rule.path, {
            weight: rule.weight,
            last: rule.last,
            useSuffix: rule.useSuffix,
            afterFetch: (rule.pointcuts && rule.pointcuts.afterFetch) ? rule.pointcuts.afterFetch : null
          });
        }
        else if (rule.pointcuts && rule.pointcuts.afterFetch) {
          this.addContentRule(matches, rule.pointcuts.afterFetch, {
            weight: rule.weight
          });
        }
      },

      /**
       * Add a module ID rule to the system
       * A module rule can convert one module ID to another. This is
       * useful for maintaining module ID's even when you move modules
       * around in a backwards incompatible way
       * @method RulesEngine.addModuleRule
       * @param {String|Regex} matchesId - if the module matches this pattern, then rule will be used
       * @param {String|Function} rule - a string or function that describes how to transform the module id
       * @param {Object} options - the additional options for this rule such as "last" (last rule to run), "weight" (change the ordering)
       */
      addModuleRule: function (matchesId, rule, options) {
        return this.add('moduleRules', matchesId, rule, options);
      },

      /**
       * Add a file path rule to the system
       * A file rule can convert one file path to another. This is useful
       * for redirecting one link to another. For example, a base path of "jquery"
       * can be redirected to a specific jQuery version.
       * @method RulesEngine.addFileRule
       * @param {String|Regex} matchesPath - if the path matches this pattern, then rule will be used
       * @param {String|Function} rule - a string or function that describes how to transform the path
       * @param {Object} options - the additional options for this rule such as "last" (last rule to run), "weight" (change the ordering)
       */
      addFileRule: function (matchesPath, rule, options) {
        return this.add('fileRules', matchesPath, rule, options);
      },

      /**
       * Add a content transformation rule
       * Content transformations allow you to change the file's contents itself,
       * without altering the original file. This allows you to do things like
       * <ul>
       *   <li>Shim "jQuery" and store it in module.exports</li>
       *   <li>Download a non-js file and convert it to a JS object (like our plugins)</li>
       *   <li>Replace the file with an altered version</li>
       * </ul>
       * @method RulesEngine.addFileRule
       * @param {String|Regex} matchesPath - if the path matches this pattern, then rule will be used
       * @param {RulesEngine~contentRuleCallback} rule - a function that describes how to transform the content
       * @param {Object} options - the additional options for this rule
       */
      /**
       * The content rule function allows you to asychronously change a file
       * @callback RulesEngine~contentRuleCallback
       * @param {Function} next - a function to call on completion, takes "error" and "result"
       * @param {String} content - the current content
       */
      addContentRule: function (matchesPath, rule, options) {
        return this.add('contentRules', matchesPath, rule, options);
      },

      /**
       * Add a path retrieval rule
       * Path retrieval rules allow us to change how we get our content. This allows
       * specific modules to bypass the default communicator fetch process.
       * @method RulesEngine.addFetchRule
       * @param {String|Regex} matchesId - if the id matches this pattern, then rule will be used
       * @param {RulesEngine~fetchRuleCallback} rule - a function that describes how to transform the path
       * @param {Object} options - the additional options for this rule
       */
      /**
       * The fetch rule function allows you to asychronously download the file
       * @callback RulesEngine~fetchRuleCallback
       * @param {Function} next - a function to call on completion, takes "error" and "result"
       * @param {String} content - the current content
       * @param {Object} resolver - a resolver with two methods: module() for module resolution, and url()
       * @param {Communicator} communicator - a partial Communicator object, with a get() function
       * @param {Object} options - additional options such as a parent reference
       */
      addFetchRule: function (matchesId, rule, options) {
        return this.add('fetchRules', matchesId, rule, options);
      },

      /**
       * Add a package alias. Useful for installing a module into a global location
       * Packages are stored as "originalName": [aliases]
       * and "alias": "originalName".
       * @method RulesEngine.addPackage
       * @param {String} resolvedId - the resolved ID to match against
       * @param {String} alsoKnownAs - the alternate ID for this matching string
       */
       // jquery-1.7 aka jquery
      addPackage: function (resolvedId, alsoKnownAs) {
        this.dirty.aliasRules = true;
        if (this.revAliasRules[resolvedId]) {
          throw new Error('An alias can only map back to 1 origin');
        }
        if (!this.aliasRules[resolvedId]) {
          this.aliasRules[resolvedId] = [];
        }

        this.aliasRules[resolvedId].push(alsoKnownAs);
        this.revAliasRules[alsoKnownAs] = resolvedId;
      },

      /**
       * Resolve an identifier after applying all rules
       * @method RulesEngine.resolveModule
       * @param {String} moduleId - the identifier to resolve
       * @param {String} relativeTo - a base path for relative identifiers
       * @public
       * @returns {String} the resolved identifier
       */
      resolveModule: function (moduleId, relativeTo) {
        moduleId = moduleId || '';
        relativeTo = relativeTo || '';

        this.sort('moduleRules');
        var lastId = moduleId;
        var i = 0;
        var rules = this.moduleRules;
        var len = rules.length;
        var isMatch = false;
        var matches;
        var fn;
        for (i; i < len; i++) {
          matches = rules[i].matches;
          fn = rules[i].fn;

          isMatch = false;
          if (typeof matches === 'string') {
            if (matches === moduleId) {
              isMatch = true;
            }
          }
          else if (typeof matches.test === 'function') {
            isMatch = matches.test(moduleId);
          }

          if (isMatch) {
            lastId = fn(lastId);
            if (matches.last) {
              break;
            }
          }
        }

        // shear off all leading slashes
        lastId = lastId.replace(LEADING_SLASHES_REGEX, '');

        // we don't need/want relativeTo if there's no leading .
        if (lastId.indexOf('.') !== 0) {
          relativeTo = null;
        }

        // adjust relativeTo to a basedir if provided
        if (relativeTo) {
          relativeTo = basedir(relativeTo);
        }

        // compute the relative path
        lastId = this.getRelative(lastId, relativeTo);

        // strip leading / as it is not needed
        lastId = lastId.replace(LEADING_SLASHES_REGEX, '');

        // cache and return
        this.caches.moduleRules[moduleId] = lastId;
        return lastId;
      },

      /**
       * resolve a URL relative to a base path
       * @method RulesEngine.resolveFile
       * @param {String} path - the path to resolve
       * @param {String} relativeTo - a base path for relative URLs
       * @param {Boolean} noSuffix - do not use a suffix for this resolution
       * @public
       * @returns {String} a resolved URL
       */
      resolveFile: function (path, relativeTo, noSuffix) {
        path = path || '';
        relativeTo = relativeTo || '';

        this.sort('fileRules');
        var lastPath = path;
        var i = 0;
        var rules = this.fileRules;
        var len = rules.length;
        var isMatch = false;
        var matches;
        var fn;

        // deprecated
        var deprecatedPointcuts = [];
        // end deprecated

        for (i; i < len; i++) {
          matches = rules[i].matches;
          fn = rules[i].fn;

          isMatch = false;
          if (typeof matches === 'string') {
            if (matches === path) {
              isMatch = true;
            }
          }
          else if (typeof matches.test === 'function') {
            isMatch = matches.test(path);
          }

          if (isMatch) {
            lastPath = fn(lastPath);

            // deprecated
            if (rules[i].all && rules[i].all.afterFetch) {
              deprecatedPointcuts.push(rules[i].all.afterFetch);
            }
            // end deprecated

            if (rules[i].last) {
              break;
            }
          }
        }

        // if no module root, freak out
        if (!userConfig.moduleRoot && typeof console != 'undefined' && typeof console.log == 'function') {
          console.log('Without moduleRoot defined, Inject will default to the URL of the current page. This may cause unexpected behavior');
        }

        if (!lastPath) {
          // store deprecated pointcuts
          // deprecated
          this.addRulePointcuts[lastPath] = deprecatedPointcuts;
          // end deprecated

          // store and return
          this.caches.fileRules[path] = lastPath;
          return lastPath;
        }

        // if there is no basedir function from the user, we need to slice off the last segment of relativeTo
        // otherwise, we can use the baseDir() function
        // otherwise (no relativeTo) it is relative to the moduleRoot
        if (relativeTo && !userConfig.baseDir) {
          relativeTo = relativeTo.replace(PROTOCOL_REGEX, PROTOCOL_EXPANDED_STRING).split('/');
          if (relativeTo[relativeTo.length - 1] && relativeTo.length !== 1) {
            // not ending in /
            relativeTo.pop();
          }
          relativeTo = relativeTo.join('/').replace(PROTOCOL_EXPANDED_REGEX, PROTOCOL_STRING);
        }
        else if (relativeTo) {
          relativeTo = userConfig.baseDir(relativeTo);
        }
        else if (userConfig.moduleRoot) {
          relativeTo = userConfig.moduleRoot;
        }
        else {
          relativeTo = location.pathname;
        }

        // exit early on resolved http URL
        if (ABSOLUTE_PATH_REGEX.test(lastPath)) {
          this.caches.fileRules[path] = lastPath;
          return lastPath;
        }

        // take off the :// to replace later
        relativeTo = relativeTo.replace(PROTOCOL_REGEX, PROTOCOL_EXPANDED_STRING);
        lastPath = lastPath.replace(PROTOCOL_REGEX, PROTOCOL_EXPANDED_STRING);

        // #169: query strings in base
        if (/\?/.test(relativeTo)) {
          lastPath = relativeTo + lastPath;
        }
        else {
          lastPath = this.getRelative(lastPath, relativeTo);
        }

        // restore the ://
        lastPath = lastPath.replace(PROTOCOL_EXPANDED_REGEX, PROTOCOL_STRING);

        // add a suffix if required
        if (!noSuffix && userConfig.useSuffix && !FILE_SUFFIX_REGEX.test(lastPath)) {
          lastPath = lastPath + BASIC_FILE_SUFFIX;
        }

        // store deprecated pointcuts
        // deprecated
        this.addRulePointcuts[lastPath] = deprecatedPointcuts;
        // end deprecated

        // store and return
        this.caches.fileRules[path] = lastPath;
        return lastPath;
      },

      /**
       * Get the alternate names for a package
       * Packages are stored as "originalName": [aliases]
       * and "alias": "originalName".
       * @method RulesEngine.getAliases
       * @param {String} id - The resolved or Alias ID to look up
       * @returns {Array} all other known names
       * @public
       */
      getAliases: function (id) {
        return this.aliasRules[id] || [];
      },

      /**
       * Get the alternate names for a package
       * Packages are stored as "originalName": [aliases]
       * and "alias": "originalName".
       * @method RulesEngine.getOriginalName
       * @param {String} id - The resolved or Alias ID to look up
       * @returns {String} a matching alias if found
       * @public
       */
      getOriginalName: function (alias) {
        return this.revAliasRules[alias] || null;
      },

      /**
       * Get the fetch rules for a given moduleId
       * @method RulesEngine.getFetchRules
       * @param {String} moduleId - The module ID to retrieve fetch rules for
       * @public
       * @returns {Array} A collection of fetch rules for this module ID
       */
      getFetchRules: function (moduleId) {
        // if (!this.dirty.fetchRules && this.caches.fetchRules[moduleId]) {
        //   return this.caches.fetchRules[moduleId];
        // }
        this.sort('fetchRules');

        var i = 0;
        var rules = this.fetchRules;
        var len = rules.length;
        var isMatch = false;
        var matches;
        var fn;
        var matchingRules = [];
        for (i; i < len; i++) {
          matches = rules[i].matches;
          fn = rules[i].fn;

          isMatch = false;
          if (typeof matches === 'string') {
            if (matches === moduleId) {
              isMatch = true;
            }
          }
          else if (typeof matches.test === 'function') {
            isMatch = matches.test(moduleId);
          }

          if (isMatch) {
            matchingRules.push(fn);
          }
        }

        this.caches.contentRules[moduleId] = matchingRules;
        return matchingRules;
      },

      /**
       * Get the content rules for a given path
       * @method RulesEngine.getContentRules
       * @param {String} path - The path to retrieve content rules for
       * @public
       * @returns {Array} A collection of content rules for this path
       */
      getContentRules: function (path) {
        // if (!this.dirty.contentRules && this.caches.contentRules[path]) {
        //   return this.caches.contentRules[path];
        // }
        this.sort('contentRules');

        var i = 0;
        var rules = this.contentRules;
        var len = rules.length;
        var isMatch = false;
        var matches;
        var fn;
        var matchingRules = [];
        var found = false;

        // deprecated
        var deprecatedPointcuts = this.addRulePointcuts[path] || [];
        // end deprecated

        for (i; i < len; i++) {
          matches = rules[i].matches;
          fn = rules[i].fn;

          isMatch = false;
          if (typeof matches === 'string') {
            if (matches === path) {
              isMatch = true;
            }
          }
          else if (typeof matches.test === 'function') {
            isMatch = matches.test(path);
          }

          if (isMatch) {
            matchingRules.push(fn);
          }
        }

        // add any matching deprecated pointcuts
        // deprecated
        each(deprecatedPointcuts, function (depPC) {
          found = false;
          each(matchingRules, function (normalPC) {
            if (normalPC === depPC) {
              found = true;
            }
          });
          if (!found) {
            matchingRules.push(depPC);
          }
        });
        // end deprecated

        this.caches.contentRules[path] = matchingRules;
        return matchingRules;
      },

      /**
       * Dismantles and reassembles a relative path by exploding on slashes
       * @method RulesEngine.getRelative
       * @param {String} id - the initial identifier
       * @param {String} base - the base path for relative declarations
       * @private
       * @returns {String} a resolved path with no relative references
       */
      getRelative: function (id, base) {
        var blownApartURL;
        var resolved = [];
        var piece;

        base = base || '';

        // exit early on resolved :// in a URL
        if (ABSOLUTE_PATH_REGEX.test(id)) {
          return id;
        }

        blownApartURL = [].concat(base.split('/'), id.split('/'));
        for (var i = 0, len = blownApartURL.length; i < len; i++) {
          piece = blownApartURL[i];

          if (piece === '.' || (piece === '' && i > 0)) {
            // skip . or "" (was "//" in url at position 0)
            continue;
          }
          else if (piece === '..') {
            // up one directory
            if (resolved.length === 0) {
              throw new Error('could not traverse higher than highest path: ' + id + ', ' + base);
            }
            resolved.pop();
          }
          else {
            // fragment okay, add
            resolved.push(piece);
          }
        }

        resolved = resolved.join('/');
        return resolved;
      }
    };
  });
  RulesEngine = new AsStatic();
})();
;var TreeRunner = Fiber.extend(function () {
  /**
   * Perform a function on the next-tick, faster than setTimeout
   * Taken from stagas / public domain
   * By using window.postMessage, we can immediately queue a function
   * to run on the event stack once the current JS thread has completed.
   * For browsers that do not support postMessage, a setTimeout of 0 is
   * used instead.
   * @method TreeRunner.nextTick
   * @private
   * @param {Function} fn - the function to call on the next tick
   */
  var nextTick = (function() {
    var queue = [],
        hasPostMessage = !!window.postMessage,
        messageName = 'inject-nexttick',
        dirty = false,
        trigger,
        processQueue;
  
    function flushQueue () {
      var lQueue = queue;
      queue = [];
      dirty = false;
      fn = lQueue.shift();
      while (fn) {
        fn();
        fn = lQueue.shift();
      }
    }
  
    function nextTick (fn) {
      queue.push(fn);
      if (dirty) return;
      dirty = true;
      trigger();
    }
  
    if (hasPostMessage) {
      trigger = function () { window.postMessage(messageName, '*'); };
      processQueue = function (event) {
        if (event.source == window && event.data === messageName) {
          if (event.stopPropagation) {
            event.stopPropagation();
          }
          else {
            event.returnValue = false;
          }
          flushQueue();
        }
      };
      nextTick.listener = addListener(window, 'message', processQueue, true);
    }
    else {
      trigger = function () { window.setTimeout(function () { processQueue(); }, 0); };
      processQueue = flushQueue;
    }

    nextTick.removeListener = function () {
      removeListener(window, 'message', processQueue, true);
    };

    return nextTick;
  }());

  /**
   * Build a communcator function. If there are fetch rules, create a flow control
   * to handle communication (as opposed to the internal communicator).
   *
   * @private
   * @param  {TreeNode} node      The TreeNode you're building the communicator for.
   * @return {Function}           The built communicator method.
   */
  function buildCommunicator(node) {

    var nodeData = node.data,
        parentData = node.getParent() ? node.getParent().data : null,
        fetchRules = RulesEngine.getFetchRules(nodeData.resolvedId),
        commFlow = new Flow(),

        commFlowResolver = {
          module: function() { return RulesEngine.resolveModule.apply(RulesEngine, arguments); },
          url: function() { return RulesEngine.resolveFile.apply(RulesEngine, arguments); }
        },

        commFlowCommunicator = {
          get: function() { return Communicator.get.apply(Communicator, arguments); }
        },

        addComm = function(fn) {
          commFlow.seq(function(next, error, contents) {
            fn(next, contents, commFlowResolver, commFlowCommunicator, {
              moduleId: nodeData.originalId,
              parentId: (parentData) ? parentData.originalId : '',
              parentUrl: (parentData) ? parentData.resolvedUrl : ''
            });
          });
        };
    
    // is this module already available? If so, don't redownload. This happens often when
    // there was an inline define() on the page
    if (Executor.getModule(nodeData.resolvedId)) {
      return function(a, b, cb) {
        cb('');
      };
    }

    else if (Executor.getModule(RequireContext.qualifiedId(node))) {
      return function(a, b, cb) {
        cb('');
      };
    }

    else if (fetchRules.length > 0) {
      return function(name, path, cb) {
        var i = 0,
            len = fetchRules.length;
        commFlow.seq(function(next) {
          next(null, '');
        });
        for (i; i < len; i++) {
          addComm(fetchRules[i]);
        }
        commFlow.seq(function (next, error, contents) {
          // If AMD is enabled, and it has a new ID, then assign that
          cb(contents);
        });
      };
    }

    return Communicator.get;
  }

  /**
   * Fetch dependencies from child nodes and kick off downloads.
   *
   * @private
   * @param  {TreeNode}   node    The children's parent node.
   * @param  {Function} callback  A method to call when the downloading is complete.
   */
  function downloadDependencies(node, callback) {

    var requires = Analyzer.extractRequires(node.data.file),
        children = requires.length,
        i = 0,
        len = children,
        child,
        runner,
    
        childDone = function() {
          children--;
          if (children === 0) {
            callback();
          }
        },
    
        childRunner = function(r) {
          nextTick(function() {
            r.download(childDone);
          });
        };

    if (!requires.length) {
      return callback();
    }

    for (i; i < len; i++) {
      child = new TreeNode();
      child.data.originalId = requires[i];
      node.addChild(child);
      
      if (Executor.getModule(requires[i]) && Executor.getModule(requires[i]).exec) {
        // we have it
        childDone();
      }
      else {
        // go get it
        runner = new TreeRunner(child);
        childRunner(runner);
      }
    }
  }
  
  return {
    /**
     * Construct a Tree Runner Object
     * A tree runner, given a node, is responsible for the download and execution
     * of the root node and any children it encounters.
     * @constructs TreeRunner
     * @param {TreeNode} root - a Tree Node at the root of this tree
     */
    init: function(root) {
      this.root = root;
    },
    
    /**
     * Downloads the tree, starting from this node, and spanning into its children
     * @method TreeRunner#download
     * @public
     * @param {Function} downloadComplete - a callback executed when the download is done
     */
    download: function(downloadComplete) {

      var root = this.root,
          rootData = root.data,
          rootParent = root.getParent(),
          communicatorGet;

      // given original id & parent resolved id, create resolved id
      // given resolved id & parent resolved url, create resolved url
      // build a communicator
      // communicator download (async)
      // -- on complete (file)
      // -- transform the contents (rules)
      // -- assign file to child
      // -- extract requires
      // -- for each child, create children, up the children count by 1
      // -- in a next-tick, create a new TreeDownloader at the new child (async)
      // -- -- on complete, decrement children count by 1
      // -- -- when children count hits 0, call downloadComplete()
      if (rootParent) {
        rootData.resolvedId = RulesEngine.resolveModule(rootData.originalId, rootParent.data.resolvedId);
      }
      else {
        rootData.resolvedId = RulesEngine.resolveModule(rootData.originalId, '');
      }
      rootData.resolvedUrl = RulesEngine.resolveFile(rootData.resolvedId);

      // Build a communicator.
      communicatorGet = buildCommunicator(root);

      // Download the file via communicator, get back contents
      communicatorGet(rootData.originalId, rootData.resolvedUrl, function(content) {

        // build a flow control to adjust the contents based on rules
        var pointcuts = RulesEngine.getContentRules(rootData.resolvedUrl),
            contentFlow = new Flow(),
            i = 0,
            len = pointcuts.length;

            addContent = function(fn) {
              contentFlow.seq(function (next, error, contents) {
                fn(next, contents);
              });
            };

        contentFlow.seq(function (next) {
          next(null, content);
        });

        for (i; i < len; i++) {
          addContent(pointcuts[i]);
        }

        contentFlow.seq(function (next, error, contents) {

          var circular = false,
              searchIndex = {},
              parent = rootParent,
              module,
              qualifiedId;

          if (typeof contents === 'string') {
            rootData.file = contents;
          }
          else {
            rootData.exports = contents;
          }

          // determine if this is circular
          searchIndex[rootData.originalId] = true;
          while(parent && !circular) {
            if (searchIndex[parent.data.originalId]) {
              circular = true;
            }
            else {
              searchIndex[parent.data.originalId] = true;
              parent = parent.getParent();
            }
          }
          rootData.circular = circular;

          // kick off its children
          if (rootData.exports) {
            // when there are exports available, then we prematurely resolve this module
            // this can happen when the an external rule for the communicator has resolved
            // the export object for us
            module = Executor.createModule(rootData.resolvedId, RequireContext.qualifiedId(root), rootData.resolvedUrl);
            module.exec = true;
            module.exports = contents;
            downloadComplete();
          }
          else if (rootData.circular) {
            // circular nodes do not need to download their children (again)
            downloadComplete();
          }
          else {
            // Analyze the file for depenencies and kick off a child download for each one.
            downloadDependencies(root, downloadComplete);
          }
        });
      });
    },
    
    /**
     * Executes a tree, starting from the root node
     * In order to ensure a tree has all of its dependencies available
     * a post-order traversal is used
     * http://en.wikipedia.org/wiki/Tree_traversal#Post-order
     * This loads Bottom-To-Top, Left-to-Right
     * @method TreeRunner#execute
     * @public
     * @param {Function} executeComplete - a callback function ran when all execution is done
     */
    execute: function(executeComplete) {

      var nodes = this.root.postOrder(),
          len = nodes.length,
          i = 0,
      
          runNode = function(node) {

            var nodeData = node.data,
                module,
                result;

            if (!nodeData.resolvedId) {
              return;
            }
            
            // executor: create a module
            // if not circular, executor: run module (otherwise, the circular reference begins as empty exports)
            module = Executor.createModule(nodeData.resolvedId, RequireContext.qualifiedId(node), nodeData.resolvedUrl);
            nodeData.module = module;
            
            if (module.exec) {
              return;
            }
            
            if (!nodeData.circular) {
              if (nodeData.exports) {
                // exports came pre set
                module.exports = nodeData.exports;
                module.exec = true;
              }
              else if (typeof nodeData.file === 'string') {
                Executor.runModule(module, nodeData.file);
                module.exec = true;
                // if this is an AMD module, it's exports are coming from define()
                if (!module.amd) {
                  nodeData.exports = module.exports;
                }
              }
            }
          };
      
      for (i; i < len; i++) {
        runNode(nodes[i]);
      }
      
      executeComplete();
    }
  };
});;/*
Inject
Copyright 2011 LinkedIn

Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at

    http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing,
software distributed under the License is distributed on an "AS
IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either
express or implied.   See the License for the specific language
governing permissions and limitations under the License.
*/

/**
 * The TreeNode is a data structure object for building N-ary
 * trees. It also collects methods for iterating on itself
 * via various traversal methods.
 * @file
**/
var TreeNode = Fiber.extend(function () {
  return {
    /**
     * Create a TreeNode
     * @constructs TreeNode
     */
    init: function () {
      this.data = {};
      this.children = [];
      this.left = null;
      this.right = null;
      this.parent = null;
    },

    /**
     * Add a child to the node. It also sets up left
     * and right relationships as well as the parent.
     * @method TreeNode#addChild
     * @param {TreeNode} node - the TreeNode to add
     * @public
     */
    addChild: function (node) {
      var rightChild;
      if (this.children.length > 0) {
        rightChild = this.children[this.children.length - 1];
        node.setLeft(rightChild);
        rightChild.setRight(node);
      }
      this.children.push(node);
      return node.setParent(this);
    },

    /**
     * Get all the children of this node
     * @method TreeNode#getChildren
     * @public
     * @returns {Array} an array of child TreeNode objects
     */
    getChildren: function () {
      return this.children;
    },

    /**
     * An interface for setting the "left" node of the tree
     * @method TreeNode#setLeft
     * @param {TreeNode} node - the node to set
     * @public
     * @returns {TreeNode}
     */
    setLeft: function (node) {
      this.left = node;
      return this.left;
    },

    /**
     * Get the node "left" of the current
     * @method TreeNode#getLeft
     * @public
     * @returns {TreeNode}
     */
    getLeft: function () {
      return this.left;
    },

    /**
     * An interface for setting the "right" node of the tree
     * @method TreeNode#setRight
     * @param {TreeNode} node - the node to set
     * @public
     * @returns {TreeNode}
     */
    setRight: function (node) {
      this.right = node;
      return this.right;
    },

    /**
     * Get the node "right" of the current
     * @method TreeNode#getRight
     * @public
     * @returns {TreeNode}
     */
    getRight: function () {
      return this.right;
    },

    /**
     * An interface for setting the "parent" node of current
     * @method TreeNode#setParent
     * @param {TreeNode} node - the node to set
     * @public
     * @returns {TreeNode}
     */
    setParent: function (node) {
      this.parent = node;
      return this.parent;
    },

    /**
     * Get the node "parent" of the current
     * @method TreeNode#getParent
     * @public
     * @returns {TreeNode}
     */
    getParent: function () {
      return this.parent;
    },
    
    /**
     * Returns all of a requested data element for the parents
     * @method TreeNode#parents
     * @param {String} param - the data paramter to get
     * @param {string} joins - the string to join it
     * @returns {Array} - an array of the parent values
     */
    parents: function(callback) {
      var output = [],
          currentNode = this;
      
      while (currentNode) {
        if (callback) {
          callback(currentNode);
        }
        output.push(currentNode);
        currentNode = currentNode.getParent();
      }
      
      return output;
    },

    /**
     * Perform a postOrder traversal over the tree, optionally running
     * a supplied callback
     * @method TreeNode#postOrder
     * @param {Function} callback - a callback to run for each node
     * @public
     * @returns {Array} the nodes of the tree, ordered by post-order
     */
    postOrder: function (callback) {
      // post order traversal to an array
      // left, right, parent
      var currentNode = this,
          direction = null,
          output = [];

      while (currentNode) {

        if (currentNode.getChildren().length > 0 && direction !== 'up') {
          direction = 'down';
          currentNode = currentNode.getChildren()[0];
          continue;
        }

        // node correct
        output.push(currentNode);
        if (callback) {
          callback(currentNode);
        }
        // end node correct

        if (currentNode.getRight()) {
          direction = 'right';
          currentNode = currentNode.getRight();
          continue;
        }

        if (currentNode.getParent()) {
          direction = 'up';
          currentNode = currentNode.getParent();
          continue;
        }

        return output;
      }
    }
  };
});

TreeNode = TreeNode;;/*global context:true */
/*
Inject
Copyright 2011 LinkedIn

Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at

    http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing,
software distributed under the License is distributed on an "AS
IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either
express or implied.   See the License for the specific language
governing permissions and limitations under the License.
*/
/**
    This file defines the public interface for Inject
    many functions in this collection pass through via proxy
    to internal methods
    @file public interface for Inject
 */
var globalRequire = new RequireContext();

var errorQueue = [];

/**
    This object contains the public interface for Inject.
    @class
    @type {object}
    @global
 */
context.Inject = {
  /**
      This object and its properties are meant solely for consumption
      @private
   */
  INTERNAL: {
    // expose all our classes for troubleshooting ease
    Classes: {
      Analyzer: Analyzer,
      Communicator: Communicator,
      Executor: Executor,
      InjectCore: InjectCore,
      RequireContext: RequireContext,
      RulesEngine: RulesEngine,
      TreeNode: TreeNode,
      TreeRunner: TreeRunner
    },
    
    // used by the executor. these let inject know the module that is currently running
    defineExecutingModuleAs: proxy(Executor.defineExecutingModuleAs, Executor),
    undefineExecutingModule: proxy(Executor.undefineExecutingModule, Executor),

    // a hash of publicly reachable module sandboxes ie exec0, exec1...
    executor: {},

    // a globally available require() call for the window and base page
    globalRequire: globalRequire
  },

  plugins: {},

  /**
      Clears any locally cached modules, downloads and local storage.
      @see InjectCore.reset
      @method
      @public
   */
  reset: proxy(InjectCore.reset, InjectCore),
  /**
      Enables debugging options.
      @see InjectCore.enableDebug
      @method
      @public
   */
  enableDebug: function () {
    InjectCore.enableDebug.apply(this, arguments);
  },
  
  /**
   * Add a listener for error events
   * @method onError
   * @public
   */
	onError: function(fn) {
    errorQueue.push(fn);
  },

  
  /**
   * Emit an error to all onError handlers
   * @method emit
   * @public
   */	
  emit: function(e) {
    for (var i = 0, len = errorQueue.length; i < len; i++) {
      errorQueue[i].call(context, e);
    }
  },


  /**
    Enables AMD Plugins if that's your thing
    Adds a special rule to make AMD plugins go round
    @method
    @public
  */
  enableAMDPlugins: function () {
    // modules matching pattern
    RulesEngine.addFetchRule(/^.+?\!.+$/, function (next, content, resolver, communicator, options) {
      var moduleName = options.moduleId;
      var parentId = options.parentId;
      var parentUrl = options.parentUrl;

      var pieces = moduleName.split('!');
      var pluginId = resolver.module(pieces[0], parentId);
      var pluginUrl = resolver.url(pluginId, parentUrl);
      var identifier = pieces[1];

      var parentRequire = RequireContext.createRequire(parentId, parentUrl);
      
      // when loading via a plugin, once you call load() or load.fromText(), you are DONE
      // this special require ensures you cannot call require() after you've gotten the text
      // we then copy all the properties over to ensure it behaves (duck typing) like the
      // normal require
      var loadCalled = false;
      var pluginRequire = function() {
        if (loadCalled) {
          return;
        }
        return parentRequire.apply(parentRequire, arguments);
      };
      var addToPluginRequire = function(prop) {
        pluginRequire[prop] = function() {
          return parentRequire[prop].apply(parentRequire, arguments);
        };
      };
      for (var prop in parentRequire) {
        if (HAS_OWN_PROPERTY.call(parentRequire, prop)) {
          addToPluginRequire(prop);
        }
      }
      
      // the resolver function is passed into a plugin for resolving a name relative to
      // the current module's scope. We pass through to resolver.module which passes
      // through to RulesEngine
      var resolveFn = function (name) {
        return resolver.module(name, parentId);
      };
      
      // to run an AMD plugin
      parentRequire([pluginId], function(plugin) {
        // normalize the module ID if the plugin supports it
        var normalized = (plugin.normalize) ? plugin.normalize(identifier, resolveFn) : resolveFn(identifier);
        
        // create the onload handlers that trigger the callback on completion
        var onload = function(contents) {
          if (loadCalled) {
            return;
          }
          loadCalled = true;
          
          // if it is a string, then its exports are saved as a URI component
          if (typeof(contents) === 'string') {
            contents = ['module.exports = decodeURIComponent("', encodeURIComponent(contents), '");'].join('');
          }

          next(null, contents);
        };
        onload.fromText = function(moduleName, contents) {
          if (loadCalled) {
            return;
          }
          loadCalled = true;
          
          if (!contents) {
            contents = moduleName;
            moduleName = null;
          }
          
          // the contents of this are good
          next(null, contents);
        };

        plugin.load(normalized, pluginRequire, onload, {});
      });
    });
  },
  /**
      Sets base path for all module includes.
      @see InjectCore.setModuleRoot
      @method
      @public
   */
  setModuleRoot: function () {
    InjectCore.setModuleRoot.apply(this, arguments);
  },
  /**
      Set a time for how long to preserve items in cache.
      The default time is 300 seconds.
      @see InjectCore.setExpires
      @method
      @public
   */
  setExpires: function () {
    InjectCore.setExpires.apply(this, arguments);
  },
  /**
      Sets unique cache identifier for Inject.  This allows the parent page
      to "bust" the cache by invoking setCacheKey with a different value.
      @see InjectCore.setCacheKey
      @method
      @public
   */
  setCacheKey: function () {
    InjectCore.setCacheKey.apply(this, arguments);
  },
  /**
      Sets the cross-domain configuration.  The cross-domain configuration
      is an object consisting of one property: relayHtml.  The
      HTML file should be located on the remote server (for example
      the CDN).
      @see InjectCore.setCrossDomain
      @method
      @public
   */
  setCrossDomain: function () {
    InjectCore.setCrossDomain.apply(this, arguments);
  },

  /**
      Sets the useSuffix user config. The useSuffix config tells the RulesEngine
      not to auto-append a .js extension. This is highly helpful in concatenated
      environments or environments with JS being generated programatically.
  */
  setUseSuffix: function (val) {
    InjectCore.setUseSuffix(val);
  },

  /**
   * Set the global AMD property. Setting this to "true" can disable
   * the global AMD detection. This is really useful in scenarios where
   * you anticipate mixing script tags with your loader framework
   */
  disableGlobalAMD: function (disable) {
    if (disable) {
      context.define = RequireContext.createDefine(null, null, true);
    }
    else {
      context.define = RequireContext.createDefine();
    }
  },

  /**
      Clears the local storage caches.
      @see InjectCore.clearCache
      @method
      @public
   */
  clearCache: proxy(InjectCore.clearCache, InjectCore),

  /**
      @see RulesEngine.addRule
      @method
      @deprecated
      @public
   */
  addRule: function () {
    RulesEngine.addRule.apply(RulesEngine, arguments);
  },

  /**
      @see RulesEngine.addModuleRule
      @method
      @public
   */
  addModuleRule: function () {
    RulesEngine.addModuleRule.apply(RulesEngine, arguments);
  },

  /**
      @see RulesEngine.addFileRule
      @method
      @public
   */
  addFileRule: function () {
    RulesEngine.addFileRule.apply(RulesEngine, arguments);
  },

  /**
      @see RulesEngine.addContentRule
      @method
      @public
   */
  addContentRule: function () {
    RulesEngine.addContentRule.apply(RulesEngine, arguments);
  },

  /**
      @see RulesEngine.addFetchRule
      @method
      @public
   */
  addFetchRule: function () {
    RulesEngine.addFetchRule.apply(RulesEngine, arguments);
  },

  /**
      @see RulesEngine.addPackage
      @method
      @public
   */
  addPackage: function () {
    RulesEngine.addPackage.apply(RulesEngine, arguments);
  },

  /**
   * Add a plugin to Inject, registering a rule and global functions
   * @see InjectCore.plugin
   * @method
   * @public
   */
  plugin: function () {
    var args = [].slice.call(arguments, 0);
    args.push(context.Inject);
    InjectCore.plugin.apply(InjectCore, args);
  },

  /**
      CommonJS and AMD require()
      @see InjectCore.createRequire
      @see <a href="http://wiki.commonjs.org/wiki/Modules/1.1">CommonJS require()</a>
      @see <a href="https://github.com/amdjs/amdjs-api/wiki/require">AMD require()</a>
      @method
      @public
   */
  require: RequireContext.createRequire(),
  /**
      AMD define()
      @see InjectCore.createDefine
      @see <a href="https://github.com/amdjs/amdjs-api/wiki/AMD">AMD define()</a>
      @method
      @public
   */
  define: RequireContext.createDefine(),
  /**
      The version of Inject.
      @type {String}
      @public
   */
  version: 'undefined'
};

/**
    CommonJS and AMD require()
    @see InjectCore.createRequire
    @see <a href="http://wiki.commonjs.org/wiki/Modules/1.1">CommonJS require()</a>
    @see <a href="https://github.com/amdjs/amdjs-api/wiki/require">AMD require()</a>
    @method
    @public
 */
context.require = context.Inject.require;

/**
    AMD define()
    @see InjectCore.createDefine
    @see <a href="https://github.com/amdjs/amdjs-api/wiki/AMD">AMD define()</a>
    @method
    @public
 */
context.define = context.Inject.define;
;context.Inject.version = "0.6.1";
})(this);
/*global document:true, Inject:true */
/*
Inject
Copyright 2011 LinkedIn

Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at

    http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing,
software distributed under the License is distributed on an "AS
IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either
express or implied.   See the License for the specific language
governing permissions and limitations under the License.
*/

/**
 * The CSS plugin handles the loading of stylesheets
 * It returns a CSS object with one method, attach
 * @file
**/
(function() {

  var style = document.createElement('style'),
      placed = false,
      injectedCSS = '',
      useCssText;

  style.type = 'text/css';
  useCssText = !!(style.styleSheet);

  function CSS(txt) {
    this.txt = txt;
  }
  CSS.prototype.attach = function () {
    Inject.plugins.css.addStyles(this.txt);
  };

  Inject.addFetchRule(/^css\!.+$/, function(next, content, resolver, comm, options) {
    var moduleId = options.moduleId.replace(/^css!\s*/, '');
    var resolvedMid = resolver.module(moduleId, options.parentId);
    var path = resolver.url(resolvedMid, options.parentUrl, true);

    comm.get(resolvedMid, path, function(text) {
      next(null, ['',
        ['var cssText = decodeURIComponent("', encodeURIComponent(text), '");'].join(''),
        'module.setExports(Inject.plugins.css.create(cssText))',
        ''].join('\n')
      );
    });
  });

  Inject.plugins.css = {
    create: function(text) {
      return new CSS(text);
    },
    addStyles: function (text) {
      if (useCssText) {
        injectedCSS += text;
        style.styleSheet.cssText = injectedCSS;
      }
      else {
        style.appendChild(document.createTextNode(text));
      }
      if (!placed) {
        placed = true;
        document.getElementsByTagName('head')[0].appendChild(style);
      }
    }
  };
})();;/*global Inject:true */
/*
Inject
Copyright 2011 LinkedIn

Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at

    http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing,
software distributed under the License is distributed on an "AS
IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either
express or implied.   See the License for the specific language
governing permissions and limitations under the License.
*/

/**
 * The text plugin enables the loading of plain text.
 * This can also serve as a template for more complex text
 * transformations such as markdown syntax
 * @file
**/
(function () {
  Inject.addFetchRule(/^text\!.+$/, function(next, content, resolver, comm, options) {
    var moduleId = options.moduleId.replace(/^text!\s*/, '');
    var resolvedMid = resolver.module(moduleId, options.parentId);
    var path = resolver.url(resolvedMid, options.parentUrl, true);

    comm.get(resolvedMid, path, function(text) {
      next(null, ['',
        'var text = "',
        encodeURIComponent(text),
        '";',
        'module.setExports(decodeURIComponent(text));',
        ''].join('')
      );
    });
  });
})();
;/*global Inject:true */
/*
Inject
Copyright 2011 LinkedIn

Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at

    http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing,
software distributed under the License is distributed on an "AS
IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either
express or implied.   See the License for the specific language
governing permissions and limitations under the License.
*/

/**
 * The JSON plugin handles the loading of a JSON object
 * This allows you to take data and "require" it in. Useful
 * scenarios include things like config files.
 * @file
**/
(function () {
  Inject.addFetchRule(/^json\!.+$/, function(next, content, resolver, comm, options) {
    var moduleId = options.moduleId.replace(/^json!\s*/, '');
    var resolvedMid = resolver.module(moduleId, options.parentId);
    var path = resolver.url(resolvedMid, options.parentUrl, true);

    comm.get(resolvedMid, path, function(text) {
      next(null, ['',
        'var json = "',
        encodeURIComponent(text),
        '";',
        'module.setExports(JSON.parse(decodeURIComponent(json)));',
        ''].join('')
      );
    });
  });
})();

(function(){var LI_i18n=LIModules.imports("i18n")||{},i18nTranslations={},i18nObj={},i18nPage,LANG_QUERY_PARAM="_l";function _overriddenLangInUrl(langs){var i=0,len,langParam,containsLang=false,queryParams=location.search;if(queryParams){langs=_normalizeToArray(langs);len=langs.length;for(;i<len;i++){langParam=LANG_QUERY_PARAM+"\x3d"+langs[i];if(queryParams.indexOf("?"+langParam)!==-1||queryParams.indexOf("\x26"+langParam)!==-1)containsLang=true}}return containsLang}function _readCookie(name){var i=
0,nameEQ=name+"\x3d",ca=document.cookie.split(";"),len=ca.length,c;for(;i<len;i++){c=ca[i];while(c.charAt(0)===" ")c=c.substring(1,c.length);if(c.indexOf(nameEQ)===0)return c.substring(nameEQ.length,c.length)}return null}function _mergeObject(currentObj,overrideObj){var propName;for(propName in overrideObj)if(!currentObj.hasOwnProperty(propName))currentObj[propName]=overrideObj[propName]}function _normalizeToArray(val){if(Object.prototype.toString.call(val)!=="[object Array]")if(typeof val==="string")val=
[val];else throw new Error("_normalizeToArray can only accept an Array or String");return val}function _inArray(value,arr){if(Array.prototype.indexOf)return arr.indexOf(value)!==-1;else{var i=0,len=arr.length,hasValue=false;for(;i<len;i++)if(value===arr[i]){hasValue=true;break}return hasValue}}function register(key,value){i18nTranslations[key]=value}function getGlobalKey(key){var registry=window.__li__i18n_registry__;return registry&&registry[key]}function get(key,replacements){var value=i18nTranslations[key]||
getGlobalKey(key)||"";if(!replacements)return value;if(!!replacements&&!(typeof replacements==="object"||typeof replacements==="function"))replacements={0:replacements};return substitute(value,replacements)}function getLocale(){var langCookie=_readCookie("lang"),locale,userLang,langArray;locale={language:"en",country:"US"};if(langCookie){userLang=langCookie.replace(/.*lang=([^\&"']*).*/g,"$1");langArray=/^(.{2})[-_](.{2})$/i.exec(userLang);if(langArray&&langArray.length===3){locale.language=langArray[1].toLowerCase();
locale.country=langArray[2].toUpperCase()}}locale.value=locale.language+"_"+locale.country;return locale}function getLanguage(){var locale=getLocale();return locale&&locale.language}function containsCurrentLang(langs){langs=_normalizeToArray(langs);return _inArray(getLanguage(),langs)||_overriddenLangInUrl(langs)}function isCJK(){return containsCurrentLang(["zh","ja","ko"])}function substitute(string,replacements){var r,val,pattern,regex;for(r in replacements)if(replacements.hasOwnProperty(r)){val=
htmlEncode(replacements[r]);pattern="{"+r+"}";if(r.match(/^\d+$/)!==null)pattern="\\{:?"+r+"\\}";regex=new RegExp(pattern,"g");string=string.replace(regex,val)}return string}function htmlEncode(str){var rHtmlChars=/[&<>"']/g,htmlCharsToEntities;htmlCharsToEntities={"\x26":"\x26amp;","\x3c":"\x26lt;","\x3e":"\x26gt;",'"':"\x26quot;","'":"\x26#39;"};if(str===null||str===undefined)return null;return str.toString().replace(rHtmlChars,function(match){return htmlCharsToEntities[match]})}i18nPage=function(){var _cachedReadsRTL=
false,_cachedReadsCJK=false,RTL_LANGUAGES=["ar"];function init(){_cachedReadsRTL=containsCurrentLang(RTL_LANGUAGES);_cachedReadsCJK=isCJK()}function readsRTL(){return _cachedReadsRTL}function readsCJK(){return _cachedReadsCJK}return{init:init,readsRTL:readsRTL,readsCJK:readsCJK}}();i18nPage.init();i18nObj={register:register,get:get,getLocale:getLocale,isCJK:isCJK,substitute:substitute,getLanguage:getLanguage,containsCurrentLang:containsCurrentLang,page:i18nPage};_mergeObject(LI_i18n,i18nObj);LIModules.exports("i18n",
LI_i18n)})();
(function(Inject,play,Fiber){var define=Inject.define,root=this,dependencyIdMap={"backbone":"Backbone","underscore":"_","jquery":"$","fiber":"Fiber"},manifests={"LI.Events":{dependencies:["backbone"],pattern:/Events\.js$/},"LI.BaseControl":{dependencies:["fiber","jquery","underscore","scripts/core/Controls"],pattern:/BaseControl\.js$/},"LI.scripts.FollowToggler":{dependencies:["jquery","scripts/shared/BaseControl"],pattern:/FollowToggler\.js$/},"LI.Tooltip":{dependencies:["scripts/shared/BaseControl",
"scripts/shared/Bidi"],pattern:/Tooltip\.js$/},"LI.SocialShareButton":{pattern:/SocialShareButton\.js$/},"LI.ImagesLoaded":{dependencies:["fiber","jquery"],pattern:/ImagesLoaded\.js$/},"LI.DragonBars":{dependencies:["jquery","scripts/shared/BaseControl"],pattern:/DragonBars\.js$/},"LI.news.UnifiedEventTracking":{dependencies:["jquery","scripts/shared/BaseControl"],pattern:/UnifiedEventTracking\.js$/},"LI.FetchAndInsert":{dependencies:["jquery","scripts/shared/BaseControl"],pattern:/FetchAndInsert\.js$/,
origPath:"scripts/apps/megaphone/FetchAndInsert",newPath:"scripts/apps/pulse/FetchAndInsert",lix:"LIModulesPulseFetchAndInsertEnabled"},"LI.FetchAndInsertDust":{dependencies:["scripts/apps/megaphone/FetchAndInsert"],pattern:/FetchAndInsertDust\.js$/,origPath:"scripts/apps/megaphone/FetchAndInsertDust",newPath:"scripts/apps/pulse/FetchAndInsertDust",lix:"LIModulesPulseFetchAndInsertEnabled"},"LI.PulseSocial":{consumer2deps:["scripts/shared/utils/findControlByElement","scripts/shared/utils/formatNumber",
"scripts/shared/utils/alertManager","scripts/shared/utils/CookieManager","scripts/shared/utils/scrollWindow"],pattern:/PulseSocial\.js$/,origPath:"js/apps/pulse/PulseSocial",newPath:"scripts/apps/pulse/PulseSocial",lix:"LIModulesPulseSocialEnabled"},"LI.PulseComments":{dependencies:["js/apps/pulse/PulseSocial"],consumer2deps:["scripts/shared/utils/scrollWindow"],origPath:"js/apps/pulse/PulseCommentsRefactor",newPath:"scripts/apps/pulse/PulseComments",lix:"LIModulesPulseCommentsEnabled",pattern:/PulseCommentsRefactor\.js$/,
newPattern:/PulseComments\.js$/},"LI.PulseCommentsLoader":{dependencies:["jquery","scripts/apps/megaphone/FetchAndInsertDust"],pattern:/PulseCommentsLoader\.js$/},"LI.CurrentCommentSort":{dependencies:["jquery","scripts/core/Events"],pattern:/CurrentCommentSort\.js$/},"LI.CommentViewToggle":{dependencies:["jquery","scripts/core/Events","scripts/shared/BaseControl","scripts/apps/megaphone/FetchAndInsert"],pattern:/CommentViewToggle.js$/},"LI.PulseInfiniteScroll":{pattern:/pulse\/InfiniteScroll\.js/},
"LI.PulseCommentsHeader":{dependencies:["js/apps/pulse/PulseSocial","js/apps/pulse/InfiniteScroll"],pattern:/pulse\/CommentsHeader\.js/},"LI.getContentHeight":{dependencies:["underscore","jquery"],pattern:/getContentHeight\.js/},"LI.TruncateComment":{dependencies:["jquery","scripts/shared/BaseControl","scripts/shared/utils/getContentHeight","scripts/shared/utils/findControlByElement"],pattern:/TruncateComment\.js$/},"LI.TruncateCommentList":{dependencies:["jquery","underscore","scripts/shared/BaseControl",
"scripts/apps/megaphone/TruncateComment","scripts/shared/utils/findControlByElement"],pattern:/TruncateCommentList\.js/},"LI.MentionsDecorator":{dependencies:["underscore","js/util/typeahead/DataSource","js/util/InputChangeObserver","js/util/TokenMatcher","js/util/TokenHighlighter"],pattern:/MentionsDecorator\.js/},"LI.MediaServerUploader":{dependencies:["jquery"],pattern:/MediaServerUploader\.js$/},"LI.Plato.RankingsStickyBox":{dependencies:["jquery","scripts/shared/BaseControl","scripts/shared/StickyBox"],
pattern:/RankingsStickyBox\.js$/},"LI.TaggingPills":{dependencies:["scripts/shared/BaseControl","lib/select2/3.5.2/select2.min"],pattern:/Tagging\.js$/},"LI.Dropdown":{dependencies:["jquery","scripts/shared/BaseControl"],pattern:/Dropdown\.js$/},"LI.PageViewLineGraph":{dependencies:["jquery","scripts/shared/BaseControl","lib/highcharts/4.0.3/highcharts","scripts/shared/charts/Charts"],pattern:/PageViewLineGraph\.js$/},"LI.Shared.Charts.BarChart":{dependencies:["fiber","jquery"],pattern:/BarChart\.js$/},
"LI.cardSlider":{dependencies:["jquery"],pattern:/cardSlider\.js/},"LI.TitleTextareaSizer":{dependencies:["jquery","underscore","scripts/shared/BaseControl","scripts/shared/TextareaSizer"],pattern:/TitleTextareaSizer\.js/},"TooltipManager":{dependencies:["jquery","underscore","scripts/shared/BaseControl","scripts/shared/Mixins/TooltipPosition","scripts/shared/MiniProfilePopup"],pattern:/TooltipManager\.js/},"HopscotchCallout":{dependencies:["scripts/shared/utils/CookieManager","scripts/shared/HopscotchTourRunner"],
pattern:/HopscotchCallout\.js/}},appLixesEl,appLixesElContent,appLixes,RELAY_FILE_PATH="scmp/lib/inject/0.6.1/relay.html",BACKBONE_FILE_PATH="lib/backbone/1.1.2/backbone.js",IS_TEST=document.location.href.indexOf("venus-core")!==-1;function genExportCode(moduleName){return["if (typeof ",moduleName,' !\x3d\x3d "undefined") {',"module.setExports(",moduleName,");","}"].join("")}function genDependencyArrayCode(deps){deps=deps||[];return"["+_.map(deps,function(dep){return'"'+dep+'"'}).join(", ")+"]"}function genParamListCode(dependencies,
dependencyIdMap){if(!dependencies)return"";return _.values(_.pick(dependencyIdMap,dependencies)).join(", ")}function defineGlobalAsAMD(globalName,id){if(typeof root[globalName]!=="undefined")define(id,function(){return root[globalName]})}function genDependencyWrapperCode(dependencies,moduleName,contents){return["define(",genDependencyArrayCode(dependencies),", ","function(",genParamListCode(dependencies,dependencyIdMap),") {",contents,";",genExportCode(moduleName),"});"].join("")}define.amd.jQuery=
true;Inject.setModuleRoot("/");defineGlobalAsAMD("Fiber","fiber");defineGlobalAsAMD("_","underscore");defineGlobalAsAMD("dust","dust");defineGlobalAsAMD("play","play");defineGlobalAsAMD("t8","t8");if(IS_TEST){Inject.clearCache();Inject.addFileRule(/^javascripts\/*/,function(path){return path});Inject.addFileRule(/^(scripts|js)\/apps\/*/,function(path){return"external/network/"+path});Inject.addFileRule(/^(?!scripts\/apps|js\/apps)(scripts|js|lib)\/*/,function(path){return"scmp/"+path});Inject.setCrossDomain({relayFile:"http://"+
window.location.hostname+":2014/"+RELAY_FILE_PATH})}else{if(!play.isProd())Inject.clearCache();if(play.useCdn())Inject.setCrossDomain({relayFile:play.assetUrl(RELAY_FILE_PATH)});Inject.addFileRule(/^javascripts\/*/,function(path){return play.jsUrl(path.replace(/javascripts\//,""))});Inject.addFileRule(/^templates\/*/,function(path){return play.templateUrl(path.replace(/templates\//,""))});Inject.addFileRule(/^tl\/shared\/*/,function(path){return play.localizedAssetUrl(path,".js")});Inject.addFileRule(/^(scripts|js)\/apps\/*/,
function(path){var isFullUrl=/^(https?:)?\/\//.test(path);return isFullUrl?path:play.addExtension(play.assetUrl("external/network/"+path),".js")});Inject.addFileRule(/^(?!scripts\/apps|js\/apps)(scripts|js|lib)\/*/,function(path){var isFullUrl=/^(https?:)?\/\//.test(path);return isFullUrl?path:play.addExtension(play.assetUrl("scmp/"+path),".js")});Inject.addFileRule(/^scss\/*/,function(path){return play.scssUrl(path.replace(/scss\//,""))});Inject.addFileRule("DwellTimeTracker",function(){return play.assetUrl("bowtie-dwelltime/DwellTimeTracker.js")})}Inject.addModuleRule("backbone",
function(){return BACKBONE_FILE_PATH});appLixesEl=document.getElementById("app-lixes");if(appLixesEl){appLixesElContent=appLixesEl.firstChild.nodeValue;appLixes=JSON.parse(play.unescapeForEmbedding(appLixesElContent))}_.each(manifests,function(manifest,module){if(appLixes&&manifest.lix&&appLixes[manifest.lix]&&manifest.origPath&&manifest.newPath){Inject.addFileRule(new RegExp("^"+manifest.origPath+"$"),function(path){path=manifest.newPath;return path});if(manifest.consumer2deps)manifest.dependencies=
manifest.dependencies?manifest.dependencies.concat(manifest.consumer2deps):manifest.consumer2deps;if(manifest.newPattern)manifest.pattern=manifest.newPattern}Inject.addContentRule(manifest.pattern,function(next,contents){next(null,genDependencyWrapperCode(manifest.dependencies,module,contents))})})}).call(window,Inject,window.play,Fiber);
/*!
 * jQuery JavaScript Library v1.9.1
 * http://jquery.com/
 *
 * Includes Sizzle.js
 * http://sizzlejs.com/
 *
 * Copyright 2005, 2012 jQuery Foundation, Inc. and other contributors
 * Released under the MIT license
 * http://jquery.org/license
 *
 * Date: 2013-2-4
 */
(function( window, undefined ) {

// Can't do this because several apps including ASP.NET trace
// the stack via arguments.caller.callee and Firefox dies if
// you try to trace through "use strict" call chains. (#13335)
// Support: Firefox 18+
//"use strict";
var
	// The deferred used on DOM ready
	readyList,

	// A central reference to the root jQuery(document)
	rootjQuery,

	// Support: IE<9
	// For `typeof node.method` instead of `node.method !== undefined`
	core_strundefined = typeof undefined,

	// Use the correct document accordingly with window argument (sandbox)
	document = window.document,
	location = window.location,

	// Map over jQuery in case of overwrite
	_jQuery = window.jQuery,

	// Map over the $ in case of overwrite
	_$ = window.$,

	// [[Class]] -> type pairs
	class2type = {},

	// List of deleted data cache ids, so we can reuse them
	core_deletedIds = [],

	core_version = "1.9.1",

	// Save a reference to some core methods
	core_concat = core_deletedIds.concat,
	core_push = core_deletedIds.push,
	core_slice = core_deletedIds.slice,
	core_indexOf = core_deletedIds.indexOf,
	core_toString = class2type.toString,
	core_hasOwn = class2type.hasOwnProperty,
	core_trim = core_version.trim,

	// Define a local copy of jQuery
	jQuery = function( selector, context ) {
		// The jQuery object is actually just the init constructor 'enhanced'
		return new jQuery.fn.init( selector, context, rootjQuery );
	},

	// Used for matching numbers
	core_pnum = /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,

	// Used for splitting on whitespace
	core_rnotwhite = /\S+/g,

	// Make sure we trim BOM and NBSP (here's looking at you, Safari 5.0 and IE)
	rtrim = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,

	// A simple way to check for HTML strings
	// Prioritize #id over <tag> to avoid XSS via location.hash (#9521)
	// Strict HTML recognition (#11290: must start with <)
	rquickExpr = /^(?:(<[\w\W]+>)[^>]*|#([\w-]*))$/,

	// Match a standalone tag
	rsingleTag = /^<(\w+)\s*\/?>(?:<\/\1>|)$/,

	// JSON RegExp
	rvalidchars = /^[\],:{}\s]*$/,
	rvalidbraces = /(?:^|:|,)(?:\s*\[)+/g,
	rvalidescape = /\\(?:["\\\/bfnrt]|u[\da-fA-F]{4})/g,
	rvalidtokens = /"[^"\\\r\n]*"|true|false|null|-?(?:\d+\.|)\d+(?:[eE][+-]?\d+|)/g,

	// Matches dashed string for camelizing
	rmsPrefix = /^-ms-/,
	rdashAlpha = /-([\da-z])/gi,

	// Used by jQuery.camelCase as callback to replace()
	fcamelCase = function( all, letter ) {
		return letter.toUpperCase();
	},

	// The ready event handler
	completed = function( event ) {

		// readyState === "complete" is good enough for us to call the dom ready in oldIE
		if ( document.addEventListener || event.type === "load" || document.readyState === "complete" ) {
			detach();
			jQuery.ready();
		}
	},
	// Clean-up method for dom ready events
	detach = function() {
		if ( document.addEventListener ) {
			document.removeEventListener( "DOMContentLoaded", completed, false );
			window.removeEventListener( "load", completed, false );

		} else {
			document.detachEvent( "onreadystatechange", completed );
			window.detachEvent( "onload", completed );
		}
	};

jQuery.fn = jQuery.prototype = {
	// The current version of jQuery being used
	jquery: core_version,

	constructor: jQuery,
	init: function( selector, context, rootjQuery ) {
		var match, elem;

		// HANDLE: $(""), $(null), $(undefined), $(false)
		if ( !selector ) {
			return this;
		}

		// Handle HTML strings
		if ( typeof selector === "string" ) {
			if ( selector.charAt(0) === "<" && selector.charAt( selector.length - 1 ) === ">" && selector.length >= 3 ) {
				// Assume that strings that start and end with <> are HTML and skip the regex check
				match = [ null, selector, null ];

			} else {
				match = rquickExpr.exec( selector );
			}

			// Match html or make sure no context is specified for #id
			if ( match && (match[1] || !context) ) {

				// HANDLE: $(html) -> $(array)
				if ( match[1] ) {
					context = context instanceof jQuery ? context[0] : context;

					// scripts is true for back-compat
					jQuery.merge( this, jQuery.parseHTML(
						match[1],
						context && context.nodeType ? context.ownerDocument || context : document,
						true
					) );

					// HANDLE: $(html, props)
					if ( rsingleTag.test( match[1] ) && jQuery.isPlainObject( context ) ) {
						for ( match in context ) {
							// Properties of context are called as methods if possible
							if ( jQuery.isFunction( this[ match ] ) ) {
								this[ match ]( context[ match ] );

							// ...and otherwise set as attributes
							} else {
								this.attr( match, context[ match ] );
							}
						}
					}

					return this;

				// HANDLE: $(#id)
				} else {
					elem = document.getElementById( match[2] );

					// Check parentNode to catch when Blackberry 4.6 returns
					// nodes that are no longer in the document #6963
					if ( elem && elem.parentNode ) {
						// Handle the case where IE and Opera return items
						// by name instead of ID
						if ( elem.id !== match[2] ) {
							return rootjQuery.find( selector );
						}

						// Otherwise, we inject the element directly into the jQuery object
						this.length = 1;
						this[0] = elem;
					}

					this.context = document;
					this.selector = selector;
					return this;
				}

			// HANDLE: $(expr, $(...))
			} else if ( !context || context.jquery ) {
				return ( context || rootjQuery ).find( selector );

			// HANDLE: $(expr, context)
			// (which is just equivalent to: $(context).find(expr)
			} else {
				return this.constructor( context ).find( selector );
			}

		// HANDLE: $(DOMElement)
		} else if ( selector.nodeType ) {
			this.context = this[0] = selector;
			this.length = 1;
			return this;

		// HANDLE: $(function)
		// Shortcut for document ready
		} else if ( jQuery.isFunction( selector ) ) {
			return rootjQuery.ready( selector );
		}

		if ( selector.selector !== undefined ) {
			this.selector = selector.selector;
			this.context = selector.context;
		}

		return jQuery.makeArray( selector, this );
	},

	// Start with an empty selector
	selector: "",

	// The default length of a jQuery object is 0
	length: 0,

	// The number of elements contained in the matched element set
	size: function() {
		return this.length;
	},

	toArray: function() {
		return core_slice.call( this );
	},

	// Get the Nth element in the matched element set OR
	// Get the whole matched element set as a clean array
	get: function( num ) {
		return num == null ?

			// Return a 'clean' array
			this.toArray() :

			// Return just the object
			( num < 0 ? this[ this.length + num ] : this[ num ] );
	},

	// Take an array of elements and push it onto the stack
	// (returning the new matched element set)
	pushStack: function( elems ) {

		// Build a new jQuery matched element set
		var ret = jQuery.merge( this.constructor(), elems );

		// Add the old object onto the stack (as a reference)
		ret.prevObject = this;
		ret.context = this.context;

		// Return the newly-formed element set
		return ret;
	},

	// Execute a callback for every element in the matched set.
	// (You can seed the arguments with an array of args, but this is
	// only used internally.)
	each: function( callback, args ) {
		return jQuery.each( this, callback, args );
	},

	ready: function( fn ) {
		// Add the callback
		jQuery.ready.promise().done( fn );

		return this;
	},

	slice: function() {
		return this.pushStack( core_slice.apply( this, arguments ) );
	},

	first: function() {
		return this.eq( 0 );
	},

	last: function() {
		return this.eq( -1 );
	},

	eq: function( i ) {
		var len = this.length,
			j = +i + ( i < 0 ? len : 0 );
		return this.pushStack( j >= 0 && j < len ? [ this[j] ] : [] );
	},

	map: function( callback ) {
		return this.pushStack( jQuery.map(this, function( elem, i ) {
			return callback.call( elem, i, elem );
		}));
	},

	end: function() {
		return this.prevObject || this.constructor(null);
	},

	// For internal use only.
	// Behaves like an Array's method, not like a jQuery method.
	push: core_push,
	sort: [].sort,
	splice: [].splice
};

// Give the init function the jQuery prototype for later instantiation
jQuery.fn.init.prototype = jQuery.fn;

jQuery.extend = jQuery.fn.extend = function() {
	var src, copyIsArray, copy, name, options, clone,
		target = arguments[0] || {},
		i = 1,
		length = arguments.length,
		deep = false;

	// Handle a deep copy situation
	if ( typeof target === "boolean" ) {
		deep = target;
		target = arguments[1] || {};
		// skip the boolean and the target
		i = 2;
	}

	// Handle case when target is a string or something (possible in deep copy)
	if ( typeof target !== "object" && !jQuery.isFunction(target) ) {
		target = {};
	}

	// extend jQuery itself if only one argument is passed
	if ( length === i ) {
		target = this;
		--i;
	}

	for ( ; i < length; i++ ) {
		// Only deal with non-null/undefined values
		if ( (options = arguments[ i ]) != null ) {
			// Extend the base object
			for ( name in options ) {
				src = target[ name ];
				copy = options[ name ];

				// Prevent never-ending loop
				if ( target === copy ) {
					continue;
				}

				// Recurse if we're merging plain objects or arrays
				if ( deep && copy && ( jQuery.isPlainObject(copy) || (copyIsArray = jQuery.isArray(copy)) ) ) {
					if ( copyIsArray ) {
						copyIsArray = false;
						clone = src && jQuery.isArray(src) ? src : [];

					} else {
						clone = src && jQuery.isPlainObject(src) ? src : {};
					}

					// Never move original objects, clone them
					target[ name ] = jQuery.extend( deep, clone, copy );

				// Don't bring in undefined values
				} else if ( copy !== undefined ) {
					target[ name ] = copy;
				}
			}
		}
	}

	// Return the modified object
	return target;
};

jQuery.extend({
	noConflict: function( deep ) {
		if ( window.$ === jQuery ) {
			window.$ = _$;
		}

		if ( deep && window.jQuery === jQuery ) {
			window.jQuery = _jQuery;
		}

		return jQuery;
	},

	// Is the DOM ready to be used? Set to true once it occurs.
	isReady: false,

	// A counter to track how many items to wait for before
	// the ready event fires. See #6781
	readyWait: 1,

	// Hold (or release) the ready event
	holdReady: function( hold ) {
		if ( hold ) {
			jQuery.readyWait++;
		} else {
			jQuery.ready( true );
		}
	},

	// Handle when the DOM is ready
	ready: function( wait ) {

		// Abort if there are pending holds or we're already ready
		if ( wait === true ? --jQuery.readyWait : jQuery.isReady ) {
			return;
		}

		// Make sure body exists, at least, in case IE gets a little overzealous (ticket #5443).
		if ( !document.body ) {
			return setTimeout( jQuery.ready );
		}

		// Remember that the DOM is ready
		jQuery.isReady = true;

		// If a normal DOM Ready event fired, decrement, and wait if need be
		if ( wait !== true && --jQuery.readyWait > 0 ) {
			return;
		}

		// If there are functions bound, to execute
		readyList.resolveWith( document, [ jQuery ] );

		// Trigger any bound ready events
		if ( jQuery.fn.trigger ) {
			jQuery( document ).trigger("ready").off("ready");
		}
	},

	// See test/unit/core.js for details concerning isFunction.
	// Since version 1.3, DOM methods and functions like alert
	// aren't supported. They return false on IE (#2968).
	isFunction: function( obj ) {
		return jQuery.type(obj) === "function";
	},

	isArray: Array.isArray || function( obj ) {
		return jQuery.type(obj) === "array";
	},

	isWindow: function( obj ) {
		return obj != null && obj == obj.window;
	},

	isNumeric: function( obj ) {
		return !isNaN( parseFloat(obj) ) && isFinite( obj );
	},

	type: function( obj ) {
		if ( obj == null ) {
			return String( obj );
		}
		return typeof obj === "object" || typeof obj === "function" ?
			class2type[ core_toString.call(obj) ] || "object" :
			typeof obj;
	},

	isPlainObject: function( obj ) {
		// Must be an Object.
		// Because of IE, we also have to check the presence of the constructor property.
		// Make sure that DOM nodes and window objects don't pass through, as well
		if ( !obj || jQuery.type(obj) !== "object" || obj.nodeType || jQuery.isWindow( obj ) ) {
			return false;
		}

		try {
			// Not own constructor property must be Object
			if ( obj.constructor &&
				!core_hasOwn.call(obj, "constructor") &&
				!core_hasOwn.call(obj.constructor.prototype, "isPrototypeOf") ) {
				return false;
			}
		} catch ( e ) {
			// IE8,9 Will throw exceptions on certain host objects #9897
			return false;
		}

		// Own properties are enumerated firstly, so to speed up,
		// if last one is own, then all properties are own.

		var key;
		for ( key in obj ) {}

		return key === undefined || core_hasOwn.call( obj, key );
	},

	isEmptyObject: function( obj ) {
		var name;
		for ( name in obj ) {
			return false;
		}
		return true;
	},

	error: function( msg ) {
		throw new Error( msg );
	},

	// data: string of html
	// context (optional): If specified, the fragment will be created in this context, defaults to document
	// keepScripts (optional): If true, will include scripts passed in the html string
	parseHTML: function( data, context, keepScripts ) {
		if ( !data || typeof data !== "string" ) {
			return null;
		}
		if ( typeof context === "boolean" ) {
			keepScripts = context;
			context = false;
		}
		context = context || document;

		var parsed = rsingleTag.exec( data ),
			scripts = !keepScripts && [];

		// Single tag
		if ( parsed ) {
			return [ context.createElement( parsed[1] ) ];
		}

		parsed = jQuery.buildFragment( [ data ], context, scripts );
		if ( scripts ) {
			jQuery( scripts ).remove();
		}
		return jQuery.merge( [], parsed.childNodes );
	},

	parseJSON: function( data ) {
		// Attempt to parse using the native JSON parser first
		if ( window.JSON && window.JSON.parse ) {
			return window.JSON.parse( data );
		}

		if ( data === null ) {
			return data;
		}

		if ( typeof data === "string" ) {

			// Make sure leading/trailing whitespace is removed (IE can't handle it)
			data = jQuery.trim( data );

			if ( data ) {
				// Make sure the incoming data is actual JSON
				// Logic borrowed from http://json.org/json2.js
				if ( rvalidchars.test( data.replace( rvalidescape, "@" )
					.replace( rvalidtokens, "]" )
					.replace( rvalidbraces, "")) ) {

					return ( new Function( "return " + data ) )();
				}
			}
		}

		jQuery.error( "Invalid JSON: " + data );
	},

	// Cross-browser xml parsing
	parseXML: function( data ) {
		var xml, tmp;
		if ( !data || typeof data !== "string" ) {
			return null;
		}
		try {
			if ( window.DOMParser ) { // Standard
				tmp = new DOMParser();
				xml = tmp.parseFromString( data , "text/xml" );
			} else { // IE
				xml = new ActiveXObject( "Microsoft.XMLDOM" );
				xml.async = "false";
				xml.loadXML( data );
			}
		} catch( e ) {
			xml = undefined;
		}
		if ( !xml || !xml.documentElement || xml.getElementsByTagName( "parsererror" ).length ) {
			jQuery.error( "Invalid XML: " + data );
		}
		return xml;
	},

	noop: function() {},

	// Evaluates a script in a global context
	// Workarounds based on findings by Jim Driscoll
	// http://weblogs.java.net/blog/driscoll/archive/2009/09/08/eval-javascript-global-context
	globalEval: function( data ) {
		if ( data && jQuery.trim( data ) ) {
			// We use execScript on Internet Explorer
			// We use an anonymous function so that context is window
			// rather than jQuery in Firefox
			( window.execScript || function( data ) {
				window[ "eval" ].call( window, data );
			} )( data );
		}
	},

	// Convert dashed to camelCase; used by the css and data modules
	// Microsoft forgot to hump their vendor prefix (#9572)
	camelCase: function( string ) {
		return string.replace( rmsPrefix, "ms-" ).replace( rdashAlpha, fcamelCase );
	},

	nodeName: function( elem, name ) {
		return elem.nodeName && elem.nodeName.toLowerCase() === name.toLowerCase();
	},

	// args is for internal usage only
	each: function( obj, callback, args ) {
		var value,
			i = 0,
			length = obj.length,
			isArray = isArraylike( obj );

		if ( args ) {
			if ( isArray ) {
				for ( ; i < length; i++ ) {
					value = callback.apply( obj[ i ], args );

					if ( value === false ) {
						break;
					}
				}
			} else {
				for ( i in obj ) {
					value = callback.apply( obj[ i ], args );

					if ( value === false ) {
						break;
					}
				}
			}

		// A special, fast, case for the most common use of each
		} else {
			if ( isArray ) {
				for ( ; i < length; i++ ) {
					value = callback.call( obj[ i ], i, obj[ i ] );

					if ( value === false ) {
						break;
					}
				}
			} else {
				for ( i in obj ) {
					value = callback.call( obj[ i ], i, obj[ i ] );

					if ( value === false ) {
						break;
					}
				}
			}
		}

		return obj;
	},

	// Use native String.trim function wherever possible
	trim: core_trim && !core_trim.call("\uFEFF\xA0") ?
		function( text ) {
			return text == null ?
				"" :
				core_trim.call( text );
		} :

		// Otherwise use our own trimming functionality
		function( text ) {
			return text == null ?
				"" :
				( text + "" ).replace( rtrim, "" );
		},

	// results is for internal usage only
	makeArray: function( arr, results ) {
		var ret = results || [];

		if ( arr != null ) {
			if ( isArraylike( Object(arr) ) ) {
				jQuery.merge( ret,
					typeof arr === "string" ?
					[ arr ] : arr
				);
			} else {
				core_push.call( ret, arr );
			}
		}

		return ret;
	},

	inArray: function( elem, arr, i ) {
		var len;

		if ( arr ) {
			if ( core_indexOf ) {
				return core_indexOf.call( arr, elem, i );
			}

			len = arr.length;
			i = i ? i < 0 ? Math.max( 0, len + i ) : i : 0;

			for ( ; i < len; i++ ) {
				// Skip accessing in sparse arrays
				if ( i in arr && arr[ i ] === elem ) {
					return i;
				}
			}
		}

		return -1;
	},

	merge: function( first, second ) {
		var l = second.length,
			i = first.length,
			j = 0;

		if ( typeof l === "number" ) {
			for ( ; j < l; j++ ) {
				first[ i++ ] = second[ j ];
			}
		} else {
			while ( second[j] !== undefined ) {
				first[ i++ ] = second[ j++ ];
			}
		}

		first.length = i;

		return first;
	},

	grep: function( elems, callback, inv ) {
		var retVal,
			ret = [],
			i = 0,
			length = elems.length;
		inv = !!inv;

		// Go through the array, only saving the items
		// that pass the validator function
		for ( ; i < length; i++ ) {
			retVal = !!callback( elems[ i ], i );
			if ( inv !== retVal ) {
				ret.push( elems[ i ] );
			}
		}

		return ret;
	},

	// arg is for internal usage only
	map: function( elems, callback, arg ) {
		var value,
			i = 0,
			length = elems.length,
			isArray = isArraylike( elems ),
			ret = [];

		// Go through the array, translating each of the items to their
		if ( isArray ) {
			for ( ; i < length; i++ ) {
				value = callback( elems[ i ], i, arg );

				if ( value != null ) {
					ret[ ret.length ] = value;
				}
			}

		// Go through every key on the object,
		} else {
			for ( i in elems ) {
				value = callback( elems[ i ], i, arg );

				if ( value != null ) {
					ret[ ret.length ] = value;
				}
			}
		}

		// Flatten any nested arrays
		return core_concat.apply( [], ret );
	},

	// A global GUID counter for objects
	guid: 1,

	// Bind a function to a context, optionally partially applying any
	// arguments.
	proxy: function( fn, context ) {
		var args, proxy, tmp;

		if ( typeof context === "string" ) {
			tmp = fn[ context ];
			context = fn;
			fn = tmp;
		}

		// Quick check to determine if target is callable, in the spec
		// this throws a TypeError, but we will just return undefined.
		if ( !jQuery.isFunction( fn ) ) {
			return undefined;
		}

		// Simulated bind
		args = core_slice.call( arguments, 2 );
		proxy = function() {
			return fn.apply( context || this, args.concat( core_slice.call( arguments ) ) );
		};

		// Set the guid of unique handler to the same of original handler, so it can be removed
		proxy.guid = fn.guid = fn.guid || jQuery.guid++;

		return proxy;
	},

	// Multifunctional method to get and set values of a collection
	// The value/s can optionally be executed if it's a function
	access: function( elems, fn, key, value, chainable, emptyGet, raw ) {
		var i = 0,
			length = elems.length,
			bulk = key == null;

		// Sets many values
		if ( jQuery.type( key ) === "object" ) {
			chainable = true;
			for ( i in key ) {
				jQuery.access( elems, fn, i, key[i], true, emptyGet, raw );
			}

		// Sets one value
		} else if ( value !== undefined ) {
			chainable = true;

			if ( !jQuery.isFunction( value ) ) {
				raw = true;
			}

			if ( bulk ) {
				// Bulk operations run against the entire set
				if ( raw ) {
					fn.call( elems, value );
					fn = null;

				// ...except when executing function values
				} else {
					bulk = fn;
					fn = function( elem, key, value ) {
						return bulk.call( jQuery( elem ), value );
					};
				}
			}

			if ( fn ) {
				for ( ; i < length; i++ ) {
					fn( elems[i], key, raw ? value : value.call( elems[i], i, fn( elems[i], key ) ) );
				}
			}
		}

		return chainable ?
			elems :

			// Gets
			bulk ?
				fn.call( elems ) :
				length ? fn( elems[0], key ) : emptyGet;
	},

	now: function() {
		return ( new Date() ).getTime();
	}
});

jQuery.ready.promise = function( obj ) {
	if ( !readyList ) {

		readyList = jQuery.Deferred();

		// Catch cases where $(document).ready() is called after the browser event has already occurred.
		// we once tried to use readyState "interactive" here, but it caused issues like the one
		// discovered by ChrisS here: http://bugs.jquery.com/ticket/12282#comment:15
		if ( document.readyState === "complete" ) {
			// Handle it asynchronously to allow scripts the opportunity to delay ready
			setTimeout( jQuery.ready );

		// Standards-based browsers support DOMContentLoaded
		} else if ( document.addEventListener ) {
			// Use the handy event callback
			document.addEventListener( "DOMContentLoaded", completed, false );

			// A fallback to window.onload, that will always work
			window.addEventListener( "load", completed, false );

		// If IE event model is used
		} else {
			// Ensure firing before onload, maybe late but safe also for iframes
			document.attachEvent( "onreadystatechange", completed );

			// A fallback to window.onload, that will always work
			window.attachEvent( "onload", completed );

			// If IE and not a frame
			// continually check to see if the document is ready
			var top = false;

			try {
				top = window.frameElement == null && document.documentElement;
			} catch(e) {}

			if ( top && top.doScroll ) {
				(function doScrollCheck() {
					if ( !jQuery.isReady ) {

						try {
							// Use the trick by Diego Perini
							// http://javascript.nwbox.com/IEContentLoaded/
							top.doScroll("left");
						} catch(e) {
							return setTimeout( doScrollCheck, 50 );
						}

						// detach all dom ready events
						detach();

						// and execute any waiting functions
						jQuery.ready();
					}
				})();
			}
		}
	}
	return readyList.promise( obj );
};

// Populate the class2type map
jQuery.each("Boolean Number String Function Array Date RegExp Object Error".split(" "), function(i, name) {
	class2type[ "[object " + name + "]" ] = name.toLowerCase();
});

function isArraylike( obj ) {
	var length = obj.length,
		type = jQuery.type( obj );

	if ( jQuery.isWindow( obj ) ) {
		return false;
	}

	if ( obj.nodeType === 1 && length ) {
		return true;
	}

	return type === "array" || type !== "function" &&
		( length === 0 ||
		typeof length === "number" && length > 0 && ( length - 1 ) in obj );
}

// All jQuery objects should point back to these
rootjQuery = jQuery(document);
// String to Object options format cache
var optionsCache = {};

// Convert String-formatted options into Object-formatted ones and store in cache
function createOptions( options ) {
	var object = optionsCache[ options ] = {};
	jQuery.each( options.match( core_rnotwhite ) || [], function( _, flag ) {
		object[ flag ] = true;
	});
	return object;
}

/*
 * Create a callback list using the following parameters:
 *
 *	options: an optional list of space-separated options that will change how
 *			the callback list behaves or a more traditional option object
 *
 * By default a callback list will act like an event callback list and can be
 * "fired" multiple times.
 *
 * Possible options:
 *
 *	once:			will ensure the callback list can only be fired once (like a Deferred)
 *
 *	memory:			will keep track of previous values and will call any callback added
 *					after the list has been fired right away with the latest "memorized"
 *					values (like a Deferred)
 *
 *	unique:			will ensure a callback can only be added once (no duplicate in the list)
 *
 *	stopOnFalse:	interrupt callings when a callback returns false
 *
 */
jQuery.Callbacks = function( options ) {

	// Convert options from String-formatted to Object-formatted if needed
	// (we check in cache first)
	options = typeof options === "string" ?
		( optionsCache[ options ] || createOptions( options ) ) :
		jQuery.extend( {}, options );

	var // Flag to know if list is currently firing
		firing,
		// Last fire value (for non-forgettable lists)
		memory,
		// Flag to know if list was already fired
		fired,
		// End of the loop when firing
		firingLength,
		// Index of currently firing callback (modified by remove if needed)
		firingIndex,
		// First callback to fire (used internally by add and fireWith)
		firingStart,
		// Actual callback list
		list = [],
		// Stack of fire calls for repeatable lists
		stack = !options.once && [],
		// Fire callbacks
		fire = function( data ) {
			memory = options.memory && data;
			fired = true;
			firingIndex = firingStart || 0;
			firingStart = 0;
			firingLength = list.length;
			firing = true;
			for ( ; list && firingIndex < firingLength; firingIndex++ ) {
				if ( list[ firingIndex ].apply( data[ 0 ], data[ 1 ] ) === false && options.stopOnFalse ) {
					memory = false; // To prevent further calls using add
					break;
				}
			}
			firing = false;
			if ( list ) {
				if ( stack ) {
					if ( stack.length ) {
						fire( stack.shift() );
					}
				} else if ( memory ) {
					list = [];
				} else {
					self.disable();
				}
			}
		},
		// Actual Callbacks object
		self = {
			// Add a callback or a collection of callbacks to the list
			add: function() {
				if ( list ) {
					// First, we save the current length
					var start = list.length;
					(function add( args ) {
						jQuery.each( args, function( _, arg ) {
							var type = jQuery.type( arg );
							if ( type === "function" ) {
								if ( !options.unique || !self.has( arg ) ) {
									list.push( arg );
								}
							} else if ( arg && arg.length && type !== "string" ) {
								// Inspect recursively
								add( arg );
							}
						});
					})( arguments );
					// Do we need to add the callbacks to the
					// current firing batch?
					if ( firing ) {
						firingLength = list.length;
					// With memory, if we're not firing then
					// we should call right away
					} else if ( memory ) {
						firingStart = start;
						fire( memory );
					}
				}
				return this;
			},
			// Remove a callback from the list
			remove: function() {
				if ( list ) {
					jQuery.each( arguments, function( _, arg ) {
						var index;
						while( ( index = jQuery.inArray( arg, list, index ) ) > -1 ) {
							list.splice( index, 1 );
							// Handle firing indexes
							if ( firing ) {
								if ( index <= firingLength ) {
									firingLength--;
								}
								if ( index <= firingIndex ) {
									firingIndex--;
								}
							}
						}
					});
				}
				return this;
			},
			// Check if a given callback is in the list.
			// If no argument is given, return whether or not list has callbacks attached.
			has: function( fn ) {
				return fn ? jQuery.inArray( fn, list ) > -1 : !!( list && list.length );
			},
			// Remove all callbacks from the list
			empty: function() {
				list = [];
				return this;
			},
			// Have the list do nothing anymore
			disable: function() {
				list = stack = memory = undefined;
				return this;
			},
			// Is it disabled?
			disabled: function() {
				return !list;
			},
			// Lock the list in its current state
			lock: function() {
				stack = undefined;
				if ( !memory ) {
					self.disable();
				}
				return this;
			},
			// Is it locked?
			locked: function() {
				return !stack;
			},
			// Call all callbacks with the given context and arguments
			fireWith: function( context, args ) {
				args = args || [];
				args = [ context, args.slice ? args.slice() : args ];
				if ( list && ( !fired || stack ) ) {
					if ( firing ) {
						stack.push( args );
					} else {
						fire( args );
					}
				}
				return this;
			},
			// Call all the callbacks with the given arguments
			fire: function() {
				self.fireWith( this, arguments );
				return this;
			},
			// To know if the callbacks have already been called at least once
			fired: function() {
				return !!fired;
			}
		};

	return self;
};
jQuery.extend({

	Deferred: function( func ) {
		var tuples = [
				// action, add listener, listener list, final state
				[ "resolve", "done", jQuery.Callbacks("once memory"), "resolved" ],
				[ "reject", "fail", jQuery.Callbacks("once memory"), "rejected" ],
				[ "notify", "progress", jQuery.Callbacks("memory") ]
			],
			state = "pending",
			promise = {
				state: function() {
					return state;
				},
				always: function() {
					deferred.done( arguments ).fail( arguments );
					return this;
				},
				then: function( /* fnDone, fnFail, fnProgress */ ) {
					var fns = arguments;
					return jQuery.Deferred(function( newDefer ) {
						jQuery.each( tuples, function( i, tuple ) {
							var action = tuple[ 0 ],
								fn = jQuery.isFunction( fns[ i ] ) && fns[ i ];
							// deferred[ done | fail | progress ] for forwarding actions to newDefer
							deferred[ tuple[1] ](function() {
								var returned = fn && fn.apply( this, arguments );
								if ( returned && jQuery.isFunction( returned.promise ) ) {
									returned.promise()
										.done( newDefer.resolve )
										.fail( newDefer.reject )
										.progress( newDefer.notify );
								} else {
									newDefer[ action + "With" ]( this === promise ? newDefer.promise() : this, fn ? [ returned ] : arguments );
								}
							});
						});
						fns = null;
					}).promise();
				},
				// Get a promise for this deferred
				// If obj is provided, the promise aspect is added to the object
				promise: function( obj ) {
					return obj != null ? jQuery.extend( obj, promise ) : promise;
				}
			},
			deferred = {};

		// Keep pipe for back-compat
		promise.pipe = promise.then;

		// Add list-specific methods
		jQuery.each( tuples, function( i, tuple ) {
			var list = tuple[ 2 ],
				stateString = tuple[ 3 ];

			// promise[ done | fail | progress ] = list.add
			promise[ tuple[1] ] = list.add;

			// Handle state
			if ( stateString ) {
				list.add(function() {
					// state = [ resolved | rejected ]
					state = stateString;

				// [ reject_list | resolve_list ].disable; progress_list.lock
				}, tuples[ i ^ 1 ][ 2 ].disable, tuples[ 2 ][ 2 ].lock );
			}

			// deferred[ resolve | reject | notify ]
			deferred[ tuple[0] ] = function() {
				deferred[ tuple[0] + "With" ]( this === deferred ? promise : this, arguments );
				return this;
			};
			deferred[ tuple[0] + "With" ] = list.fireWith;
		});

		// Make the deferred a promise
		promise.promise( deferred );

		// Call given func if any
		if ( func ) {
			func.call( deferred, deferred );
		}

		// All done!
		return deferred;
	},

	// Deferred helper
	when: function( subordinate /* , ..., subordinateN */ ) {
		var i = 0,
			resolveValues = core_slice.call( arguments ),
			length = resolveValues.length,

			// the count of uncompleted subordinates
			remaining = length !== 1 || ( subordinate && jQuery.isFunction( subordinate.promise ) ) ? length : 0,

			// the master Deferred. If resolveValues consist of only a single Deferred, just use that.
			deferred = remaining === 1 ? subordinate : jQuery.Deferred(),

			// Update function for both resolve and progress values
			updateFunc = function( i, contexts, values ) {
				return function( value ) {
					contexts[ i ] = this;
					values[ i ] = arguments.length > 1 ? core_slice.call( arguments ) : value;
					if( values === progressValues ) {
						deferred.notifyWith( contexts, values );
					} else if ( !( --remaining ) ) {
						deferred.resolveWith( contexts, values );
					}
				};
			},

			progressValues, progressContexts, resolveContexts;

		// add listeners to Deferred subordinates; treat others as resolved
		if ( length > 1 ) {
			progressValues = new Array( length );
			progressContexts = new Array( length );
			resolveContexts = new Array( length );
			for ( ; i < length; i++ ) {
				if ( resolveValues[ i ] && jQuery.isFunction( resolveValues[ i ].promise ) ) {
					resolveValues[ i ].promise()
						.done( updateFunc( i, resolveContexts, resolveValues ) )
						.fail( deferred.reject )
						.progress( updateFunc( i, progressContexts, progressValues ) );
				} else {
					--remaining;
				}
			}
		}

		// if we're not waiting on anything, resolve the master
		if ( !remaining ) {
			deferred.resolveWith( resolveContexts, resolveValues );
		}

		return deferred.promise();
	}
});
jQuery.support = (function() {

	var support, all, a,
		input, select, fragment,
		opt, eventName, isSupported, i,
		div = document.createElement("div");

	// Setup
	div.setAttribute( "className", "t" );
	div.innerHTML = "  <link/><table></table><a href='/a'>a</a><input type='checkbox'/>";

	// Support tests won't run in some limited or non-browser environments
	all = div.getElementsByTagName("*");
	a = div.getElementsByTagName("a")[ 0 ];
	if ( !all || !a || !all.length ) {
		return {};
	}

	// First batch of tests
	select = document.createElement("select");
	opt = select.appendChild( document.createElement("option") );
	input = div.getElementsByTagName("input")[ 0 ];

	a.style.cssText = "top:1px;float:left;opacity:.5";
	support = {
		// Test setAttribute on camelCase class. If it works, we need attrFixes when doing get/setAttribute (ie6/7)
		getSetAttribute: div.className !== "t",

		// IE strips leading whitespace when .innerHTML is used
		leadingWhitespace: div.firstChild.nodeType === 3,

		// Make sure that tbody elements aren't automatically inserted
		// IE will insert them into empty tables
		tbody: !div.getElementsByTagName("tbody").length,

		// Make sure that link elements get serialized correctly by innerHTML
		// This requires a wrapper element in IE
		htmlSerialize: !!div.getElementsByTagName("link").length,

		// Get the style information from getAttribute
		// (IE uses .cssText instead)
		style: /top/.test( a.getAttribute("style") ),

		// Make sure that URLs aren't manipulated
		// (IE normalizes it by default)
		hrefNormalized: a.getAttribute("href") === "/a",

		// Make sure that element opacity exists
		// (IE uses filter instead)
		// Use a regex to work around a WebKit issue. See #5145
		opacity: /^0.5/.test( a.style.opacity ),

		// Verify style float existence
		// (IE uses styleFloat instead of cssFloat)
		cssFloat: !!a.style.cssFloat,

		// Check the default checkbox/radio value ("" on WebKit; "on" elsewhere)
		checkOn: !!input.value,

		// Make sure that a selected-by-default option has a working selected property.
		// (WebKit defaults to false instead of true, IE too, if it's in an optgroup)
		optSelected: opt.selected,

		// Tests for enctype support on a form (#6743)
		enctype: !!document.createElement("form").enctype,

		// Makes sure cloning an html5 element does not cause problems
		// Where outerHTML is undefined, this still works
		html5Clone: document.createElement("nav").cloneNode( true ).outerHTML !== "<:nav></:nav>",

		// jQuery.support.boxModel DEPRECATED in 1.8 since we don't support Quirks Mode
		boxModel: document.compatMode === "CSS1Compat",

		// Will be defined later
		deleteExpando: true,
		noCloneEvent: true,
		inlineBlockNeedsLayout: false,
		shrinkWrapBlocks: false,
		reliableMarginRight: true,
		boxSizingReliable: true,
		pixelPosition: false
	};

	// Make sure checked status is properly cloned
	input.checked = true;
	support.noCloneChecked = input.cloneNode( true ).checked;

	// Make sure that the options inside disabled selects aren't marked as disabled
	// (WebKit marks them as disabled)
	select.disabled = true;
	support.optDisabled = !opt.disabled;

	// Support: IE<9
	try {
		delete div.test;
	} catch( e ) {
		support.deleteExpando = false;
	}

	// Check if we can trust getAttribute("value")
	input = document.createElement("input");
	input.setAttribute( "value", "" );
	support.input = input.getAttribute( "value" ) === "";

	// Check if an input maintains its value after becoming a radio
	input.value = "t";
	input.setAttribute( "type", "radio" );
	support.radioValue = input.value === "t";

	// #11217 - WebKit loses check when the name is after the checked attribute
	input.setAttribute( "checked", "t" );
	input.setAttribute( "name", "t" );

	fragment = document.createDocumentFragment();
	fragment.appendChild( input );

	// Check if a disconnected checkbox will retain its checked
	// value of true after appended to the DOM (IE6/7)
	support.appendChecked = input.checked;

	// WebKit doesn't clone checked state correctly in fragments
	support.checkClone = fragment.cloneNode( true ).cloneNode( true ).lastChild.checked;

	// Support: IE<9
	// Opera does not clone events (and typeof div.attachEvent === undefined).
	// IE9-10 clones events bound via attachEvent, but they don't trigger with .click()
	if ( div.attachEvent ) {
		div.attachEvent( "onclick", function() {
			support.noCloneEvent = false;
		});

		div.cloneNode( true ).click();
	}

	// Support: IE<9 (lack submit/change bubble), Firefox 17+ (lack focusin event)
	// Beware of CSP restrictions (https://developer.mozilla.org/en/Security/CSP), test/csp.php
	for ( i in { submit: true, change: true, focusin: true }) {
		div.setAttribute( eventName = "on" + i, "t" );

		support[ i + "Bubbles" ] = eventName in window || div.attributes[ eventName ].expando === false;
	}

	div.style.backgroundClip = "content-box";
	div.cloneNode( true ).style.backgroundClip = "";
	support.clearCloneStyle = div.style.backgroundClip === "content-box";

	// Run tests that need a body at doc ready
	jQuery(function() {
		var container, marginDiv, tds,
			divReset = "padding:0;margin:0;border:0;display:block;box-sizing:content-box;-moz-box-sizing:content-box;-webkit-box-sizing:content-box;",
			body = document.getElementsByTagName("body")[0];

		if ( !body ) {
			// Return for frameset docs that don't have a body
			return;
		}

		container = document.createElement("div");
		container.style.cssText = "border:0;width:0;height:0;position:absolute;top:0;left:-9999px;margin-top:1px";

		body.appendChild( container ).appendChild( div );

		// Support: IE8
		// Check if table cells still have offsetWidth/Height when they are set
		// to display:none and there are still other visible table cells in a
		// table row; if so, offsetWidth/Height are not reliable for use when
		// determining if an element has been hidden directly using
		// display:none (it is still safe to use offsets if a parent element is
		// hidden; don safety goggles and see bug #4512 for more information).
		div.innerHTML = "<table><tr><td></td><td>t</td></tr></table>";
		tds = div.getElementsByTagName("td");
		tds[ 0 ].style.cssText = "padding:0;margin:0;border:0;display:none";
		isSupported = ( tds[ 0 ].offsetHeight === 0 );

		tds[ 0 ].style.display = "";
		tds[ 1 ].style.display = "none";

		// Support: IE8
		// Check if empty table cells still have offsetWidth/Height
		support.reliableHiddenOffsets = isSupported && ( tds[ 0 ].offsetHeight === 0 );

		// Check box-sizing and margin behavior
		div.innerHTML = "";
		div.style.cssText = "box-sizing:border-box;-moz-box-sizing:border-box;-webkit-box-sizing:border-box;padding:1px;border:1px;display:block;width:4px;margin-top:1%;position:absolute;top:1%;";
		support.boxSizing = ( div.offsetWidth === 4 );
		support.doesNotIncludeMarginInBodyOffset = ( body.offsetTop !== 1 );

		// Use window.getComputedStyle because jsdom on node.js will break without it.
		if ( window.getComputedStyle ) {
			support.pixelPosition = ( window.getComputedStyle( div, null ) || {} ).top !== "1%";
			support.boxSizingReliable = ( window.getComputedStyle( div, null ) || { width: "4px" } ).width === "4px";

			// Check if div with explicit width and no margin-right incorrectly
			// gets computed margin-right based on width of container. (#3333)
			// Fails in WebKit before Feb 2011 nightlies
			// WebKit Bug 13343 - getComputedStyle returns wrong value for margin-right
			marginDiv = div.appendChild( document.createElement("div") );
			marginDiv.style.cssText = div.style.cssText = divReset;
			marginDiv.style.marginRight = marginDiv.style.width = "0";
			div.style.width = "1px";

			support.reliableMarginRight =
				!parseFloat( ( window.getComputedStyle( marginDiv, null ) || {} ).marginRight );
		}

		if ( typeof div.style.zoom !== core_strundefined ) {
			// Support: IE<8
			// Check if natively block-level elements act like inline-block
			// elements when setting their display to 'inline' and giving
			// them layout
			div.innerHTML = "";
			div.style.cssText = divReset + "width:1px;padding:1px;display:inline;zoom:1";
			support.inlineBlockNeedsLayout = ( div.offsetWidth === 3 );

			// Support: IE6
			// Check if elements with layout shrink-wrap their children
			div.style.display = "block";
			div.innerHTML = "<div></div>";
			div.firstChild.style.width = "5px";
			support.shrinkWrapBlocks = ( div.offsetWidth !== 3 );

			if ( support.inlineBlockNeedsLayout ) {
				// Prevent IE 6 from affecting layout for positioned elements #11048
				// Prevent IE from shrinking the body in IE 7 mode #12869
				// Support: IE<8
				body.style.zoom = 1;
			}
		}

		body.removeChild( container );

		// Null elements to avoid leaks in IE
		container = div = tds = marginDiv = null;
	});

	// Null elements to avoid leaks in IE
	all = select = fragment = opt = a = input = null;

	return support;
})();

var rbrace = /(?:\{[\s\S]*\}|\[[\s\S]*\])$/,
	rmultiDash = /([A-Z])/g;

function internalData( elem, name, data, pvt /* Internal Use Only */ ){
	if ( !jQuery.acceptData( elem ) ) {
		return;
	}

	var thisCache, ret,
		internalKey = jQuery.expando,
		getByName = typeof name === "string",

		// We have to handle DOM nodes and JS objects differently because IE6-7
		// can't GC object references properly across the DOM-JS boundary
		isNode = elem.nodeType,

		// Only DOM nodes need the global jQuery cache; JS object data is
		// attached directly to the object so GC can occur automatically
		cache = isNode ? jQuery.cache : elem,

		// Only defining an ID for JS objects if its cache already exists allows
		// the code to shortcut on the same path as a DOM node with no cache
		id = isNode ? elem[ internalKey ] : elem[ internalKey ] && internalKey;

	// Avoid doing any more work than we need to when trying to get data on an
	// object that has no data at all
	if ( (!id || !cache[id] || (!pvt && !cache[id].data)) && getByName && data === undefined ) {
		return;
	}

	if ( !id ) {
		// Only DOM nodes need a new unique ID for each element since their data
		// ends up in the global cache
		if ( isNode ) {
			elem[ internalKey ] = id = core_deletedIds.pop() || jQuery.guid++;
		} else {
			id = internalKey;
		}
	}

	if ( !cache[ id ] ) {
		cache[ id ] = {};

		// Avoids exposing jQuery metadata on plain JS objects when the object
		// is serialized using JSON.stringify
		if ( !isNode ) {
			cache[ id ].toJSON = jQuery.noop;
		}
	}

	// An object can be passed to jQuery.data instead of a key/value pair; this gets
	// shallow copied over onto the existing cache
	if ( typeof name === "object" || typeof name === "function" ) {
		if ( pvt ) {
			cache[ id ] = jQuery.extend( cache[ id ], name );
		} else {
			cache[ id ].data = jQuery.extend( cache[ id ].data, name );
		}
	}

	thisCache = cache[ id ];

	// jQuery data() is stored in a separate object inside the object's internal data
	// cache in order to avoid key collisions between internal data and user-defined
	// data.
	if ( !pvt ) {
		if ( !thisCache.data ) {
			thisCache.data = {};
		}

		thisCache = thisCache.data;
	}

	if ( data !== undefined ) {
		thisCache[ jQuery.camelCase( name ) ] = data;
	}

	// Check for both converted-to-camel and non-converted data property names
	// If a data property was specified
	if ( getByName ) {

		// First Try to find as-is property data
		ret = thisCache[ name ];

		// Test for null|undefined property data
		if ( ret == null ) {

			// Try to find the camelCased property
			ret = thisCache[ jQuery.camelCase( name ) ];
		}
	} else {
		ret = thisCache;
	}

	return ret;
}

function internalRemoveData( elem, name, pvt ) {
	if ( !jQuery.acceptData( elem ) ) {
		return;
	}

	var i, l, thisCache,
		isNode = elem.nodeType,

		// See jQuery.data for more information
		cache = isNode ? jQuery.cache : elem,
		id = isNode ? elem[ jQuery.expando ] : jQuery.expando;

	// If there is already no cache entry for this object, there is no
	// purpose in continuing
	if ( !cache[ id ] ) {
		return;
	}

	if ( name ) {

		thisCache = pvt ? cache[ id ] : cache[ id ].data;

		if ( thisCache ) {

			// Support array or space separated string names for data keys
			if ( !jQuery.isArray( name ) ) {

				// try the string as a key before any manipulation
				if ( name in thisCache ) {
					name = [ name ];
				} else {

					// split the camel cased version by spaces unless a key with the spaces exists
					name = jQuery.camelCase( name );
					if ( name in thisCache ) {
						name = [ name ];
					} else {
						name = name.split(" ");
					}
				}
			} else {
				// If "name" is an array of keys...
				// When data is initially created, via ("key", "val") signature,
				// keys will be converted to camelCase.
				// Since there is no way to tell _how_ a key was added, remove
				// both plain key and camelCase key. #12786
				// This will only penalize the array argument path.
				name = name.concat( jQuery.map( name, jQuery.camelCase ) );
			}

			for ( i = 0, l = name.length; i < l; i++ ) {
				delete thisCache[ name[i] ];
			}

			// If there is no data left in the cache, we want to continue
			// and let the cache object itself get destroyed
			if ( !( pvt ? isEmptyDataObject : jQuery.isEmptyObject )( thisCache ) ) {
				return;
			}
		}
	}

	// See jQuery.data for more information
	if ( !pvt ) {
		delete cache[ id ].data;

		// Don't destroy the parent cache unless the internal data object
		// had been the only thing left in it
		if ( !isEmptyDataObject( cache[ id ] ) ) {
			return;
		}
	}

	// Destroy the cache
	if ( isNode ) {
		jQuery.cleanData( [ elem ], true );

	// Use delete when supported for expandos or `cache` is not a window per isWindow (#10080)
	} else if ( jQuery.support.deleteExpando || cache != cache.window ) {
		delete cache[ id ];

	// When all else fails, null
	} else {
		cache[ id ] = null;
	}
}

jQuery.extend({
	cache: {},

	// Unique for each copy of jQuery on the page
	// Non-digits removed to match rinlinejQuery
	expando: "jQuery" + ( core_version + Math.random() ).replace( /\D/g, "" ),

	// The following elements throw uncatchable exceptions if you
	// attempt to add expando properties to them.
	noData: {
		"embed": true,
		// Ban all objects except for Flash (which handle expandos)
		"object": "clsid:D27CDB6E-AE6D-11cf-96B8-444553540000",
		"applet": true
	},

	hasData: function( elem ) {
		elem = elem.nodeType ? jQuery.cache[ elem[jQuery.expando] ] : elem[ jQuery.expando ];
		return !!elem && !isEmptyDataObject( elem );
	},

	data: function( elem, name, data ) {
		return internalData( elem, name, data );
	},

	removeData: function( elem, name ) {
		return internalRemoveData( elem, name );
	},

	// For internal use only.
	_data: function( elem, name, data ) {
		return internalData( elem, name, data, true );
	},

	_removeData: function( elem, name ) {
		return internalRemoveData( elem, name, true );
	},

	// A method for determining if a DOM node can handle the data expando
	acceptData: function( elem ) {
		// Do not set data on non-element because it will not be cleared (#8335).
		if ( elem.nodeType && elem.nodeType !== 1 && elem.nodeType !== 9 ) {
			return false;
		}

		var noData = elem.nodeName && jQuery.noData[ elem.nodeName.toLowerCase() ];

		// nodes accept data unless otherwise specified; rejection can be conditional
		return !noData || noData !== true && elem.getAttribute("classid") === noData;
	}
});

jQuery.fn.extend({
	data: function( key, value ) {
		var attrs, name,
			elem = this[0],
			i = 0,
			data = null;

		// Gets all values
		if ( key === undefined ) {
			if ( this.length ) {
				data = jQuery.data( elem );

				if ( elem.nodeType === 1 && !jQuery._data( elem, "parsedAttrs" ) ) {
					attrs = elem.attributes;
					for ( ; i < attrs.length; i++ ) {
						name = attrs[i].name;

						if ( !name.indexOf( "data-" ) ) {
							name = jQuery.camelCase( name.slice(5) );

							dataAttr( elem, name, data[ name ] );
						}
					}
					jQuery._data( elem, "parsedAttrs", true );
				}
			}

			return data;
		}

		// Sets multiple values
		if ( typeof key === "object" ) {
			return this.each(function() {
				jQuery.data( this, key );
			});
		}

		return jQuery.access( this, function( value ) {

			if ( value === undefined ) {
				// Try to fetch any internally stored data first
				return elem ? dataAttr( elem, key, jQuery.data( elem, key ) ) : null;
			}

			this.each(function() {
				jQuery.data( this, key, value );
			});
		}, null, value, arguments.length > 1, null, true );
	},

	removeData: function( key ) {
		return this.each(function() {
			jQuery.removeData( this, key );
		});
	}
});

function dataAttr( elem, key, data ) {
	// If nothing was found internally, try to fetch any
	// data from the HTML5 data-* attribute
	if ( data === undefined && elem.nodeType === 1 ) {

		var name = "data-" + key.replace( rmultiDash, "-$1" ).toLowerCase();

		data = elem.getAttribute( name );

		if ( typeof data === "string" ) {
			try {
				data = data === "true" ? true :
					data === "false" ? false :
					data === "null" ? null :
					// Only convert to a number if it doesn't change the string
					+data + "" === data ? +data :
					rbrace.test( data ) ? jQuery.parseJSON( data ) :
						data;
			} catch( e ) {}

			// Make sure we set the data so it isn't changed later
			jQuery.data( elem, key, data );

		} else {
			data = undefined;
		}
	}

	return data;
}

// checks a cache object for emptiness
function isEmptyDataObject( obj ) {
	var name;
	for ( name in obj ) {

		// if the public data object is empty, the private is still empty
		if ( name === "data" && jQuery.isEmptyObject( obj[name] ) ) {
			continue;
		}
		if ( name !== "toJSON" ) {
			return false;
		}
	}

	return true;
}
jQuery.extend({
	queue: function( elem, type, data ) {
		var queue;

		if ( elem ) {
			type = ( type || "fx" ) + "queue";
			queue = jQuery._data( elem, type );

			// Speed up dequeue by getting out quickly if this is just a lookup
			if ( data ) {
				if ( !queue || jQuery.isArray(data) ) {
					queue = jQuery._data( elem, type, jQuery.makeArray(data) );
				} else {
					queue.push( data );
				}
			}
			return queue || [];
		}
	},

	dequeue: function( elem, type ) {
		type = type || "fx";

		var queue = jQuery.queue( elem, type ),
			startLength = queue.length,
			fn = queue.shift(),
			hooks = jQuery._queueHooks( elem, type ),
			next = function() {
				jQuery.dequeue( elem, type );
			};

		// If the fx queue is dequeued, always remove the progress sentinel
		if ( fn === "inprogress" ) {
			fn = queue.shift();
			startLength--;
		}

		hooks.cur = fn;
		if ( fn ) {

			// Add a progress sentinel to prevent the fx queue from being
			// automatically dequeued
			if ( type === "fx" ) {
				queue.unshift( "inprogress" );
			}

			// clear up the last queue stop function
			delete hooks.stop;
			fn.call( elem, next, hooks );
		}

		if ( !startLength && hooks ) {
			hooks.empty.fire();
		}
	},

	// not intended for public consumption - generates a queueHooks object, or returns the current one
	_queueHooks: function( elem, type ) {
		var key = type + "queueHooks";
		return jQuery._data( elem, key ) || jQuery._data( elem, key, {
			empty: jQuery.Callbacks("once memory").add(function() {
				jQuery._removeData( elem, type + "queue" );
				jQuery._removeData( elem, key );
			})
		});
	}
});

jQuery.fn.extend({
	queue: function( type, data ) {
		var setter = 2;

		if ( typeof type !== "string" ) {
			data = type;
			type = "fx";
			setter--;
		}

		if ( arguments.length < setter ) {
			return jQuery.queue( this[0], type );
		}

		return data === undefined ?
			this :
			this.each(function() {
				var queue = jQuery.queue( this, type, data );

				// ensure a hooks for this queue
				jQuery._queueHooks( this, type );

				if ( type === "fx" && queue[0] !== "inprogress" ) {
					jQuery.dequeue( this, type );
				}
			});
	},
	dequeue: function( type ) {
		return this.each(function() {
			jQuery.dequeue( this, type );
		});
	},
	// Based off of the plugin by Clint Helfers, with permission.
	// http://blindsignals.com/index.php/2009/07/jquery-delay/
	delay: function( time, type ) {
		time = jQuery.fx ? jQuery.fx.speeds[ time ] || time : time;
		type = type || "fx";

		return this.queue( type, function( next, hooks ) {
			var timeout = setTimeout( next, time );
			hooks.stop = function() {
				clearTimeout( timeout );
			};
		});
	},
	clearQueue: function( type ) {
		return this.queue( type || "fx", [] );
	},
	// Get a promise resolved when queues of a certain type
	// are emptied (fx is the type by default)
	promise: function( type, obj ) {
		var tmp,
			count = 1,
			defer = jQuery.Deferred(),
			elements = this,
			i = this.length,
			resolve = function() {
				if ( !( --count ) ) {
					defer.resolveWith( elements, [ elements ] );
				}
			};

		if ( typeof type !== "string" ) {
			obj = type;
			type = undefined;
		}
		type = type || "fx";

		while( i-- ) {
			tmp = jQuery._data( elements[ i ], type + "queueHooks" );
			if ( tmp && tmp.empty ) {
				count++;
				tmp.empty.add( resolve );
			}
		}
		resolve();
		return defer.promise( obj );
	}
});
var nodeHook, boolHook,
	rclass = /[\t\r\n]/g,
	rreturn = /\r/g,
	rfocusable = /^(?:input|select|textarea|button|object)$/i,
	rclickable = /^(?:a|area)$/i,
	rboolean = /^(?:checked|selected|autofocus|autoplay|async|controls|defer|disabled|hidden|loop|multiple|open|readonly|required|scoped)$/i,
	ruseDefault = /^(?:checked|selected)$/i,
	getSetAttribute = jQuery.support.getSetAttribute,
	getSetInput = jQuery.support.input;

jQuery.fn.extend({
	attr: function( name, value ) {
		return jQuery.access( this, jQuery.attr, name, value, arguments.length > 1 );
	},

	removeAttr: function( name ) {
		return this.each(function() {
			jQuery.removeAttr( this, name );
		});
	},

	prop: function( name, value ) {
		return jQuery.access( this, jQuery.prop, name, value, arguments.length > 1 );
	},

	removeProp: function( name ) {
		name = jQuery.propFix[ name ] || name;
		return this.each(function() {
			// try/catch handles cases where IE balks (such as removing a property on window)
			try {
				this[ name ] = undefined;
				delete this[ name ];
			} catch( e ) {}
		});
	},

	addClass: function( value ) {
		var classes, elem, cur, clazz, j,
			i = 0,
			len = this.length,
			proceed = typeof value === "string" && value;

		if ( jQuery.isFunction( value ) ) {
			return this.each(function( j ) {
				jQuery( this ).addClass( value.call( this, j, this.className ) );
			});
		}

		if ( proceed ) {
			// The disjunction here is for better compressibility (see removeClass)
			classes = ( value || "" ).match( core_rnotwhite ) || [];

			for ( ; i < len; i++ ) {
				elem = this[ i ];
				cur = elem.nodeType === 1 && ( elem.className ?
					( " " + elem.className + " " ).replace( rclass, " " ) :
					" "
				);

				if ( cur ) {
					j = 0;
					while ( (clazz = classes[j++]) ) {
						if ( cur.indexOf( " " + clazz + " " ) < 0 ) {
							cur += clazz + " ";
						}
					}
					elem.className = jQuery.trim( cur );

				}
			}
		}

		return this;
	},

	removeClass: function( value ) {
		var classes, elem, cur, clazz, j,
			i = 0,
			len = this.length,
			proceed = arguments.length === 0 || typeof value === "string" && value;

		if ( jQuery.isFunction( value ) ) {
			return this.each(function( j ) {
				jQuery( this ).removeClass( value.call( this, j, this.className ) );
			});
		}
		if ( proceed ) {
			classes = ( value || "" ).match( core_rnotwhite ) || [];

			for ( ; i < len; i++ ) {
				elem = this[ i ];
				// This expression is here for better compressibility (see addClass)
				cur = elem.nodeType === 1 && ( elem.className ?
					( " " + elem.className + " " ).replace( rclass, " " ) :
					""
				);

				if ( cur ) {
					j = 0;
					while ( (clazz = classes[j++]) ) {
						// Remove *all* instances
						while ( cur.indexOf( " " + clazz + " " ) >= 0 ) {
							cur = cur.replace( " " + clazz + " ", " " );
						}
					}
					elem.className = value ? jQuery.trim( cur ) : "";
				}
			}
		}

		return this;
	},

	toggleClass: function( value, stateVal ) {
		var type = typeof value,
			isBool = typeof stateVal === "boolean";

		if ( jQuery.isFunction( value ) ) {
			return this.each(function( i ) {
				jQuery( this ).toggleClass( value.call(this, i, this.className, stateVal), stateVal );
			});
		}

		return this.each(function() {
			if ( type === "string" ) {
				// toggle individual class names
				var className,
					i = 0,
					self = jQuery( this ),
					state = stateVal,
					classNames = value.match( core_rnotwhite ) || [];

				while ( (className = classNames[ i++ ]) ) {
					// check each className given, space separated list
					state = isBool ? state : !self.hasClass( className );
					self[ state ? "addClass" : "removeClass" ]( className );
				}

			// Toggle whole class name
			} else if ( type === core_strundefined || type === "boolean" ) {
				if ( this.className ) {
					// store className if set
					jQuery._data( this, "__className__", this.className );
				}

				// If the element has a class name or if we're passed "false",
				// then remove the whole classname (if there was one, the above saved it).
				// Otherwise bring back whatever was previously saved (if anything),
				// falling back to the empty string if nothing was stored.
				this.className = this.className || value === false ? "" : jQuery._data( this, "__className__" ) || "";
			}
		});
	},

	hasClass: function( selector ) {
		var className = " " + selector + " ",
			i = 0,
			l = this.length;
		for ( ; i < l; i++ ) {
			if ( this[i].nodeType === 1 && (" " + this[i].className + " ").replace(rclass, " ").indexOf( className ) >= 0 ) {
				return true;
			}
		}

		return false;
	},

	val: function( value ) {
		var ret, hooks, isFunction,
			elem = this[0];

		if ( !arguments.length ) {
			if ( elem ) {
				hooks = jQuery.valHooks[ elem.type ] || jQuery.valHooks[ elem.nodeName.toLowerCase() ];

				if ( hooks && "get" in hooks && (ret = hooks.get( elem, "value" )) !== undefined ) {
					return ret;
				}

				ret = elem.value;

				return typeof ret === "string" ?
					// handle most common string cases
					ret.replace(rreturn, "") :
					// handle cases where value is null/undef or number
					ret == null ? "" : ret;
			}

			return;
		}

		isFunction = jQuery.isFunction( value );

		return this.each(function( i ) {
			var val,
				self = jQuery(this);

			if ( this.nodeType !== 1 ) {
				return;
			}

			if ( isFunction ) {
				val = value.call( this, i, self.val() );
			} else {
				val = value;
			}

			// Treat null/undefined as ""; convert numbers to string
			if ( val == null ) {
				val = "";
			} else if ( typeof val === "number" ) {
				val += "";
			} else if ( jQuery.isArray( val ) ) {
				val = jQuery.map(val, function ( value ) {
					return value == null ? "" : value + "";
				});
			}

			hooks = jQuery.valHooks[ this.type ] || jQuery.valHooks[ this.nodeName.toLowerCase() ];

			// If set returns undefined, fall back to normal setting
			if ( !hooks || !("set" in hooks) || hooks.set( this, val, "value" ) === undefined ) {
				this.value = val;
			}
		});
	}
});

jQuery.extend({
	valHooks: {
		option: {
			get: function( elem ) {
				// attributes.value is undefined in Blackberry 4.7 but
				// uses .value. See #6932
				var val = elem.attributes.value;
				return !val || val.specified ? elem.value : elem.text;
			}
		},
		select: {
			get: function( elem ) {
				var value, option,
					options = elem.options,
					index = elem.selectedIndex,
					one = elem.type === "select-one" || index < 0,
					values = one ? null : [],
					max = one ? index + 1 : options.length,
					i = index < 0 ?
						max :
						one ? index : 0;

				// Loop through all the selected options
				for ( ; i < max; i++ ) {
					option = options[ i ];

					// oldIE doesn't update selected after form reset (#2551)
					if ( ( option.selected || i === index ) &&
							// Don't return options that are disabled or in a disabled optgroup
							( jQuery.support.optDisabled ? !option.disabled : option.getAttribute("disabled") === null ) &&
							( !option.parentNode.disabled || !jQuery.nodeName( option.parentNode, "optgroup" ) ) ) {

						// Get the specific value for the option
						value = jQuery( option ).val();

						// We don't need an array for one selects
						if ( one ) {
							return value;
						}

						// Multi-Selects return an array
						values.push( value );
					}
				}

				return values;
			},

			set: function( elem, value ) {
				var values = jQuery.makeArray( value );

				jQuery(elem).find("option").each(function() {
					this.selected = jQuery.inArray( jQuery(this).val(), values ) >= 0;
				});

				if ( !values.length ) {
					elem.selectedIndex = -1;
				}
				return values;
			}
		}
	},

	attr: function( elem, name, value ) {
		var hooks, notxml, ret,
			nType = elem.nodeType;

		// don't get/set attributes on text, comment and attribute nodes
		if ( !elem || nType === 3 || nType === 8 || nType === 2 ) {
			return;
		}

		// Fallback to prop when attributes are not supported
		if ( typeof elem.getAttribute === core_strundefined ) {
			return jQuery.prop( elem, name, value );
		}

		notxml = nType !== 1 || !jQuery.isXMLDoc( elem );

		// All attributes are lowercase
		// Grab necessary hook if one is defined
		if ( notxml ) {
			name = name.toLowerCase();
			hooks = jQuery.attrHooks[ name ] || ( rboolean.test( name ) ? boolHook : nodeHook );
		}

		if ( value !== undefined ) {

			if ( value === null ) {
				jQuery.removeAttr( elem, name );

			} else if ( hooks && notxml && "set" in hooks && (ret = hooks.set( elem, value, name )) !== undefined ) {
				return ret;

			} else {
				elem.setAttribute( name, value + "" );
				return value;
			}

		} else if ( hooks && notxml && "get" in hooks && (ret = hooks.get( elem, name )) !== null ) {
			return ret;

		} else {

			// In IE9+, Flash objects don't have .getAttribute (#12945)
			// Support: IE9+
			if ( typeof elem.getAttribute !== core_strundefined ) {
				ret =  elem.getAttribute( name );
			}

			// Non-existent attributes return null, we normalize to undefined
			return ret == null ?
				undefined :
				ret;
		}
	},

	removeAttr: function( elem, value ) {
		var name, propName,
			i = 0,
			attrNames = value && value.match( core_rnotwhite );

		if ( attrNames && elem.nodeType === 1 ) {
			while ( (name = attrNames[i++]) ) {
				propName = jQuery.propFix[ name ] || name;

				// Boolean attributes get special treatment (#10870)
				if ( rboolean.test( name ) ) {
					// Set corresponding property to false for boolean attributes
					// Also clear defaultChecked/defaultSelected (if appropriate) for IE<8
					if ( !getSetAttribute && ruseDefault.test( name ) ) {
						elem[ jQuery.camelCase( "default-" + name ) ] =
							elem[ propName ] = false;
					} else {
						elem[ propName ] = false;
					}

				// See #9699 for explanation of this approach (setting first, then removal)
				} else {
					jQuery.attr( elem, name, "" );
				}

				elem.removeAttribute( getSetAttribute ? name : propName );
			}
		}
	},

	attrHooks: {
		type: {
			set: function( elem, value ) {
				if ( !jQuery.support.radioValue && value === "radio" && jQuery.nodeName(elem, "input") ) {
					// Setting the type on a radio button after the value resets the value in IE6-9
					// Reset value to default in case type is set after value during creation
					var val = elem.value;
					elem.setAttribute( "type", value );
					if ( val ) {
						elem.value = val;
					}
					return value;
				}
			}
		}
	},

	propFix: {
		tabindex: "tabIndex",
		readonly: "readOnly",
		"for": "htmlFor",
		"class": "className",
		maxlength: "maxLength",
		cellspacing: "cellSpacing",
		cellpadding: "cellPadding",
		rowspan: "rowSpan",
		colspan: "colSpan",
		usemap: "useMap",
		frameborder: "frameBorder",
		contenteditable: "contentEditable"
	},

	prop: function( elem, name, value ) {
		var ret, hooks, notxml,
			nType = elem.nodeType;

		// don't get/set properties on text, comment and attribute nodes
		if ( !elem || nType === 3 || nType === 8 || nType === 2 ) {
			return;
		}

		notxml = nType !== 1 || !jQuery.isXMLDoc( elem );

		if ( notxml ) {
			// Fix name and attach hooks
			name = jQuery.propFix[ name ] || name;
			hooks = jQuery.propHooks[ name ];
		}

		if ( value !== undefined ) {
			if ( hooks && "set" in hooks && (ret = hooks.set( elem, value, name )) !== undefined ) {
				return ret;

			} else {
				return ( elem[ name ] = value );
			}

		} else {
			if ( hooks && "get" in hooks && (ret = hooks.get( elem, name )) !== null ) {
				return ret;

			} else {
				return elem[ name ];
			}
		}
	},

	propHooks: {
		tabIndex: {
			get: function( elem ) {
				// elem.tabIndex doesn't always return the correct value when it hasn't been explicitly set
				// http://fluidproject.org/blog/2008/01/09/getting-setting-and-removing-tabindex-values-with-javascript/
				var attributeNode = elem.getAttributeNode("tabindex");

				return attributeNode && attributeNode.specified ?
					parseInt( attributeNode.value, 10 ) :
					rfocusable.test( elem.nodeName ) || rclickable.test( elem.nodeName ) && elem.href ?
						0 :
						undefined;
			}
		}
	}
});

// Hook for boolean attributes
boolHook = {
	get: function( elem, name ) {
		var
			// Use .prop to determine if this attribute is understood as boolean
			prop = jQuery.prop( elem, name ),

			// Fetch it accordingly
			attr = typeof prop === "boolean" && elem.getAttribute( name ),
			detail = typeof prop === "boolean" ?

				getSetInput && getSetAttribute ?
					attr != null :
					// oldIE fabricates an empty string for missing boolean attributes
					// and conflates checked/selected into attroperties
					ruseDefault.test( name ) ?
						elem[ jQuery.camelCase( "default-" + name ) ] :
						!!attr :

				// fetch an attribute node for properties not recognized as boolean
				elem.getAttributeNode( name );

		return detail && detail.value !== false ?
			name.toLowerCase() :
			undefined;
	},
	set: function( elem, value, name ) {
		if ( value === false ) {
			// Remove boolean attributes when set to false
			jQuery.removeAttr( elem, name );
		} else if ( getSetInput && getSetAttribute || !ruseDefault.test( name ) ) {
			// IE<8 needs the *property* name
			elem.setAttribute( !getSetAttribute && jQuery.propFix[ name ] || name, name );

		// Use defaultChecked and defaultSelected for oldIE
		} else {
			elem[ jQuery.camelCase( "default-" + name ) ] = elem[ name ] = true;
		}

		return name;
	}
};

// fix oldIE value attroperty
if ( !getSetInput || !getSetAttribute ) {
	jQuery.attrHooks.value = {
		get: function( elem, name ) {
			var ret = elem.getAttributeNode( name );
			return jQuery.nodeName( elem, "input" ) ?

				// Ignore the value *property* by using defaultValue
				elem.defaultValue :

				ret && ret.specified ? ret.value : undefined;
		},
		set: function( elem, value, name ) {
			if ( jQuery.nodeName( elem, "input" ) ) {
				// Does not return so that setAttribute is also used
				elem.defaultValue = value;
			} else {
				// Use nodeHook if defined (#1954); otherwise setAttribute is fine
				return nodeHook && nodeHook.set( elem, value, name );
			}
		}
	};
}

// IE6/7 do not support getting/setting some attributes with get/setAttribute
if ( !getSetAttribute ) {

	// Use this for any attribute in IE6/7
	// This fixes almost every IE6/7 issue
	nodeHook = jQuery.valHooks.button = {
		get: function( elem, name ) {
			var ret = elem.getAttributeNode( name );
			return ret && ( name === "id" || name === "name" || name === "coords" ? ret.value !== "" : ret.specified ) ?
				ret.value :
				undefined;
		},
		set: function( elem, value, name ) {
			// Set the existing or create a new attribute node
			var ret = elem.getAttributeNode( name );
			if ( !ret ) {
				elem.setAttributeNode(
					(ret = elem.ownerDocument.createAttribute( name ))
				);
			}

			ret.value = value += "";

			// Break association with cloned elements by also using setAttribute (#9646)
			return name === "value" || value === elem.getAttribute( name ) ?
				value :
				undefined;
		}
	};

	// Set contenteditable to false on removals(#10429)
	// Setting to empty string throws an error as an invalid value
	jQuery.attrHooks.contenteditable = {
		get: nodeHook.get,
		set: function( elem, value, name ) {
			nodeHook.set( elem, value === "" ? false : value, name );
		}
	};

	// Set width and height to auto instead of 0 on empty string( Bug #8150 )
	// This is for removals
	jQuery.each([ "width", "height" ], function( i, name ) {
		jQuery.attrHooks[ name ] = jQuery.extend( jQuery.attrHooks[ name ], {
			set: function( elem, value ) {
				if ( value === "" ) {
					elem.setAttribute( name, "auto" );
					return value;
				}
			}
		});
	});
}


// Some attributes require a special call on IE
// http://msdn.microsoft.com/en-us/library/ms536429%28VS.85%29.aspx
if ( !jQuery.support.hrefNormalized ) {
	jQuery.each([ "href", "src", "width", "height" ], function( i, name ) {
		jQuery.attrHooks[ name ] = jQuery.extend( jQuery.attrHooks[ name ], {
			get: function( elem ) {
				var ret = elem.getAttribute( name, 2 );
				return ret == null ? undefined : ret;
			}
		});
	});

	// href/src property should get the full normalized URL (#10299/#12915)
	jQuery.each([ "href", "src" ], function( i, name ) {
		jQuery.propHooks[ name ] = {
			get: function( elem ) {
				return elem.getAttribute( name, 4 );
			}
		};
	});
}

if ( !jQuery.support.style ) {
	jQuery.attrHooks.style = {
		get: function( elem ) {
			// Return undefined in the case of empty string
			// Note: IE uppercases css property names, but if we were to .toLowerCase()
			// .cssText, that would destroy case senstitivity in URL's, like in "background"
			return elem.style.cssText || undefined;
		},
		set: function( elem, value ) {
			return ( elem.style.cssText = value + "" );
		}
	};
}

// Safari mis-reports the default selected property of an option
// Accessing the parent's selectedIndex property fixes it
if ( !jQuery.support.optSelected ) {
	jQuery.propHooks.selected = jQuery.extend( jQuery.propHooks.selected, {
		get: function( elem ) {
			var parent = elem.parentNode;

			if ( parent ) {
				parent.selectedIndex;

				// Make sure that it also works with optgroups, see #5701
				if ( parent.parentNode ) {
					parent.parentNode.selectedIndex;
				}
			}
			return null;
		}
	});
}

// IE6/7 call enctype encoding
if ( !jQuery.support.enctype ) {
	jQuery.propFix.enctype = "encoding";
}

// Radios and checkboxes getter/setter
if ( !jQuery.support.checkOn ) {
	jQuery.each([ "radio", "checkbox" ], function() {
		jQuery.valHooks[ this ] = {
			get: function( elem ) {
				// Handle the case where in Webkit "" is returned instead of "on" if a value isn't specified
				return elem.getAttribute("value") === null ? "on" : elem.value;
			}
		};
	});
}
jQuery.each([ "radio", "checkbox" ], function() {
	jQuery.valHooks[ this ] = jQuery.extend( jQuery.valHooks[ this ], {
		set: function( elem, value ) {
			if ( jQuery.isArray( value ) ) {
				return ( elem.checked = jQuery.inArray( jQuery(elem).val(), value ) >= 0 );
			}
		}
	});
});
var rformElems = /^(?:input|select|textarea)$/i,
	rkeyEvent = /^key/,
	rmouseEvent = /^(?:mouse|contextmenu)|click/,
	rfocusMorph = /^(?:focusinfocus|focusoutblur)$/,
	rtypenamespace = /^([^.]*)(?:\.(.+)|)$/;

function returnTrue() {
	return true;
}

function returnFalse() {
	return false;
}

/*
 * Helper functions for managing events -- not part of the public interface.
 * Props to Dean Edwards' addEvent library for many of the ideas.
 */
jQuery.event = {

	global: {},

	add: function( elem, types, handler, data, selector ) {
		var tmp, events, t, handleObjIn,
			special, eventHandle, handleObj,
			handlers, type, namespaces, origType,
			elemData = jQuery._data( elem );

		// Don't attach events to noData or text/comment nodes (but allow plain objects)
		if ( !elemData ) {
			return;
		}

		// Caller can pass in an object of custom data in lieu of the handler
		if ( handler.handler ) {
			handleObjIn = handler;
			handler = handleObjIn.handler;
			selector = handleObjIn.selector;
		}

		// Make sure that the handler has a unique ID, used to find/remove it later
		if ( !handler.guid ) {
			handler.guid = jQuery.guid++;
		}

		// Init the element's event structure and main handler, if this is the first
		if ( !(events = elemData.events) ) {
			events = elemData.events = {};
		}
		if ( !(eventHandle = elemData.handle) ) {
			eventHandle = elemData.handle = function( e ) {
				// Discard the second event of a jQuery.event.trigger() and
				// when an event is called after a page has unloaded
				return typeof jQuery !== core_strundefined && (!e || jQuery.event.triggered !== e.type) ?
					jQuery.event.dispatch.apply( eventHandle.elem, arguments ) :
					undefined;
			};
			// Add elem as a property of the handle fn to prevent a memory leak with IE non-native events
			eventHandle.elem = elem;
		}

		// Handle multiple events separated by a space
		// jQuery(...).bind("mouseover mouseout", fn);
		types = ( types || "" ).match( core_rnotwhite ) || [""];
		t = types.length;
		while ( t-- ) {
			tmp = rtypenamespace.exec( types[t] ) || [];
			type = origType = tmp[1];
			namespaces = ( tmp[2] || "" ).split( "." ).sort();

			// If event changes its type, use the special event handlers for the changed type
			special = jQuery.event.special[ type ] || {};

			// If selector defined, determine special event api type, otherwise given type
			type = ( selector ? special.delegateType : special.bindType ) || type;

			// Update special based on newly reset type
			special = jQuery.event.special[ type ] || {};

			// handleObj is passed to all event handlers
			handleObj = jQuery.extend({
				type: type,
				origType: origType,
				data: data,
				handler: handler,
				guid: handler.guid,
				selector: selector,
				needsContext: selector && jQuery.expr.match.needsContext.test( selector ),
				namespace: namespaces.join(".")
			}, handleObjIn );

			// Init the event handler queue if we're the first
			if ( !(handlers = events[ type ]) ) {
				handlers = events[ type ] = [];
				handlers.delegateCount = 0;

				// Only use addEventListener/attachEvent if the special events handler returns false
				if ( !special.setup || special.setup.call( elem, data, namespaces, eventHandle ) === false ) {
					// Bind the global event handler to the element
					if ( elem.addEventListener ) {
						elem.addEventListener( type, eventHandle, false );

					} else if ( elem.attachEvent ) {
						elem.attachEvent( "on" + type, eventHandle );
					}
				}
			}

			if ( special.add ) {
				special.add.call( elem, handleObj );

				if ( !handleObj.handler.guid ) {
					handleObj.handler.guid = handler.guid;
				}
			}

			// Add to the element's handler list, delegates in front
			if ( selector ) {
				handlers.splice( handlers.delegateCount++, 0, handleObj );
			} else {
				handlers.push( handleObj );
			}

			// Keep track of which events have ever been used, for event optimization
			jQuery.event.global[ type ] = true;
		}

		// Nullify elem to prevent memory leaks in IE
		elem = null;
	},

	// Detach an event or set of events from an element
	remove: function( elem, types, handler, selector, mappedTypes ) {
		var j, handleObj, tmp,
			origCount, t, events,
			special, handlers, type,
			namespaces, origType,
			elemData = jQuery.hasData( elem ) && jQuery._data( elem );

		if ( !elemData || !(events = elemData.events) ) {
			return;
		}

		// Once for each type.namespace in types; type may be omitted
		types = ( types || "" ).match( core_rnotwhite ) || [""];
		t = types.length;
		while ( t-- ) {
			tmp = rtypenamespace.exec( types[t] ) || [];
			type = origType = tmp[1];
			namespaces = ( tmp[2] || "" ).split( "." ).sort();

			// Unbind all events (on this namespace, if provided) for the element
			if ( !type ) {
				for ( type in events ) {
					jQuery.event.remove( elem, type + types[ t ], handler, selector, true );
				}
				continue;
			}

			special = jQuery.event.special[ type ] || {};
			type = ( selector ? special.delegateType : special.bindType ) || type;
			handlers = events[ type ] || [];
			tmp = tmp[2] && new RegExp( "(^|\\.)" + namespaces.join("\\.(?:.*\\.|)") + "(\\.|$)" );

			// Remove matching events
			origCount = j = handlers.length;
			while ( j-- ) {
				handleObj = handlers[ j ];

				if ( ( mappedTypes || origType === handleObj.origType ) &&
					( !handler || handler.guid === handleObj.guid ) &&
					( !tmp || tmp.test( handleObj.namespace ) ) &&
					( !selector || selector === handleObj.selector || selector === "**" && handleObj.selector ) ) {
					handlers.splice( j, 1 );

					if ( handleObj.selector ) {
						handlers.delegateCount--;
					}
					if ( special.remove ) {
						special.remove.call( elem, handleObj );
					}
				}
			}

			// Remove generic event handler if we removed something and no more handlers exist
			// (avoids potential for endless recursion during removal of special event handlers)
			if ( origCount && !handlers.length ) {
				if ( !special.teardown || special.teardown.call( elem, namespaces, elemData.handle ) === false ) {
					jQuery.removeEvent( elem, type, elemData.handle );
				}

				delete events[ type ];
			}
		}

		// Remove the expando if it's no longer used
		if ( jQuery.isEmptyObject( events ) ) {
			delete elemData.handle;

			// removeData also checks for emptiness and clears the expando if empty
			// so use it instead of delete
			jQuery._removeData( elem, "events" );
		}
	},

	trigger: function( event, data, elem, onlyHandlers ) {
		var handle, ontype, cur,
			bubbleType, special, tmp, i,
			eventPath = [ elem || document ],
			type = core_hasOwn.call( event, "type" ) ? event.type : event,
			namespaces = core_hasOwn.call( event, "namespace" ) ? event.namespace.split(".") : [];

		cur = tmp = elem = elem || document;

		// Don't do events on text and comment nodes
		if ( elem.nodeType === 3 || elem.nodeType === 8 ) {
			return;
		}

		// focus/blur morphs to focusin/out; ensure we're not firing them right now
		if ( rfocusMorph.test( type + jQuery.event.triggered ) ) {
			return;
		}

		if ( type.indexOf(".") >= 0 ) {
			// Namespaced trigger; create a regexp to match event type in handle()
			namespaces = type.split(".");
			type = namespaces.shift();
			namespaces.sort();
		}
		ontype = type.indexOf(":") < 0 && "on" + type;

		// Caller can pass in a jQuery.Event object, Object, or just an event type string
		event = event[ jQuery.expando ] ?
			event :
			new jQuery.Event( type, typeof event === "object" && event );

		event.isTrigger = true;
		event.namespace = namespaces.join(".");
		event.namespace_re = event.namespace ?
			new RegExp( "(^|\\.)" + namespaces.join("\\.(?:.*\\.|)") + "(\\.|$)" ) :
			null;

		// Clean up the event in case it is being reused
		event.result = undefined;
		if ( !event.target ) {
			event.target = elem;
		}

		// Clone any incoming data and prepend the event, creating the handler arg list
		data = data == null ?
			[ event ] :
			jQuery.makeArray( data, [ event ] );

		// Allow special events to draw outside the lines
		special = jQuery.event.special[ type ] || {};
		if ( !onlyHandlers && special.trigger && special.trigger.apply( elem, data ) === false ) {
			return;
		}

		// Determine event propagation path in advance, per W3C events spec (#9951)
		// Bubble up to document, then to window; watch for a global ownerDocument var (#9724)
		if ( !onlyHandlers && !special.noBubble && !jQuery.isWindow( elem ) ) {

			bubbleType = special.delegateType || type;
			if ( !rfocusMorph.test( bubbleType + type ) ) {
				cur = cur.parentNode;
			}
			for ( ; cur; cur = cur.parentNode ) {
				eventPath.push( cur );
				tmp = cur;
			}

			// Only add window if we got to document (e.g., not plain obj or detached DOM)
			if ( tmp === (elem.ownerDocument || document) ) {
				eventPath.push( tmp.defaultView || tmp.parentWindow || window );
			}
		}

		// Fire handlers on the event path
		i = 0;
		while ( (cur = eventPath[i++]) && !event.isPropagationStopped() ) {

			event.type = i > 1 ?
				bubbleType :
				special.bindType || type;

			// jQuery handler
			handle = ( jQuery._data( cur, "events" ) || {} )[ event.type ] && jQuery._data( cur, "handle" );
			if ( handle ) {
				handle.apply( cur, data );
			}

			// Native handler
			handle = ontype && cur[ ontype ];
			if ( handle && jQuery.acceptData( cur ) && handle.apply && handle.apply( cur, data ) === false ) {
				event.preventDefault();
			}
		}
		event.type = type;

		// If nobody prevented the default action, do it now
		if ( !onlyHandlers && !event.isDefaultPrevented() ) {

			if ( (!special._default || special._default.apply( elem.ownerDocument, data ) === false) &&
				!(type === "click" && jQuery.nodeName( elem, "a" )) && jQuery.acceptData( elem ) ) {

				// Call a native DOM method on the target with the same name name as the event.
				// Can't use an .isFunction() check here because IE6/7 fails that test.
				// Don't do default actions on window, that's where global variables be (#6170)
				if ( ontype && elem[ type ] && !jQuery.isWindow( elem ) ) {

					// Don't re-trigger an onFOO event when we call its FOO() method
					tmp = elem[ ontype ];

					if ( tmp ) {
						elem[ ontype ] = null;
					}

					// Prevent re-triggering of the same event, since we already bubbled it above
					jQuery.event.triggered = type;
					try {
						elem[ type ]();
					} catch ( e ) {
						// IE<9 dies on focus/blur to hidden element (#1486,#12518)
						// only reproducible on winXP IE8 native, not IE9 in IE8 mode
					}
					jQuery.event.triggered = undefined;

					if ( tmp ) {
						elem[ ontype ] = tmp;
					}
				}
			}
		}

		return event.result;
	},

	dispatch: function( event ) {

		// Make a writable jQuery.Event from the native event object
		event = jQuery.event.fix( event );

		var i, ret, handleObj, matched, j,
			handlerQueue = [],
			args = core_slice.call( arguments ),
			handlers = ( jQuery._data( this, "events" ) || {} )[ event.type ] || [],
			special = jQuery.event.special[ event.type ] || {};

		// Use the fix-ed jQuery.Event rather than the (read-only) native event
		args[0] = event;
		event.delegateTarget = this;

		// Call the preDispatch hook for the mapped type, and let it bail if desired
		if ( special.preDispatch && special.preDispatch.call( this, event ) === false ) {
			return;
		}

		// Determine handlers
		handlerQueue = jQuery.event.handlers.call( this, event, handlers );

		// Run delegates first; they may want to stop propagation beneath us
		i = 0;
		while ( (matched = handlerQueue[ i++ ]) && !event.isPropagationStopped() ) {
			event.currentTarget = matched.elem;

			j = 0;
			while ( (handleObj = matched.handlers[ j++ ]) && !event.isImmediatePropagationStopped() ) {

				// Triggered event must either 1) have no namespace, or
				// 2) have namespace(s) a subset or equal to those in the bound event (both can have no namespace).
				if ( !event.namespace_re || event.namespace_re.test( handleObj.namespace ) ) {

					event.handleObj = handleObj;
					event.data = handleObj.data;

					ret = ( (jQuery.event.special[ handleObj.origType ] || {}).handle || handleObj.handler )
							.apply( matched.elem, args );

					if ( ret !== undefined ) {
						if ( (event.result = ret) === false ) {
							event.preventDefault();
							event.stopPropagation();
						}
					}
				}
			}
		}

		// Call the postDispatch hook for the mapped type
		if ( special.postDispatch ) {
			special.postDispatch.call( this, event );
		}

		return event.result;
	},

	handlers: function( event, handlers ) {
		var sel, handleObj, matches, i,
			handlerQueue = [],
			delegateCount = handlers.delegateCount,
			cur = event.target;

		// Find delegate handlers
		// Black-hole SVG <use> instance trees (#13180)
		// Avoid non-left-click bubbling in Firefox (#3861)
		if ( delegateCount && cur.nodeType && (!event.button || event.type !== "click") ) {

			for ( ; cur != this; cur = cur.parentNode || this ) {

				// Don't check non-elements (#13208)
				// Don't process clicks on disabled elements (#6911, #8165, #11382, #11764)
				if ( cur.nodeType === 1 && (cur.disabled !== true || event.type !== "click") ) {
					matches = [];
					for ( i = 0; i < delegateCount; i++ ) {
						handleObj = handlers[ i ];

						// Don't conflict with Object.prototype properties (#13203)
						sel = handleObj.selector + " ";

						if ( matches[ sel ] === undefined ) {
							matches[ sel ] = handleObj.needsContext ?
								jQuery( sel, this ).index( cur ) >= 0 :
								jQuery.find( sel, this, null, [ cur ] ).length;
						}
						if ( matches[ sel ] ) {
							matches.push( handleObj );
						}
					}
					if ( matches.length ) {
						handlerQueue.push({ elem: cur, handlers: matches });
					}
				}
			}
		}

		// Add the remaining (directly-bound) handlers
		if ( delegateCount < handlers.length ) {
			handlerQueue.push({ elem: this, handlers: handlers.slice( delegateCount ) });
		}

		return handlerQueue;
	},

	fix: function( event ) {
		if ( event[ jQuery.expando ] ) {
			return event;
		}

		// Create a writable copy of the event object and normalize some properties
		var i, prop, copy,
			type = event.type,
			originalEvent = event,
			fixHook = this.fixHooks[ type ];

		if ( !fixHook ) {
			this.fixHooks[ type ] = fixHook =
				rmouseEvent.test( type ) ? this.mouseHooks :
				rkeyEvent.test( type ) ? this.keyHooks :
				{};
		}
		copy = fixHook.props ? this.props.concat( fixHook.props ) : this.props;

		event = new jQuery.Event( originalEvent );

		i = copy.length;
		while ( i-- ) {
			prop = copy[ i ];
			event[ prop ] = originalEvent[ prop ];
		}

		// Support: IE<9
		// Fix target property (#1925)
		if ( !event.target ) {
			event.target = originalEvent.srcElement || document;
		}

		// Support: Chrome 23+, Safari?
		// Target should not be a text node (#504, #13143)
		if ( event.target.nodeType === 3 ) {
			event.target = event.target.parentNode;
		}

		// Support: IE<9
		// For mouse/key events, metaKey==false if it's undefined (#3368, #11328)
		event.metaKey = !!event.metaKey;

		return fixHook.filter ? fixHook.filter( event, originalEvent ) : event;
	},

	// Includes some event props shared by KeyEvent and MouseEvent
	props: "altKey bubbles cancelable ctrlKey currentTarget eventPhase metaKey relatedTarget shiftKey target timeStamp view which".split(" "),

	fixHooks: {},

	keyHooks: {
		props: "char charCode key keyCode".split(" "),
		filter: function( event, original ) {

			// Add which for key events
			if ( event.which == null ) {
				event.which = original.charCode != null ? original.charCode : original.keyCode;
			}

			return event;
		}
	},

	mouseHooks: {
		props: "button buttons clientX clientY fromElement offsetX offsetY pageX pageY screenX screenY toElement".split(" "),
		filter: function( event, original ) {
			var body, eventDoc, doc,
				button = original.button,
				fromElement = original.fromElement;

			// Calculate pageX/Y if missing and clientX/Y available
			if ( event.pageX == null && original.clientX != null ) {
				eventDoc = event.target.ownerDocument || document;
				doc = eventDoc.documentElement;
				body = eventDoc.body;

				event.pageX = original.clientX + ( doc && doc.scrollLeft || body && body.scrollLeft || 0 ) - ( doc && doc.clientLeft || body && body.clientLeft || 0 );
				event.pageY = original.clientY + ( doc && doc.scrollTop  || body && body.scrollTop  || 0 ) - ( doc && doc.clientTop  || body && body.clientTop  || 0 );
			}

			// Add relatedTarget, if necessary
			if ( !event.relatedTarget && fromElement ) {
				event.relatedTarget = fromElement === event.target ? original.toElement : fromElement;
			}

			// Add which for click: 1 === left; 2 === middle; 3 === right
			// Note: button is not normalized, so don't use it
			if ( !event.which && button !== undefined ) {
				event.which = ( button & 1 ? 1 : ( button & 2 ? 3 : ( button & 4 ? 2 : 0 ) ) );
			}

			return event;
		}
	},

	special: {
		load: {
			// Prevent triggered image.load events from bubbling to window.load
			noBubble: true
		},
		click: {
			// For checkbox, fire native event so checked state will be right
			trigger: function() {
				if ( jQuery.nodeName( this, "input" ) && this.type === "checkbox" && this.click ) {
					this.click();
					return false;
				}
			}
		},
		focus: {
			// Fire native event if possible so blur/focus sequence is correct
			trigger: function() {
				if ( this !== document.activeElement && this.focus ) {
					try {
						this.focus();
						return false;
					} catch ( e ) {
						// Support: IE<9
						// If we error on focus to hidden element (#1486, #12518),
						// let .trigger() run the handlers
					}
				}
			},
			delegateType: "focusin"
		},
		blur: {
			trigger: function() {
				if ( this === document.activeElement && this.blur ) {
					this.blur();
					return false;
				}
			},
			delegateType: "focusout"
		},

		beforeunload: {
			postDispatch: function( event ) {

				// Even when returnValue equals to undefined Firefox will still show alert
				if ( event.result !== undefined ) {
					event.originalEvent.returnValue = event.result;
				}
			}
		}
	},

	simulate: function( type, elem, event, bubble ) {
		// Piggyback on a donor event to simulate a different one.
		// Fake originalEvent to avoid donor's stopPropagation, but if the
		// simulated event prevents default then we do the same on the donor.
		var e = jQuery.extend(
			new jQuery.Event(),
			event,
			{ type: type,
				isSimulated: true,
				originalEvent: {}
			}
		);
		if ( bubble ) {
			jQuery.event.trigger( e, null, elem );
		} else {
			jQuery.event.dispatch.call( elem, e );
		}
		if ( e.isDefaultPrevented() ) {
			event.preventDefault();
		}
	}
};

jQuery.removeEvent = document.removeEventListener ?
	function( elem, type, handle ) {
		if ( elem.removeEventListener ) {
			elem.removeEventListener( type, handle, false );
		}
	} :
	function( elem, type, handle ) {
		var name = "on" + type;

		if ( elem.detachEvent ) {

			// #8545, #7054, preventing memory leaks for custom events in IE6-8
			// detachEvent needed property on element, by name of that event, to properly expose it to GC
			if ( typeof elem[ name ] === core_strundefined ) {
				elem[ name ] = null;
			}

			elem.detachEvent( name, handle );
		}
	};

jQuery.Event = function( src, props ) {
	// Allow instantiation without the 'new' keyword
	if ( !(this instanceof jQuery.Event) ) {
		return new jQuery.Event( src, props );
	}

	// Event object
	if ( src && src.type ) {
		this.originalEvent = src;
		this.type = src.type;

		// Events bubbling up the document may have been marked as prevented
		// by a handler lower down the tree; reflect the correct value.
		this.isDefaultPrevented = ( src.defaultPrevented || src.returnValue === false ||
			src.getPreventDefault && src.getPreventDefault() ) ? returnTrue : returnFalse;

	// Event type
	} else {
		this.type = src;
	}

	// Put explicitly provided properties onto the event object
	if ( props ) {
		jQuery.extend( this, props );
	}

	// Create a timestamp if incoming event doesn't have one
	this.timeStamp = src && src.timeStamp || jQuery.now();

	// Mark it as fixed
	this[ jQuery.expando ] = true;
};

// jQuery.Event is based on DOM3 Events as specified by the ECMAScript Language Binding
// http://www.w3.org/TR/2003/WD-DOM-Level-3-Events-20030331/ecma-script-binding.html
jQuery.Event.prototype = {
	isDefaultPrevented: returnFalse,
	isPropagationStopped: returnFalse,
	isImmediatePropagationStopped: returnFalse,

	preventDefault: function() {
		var e = this.originalEvent;

		this.isDefaultPrevented = returnTrue;
		if ( !e ) {
			return;
		}

		// If preventDefault exists, run it on the original event
		if ( e.preventDefault ) {
			e.preventDefault();

		// Support: IE
		// Otherwise set the returnValue property of the original event to false
		} else {
			e.returnValue = false;
		}
	},
	stopPropagation: function() {
		var e = this.originalEvent;

		this.isPropagationStopped = returnTrue;
		if ( !e ) {
			return;
		}
		// If stopPropagation exists, run it on the original event
		if ( e.stopPropagation ) {
			e.stopPropagation();
		}

		// Support: IE
		// Set the cancelBubble property of the original event to true
		e.cancelBubble = true;
	},
	stopImmediatePropagation: function() {
		this.isImmediatePropagationStopped = returnTrue;
		this.stopPropagation();
	}
};

// Create mouseenter/leave events using mouseover/out and event-time checks
jQuery.each({
	mouseenter: "mouseover",
	mouseleave: "mouseout"
}, function( orig, fix ) {
	jQuery.event.special[ orig ] = {
		delegateType: fix,
		bindType: fix,

		handle: function( event ) {
			var ret,
				target = this,
				related = event.relatedTarget,
				handleObj = event.handleObj;

			// For mousenter/leave call the handler if related is outside the target.
			// NB: No relatedTarget if the mouse left/entered the browser window
			if ( !related || (related !== target && !jQuery.contains( target, related )) ) {
				event.type = handleObj.origType;
				ret = handleObj.handler.apply( this, arguments );
				event.type = fix;
			}
			return ret;
		}
	};
});

// IE submit delegation
if ( !jQuery.support.submitBubbles ) {

	jQuery.event.special.submit = {
		setup: function() {
			// Only need this for delegated form submit events
			if ( jQuery.nodeName( this, "form" ) ) {
				return false;
			}

			// Lazy-add a submit handler when a descendant form may potentially be submitted
			jQuery.event.add( this, "click._submit keypress._submit", function( e ) {
				// Node name check avoids a VML-related crash in IE (#9807)
				var elem = e.target,
					form = jQuery.nodeName( elem, "input" ) || jQuery.nodeName( elem, "button" ) ? elem.form : undefined;
				if ( form && !jQuery._data( form, "submitBubbles" ) ) {
					jQuery.event.add( form, "submit._submit", function( event ) {
						event._submit_bubble = true;
					});
					jQuery._data( form, "submitBubbles", true );
				}
			});
			// return undefined since we don't need an event listener
		},

		postDispatch: function( event ) {
			// If form was submitted by the user, bubble the event up the tree
			if ( event._submit_bubble ) {
				delete event._submit_bubble;
				if ( this.parentNode && !event.isTrigger ) {
					jQuery.event.simulate( "submit", this.parentNode, event, true );
				}
			}
		},

		teardown: function() {
			// Only need this for delegated form submit events
			if ( jQuery.nodeName( this, "form" ) ) {
				return false;
			}

			// Remove delegated handlers; cleanData eventually reaps submit handlers attached above
			jQuery.event.remove( this, "._submit" );
		}
	};
}

// IE change delegation and checkbox/radio fix
if ( !jQuery.support.changeBubbles ) {

	jQuery.event.special.change = {

		setup: function() {

			if ( rformElems.test( this.nodeName ) ) {
				// IE doesn't fire change on a check/radio until blur; trigger it on click
				// after a propertychange. Eat the blur-change in special.change.handle.
				// This still fires onchange a second time for check/radio after blur.
				if ( this.type === "checkbox" || this.type === "radio" ) {
					jQuery.event.add( this, "propertychange._change", function( event ) {
						if ( event.originalEvent.propertyName === "checked" ) {
							this._just_changed = true;
						}
					});
					jQuery.event.add( this, "click._change", function( event ) {
						if ( this._just_changed && !event.isTrigger ) {
							this._just_changed = false;
						}
						// Allow triggered, simulated change events (#11500)
						jQuery.event.simulate( "change", this, event, true );
					});
				}
				return false;
			}
			// Delegated event; lazy-add a change handler on descendant inputs
			jQuery.event.add( this, "beforeactivate._change", function( e ) {
				var elem = e.target;

				if ( rformElems.test( elem.nodeName ) && !jQuery._data( elem, "changeBubbles" ) ) {
					jQuery.event.add( elem, "change._change", function( event ) {
						if ( this.parentNode && !event.isSimulated && !event.isTrigger ) {
							jQuery.event.simulate( "change", this.parentNode, event, true );
						}
					});
					jQuery._data( elem, "changeBubbles", true );
				}
			});
		},

		handle: function( event ) {
			var elem = event.target;

			// Swallow native change events from checkbox/radio, we already triggered them above
			if ( this !== elem || event.isSimulated || event.isTrigger || (elem.type !== "radio" && elem.type !== "checkbox") ) {
				return event.handleObj.handler.apply( this, arguments );
			}
		},

		teardown: function() {
			jQuery.event.remove( this, "._change" );

			return !rformElems.test( this.nodeName );
		}
	};
}

// Create "bubbling" focus and blur events
if ( !jQuery.support.focusinBubbles ) {
	jQuery.each({ focus: "focusin", blur: "focusout" }, function( orig, fix ) {

		// Attach a single capturing handler while someone wants focusin/focusout
		var attaches = 0,
			handler = function( event ) {
				jQuery.event.simulate( fix, event.target, jQuery.event.fix( event ), true );
			};

		jQuery.event.special[ fix ] = {
			setup: function() {
				if ( attaches++ === 0 ) {
					document.addEventListener( orig, handler, true );
				}
			},
			teardown: function() {
				if ( --attaches === 0 ) {
					document.removeEventListener( orig, handler, true );
				}
			}
		};
	});
}

jQuery.fn.extend({

	on: function( types, selector, data, fn, /*INTERNAL*/ one ) {
		var type, origFn;

		// Types can be a map of types/handlers
		if ( typeof types === "object" ) {
			// ( types-Object, selector, data )
			if ( typeof selector !== "string" ) {
				// ( types-Object, data )
				data = data || selector;
				selector = undefined;
			}
			for ( type in types ) {
				this.on( type, selector, data, types[ type ], one );
			}
			return this;
		}

		if ( data == null && fn == null ) {
			// ( types, fn )
			fn = selector;
			data = selector = undefined;
		} else if ( fn == null ) {
			if ( typeof selector === "string" ) {
				// ( types, selector, fn )
				fn = data;
				data = undefined;
			} else {
				// ( types, data, fn )
				fn = data;
				data = selector;
				selector = undefined;
			}
		}
		if ( fn === false ) {
			fn = returnFalse;
		} else if ( !fn ) {
			return this;
		}

		if ( one === 1 ) {
			origFn = fn;
			fn = function( event ) {
				// Can use an empty set, since event contains the info
				jQuery().off( event );
				return origFn.apply( this, arguments );
			};
			// Use same guid so caller can remove using origFn
			fn.guid = origFn.guid || ( origFn.guid = jQuery.guid++ );
		}
		return this.each( function() {
			jQuery.event.add( this, types, fn, data, selector );
		});
	},
	one: function( types, selector, data, fn ) {
		return this.on( types, selector, data, fn, 1 );
	},
	off: function( types, selector, fn ) {
		var handleObj, type;
		if ( types && types.preventDefault && types.handleObj ) {
			// ( event )  dispatched jQuery.Event
			handleObj = types.handleObj;
			jQuery( types.delegateTarget ).off(
				handleObj.namespace ? handleObj.origType + "." + handleObj.namespace : handleObj.origType,
				handleObj.selector,
				handleObj.handler
			);
			return this;
		}
		if ( typeof types === "object" ) {
			// ( types-object [, selector] )
			for ( type in types ) {
				this.off( type, selector, types[ type ] );
			}
			return this;
		}
		if ( selector === false || typeof selector === "function" ) {
			// ( types [, fn] )
			fn = selector;
			selector = undefined;
		}
		if ( fn === false ) {
			fn = returnFalse;
		}
		return this.each(function() {
			jQuery.event.remove( this, types, fn, selector );
		});
	},

	bind: function( types, data, fn ) {
		return this.on( types, null, data, fn );
	},
	unbind: function( types, fn ) {
		return this.off( types, null, fn );
	},

	delegate: function( selector, types, data, fn ) {
		return this.on( types, selector, data, fn );
	},
	undelegate: function( selector, types, fn ) {
		// ( namespace ) or ( selector, types [, fn] )
		return arguments.length === 1 ? this.off( selector, "**" ) : this.off( types, selector || "**", fn );
	},

	trigger: function( type, data ) {
		return this.each(function() {
			jQuery.event.trigger( type, data, this );
		});
	},
	triggerHandler: function( type, data ) {
		var elem = this[0];
		if ( elem ) {
			return jQuery.event.trigger( type, data, elem, true );
		}
	}
});
/*!
 * Sizzle CSS Selector Engine
 * Copyright 2012 jQuery Foundation and other contributors
 * Released under the MIT license
 * http://sizzlejs.com/
 */
(function( window, undefined ) {

var i,
	cachedruns,
	Expr,
	getText,
	isXML,
	compile,
	hasDuplicate,
	outermostContext,

	// Local document vars
	setDocument,
	document,
	docElem,
	documentIsXML,
	rbuggyQSA,
	rbuggyMatches,
	matches,
	contains,
	sortOrder,

	// Instance-specific data
	expando = "sizzle" + -(new Date()),
	preferredDoc = window.document,
	support = {},
	dirruns = 0,
	done = 0,
	classCache = createCache(),
	tokenCache = createCache(),
	compilerCache = createCache(),

	// General-purpose constants
	strundefined = typeof undefined,
	MAX_NEGATIVE = 1 << 31,

	// Array methods
	arr = [],
	pop = arr.pop,
	push = arr.push,
	slice = arr.slice,
	// Use a stripped-down indexOf if we can't use a native one
	indexOf = arr.indexOf || function( elem ) {
		var i = 0,
			len = this.length;
		for ( ; i < len; i++ ) {
			if ( this[i] === elem ) {
				return i;
			}
		}
		return -1;
	},


	// Regular expressions

	// Whitespace characters http://www.w3.org/TR/css3-selectors/#whitespace
	whitespace = "[\\x20\\t\\r\\n\\f]",
	// http://www.w3.org/TR/css3-syntax/#characters
	characterEncoding = "(?:\\\\.|[\\w-]|[^\\x00-\\xa0])+",

	// Loosely modeled on CSS identifier characters
	// An unquoted value should be a CSS identifier http://www.w3.org/TR/css3-selectors/#attribute-selectors
	// Proper syntax: http://www.w3.org/TR/CSS21/syndata.html#value-def-identifier
	identifier = characterEncoding.replace( "w", "w#" ),

	// Acceptable operators http://www.w3.org/TR/selectors/#attribute-selectors
	operators = "([*^$|!~]?=)",
	attributes = "\\[" + whitespace + "*(" + characterEncoding + ")" + whitespace +
		"*(?:" + operators + whitespace + "*(?:(['\"])((?:\\\\.|[^\\\\])*?)\\3|(" + identifier + ")|)|)" + whitespace + "*\\]",

	// Prefer arguments quoted,
	//   then not containing pseudos/brackets,
	//   then attribute selectors/non-parenthetical expressions,
	//   then anything else
	// These preferences are here to reduce the number of selectors
	//   needing tokenize in the PSEUDO preFilter
	pseudos = ":(" + characterEncoding + ")(?:\\(((['\"])((?:\\\\.|[^\\\\])*?)\\3|((?:\\\\.|[^\\\\()[\\]]|" + attributes.replace( 3, 8 ) + ")*)|.*)\\)|)",

	// Leading and non-escaped trailing whitespace, capturing some non-whitespace characters preceding the latter
	rtrim = new RegExp( "^" + whitespace + "+|((?:^|[^\\\\])(?:\\\\.)*)" + whitespace + "+$", "g" ),

	rcomma = new RegExp( "^" + whitespace + "*," + whitespace + "*" ),
	rcombinators = new RegExp( "^" + whitespace + "*([\\x20\\t\\r\\n\\f>+~])" + whitespace + "*" ),
	rpseudo = new RegExp( pseudos ),
	ridentifier = new RegExp( "^" + identifier + "$" ),

	matchExpr = {
		"ID": new RegExp( "^#(" + characterEncoding + ")" ),
		"CLASS": new RegExp( "^\\.(" + characterEncoding + ")" ),
		"NAME": new RegExp( "^\\[name=['\"]?(" + characterEncoding + ")['\"]?\\]" ),
		"TAG": new RegExp( "^(" + characterEncoding.replace( "w", "w*" ) + ")" ),
		"ATTR": new RegExp( "^" + attributes ),
		"PSEUDO": new RegExp( "^" + pseudos ),
		"CHILD": new RegExp( "^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\(" + whitespace +
			"*(even|odd|(([+-]|)(\\d*)n|)" + whitespace + "*(?:([+-]|)" + whitespace +
			"*(\\d+)|))" + whitespace + "*\\)|)", "i" ),
		// For use in libraries implementing .is()
		// We use this for POS matching in `select`
		"needsContext": new RegExp( "^" + whitespace + "*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\(" +
			whitespace + "*((?:-\\d)?\\d*)" + whitespace + "*\\)|)(?=[^-]|$)", "i" )
	},

	rsibling = /[\x20\t\r\n\f]*[+~]/,

	rnative = /^[^{]+\{\s*\[native code/,

	// Easily-parseable/retrievable ID or TAG or CLASS selectors
	rquickExpr = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,

	rinputs = /^(?:input|select|textarea|button)$/i,
	rheader = /^h\d$/i,

	rescape = /'|\\/g,
	rattributeQuotes = /\=[\x20\t\r\n\f]*([^'"\]]*)[\x20\t\r\n\f]*\]/g,

	// CSS escapes http://www.w3.org/TR/CSS21/syndata.html#escaped-characters
	runescape = /\\([\da-fA-F]{1,6}[\x20\t\r\n\f]?|.)/g,
	funescape = function( _, escaped ) {
		var high = "0x" + escaped - 0x10000;
		// NaN means non-codepoint
		return high !== high ?
			escaped :
			// BMP codepoint
			high < 0 ?
				String.fromCharCode( high + 0x10000 ) :
				// Supplemental Plane codepoint (surrogate pair)
				String.fromCharCode( high >> 10 | 0xD800, high & 0x3FF | 0xDC00 );
	};

// Use a stripped-down slice if we can't use a native one
try {
	slice.call( preferredDoc.documentElement.childNodes, 0 )[0].nodeType;
} catch ( e ) {
	slice = function( i ) {
		var elem,
			results = [];
		while ( (elem = this[i++]) ) {
			results.push( elem );
		}
		return results;
	};
}

/**
 * For feature detection
 * @param {Function} fn The function to test for native support
 */
function isNative( fn ) {
	return rnative.test( fn + "" );
}

/**
 * Create key-value caches of limited size
 * @returns {Function(string, Object)} Returns the Object data after storing it on itself with
 *	property name the (space-suffixed) string and (if the cache is larger than Expr.cacheLength)
 *	deleting the oldest entry
 */
function createCache() {
	var cache,
		keys = [];

	return (cache = function( key, value ) {
		// Use (key + " ") to avoid collision with native prototype properties (see Issue #157)
		if ( keys.push( key += " " ) > Expr.cacheLength ) {
			// Only keep the most recent entries
			delete cache[ keys.shift() ];
		}
		return (cache[ key ] = value);
	});
}

/**
 * Mark a function for special use by Sizzle
 * @param {Function} fn The function to mark
 */
function markFunction( fn ) {
	fn[ expando ] = true;
	return fn;
}

/**
 * Support testing using an element
 * @param {Function} fn Passed the created div and expects a boolean result
 */
function assert( fn ) {
	var div = document.createElement("div");

	try {
		return fn( div );
	} catch (e) {
		return false;
	} finally {
		// release memory in IE
		div = null;
	}
}

function Sizzle( selector, context, results, seed ) {
	var match, elem, m, nodeType,
		// QSA vars
		i, groups, old, nid, newContext, newSelector;

	if ( ( context ? context.ownerDocument || context : preferredDoc ) !== document ) {
		setDocument( context );
	}

	context = context || document;
	results = results || [];

	if ( !selector || typeof selector !== "string" ) {
		return results;
	}

	if ( (nodeType = context.nodeType) !== 1 && nodeType !== 9 ) {
		return [];
	}

	if ( !documentIsXML && !seed ) {

		// Shortcuts
		if ( (match = rquickExpr.exec( selector )) ) {
			// Speed-up: Sizzle("#ID")
			if ( (m = match[1]) ) {
				if ( nodeType === 9 ) {
					elem = context.getElementById( m );
					// Check parentNode to catch when Blackberry 4.6 returns
					// nodes that are no longer in the document #6963
					if ( elem && elem.parentNode ) {
						// Handle the case where IE, Opera, and Webkit return items
						// by name instead of ID
						if ( elem.id === m ) {
							results.push( elem );
							return results;
						}
					} else {
						return results;
					}
				} else {
					// Context is not a document
					if ( context.ownerDocument && (elem = context.ownerDocument.getElementById( m )) &&
						contains( context, elem ) && elem.id === m ) {
						results.push( elem );
						return results;
					}
				}

			// Speed-up: Sizzle("TAG")
			} else if ( match[2] ) {
				push.apply( results, slice.call(context.getElementsByTagName( selector ), 0) );
				return results;

			// Speed-up: Sizzle(".CLASS")
			} else if ( (m = match[3]) && support.getByClassName && context.getElementsByClassName ) {
				push.apply( results, slice.call(context.getElementsByClassName( m ), 0) );
				return results;
			}
		}

		// QSA path
		if ( support.qsa && !rbuggyQSA.test(selector) ) {
			old = true;
			nid = expando;
			newContext = context;
			newSelector = nodeType === 9 && selector;

			// qSA works strangely on Element-rooted queries
			// We can work around this by specifying an extra ID on the root
			// and working up from there (Thanks to Andrew Dupont for the technique)
			// IE 8 doesn't work on object elements
			if ( nodeType === 1 && context.nodeName.toLowerCase() !== "object" ) {
				groups = tokenize( selector );

				if ( (old = context.getAttribute("id")) ) {
					nid = old.replace( rescape, "\\$&" );
				} else {
					context.setAttribute( "id", nid );
				}
				nid = "[id='" + nid + "'] ";

				i = groups.length;
				while ( i-- ) {
					groups[i] = nid + toSelector( groups[i] );
				}
				newContext = rsibling.test( selector ) && context.parentNode || context;
				newSelector = groups.join(",");
			}

			if ( newSelector ) {
				try {
					push.apply( results, slice.call( newContext.querySelectorAll(
						newSelector
					), 0 ) );
					return results;
				} catch(qsaError) {
				} finally {
					if ( !old ) {
						context.removeAttribute("id");
					}
				}
			}
		}
	}

	// All others
	return select( selector.replace( rtrim, "$1" ), context, results, seed );
}

/**
 * Detect xml
 * @param {Element|Object} elem An element or a document
 */
isXML = Sizzle.isXML = function( elem ) {
	// documentElement is verified for cases where it doesn't yet exist
	// (such as loading iframes in IE - #4833)
	var documentElement = elem && (elem.ownerDocument || elem).documentElement;
	return documentElement ? documentElement.nodeName !== "HTML" : false;
};

/**
 * Sets document-related variables once based on the current document
 * @param {Element|Object} [doc] An element or document object to use to set the document
 * @returns {Object} Returns the current document
 */
setDocument = Sizzle.setDocument = function( node ) {
	var doc = node ? node.ownerDocument || node : preferredDoc;

	// If no document and documentElement is available, return
	if ( doc === document || doc.nodeType !== 9 || !doc.documentElement ) {
		return document;
	}

	// Set our document
	document = doc;
	docElem = doc.documentElement;

	// Support tests
	documentIsXML = isXML( doc );

	// Check if getElementsByTagName("*") returns only elements
	support.tagNameNoComments = assert(function( div ) {
		div.appendChild( doc.createComment("") );
		return !div.getElementsByTagName("*").length;
	});

	// Check if attributes should be retrieved by attribute nodes
	support.attributes = assert(function( div ) {
		div.innerHTML = "<select></select>";
		var type = typeof div.lastChild.getAttribute("multiple");
		// IE8 returns a string for some attributes even when not present
		return type !== "boolean" && type !== "string";
	});

	// Check if getElementsByClassName can be trusted
	support.getByClassName = assert(function( div ) {
		// Opera can't find a second classname (in 9.6)
		div.innerHTML = "<div class='hidden e'></div><div class='hidden'></div>";
		if ( !div.getElementsByClassName || !div.getElementsByClassName("e").length ) {
			return false;
		}

		// Safari 3.2 caches class attributes and doesn't catch changes
		div.lastChild.className = "e";
		return div.getElementsByClassName("e").length === 2;
	});

	// Check if getElementById returns elements by name
	// Check if getElementsByName privileges form controls or returns elements by ID
	support.getByName = assert(function( div ) {
		// Inject content
		div.id = expando + 0;
		div.innerHTML = "<a name='" + expando + "'></a><div name='" + expando + "'></div>";
		docElem.insertBefore( div, docElem.firstChild );

		// Test
		var pass = doc.getElementsByName &&
			// buggy browsers will return fewer than the correct 2
			doc.getElementsByName( expando ).length === 2 +
			// buggy browsers will return more than the correct 0
			doc.getElementsByName( expando + 0 ).length;
		support.getIdNotName = !doc.getElementById( expando );

		// Cleanup
		docElem.removeChild( div );

		return pass;
	});

	// IE6/7 return modified attributes
	Expr.attrHandle = assert(function( div ) {
		div.innerHTML = "<a href='#'></a>";
		return div.firstChild && typeof div.firstChild.getAttribute !== strundefined &&
			div.firstChild.getAttribute("href") === "#";
	}) ?
		{} :
		{
			"href": function( elem ) {
				return elem.getAttribute( "href", 2 );
			},
			"type": function( elem ) {
				return elem.getAttribute("type");
			}
		};

	// ID find and filter
	if ( support.getIdNotName ) {
		Expr.find["ID"] = function( id, context ) {
			if ( typeof context.getElementById !== strundefined && !documentIsXML ) {
				var m = context.getElementById( id );
				// Check parentNode to catch when Blackberry 4.6 returns
				// nodes that are no longer in the document #6963
				return m && m.parentNode ? [m] : [];
			}
		};
		Expr.filter["ID"] = function( id ) {
			var attrId = id.replace( runescape, funescape );
			return function( elem ) {
				return elem.getAttribute("id") === attrId;
			};
		};
	} else {
		Expr.find["ID"] = function( id, context ) {
			if ( typeof context.getElementById !== strundefined && !documentIsXML ) {
				var m = context.getElementById( id );

				return m ?
					m.id === id || typeof m.getAttributeNode !== strundefined && m.getAttributeNode("id").value === id ?
						[m] :
						undefined :
					[];
			}
		};
		Expr.filter["ID"] =  function( id ) {
			var attrId = id.replace( runescape, funescape );
			return function( elem ) {
				var node = typeof elem.getAttributeNode !== strundefined && elem.getAttributeNode("id");
				return node && node.value === attrId;
			};
		};
	}

	// Tag
	Expr.find["TAG"] = support.tagNameNoComments ?
		function( tag, context ) {
			if ( typeof context.getElementsByTagName !== strundefined ) {
				return context.getElementsByTagName( tag );
			}
		} :
		function( tag, context ) {
			var elem,
				tmp = [],
				i = 0,
				results = context.getElementsByTagName( tag );

			// Filter out possible comments
			if ( tag === "*" ) {
				while ( (elem = results[i++]) ) {
					if ( elem.nodeType === 1 ) {
						tmp.push( elem );
					}
				}

				return tmp;
			}
			return results;
		};

	// Name
	Expr.find["NAME"] = support.getByName && function( tag, context ) {
		if ( typeof context.getElementsByName !== strundefined ) {
			return context.getElementsByName( name );
		}
	};

	// Class
	Expr.find["CLASS"] = support.getByClassName && function( className, context ) {
		if ( typeof context.getElementsByClassName !== strundefined && !documentIsXML ) {
			return context.getElementsByClassName( className );
		}
	};

	// QSA and matchesSelector support

	// matchesSelector(:active) reports false when true (IE9/Opera 11.5)
	rbuggyMatches = [];

	// qSa(:focus) reports false when true (Chrome 21),
	// no need to also add to buggyMatches since matches checks buggyQSA
	// A support test would require too much code (would include document ready)
	rbuggyQSA = [ ":focus" ];

	if ( (support.qsa = isNative(doc.querySelectorAll)) ) {
		// Build QSA regex
		// Regex strategy adopted from Diego Perini
		assert(function( div ) {
			// Select is set to empty string on purpose
			// This is to test IE's treatment of not explictly
			// setting a boolean content attribute,
			// since its presence should be enough
			// http://bugs.jquery.com/ticket/12359
			div.innerHTML = "<select><option selected=''></option></select>";

			// IE8 - Some boolean attributes are not treated correctly
			if ( !div.querySelectorAll("[selected]").length ) {
				rbuggyQSA.push( "\\[" + whitespace + "*(?:checked|disabled|ismap|multiple|readonly|selected|value)" );
			}

			// Webkit/Opera - :checked should return selected option elements
			// http://www.w3.org/TR/2011/REC-css3-selectors-20110929/#checked
			// IE8 throws error here and will not see later tests
			if ( !div.querySelectorAll(":checked").length ) {
				rbuggyQSA.push(":checked");
			}
		});

		assert(function( div ) {

			// Opera 10-12/IE8 - ^= $= *= and empty values
			// Should not select anything
			div.innerHTML = "<input type='hidden' i=''/>";
			if ( div.querySelectorAll("[i^='']").length ) {
				rbuggyQSA.push( "[*^$]=" + whitespace + "*(?:\"\"|'')" );
			}

			// FF 3.5 - :enabled/:disabled and hidden elements (hidden elements are still enabled)
			// IE8 throws error here and will not see later tests
			if ( !div.querySelectorAll(":enabled").length ) {
				rbuggyQSA.push( ":enabled", ":disabled" );
			}

			// Opera 10-11 does not throw on post-comma invalid pseudos
			div.querySelectorAll("*,:x");
			rbuggyQSA.push(",.*:");
		});
	}

	if ( (support.matchesSelector = isNative( (matches = docElem.matchesSelector ||
		docElem.mozMatchesSelector ||
		docElem.webkitMatchesSelector ||
		docElem.oMatchesSelector ||
		docElem.msMatchesSelector) )) ) {

		assert(function( div ) {
			// Check to see if it's possible to do matchesSelector
			// on a disconnected node (IE 9)
			support.disconnectedMatch = matches.call( div, "div" );

			// This should fail with an exception
			// Gecko does not error, returns false instead
			matches.call( div, "[s!='']:x" );
			rbuggyMatches.push( "!=", pseudos );
		});
	}

	rbuggyQSA = new RegExp( rbuggyQSA.join("|") );
	rbuggyMatches = new RegExp( rbuggyMatches.join("|") );

	// Element contains another
	// Purposefully does not implement inclusive descendent
	// As in, an element does not contain itself
	contains = isNative(docElem.contains) || docElem.compareDocumentPosition ?
		function( a, b ) {
			var adown = a.nodeType === 9 ? a.documentElement : a,
				bup = b && b.parentNode;
			return a === bup || !!( bup && bup.nodeType === 1 && (
				adown.contains ?
					adown.contains( bup ) :
					a.compareDocumentPosition && a.compareDocumentPosition( bup ) & 16
			));
		} :
		function( a, b ) {
			if ( b ) {
				while ( (b = b.parentNode) ) {
					if ( b === a ) {
						return true;
					}
				}
			}
			return false;
		};

	// Document order sorting
	sortOrder = docElem.compareDocumentPosition ?
	function( a, b ) {
		var compare;

		if ( a === b ) {
			hasDuplicate = true;
			return 0;
		}

		if ( (compare = b.compareDocumentPosition && a.compareDocumentPosition && a.compareDocumentPosition( b )) ) {
			if ( compare & 1 || a.parentNode && a.parentNode.nodeType === 11 ) {
				if ( a === doc || contains( preferredDoc, a ) ) {
					return -1;
				}
				if ( b === doc || contains( preferredDoc, b ) ) {
					return 1;
				}
				return 0;
			}
			return compare & 4 ? -1 : 1;
		}

		return a.compareDocumentPosition ? -1 : 1;
	} :
	function( a, b ) {
		var cur,
			i = 0,
			aup = a.parentNode,
			bup = b.parentNode,
			ap = [ a ],
			bp = [ b ];

		// Exit early if the nodes are identical
		if ( a === b ) {
			hasDuplicate = true;
			return 0;

		// Parentless nodes are either documents or disconnected
		} else if ( !aup || !bup ) {
			return a === doc ? -1 :
				b === doc ? 1 :
				aup ? -1 :
				bup ? 1 :
				0;

		// If the nodes are siblings, we can do a quick check
		} else if ( aup === bup ) {
			return siblingCheck( a, b );
		}

		// Otherwise we need full lists of their ancestors for comparison
		cur = a;
		while ( (cur = cur.parentNode) ) {
			ap.unshift( cur );
		}
		cur = b;
		while ( (cur = cur.parentNode) ) {
			bp.unshift( cur );
		}

		// Walk down the tree looking for a discrepancy
		while ( ap[i] === bp[i] ) {
			i++;
		}

		return i ?
			// Do a sibling check if the nodes have a common ancestor
			siblingCheck( ap[i], bp[i] ) :

			// Otherwise nodes in our document sort first
			ap[i] === preferredDoc ? -1 :
			bp[i] === preferredDoc ? 1 :
			0;
	};

	// Always assume the presence of duplicates if sort doesn't
	// pass them to our comparison function (as in Google Chrome).
	hasDuplicate = false;
	[0, 0].sort( sortOrder );
	support.detectDuplicates = hasDuplicate;

	return document;
};

Sizzle.matches = function( expr, elements ) {
	return Sizzle( expr, null, null, elements );
};

Sizzle.matchesSelector = function( elem, expr ) {
	// Set document vars if needed
	if ( ( elem.ownerDocument || elem ) !== document ) {
		setDocument( elem );
	}

	// Make sure that attribute selectors are quoted
	expr = expr.replace( rattributeQuotes, "='$1']" );

	// rbuggyQSA always contains :focus, so no need for an existence check
	if ( support.matchesSelector && !documentIsXML && (!rbuggyMatches || !rbuggyMatches.test(expr)) && !rbuggyQSA.test(expr) ) {
		try {
			var ret = matches.call( elem, expr );

			// IE 9's matchesSelector returns false on disconnected nodes
			if ( ret || support.disconnectedMatch ||
					// As well, disconnected nodes are said to be in a document
					// fragment in IE 9
					elem.document && elem.document.nodeType !== 11 ) {
				return ret;
			}
		} catch(e) {}
	}

	return Sizzle( expr, document, null, [elem] ).length > 0;
};

Sizzle.contains = function( context, elem ) {
	// Set document vars if needed
	if ( ( context.ownerDocument || context ) !== document ) {
		setDocument( context );
	}
	return contains( context, elem );
};

Sizzle.attr = function( elem, name ) {
	var val;

	// Set document vars if needed
	if ( ( elem.ownerDocument || elem ) !== document ) {
		setDocument( elem );
	}

	if ( !documentIsXML ) {
		name = name.toLowerCase();
	}
	if ( (val = Expr.attrHandle[ name ]) ) {
		return val( elem );
	}
	if ( documentIsXML || support.attributes ) {
		return elem.getAttribute( name );
	}
	return ( (val = elem.getAttributeNode( name )) || elem.getAttribute( name ) ) && elem[ name ] === true ?
		name :
		val && val.specified ? val.value : null;
};

Sizzle.error = function( msg ) {
	throw new Error( "Syntax error, unrecognized expression: " + msg );
};

// Document sorting and removing duplicates
Sizzle.uniqueSort = function( results ) {
	var elem,
		duplicates = [],
		i = 1,
		j = 0;

	// Unless we *know* we can detect duplicates, assume their presence
	hasDuplicate = !support.detectDuplicates;
	results.sort( sortOrder );

	if ( hasDuplicate ) {
		for ( ; (elem = results[i]); i++ ) {
			if ( elem === results[ i - 1 ] ) {
				j = duplicates.push( i );
			}
		}
		while ( j-- ) {
			results.splice( duplicates[ j ], 1 );
		}
	}

	return results;
};

function siblingCheck( a, b ) {
	var cur = b && a,
		diff = cur && ( ~b.sourceIndex || MAX_NEGATIVE ) - ( ~a.sourceIndex || MAX_NEGATIVE );

	// Use IE sourceIndex if available on both nodes
	if ( diff ) {
		return diff;
	}

	// Check if b follows a
	if ( cur ) {
		while ( (cur = cur.nextSibling) ) {
			if ( cur === b ) {
				return -1;
			}
		}
	}

	return a ? 1 : -1;
}

// Returns a function to use in pseudos for input types
function createInputPseudo( type ) {
	return function( elem ) {
		var name = elem.nodeName.toLowerCase();
		return name === "input" && elem.type === type;
	};
}

// Returns a function to use in pseudos for buttons
function createButtonPseudo( type ) {
	return function( elem ) {
		var name = elem.nodeName.toLowerCase();
		return (name === "input" || name === "button") && elem.type === type;
	};
}

// Returns a function to use in pseudos for positionals
function createPositionalPseudo( fn ) {
	return markFunction(function( argument ) {
		argument = +argument;
		return markFunction(function( seed, matches ) {
			var j,
				matchIndexes = fn( [], seed.length, argument ),
				i = matchIndexes.length;

			// Match elements found at the specified indexes
			while ( i-- ) {
				if ( seed[ (j = matchIndexes[i]) ] ) {
					seed[j] = !(matches[j] = seed[j]);
				}
			}
		});
	});
}

/**
 * Utility function for retrieving the text value of an array of DOM nodes
 * @param {Array|Element} elem
 */
getText = Sizzle.getText = function( elem ) {
	var node,
		ret = "",
		i = 0,
		nodeType = elem.nodeType;

	if ( !nodeType ) {
		// If no nodeType, this is expected to be an array
		for ( ; (node = elem[i]); i++ ) {
			// Do not traverse comment nodes
			ret += getText( node );
		}
	} else if ( nodeType === 1 || nodeType === 9 || nodeType === 11 ) {
		// Use textContent for elements
		// innerText usage removed for consistency of new lines (see #11153)
		if ( typeof elem.textContent === "string" ) {
			return elem.textContent;
		} else {
			// Traverse its children
			for ( elem = elem.firstChild; elem; elem = elem.nextSibling ) {
				ret += getText( elem );
			}
		}
	} else if ( nodeType === 3 || nodeType === 4 ) {
		return elem.nodeValue;
	}
	// Do not include comment or processing instruction nodes

	return ret;
};

Expr = Sizzle.selectors = {

	// Can be adjusted by the user
	cacheLength: 50,

	createPseudo: markFunction,

	match: matchExpr,

	find: {},

	relative: {
		">": { dir: "parentNode", first: true },
		" ": { dir: "parentNode" },
		"+": { dir: "previousSibling", first: true },
		"~": { dir: "previousSibling" }
	},

	preFilter: {
		"ATTR": function( match ) {
			match[1] = match[1].replace( runescape, funescape );

			// Move the given value to match[3] whether quoted or unquoted
			match[3] = ( match[4] || match[5] || "" ).replace( runescape, funescape );

			if ( match[2] === "~=" ) {
				match[3] = " " + match[3] + " ";
			}

			return match.slice( 0, 4 );
		},

		"CHILD": function( match ) {
			/* matches from matchExpr["CHILD"]
				1 type (only|nth|...)
				2 what (child|of-type)
				3 argument (even|odd|\d*|\d*n([+-]\d+)?|...)
				4 xn-component of xn+y argument ([+-]?\d*n|)
				5 sign of xn-component
				6 x of xn-component
				7 sign of y-component
				8 y of y-component
			*/
			match[1] = match[1].toLowerCase();

			if ( match[1].slice( 0, 3 ) === "nth" ) {
				// nth-* requires argument
				if ( !match[3] ) {
					Sizzle.error( match[0] );
				}

				// numeric x and y parameters for Expr.filter.CHILD
				// remember that false/true cast respectively to 0/1
				match[4] = +( match[4] ? match[5] + (match[6] || 1) : 2 * ( match[3] === "even" || match[3] === "odd" ) );
				match[5] = +( ( match[7] + match[8] ) || match[3] === "odd" );

			// other types prohibit arguments
			} else if ( match[3] ) {
				Sizzle.error( match[0] );
			}

			return match;
		},

		"PSEUDO": function( match ) {
			var excess,
				unquoted = !match[5] && match[2];

			if ( matchExpr["CHILD"].test( match[0] ) ) {
				return null;
			}

			// Accept quoted arguments as-is
			if ( match[4] ) {
				match[2] = match[4];

			// Strip excess characters from unquoted arguments
			} else if ( unquoted && rpseudo.test( unquoted ) &&
				// Get excess from tokenize (recursively)
				(excess = tokenize( unquoted, true )) &&
				// advance to the next closing parenthesis
				(excess = unquoted.indexOf( ")", unquoted.length - excess ) - unquoted.length) ) {

				// excess is a negative index
				match[0] = match[0].slice( 0, excess );
				match[2] = unquoted.slice( 0, excess );
			}

			// Return only captures needed by the pseudo filter method (type and argument)
			return match.slice( 0, 3 );
		}
	},

	filter: {

		"TAG": function( nodeName ) {
			if ( nodeName === "*" ) {
				return function() { return true; };
			}

			nodeName = nodeName.replace( runescape, funescape ).toLowerCase();
			return function( elem ) {
				return elem.nodeName && elem.nodeName.toLowerCase() === nodeName;
			};
		},

		"CLASS": function( className ) {
			var pattern = classCache[ className + " " ];

			return pattern ||
				(pattern = new RegExp( "(^|" + whitespace + ")" + className + "(" + whitespace + "|$)" )) &&
				classCache( className, function( elem ) {
					return pattern.test( elem.className || (typeof elem.getAttribute !== strundefined && elem.getAttribute("class")) || "" );
				});
		},

		"ATTR": function( name, operator, check ) {
			return function( elem ) {
				var result = Sizzle.attr( elem, name );

				if ( result == null ) {
					return operator === "!=";
				}
				if ( !operator ) {
					return true;
				}

				result += "";

				return operator === "=" ? result === check :
					operator === "!=" ? result !== check :
					operator === "^=" ? check && result.indexOf( check ) === 0 :
					operator === "*=" ? check && result.indexOf( check ) > -1 :
					operator === "$=" ? check && result.slice( -check.length ) === check :
					operator === "~=" ? ( " " + result + " " ).indexOf( check ) > -1 :
					operator === "|=" ? result === check || result.slice( 0, check.length + 1 ) === check + "-" :
					false;
			};
		},

		"CHILD": function( type, what, argument, first, last ) {
			var simple = type.slice( 0, 3 ) !== "nth",
				forward = type.slice( -4 ) !== "last",
				ofType = what === "of-type";

			return first === 1 && last === 0 ?

				// Shortcut for :nth-*(n)
				function( elem ) {
					return !!elem.parentNode;
				} :

				function( elem, context, xml ) {
					var cache, outerCache, node, diff, nodeIndex, start,
						dir = simple !== forward ? "nextSibling" : "previousSibling",
						parent = elem.parentNode,
						name = ofType && elem.nodeName.toLowerCase(),
						useCache = !xml && !ofType;

					if ( parent ) {

						// :(first|last|only)-(child|of-type)
						if ( simple ) {
							while ( dir ) {
								node = elem;
								while ( (node = node[ dir ]) ) {
									if ( ofType ? node.nodeName.toLowerCase() === name : node.nodeType === 1 ) {
										return false;
									}
								}
								// Reverse direction for :only-* (if we haven't yet done so)
								start = dir = type === "only" && !start && "nextSibling";
							}
							return true;
						}

						start = [ forward ? parent.firstChild : parent.lastChild ];

						// non-xml :nth-child(...) stores cache data on `parent`
						if ( forward && useCache ) {
							// Seek `elem` from a previously-cached index
							outerCache = parent[ expando ] || (parent[ expando ] = {});
							cache = outerCache[ type ] || [];
							nodeIndex = cache[0] === dirruns && cache[1];
							diff = cache[0] === dirruns && cache[2];
							node = nodeIndex && parent.childNodes[ nodeIndex ];

							while ( (node = ++nodeIndex && node && node[ dir ] ||

								// Fallback to seeking `elem` from the start
								(diff = nodeIndex = 0) || start.pop()) ) {

								// When found, cache indexes on `parent` and break
								if ( node.nodeType === 1 && ++diff && node === elem ) {
									outerCache[ type ] = [ dirruns, nodeIndex, diff ];
									break;
								}
							}

						// Use previously-cached element index if available
						} else if ( useCache && (cache = (elem[ expando ] || (elem[ expando ] = {}))[ type ]) && cache[0] === dirruns ) {
							diff = cache[1];

						// xml :nth-child(...) or :nth-last-child(...) or :nth(-last)?-of-type(...)
						} else {
							// Use the same loop as above to seek `elem` from the start
							while ( (node = ++nodeIndex && node && node[ dir ] ||
								(diff = nodeIndex = 0) || start.pop()) ) {

								if ( ( ofType ? node.nodeName.toLowerCase() === name : node.nodeType === 1 ) && ++diff ) {
									// Cache the index of each encountered element
									if ( useCache ) {
										(node[ expando ] || (node[ expando ] = {}))[ type ] = [ dirruns, diff ];
									}

									if ( node === elem ) {
										break;
									}
								}
							}
						}

						// Incorporate the offset, then check against cycle size
						diff -= last;
						return diff === first || ( diff % first === 0 && diff / first >= 0 );
					}
				};
		},

		"PSEUDO": function( pseudo, argument ) {
			// pseudo-class names are case-insensitive
			// http://www.w3.org/TR/selectors/#pseudo-classes
			// Prioritize by case sensitivity in case custom pseudos are added with uppercase letters
			// Remember that setFilters inherits from pseudos
			var args,
				fn = Expr.pseudos[ pseudo ] || Expr.setFilters[ pseudo.toLowerCase() ] ||
					Sizzle.error( "unsupported pseudo: " + pseudo );

			// The user may use createPseudo to indicate that
			// arguments are needed to create the filter function
			// just as Sizzle does
			if ( fn[ expando ] ) {
				return fn( argument );
			}

			// But maintain support for old signatures
			if ( fn.length > 1 ) {
				args = [ pseudo, pseudo, "", argument ];
				return Expr.setFilters.hasOwnProperty( pseudo.toLowerCase() ) ?
					markFunction(function( seed, matches ) {
						var idx,
							matched = fn( seed, argument ),
							i = matched.length;
						while ( i-- ) {
							idx = indexOf.call( seed, matched[i] );
							seed[ idx ] = !( matches[ idx ] = matched[i] );
						}
					}) :
					function( elem ) {
						return fn( elem, 0, args );
					};
			}

			return fn;
		}
	},

	pseudos: {
		// Potentially complex pseudos
		"not": markFunction(function( selector ) {
			// Trim the selector passed to compile
			// to avoid treating leading and trailing
			// spaces as combinators
			var input = [],
				results = [],
				matcher = compile( selector.replace( rtrim, "$1" ) );

			return matcher[ expando ] ?
				markFunction(function( seed, matches, context, xml ) {
					var elem,
						unmatched = matcher( seed, null, xml, [] ),
						i = seed.length;

					// Match elements unmatched by `matcher`
					while ( i-- ) {
						if ( (elem = unmatched[i]) ) {
							seed[i] = !(matches[i] = elem);
						}
					}
				}) :
				function( elem, context, xml ) {
					input[0] = elem;
					matcher( input, null, xml, results );
					return !results.pop();
				};
		}),

		"has": markFunction(function( selector ) {
			return function( elem ) {
				return Sizzle( selector, elem ).length > 0;
			};
		}),

		"contains": markFunction(function( text ) {
			return function( elem ) {
				return ( elem.textContent || elem.innerText || getText( elem ) ).indexOf( text ) > -1;
			};
		}),

		// "Whether an element is represented by a :lang() selector
		// is based solely on the element's language value
		// being equal to the identifier C,
		// or beginning with the identifier C immediately followed by "-".
		// The matching of C against the element's language value is performed case-insensitively.
		// The identifier C does not have to be a valid language name."
		// http://www.w3.org/TR/selectors/#lang-pseudo
		"lang": markFunction( function( lang ) {
			// lang value must be a valid identifider
			if ( !ridentifier.test(lang || "") ) {
				Sizzle.error( "unsupported lang: " + lang );
			}
			lang = lang.replace( runescape, funescape ).toLowerCase();
			return function( elem ) {
				var elemLang;
				do {
					if ( (elemLang = documentIsXML ?
						elem.getAttribute("xml:lang") || elem.getAttribute("lang") :
						elem.lang) ) {

						elemLang = elemLang.toLowerCase();
						return elemLang === lang || elemLang.indexOf( lang + "-" ) === 0;
					}
				} while ( (elem = elem.parentNode) && elem.nodeType === 1 );
				return false;
			};
		}),

		// Miscellaneous
		"target": function( elem ) {
			var hash = window.location && window.location.hash;
			return hash && hash.slice( 1 ) === elem.id;
		},

		"root": function( elem ) {
			return elem === docElem;
		},

		"focus": function( elem ) {
			return elem === document.activeElement && (!document.hasFocus || document.hasFocus()) && !!(elem.type || elem.href || ~elem.tabIndex);
		},

		// Boolean properties
		"enabled": function( elem ) {
			return elem.disabled === false;
		},

		"disabled": function( elem ) {
			return elem.disabled === true;
		},

		"checked": function( elem ) {
			// In CSS3, :checked should return both checked and selected elements
			// http://www.w3.org/TR/2011/REC-css3-selectors-20110929/#checked
			var nodeName = elem.nodeName.toLowerCase();
			return (nodeName === "input" && !!elem.checked) || (nodeName === "option" && !!elem.selected);
		},

		"selected": function( elem ) {
			// Accessing this property makes selected-by-default
			// options in Safari work properly
			if ( elem.parentNode ) {
				elem.parentNode.selectedIndex;
			}

			return elem.selected === true;
		},

		// Contents
		"empty": function( elem ) {
			// http://www.w3.org/TR/selectors/#empty-pseudo
			// :empty is only affected by element nodes and content nodes(including text(3), cdata(4)),
			//   not comment, processing instructions, or others
			// Thanks to Diego Perini for the nodeName shortcut
			//   Greater than "@" means alpha characters (specifically not starting with "#" or "?")
			for ( elem = elem.firstChild; elem; elem = elem.nextSibling ) {
				if ( elem.nodeName > "@" || elem.nodeType === 3 || elem.nodeType === 4 ) {
					return false;
				}
			}
			return true;
		},

		"parent": function( elem ) {
			return !Expr.pseudos["empty"]( elem );
		},

		// Element/input types
		"header": function( elem ) {
			return rheader.test( elem.nodeName );
		},

		"input": function( elem ) {
			return rinputs.test( elem.nodeName );
		},

		"button": function( elem ) {
			var name = elem.nodeName.toLowerCase();
			return name === "input" && elem.type === "button" || name === "button";
		},

		"text": function( elem ) {
			var attr;
			// IE6 and 7 will map elem.type to 'text' for new HTML5 types (search, etc)
			// use getAttribute instead to test this case
			return elem.nodeName.toLowerCase() === "input" &&
				elem.type === "text" &&
				( (attr = elem.getAttribute("type")) == null || attr.toLowerCase() === elem.type );
		},

		// Position-in-collection
		"first": createPositionalPseudo(function() {
			return [ 0 ];
		}),

		"last": createPositionalPseudo(function( matchIndexes, length ) {
			return [ length - 1 ];
		}),

		"eq": createPositionalPseudo(function( matchIndexes, length, argument ) {
			return [ argument < 0 ? argument + length : argument ];
		}),

		"even": createPositionalPseudo(function( matchIndexes, length ) {
			var i = 0;
			for ( ; i < length; i += 2 ) {
				matchIndexes.push( i );
			}
			return matchIndexes;
		}),

		"odd": createPositionalPseudo(function( matchIndexes, length ) {
			var i = 1;
			for ( ; i < length; i += 2 ) {
				matchIndexes.push( i );
			}
			return matchIndexes;
		}),

		"lt": createPositionalPseudo(function( matchIndexes, length, argument ) {
			var i = argument < 0 ? argument + length : argument;
			for ( ; --i >= 0; ) {
				matchIndexes.push( i );
			}
			return matchIndexes;
		}),

		"gt": createPositionalPseudo(function( matchIndexes, length, argument ) {
			var i = argument < 0 ? argument + length : argument;
			for ( ; ++i < length; ) {
				matchIndexes.push( i );
			}
			return matchIndexes;
		})
	}
};

// Add button/input type pseudos
for ( i in { radio: true, checkbox: true, file: true, password: true, image: true } ) {
	Expr.pseudos[ i ] = createInputPseudo( i );
}
for ( i in { submit: true, reset: true } ) {
	Expr.pseudos[ i ] = createButtonPseudo( i );
}

function tokenize( selector, parseOnly ) {
	var matched, match, tokens, type,
		soFar, groups, preFilters,
		cached = tokenCache[ selector + " " ];

	if ( cached ) {
		return parseOnly ? 0 : cached.slice( 0 );
	}

	soFar = selector;
	groups = [];
	preFilters = Expr.preFilter;

	while ( soFar ) {

		// Comma and first run
		if ( !matched || (match = rcomma.exec( soFar )) ) {
			if ( match ) {
				// Don't consume trailing commas as valid
				soFar = soFar.slice( match[0].length ) || soFar;
			}
			groups.push( tokens = [] );
		}

		matched = false;

		// Combinators
		if ( (match = rcombinators.exec( soFar )) ) {
			matched = match.shift();
			tokens.push( {
				value: matched,
				// Cast descendant combinators to space
				type: match[0].replace( rtrim, " " )
			} );
			soFar = soFar.slice( matched.length );
		}

		// Filters
		for ( type in Expr.filter ) {
			if ( (match = matchExpr[ type ].exec( soFar )) && (!preFilters[ type ] ||
				(match = preFilters[ type ]( match ))) ) {
				matched = match.shift();
				tokens.push( {
					value: matched,
					type: type,
					matches: match
				} );
				soFar = soFar.slice( matched.length );
			}
		}

		if ( !matched ) {
			break;
		}
	}

	// Return the length of the invalid excess
	// if we're just parsing
	// Otherwise, throw an error or return tokens
	return parseOnly ?
		soFar.length :
		soFar ?
			Sizzle.error( selector ) :
			// Cache the tokens
			tokenCache( selector, groups ).slice( 0 );
}

function toSelector( tokens ) {
	var i = 0,
		len = tokens.length,
		selector = "";
	for ( ; i < len; i++ ) {
		selector += tokens[i].value;
	}
	return selector;
}

function addCombinator( matcher, combinator, base ) {
	var dir = combinator.dir,
		checkNonElements = base && dir === "parentNode",
		doneName = done++;

	return combinator.first ?
		// Check against closest ancestor/preceding element
		function( elem, context, xml ) {
			while ( (elem = elem[ dir ]) ) {
				if ( elem.nodeType === 1 || checkNonElements ) {
					return matcher( elem, context, xml );
				}
			}
		} :

		// Check against all ancestor/preceding elements
		function( elem, context, xml ) {
			var data, cache, outerCache,
				dirkey = dirruns + " " + doneName;

			// We can't set arbitrary data on XML nodes, so they don't benefit from dir caching
			if ( xml ) {
				while ( (elem = elem[ dir ]) ) {
					if ( elem.nodeType === 1 || checkNonElements ) {
						if ( matcher( elem, context, xml ) ) {
							return true;
						}
					}
				}
			} else {
				while ( (elem = elem[ dir ]) ) {
					if ( elem.nodeType === 1 || checkNonElements ) {
						outerCache = elem[ expando ] || (elem[ expando ] = {});
						if ( (cache = outerCache[ dir ]) && cache[0] === dirkey ) {
							if ( (data = cache[1]) === true || data === cachedruns ) {
								return data === true;
							}
						} else {
							cache = outerCache[ dir ] = [ dirkey ];
							cache[1] = matcher( elem, context, xml ) || cachedruns;
							if ( cache[1] === true ) {
								return true;
							}
						}
					}
				}
			}
		};
}

function elementMatcher( matchers ) {
	return matchers.length > 1 ?
		function( elem, context, xml ) {
			var i = matchers.length;
			while ( i-- ) {
				if ( !matchers[i]( elem, context, xml ) ) {
					return false;
				}
			}
			return true;
		} :
		matchers[0];
}

function condense( unmatched, map, filter, context, xml ) {
	var elem,
		newUnmatched = [],
		i = 0,
		len = unmatched.length,
		mapped = map != null;

	for ( ; i < len; i++ ) {
		if ( (elem = unmatched[i]) ) {
			if ( !filter || filter( elem, context, xml ) ) {
				newUnmatched.push( elem );
				if ( mapped ) {
					map.push( i );
				}
			}
		}
	}

	return newUnmatched;
}

function setMatcher( preFilter, selector, matcher, postFilter, postFinder, postSelector ) {
	if ( postFilter && !postFilter[ expando ] ) {
		postFilter = setMatcher( postFilter );
	}
	if ( postFinder && !postFinder[ expando ] ) {
		postFinder = setMatcher( postFinder, postSelector );
	}
	return markFunction(function( seed, results, context, xml ) {
		var temp, i, elem,
			preMap = [],
			postMap = [],
			preexisting = results.length,

			// Get initial elements from seed or context
			elems = seed || multipleContexts( selector || "*", context.nodeType ? [ context ] : context, [] ),

			// Prefilter to get matcher input, preserving a map for seed-results synchronization
			matcherIn = preFilter && ( seed || !selector ) ?
				condense( elems, preMap, preFilter, context, xml ) :
				elems,

			matcherOut = matcher ?
				// If we have a postFinder, or filtered seed, or non-seed postFilter or preexisting results,
				postFinder || ( seed ? preFilter : preexisting || postFilter ) ?

					// ...intermediate processing is necessary
					[] :

					// ...otherwise use results directly
					results :
				matcherIn;

		// Find primary matches
		if ( matcher ) {
			matcher( matcherIn, matcherOut, context, xml );
		}

		// Apply postFilter
		if ( postFilter ) {
			temp = condense( matcherOut, postMap );
			postFilter( temp, [], context, xml );

			// Un-match failing elements by moving them back to matcherIn
			i = temp.length;
			while ( i-- ) {
				if ( (elem = temp[i]) ) {
					matcherOut[ postMap[i] ] = !(matcherIn[ postMap[i] ] = elem);
				}
			}
		}

		if ( seed ) {
			if ( postFinder || preFilter ) {
				if ( postFinder ) {
					// Get the final matcherOut by condensing this intermediate into postFinder contexts
					temp = [];
					i = matcherOut.length;
					while ( i-- ) {
						if ( (elem = matcherOut[i]) ) {
							// Restore matcherIn since elem is not yet a final match
							temp.push( (matcherIn[i] = elem) );
						}
					}
					postFinder( null, (matcherOut = []), temp, xml );
				}

				// Move matched elements from seed to results to keep them synchronized
				i = matcherOut.length;
				while ( i-- ) {
					if ( (elem = matcherOut[i]) &&
						(temp = postFinder ? indexOf.call( seed, elem ) : preMap[i]) > -1 ) {

						seed[temp] = !(results[temp] = elem);
					}
				}
			}

		// Add elements to results, through postFinder if defined
		} else {
			matcherOut = condense(
				matcherOut === results ?
					matcherOut.splice( preexisting, matcherOut.length ) :
					matcherOut
			);
			if ( postFinder ) {
				postFinder( null, results, matcherOut, xml );
			} else {
				push.apply( results, matcherOut );
			}
		}
	});
}

function matcherFromTokens( tokens ) {
	var checkContext, matcher, j,
		len = tokens.length,
		leadingRelative = Expr.relative[ tokens[0].type ],
		implicitRelative = leadingRelative || Expr.relative[" "],
		i = leadingRelative ? 1 : 0,

		// The foundational matcher ensures that elements are reachable from top-level context(s)
		matchContext = addCombinator( function( elem ) {
			return elem === checkContext;
		}, implicitRelative, true ),
		matchAnyContext = addCombinator( function( elem ) {
			return indexOf.call( checkContext, elem ) > -1;
		}, implicitRelative, true ),
		matchers = [ function( elem, context, xml ) {
			return ( !leadingRelative && ( xml || context !== outermostContext ) ) || (
				(checkContext = context).nodeType ?
					matchContext( elem, context, xml ) :
					matchAnyContext( elem, context, xml ) );
		} ];

	for ( ; i < len; i++ ) {
		if ( (matcher = Expr.relative[ tokens[i].type ]) ) {
			matchers = [ addCombinator(elementMatcher( matchers ), matcher) ];
		} else {
			matcher = Expr.filter[ tokens[i].type ].apply( null, tokens[i].matches );

			// Return special upon seeing a positional matcher
			if ( matcher[ expando ] ) {
				// Find the next relative operator (if any) for proper handling
				j = ++i;
				for ( ; j < len; j++ ) {
					if ( Expr.relative[ tokens[j].type ] ) {
						break;
					}
				}
				return setMatcher(
					i > 1 && elementMatcher( matchers ),
					i > 1 && toSelector( tokens.slice( 0, i - 1 ) ).replace( rtrim, "$1" ),
					matcher,
					i < j && matcherFromTokens( tokens.slice( i, j ) ),
					j < len && matcherFromTokens( (tokens = tokens.slice( j )) ),
					j < len && toSelector( tokens )
				);
			}
			matchers.push( matcher );
		}
	}

	return elementMatcher( matchers );
}

function matcherFromGroupMatchers( elementMatchers, setMatchers ) {
	// A counter to specify which element is currently being matched
	var matcherCachedRuns = 0,
		bySet = setMatchers.length > 0,
		byElement = elementMatchers.length > 0,
		superMatcher = function( seed, context, xml, results, expandContext ) {
			var elem, j, matcher,
				setMatched = [],
				matchedCount = 0,
				i = "0",
				unmatched = seed && [],
				outermost = expandContext != null,
				contextBackup = outermostContext,
				// We must always have either seed elements or context
				elems = seed || byElement && Expr.find["TAG"]( "*", expandContext && context.parentNode || context ),
				// Use integer dirruns iff this is the outermost matcher
				dirrunsUnique = (dirruns += contextBackup == null ? 1 : Math.random() || 0.1);

			if ( outermost ) {
				outermostContext = context !== document && context;
				cachedruns = matcherCachedRuns;
			}

			// Add elements passing elementMatchers directly to results
			// Keep `i` a string if there are no elements so `matchedCount` will be "00" below
			for ( ; (elem = elems[i]) != null; i++ ) {
				if ( byElement && elem ) {
					j = 0;
					while ( (matcher = elementMatchers[j++]) ) {
						if ( matcher( elem, context, xml ) ) {
							results.push( elem );
							break;
						}
					}
					if ( outermost ) {
						dirruns = dirrunsUnique;
						cachedruns = ++matcherCachedRuns;
					}
				}

				// Track unmatched elements for set filters
				if ( bySet ) {
					// They will have gone through all possible matchers
					if ( (elem = !matcher && elem) ) {
						matchedCount--;
					}

					// Lengthen the array for every element, matched or not
					if ( seed ) {
						unmatched.push( elem );
					}
				}
			}

			// Apply set filters to unmatched elements
			matchedCount += i;
			if ( bySet && i !== matchedCount ) {
				j = 0;
				while ( (matcher = setMatchers[j++]) ) {
					matcher( unmatched, setMatched, context, xml );
				}

				if ( seed ) {
					// Reintegrate element matches to eliminate the need for sorting
					if ( matchedCount > 0 ) {
						while ( i-- ) {
							if ( !(unmatched[i] || setMatched[i]) ) {
								setMatched[i] = pop.call( results );
							}
						}
					}

					// Discard index placeholder values to get only actual matches
					setMatched = condense( setMatched );
				}

				// Add matches to results
				push.apply( results, setMatched );

				// Seedless set matches succeeding multiple successful matchers stipulate sorting
				if ( outermost && !seed && setMatched.length > 0 &&
					( matchedCount + setMatchers.length ) > 1 ) {

					Sizzle.uniqueSort( results );
				}
			}

			// Override manipulation of globals by nested matchers
			if ( outermost ) {
				dirruns = dirrunsUnique;
				outermostContext = contextBackup;
			}

			return unmatched;
		};

	return bySet ?
		markFunction( superMatcher ) :
		superMatcher;
}

compile = Sizzle.compile = function( selector, group /* Internal Use Only */ ) {
	var i,
		setMatchers = [],
		elementMatchers = [],
		cached = compilerCache[ selector + " " ];

	if ( !cached ) {
		// Generate a function of recursive functions that can be used to check each element
		if ( !group ) {
			group = tokenize( selector );
		}
		i = group.length;
		while ( i-- ) {
			cached = matcherFromTokens( group[i] );
			if ( cached[ expando ] ) {
				setMatchers.push( cached );
			} else {
				elementMatchers.push( cached );
			}
		}

		// Cache the compiled function
		cached = compilerCache( selector, matcherFromGroupMatchers( elementMatchers, setMatchers ) );
	}
	return cached;
};

function multipleContexts( selector, contexts, results ) {
	var i = 0,
		len = contexts.length;
	for ( ; i < len; i++ ) {
		Sizzle( selector, contexts[i], results );
	}
	return results;
}

function select( selector, context, results, seed ) {
	var i, tokens, token, type, find,
		match = tokenize( selector );

	if ( !seed ) {
		// Try to minimize operations if there is only one group
		if ( match.length === 1 ) {

			// Take a shortcut and set the context if the root selector is an ID
			tokens = match[0] = match[0].slice( 0 );
			if ( tokens.length > 2 && (token = tokens[0]).type === "ID" &&
					context.nodeType === 9 && !documentIsXML &&
					Expr.relative[ tokens[1].type ] ) {

				context = Expr.find["ID"]( token.matches[0].replace( runescape, funescape ), context )[0];
				if ( !context ) {
					return results;
				}

				selector = selector.slice( tokens.shift().value.length );
			}

			// Fetch a seed set for right-to-left matching
			i = matchExpr["needsContext"].test( selector ) ? 0 : tokens.length;
			while ( i-- ) {
				token = tokens[i];

				// Abort if we hit a combinator
				if ( Expr.relative[ (type = token.type) ] ) {
					break;
				}
				if ( (find = Expr.find[ type ]) ) {
					// Search, expanding context for leading sibling combinators
					if ( (seed = find(
						token.matches[0].replace( runescape, funescape ),
						rsibling.test( tokens[0].type ) && context.parentNode || context
					)) ) {

						// If seed is empty or no tokens remain, we can return early
						tokens.splice( i, 1 );
						selector = seed.length && toSelector( tokens );
						if ( !selector ) {
							push.apply( results, slice.call( seed, 0 ) );
							return results;
						}

						break;
					}
				}
			}
		}
	}

	// Compile and execute a filtering function
	// Provide `match` to avoid retokenization if we modified the selector above
	compile( selector, match )(
		seed,
		context,
		documentIsXML,
		results,
		rsibling.test( selector )
	);
	return results;
}

// Deprecated
Expr.pseudos["nth"] = Expr.pseudos["eq"];

// Easy API for creating new setFilters
function setFilters() {}
Expr.filters = setFilters.prototype = Expr.pseudos;
Expr.setFilters = new setFilters();

// Initialize with the default document
setDocument();

// Override sizzle attribute retrieval
Sizzle.attr = jQuery.attr;
jQuery.find = Sizzle;
jQuery.expr = Sizzle.selectors;
jQuery.expr[":"] = jQuery.expr.pseudos;
jQuery.unique = Sizzle.uniqueSort;
jQuery.text = Sizzle.getText;
jQuery.isXMLDoc = Sizzle.isXML;
jQuery.contains = Sizzle.contains;


})( window );
var runtil = /Until$/,
	rparentsprev = /^(?:parents|prev(?:Until|All))/,
	isSimple = /^.[^:#\[\.,]*$/,
	rneedsContext = jQuery.expr.match.needsContext,
	// methods guaranteed to produce a unique set when starting from a unique set
	guaranteedUnique = {
		children: true,
		contents: true,
		next: true,
		prev: true
	};

jQuery.fn.extend({
	find: function( selector ) {
		var i, ret, self,
			len = this.length;

		if ( typeof selector !== "string" ) {
			self = this;
			return this.pushStack( jQuery( selector ).filter(function() {
				for ( i = 0; i < len; i++ ) {
					if ( jQuery.contains( self[ i ], this ) ) {
						return true;
					}
				}
			}) );
		}

		ret = [];
		for ( i = 0; i < len; i++ ) {
			jQuery.find( selector, this[ i ], ret );
		}

		// Needed because $( selector, context ) becomes $( context ).find( selector )
		ret = this.pushStack( len > 1 ? jQuery.unique( ret ) : ret );
		ret.selector = ( this.selector ? this.selector + " " : "" ) + selector;
		return ret;
	},

	has: function( target ) {
		var i,
			targets = jQuery( target, this ),
			len = targets.length;

		return this.filter(function() {
			for ( i = 0; i < len; i++ ) {
				if ( jQuery.contains( this, targets[i] ) ) {
					return true;
				}
			}
		});
	},

	not: function( selector ) {
		return this.pushStack( winnow(this, selector, false) );
	},

	filter: function( selector ) {
		return this.pushStack( winnow(this, selector, true) );
	},

	is: function( selector ) {
		return !!selector && (
			typeof selector === "string" ?
				// If this is a positional/relative selector, check membership in the returned set
				// so $("p:first").is("p:last") won't return true for a doc with two "p".
				rneedsContext.test( selector ) ?
					jQuery( selector, this.context ).index( this[0] ) >= 0 :
					jQuery.filter( selector, this ).length > 0 :
				this.filter( selector ).length > 0 );
	},

	closest: function( selectors, context ) {
		var cur,
			i = 0,
			l = this.length,
			ret = [],
			pos = rneedsContext.test( selectors ) || typeof selectors !== "string" ?
				jQuery( selectors, context || this.context ) :
				0;

		for ( ; i < l; i++ ) {
			cur = this[i];

			while ( cur && cur.ownerDocument && cur !== context && cur.nodeType !== 11 ) {
				if ( pos ? pos.index(cur) > -1 : jQuery.find.matchesSelector(cur, selectors) ) {
					ret.push( cur );
					break;
				}
				cur = cur.parentNode;
			}
		}

		return this.pushStack( ret.length > 1 ? jQuery.unique( ret ) : ret );
	},

	// Determine the position of an element within
	// the matched set of elements
	index: function( elem ) {

		// No argument, return index in parent
		if ( !elem ) {
			return ( this[0] && this[0].parentNode ) ? this.first().prevAll().length : -1;
		}

		// index in selector
		if ( typeof elem === "string" ) {
			return jQuery.inArray( this[0], jQuery( elem ) );
		}

		// Locate the position of the desired element
		return jQuery.inArray(
			// If it receives a jQuery object, the first element is used
			elem.jquery ? elem[0] : elem, this );
	},

	add: function( selector, context ) {
		var set = typeof selector === "string" ?
				jQuery( selector, context ) :
				jQuery.makeArray( selector && selector.nodeType ? [ selector ] : selector ),
			all = jQuery.merge( this.get(), set );

		return this.pushStack( jQuery.unique(all) );
	},

	addBack: function( selector ) {
		return this.add( selector == null ?
			this.prevObject : this.prevObject.filter(selector)
		);
	}
});

jQuery.fn.andSelf = jQuery.fn.addBack;

function sibling( cur, dir ) {
	do {
		cur = cur[ dir ];
	} while ( cur && cur.nodeType !== 1 );

	return cur;
}

jQuery.each({
	parent: function( elem ) {
		var parent = elem.parentNode;
		return parent && parent.nodeType !== 11 ? parent : null;
	},
	parents: function( elem ) {
		return jQuery.dir( elem, "parentNode" );
	},
	parentsUntil: function( elem, i, until ) {
		return jQuery.dir( elem, "parentNode", until );
	},
	next: function( elem ) {
		return sibling( elem, "nextSibling" );
	},
	prev: function( elem ) {
		return sibling( elem, "previousSibling" );
	},
	nextAll: function( elem ) {
		return jQuery.dir( elem, "nextSibling" );
	},
	prevAll: function( elem ) {
		return jQuery.dir( elem, "previousSibling" );
	},
	nextUntil: function( elem, i, until ) {
		return jQuery.dir( elem, "nextSibling", until );
	},
	prevUntil: function( elem, i, until ) {
		return jQuery.dir( elem, "previousSibling", until );
	},
	siblings: function( elem ) {
		return jQuery.sibling( ( elem.parentNode || {} ).firstChild, elem );
	},
	children: function( elem ) {
		return jQuery.sibling( elem.firstChild );
	},
	contents: function( elem ) {
		return jQuery.nodeName( elem, "iframe" ) ?
			elem.contentDocument || elem.contentWindow.document :
			jQuery.merge( [], elem.childNodes );
	}
}, function( name, fn ) {
	jQuery.fn[ name ] = function( until, selector ) {
		var ret = jQuery.map( this, fn, until );

		if ( !runtil.test( name ) ) {
			selector = until;
		}

		if ( selector && typeof selector === "string" ) {
			ret = jQuery.filter( selector, ret );
		}

		ret = this.length > 1 && !guaranteedUnique[ name ] ? jQuery.unique( ret ) : ret;

		if ( this.length > 1 && rparentsprev.test( name ) ) {
			ret = ret.reverse();
		}

		return this.pushStack( ret );
	};
});

jQuery.extend({
	filter: function( expr, elems, not ) {
		if ( not ) {
			expr = ":not(" + expr + ")";
		}

		return elems.length === 1 ?
			jQuery.find.matchesSelector(elems[0], expr) ? [ elems[0] ] : [] :
			jQuery.find.matches(expr, elems);
	},

	dir: function( elem, dir, until ) {
		var matched = [],
			cur = elem[ dir ];

		while ( cur && cur.nodeType !== 9 && (until === undefined || cur.nodeType !== 1 || !jQuery( cur ).is( until )) ) {
			if ( cur.nodeType === 1 ) {
				matched.push( cur );
			}
			cur = cur[dir];
		}
		return matched;
	},

	sibling: function( n, elem ) {
		var r = [];

		for ( ; n; n = n.nextSibling ) {
			if ( n.nodeType === 1 && n !== elem ) {
				r.push( n );
			}
		}

		return r;
	}
});

// Implement the identical functionality for filter and not
function winnow( elements, qualifier, keep ) {

	// Can't pass null or undefined to indexOf in Firefox 4
	// Set to 0 to skip string check
	qualifier = qualifier || 0;

	if ( jQuery.isFunction( qualifier ) ) {
		return jQuery.grep(elements, function( elem, i ) {
			var retVal = !!qualifier.call( elem, i, elem );
			return retVal === keep;
		});

	} else if ( qualifier.nodeType ) {
		return jQuery.grep(elements, function( elem ) {
			return ( elem === qualifier ) === keep;
		});

	} else if ( typeof qualifier === "string" ) {
		var filtered = jQuery.grep(elements, function( elem ) {
			return elem.nodeType === 1;
		});

		if ( isSimple.test( qualifier ) ) {
			return jQuery.filter(qualifier, filtered, !keep);
		} else {
			qualifier = jQuery.filter( qualifier, filtered );
		}
	}

	return jQuery.grep(elements, function( elem ) {
		return ( jQuery.inArray( elem, qualifier ) >= 0 ) === keep;
	});
}
function createSafeFragment( document ) {
	var list = nodeNames.split( "|" ),
		safeFrag = document.createDocumentFragment();

	if ( safeFrag.createElement ) {
		while ( list.length ) {
			safeFrag.createElement(
				list.pop()
			);
		}
	}
	return safeFrag;
}

var nodeNames = "abbr|article|aside|audio|bdi|canvas|data|datalist|details|figcaption|figure|footer|" +
		"header|hgroup|mark|meter|nav|output|progress|section|summary|time|video",
	rinlinejQuery = / jQuery\d+="(?:null|\d+)"/g,
	rnoshimcache = new RegExp("<(?:" + nodeNames + ")[\\s/>]", "i"),
	rleadingWhitespace = /^\s+/,
	rxhtmlTag = /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:]+)[^>]*)\/>/gi,
	rtagName = /<([\w:]+)/,
	rtbody = /<tbody/i,
	rhtml = /<|&#?\w+;/,
	rnoInnerhtml = /<(?:script|style|link)/i,
	manipulation_rcheckableType = /^(?:checkbox|radio)$/i,
	// checked="checked" or checked
	rchecked = /checked\s*(?:[^=]|=\s*.checked.)/i,
	rscriptType = /^$|\/(?:java|ecma)script/i,
	rscriptTypeMasked = /^true\/(.*)/,
	rcleanScript = /^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g,

	// We have to close these tags to support XHTML (#13200)
	wrapMap = {
		option: [ 1, "<select multiple='multiple'>", "</select>" ],
		legend: [ 1, "<fieldset>", "</fieldset>" ],
		area: [ 1, "<map>", "</map>" ],
		param: [ 1, "<object>", "</object>" ],
		thead: [ 1, "<table>", "</table>" ],
		tr: [ 2, "<table><tbody>", "</tbody></table>" ],
		col: [ 2, "<table><tbody></tbody><colgroup>", "</colgroup></table>" ],
		td: [ 3, "<table><tbody><tr>", "</tr></tbody></table>" ],

		// IE6-8 can't serialize link, script, style, or any html5 (NoScope) tags,
		// unless wrapped in a div with non-breaking characters in front of it.
		_default: jQuery.support.htmlSerialize ? [ 0, "", "" ] : [ 1, "X<div>", "</div>"  ]
	},
	safeFragment = createSafeFragment( document ),
	fragmentDiv = safeFragment.appendChild( document.createElement("div") );

wrapMap.optgroup = wrapMap.option;
wrapMap.tbody = wrapMap.tfoot = wrapMap.colgroup = wrapMap.caption = wrapMap.thead;
wrapMap.th = wrapMap.td;

jQuery.fn.extend({
	text: function( value ) {
		return jQuery.access( this, function( value ) {
			return value === undefined ?
				jQuery.text( this ) :
				this.empty().append( ( this[0] && this[0].ownerDocument || document ).createTextNode( value ) );
		}, null, value, arguments.length );
	},

	wrapAll: function( html ) {
		if ( jQuery.isFunction( html ) ) {
			return this.each(function(i) {
				jQuery(this).wrapAll( html.call(this, i) );
			});
		}

		if ( this[0] ) {
			// The elements to wrap the target around
			var wrap = jQuery( html, this[0].ownerDocument ).eq(0).clone(true);

			if ( this[0].parentNode ) {
				wrap.insertBefore( this[0] );
			}

			wrap.map(function() {
				var elem = this;

				while ( elem.firstChild && elem.firstChild.nodeType === 1 ) {
					elem = elem.firstChild;
				}

				return elem;
			}).append( this );
		}

		return this;
	},

	wrapInner: function( html ) {
		if ( jQuery.isFunction( html ) ) {
			return this.each(function(i) {
				jQuery(this).wrapInner( html.call(this, i) );
			});
		}

		return this.each(function() {
			var self = jQuery( this ),
				contents = self.contents();

			if ( contents.length ) {
				contents.wrapAll( html );

			} else {
				self.append( html );
			}
		});
	},

	wrap: function( html ) {
		var isFunction = jQuery.isFunction( html );

		return this.each(function(i) {
			jQuery( this ).wrapAll( isFunction ? html.call(this, i) : html );
		});
	},

	unwrap: function() {
		return this.parent().each(function() {
			if ( !jQuery.nodeName( this, "body" ) ) {
				jQuery( this ).replaceWith( this.childNodes );
			}
		}).end();
	},

	append: function() {
		return this.domManip(arguments, true, function( elem ) {
			if ( this.nodeType === 1 || this.nodeType === 11 || this.nodeType === 9 ) {
				this.appendChild( elem );
			}
		});
	},

	prepend: function() {
		return this.domManip(arguments, true, function( elem ) {
			if ( this.nodeType === 1 || this.nodeType === 11 || this.nodeType === 9 ) {
				this.insertBefore( elem, this.firstChild );
			}
		});
	},

	before: function() {
		return this.domManip( arguments, false, function( elem ) {
			if ( this.parentNode ) {
				this.parentNode.insertBefore( elem, this );
			}
		});
	},

	after: function() {
		return this.domManip( arguments, false, function( elem ) {
			if ( this.parentNode ) {
				this.parentNode.insertBefore( elem, this.nextSibling );
			}
		});
	},

	// keepData is for internal use only--do not document
	remove: function( selector, keepData ) {
		var elem,
			i = 0;

		for ( ; (elem = this[i]) != null; i++ ) {
			if ( !selector || jQuery.filter( selector, [ elem ] ).length > 0 ) {
				if ( !keepData && elem.nodeType === 1 ) {
					jQuery.cleanData( getAll( elem ) );
				}

				if ( elem.parentNode ) {
					if ( keepData && jQuery.contains( elem.ownerDocument, elem ) ) {
						setGlobalEval( getAll( elem, "script" ) );
					}
					elem.parentNode.removeChild( elem );
				}
			}
		}

		return this;
	},

	empty: function() {
		var elem,
			i = 0;

		for ( ; (elem = this[i]) != null; i++ ) {
			// Remove element nodes and prevent memory leaks
			if ( elem.nodeType === 1 ) {
				jQuery.cleanData( getAll( elem, false ) );
			}

			// Remove any remaining nodes
			while ( elem.firstChild ) {
				elem.removeChild( elem.firstChild );
			}

			// If this is a select, ensure that it displays empty (#12336)
			// Support: IE<9
			if ( elem.options && jQuery.nodeName( elem, "select" ) ) {
				elem.options.length = 0;
			}
		}

		return this;
	},

	clone: function( dataAndEvents, deepDataAndEvents ) {
		dataAndEvents = dataAndEvents == null ? false : dataAndEvents;
		deepDataAndEvents = deepDataAndEvents == null ? dataAndEvents : deepDataAndEvents;

		return this.map( function () {
			return jQuery.clone( this, dataAndEvents, deepDataAndEvents );
		});
	},

	html: function( value ) {
		return jQuery.access( this, function( value ) {
			var elem = this[0] || {},
				i = 0,
				l = this.length;

			if ( value === undefined ) {
				return elem.nodeType === 1 ?
					elem.innerHTML.replace( rinlinejQuery, "" ) :
					undefined;
			}

			// See if we can take a shortcut and just use innerHTML
			if ( typeof value === "string" && !rnoInnerhtml.test( value ) &&
				( jQuery.support.htmlSerialize || !rnoshimcache.test( value )  ) &&
				( jQuery.support.leadingWhitespace || !rleadingWhitespace.test( value ) ) &&
				!wrapMap[ ( rtagName.exec( value ) || ["", ""] )[1].toLowerCase() ] ) {

				value = value.replace( rxhtmlTag, "<$1></$2>" );

				try {
					for (; i < l; i++ ) {
						// Remove element nodes and prevent memory leaks
						elem = this[i] || {};
						if ( elem.nodeType === 1 ) {
							jQuery.cleanData( getAll( elem, false ) );
							elem.innerHTML = value;
						}
					}

					elem = 0;

				// If using innerHTML throws an exception, use the fallback method
				} catch(e) {}
			}

			if ( elem ) {
				this.empty().append( value );
			}
		}, null, value, arguments.length );
	},

	replaceWith: function( value ) {
		var isFunc = jQuery.isFunction( value );

		// Make sure that the elements are removed from the DOM before they are inserted
		// this can help fix replacing a parent with child elements
		if ( !isFunc && typeof value !== "string" ) {
			value = jQuery( value ).not( this ).detach();
		}

		return this.domManip( [ value ], true, function( elem ) {
			var next = this.nextSibling,
				parent = this.parentNode;

			if ( parent ) {
				jQuery( this ).remove();
				parent.insertBefore( elem, next );
			}
		});
	},

	detach: function( selector ) {
		return this.remove( selector, true );
	},

	domManip: function( args, table, callback ) {

		// Flatten any nested arrays
		args = core_concat.apply( [], args );

		var first, node, hasScripts,
			scripts, doc, fragment,
			i = 0,
			l = this.length,
			set = this,
			iNoClone = l - 1,
			value = args[0],
			isFunction = jQuery.isFunction( value );

		// We can't cloneNode fragments that contain checked, in WebKit
		if ( isFunction || !( l <= 1 || typeof value !== "string" || jQuery.support.checkClone || !rchecked.test( value ) ) ) {
			return this.each(function( index ) {
				var self = set.eq( index );
				if ( isFunction ) {
					args[0] = value.call( this, index, table ? self.html() : undefined );
				}
				self.domManip( args, table, callback );
			});
		}

		if ( l ) {
			fragment = jQuery.buildFragment( args, this[ 0 ].ownerDocument, false, this );
			first = fragment.firstChild;

			if ( fragment.childNodes.length === 1 ) {
				fragment = first;
			}

			if ( first ) {
				table = table && jQuery.nodeName( first, "tr" );
				scripts = jQuery.map( getAll( fragment, "script" ), disableScript );
				hasScripts = scripts.length;

				// Use the original fragment for the last item instead of the first because it can end up
				// being emptied incorrectly in certain situations (#8070).
				for ( ; i < l; i++ ) {
					node = fragment;

					if ( i !== iNoClone ) {
						node = jQuery.clone( node, true, true );

						// Keep references to cloned scripts for later restoration
						if ( hasScripts ) {
							jQuery.merge( scripts, getAll( node, "script" ) );
						}
					}

					callback.call(
						table && jQuery.nodeName( this[i], "table" ) ?
							findOrAppend( this[i], "tbody" ) :
							this[i],
						node,
						i
					);
				}

				if ( hasScripts ) {
					doc = scripts[ scripts.length - 1 ].ownerDocument;

					// Reenable scripts
					jQuery.map( scripts, restoreScript );

					// Evaluate executable scripts on first document insertion
					for ( i = 0; i < hasScripts; i++ ) {
						node = scripts[ i ];
						if ( rscriptType.test( node.type || "" ) &&
							!jQuery._data( node, "globalEval" ) && jQuery.contains( doc, node ) ) {

							if ( node.src ) {
								// Hope ajax is available...
								jQuery.ajax({
									url: node.src,
									type: "GET",
									dataType: "script",
									async: false,
									global: false,
									"throws": true
								});
							} else {
								jQuery.globalEval( ( node.text || node.textContent || node.innerHTML || "" ).replace( rcleanScript, "" ) );
							}
						}
					}
				}

				// Fix #11809: Avoid leaking memory
				fragment = first = null;
			}
		}

		return this;
	}
});

function findOrAppend( elem, tag ) {
	return elem.getElementsByTagName( tag )[0] || elem.appendChild( elem.ownerDocument.createElement( tag ) );
}

// Replace/restore the type attribute of script elements for safe DOM manipulation
function disableScript( elem ) {
	var attr = elem.getAttributeNode("type");
	elem.type = ( attr && attr.specified ) + "/" + elem.type;
	return elem;
}
function restoreScript( elem ) {
	var match = rscriptTypeMasked.exec( elem.type );
	if ( match ) {
		elem.type = match[1];
	} else {
		elem.removeAttribute("type");
	}
	return elem;
}

// Mark scripts as having already been evaluated
function setGlobalEval( elems, refElements ) {
	var elem,
		i = 0;
	for ( ; (elem = elems[i]) != null; i++ ) {
		jQuery._data( elem, "globalEval", !refElements || jQuery._data( refElements[i], "globalEval" ) );
	}
}

function cloneCopyEvent( src, dest ) {

	if ( dest.nodeType !== 1 || !jQuery.hasData( src ) ) {
		return;
	}

	var type, i, l,
		oldData = jQuery._data( src ),
		curData = jQuery._data( dest, oldData ),
		events = oldData.events;

	if ( events ) {
		delete curData.handle;
		curData.events = {};

		for ( type in events ) {
			for ( i = 0, l = events[ type ].length; i < l; i++ ) {
				jQuery.event.add( dest, type, events[ type ][ i ] );
			}
		}
	}

	// make the cloned public data object a copy from the original
	if ( curData.data ) {
		curData.data = jQuery.extend( {}, curData.data );
	}
}

function fixCloneNodeIssues( src, dest ) {
	var nodeName, e, data;

	// We do not need to do anything for non-Elements
	if ( dest.nodeType !== 1 ) {
		return;
	}

	nodeName = dest.nodeName.toLowerCase();

	// IE6-8 copies events bound via attachEvent when using cloneNode.
	if ( !jQuery.support.noCloneEvent && dest[ jQuery.expando ] ) {
		data = jQuery._data( dest );

		for ( e in data.events ) {
			jQuery.removeEvent( dest, e, data.handle );
		}

		// Event data gets referenced instead of copied if the expando gets copied too
		dest.removeAttribute( jQuery.expando );
	}

	// IE blanks contents when cloning scripts, and tries to evaluate newly-set text
	if ( nodeName === "script" && dest.text !== src.text ) {
		disableScript( dest ).text = src.text;
		restoreScript( dest );

	// IE6-10 improperly clones children of object elements using classid.
	// IE10 throws NoModificationAllowedError if parent is null, #12132.
	} else if ( nodeName === "object" ) {
		if ( dest.parentNode ) {
			dest.outerHTML = src.outerHTML;
		}

		// This path appears unavoidable for IE9. When cloning an object
		// element in IE9, the outerHTML strategy above is not sufficient.
		// If the src has innerHTML and the destination does not,
		// copy the src.innerHTML into the dest.innerHTML. #10324
		if ( jQuery.support.html5Clone && ( src.innerHTML && !jQuery.trim(dest.innerHTML) ) ) {
			dest.innerHTML = src.innerHTML;
		}

	} else if ( nodeName === "input" && manipulation_rcheckableType.test( src.type ) ) {
		// IE6-8 fails to persist the checked state of a cloned checkbox
		// or radio button. Worse, IE6-7 fail to give the cloned element
		// a checked appearance if the defaultChecked value isn't also set

		dest.defaultChecked = dest.checked = src.checked;

		// IE6-7 get confused and end up setting the value of a cloned
		// checkbox/radio button to an empty string instead of "on"
		if ( dest.value !== src.value ) {
			dest.value = src.value;
		}

	// IE6-8 fails to return the selected option to the default selected
	// state when cloning options
	} else if ( nodeName === "option" ) {
		dest.defaultSelected = dest.selected = src.defaultSelected;

	// IE6-8 fails to set the defaultValue to the correct value when
	// cloning other types of input fields
	} else if ( nodeName === "input" || nodeName === "textarea" ) {
		dest.defaultValue = src.defaultValue;
	}
}

jQuery.each({
	appendTo: "append",
	prependTo: "prepend",
	insertBefore: "before",
	insertAfter: "after",
	replaceAll: "replaceWith"
}, function( name, original ) {
	jQuery.fn[ name ] = function( selector ) {
		var elems,
			i = 0,
			ret = [],
			insert = jQuery( selector ),
			last = insert.length - 1;

		for ( ; i <= last; i++ ) {
			elems = i === last ? this : this.clone(true);
			jQuery( insert[i] )[ original ]( elems );

			// Modern browsers can apply jQuery collections as arrays, but oldIE needs a .get()
			core_push.apply( ret, elems.get() );
		}

		return this.pushStack( ret );
	};
});

function getAll( context, tag ) {
	var elems, elem,
		i = 0,
		found = typeof context.getElementsByTagName !== core_strundefined ? context.getElementsByTagName( tag || "*" ) :
			typeof context.querySelectorAll !== core_strundefined ? context.querySelectorAll( tag || "*" ) :
			undefined;

	if ( !found ) {
		for ( found = [], elems = context.childNodes || context; (elem = elems[i]) != null; i++ ) {
			if ( !tag || jQuery.nodeName( elem, tag ) ) {
				found.push( elem );
			} else {
				jQuery.merge( found, getAll( elem, tag ) );
			}
		}
	}

	return tag === undefined || tag && jQuery.nodeName( context, tag ) ?
		jQuery.merge( [ context ], found ) :
		found;
}

// Used in buildFragment, fixes the defaultChecked property
function fixDefaultChecked( elem ) {
	if ( manipulation_rcheckableType.test( elem.type ) ) {
		elem.defaultChecked = elem.checked;
	}
}

jQuery.extend({
	clone: function( elem, dataAndEvents, deepDataAndEvents ) {
		var destElements, node, clone, i, srcElements,
			inPage = jQuery.contains( elem.ownerDocument, elem );

		if ( jQuery.support.html5Clone || jQuery.isXMLDoc(elem) || !rnoshimcache.test( "<" + elem.nodeName + ">" ) ) {
			clone = elem.cloneNode( true );

		// IE<=8 does not properly clone detached, unknown element nodes
		} else {
			fragmentDiv.innerHTML = elem.outerHTML;
			fragmentDiv.removeChild( clone = fragmentDiv.firstChild );
		}

		if ( (!jQuery.support.noCloneEvent || !jQuery.support.noCloneChecked) &&
				(elem.nodeType === 1 || elem.nodeType === 11) && !jQuery.isXMLDoc(elem) ) {

			// We eschew Sizzle here for performance reasons: http://jsperf.com/getall-vs-sizzle/2
			destElements = getAll( clone );
			srcElements = getAll( elem );

			// Fix all IE cloning issues
			for ( i = 0; (node = srcElements[i]) != null; ++i ) {
				// Ensure that the destination node is not null; Fixes #9587
				if ( destElements[i] ) {
					fixCloneNodeIssues( node, destElements[i] );
				}
			}
		}

		// Copy the events from the original to the clone
		if ( dataAndEvents ) {
			if ( deepDataAndEvents ) {
				srcElements = srcElements || getAll( elem );
				destElements = destElements || getAll( clone );

				for ( i = 0; (node = srcElements[i]) != null; i++ ) {
					cloneCopyEvent( node, destElements[i] );
				}
			} else {
				cloneCopyEvent( elem, clone );
			}
		}

		// Preserve script evaluation history
		destElements = getAll( clone, "script" );
		if ( destElements.length > 0 ) {
			setGlobalEval( destElements, !inPage && getAll( elem, "script" ) );
		}

		destElements = srcElements = node = null;

		// Return the cloned set
		return clone;
	},

	buildFragment: function( elems, context, scripts, selection ) {
		var j, elem, contains,
			tmp, tag, tbody, wrap,
			l = elems.length,

			// Ensure a safe fragment
			safe = createSafeFragment( context ),

			nodes = [],
			i = 0;

		for ( ; i < l; i++ ) {
			elem = elems[ i ];

			if ( elem || elem === 0 ) {

				// Add nodes directly
				if ( jQuery.type( elem ) === "object" ) {
					jQuery.merge( nodes, elem.nodeType ? [ elem ] : elem );

				// Convert non-html into a text node
				} else if ( !rhtml.test( elem ) ) {
					nodes.push( context.createTextNode( elem ) );

				// Convert html into DOM nodes
				} else {
					tmp = tmp || safe.appendChild( context.createElement("div") );

					// Deserialize a standard representation
					tag = ( rtagName.exec( elem ) || ["", ""] )[1].toLowerCase();
					wrap = wrapMap[ tag ] || wrapMap._default;

					tmp.innerHTML = wrap[1] + elem.replace( rxhtmlTag, "<$1></$2>" ) + wrap[2];

					// Descend through wrappers to the right content
					j = wrap[0];
					while ( j-- ) {
						tmp = tmp.lastChild;
					}

					// Manually add leading whitespace removed by IE
					if ( !jQuery.support.leadingWhitespace && rleadingWhitespace.test( elem ) ) {
						nodes.push( context.createTextNode( rleadingWhitespace.exec( elem )[0] ) );
					}

					// Remove IE's autoinserted <tbody> from table fragments
					if ( !jQuery.support.tbody ) {

						// String was a <table>, *may* have spurious <tbody>
						elem = tag === "table" && !rtbody.test( elem ) ?
							tmp.firstChild :

							// String was a bare <thead> or <tfoot>
							wrap[1] === "<table>" && !rtbody.test( elem ) ?
								tmp :
								0;

						j = elem && elem.childNodes.length;
						while ( j-- ) {
							if ( jQuery.nodeName( (tbody = elem.childNodes[j]), "tbody" ) && !tbody.childNodes.length ) {
								elem.removeChild( tbody );
							}
						}
					}

					jQuery.merge( nodes, tmp.childNodes );

					// Fix #12392 for WebKit and IE > 9
					tmp.textContent = "";

					// Fix #12392 for oldIE
					while ( tmp.firstChild ) {
						tmp.removeChild( tmp.firstChild );
					}

					// Remember the top-level container for proper cleanup
					tmp = safe.lastChild;
				}
			}
		}

		// Fix #11356: Clear elements from fragment
		if ( tmp ) {
			safe.removeChild( tmp );
		}

		// Reset defaultChecked for any radios and checkboxes
		// about to be appended to the DOM in IE 6/7 (#8060)
		if ( !jQuery.support.appendChecked ) {
			jQuery.grep( getAll( nodes, "input" ), fixDefaultChecked );
		}

		i = 0;
		while ( (elem = nodes[ i++ ]) ) {

			// #4087 - If origin and destination elements are the same, and this is
			// that element, do not do anything
			if ( selection && jQuery.inArray( elem, selection ) !== -1 ) {
				continue;
			}

			contains = jQuery.contains( elem.ownerDocument, elem );

			// Append to fragment
			tmp = getAll( safe.appendChild( elem ), "script" );

			// Preserve script evaluation history
			if ( contains ) {
				setGlobalEval( tmp );
			}

			// Capture executables
			if ( scripts ) {
				j = 0;
				while ( (elem = tmp[ j++ ]) ) {
					if ( rscriptType.test( elem.type || "" ) ) {
						scripts.push( elem );
					}
				}
			}
		}

		tmp = null;

		return safe;
	},

	cleanData: function( elems, /* internal */ acceptData ) {
		var elem, type, id, data,
			i = 0,
			internalKey = jQuery.expando,
			cache = jQuery.cache,
			deleteExpando = jQuery.support.deleteExpando,
			special = jQuery.event.special;

		for ( ; (elem = elems[i]) != null; i++ ) {

			if ( acceptData || jQuery.acceptData( elem ) ) {

				id = elem[ internalKey ];
				data = id && cache[ id ];

				if ( data ) {
					if ( data.events ) {
						for ( type in data.events ) {
							if ( special[ type ] ) {
								jQuery.event.remove( elem, type );

							// This is a shortcut to avoid jQuery.event.remove's overhead
							} else {
								jQuery.removeEvent( elem, type, data.handle );
							}
						}
					}

					// Remove cache only if it was not already removed by jQuery.event.remove
					if ( cache[ id ] ) {

						delete cache[ id ];

						// IE does not allow us to delete expando properties from nodes,
						// nor does it have a removeAttribute function on Document nodes;
						// we must handle all of these cases
						if ( deleteExpando ) {
							delete elem[ internalKey ];

						} else if ( typeof elem.removeAttribute !== core_strundefined ) {
							elem.removeAttribute( internalKey );

						} else {
							elem[ internalKey ] = null;
						}

						core_deletedIds.push( id );
					}
				}
			}
		}
	}
});
var iframe, getStyles, curCSS,
	ralpha = /alpha\([^)]*\)/i,
	ropacity = /opacity\s*=\s*([^)]*)/,
	rposition = /^(top|right|bottom|left)$/,
	// swappable if display is none or starts with table except "table", "table-cell", or "table-caption"
	// see here for display values: https://developer.mozilla.org/en-US/docs/CSS/display
	rdisplayswap = /^(none|table(?!-c[ea]).+)/,
	rmargin = /^margin/,
	rnumsplit = new RegExp( "^(" + core_pnum + ")(.*)$", "i" ),
	rnumnonpx = new RegExp( "^(" + core_pnum + ")(?!px)[a-z%]+$", "i" ),
	rrelNum = new RegExp( "^([+-])=(" + core_pnum + ")", "i" ),
	elemdisplay = { BODY: "block" },

	cssShow = { position: "absolute", visibility: "hidden", display: "block" },
	cssNormalTransform = {
		letterSpacing: 0,
		fontWeight: 400
	},

	cssExpand = [ "Top", "Right", "Bottom", "Left" ],
	cssPrefixes = [ "Webkit", "O", "Moz", "ms" ];

// return a css property mapped to a potentially vendor prefixed property
function vendorPropName( style, name ) {

	// shortcut for names that are not vendor prefixed
	if ( name in style ) {
		return name;
	}

	// check for vendor prefixed names
	var capName = name.charAt(0).toUpperCase() + name.slice(1),
		origName = name,
		i = cssPrefixes.length;

	while ( i-- ) {
		name = cssPrefixes[ i ] + capName;
		if ( name in style ) {
			return name;
		}
	}

	return origName;
}

function isHidden( elem, el ) {
	// isHidden might be called from jQuery#filter function;
	// in that case, element will be second argument
	elem = el || elem;
	return jQuery.css( elem, "display" ) === "none" || !jQuery.contains( elem.ownerDocument, elem );
}

function showHide( elements, show ) {
	var display, elem, hidden,
		values = [],
		index = 0,
		length = elements.length;

	for ( ; index < length; index++ ) {
		elem = elements[ index ];
		if ( !elem.style ) {
			continue;
		}

		values[ index ] = jQuery._data( elem, "olddisplay" );
		display = elem.style.display;
		if ( show ) {
			// Reset the inline display of this element to learn if it is
			// being hidden by cascaded rules or not
			if ( !values[ index ] && display === "none" ) {
				elem.style.display = "";
			}

			// Set elements which have been overridden with display: none
			// in a stylesheet to whatever the default browser style is
			// for such an element
			if ( elem.style.display === "" && isHidden( elem ) ) {
				values[ index ] = jQuery._data( elem, "olddisplay", css_defaultDisplay(elem.nodeName) );
			}
		} else {

			if ( !values[ index ] ) {
				hidden = isHidden( elem );

				if ( display && display !== "none" || !hidden ) {
					jQuery._data( elem, "olddisplay", hidden ? display : jQuery.css( elem, "display" ) );
				}
			}
		}
	}

	// Set the display of most of the elements in a second loop
	// to avoid the constant reflow
	for ( index = 0; index < length; index++ ) {
		elem = elements[ index ];
		if ( !elem.style ) {
			continue;
		}
		if ( !show || elem.style.display === "none" || elem.style.display === "" ) {
			elem.style.display = show ? values[ index ] || "" : "none";
		}
	}

	return elements;
}

jQuery.fn.extend({
	css: function( name, value ) {
		return jQuery.access( this, function( elem, name, value ) {
			var len, styles,
				map = {},
				i = 0;

			if ( jQuery.isArray( name ) ) {
				styles = getStyles( elem );
				len = name.length;

				for ( ; i < len; i++ ) {
					map[ name[ i ] ] = jQuery.css( elem, name[ i ], false, styles );
				}

				return map;
			}

			return value !== undefined ?
				jQuery.style( elem, name, value ) :
				jQuery.css( elem, name );
		}, name, value, arguments.length > 1 );
	},
	show: function() {
		return showHide( this, true );
	},
	hide: function() {
		return showHide( this );
	},
	toggle: function( state ) {
		var bool = typeof state === "boolean";

		return this.each(function() {
			if ( bool ? state : isHidden( this ) ) {
				jQuery( this ).show();
			} else {
				jQuery( this ).hide();
			}
		});
	}
});

jQuery.extend({
	// Add in style property hooks for overriding the default
	// behavior of getting and setting a style property
	cssHooks: {
		opacity: {
			get: function( elem, computed ) {
				if ( computed ) {
					// We should always get a number back from opacity
					var ret = curCSS( elem, "opacity" );
					return ret === "" ? "1" : ret;
				}
			}
		}
	},

	// Exclude the following css properties to add px
	cssNumber: {
		"columnCount": true,
		"fillOpacity": true,
		"fontWeight": true,
		"lineHeight": true,
		"opacity": true,
		"orphans": true,
		"widows": true,
		"zIndex": true,
		"zoom": true
	},

	// Add in properties whose names you wish to fix before
	// setting or getting the value
	cssProps: {
		// normalize float css property
		"float": jQuery.support.cssFloat ? "cssFloat" : "styleFloat"
	},

	// Get and set the style property on a DOM Node
	style: function( elem, name, value, extra ) {
		// Don't set styles on text and comment nodes
		if ( !elem || elem.nodeType === 3 || elem.nodeType === 8 || !elem.style ) {
			return;
		}

		// Make sure that we're working with the right name
		var ret, type, hooks,
			origName = jQuery.camelCase( name ),
			style = elem.style;

		name = jQuery.cssProps[ origName ] || ( jQuery.cssProps[ origName ] = vendorPropName( style, origName ) );

		// gets hook for the prefixed version
		// followed by the unprefixed version
		hooks = jQuery.cssHooks[ name ] || jQuery.cssHooks[ origName ];

		// Check if we're setting a value
		if ( value !== undefined ) {
			type = typeof value;

			// convert relative number strings (+= or -=) to relative numbers. #7345
			if ( type === "string" && (ret = rrelNum.exec( value )) ) {
				value = ( ret[1] + 1 ) * ret[2] + parseFloat( jQuery.css( elem, name ) );
				// Fixes bug #9237
				type = "number";
			}

			// Make sure that NaN and null values aren't set. See: #7116
			if ( value == null || type === "number" && isNaN( value ) ) {
				return;
			}

			// If a number was passed in, add 'px' to the (except for certain CSS properties)
			if ( type === "number" && !jQuery.cssNumber[ origName ] ) {
				value += "px";
			}

			// Fixes #8908, it can be done more correctly by specifing setters in cssHooks,
			// but it would mean to define eight (for every problematic property) identical functions
			if ( !jQuery.support.clearCloneStyle && value === "" && name.indexOf("background") === 0 ) {
				style[ name ] = "inherit";
			}

			// If a hook was provided, use that value, otherwise just set the specified value
			if ( !hooks || !("set" in hooks) || (value = hooks.set( elem, value, extra )) !== undefined ) {

				// Wrapped to prevent IE from throwing errors when 'invalid' values are provided
				// Fixes bug #5509
				try {
					style[ name ] = value;
				} catch(e) {}
			}

		} else {
			// If a hook was provided get the non-computed value from there
			if ( hooks && "get" in hooks && (ret = hooks.get( elem, false, extra )) !== undefined ) {
				return ret;
			}

			// Otherwise just get the value from the style object
			return style[ name ];
		}
	},

	css: function( elem, name, extra, styles ) {
		var num, val, hooks,
			origName = jQuery.camelCase( name );

		// Make sure that we're working with the right name
		name = jQuery.cssProps[ origName ] || ( jQuery.cssProps[ origName ] = vendorPropName( elem.style, origName ) );

		// gets hook for the prefixed version
		// followed by the unprefixed version
		hooks = jQuery.cssHooks[ name ] || jQuery.cssHooks[ origName ];

		// If a hook was provided get the computed value from there
		if ( hooks && "get" in hooks ) {
			val = hooks.get( elem, true, extra );
		}

		// Otherwise, if a way to get the computed value exists, use that
		if ( val === undefined ) {
			val = curCSS( elem, name, styles );
		}

		//convert "normal" to computed value
		if ( val === "normal" && name in cssNormalTransform ) {
			val = cssNormalTransform[ name ];
		}

		// Return, converting to number if forced or a qualifier was provided and val looks numeric
		if ( extra === "" || extra ) {
			num = parseFloat( val );
			return extra === true || jQuery.isNumeric( num ) ? num || 0 : val;
		}
		return val;
	},

	// A method for quickly swapping in/out CSS properties to get correct calculations
	swap: function( elem, options, callback, args ) {
		var ret, name,
			old = {};

		// Remember the old values, and insert the new ones
		for ( name in options ) {
			old[ name ] = elem.style[ name ];
			elem.style[ name ] = options[ name ];
		}

		ret = callback.apply( elem, args || [] );

		// Revert the old values
		for ( name in options ) {
			elem.style[ name ] = old[ name ];
		}

		return ret;
	}
});

// NOTE: we've included the "window" in window.getComputedStyle
// because jsdom on node.js will break without it.
if ( window.getComputedStyle ) {
	getStyles = function( elem ) {
		return window.getComputedStyle( elem, null );
	};

	curCSS = function( elem, name, _computed ) {
		var width, minWidth, maxWidth,
			computed = _computed || getStyles( elem ),

			// getPropertyValue is only needed for .css('filter') in IE9, see #12537
			ret = computed ? computed.getPropertyValue( name ) || computed[ name ] : undefined,
			style = elem.style;

		if ( computed ) {

			if ( ret === "" && !jQuery.contains( elem.ownerDocument, elem ) ) {
				ret = jQuery.style( elem, name );
			}

			// A tribute to the "awesome hack by Dean Edwards"
			// Chrome < 17 and Safari 5.0 uses "computed value" instead of "used value" for margin-right
			// Safari 5.1.7 (at least) returns percentage for a larger set of values, but width seems to be reliably pixels
			// this is against the CSSOM draft spec: http://dev.w3.org/csswg/cssom/#resolved-values
			if ( rnumnonpx.test( ret ) && rmargin.test( name ) ) {

				// Remember the original values
				width = style.width;
				minWidth = style.minWidth;
				maxWidth = style.maxWidth;

				// Put in the new values to get a computed value out
				style.minWidth = style.maxWidth = style.width = ret;
				ret = computed.width;

				// Revert the changed values
				style.width = width;
				style.minWidth = minWidth;
				style.maxWidth = maxWidth;
			}
		}

		return ret;
	};
} else if ( document.documentElement.currentStyle ) {
	getStyles = function( elem ) {
		return elem.currentStyle;
	};

	curCSS = function( elem, name, _computed ) {
		var left, rs, rsLeft,
			computed = _computed || getStyles( elem ),
			ret = computed ? computed[ name ] : undefined,
			style = elem.style;

		// Avoid setting ret to empty string here
		// so we don't default to auto
		if ( ret == null && style && style[ name ] ) {
			ret = style[ name ];
		}

		// From the awesome hack by Dean Edwards
		// http://erik.eae.net/archives/2007/07/27/18.54.15/#comment-102291

		// If we're not dealing with a regular pixel number
		// but a number that has a weird ending, we need to convert it to pixels
		// but not position css attributes, as those are proportional to the parent element instead
		// and we can't measure the parent instead because it might trigger a "stacking dolls" problem
		if ( rnumnonpx.test( ret ) && !rposition.test( name ) ) {

			// Remember the original values
			left = style.left;
			rs = elem.runtimeStyle;
			rsLeft = rs && rs.left;

			// Put in the new values to get a computed value out
			if ( rsLeft ) {
				rs.left = elem.currentStyle.left;
			}
			style.left = name === "fontSize" ? "1em" : ret;
			ret = style.pixelLeft + "px";

			// Revert the changed values
			style.left = left;
			if ( rsLeft ) {
				rs.left = rsLeft;
			}
		}

		return ret === "" ? "auto" : ret;
	};
}

function setPositiveNumber( elem, value, subtract ) {
	var matches = rnumsplit.exec( value );
	return matches ?
		// Guard against undefined "subtract", e.g., when used as in cssHooks
		Math.max( 0, matches[ 1 ] - ( subtract || 0 ) ) + ( matches[ 2 ] || "px" ) :
		value;
}

function augmentWidthOrHeight( elem, name, extra, isBorderBox, styles ) {
	var i = extra === ( isBorderBox ? "border" : "content" ) ?
		// If we already have the right measurement, avoid augmentation
		4 :
		// Otherwise initialize for horizontal or vertical properties
		name === "width" ? 1 : 0,

		val = 0;

	for ( ; i < 4; i += 2 ) {
		// both box models exclude margin, so add it if we want it
		if ( extra === "margin" ) {
			val += jQuery.css( elem, extra + cssExpand[ i ], true, styles );
		}

		if ( isBorderBox ) {
			// border-box includes padding, so remove it if we want content
			if ( extra === "content" ) {
				val -= jQuery.css( elem, "padding" + cssExpand[ i ], true, styles );
			}

			// at this point, extra isn't border nor margin, so remove border
			if ( extra !== "margin" ) {
				val -= jQuery.css( elem, "border" + cssExpand[ i ] + "Width", true, styles );
			}
		} else {
			// at this point, extra isn't content, so add padding
			val += jQuery.css( elem, "padding" + cssExpand[ i ], true, styles );

			// at this point, extra isn't content nor padding, so add border
			if ( extra !== "padding" ) {
				val += jQuery.css( elem, "border" + cssExpand[ i ] + "Width", true, styles );
			}
		}
	}

	return val;
}

function getWidthOrHeight( elem, name, extra ) {

	// Start with offset property, which is equivalent to the border-box value
	var valueIsBorderBox = true,
		val = name === "width" ? elem.offsetWidth : elem.offsetHeight,
		styles = getStyles( elem ),
		isBorderBox = jQuery.support.boxSizing && jQuery.css( elem, "boxSizing", false, styles ) === "border-box";

	// some non-html elements return undefined for offsetWidth, so check for null/undefined
	// svg - https://bugzilla.mozilla.org/show_bug.cgi?id=649285
	// MathML - https://bugzilla.mozilla.org/show_bug.cgi?id=491668
	if ( val <= 0 || val == null ) {
		// Fall back to computed then uncomputed css if necessary
		val = curCSS( elem, name, styles );
		if ( val < 0 || val == null ) {
			val = elem.style[ name ];
		}

		// Computed unit is not pixels. Stop here and return.
		if ( rnumnonpx.test(val) ) {
			return val;
		}

		// we need the check for style in case a browser which returns unreliable values
		// for getComputedStyle silently falls back to the reliable elem.style
		valueIsBorderBox = isBorderBox && ( jQuery.support.boxSizingReliable || val === elem.style[ name ] );

		// Normalize "", auto, and prepare for extra
		val = parseFloat( val ) || 0;
	}

	// use the active box-sizing model to add/subtract irrelevant styles
	return ( val +
		augmentWidthOrHeight(
			elem,
			name,
			extra || ( isBorderBox ? "border" : "content" ),
			valueIsBorderBox,
			styles
		)
	) + "px";
}

// Try to determine the default display value of an element
function css_defaultDisplay( nodeName ) {
	var doc = document,
		display = elemdisplay[ nodeName ];

	if ( !display ) {
		display = actualDisplay( nodeName, doc );

		// If the simple way fails, read from inside an iframe
		if ( display === "none" || !display ) {
			// Use the already-created iframe if possible
			iframe = ( iframe ||
				jQuery("<iframe frameborder='0' width='0' height='0'/>")
				.css( "cssText", "display:block !important" )
			).appendTo( doc.documentElement );

			// Always write a new HTML skeleton so Webkit and Firefox don't choke on reuse
			doc = ( iframe[0].contentWindow || iframe[0].contentDocument ).document;
			doc.write("<!doctype html><html><body>");
			doc.close();

			display = actualDisplay( nodeName, doc );
			iframe.detach();
		}

		// Store the correct default display
		elemdisplay[ nodeName ] = display;
	}

	return display;
}

// Called ONLY from within css_defaultDisplay
function actualDisplay( name, doc ) {
	var elem = jQuery( doc.createElement( name ) ).appendTo( doc.body ),
		display = jQuery.css( elem[0], "display" );
	elem.remove();
	return display;
}

jQuery.each([ "height", "width" ], function( i, name ) {
	jQuery.cssHooks[ name ] = {
		get: function( elem, computed, extra ) {
			if ( computed ) {
				// certain elements can have dimension info if we invisibly show them
				// however, it must have a current display style that would benefit from this
				return elem.offsetWidth === 0 && rdisplayswap.test( jQuery.css( elem, "display" ) ) ?
					jQuery.swap( elem, cssShow, function() {
						return getWidthOrHeight( elem, name, extra );
					}) :
					getWidthOrHeight( elem, name, extra );
			}
		},

		set: function( elem, value, extra ) {
			var styles = extra && getStyles( elem );
			return setPositiveNumber( elem, value, extra ?
				augmentWidthOrHeight(
					elem,
					name,
					extra,
					jQuery.support.boxSizing && jQuery.css( elem, "boxSizing", false, styles ) === "border-box",
					styles
				) : 0
			);
		}
	};
});

if ( !jQuery.support.opacity ) {
	jQuery.cssHooks.opacity = {
		get: function( elem, computed ) {
			// IE uses filters for opacity
			return ropacity.test( (computed && elem.currentStyle ? elem.currentStyle.filter : elem.style.filter) || "" ) ?
				( 0.01 * parseFloat( RegExp.$1 ) ) + "" :
				computed ? "1" : "";
		},

		set: function( elem, value ) {
			var style = elem.style,
				currentStyle = elem.currentStyle,
				opacity = jQuery.isNumeric( value ) ? "alpha(opacity=" + value * 100 + ")" : "",
				filter = currentStyle && currentStyle.filter || style.filter || "";

			// IE has trouble with opacity if it does not have layout
			// Force it by setting the zoom level
			style.zoom = 1;

			// if setting opacity to 1, and no other filters exist - attempt to remove filter attribute #6652
			// if value === "", then remove inline opacity #12685
			if ( ( value >= 1 || value === "" ) &&
					jQuery.trim( filter.replace( ralpha, "" ) ) === "" &&
					style.removeAttribute ) {

				// Setting style.filter to null, "" & " " still leave "filter:" in the cssText
				// if "filter:" is present at all, clearType is disabled, we want to avoid this
				// style.removeAttribute is IE Only, but so apparently is this code path...
				style.removeAttribute( "filter" );

				// if there is no filter style applied in a css rule or unset inline opacity, we are done
				if ( value === "" || currentStyle && !currentStyle.filter ) {
					return;
				}
			}

			// otherwise, set new filter values
			style.filter = ralpha.test( filter ) ?
				filter.replace( ralpha, opacity ) :
				filter + " " + opacity;
		}
	};
}

// These hooks cannot be added until DOM ready because the support test
// for it is not run until after DOM ready
jQuery(function() {
	if ( !jQuery.support.reliableMarginRight ) {
		jQuery.cssHooks.marginRight = {
			get: function( elem, computed ) {
				if ( computed ) {
					// WebKit Bug 13343 - getComputedStyle returns wrong value for margin-right
					// Work around by temporarily setting element display to inline-block
					return jQuery.swap( elem, { "display": "inline-block" },
						curCSS, [ elem, "marginRight" ] );
				}
			}
		};
	}

	// Webkit bug: https://bugs.webkit.org/show_bug.cgi?id=29084
	// getComputedStyle returns percent when specified for top/left/bottom/right
	// rather than make the css module depend on the offset module, we just check for it here
	if ( !jQuery.support.pixelPosition && jQuery.fn.position ) {
		jQuery.each( [ "top", "left" ], function( i, prop ) {
			jQuery.cssHooks[ prop ] = {
				get: function( elem, computed ) {
					if ( computed ) {
						computed = curCSS( elem, prop );
						// if curCSS returns percentage, fallback to offset
						return rnumnonpx.test( computed ) ?
							jQuery( elem ).position()[ prop ] + "px" :
							computed;
					}
				}
			};
		});
	}

});

if ( jQuery.expr && jQuery.expr.filters ) {
	jQuery.expr.filters.hidden = function( elem ) {
		// Support: Opera <= 12.12
		// Opera reports offsetWidths and offsetHeights less than zero on some elements
		return elem.offsetWidth <= 0 && elem.offsetHeight <= 0 ||
			(!jQuery.support.reliableHiddenOffsets && ((elem.style && elem.style.display) || jQuery.css( elem, "display" )) === "none");
	};

	jQuery.expr.filters.visible = function( elem ) {
		return !jQuery.expr.filters.hidden( elem );
	};
}

// These hooks are used by animate to expand properties
jQuery.each({
	margin: "",
	padding: "",
	border: "Width"
}, function( prefix, suffix ) {
	jQuery.cssHooks[ prefix + suffix ] = {
		expand: function( value ) {
			var i = 0,
				expanded = {},

				// assumes a single number if not a string
				parts = typeof value === "string" ? value.split(" ") : [ value ];

			for ( ; i < 4; i++ ) {
				expanded[ prefix + cssExpand[ i ] + suffix ] =
					parts[ i ] || parts[ i - 2 ] || parts[ 0 ];
			}

			return expanded;
		}
	};

	if ( !rmargin.test( prefix ) ) {
		jQuery.cssHooks[ prefix + suffix ].set = setPositiveNumber;
	}
});
var r20 = /%20/g,
	rbracket = /\[\]$/,
	rCRLF = /\r?\n/g,
	rsubmitterTypes = /^(?:submit|button|image|reset|file)$/i,
	rsubmittable = /^(?:input|select|textarea|keygen)/i;

jQuery.fn.extend({
	serialize: function() {
		return jQuery.param( this.serializeArray() );
	},
	serializeArray: function() {
		return this.map(function(){
			// Can add propHook for "elements" to filter or add form elements
			var elements = jQuery.prop( this, "elements" );
			return elements ? jQuery.makeArray( elements ) : this;
		})
		.filter(function(){
			var type = this.type;
			// Use .is(":disabled") so that fieldset[disabled] works
			return this.name && !jQuery( this ).is( ":disabled" ) &&
				rsubmittable.test( this.nodeName ) && !rsubmitterTypes.test( type ) &&
				( this.checked || !manipulation_rcheckableType.test( type ) );
		})
		.map(function( i, elem ){
			var val = jQuery( this ).val();

			return val == null ?
				null :
				jQuery.isArray( val ) ?
					jQuery.map( val, function( val ){
						return { name: elem.name, value: val.replace( rCRLF, "\r\n" ) };
					}) :
					{ name: elem.name, value: val.replace( rCRLF, "\r\n" ) };
		}).get();
	}
});

//Serialize an array of form elements or a set of
//key/values into a query string
jQuery.param = function( a, traditional ) {
	var prefix,
		s = [],
		add = function( key, value ) {
			// If value is a function, invoke it and return its value
			value = jQuery.isFunction( value ) ? value() : ( value == null ? "" : value );
			s[ s.length ] = encodeURIComponent( key ) + "=" + encodeURIComponent( value );
		};

	// Set traditional to true for jQuery <= 1.3.2 behavior.
	if ( traditional === undefined ) {
		traditional = jQuery.ajaxSettings && jQuery.ajaxSettings.traditional;
	}

	// If an array was passed in, assume that it is an array of form elements.
	if ( jQuery.isArray( a ) || ( a.jquery && !jQuery.isPlainObject( a ) ) ) {
		// Serialize the form elements
		jQuery.each( a, function() {
			add( this.name, this.value );
		});

	} else {
		// If traditional, encode the "old" way (the way 1.3.2 or older
		// did it), otherwise encode params recursively.
		for ( prefix in a ) {
			buildParams( prefix, a[ prefix ], traditional, add );
		}
	}

	// Return the resulting serialization
	return s.join( "&" ).replace( r20, "+" );
};

function buildParams( prefix, obj, traditional, add ) {
	var name;

	if ( jQuery.isArray( obj ) ) {
		// Serialize array item.
		jQuery.each( obj, function( i, v ) {
			if ( traditional || rbracket.test( prefix ) ) {
				// Treat each array item as a scalar.
				add( prefix, v );

			} else {
				// Item is non-scalar (array or object), encode its numeric index.
				buildParams( prefix + "[" + ( typeof v === "object" ? i : "" ) + "]", v, traditional, add );
			}
		});

	} else if ( !traditional && jQuery.type( obj ) === "object" ) {
		// Serialize object item.
		for ( name in obj ) {
			buildParams( prefix + "[" + name + "]", obj[ name ], traditional, add );
		}

	} else {
		// Serialize scalar item.
		add( prefix, obj );
	}
}
jQuery.each( ("blur focus focusin focusout load resize scroll unload click dblclick " +
	"mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave " +
	"change select submit keydown keypress keyup error contextmenu").split(" "), function( i, name ) {

	// Handle event binding
	jQuery.fn[ name ] = function( data, fn ) {
		return arguments.length > 0 ?
			this.on( name, null, data, fn ) :
			this.trigger( name );
	};
});

jQuery.fn.hover = function( fnOver, fnOut ) {
	return this.mouseenter( fnOver ).mouseleave( fnOut || fnOver );
};
var
	// Document location
	ajaxLocParts,
	ajaxLocation,
	ajax_nonce = jQuery.now(),

	ajax_rquery = /\?/,
	rhash = /#.*$/,
	rts = /([?&])_=[^&]*/,
	rheaders = /^(.*?):[ \t]*([^\r\n]*)\r?$/mg, // IE leaves an \r character at EOL
	// #7653, #8125, #8152: local protocol detection
	rlocalProtocol = /^(?:about|app|app-storage|.+-extension|file|res|widget):$/,
	rnoContent = /^(?:GET|HEAD)$/,
	rprotocol = /^\/\//,
	rurl = /^([\w.+-]+:)(?:\/\/([^\/?#:]*)(?::(\d+)|)|)/,

	// Keep a copy of the old load method
	_load = jQuery.fn.load,

	/* Prefilters
	 * 1) They are useful to introduce custom dataTypes (see ajax/jsonp.js for an example)
	 * 2) These are called:
	 *    - BEFORE asking for a transport
	 *    - AFTER param serialization (s.data is a string if s.processData is true)
	 * 3) key is the dataType
	 * 4) the catchall symbol "*" can be used
	 * 5) execution will start with transport dataType and THEN continue down to "*" if needed
	 */
	prefilters = {},

	/* Transports bindings
	 * 1) key is the dataType
	 * 2) the catchall symbol "*" can be used
	 * 3) selection will start with transport dataType and THEN go to "*" if needed
	 */
	transports = {},

	// Avoid comment-prolog char sequence (#10098); must appease lint and evade compression
	allTypes = "*/".concat("*");

// #8138, IE may throw an exception when accessing
// a field from window.location if document.domain has been set
try {
	ajaxLocation = location.href;
} catch( e ) {
	// Use the href attribute of an A element
	// since IE will modify it given document.location
	ajaxLocation = document.createElement( "a" );
	ajaxLocation.href = "";
	ajaxLocation = ajaxLocation.href;
}

// Segment location into parts
ajaxLocParts = rurl.exec( ajaxLocation.toLowerCase() ) || [];

// Base "constructor" for jQuery.ajaxPrefilter and jQuery.ajaxTransport
function addToPrefiltersOrTransports( structure ) {

	// dataTypeExpression is optional and defaults to "*"
	return function( dataTypeExpression, func ) {

		if ( typeof dataTypeExpression !== "string" ) {
			func = dataTypeExpression;
			dataTypeExpression = "*";
		}

		var dataType,
			i = 0,
			dataTypes = dataTypeExpression.toLowerCase().match( core_rnotwhite ) || [];

		if ( jQuery.isFunction( func ) ) {
			// For each dataType in the dataTypeExpression
			while ( (dataType = dataTypes[i++]) ) {
				// Prepend if requested
				if ( dataType[0] === "+" ) {
					dataType = dataType.slice( 1 ) || "*";
					(structure[ dataType ] = structure[ dataType ] || []).unshift( func );

				// Otherwise append
				} else {
					(structure[ dataType ] = structure[ dataType ] || []).push( func );
				}
			}
		}
	};
}

// Base inspection function for prefilters and transports
function inspectPrefiltersOrTransports( structure, options, originalOptions, jqXHR ) {

	var inspected = {},
		seekingTransport = ( structure === transports );

	function inspect( dataType ) {
		var selected;
		inspected[ dataType ] = true;
		jQuery.each( structure[ dataType ] || [], function( _, prefilterOrFactory ) {
			var dataTypeOrTransport = prefilterOrFactory( options, originalOptions, jqXHR );
			if( typeof dataTypeOrTransport === "string" && !seekingTransport && !inspected[ dataTypeOrTransport ] ) {
				options.dataTypes.unshift( dataTypeOrTransport );
				inspect( dataTypeOrTransport );
				return false;
			} else if ( seekingTransport ) {
				return !( selected = dataTypeOrTransport );
			}
		});
		return selected;
	}

	return inspect( options.dataTypes[ 0 ] ) || !inspected[ "*" ] && inspect( "*" );
}

// A special extend for ajax options
// that takes "flat" options (not to be deep extended)
// Fixes #9887
function ajaxExtend( target, src ) {
	var deep, key,
		flatOptions = jQuery.ajaxSettings.flatOptions || {};

	for ( key in src ) {
		if ( src[ key ] !== undefined ) {
			( flatOptions[ key ] ? target : ( deep || (deep = {}) ) )[ key ] = src[ key ];
		}
	}
	if ( deep ) {
		jQuery.extend( true, target, deep );
	}

	return target;
}

jQuery.fn.load = function( url, params, callback ) {
	if ( typeof url !== "string" && _load ) {
		return _load.apply( this, arguments );
	}

	var selector, response, type,
		self = this,
		off = url.indexOf(" ");

	if ( off >= 0 ) {
		selector = url.slice( off, url.length );
		url = url.slice( 0, off );
	}

	// If it's a function
	if ( jQuery.isFunction( params ) ) {

		// We assume that it's the callback
		callback = params;
		params = undefined;

	// Otherwise, build a param string
	} else if ( params && typeof params === "object" ) {
		type = "POST";
	}

	// If we have elements to modify, make the request
	if ( self.length > 0 ) {
		jQuery.ajax({
			url: url,

			// if "type" variable is undefined, then "GET" method will be used
			type: type,
			dataType: "html",
			data: params
		}).done(function( responseText ) {

			// Save response for use in complete callback
			response = arguments;

			self.html( selector ?

				// If a selector was specified, locate the right elements in a dummy div
				// Exclude scripts to avoid IE 'Permission Denied' errors
				jQuery("<div>").append( jQuery.parseHTML( responseText ) ).find( selector ) :

				// Otherwise use the full result
				responseText );

		}).complete( callback && function( jqXHR, status ) {
			self.each( callback, response || [ jqXHR.responseText, status, jqXHR ] );
		});
	}

	return this;
};

// Attach a bunch of functions for handling common AJAX events
jQuery.each( [ "ajaxStart", "ajaxStop", "ajaxComplete", "ajaxError", "ajaxSuccess", "ajaxSend" ], function( i, type ){
	jQuery.fn[ type ] = function( fn ){
		return this.on( type, fn );
	};
});

jQuery.each( [ "get", "post" ], function( i, method ) {
	jQuery[ method ] = function( url, data, callback, type ) {
		// shift arguments if data argument was omitted
		if ( jQuery.isFunction( data ) ) {
			type = type || callback;
			callback = data;
			data = undefined;
		}

		return jQuery.ajax({
			url: url,
			type: method,
			dataType: type,
			data: data,
			success: callback
		});
	};
});

jQuery.extend({

	// Counter for holding the number of active queries
	active: 0,

	// Last-Modified header cache for next request
	lastModified: {},
	etag: {},

	ajaxSettings: {
		url: ajaxLocation,
		type: "GET",
		isLocal: rlocalProtocol.test( ajaxLocParts[ 1 ] ),
		global: true,
		processData: true,
		async: true,
		contentType: "application/x-www-form-urlencoded; charset=UTF-8",
		/*
		timeout: 0,
		data: null,
		dataType: null,
		username: null,
		password: null,
		cache: null,
		throws: false,
		traditional: false,
		headers: {},
		*/

		accepts: {
			"*": allTypes,
			text: "text/plain",
			html: "text/html",
			xml: "application/xml, text/xml",
			json: "application/json, text/javascript"
		},

		contents: {
			xml: /xml/,
			html: /html/,
			json: /json/
		},

		responseFields: {
			xml: "responseXML",
			text: "responseText"
		},

		// Data converters
		// Keys separate source (or catchall "*") and destination types with a single space
		converters: {

			// Convert anything to text
			"* text": window.String,

			// Text to html (true = no transformation)
			"text html": true,

			// Evaluate text as a json expression
			"text json": jQuery.parseJSON,

			// Parse text as xml
			"text xml": jQuery.parseXML
		},

		// For options that shouldn't be deep extended:
		// you can add your own custom options here if
		// and when you create one that shouldn't be
		// deep extended (see ajaxExtend)
		flatOptions: {
			url: true,
			context: true
		}
	},

	// Creates a full fledged settings object into target
	// with both ajaxSettings and settings fields.
	// If target is omitted, writes into ajaxSettings.
	ajaxSetup: function( target, settings ) {
		return settings ?

			// Building a settings object
			ajaxExtend( ajaxExtend( target, jQuery.ajaxSettings ), settings ) :

			// Extending ajaxSettings
			ajaxExtend( jQuery.ajaxSettings, target );
	},

	ajaxPrefilter: addToPrefiltersOrTransports( prefilters ),
	ajaxTransport: addToPrefiltersOrTransports( transports ),

	// Main method
	ajax: function( url, options ) {

		// If url is an object, simulate pre-1.5 signature
		if ( typeof url === "object" ) {
			options = url;
			url = undefined;
		}

		// Force options to be an object
		options = options || {};

		var // Cross-domain detection vars
			parts,
			// Loop variable
			i,
			// URL without anti-cache param
			cacheURL,
			// Response headers as string
			responseHeadersString,
			// timeout handle
			timeoutTimer,

			// To know if global events are to be dispatched
			fireGlobals,

			transport,
			// Response headers
			responseHeaders,
			// Create the final options object
			s = jQuery.ajaxSetup( {}, options ),
			// Callbacks context
			callbackContext = s.context || s,
			// Context for global events is callbackContext if it is a DOM node or jQuery collection
			globalEventContext = s.context && ( callbackContext.nodeType || callbackContext.jquery ) ?
				jQuery( callbackContext ) :
				jQuery.event,
			// Deferreds
			deferred = jQuery.Deferred(),
			completeDeferred = jQuery.Callbacks("once memory"),
			// Status-dependent callbacks
			statusCode = s.statusCode || {},
			// Headers (they are sent all at once)
			requestHeaders = {},
			requestHeadersNames = {},
			// The jqXHR state
			state = 0,
			// Default abort message
			strAbort = "canceled",
			// Fake xhr
			jqXHR = {
				readyState: 0,

				// Builds headers hashtable if needed
				getResponseHeader: function( key ) {
					var match;
					if ( state === 2 ) {
						if ( !responseHeaders ) {
							responseHeaders = {};
							while ( (match = rheaders.exec( responseHeadersString )) ) {
								responseHeaders[ match[1].toLowerCase() ] = match[ 2 ];
							}
						}
						match = responseHeaders[ key.toLowerCase() ];
					}
					return match == null ? null : match;
				},

				// Raw string
				getAllResponseHeaders: function() {
					return state === 2 ? responseHeadersString : null;
				},

				// Caches the header
				setRequestHeader: function( name, value ) {
					var lname = name.toLowerCase();
					if ( !state ) {
						name = requestHeadersNames[ lname ] = requestHeadersNames[ lname ] || name;
						requestHeaders[ name ] = value;
					}
					return this;
				},

				// Overrides response content-type header
				overrideMimeType: function( type ) {
					if ( !state ) {
						s.mimeType = type;
					}
					return this;
				},

				// Status-dependent callbacks
				statusCode: function( map ) {
					var code;
					if ( map ) {
						if ( state < 2 ) {
							for ( code in map ) {
								// Lazy-add the new callback in a way that preserves old ones
								statusCode[ code ] = [ statusCode[ code ], map[ code ] ];
							}
						} else {
							// Execute the appropriate callbacks
							jqXHR.always( map[ jqXHR.status ] );
						}
					}
					return this;
				},

				// Cancel the request
				abort: function( statusText ) {
					var finalText = statusText || strAbort;
					if ( transport ) {
						transport.abort( finalText );
					}
					done( 0, finalText );
					return this;
				}
			};

		// Attach deferreds
		deferred.promise( jqXHR ).complete = completeDeferred.add;
		jqXHR.success = jqXHR.done;
		jqXHR.error = jqXHR.fail;

		// Remove hash character (#7531: and string promotion)
		// Add protocol if not provided (#5866: IE7 issue with protocol-less urls)
		// Handle falsy url in the settings object (#10093: consistency with old signature)
		// We also use the url parameter if available
		s.url = ( ( url || s.url || ajaxLocation ) + "" ).replace( rhash, "" ).replace( rprotocol, ajaxLocParts[ 1 ] + "//" );

		// Alias method option to type as per ticket #12004
		s.type = options.method || options.type || s.method || s.type;

		// Extract dataTypes list
		s.dataTypes = jQuery.trim( s.dataType || "*" ).toLowerCase().match( core_rnotwhite ) || [""];

		// A cross-domain request is in order when we have a protocol:host:port mismatch
		if ( s.crossDomain == null ) {
			parts = rurl.exec( s.url.toLowerCase() );
			s.crossDomain = !!( parts &&
				( parts[ 1 ] !== ajaxLocParts[ 1 ] || parts[ 2 ] !== ajaxLocParts[ 2 ] ||
					( parts[ 3 ] || ( parts[ 1 ] === "http:" ? 80 : 443 ) ) !=
						( ajaxLocParts[ 3 ] || ( ajaxLocParts[ 1 ] === "http:" ? 80 : 443 ) ) )
			);
		}

		// Convert data if not already a string
		if ( s.data && s.processData && typeof s.data !== "string" ) {
			s.data = jQuery.param( s.data, s.traditional );
		}

		// Apply prefilters
		inspectPrefiltersOrTransports( prefilters, s, options, jqXHR );

		// If request was aborted inside a prefilter, stop there
		if ( state === 2 ) {
			return jqXHR;
		}

		// We can fire global events as of now if asked to
		fireGlobals = s.global;

		// Watch for a new set of requests
		if ( fireGlobals && jQuery.active++ === 0 ) {
			jQuery.event.trigger("ajaxStart");
		}

		// Uppercase the type
		s.type = s.type.toUpperCase();

		// Determine if request has content
		s.hasContent = !rnoContent.test( s.type );

		// Save the URL in case we're toying with the If-Modified-Since
		// and/or If-None-Match header later on
		cacheURL = s.url;

		// More options handling for requests with no content
		if ( !s.hasContent ) {

			// If data is available, append data to url
			if ( s.data ) {
				cacheURL = ( s.url += ( ajax_rquery.test( cacheURL ) ? "&" : "?" ) + s.data );
				// #9682: remove data so that it's not used in an eventual retry
				delete s.data;
			}

			// Add anti-cache in url if needed
			if ( s.cache === false ) {
				s.url = rts.test( cacheURL ) ?

					// If there is already a '_' parameter, set its value
					cacheURL.replace( rts, "$1_=" + ajax_nonce++ ) :

					// Otherwise add one to the end
					cacheURL + ( ajax_rquery.test( cacheURL ) ? "&" : "?" ) + "_=" + ajax_nonce++;
			}
		}

		// Set the If-Modified-Since and/or If-None-Match header, if in ifModified mode.
		if ( s.ifModified ) {
			if ( jQuery.lastModified[ cacheURL ] ) {
				jqXHR.setRequestHeader( "If-Modified-Since", jQuery.lastModified[ cacheURL ] );
			}
			if ( jQuery.etag[ cacheURL ] ) {
				jqXHR.setRequestHeader( "If-None-Match", jQuery.etag[ cacheURL ] );
			}
		}

		// Set the correct header, if data is being sent
		if ( s.data && s.hasContent && s.contentType !== false || options.contentType ) {
			jqXHR.setRequestHeader( "Content-Type", s.contentType );
		}

		// Set the Accepts header for the server, depending on the dataType
		jqXHR.setRequestHeader(
			"Accept",
			s.dataTypes[ 0 ] && s.accepts[ s.dataTypes[0] ] ?
				s.accepts[ s.dataTypes[0] ] + ( s.dataTypes[ 0 ] !== "*" ? ", " + allTypes + "; q=0.01" : "" ) :
				s.accepts[ "*" ]
		);

		// Check for headers option
		for ( i in s.headers ) {
			jqXHR.setRequestHeader( i, s.headers[ i ] );
		}

		// Allow custom headers/mimetypes and early abort
		if ( s.beforeSend && ( s.beforeSend.call( callbackContext, jqXHR, s ) === false || state === 2 ) ) {
			// Abort if not done already and return
			return jqXHR.abort();
		}

		// aborting is no longer a cancellation
		strAbort = "abort";

		// Install callbacks on deferreds
		for ( i in { success: 1, error: 1, complete: 1 } ) {
			jqXHR[ i ]( s[ i ] );
		}

		// Get transport
		transport = inspectPrefiltersOrTransports( transports, s, options, jqXHR );

		// If no transport, we auto-abort
		if ( !transport ) {
			done( -1, "No Transport" );
		} else {
			jqXHR.readyState = 1;

			// Send global event
			if ( fireGlobals ) {
				globalEventContext.trigger( "ajaxSend", [ jqXHR, s ] );
			}
			// Timeout
			if ( s.async && s.timeout > 0 ) {
				timeoutTimer = setTimeout(function() {
					jqXHR.abort("timeout");
				}, s.timeout );
			}

			try {
				state = 1;
				transport.send( requestHeaders, done );
			} catch ( e ) {
				// Propagate exception as error if not done
				if ( state < 2 ) {
					done( -1, e );
				// Simply rethrow otherwise
				} else {
					throw e;
				}
			}
		}

		// Callback for when everything is done
		function done( status, nativeStatusText, responses, headers ) {
			var isSuccess, success, error, response, modified,
				statusText = nativeStatusText;

			// Called once
			if ( state === 2 ) {
				return;
			}

			// State is "done" now
			state = 2;

			// Clear timeout if it exists
			if ( timeoutTimer ) {
				clearTimeout( timeoutTimer );
			}

			// Dereference transport for early garbage collection
			// (no matter how long the jqXHR object will be used)
			transport = undefined;

			// Cache response headers
			responseHeadersString = headers || "";

			// Set readyState
			jqXHR.readyState = status > 0 ? 4 : 0;

			// Get response data
			if ( responses ) {
				response = ajaxHandleResponses( s, jqXHR, responses );
			}

			// If successful, handle type chaining
			if ( status >= 200 && status < 300 || status === 304 ) {

				// Set the If-Modified-Since and/or If-None-Match header, if in ifModified mode.
				if ( s.ifModified ) {
					modified = jqXHR.getResponseHeader("Last-Modified");
					if ( modified ) {
						jQuery.lastModified[ cacheURL ] = modified;
					}
					modified = jqXHR.getResponseHeader("etag");
					if ( modified ) {
						jQuery.etag[ cacheURL ] = modified;
					}
				}

				// if no content
				if ( status === 204 ) {
					isSuccess = true;
					statusText = "nocontent";

				// if not modified
				} else if ( status === 304 ) {
					isSuccess = true;
					statusText = "notmodified";

				// If we have data, let's convert it
				} else {
					isSuccess = ajaxConvert( s, response );
					statusText = isSuccess.state;
					success = isSuccess.data;
					error = isSuccess.error;
					isSuccess = !error;
				}
			} else {
				// We extract error from statusText
				// then normalize statusText and status for non-aborts
				error = statusText;
				if ( status || !statusText ) {
					statusText = "error";
					if ( status < 0 ) {
						status = 0;
					}
				}
			}

			// Set data for the fake xhr object
			jqXHR.status = status;
			jqXHR.statusText = ( nativeStatusText || statusText ) + "";

			// Success/Error
			if ( isSuccess ) {
				deferred.resolveWith( callbackContext, [ success, statusText, jqXHR ] );
			} else {
				deferred.rejectWith( callbackContext, [ jqXHR, statusText, error ] );
			}

			// Status-dependent callbacks
			jqXHR.statusCode( statusCode );
			statusCode = undefined;

			if ( fireGlobals ) {
				globalEventContext.trigger( isSuccess ? "ajaxSuccess" : "ajaxError",
					[ jqXHR, s, isSuccess ? success : error ] );
			}

			// Complete
			completeDeferred.fireWith( callbackContext, [ jqXHR, statusText ] );

			if ( fireGlobals ) {
				globalEventContext.trigger( "ajaxComplete", [ jqXHR, s ] );
				// Handle the global AJAX counter
				if ( !( --jQuery.active ) ) {
					jQuery.event.trigger("ajaxStop");
				}
			}
		}

		return jqXHR;
	},

	getScript: function( url, callback ) {
		return jQuery.get( url, undefined, callback, "script" );
	},

	getJSON: function( url, data, callback ) {
		return jQuery.get( url, data, callback, "json" );
	}
});

/* Handles responses to an ajax request:
 * - sets all responseXXX fields accordingly
 * - finds the right dataType (mediates between content-type and expected dataType)
 * - returns the corresponding response
 */
function ajaxHandleResponses( s, jqXHR, responses ) {
	var firstDataType, ct, finalDataType, type,
		contents = s.contents,
		dataTypes = s.dataTypes,
		responseFields = s.responseFields;

	// Fill responseXXX fields
	for ( type in responseFields ) {
		if ( type in responses ) {
			jqXHR[ responseFields[type] ] = responses[ type ];
		}
	}

	// Remove auto dataType and get content-type in the process
	while( dataTypes[ 0 ] === "*" ) {
		dataTypes.shift();
		if ( ct === undefined ) {
			ct = s.mimeType || jqXHR.getResponseHeader("Content-Type");
		}
	}

	// Check if we're dealing with a known content-type
	if ( ct ) {
		for ( type in contents ) {
			if ( contents[ type ] && contents[ type ].test( ct ) ) {
				dataTypes.unshift( type );
				break;
			}
		}
	}

	// Check to see if we have a response for the expected dataType
	if ( dataTypes[ 0 ] in responses ) {
		finalDataType = dataTypes[ 0 ];
	} else {
		// Try convertible dataTypes
		for ( type in responses ) {
			if ( !dataTypes[ 0 ] || s.converters[ type + " " + dataTypes[0] ] ) {
				finalDataType = type;
				break;
			}
			if ( !firstDataType ) {
				firstDataType = type;
			}
		}
		// Or just use first one
		finalDataType = finalDataType || firstDataType;
	}

	// If we found a dataType
	// We add the dataType to the list if needed
	// and return the corresponding response
	if ( finalDataType ) {
		if ( finalDataType !== dataTypes[ 0 ] ) {
			dataTypes.unshift( finalDataType );
		}
		return responses[ finalDataType ];
	}
}

// Chain conversions given the request and the original response
function ajaxConvert( s, response ) {
	var conv2, current, conv, tmp,
		converters = {},
		i = 0,
		// Work with a copy of dataTypes in case we need to modify it for conversion
		dataTypes = s.dataTypes.slice(),
		prev = dataTypes[ 0 ];

	// Apply the dataFilter if provided
	if ( s.dataFilter ) {
		response = s.dataFilter( response, s.dataType );
	}

	// Create converters map with lowercased keys
	if ( dataTypes[ 1 ] ) {
		for ( conv in s.converters ) {
			converters[ conv.toLowerCase() ] = s.converters[ conv ];
		}
	}

	// Convert to each sequential dataType, tolerating list modification
	for ( ; (current = dataTypes[++i]); ) {

		// There's only work to do if current dataType is non-auto
		if ( current !== "*" ) {

			// Convert response if prev dataType is non-auto and differs from current
			if ( prev !== "*" && prev !== current ) {

				// Seek a direct converter
				conv = converters[ prev + " " + current ] || converters[ "* " + current ];

				// If none found, seek a pair
				if ( !conv ) {
					for ( conv2 in converters ) {

						// If conv2 outputs current
						tmp = conv2.split(" ");
						if ( tmp[ 1 ] === current ) {

							// If prev can be converted to accepted input
							conv = converters[ prev + " " + tmp[ 0 ] ] ||
								converters[ "* " + tmp[ 0 ] ];
							if ( conv ) {
								// Condense equivalence converters
								if ( conv === true ) {
									conv = converters[ conv2 ];

								// Otherwise, insert the intermediate dataType
								} else if ( converters[ conv2 ] !== true ) {
									current = tmp[ 0 ];
									dataTypes.splice( i--, 0, current );
								}

								break;
							}
						}
					}
				}

				// Apply converter (if not an equivalence)
				if ( conv !== true ) {

					// Unless errors are allowed to bubble, catch and return them
					if ( conv && s["throws"] ) {
						response = conv( response );
					} else {
						try {
							response = conv( response );
						} catch ( e ) {
							return { state: "parsererror", error: conv ? e : "No conversion from " + prev + " to " + current };
						}
					}
				}
			}

			// Update prev for next iteration
			prev = current;
		}
	}

	return { state: "success", data: response };
}
// Install script dataType
jQuery.ajaxSetup({
	accepts: {
		script: "text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"
	},
	contents: {
		script: /(?:java|ecma)script/
	},
	converters: {
		"text script": function( text ) {
			jQuery.globalEval( text );
			return text;
		}
	}
});

// Handle cache's special case and global
jQuery.ajaxPrefilter( "script", function( s ) {
	if ( s.cache === undefined ) {
		s.cache = false;
	}
	if ( s.crossDomain ) {
		s.type = "GET";
		s.global = false;
	}
});

// Bind script tag hack transport
jQuery.ajaxTransport( "script", function(s) {

	// This transport only deals with cross domain requests
	if ( s.crossDomain ) {

		var script,
			head = document.head || jQuery("head")[0] || document.documentElement;

		return {

			send: function( _, callback ) {

				script = document.createElement("script");

				script.async = true;

				if ( s.scriptCharset ) {
					script.charset = s.scriptCharset;
				}

				script.src = s.url;

				// Attach handlers for all browsers
				script.onload = script.onreadystatechange = function( _, isAbort ) {

					if ( isAbort || !script.readyState || /loaded|complete/.test( script.readyState ) ) {

						// Handle memory leak in IE
						script.onload = script.onreadystatechange = null;

						// Remove the script
						if ( script.parentNode ) {
							script.parentNode.removeChild( script );
						}

						// Dereference the script
						script = null;

						// Callback if not abort
						if ( !isAbort ) {
							callback( 200, "success" );
						}
					}
				};

				// Circumvent IE6 bugs with base elements (#2709 and #4378) by prepending
				// Use native DOM manipulation to avoid our domManip AJAX trickery
				head.insertBefore( script, head.firstChild );
			},

			abort: function() {
				if ( script ) {
					script.onload( undefined, true );
				}
			}
		};
	}
});
var oldCallbacks = [],
	rjsonp = /(=)\?(?=&|$)|\?\?/;

// Default jsonp settings
jQuery.ajaxSetup({
	jsonp: "callback",
	jsonpCallback: function() {
		var callback = oldCallbacks.pop() || ( jQuery.expando + "_" + ( ajax_nonce++ ) );
		this[ callback ] = true;
		return callback;
	}
});

// Detect, normalize options and install callbacks for jsonp requests
jQuery.ajaxPrefilter( "json jsonp", function( s, originalSettings, jqXHR ) {

	var callbackName, overwritten, responseContainer,
		jsonProp = s.jsonp !== false && ( rjsonp.test( s.url ) ?
			"url" :
			typeof s.data === "string" && !( s.contentType || "" ).indexOf("application/x-www-form-urlencoded") && rjsonp.test( s.data ) && "data"
		);

	// Handle iff the expected data type is "jsonp" or we have a parameter to set
	if ( jsonProp || s.dataTypes[ 0 ] === "jsonp" ) {

		// Get callback name, remembering preexisting value associated with it
		callbackName = s.jsonpCallback = jQuery.isFunction( s.jsonpCallback ) ?
			s.jsonpCallback() :
			s.jsonpCallback;

		// Insert callback into url or form data
		if ( jsonProp ) {
			s[ jsonProp ] = s[ jsonProp ].replace( rjsonp, "$1" + callbackName );
		} else if ( s.jsonp !== false ) {
			s.url += ( ajax_rquery.test( s.url ) ? "&" : "?" ) + s.jsonp + "=" + callbackName;
		}

		// Use data converter to retrieve json after script execution
		s.converters["script json"] = function() {
			if ( !responseContainer ) {
				jQuery.error( callbackName + " was not called" );
			}
			return responseContainer[ 0 ];
		};

		// force json dataType
		s.dataTypes[ 0 ] = "json";

		// Install callback
		overwritten = window[ callbackName ];
		window[ callbackName ] = function() {
			responseContainer = arguments;
		};

		// Clean-up function (fires after converters)
		jqXHR.always(function() {
			// Restore preexisting value
			window[ callbackName ] = overwritten;

			// Save back as free
			if ( s[ callbackName ] ) {
				// make sure that re-using the options doesn't screw things around
				s.jsonpCallback = originalSettings.jsonpCallback;

				// save the callback name for future use
				oldCallbacks.push( callbackName );
			}

			// Call if it was a function and we have a response
			if ( responseContainer && jQuery.isFunction( overwritten ) ) {
				overwritten( responseContainer[ 0 ] );
			}

			responseContainer = overwritten = undefined;
		});

		// Delegate to script
		return "script";
	}
});
var xhrCallbacks, xhrSupported,
	xhrId = 0,
	// #5280: Internet Explorer will keep connections alive if we don't abort on unload
	xhrOnUnloadAbort = window.ActiveXObject && function() {
		// Abort all pending requests
		var key;
		for ( key in xhrCallbacks ) {
			xhrCallbacks[ key ]( undefined, true );
		}
	};

// Functions to create xhrs
function createStandardXHR() {
	try {
		return new window.XMLHttpRequest();
	} catch( e ) {}
}

function createActiveXHR() {
	try {
		return new window.ActiveXObject("Microsoft.XMLHTTP");
	} catch( e ) {}
}

// Create the request object
// (This is still attached to ajaxSettings for backward compatibility)
jQuery.ajaxSettings.xhr = window.ActiveXObject ?
	/* Microsoft failed to properly
	 * implement the XMLHttpRequest in IE7 (can't request local files),
	 * so we use the ActiveXObject when it is available
	 * Additionally XMLHttpRequest can be disabled in IE7/IE8 so
	 * we need a fallback.
	 */
	function() {
		return !this.isLocal && createStandardXHR() || createActiveXHR();
	} :
	// For all other browsers, use the standard XMLHttpRequest object
	createStandardXHR;

// Determine support properties
xhrSupported = jQuery.ajaxSettings.xhr();
jQuery.support.cors = !!xhrSupported && ( "withCredentials" in xhrSupported );
xhrSupported = jQuery.support.ajax = !!xhrSupported;

// Create transport if the browser can provide an xhr
if ( xhrSupported ) {

	jQuery.ajaxTransport(function( s ) {
		// Cross domain only allowed if supported through XMLHttpRequest
		if ( !s.crossDomain || jQuery.support.cors ) {

			var callback;

			return {
				send: function( headers, complete ) {

					// Get a new xhr
					var handle, i,
						xhr = s.xhr();

					// Open the socket
					// Passing null username, generates a login popup on Opera (#2865)
					if ( s.username ) {
						xhr.open( s.type, s.url, s.async, s.username, s.password );
					} else {
						xhr.open( s.type, s.url, s.async );
					}

					// Apply custom fields if provided
					if ( s.xhrFields ) {
						for ( i in s.xhrFields ) {
							xhr[ i ] = s.xhrFields[ i ];
						}
					}

					// Override mime type if needed
					if ( s.mimeType && xhr.overrideMimeType ) {
						xhr.overrideMimeType( s.mimeType );
					}

					// X-Requested-With header
					// For cross-domain requests, seeing as conditions for a preflight are
					// akin to a jigsaw puzzle, we simply never set it to be sure.
					// (it can always be set on a per-request basis or even using ajaxSetup)
					// For same-domain requests, won't change header if already provided.
					if ( !s.crossDomain && !headers["X-Requested-With"] ) {
						headers["X-Requested-With"] = "XMLHttpRequest";
					}

					// Need an extra try/catch for cross domain requests in Firefox 3
					try {
						for ( i in headers ) {
							xhr.setRequestHeader( i, headers[ i ] );
						}
					} catch( err ) {}

					// Do send the request
					// This may raise an exception which is actually
					// handled in jQuery.ajax (so no try/catch here)
					xhr.send( ( s.hasContent && s.data ) || null );

					// Listener
					callback = function( _, isAbort ) {
						var status, responseHeaders, statusText, responses;

						// Firefox throws exceptions when accessing properties
						// of an xhr when a network error occurred
						// http://helpful.knobs-dials.com/index.php/Component_returned_failure_code:_0x80040111_(NS_ERROR_NOT_AVAILABLE)
						try {

							// Was never called and is aborted or complete
							if ( callback && ( isAbort || xhr.readyState === 4 ) ) {

								// Only called once
								callback = undefined;

								// Do not keep as active anymore
								if ( handle ) {
									xhr.onreadystatechange = jQuery.noop;
									if ( xhrOnUnloadAbort ) {
										delete xhrCallbacks[ handle ];
									}
								}

								// If it's an abort
								if ( isAbort ) {
									// Abort it manually if needed
									if ( xhr.readyState !== 4 ) {
										xhr.abort();
									}
								} else {
									responses = {};
									status = xhr.status;
									responseHeaders = xhr.getAllResponseHeaders();

									// When requesting binary data, IE6-9 will throw an exception
									// on any attempt to access responseText (#11426)
									if ( typeof xhr.responseText === "string" ) {
										responses.text = xhr.responseText;
									}

									// Firefox throws an exception when accessing
									// statusText for faulty cross-domain requests
									try {
										statusText = xhr.statusText;
									} catch( e ) {
										// We normalize with Webkit giving an empty statusText
										statusText = "";
									}

									// Filter status for non standard behaviors

									// If the request is local and we have data: assume a success
									// (success with no data won't get notified, that's the best we
									// can do given current implementations)
									if ( !status && s.isLocal && !s.crossDomain ) {
										status = responses.text ? 200 : 404;
									// IE - #1450: sometimes returns 1223 when it should be 204
									} else if ( status === 1223 ) {
										status = 204;
									}
								}
							}
						} catch( firefoxAccessException ) {
							if ( !isAbort ) {
								complete( -1, firefoxAccessException );
							}
						}

						// Call complete if needed
						if ( responses ) {
							complete( status, statusText, responses, responseHeaders );
						}
					};

					if ( !s.async ) {
						// if we're in sync mode we fire the callback
						callback();
					} else if ( xhr.readyState === 4 ) {
						// (IE6 & IE7) if it's in cache and has been
						// retrieved directly we need to fire the callback
						setTimeout( callback );
					} else {
						handle = ++xhrId;
						if ( xhrOnUnloadAbort ) {
							// Create the active xhrs callbacks list if needed
							// and attach the unload handler
							if ( !xhrCallbacks ) {
								xhrCallbacks = {};
								jQuery( window ).unload( xhrOnUnloadAbort );
							}
							// Add to list of active xhrs callbacks
							xhrCallbacks[ handle ] = callback;
						}
						xhr.onreadystatechange = callback;
					}
				},

				abort: function() {
					if ( callback ) {
						callback( undefined, true );
					}
				}
			};
		}
	});
}
var fxNow, timerId,
	rfxtypes = /^(?:toggle|show|hide)$/,
	rfxnum = new RegExp( "^(?:([+-])=|)(" + core_pnum + ")([a-z%]*)$", "i" ),
	rrun = /queueHooks$/,
	animationPrefilters = [ defaultPrefilter ],
	tweeners = {
		"*": [function( prop, value ) {
			var end, unit,
				tween = this.createTween( prop, value ),
				parts = rfxnum.exec( value ),
				target = tween.cur(),
				start = +target || 0,
				scale = 1,
				maxIterations = 20;

			if ( parts ) {
				end = +parts[2];
				unit = parts[3] || ( jQuery.cssNumber[ prop ] ? "" : "px" );

				// We need to compute starting value
				if ( unit !== "px" && start ) {
					// Iteratively approximate from a nonzero starting point
					// Prefer the current property, because this process will be trivial if it uses the same units
					// Fallback to end or a simple constant
					start = jQuery.css( tween.elem, prop, true ) || end || 1;

					do {
						// If previous iteration zeroed out, double until we get *something*
						// Use a string for doubling factor so we don't accidentally see scale as unchanged below
						scale = scale || ".5";

						// Adjust and apply
						start = start / scale;
						jQuery.style( tween.elem, prop, start + unit );

					// Update scale, tolerating zero or NaN from tween.cur()
					// And breaking the loop if scale is unchanged or perfect, or if we've just had enough
					} while ( scale !== (scale = tween.cur() / target) && scale !== 1 && --maxIterations );
				}

				tween.unit = unit;
				tween.start = start;
				// If a +=/-= token was provided, we're doing a relative animation
				tween.end = parts[1] ? start + ( parts[1] + 1 ) * end : end;
			}
			return tween;
		}]
	};

// Animations created synchronously will run synchronously
function createFxNow() {
	setTimeout(function() {
		fxNow = undefined;
	});
	return ( fxNow = jQuery.now() );
}

function createTweens( animation, props ) {
	jQuery.each( props, function( prop, value ) {
		var collection = ( tweeners[ prop ] || [] ).concat( tweeners[ "*" ] ),
			index = 0,
			length = collection.length;
		for ( ; index < length; index++ ) {
			if ( collection[ index ].call( animation, prop, value ) ) {

				// we're done with this property
				return;
			}
		}
	});
}

function Animation( elem, properties, options ) {
	var result,
		stopped,
		index = 0,
		length = animationPrefilters.length,
		deferred = jQuery.Deferred().always( function() {
			// don't match elem in the :animated selector
			delete tick.elem;
		}),
		tick = function() {
			if ( stopped ) {
				return false;
			}
			var currentTime = fxNow || createFxNow(),
				remaining = Math.max( 0, animation.startTime + animation.duration - currentTime ),
				// archaic crash bug won't allow us to use 1 - ( 0.5 || 0 ) (#12497)
				temp = remaining / animation.duration || 0,
				percent = 1 - temp,
				index = 0,
				length = animation.tweens.length;

			for ( ; index < length ; index++ ) {
				animation.tweens[ index ].run( percent );
			}

			deferred.notifyWith( elem, [ animation, percent, remaining ]);

			if ( percent < 1 && length ) {
				return remaining;
			} else {
				deferred.resolveWith( elem, [ animation ] );
				return false;
			}
		},
		animation = deferred.promise({
			elem: elem,
			props: jQuery.extend( {}, properties ),
			opts: jQuery.extend( true, { specialEasing: {} }, options ),
			originalProperties: properties,
			originalOptions: options,
			startTime: fxNow || createFxNow(),
			duration: options.duration,
			tweens: [],
			createTween: function( prop, end ) {
				var tween = jQuery.Tween( elem, animation.opts, prop, end,
						animation.opts.specialEasing[ prop ] || animation.opts.easing );
				animation.tweens.push( tween );
				return tween;
			},
			stop: function( gotoEnd ) {
				var index = 0,
					// if we are going to the end, we want to run all the tweens
					// otherwise we skip this part
					length = gotoEnd ? animation.tweens.length : 0;
				if ( stopped ) {
					return this;
				}
				stopped = true;
				for ( ; index < length ; index++ ) {
					animation.tweens[ index ].run( 1 );
				}

				// resolve when we played the last frame
				// otherwise, reject
				if ( gotoEnd ) {
					deferred.resolveWith( elem, [ animation, gotoEnd ] );
				} else {
					deferred.rejectWith( elem, [ animation, gotoEnd ] );
				}
				return this;
			}
		}),
		props = animation.props;

	propFilter( props, animation.opts.specialEasing );

	for ( ; index < length ; index++ ) {
		result = animationPrefilters[ index ].call( animation, elem, props, animation.opts );
		if ( result ) {
			return result;
		}
	}

	createTweens( animation, props );

	if ( jQuery.isFunction( animation.opts.start ) ) {
		animation.opts.start.call( elem, animation );
	}

	jQuery.fx.timer(
		jQuery.extend( tick, {
			elem: elem,
			anim: animation,
			queue: animation.opts.queue
		})
	);

	// attach callbacks from options
	return animation.progress( animation.opts.progress )
		.done( animation.opts.done, animation.opts.complete )
		.fail( animation.opts.fail )
		.always( animation.opts.always );
}

function propFilter( props, specialEasing ) {
	var value, name, index, easing, hooks;

	// camelCase, specialEasing and expand cssHook pass
	for ( index in props ) {
		name = jQuery.camelCase( index );
		easing = specialEasing[ name ];
		value = props[ index ];
		if ( jQuery.isArray( value ) ) {
			easing = value[ 1 ];
			value = props[ index ] = value[ 0 ];
		}

		if ( index !== name ) {
			props[ name ] = value;
			delete props[ index ];
		}

		hooks = jQuery.cssHooks[ name ];
		if ( hooks && "expand" in hooks ) {
			value = hooks.expand( value );
			delete props[ name ];

			// not quite $.extend, this wont overwrite keys already present.
			// also - reusing 'index' from above because we have the correct "name"
			for ( index in value ) {
				if ( !( index in props ) ) {
					props[ index ] = value[ index ];
					specialEasing[ index ] = easing;
				}
			}
		} else {
			specialEasing[ name ] = easing;
		}
	}
}

jQuery.Animation = jQuery.extend( Animation, {

	tweener: function( props, callback ) {
		if ( jQuery.isFunction( props ) ) {
			callback = props;
			props = [ "*" ];
		} else {
			props = props.split(" ");
		}

		var prop,
			index = 0,
			length = props.length;

		for ( ; index < length ; index++ ) {
			prop = props[ index ];
			tweeners[ prop ] = tweeners[ prop ] || [];
			tweeners[ prop ].unshift( callback );
		}
	},

	prefilter: function( callback, prepend ) {
		if ( prepend ) {
			animationPrefilters.unshift( callback );
		} else {
			animationPrefilters.push( callback );
		}
	}
});

function defaultPrefilter( elem, props, opts ) {
	/*jshint validthis:true */
	var prop, index, length,
		value, dataShow, toggle,
		tween, hooks, oldfire,
		anim = this,
		style = elem.style,
		orig = {},
		handled = [],
		hidden = elem.nodeType && isHidden( elem );

	// handle queue: false promises
	if ( !opts.queue ) {
		hooks = jQuery._queueHooks( elem, "fx" );
		if ( hooks.unqueued == null ) {
			hooks.unqueued = 0;
			oldfire = hooks.empty.fire;
			hooks.empty.fire = function() {
				if ( !hooks.unqueued ) {
					oldfire();
				}
			};
		}
		hooks.unqueued++;

		anim.always(function() {
			// doing this makes sure that the complete handler will be called
			// before this completes
			anim.always(function() {
				hooks.unqueued--;
				if ( !jQuery.queue( elem, "fx" ).length ) {
					hooks.empty.fire();
				}
			});
		});
	}

	// height/width overflow pass
	if ( elem.nodeType === 1 && ( "height" in props || "width" in props ) ) {
		// Make sure that nothing sneaks out
		// Record all 3 overflow attributes because IE does not
		// change the overflow attribute when overflowX and
		// overflowY are set to the same value
		opts.overflow = [ style.overflow, style.overflowX, style.overflowY ];

		// Set display property to inline-block for height/width
		// animations on inline elements that are having width/height animated
		if ( jQuery.css( elem, "display" ) === "inline" &&
				jQuery.css( elem, "float" ) === "none" ) {

			// inline-level elements accept inline-block;
			// block-level elements need to be inline with layout
			if ( !jQuery.support.inlineBlockNeedsLayout || css_defaultDisplay( elem.nodeName ) === "inline" ) {
				style.display = "inline-block";

			} else {
				style.zoom = 1;
			}
		}
	}

	if ( opts.overflow ) {
		style.overflow = "hidden";
		if ( !jQuery.support.shrinkWrapBlocks ) {
			anim.always(function() {
				style.overflow = opts.overflow[ 0 ];
				style.overflowX = opts.overflow[ 1 ];
				style.overflowY = opts.overflow[ 2 ];
			});
		}
	}


	// show/hide pass
	for ( index in props ) {
		value = props[ index ];
		if ( rfxtypes.exec( value ) ) {
			delete props[ index ];
			toggle = toggle || value === "toggle";
			if ( value === ( hidden ? "hide" : "show" ) ) {
				continue;
			}
			handled.push( index );
		}
	}

	length = handled.length;
	if ( length ) {
		dataShow = jQuery._data( elem, "fxshow" ) || jQuery._data( elem, "fxshow", {} );
		if ( "hidden" in dataShow ) {
			hidden = dataShow.hidden;
		}

		// store state if its toggle - enables .stop().toggle() to "reverse"
		if ( toggle ) {
			dataShow.hidden = !hidden;
		}
		if ( hidden ) {
			jQuery( elem ).show();
		} else {
			anim.done(function() {
				jQuery( elem ).hide();
			});
		}
		anim.done(function() {
			var prop;
			jQuery._removeData( elem, "fxshow" );
			for ( prop in orig ) {
				jQuery.style( elem, prop, orig[ prop ] );
			}
		});
		for ( index = 0 ; index < length ; index++ ) {
			prop = handled[ index ];
			tween = anim.createTween( prop, hidden ? dataShow[ prop ] : 0 );
			orig[ prop ] = dataShow[ prop ] || jQuery.style( elem, prop );

			if ( !( prop in dataShow ) ) {
				dataShow[ prop ] = tween.start;
				if ( hidden ) {
					tween.end = tween.start;
					tween.start = prop === "width" || prop === "height" ? 1 : 0;
				}
			}
		}
	}
}

function Tween( elem, options, prop, end, easing ) {
	return new Tween.prototype.init( elem, options, prop, end, easing );
}
jQuery.Tween = Tween;

Tween.prototype = {
	constructor: Tween,
	init: function( elem, options, prop, end, easing, unit ) {
		this.elem = elem;
		this.prop = prop;
		this.easing = easing || "swing";
		this.options = options;
		this.start = this.now = this.cur();
		this.end = end;
		this.unit = unit || ( jQuery.cssNumber[ prop ] ? "" : "px" );
	},
	cur: function() {
		var hooks = Tween.propHooks[ this.prop ];

		return hooks && hooks.get ?
			hooks.get( this ) :
			Tween.propHooks._default.get( this );
	},
	run: function( percent ) {
		var eased,
			hooks = Tween.propHooks[ this.prop ];

		if ( this.options.duration ) {
			this.pos = eased = jQuery.easing[ this.easing ](
				percent, this.options.duration * percent, 0, 1, this.options.duration
			);
		} else {
			this.pos = eased = percent;
		}
		this.now = ( this.end - this.start ) * eased + this.start;

		if ( this.options.step ) {
			this.options.step.call( this.elem, this.now, this );
		}

		if ( hooks && hooks.set ) {
			hooks.set( this );
		} else {
			Tween.propHooks._default.set( this );
		}
		return this;
	}
};

Tween.prototype.init.prototype = Tween.prototype;

Tween.propHooks = {
	_default: {
		get: function( tween ) {
			var result;

			if ( tween.elem[ tween.prop ] != null &&
				(!tween.elem.style || tween.elem.style[ tween.prop ] == null) ) {
				return tween.elem[ tween.prop ];
			}

			// passing an empty string as a 3rd parameter to .css will automatically
			// attempt a parseFloat and fallback to a string if the parse fails
			// so, simple values such as "10px" are parsed to Float.
			// complex values such as "rotate(1rad)" are returned as is.
			result = jQuery.css( tween.elem, tween.prop, "" );
			// Empty strings, null, undefined and "auto" are converted to 0.
			return !result || result === "auto" ? 0 : result;
		},
		set: function( tween ) {
			// use step hook for back compat - use cssHook if its there - use .style if its
			// available and use plain properties where available
			if ( jQuery.fx.step[ tween.prop ] ) {
				jQuery.fx.step[ tween.prop ]( tween );
			} else if ( tween.elem.style && ( tween.elem.style[ jQuery.cssProps[ tween.prop ] ] != null || jQuery.cssHooks[ tween.prop ] ) ) {
				jQuery.style( tween.elem, tween.prop, tween.now + tween.unit );
			} else {
				tween.elem[ tween.prop ] = tween.now;
			}
		}
	}
};

// Remove in 2.0 - this supports IE8's panic based approach
// to setting things on disconnected nodes

Tween.propHooks.scrollTop = Tween.propHooks.scrollLeft = {
	set: function( tween ) {
		if ( tween.elem.nodeType && tween.elem.parentNode ) {
			tween.elem[ tween.prop ] = tween.now;
		}
	}
};

jQuery.each([ "toggle", "show", "hide" ], function( i, name ) {
	var cssFn = jQuery.fn[ name ];
	jQuery.fn[ name ] = function( speed, easing, callback ) {
		return speed == null || typeof speed === "boolean" ?
			cssFn.apply( this, arguments ) :
			this.animate( genFx( name, true ), speed, easing, callback );
	};
});

jQuery.fn.extend({
	fadeTo: function( speed, to, easing, callback ) {

		// show any hidden elements after setting opacity to 0
		return this.filter( isHidden ).css( "opacity", 0 ).show()

			// animate to the value specified
			.end().animate({ opacity: to }, speed, easing, callback );
	},
	animate: function( prop, speed, easing, callback ) {
		var empty = jQuery.isEmptyObject( prop ),
			optall = jQuery.speed( speed, easing, callback ),
			doAnimation = function() {
				// Operate on a copy of prop so per-property easing won't be lost
				var anim = Animation( this, jQuery.extend( {}, prop ), optall );
				doAnimation.finish = function() {
					anim.stop( true );
				};
				// Empty animations, or finishing resolves immediately
				if ( empty || jQuery._data( this, "finish" ) ) {
					anim.stop( true );
				}
			};
			doAnimation.finish = doAnimation;

		return empty || optall.queue === false ?
			this.each( doAnimation ) :
			this.queue( optall.queue, doAnimation );
	},
	stop: function( type, clearQueue, gotoEnd ) {
		var stopQueue = function( hooks ) {
			var stop = hooks.stop;
			delete hooks.stop;
			stop( gotoEnd );
		};

		if ( typeof type !== "string" ) {
			gotoEnd = clearQueue;
			clearQueue = type;
			type = undefined;
		}
		if ( clearQueue && type !== false ) {
			this.queue( type || "fx", [] );
		}

		return this.each(function() {
			var dequeue = true,
				index = type != null && type + "queueHooks",
				timers = jQuery.timers,
				data = jQuery._data( this );

			if ( index ) {
				if ( data[ index ] && data[ index ].stop ) {
					stopQueue( data[ index ] );
				}
			} else {
				for ( index in data ) {
					if ( data[ index ] && data[ index ].stop && rrun.test( index ) ) {
						stopQueue( data[ index ] );
					}
				}
			}

			for ( index = timers.length; index--; ) {
				if ( timers[ index ].elem === this && (type == null || timers[ index ].queue === type) ) {
					timers[ index ].anim.stop( gotoEnd );
					dequeue = false;
					timers.splice( index, 1 );
				}
			}

			// start the next in the queue if the last step wasn't forced
			// timers currently will call their complete callbacks, which will dequeue
			// but only if they were gotoEnd
			if ( dequeue || !gotoEnd ) {
				jQuery.dequeue( this, type );
			}
		});
	},
	finish: function( type ) {
		if ( type !== false ) {
			type = type || "fx";
		}
		return this.each(function() {
			var index,
				data = jQuery._data( this ),
				queue = data[ type + "queue" ],
				hooks = data[ type + "queueHooks" ],
				timers = jQuery.timers,
				length = queue ? queue.length : 0;

			// enable finishing flag on private data
			data.finish = true;

			// empty the queue first
			jQuery.queue( this, type, [] );

			if ( hooks && hooks.cur && hooks.cur.finish ) {
				hooks.cur.finish.call( this );
			}

			// look for any active animations, and finish them
			for ( index = timers.length; index--; ) {
				if ( timers[ index ].elem === this && timers[ index ].queue === type ) {
					timers[ index ].anim.stop( true );
					timers.splice( index, 1 );
				}
			}

			// look for any animations in the old queue and finish them
			for ( index = 0; index < length; index++ ) {
				if ( queue[ index ] && queue[ index ].finish ) {
					queue[ index ].finish.call( this );
				}
			}

			// turn off finishing flag
			delete data.finish;
		});
	}
});

// Generate parameters to create a standard animation
function genFx( type, includeWidth ) {
	var which,
		attrs = { height: type },
		i = 0;

	// if we include width, step value is 1 to do all cssExpand values,
	// if we don't include width, step value is 2 to skip over Left and Right
	includeWidth = includeWidth? 1 : 0;
	for( ; i < 4 ; i += 2 - includeWidth ) {
		which = cssExpand[ i ];
		attrs[ "margin" + which ] = attrs[ "padding" + which ] = type;
	}

	if ( includeWidth ) {
		attrs.opacity = attrs.width = type;
	}

	return attrs;
}

// Generate shortcuts for custom animations
jQuery.each({
	slideDown: genFx("show"),
	slideUp: genFx("hide"),
	slideToggle: genFx("toggle"),
	fadeIn: { opacity: "show" },
	fadeOut: { opacity: "hide" },
	fadeToggle: { opacity: "toggle" }
}, function( name, props ) {
	jQuery.fn[ name ] = function( speed, easing, callback ) {
		return this.animate( props, speed, easing, callback );
	};
});

jQuery.speed = function( speed, easing, fn ) {
	var opt = speed && typeof speed === "object" ? jQuery.extend( {}, speed ) : {
		complete: fn || !fn && easing ||
			jQuery.isFunction( speed ) && speed,
		duration: speed,
		easing: fn && easing || easing && !jQuery.isFunction( easing ) && easing
	};

	opt.duration = jQuery.fx.off ? 0 : typeof opt.duration === "number" ? opt.duration :
		opt.duration in jQuery.fx.speeds ? jQuery.fx.speeds[ opt.duration ] : jQuery.fx.speeds._default;

	// normalize opt.queue - true/undefined/null -> "fx"
	if ( opt.queue == null || opt.queue === true ) {
		opt.queue = "fx";
	}

	// Queueing
	opt.old = opt.complete;

	opt.complete = function() {
		if ( jQuery.isFunction( opt.old ) ) {
			opt.old.call( this );
		}

		if ( opt.queue ) {
			jQuery.dequeue( this, opt.queue );
		}
	};

	return opt;
};

jQuery.easing = {
	linear: function( p ) {
		return p;
	},
	swing: function( p ) {
		return 0.5 - Math.cos( p*Math.PI ) / 2;
	}
};

jQuery.timers = [];
jQuery.fx = Tween.prototype.init;
jQuery.fx.tick = function() {
	var timer,
		timers = jQuery.timers,
		i = 0;

	fxNow = jQuery.now();

	for ( ; i < timers.length; i++ ) {
		timer = timers[ i ];
		// Checks the timer has not already been removed
		if ( !timer() && timers[ i ] === timer ) {
			timers.splice( i--, 1 );
		}
	}

	if ( !timers.length ) {
		jQuery.fx.stop();
	}
	fxNow = undefined;
};

jQuery.fx.timer = function( timer ) {
	if ( timer() && jQuery.timers.push( timer ) ) {
		jQuery.fx.start();
	}
};

jQuery.fx.interval = 13;

jQuery.fx.start = function() {
	if ( !timerId ) {
		timerId = setInterval( jQuery.fx.tick, jQuery.fx.interval );
	}
};

jQuery.fx.stop = function() {
	clearInterval( timerId );
	timerId = null;
};

jQuery.fx.speeds = {
	slow: 600,
	fast: 200,
	// Default speed
	_default: 400
};

// Back Compat <1.8 extension point
jQuery.fx.step = {};

if ( jQuery.expr && jQuery.expr.filters ) {
	jQuery.expr.filters.animated = function( elem ) {
		return jQuery.grep(jQuery.timers, function( fn ) {
			return elem === fn.elem;
		}).length;
	};
}
jQuery.fn.offset = function( options ) {
	if ( arguments.length ) {
		return options === undefined ?
			this :
			this.each(function( i ) {
				jQuery.offset.setOffset( this, options, i );
			});
	}

	var docElem, win,
		box = { top: 0, left: 0 },
		elem = this[ 0 ],
		doc = elem && elem.ownerDocument;

	if ( !doc ) {
		return;
	}

	docElem = doc.documentElement;

	// Make sure it's not a disconnected DOM node
	if ( !jQuery.contains( docElem, elem ) ) {
		return box;
	}

	// If we don't have gBCR, just use 0,0 rather than error
	// BlackBerry 5, iOS 3 (original iPhone)
	if ( typeof elem.getBoundingClientRect !== core_strundefined ) {
		box = elem.getBoundingClientRect();
	}
	win = getWindow( doc );
	return {
		top: box.top  + ( win.pageYOffset || docElem.scrollTop )  - ( docElem.clientTop  || 0 ),
		left: box.left + ( win.pageXOffset || docElem.scrollLeft ) - ( docElem.clientLeft || 0 )
	};
};

jQuery.offset = {

	setOffset: function( elem, options, i ) {
		var position = jQuery.css( elem, "position" );

		// set position first, in-case top/left are set even on static elem
		if ( position === "static" ) {
			elem.style.position = "relative";
		}

		var curElem = jQuery( elem ),
			curOffset = curElem.offset(),
			curCSSTop = jQuery.css( elem, "top" ),
			curCSSLeft = jQuery.css( elem, "left" ),
			calculatePosition = ( position === "absolute" || position === "fixed" ) && jQuery.inArray("auto", [curCSSTop, curCSSLeft]) > -1,
			props = {}, curPosition = {}, curTop, curLeft;

		// need to be able to calculate position if either top or left is auto and position is either absolute or fixed
		if ( calculatePosition ) {
			curPosition = curElem.position();
			curTop = curPosition.top;
			curLeft = curPosition.left;
		} else {
			curTop = parseFloat( curCSSTop ) || 0;
			curLeft = parseFloat( curCSSLeft ) || 0;
		}

		if ( jQuery.isFunction( options ) ) {
			options = options.call( elem, i, curOffset );
		}

		if ( options.top != null ) {
			props.top = ( options.top - curOffset.top ) + curTop;
		}
		if ( options.left != null ) {
			props.left = ( options.left - curOffset.left ) + curLeft;
		}

		if ( "using" in options ) {
			options.using.call( elem, props );
		} else {
			curElem.css( props );
		}
	}
};


jQuery.fn.extend({

	position: function() {
		if ( !this[ 0 ] ) {
			return;
		}

		var offsetParent, offset,
			parentOffset = { top: 0, left: 0 },
			elem = this[ 0 ];

		// fixed elements are offset from window (parentOffset = {top:0, left: 0}, because it is it's only offset parent
		if ( jQuery.css( elem, "position" ) === "fixed" ) {
			// we assume that getBoundingClientRect is available when computed position is fixed
			offset = elem.getBoundingClientRect();
		} else {
			// Get *real* offsetParent
			offsetParent = this.offsetParent();

			// Get correct offsets
			offset = this.offset();
			if ( !jQuery.nodeName( offsetParent[ 0 ], "html" ) ) {
				parentOffset = offsetParent.offset();
			}

			// Add offsetParent borders
			parentOffset.top  += jQuery.css( offsetParent[ 0 ], "borderTopWidth", true );
			parentOffset.left += jQuery.css( offsetParent[ 0 ], "borderLeftWidth", true );
		}

		// Subtract parent offsets and element margins
		// note: when an element has margin: auto the offsetLeft and marginLeft
		// are the same in Safari causing offset.left to incorrectly be 0
		return {
			top:  offset.top  - parentOffset.top - jQuery.css( elem, "marginTop", true ),
			left: offset.left - parentOffset.left - jQuery.css( elem, "marginLeft", true)
		};
	},

	offsetParent: function() {
		return this.map(function() {
			var offsetParent = this.offsetParent || document.documentElement;
			while ( offsetParent && ( !jQuery.nodeName( offsetParent, "html" ) && jQuery.css( offsetParent, "position") === "static" ) ) {
				offsetParent = offsetParent.offsetParent;
			}
			return offsetParent || document.documentElement;
		});
	}
});


// Create scrollLeft and scrollTop methods
jQuery.each( {scrollLeft: "pageXOffset", scrollTop: "pageYOffset"}, function( method, prop ) {
	var top = /Y/.test( prop );

	jQuery.fn[ method ] = function( val ) {
		return jQuery.access( this, function( elem, method, val ) {
			var win = getWindow( elem );

			if ( val === undefined ) {
				return win ? (prop in win) ? win[ prop ] :
					win.document.documentElement[ method ] :
					elem[ method ];
			}

			if ( win ) {
				win.scrollTo(
					!top ? val : jQuery( win ).scrollLeft(),
					top ? val : jQuery( win ).scrollTop()
				);

			} else {
				elem[ method ] = val;
			}
		}, method, val, arguments.length, null );
	};
});

function getWindow( elem ) {
	return jQuery.isWindow( elem ) ?
		elem :
		elem.nodeType === 9 ?
			elem.defaultView || elem.parentWindow :
			false;
}
// Create innerHeight, innerWidth, height, width, outerHeight and outerWidth methods
jQuery.each( { Height: "height", Width: "width" }, function( name, type ) {
	jQuery.each( { padding: "inner" + name, content: type, "": "outer" + name }, function( defaultExtra, funcName ) {
		// margin is only for outerHeight, outerWidth
		jQuery.fn[ funcName ] = function( margin, value ) {
			var chainable = arguments.length && ( defaultExtra || typeof margin !== "boolean" ),
				extra = defaultExtra || ( margin === true || value === true ? "margin" : "border" );

			return jQuery.access( this, function( elem, type, value ) {
				var doc;

				if ( jQuery.isWindow( elem ) ) {
					// As of 5/8/2012 this will yield incorrect results for Mobile Safari, but there
					// isn't a whole lot we can do. See pull request at this URL for discussion:
					// https://github.com/jquery/jquery/pull/764
					return elem.document.documentElement[ "client" + name ];
				}

				// Get document width or height
				if ( elem.nodeType === 9 ) {
					doc = elem.documentElement;

					// Either scroll[Width/Height] or offset[Width/Height] or client[Width/Height], whichever is greatest
					// unfortunately, this causes bug #3838 in IE6/8 only, but there is currently no good, small way to fix it.
					return Math.max(
						elem.body[ "scroll" + name ], doc[ "scroll" + name ],
						elem.body[ "offset" + name ], doc[ "offset" + name ],
						doc[ "client" + name ]
					);
				}

				return value === undefined ?
					// Get width or height on the element, requesting but not forcing parseFloat
					jQuery.css( elem, type, extra ) :

					// Set width or height on the element
					jQuery.style( elem, type, value, extra );
			}, type, chainable ? margin : undefined, chainable, null );
		};
	});
});
// Limit scope pollution from any deprecated API
// (function() {

// })();
// Expose jQuery to the global object
window.jQuery = window.$ = jQuery;

// Expose jQuery as an AMD module, but only for AMD loaders that
// understand the issues with loading multiple versions of jQuery
// in a page that all might call define(). The loader will indicate
// they have special allowances for multiple jQuery versions by
// specifying define.amd.jQuery = true. Register as a named module,
// since jQuery can be concatenated with other files that may use define,
// but not use a proper concatenation script that understands anonymous
// AMD modules. A named AMD is safest and most robust way to register.
// Lowercase jquery is used because AMD module names are derived from
// file names, and jQuery is normally delivered in a lowercase file name.
// Do this after creating the global so that if an AMD module wants to call
// noConflict to hide this version of jQuery, it will work.
if ( typeof define === "function" && define.amd && define.amd.jQuery ) {
	define( "jquery", [], function () { return jQuery; } );
}

})( window );

/* Auto generated, hash = d14oebhom5hicuofnqfyy5n4v */
//     Underscore.js 1.6.0
//     http://underscorejs.org
//     (c) 2009-2014 Jeremy Ashkenas, DocumentCloud and Investigative Reporters & Editors
//     Underscore may be freely distributed under the MIT license.
(function(){var n=this,t=n._,r={},e=Array.prototype,u=Object.prototype,i=Function.prototype,a=e.push,o=e.slice,c=e.concat,l=u.toString,f=u.hasOwnProperty,s=e.forEach,p=e.map,h=e.reduce,v=e.reduceRight,g=e.filter,d=e.every,m=e.some,y=e.indexOf,b=e.lastIndexOf,x=Array.isArray,w=Object.keys,_=i.bind,j=function(n){return n instanceof j?n:this instanceof j?void(this._wrapped=n):new j(n)};"undefined"!=typeof exports?("undefined"!=typeof module&&module.exports&&(exports=module.exports=j),exports._=j):n._=j,j.VERSION="1.6.0";var A=j.each=j.forEach=function(n,t,e){if(null==n)return n;if(s&&n.forEach===s)n.forEach(t,e);else if(n.length===+n.length){for(var u=0,i=n.length;i>u;u++)if(t.call(e,n[u],u,n)===r)return}else for(var a=j.keys(n),u=0,i=a.length;i>u;u++)if(t.call(e,n[a[u]],a[u],n)===r)return;return n};j.map=j.collect=function(n,t,r){var e=[];return null==n?e:p&&n.map===p?n.map(t,r):(A(n,function(n,u,i){e.push(t.call(r,n,u,i))}),e)};var O="Reduce of empty array with no initial value";j.reduce=j.foldl=j.inject=function(n,t,r,e){var u=arguments.length>2;if(null==n&&(n=[]),h&&n.reduce===h)return e&&(t=j.bind(t,e)),u?n.reduce(t,r):n.reduce(t);if(A(n,function(n,i,a){u?r=t.call(e,r,n,i,a):(r=n,u=!0)}),!u)throw new TypeError(O);return r},j.reduceRight=j.foldr=function(n,t,r,e){var u=arguments.length>2;if(null==n&&(n=[]),v&&n.reduceRight===v)return e&&(t=j.bind(t,e)),u?n.reduceRight(t,r):n.reduceRight(t);var i=n.length;if(i!==+i){var a=j.keys(n);i=a.length}if(A(n,function(o,c,l){c=a?a[--i]:--i,u?r=t.call(e,r,n[c],c,l):(r=n[c],u=!0)}),!u)throw new TypeError(O);return r},j.find=j.detect=function(n,t,r){var e;return k(n,function(n,u,i){return t.call(r,n,u,i)?(e=n,!0):void 0}),e},j.filter=j.select=function(n,t,r){var e=[];return null==n?e:g&&n.filter===g?n.filter(t,r):(A(n,function(n,u,i){t.call(r,n,u,i)&&e.push(n)}),e)},j.reject=function(n,t,r){return j.filter(n,function(n,e,u){return!t.call(r,n,e,u)},r)},j.every=j.all=function(n,t,e){t||(t=j.identity);var u=!0;return null==n?u:d&&n.every===d?n.every(t,e):(A(n,function(n,i,a){return(u=u&&t.call(e,n,i,a))?void 0:r}),!!u)};var k=j.some=j.any=function(n,t,e){t||(t=j.identity);var u=!1;return null==n?u:m&&n.some===m?n.some(t,e):(A(n,function(n,i,a){return u||(u=t.call(e,n,i,a))?r:void 0}),!!u)};j.contains=j.include=function(n,t){return null==n?!1:y&&n.indexOf===y?n.indexOf(t)!=-1:k(n,function(n){return n===t})},j.invoke=function(n,t){var r=o.call(arguments,2),e=j.isFunction(t);return j.map(n,function(n){return(e?t:n[t]).apply(n,r)})},j.pluck=function(n,t){return j.map(n,j.property(t))},j.where=function(n,t){return j.filter(n,j.matches(t))},j.findWhere=function(n,t){return j.find(n,j.matches(t))},j.max=function(n,t,r){if(!t&&j.isArray(n)&&n[0]===+n[0]&&n.length<65535)return Math.max.apply(Math,n);var e=-1/0,u=-1/0;return A(n,function(n,i,a){var o=t?t.call(r,n,i,a):n;o>u&&(e=n,u=o)}),e},j.min=function(n,t,r){if(!t&&j.isArray(n)&&n[0]===+n[0]&&n.length<65535)return Math.min.apply(Math,n);var e=1/0,u=1/0;return A(n,function(n,i,a){var o=t?t.call(r,n,i,a):n;u>o&&(e=n,u=o)}),e},j.shuffle=function(n){var t,r=0,e=[];return A(n,function(n){t=j.random(r++),e[r-1]=e[t],e[t]=n}),e},j.sample=function(n,t,r){return null==t||r?(n.length!==+n.length&&(n=j.values(n)),n[j.random(n.length-1)]):j.shuffle(n).slice(0,Math.max(0,t))};var E=function(n){return null==n?j.identity:j.isFunction(n)?n:j.property(n)};j.sortBy=function(n,t,r){return t=E(t),j.pluck(j.map(n,function(n,e,u){return{value:n,index:e,criteria:t.call(r,n,e,u)}}).sort(function(n,t){var r=n.criteria,e=t.criteria;if(r!==e){if(r>e||r===void 0)return 1;if(e>r||e===void 0)return-1}return n.index-t.index}),"value")};var F=function(n){return function(t,r,e){var u={};return r=E(r),A(t,function(i,a){var o=r.call(e,i,a,t);n(u,o,i)}),u}};j.groupBy=F(function(n,t,r){j.has(n,t)?n[t].push(r):n[t]=[r]}),j.indexBy=F(function(n,t,r){n[t]=r}),j.countBy=F(function(n,t){j.has(n,t)?n[t]++:n[t]=1}),j.sortedIndex=function(n,t,r,e){r=E(r);for(var u=r.call(e,t),i=0,a=n.length;a>i;){var o=i+a>>>1;r.call(e,n[o])<u?i=o+1:a=o}return i},j.toArray=function(n){return n?j.isArray(n)?o.call(n):n.length===+n.length?j.map(n,j.identity):j.values(n):[]},j.size=function(n){return null==n?0:n.length===+n.length?n.length:j.keys(n).length},j.first=j.head=j.take=function(n,t,r){return null==n?void 0:null==t||r?n[0]:0>t?[]:o.call(n,0,t)},j.initial=function(n,t,r){return o.call(n,0,n.length-(null==t||r?1:t))},j.last=function(n,t,r){return null==n?void 0:null==t||r?n[n.length-1]:o.call(n,Math.max(n.length-t,0))},j.rest=j.tail=j.drop=function(n,t,r){return o.call(n,null==t||r?1:t)},j.compact=function(n){return j.filter(n,j.identity)};var M=function(n,t,r){return t&&j.every(n,j.isArray)?c.apply(r,n):(A(n,function(n){j.isArray(n)||j.isArguments(n)?t?a.apply(r,n):M(n,t,r):r.push(n)}),r)};j.flatten=function(n,t){return M(n,t,[])},j.without=function(n){return j.difference(n,o.call(arguments,1))},j.partition=function(n,t){var r=[],e=[];return A(n,function(n){(t(n)?r:e).push(n)}),[r,e]},j.uniq=j.unique=function(n,t,r,e){j.isFunction(t)&&(e=r,r=t,t=!1);var u=r?j.map(n,r,e):n,i=[],a=[];return A(u,function(r,e){(t?e&&a[a.length-1]===r:j.contains(a,r))||(a.push(r),i.push(n[e]))}),i},j.union=function(){return j.uniq(j.flatten(arguments,!0))},j.intersection=function(n){var t=o.call(arguments,1);return j.filter(j.uniq(n),function(n){return j.every(t,function(t){return j.contains(t,n)})})},j.difference=function(n){var t=c.apply(e,o.call(arguments,1));return j.filter(n,function(n){return!j.contains(t,n)})},j.zip=function(){for(var n=j.max(j.pluck(arguments,"length").concat(0)),t=new Array(n),r=0;n>r;r++)t[r]=j.pluck(arguments,""+r);return t},j.object=function(n,t){if(null==n)return{};for(var r={},e=0,u=n.length;u>e;e++)t?r[n[e]]=t[e]:r[n[e][0]]=n[e][1];return r},j.indexOf=function(n,t,r){if(null==n)return-1;var e=0,u=n.length;if(r){if("number"!=typeof r)return e=j.sortedIndex(n,t),n[e]===t?e:-1;e=0>r?Math.max(0,u+r):r}if(y&&n.indexOf===y)return n.indexOf(t,r);for(;u>e;e++)if(n[e]===t)return e;return-1},j.lastIndexOf=function(n,t,r){if(null==n)return-1;var e=null!=r;if(b&&n.lastIndexOf===b)return e?n.lastIndexOf(t,r):n.lastIndexOf(t);for(var u=e?r:n.length;u--;)if(n[u]===t)return u;return-1},j.range=function(n,t,r){arguments.length<=1&&(t=n||0,n=0),r=arguments[2]||1;for(var e=Math.max(Math.ceil((t-n)/r),0),u=0,i=new Array(e);e>u;)i[u++]=n,n+=r;return i};var R=function(){};j.bind=function(n,t){var r,e;if(_&&n.bind===_)return _.apply(n,o.call(arguments,1));if(!j.isFunction(n))throw new TypeError;return r=o.call(arguments,2),e=function(){if(!(this instanceof e))return n.apply(t,r.concat(o.call(arguments)));R.prototype=n.prototype;var u=new R;R.prototype=null;var i=n.apply(u,r.concat(o.call(arguments)));return Object(i)===i?i:u}},j.partial=function(n){var t=o.call(arguments,1);return function(){for(var r=0,e=t.slice(),u=0,i=e.length;i>u;u++)e[u]===j&&(e[u]=arguments[r++]);for(;r<arguments.length;)e.push(arguments[r++]);return n.apply(this,e)}},j.bindAll=function(n){var t=o.call(arguments,1);if(0===t.length)throw new Error("bindAll must be passed function names");return A(t,function(t){n[t]=j.bind(n[t],n)}),n},j.memoize=function(n,t){var r={};return t||(t=j.identity),function(){var e=t.apply(this,arguments);return j.has(r,e)?r[e]:r[e]=n.apply(this,arguments)}},j.delay=function(n,t){var r=o.call(arguments,2);return setTimeout(function(){return n.apply(null,r)},t)},j.defer=function(n){return j.delay.apply(j,[n,1].concat(o.call(arguments,1)))},j.throttle=function(n,t,r){var e,u,i,a=null,o=0;r||(r={});var c=function(){o=r.leading===!1?0:j.now(),a=null,i=n.apply(e,u),e=u=null};return function(){var l=j.now();o||r.leading!==!1||(o=l);var f=t-(l-o);return e=this,u=arguments,0>=f?(clearTimeout(a),a=null,o=l,i=n.apply(e,u),e=u=null):a||r.trailing===!1||(a=setTimeout(c,f)),i}},j.debounce=function(n,t,r){var e,u,i,a,o,c=function(){var l=j.now()-a;t>l?e=setTimeout(c,t-l):(e=null,r||(o=n.apply(i,u),i=u=null))};return function(){i=this,u=arguments,a=j.now();var l=r&&!e;return e||(e=setTimeout(c,t)),l&&(o=n.apply(i,u),i=u=null),o}},j.once=function(n){var t,r=!1;return function(){return r?t:(r=!0,t=n.apply(this,arguments),n=null,t)}},j.wrap=function(n,t){return j.partial(t,n)},j.compose=function(){var n=arguments;return function(){for(var t=arguments,r=n.length-1;r>=0;r--)t=[n[r].apply(this,t)];return t[0]}},j.after=function(n,t){return function(){return--n<1?t.apply(this,arguments):void 0}},j.keys=function(n){if(!j.isObject(n))return[];if(w)return w(n);var t=[];for(var r in n)j.has(n,r)&&t.push(r);return t},j.values=function(n){for(var t=j.keys(n),r=t.length,e=new Array(r),u=0;r>u;u++)e[u]=n[t[u]];return e},j.pairs=function(n){for(var t=j.keys(n),r=t.length,e=new Array(r),u=0;r>u;u++)e[u]=[t[u],n[t[u]]];return e},j.invert=function(n){for(var t={},r=j.keys(n),e=0,u=r.length;u>e;e++)t[n[r[e]]]=r[e];return t},j.functions=j.methods=function(n){var t=[];for(var r in n)j.isFunction(n[r])&&t.push(r);return t.sort()},j.extend=function(n){return A(o.call(arguments,1),function(t){if(t)for(var r in t)n[r]=t[r]}),n},j.pick=function(n){var t={},r=c.apply(e,o.call(arguments,1));return A(r,function(r){r in n&&(t[r]=n[r])}),t},j.omit=function(n){var t={},r=c.apply(e,o.call(arguments,1));for(var u in n)j.contains(r,u)||(t[u]=n[u]);return t},j.defaults=function(n){return A(o.call(arguments,1),function(t){if(t)for(var r in t)n[r]===void 0&&(n[r]=t[r])}),n},j.clone=function(n){return j.isObject(n)?j.isArray(n)?n.slice():j.extend({},n):n},j.tap=function(n,t){return t(n),n};var S=function(n,t,r,e){if(n===t)return 0!==n||1/n==1/t;if(null==n||null==t)return n===t;n instanceof j&&(n=n._wrapped),t instanceof j&&(t=t._wrapped);var u=l.call(n);if(u!=l.call(t))return!1;switch(u){case"[object String]":return n==String(t);case"[object Number]":return n!=+n?t!=+t:0==n?1/n==1/t:n==+t;case"[object Date]":case"[object Boolean]":return+n==+t;case"[object RegExp]":return n.source==t.source&&n.global==t.global&&n.multiline==t.multiline&&n.ignoreCase==t.ignoreCase}if("object"!=typeof n||"object"!=typeof t)return!1;for(var i=r.length;i--;)if(r[i]==n)return e[i]==t;var a=n.constructor,o=t.constructor;if(a!==o&&!(j.isFunction(a)&&a instanceof a&&j.isFunction(o)&&o instanceof o)&&"constructor"in n&&"constructor"in t)return!1;r.push(n),e.push(t);var c=0,f=!0;if("[object Array]"==u){if(c=n.length,f=c==t.length)for(;c--&&(f=S(n[c],t[c],r,e)););}else{for(var s in n)if(j.has(n,s)&&(c++,!(f=j.has(t,s)&&S(n[s],t[s],r,e))))break;if(f){for(s in t)if(j.has(t,s)&&!c--)break;f=!c}}return r.pop(),e.pop(),f};j.isEqual=function(n,t){return S(n,t,[],[])},j.isEmpty=function(n){if(null==n)return!0;if(j.isArray(n)||j.isString(n))return 0===n.length;for(var t in n)if(j.has(n,t))return!1;return!0},j.isElement=function(n){return!(!n||1!==n.nodeType)},j.isArray=x||function(n){return"[object Array]"==l.call(n)},j.isObject=function(n){return n===Object(n)},A(["Arguments","Function","String","Number","Date","RegExp"],function(n){j["is"+n]=function(t){return l.call(t)=="[object "+n+"]"}}),j.isArguments(arguments)||(j.isArguments=function(n){return!(!n||!j.has(n,"callee"))}),"function"!=typeof/./&&(j.isFunction=function(n){return"function"==typeof n}),j.isFinite=function(n){return isFinite(n)&&!isNaN(parseFloat(n))},j.isNaN=function(n){return j.isNumber(n)&&n!=+n},j.isBoolean=function(n){return n===!0||n===!1||"[object Boolean]"==l.call(n)},j.isNull=function(n){return null===n},j.isUndefined=function(n){return n===void 0},j.has=function(n,t){return f.call(n,t)},j.noConflict=function(){return n._=t,this},j.identity=function(n){return n},j.constant=function(n){return function(){return n}},j.property=function(n){return function(t){return t[n]}},j.matches=function(n){return function(t){if(t===n)return!0;for(var r in n)if(n[r]!==t[r])return!1;return!0}},j.times=function(n,t,r){for(var e=Array(Math.max(0,n)),u=0;n>u;u++)e[u]=t.call(r,u);return e},j.random=function(n,t){return null==t&&(t=n,n=0),n+Math.floor(Math.random()*(t-n+1))},j.now=Date.now||function(){return(new Date).getTime()};var T={escape:{"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#x27;"}};T.unescape=j.invert(T.escape);var I={escape:new RegExp("["+j.keys(T.escape).join("")+"]","g"),unescape:new RegExp("("+j.keys(T.unescape).join("|")+")","g")};j.each(["escape","unescape"],function(n){j[n]=function(t){return null==t?"":(""+t).replace(I[n],function(t){return T[n][t]})}}),j.result=function(n,t){if(null==n)return void 0;var r=n[t];return j.isFunction(r)?r.call(n):r},j.mixin=function(n){A(j.functions(n),function(t){var r=j[t]=n[t];j.prototype[t]=function(){var n=[this._wrapped];return a.apply(n,arguments),z.call(this,r.apply(j,n))}})};var N=0;j.uniqueId=function(n){var t=++N+"";return n?n+t:t},j.templateSettings={evaluate:/<%([\s\S]+?)%>/g,interpolate:/<%=([\s\S]+?)%>/g,escape:/<%-([\s\S]+?)%>/g};var q=/(.)^/,B={"'":"'","\\":"\\","\r":"r","\n":"n","	":"t","\u2028":"u2028","\u2029":"u2029"},D=/\\|'|\r|\n|\t|\u2028|\u2029/g;j.template=function(n,t,r){var e;r=j.defaults({},r,j.templateSettings);var u=new RegExp([(r.escape||q).source,(r.interpolate||q).source,(r.evaluate||q).source].join("|")+"|$","g"),i=0,a="__p+='";n.replace(u,function(t,r,e,u,o){return a+=n.slice(i,o).replace(D,function(n){return"\\"+B[n]}),r&&(a+="'+\n((__t=("+r+"))==null?'':_.escape(__t))+\n'"),e&&(a+="'+\n((__t=("+e+"))==null?'':__t)+\n'"),u&&(a+="';\n"+u+"\n__p+='"),i=o+t.length,t}),a+="';\n",r.variable||(a="with(obj||{}){\n"+a+"}\n"),a="var __t,__p='',__j=Array.prototype.join,"+"print=function(){__p+=__j.call(arguments,'');};\n"+a+"return __p;\n";try{e=new Function(r.variable||"obj","_",a)}catch(o){throw o.source=a,o}if(t)return e(t,j);var c=function(n){return e.call(this,n,j)};return c.source="function("+(r.variable||"obj")+"){\n"+a+"}",c},j.chain=function(n){return j(n).chain()};var z=function(n){return this._chain?j(n).chain():n};j.mixin(j),A(["pop","push","reverse","shift","sort","splice","unshift"],function(n){var t=e[n];j.prototype[n]=function(){var r=this._wrapped;return t.apply(r,arguments),"shift"!=n&&"splice"!=n||0!==r.length||delete r[0],z.call(this,r)}}),A(["concat","join","slice"],function(n){var t=e[n];j.prototype[n]=function(){return z.call(this,t.apply(this._wrapped,arguments))}}),j.extend(j.prototype,{chain:function(){return this._chain=!0,this},value:function(){return this._wrapped}}),"function"==typeof define&&define.amd&&define("underscore",[],function(){return j})}).call(this);

(function(dust){var CHANNELS_VIEW_PAGE_PATH="/channels/*",SCDS_CONCAT_URL="concat/common",SCDS_CONCAT_JS_URL=combineUrlParts(SCDS_CONCAT_URL,"js"),hasOwnProperty=bind(function(){}.call,{}.hasOwnProperty);function pad(number){return number<10?"0"+number:number}if(!Date.prototype.toISOString)(function(){Date.prototype.toISOString=function(){return this.getUTCFullYear()+"-"+pad(this.getUTCMonth()+1)+"-"+pad(this.getUTCDate())+"T"+pad(this.getUTCHours())+":"+pad(this.getUTCMinutes())+":"+pad(this.getUTCSeconds())+
"."+(this.getUTCMilliseconds()/1E3).toFixed(3).slice(2,5)+"Z"}})();function bind(fn,ctx){return function(){return fn.apply(ctx,arguments)}}function extend(dest,src){var prop;if(src)for(prop in src)if(hasOwnProperty(src,prop))dest[prop]=src[prop];return dest}function assert(condition,message){if(!condition)throw new Error(message);}function trim(str){if(str&&typeof str.replace==="function")return str.replace(/^\s+|\s+$/g,"");return str}function match(value,candidates,arg){var candidateName="*",candidate;
arg=arg||value;if(candidates[value])candidateName=value;candidate=candidates[candidateName];if(typeof candidate==="function")return candidate(arg);return candidate}function boolStringToBool(boolString){return match(String(boolString).toLowerCase(),{"true":true,"*":false})}function coerce(value,type,context){return match(type,{"number":Number,"string":String,"boolean":boolStringToBool,"date":function(val){return new Date(val)},"context":function(val){return context.get(val)}},value)}function combineUrlParts(leftPart,
rightPart){return leftPart.replace(/\/$/,"")+"/"+rightPart.replace(/^\//,"")}function buildJsScdsConcatUrl(paths){return play.scdsDirectUrl(play.buildUrl(SCDS_CONCAT_JS_URL,{"f":paths}))}function parseIntFromFormatted(value){var withoutAlpha;if(typeof value==="number")return value;withoutAlpha=String(value).replace(/\D/g,"");return parseInt(withoutAlpha,10)}function numberFormat(value){if(LI&&typeof LI.numberFormat==="function")return LI.numberFormat(value);return value}function largeNumberFormat(value){var num=
parseIntFromFormatted(value);if(num<1E3)return String(num);else if(num<1E5)return Math.round(num/100)/10+"K";else if(num<1E6)return Math.round(num/1E3)+"K";else return Math.round(num/1E5)/10+"M"}function dateToIso(date){if(typeof date==="string")date=parseInt(date,10);return(new Date(date)).toISOString()}extend(dust.filters,{numberFormat:numberFormat,largeNumberFormat:largeNumberFormat,isoDate:dateToIso});function channelsViewPageUrl(chunk,context,bodies,params){if(params&&params.vanityName)return chunk.write(dust.escapeHtml(CHANNELS_VIEW_PAGE_PATH.replace("*",
params.vanityName)));return chunk}function varHelper(chunk,context,bodies,params){var name,type;assert(params,"@var called with no params");assert(params.name,"@var called without a name attribute");name=params.name;type=params.type;return chunk.capture(bodies.block,context,function(data,chunk){context.stack.head[name]=type?coerce(trim(data),type,context):data;chunk.end()})}function adUrl(chunk,context,bodies,params){var urlParams;assert(params,"@adUrl called without any parameters");assert(params.width,
"@adUrl called without width parameter");assert(params.height,"@adUrl called without height paramater");urlParams={"sz":params.width+"x"+params.height,"ti":params.tile,"p":params.publisherId,"z":params.zone,"_x":params._x?params._x:""};return chunk.write(play.buildUrlSimple("/csp/dtag",urlParams))}function scdsJsConcatUrl(chunk,context,bodies,params){var paths;assert(params,"@scdsJsConcatUrl called without params");assert(params.paths,"@scdsJsConcatUrl called without paths param");paths=play.getPathList(params);
return chunk.write(buildJsScdsConcatUrl(paths))}function scdsJsConcat(chunk,context,bodies,params){var paths,versionDate="\x26_v\x3d08312015";assert(params,"@scdsJsConcatUrl called without params");assert(params.paths,"@scdsJsConcatUrl called without paths param");paths=play.getPathList(params);return chunk.write(play.createScriptTag({src:buildJsScdsConcatUrl(paths)+versionDate},params))}function mprCdnImg(chunk,context,bodies,params){var mediaId=params.mediaId,path=play.combineUrlPieces(play.getPageContextValue("baseMprUrl",
true),"jc"+mediaId),attrs;if(params.lazy){params["data-li-src"]=path;path=""}attrs=_.extend({src:path},_.omit(params,["mediaId","urn","size","width","height","src","lazy"]));return chunk.write(LI.HtmlUtils.createHtmlTag("img",attrs,null))}function mprImgUrl(chunk,context,bodies,params){var mediaId=params.mediaId,imgWidth=params.width,imgHeight=params.height;assert(params,"@mprImgUrl called without params");assert(mediaId,"@mprImgUrl called without mediaId param");assert(imgWidth,"@mprImgUrl called without width param");
assert(imgHeight,"@mprImgUrl called without height param");return chunk.write(play.combineUrlPieces(play.getPageContextValue("baseMprUrl",true),"shrink_"+imgWidth+"_"+imgHeight+mediaId))}function mprImgNp(chunk,context,bodies,params){var mediaId=params.mediaId,imgWidth=params.size||params.width,imgHeight=params.size||params.height,attrs,mprUrl;assert(params,"@mmprImgNp called without params");assert(mediaId,"@mmprImgNp called without mediaId param");assert(imgWidth,"@mmprImgNp called without width param");
assert(imgHeight,"@mmprImgNp called without height param");mprUrl=play.combineUrlPieces(play.getPageContextValue("baseMprUrl",true),"shrinknp_"+imgWidth+"_"+imgHeight+mediaId);attrs=_.omit(params,["mediaId","urn","size","width","height","imgWidth","imgHeight"]);attrs["src"]=mprUrl;return chunk.write(LI.HtmlUtils.createHtmlTag("img",attrs,null))}function attrPair(name,value){return name+'\x3d"'+dust.escapeHtml(value)+'"'}function seoTag(chunk,context,bodies,params){var metatagChunk="",prefix=params.prefix;
metatagChunk+=_.reduce(params,function(metatagChunk,value,key){var prefixValue=prefix?prefix+":"+value:value;return metatagChunk+" "+match(key,{"name":attrPair("name",prefixValue),"property":attrPair("property",prefixValue),"content":attrPair("content",value.replace(/\"/g,"\x26quot;")),"*":""})},"");return chunk.write("\x3cmeta "+metatagChunk+"/\x3e")}function relativeTime(chunk,context,bodies,params){return chunk.write(moment(parseInt(params.timestamp,10)).fromNow())}function formatNumber(chunk,
context,bodies,params){return chunk.write(numeral(parseInt(params.value,10)).format(params.format))}function preTag(chunk,context,bodies,params){if(typeof params.output==="undefined"||params.output==="html")return chunk.write(context.get(params.key));else return chunk}extend(dust.helpers,{adUrl:adUrl,"var":varHelper,channelsViewPageUrl:channelsViewPageUrl,scdsJsConcatUrl:scdsJsConcatUrl,scdsJsConcat:scdsJsConcat,seoTag:seoTag,mprCdnImg:mprCdnImg,mprImgUrl:mprImgUrl,mprImgNp:mprImgNp,relativeTime:relativeTime,
formatNumber:formatNumber,"pre.url":preTag,"pre.img.url":preTag,"pre.fmt":preTag,"pre.ajax.url":preTag,"pre.i18n":preTag,"pre.scss":preTag,"pre.anchor":preTag})})(dust);
/* Auto generated, hash = d5dkzddvi4qw86jnf3teztjub */
// TYPEDEF DOCLETS //////////////////
// These are used for referencing common browser and framework object types in JSDoc.

/**
 * A native HTML Element within the document, returned by the browser.
 * @typedef {object} HTMLElement
 * @see {@link https://developer.mozilla.org/en-US/docs/DOM/DOM_Reference#HTML_element_interfaces}
 */

/**
 * An HTML Element, or set of HTML Elements, wrapped by jQuery.
 * jQuery operations that are chained from an element or set of elements
 * are available from this object. Syntatically, we commonly preface
 * these variables with a $ symbol.
 * @typedef {object} jQuery
 * @see {@link http://api.jquery.com/jQuery/}
 */

/**
 * A valid jQuery selector that can be passed into a jQuery constructor to find elements.
 * @typedef {string} selector
 * @see {@link http://api.jquery.com/category/selectors/}
 */

/**
 * A promise is used to signal to a parent Deferred call that the operation
 * this method is running has completed. It's useful for managing asynchronous
 * operations without blocking the browser and is a key cornerstone of
 * JSControl 1.5.
 * @typedef {object} promise
 * @see {@link http://api.jquery.com/promise/}
 */

/**
 * An event thrown by an interaction or browser action, such as click.
 * @typedef {object} event
 * @see {@link https://developer.mozilla.org/en-US/docs/Web/API/Event}
 */

// END TYPEDEF DOCLETS //////////////

/* Most controls have a doclet with a bunch of information about the class
 * being defined here. BaseControl is an exception because we define the
 * constructor for this control (init) below.
 *
 * See SampleControl for a documentation example.
 *
 * @requires Fiber, jQuery
 * @constructor
 *
 */
(function(require){
  var Fiber = require('fiber'),
      $ = require('jquery');

  LIModules.exports('BaseControl', Fiber.extend(function() {
    var ArrayProto = Array.prototype;

    /** @lends BaseControl.prototype */
    return {
      /**
       * The primary control that all JS 1.5 controls inherit from.
       * The base control contains core methods that handle the control's
       * instantiation and lifecycle, as well as a few helpers that make
       * including dependencies and managing concurrency a snap!
       *
       * @public
       * @constructs
       * @param {(HTMLElement|selector|jQuery selector)} el The HTML element surrounded by the control.
       *        Expressed as an HTMLElement or jQuery query string.
       * @param {object} config Configuration properties for this instance
       */
      init: function(el, config) {
        var control = this,
            isReady = new $.Deferred();

        /**
         * @property this._$el - A jQuery object of the HTML element this control is instantiated with.
         * @type {jQuery}
         */
        this._$el = $(el);

        /**
         * @property this._observableEmitter - A jQuery object used for pub/sub operations
         *           based on code from Ben Alman https://gist.github.com/cowboy/661855
         * @type {jQuery}
         */
        this._observableEmitter = $({});

        /**
         * @property this._state - An internal state object used to record the key/values that represent the object
         * @type {Object}
         */
        this._state = {};

        /**
         * @property this._config - The configuration object that was passed in to this control.
         * @type {object}
         * @default An empty object.
         */
        this._config = this._config || config || {};

        /**
         * @property this.isReady - Deferral that resolves when the control is completely initialzied
         * @type {promise}
         */
        this.isReady = isReady.promise();

        this.beforeInit();
        this.beforeDecoration();
        this.decorate()
        .then(function() {
          // make sure all functions are invoked with "this = control"
          // this must be run after the decoration is complete since decorators augment the object
          control._bindAll(control);
        })
        .then(function() {
          control.afterDecoration();
        })
        .then(function() {
          control.beforeLoad();
        })
        .then(function() {
          if(control._config.dependencies) {
            return control.loadDependencies();
          }
        })
        .then(function(deps) {
          control.afterLoad(deps);
        })
        .then(function() {
          control.attachEventListeners();
        })
        .then(function() {
          control.afterInit();
        })
        .then(function() {
          // let whoever created the control know that it is ready
          isReady.resolve();
        });
      },

      /**
       * Destroys the control, effectively rendering it inert. Override this
       * function to include any teardown logic specific to your control.
       *
       * @return {Void}
       * @public
       */
      destroy: function() {
        this.detachEventListeners();
      },

      ///////////////////////////////////////////////////////////////////////
      // BaseControl#state()
      // This method has four signatures, so we'll provide a doclet for each.
      ///////////////////////////////////////////////////////////////////////
      /**
       * Get a map of the control's current state.
       * @method BaseControl#state
       * @returns {Object} A key-value map of the current state.
       */
      /**
       * Get the value of a particular key from the control's current state.
       * @method BaseControl#state
       * @param {String} key - The key to look up in the state.
       * @returns {*} The value of the given key, or undefined if not found.
       */
      /**
       * Set the value of a particular key in the control's current state.
       * @method BaseControl#state
       * @param {String} key - The key to set.
       * @param {*} value - The value to set.
       */
      /**
       * Merge the control's current state with a given key-value map.
       * By default, new values are added to the state without affecting existing
       * keys. Use `override` to change the value of existing keys.
       * @method BaseControl#state
       * @param {Object} mergeset - The values to merge into the current state.
       * @param {Boolean} override - If true, keys in mergeset that match to
       *                             existing state keys will be updated.
       *
       * @example <caption>Merging versus overriding.</caption>
       * // We'll assume the current state is...
       * // {foo: 'bar', baz: 123}
       * var newState = {foo: 'changed!', newKey: 'hello!'};
       *
       * // In the below example, 'newKey' is added without affecting foo.
       * myControl.state(newState);
       * myControl.state(); //returns {foo: 'bar', baz: 123, newKey: 'hello!'}
       *
       * // With 'override' set to true, existing values are updated.
       * newState.newKey = 'also changed!';
       * myControl.state(newState, true);
       * myControl.state(); //returns {foo: 'changed!' baz: 123, newKey: 'also changed!'}
       */
      state: function(one, two, undefined) {
        var args = [].slice.call(arguments, 0),
            name,
            values = {},
            stateChanges = [],
            newState = null,
            self = this;

        if (typeof args[1] === 'undefined') {
          if (typeof args[0] === 'undefined') {
            // Plain ol' state() call... return everything!
            Object.keys( this._state ).forEach(function(name){
              if (self._state.hasOwnProperty(name)) {
                values[name] = self._state[name].value;
              }
            });
            return values;
          }
          else if (typeof args[0] === 'string') {
            // Looking for a specific key (state(key))... let's return it if we can find it!
            if(this._state.hasOwnProperty(args[0])){
              return this._state[args[0]].value;
            }
            else{
              return undefined;
            }
          }
        }

        if(typeof args[0] === 'object') {
          // Setter using an object! (state(obj))
          // Only overwrite existing keys if the 2nd param is truthy.
          for (name in args[0]) {
            if (args[0].hasOwnProperty(name)) {
              // overwrite if "true" or not set yet
              if (args[1] || !this._state.hasOwnProperty(name)) {
                this._setState(name, args[0][name]);
                stateChanges.push(name);
              }
            }
          }
        }

        if (typeof args[0] === 'string') {
          // Setter for a specific key (state(key, value)). So, let's set that value!
          this._setState(args[0], args[1]);
          stateChanges.push(args[0]);
        }

        // we should have a set of items in stateChanges we need to now trigger observer
        // changes for each changed item
        for (var i = 0, len = stateChanges.length; i < len; i++) {
          newState = this._state[stateChanges[i]];
          this._observableEmitter.trigger(stateChanges[i], {
            newValue: newState.value,
            oldValue: newState.lastValue,
            revision: newState.rev
          });
        }
      },

      /**
       * Private utility method for actually setting a key in the state object.
       * Don't use this (it won't throw events)... use state() instead (which will).
       * @private
       *
       * @param {String} key - The key to set.
       * @param {*} val - The value to set.
       * @returns void
       */
      _setState: function(key, val){
        if (typeof this._state[key] === 'undefined') {
          // This key hasn't existed before.
          this._state[key] = {
            rev: 0,
            value: val,
            lastValue: undefined
          };
        }
        else {
          // This key already exists!
          this._state[key].rev++;
          this._state[key].lastValue = this._state[key].value;
          this._state[key].value = val;
        }
      },

      /**
       * Private utility method to detect if the passed object is a function
       * Pulled from Underscore.js (version 1.4.4)
       * @private
       *
       * @param {Function} obj - The Object to test.
       * @returns {Boolean} Whether or not the passed object is a function
       */
      _isFunction: function (obj) {
        return Object.prototype.toString.call(obj) === '[object Function]';
      },

      /**
       * Private utility method for wrapping one method around another
       * Pulled from Underscore.js (version 1.4.4)
       * @private
       *
       * @param {Function} func - The wrapped function.
       * @param {Function} wrapper - The wrapper function.
       * @returns {Function} The original function, wrapped in the new wrapper function
       */
      _wrap: function(func, wrapper) {
        return function() {
          var args = [func];
          ArrayProto.push.apply(args, arguments);
          return wrapper.apply(this, args);
        };
      },

      /**
       * Private utility method for binding a method to a given scope
       * Pulled from Underscore.js (version 1.4.4)
       * @private
       *
       * @param {Function} func - The function to be bound.
       * @param {Function} context - The scope to which the function should be bound.
       * @returns {Function} The original function bound to the passed context
       */
      _bind: function(func, context) {
        var nativeBind = Function.prototype.bind,
            slice = ArrayProto.slice;

        if (func.bind === nativeBind && nativeBind) {
          return nativeBind.apply(func, slice.call(arguments, 1));
        }

        var args = slice.call(arguments, 2);

        return function() {
          return func.apply(context, args.concat(slice.call(arguments)));
        };
      },

      /**
       * Private utility method for binding multiple methods to a given scope
       * Pulled from Underscore.js (version 1.4.4)
       * @private
       *
       * @param {Function} obj - Object containing the functions to be bound.
       * @returns {Object} The original has of functions bound to the context of the original object
       */
      _bindAll: function(obj) {
        var funcs = ArrayProto.slice.call(arguments, 1),
            f,
            func;

        if (funcs.length === 0) {
          funcs = this._getFunctions(obj);
        }

        for(f = 0; f < funcs.length; f++) {
          func = funcs[f];
          obj[func] = this._bind(obj[func], obj);
        }

        return obj;
      },

      /**
       * Private utility method that returns a sorted list of all functions in an object
       * Pulled from Underscore.js (version 1.4.4) _.functions/_.methods
       * @private
       *
       * @param {Function} obj - Object containing `functions
       * @returns {Array} A sorted array of function names
       */
      _getFunctions: function(obj) {
        var names = [],
            key;

        for (key in obj) {
          if (this._isFunction(obj[key])) {
            names.push(key);
          }
        }

        return names.sort();
      },

      /**
       * Listen for data changes in the state
       * @public
       * @param {String} name - the data name
       * @param {Function} fn - the callback function
       * @returns this - Control context
       */
      observe: function (name, fn) {
        this._observableEmitter.on(name, fn);
        return this;
      },

      /**
       * Remove a listener for data changes
       * @public
       * @param {String} name - the data name to remove callbacks from
       * @param {Function} fn - optional. if excluded, it will remove all callbacks under "name"
       * @returns this - Control context
       */
      unobserve: function (name, fn /* optional */) {
        this._observableEmitter.off(name, fn);
        return this;
      },

      /**
       * The very first method fired when a control is instantiated. Should be used
       * to initialize required properties and methods for control instance.
       * @public
       */
      beforeInit: function() {},
      /**
       * Called immediately before decorators are added to a control. Should be used
       * to set up any dependencies the decorators may rely on.
       * @public
       */
      beforeDecoration: function() {},
      /**
       * Fetches decorators then applies them
       *
       * @public
       * @returns {promise} promise that resolves when decorators have been applied
       */
      decorate: function() {
        if(this._config.decorators) {
          return this.loadDependencies(this._config.decorators)
                 .then(this._bind(this._applyDecorators, this));
        } else {
          // if there is no decoration return a dummy promise object and resolve it (hacky)
          return $.Deferred().resolve().promise();
        }
      },
      /**
       * Applies decorators to control
       *
       * @private
       * @param {Function} require - The method by which dependencies are fetched
       * @returns void
       */
      _applyDecorators: function(require) {
        var path,
            self = this,
            d,
            decoratorsLength = this._config.decorators.length;

        for(d = 0; d < decoratorsLength; d++) {
          path = this._config.decorators[d];
          if (path === 'require' || path === 'module' || path === 'exports') {
            // skip all AMD internals
            continue;
          }
          if(typeof require(path) !== 'function') {
            throw new TypeError('Decorator (' + path + ') is not a function');
          }
          Fiber.decorate(self, require(path));
        }
      },
      /**
       * Executed immediately after decorators are applied
       * @public
       */
      afterDecoration: function() {},
      /**
       * Executed immediately before dependencies are fetched
       * @public
       */
      beforeLoad: function() {},
      /**
       * Use necessary dependencies.  Called after dependencies are loaded.
       * @public
       * @return {Void}
       */
      afterLoad: function() {},
      /**
       * Attach any event listeners needed for this control.  Called after decorators and dependencies are loaded.
       * @public
       * @see BaseControl#detachEventListeners
       */
      attachEventListeners: function() {},
      /**
       * Remove/detach any event listeners attached by this control.  Called when the control is destroyed.
       * @public
       * @see BaseControl#destroy
       * @see BaseControl#attachEventListeners
       */
      detachEventListeners: function() {},
      /**
       * Happens just before the isReady promise is resolved
       * @public
       */
      afterInit: function() {},
      /**
       * Called if the object is externally procrastinated
       * @public
       */
      onResolve: function() {},
      /**
       * Execute a function before the wrapped function is called.
       * Wraps are not applied until after the control is ready.
       *
       * @public
       * @param {function} wrappedFunctionName The function to be modified
       * @param {(function|string)} before The function to execute before
       */
      before: function(wrappedFunctionName, before) {
        var control = this;

        this.isReady
        .then(function() {
          control[wrappedFunctionName] = control._wrap(control[wrappedFunctionName], function beforeFunction(original) {
            var args = ArrayProto.slice.apply(arguments, [1]);

            if(typeof before === 'string') {
              control[before].apply(control, args);
            } else {
              before.apply(control, args);
            }

            return original.apply(control, args);
          });
        });
      },
      /**
       * Execute a function after the wrapped function is called.
       * Wraps are not applied until after the control is ready.
       *
       * @public
       * @param {function} wrappedFunctionName The function to be modified
       * @param {(function|string)} after The function to execute after
       */
      after: function(wrappedFunctionName, after) {
        var control = this;

        this.isReady
        .then(function() {
          control[wrappedFunctionName] = control._wrap(control[wrappedFunctionName], function afterFunction(original) {
            var args = ArrayProto.slice.apply(arguments, [1]),
                originalReturn = original.apply(control, args);

            if(typeof after === 'string') {
              control[after].apply(control, args);
            } else {
              after.apply(control, args);
            }

            return originalReturn;
          });
        });
      },
      /**
       * Override a function on this instance of the control.
       * The function is not overridden until after the control is ready.
       *
       * @public
       * @param {function} clobberedFunctionName Name of the function to be overridden
       * @param {function} clobberingFunction The function to execute instead
       * @returns void
       */
      clobber: function(clobberedFunctionName, clobberingFunction) {
        var control = this;

        this.isReady
        .then(function() {
          control[clobberedFunctionName] = control._bind(clobberingFunction, control);
        });
      },
      /**
       * @public
       * @param {string[]} dependencies Array of string paths
       * @returns {promise}
       */
      loadDependencies: function(dependencies) {
        var deferral = new $.Deferred();

        dependencies = dependencies || this._config.dependencies || [];
        dependencies.unshift('require');

        require(dependencies, function(require) {
          deferral.resolve(require);
        });

        return deferral.promise();
      },
      /**
       * Fetch and attach CSS files
       * @public
       * @param {string[]} cssPaths Array of string paths
       * @return {promise}
       */
      loadCss: function(cssPaths) {
        var control = this,
            cssDeferral = new $.Deferred();

        cssPaths.unshift('require');
        require(cssPaths, function(require) {
          var path;

          cssPaths.forEach(function(path){
            if (path !== 'require' && path !== 'module' && path !== 'exports') {
              // skip all AMD internals
              require(path).attach();
            }
          });
          cssDeferral.resolve();
        });

        return cssDeferral.promise();
      }
    };
  }));

  /*
   * What is this?
   ** This is an exporter module that is used by decorators to make them
   ** Inject-friendly.
   ** See SampleDecorator.js as an example
   */
  LIModules.exports('exporter', function( mod, def, factory ) {
    var ranFactory = null;

    if (mod && mod.exports) {
      ranFactory = factory();
      mod.exports = ranFactory;
    }
    else if (def && def.amd) {
      def(factory);
    }
    else {
      ranFactory = factory();
      window[factory.id] = ranFactory;
    }

    return ranFactory;
  });

}(window.require));

(function(LIModules){var $=LIModules.requires("jquery"),_=LIModules.requires("underscore"),dust=LIModules.requires("dust"),Controls=LIModules.imports("Controls")||{},BaseControl=LIModules.requires("BaseControl"),i18n=LIModules.requires("i18n"),parseFragment=LIModules.imports("Controls.parseFragment")||function(){},env=LIModules.imports("environment"),lix=LIModules.imports("LiX"),jSecure=LIModules.imports("jSecure"),previousClose=null;var _registerSingleton=function(closeFunction){if(previousClose&&
typeof previousClose==="function")previousClose();previousClose=closeFunction};var _noop=function(){};function _setHtml(el,html,isUnsafe){var jSecureSetHtml=jSecure&&jSecure.setElementContent;var canUseJSecure=!isUnsafe&&lix&&lix.get("jsecure_Dialog")==="enabled";if(canUseJSecure&&jSecureSetHtml)jSecure.setElementContent(el,html,{});else $(el).html(html)}var DialogBox=BaseControl.extend(function(base){var DEFAULT_CONFIG={width:500,top:150,xOffset:0,yOffset:0,errorMessage:"We're sorry. Something unexpected happened and your request could not be completed. Please try again.",
closeText:"Close",startText:"Dialog start",endText:"Dialog end",customClassName:undefined,dialogTemplate:"tl/shared/dialog",dialogCss:env&&env.consumer2?["css!scss/modules/dialog/dialog_standalone"]:["css!scss/modules/dialog_v3"],cssDependencies:null,templateDataUrl:null,centerVertically:false,fitDialogBoxToWindow:true,callbacks:{beforeOpen:_noop,afterOpen:_noop,beforeClose:_noop,afterClose:_noop}},CLICK="click",KEYUP="keyup",RESIZE="resize",CLASS_DIALOG_BODY="dialog-body",BOTTOM_SPACE=50;function getRegisteredI18n(){var dialogi18n=
[{key:"errorMessage",value:"dialogbox_error_generic"},{key:"closeText",value:"dialogbox_close"},{key:"startText",value:"dialogbox_start"},{key:"endText",value:"dialogbox_end"}],len=dialogi18n.length,i=0,output={},i18nValue="";for(;i<len;i++){i18nValue=i18n.get(dialogi18n[i].value);if(i18nValue)output[dialogi18n[i].key]=i18nValue}return output}return{beforeDecoration:function(){this._$dialog=undefined;this._config=_.defaults(this._config,getRegisteredI18n(),DEFAULT_CONFIG);this._config.callbacks=_.defaults(this._config.callbacks,
DEFAULT_CONFIG.callbacks);this._requiredTemplates=[this._config.dialogTemplate];this._requiredCSS=_.flatten(_.compact([this._config.dialogCss,this._config.cssDependencies]));this._href=this._config.templateDataUrl||this._$el.data("href")||this._$el.attr("href")},attachEventListeners:function(){this._$el.on(CLICK,_.bind(this._eventOpen,this))},detachEventListeners:function(){this._$el.off(CLICK)},onResolve:function(mapping){this.open()},_eventOpen:function(evt){evt.preventDefault();this.open()},_eventClose:function(evt){evt.preventDefault();
this.close()},_keyupHandler:function(evt){if(evt.which===27)this._eventClose(evt)},_resizeHandler:_.throttle(function(evt){if(this._$dialog&&this._$dialog.length){this._$dialog.css(this._getPosition());this._fitToWindow()}},500),_attachEventListeners:function(){this._$dialog.on(CLICK,".dialog-close",this._eventClose);$(document).on(KEYUP,this._keyupHandler);$(window).on(RESIZE,this._resizeHandler)},open:function(){if(!this._opened){this._config.callbacks.beforeOpen(this);this._opened=true;return $.when(this.loadDependencies(this._requiredTemplates),
this.loadCss(this._requiredCSS)).then(_registerSingleton(_.bind(this.close,this))).then(_.bind(this._render,this)).then(_.bind(this.setFocusToDialog,this)).then(_.bind(function(){this._config.callbacks.afterOpen(this)},this)).fail(_.bind(this.close,this))}},close:function(){if(this._opened)this._config.callbacks.beforeClose(this);if(this._$dialog)this._$dialog.remove();this._rendered=false;$(document).off(KEYUP,this._keyupHandler);$(window).off(RESIZE,this._resizeHandler);if(this._opened){this._opened=
false;this._$el.focus();this._config.callbacks.afterClose(this)}},destroy:function(){this.close();this.detachEventListeners();base.destroy.apply(this,arguments)},setFocusToDialog:function(){this._$dialog.attr("tabindex",-1);this._$dialog.focus()},_loadContent:function(){var $targetEl=$(this._href),targetElContent=$targetEl.html(),deferral=new $.Deferred;if($targetEl[0]||!this._href)deferral.resolve(targetElContent);else deferral.reject();return deferral.promise()},_buildMarkup:function(){return this._renderDialogMarkup().then(this._renderMarkUpSuccess,
this._renderMarkUpFailure)},_renderMarkUpSuccess:function(dialogMarkup){this._$dialog=$(dialogMarkup).prop("id","modeless-dialog");if(this._config.customClassName)this._$dialog.addClass(this._config.customClassName);$("body").append(this._$dialog);this._$dialog.css(this._getPosition());this._rendered=true},_renderMarkUpFailure:function(){throw new Error("Unable to render dialog markup");},_loadContentSuccess:function(dialogContent){this.setDialogBodyContent(dialogContent)},_loadContentFail:function(){this.setDialogBodyContent(this._config.errorMessage)},
setDialogBodyContent:function(html,options){var dialogBody=this._$dialog.find("."+CLASS_DIALOG_BODY)[0];options=options||{};_setHtml(dialogBody,html,options.isUnsafe);parseFragment(this._$dialog);this._$dialog.css(this._getPosition());this._fitToWindow()},_render:function(){return this._buildMarkup().then(this._loadContent).then(this._loadContentSuccess,this._loadContentFail).always(this._attachEventListeners)},_renderDialogMarkup:function(){var deferral=new $.Deferred;dust.render(this._config.dialogTemplate,
this._config,function postDustRender(err,out){if(err)deferral.reject(err);else deferral.resolve(out)});return deferral.promise()},_getPosition:function(){var $win=$(window),verticalOffset=this._config.top,horizontalOffset=$win.innerWidth()/2-this._config.width/2+this._config.xOffset;if(this._config.centerVertically){verticalOffset=$win.innerHeight()/2-this._$dialog.outerHeight()/2+this._config.yOffset;verticalOffset=Math.max(verticalOffset,this._config.top)}return{left:horizontalOffset,top:verticalOffset}},
_fitToWindow:function(){var availableVerticalSpace=$(window).innerHeight()-this._config.top-BOTTOM_SPACE,titleHeight=this._$dialog.find(".dialog-title").outerHeight(),$ghostDialog;$ghostDialog=this._$dialog.clone().css("visibility","hidden");$ghostDialog.find(".dialog-body").height("auto");$("body").append($ghostDialog);if($ghostDialog.height()>availableVerticalSpace&&this._config.fitDialogBoxToWindow)this._$dialog.find(".dialog-body").height(availableVerticalSpace-titleHeight);else this._$dialog.find(".dialog-body").height("auto");
$ghostDialog.remove()}}});LIModules.exports("DialogBox",DialogBox)})(window.LIModules);
(function(LIModules){var $=LIModules.requires("jquery"),_=LIModules.requires("underscore"),dust=LIModules.requires("dust"),DialogBox=LIModules.requires("DialogBox");var ModalDialogBox=DialogBox.extend(function(base){var DEFAULT_CONFIG={maskTemplate:"tl/shared/dialog_mask",fitToWindow:true,closeOnMaskClick:true},CLICK="click",KEYUP="keyup",RESIZE="resize",FOCUSIN="focusin";return{beforeDecoration:function(){base.beforeDecoration.call(this);this._config=_.defaults(this._config,DEFAULT_CONFIG);this._requiredTemplates=
[this._config.maskTemplate,this._config.dialogTemplate];this._requiredCSS=_.flatten(_.compact([this._config.dialogCss,this._config.cssDependencies]));this._$mask=undefined;this._initialHtmlOverflowValue=undefined;if(!this._config.fitToWindow)this._fitToWindow=function(){}},_maskClickHandler:function(evt){if($(evt.target).is("#dialog-mask"))this._eventClose(evt)},_attachEventListeners:function(){base._attachEventListeners.call(this);if(this._config.closeOnMaskClick)this._$mask.on(CLICK,this._maskClickHandler);
$(document).on(FOCUSIN,this._trapFocus)},close:function(){if(this._opened)this._config.callbacks.beforeClose(this);if(this._$mask)this._$mask.remove();$(document).off(KEYUP,this._keyupHandler);$(window).off(RESIZE,this._resizeHandler);$("html").css({overflow:this._initialHtmlOverflowValue});this._rendered=false;if(this._opened){this._opened=false;this._$el.focus();this._config.callbacks.afterClose(this)}},_buildMarkup:function(){return $.when(this._renderMaskMarkup(),this._renderDialogMarkup()).then(this._renderMarkUpSuccess,
this._renderMarkUpFailure)},_renderMarkUpSuccess:function(maskMarkup,dialogMarkup){this._$mask=$(maskMarkup);this._$dialog=$(dialogMarkup);this._$mask.append(this._$dialog);if(!this._config.fitToWindow)this._$mask.css({"overflow-y":"auto"});$("body").append(this._$mask);this._$dialog.css(this._getPosition());this._rendered=true},_render:function(){this._initialHtmlOverflowValue=$("html").css("overflow");$("html").css({overflow:"hidden"});return this._buildMarkup().then(this._loadContent).then(this._loadContentSuccess,
this._loadContentFail).always(this._attachEventListeners)},_renderMaskMarkup:function(){var deferral=new $.Deferred;dust.render(this._config.maskTemplate,this._config,function postDustRender(err,out){if(err)deferral.reject(err);else deferral.resolve(out)});return deferral.promise()},_trapFocus:function(evt){evt.stopPropagation();if(this._opened)if(this._$dialog.is($(evt.target))||this._$dialog.has($(evt.target)).length>0)return false;else this._$dialog.focus()}}});LIModules.exports("ModalDialogBox",
ModalDialogBox)})(window.LIModules);
(function(){var $=LIModules.requires("jquery"),_=LIModules.requires("underscore"),ModalDialogBox=LIModules.requires("ModalDialogBox"),WebTracking=LIModules.requires("WebTracking"),i18n=LIModules.requires("i18n"),Spinner,SpamReportDialog;SpamReportDialog=ModalDialogBox.extend(function(base){var _selectors={DIALOG_MASK:"#dialog-mask",DIALOG:"#dialog",DIALOG_BODY:"#dialog .dialog-body",DIALOG_BACK_BUTTON:"#dialog .back",SPAM_REPORT_OPTION:"#dialog .dialog-body dl.option"},_constants={ENTER:13,SPACE:32},
TL_PATH="tl/shared",SCSS_PATH="scss/modules/dialog/";function getSpinner(){function noop(){}Spinner=Spinner||LIModules.imports("Spinner");return Spinner||{showSpinner:noop,hideSpinner:noop}}return{beforeDecoration:function(){this._config.title=this._config.title||this._$el.data("first-message");this._config=_.defaults(this._config,{customClassName:"dialog-v2",dialogTemplate:(this._config.tlPathPrefix||TL_PATH)+"/"+(this._config.style==="davinci"?"spam_report_dialog":"spam_report_dialog_art_deco"),
successTemplate:(this._config.tlPathPrefix||TL_PATH)+"/"+(this._config.style==="davinci"?"spam_report_dialog_success":"spam_report_dialog_success_art_deco"),callbacks:{submitSuccess:this._config.callbacks&&this._config.callbacks.submitSuccess?this._config.callbacks.submitSuccess:function noop(){}}});base.beforeDecoration.call(this)},_loadContent:function(){var dustTemplatePromise,dependencies=[this._config.dialogTemplate,this._config.successTemplate],dependenciesToLoad=[],i,len;getSpinner().showSpinner(this._$dialog.find(_selectors.DIALOG_BODY));
if(dust&&dust.cache)for(i=0,len=dependencies.length;i<len;i++)if(!dust.cache.hasOwnProperty(dependencies[i]))dependenciesToLoad.push(dependencies[i]);dustTemplatePromise=this.loadDependencies(dependenciesToLoad);return $.when(dustTemplatePromise,$.ajax({url:this._href}))},_loadContentSuccess:function(require,ajaxResponse){var markupData=ajaxResponse[0];var totalLength=markupData.numberOfSteps,pageIndices=[],i;for(i=1;i<=totalLength;i+=1)pageIndices.push(i);markupData.pageIndices=pageIndices;this._stack.push(markupData);
this._config.pageIndices=markupData.pageIndices;if(markupData.resultScreen)this._config.resultScreen=markupData.resultScreen;this._updateContent(this._config.dialogTemplate,_.extend({},this._state,this._config,markupData),this._dustRenderSuccess)},_dustRenderSuccess:function(err,out){if(!err){$(_selectors.DIALOG_MASK).html(out);this._renderMarkUpSuccess(_selectors.DIALOG_MASK,_selectors.DIALOG);this._attachPostRenderHandler();$(_selectors.DIALOG).attr("tabindex",-1).focus()}},_renderReportSuccess:function(){var currentContext=
this._stack[this._stack.length-1];getSpinner().hideSpinner(this._$dialog.find(_selectors.DIALOG_BODY));this._updateContent(this._config.successTemplate,_.extend({},this._state,this._config,currentContext),this._dustRenderSuccess);this._config.callbacks.submitSuccess()},_track:function(trackingId,data){data=data||{};WebTracking.trackUserAction(trackingId,data)},_updateContent:function(template,data,callback){dust.render(template,data,callback)},_optionSelected:function(evt){var $target=$(evt.currentTarget),
trackingId=$target.data("tracking-id"),optionIndex=$target.data("option-index"),optionUrl=$target.data("option-url"),currentContext=this._stack[this._stack.length-1];this._track(trackingId);if(currentContext.options){currentContext=currentContext.options[optionIndex].section||currentContext.options[optionIndex].action;this._state.pageCount+=1;this._stack.push(currentContext)}if(optionUrl){getSpinner().showSpinner(this._$dialog.find(_selectors.DIALOG_BODY));var postData={};postData["csrfToken"]=(LI.readCookie("JSESSIONID")||
"").replace(/"/g,"");$.ajax({url:optionUrl,method:"POST",headers:{"X-IsAJAXForm":1},data:postData,success:this._renderReportSuccess})}else this._updateContent(this._config.dialogTemplate,_.extend({},this._state,this._config,currentContext),this._dustRenderSuccess);$target.off("click",this._optionSelected);$target.off("keypress",this._optionSelected)},_backButtonClickHandler:function(evt){this._stack.pop();this._state.pageCount-=1;var previousContext=this._stack[this._stack.length-1];this._updateContent(this._config.dialogTemplate,
_.extend({},this._state,this._config,previousContext),this._dustRenderSuccess)},open:function(){var externalsPath=this._config.externalsPath||(this._config.style==="davinci"?SCSS_PATH+"spam_report_dialog":SCSS_PATH+"_spam_report_dialog_art_deco");this._stack=[];this._state={pageCount:1};this.loadCss(["css!"+externalsPath]).then(_.bind(base.open,this))},_attachPostRenderHandler:function(){var self=this;$(_selectors.SPAM_REPORT_OPTION).keypress(function(evt){if(evt.keyCode===_constants.ENTER||evt.keyCode===
_constants.SPACE)self._optionSelected(evt)});$(_selectors.SPAM_REPORT_OPTION).on("click",this._optionSelected);$(_selectors.DIALOG_BACK_BUTTON).on("click",this._backButtonClickHandler);this._attachEventListeners()}}});LIModules.exports("SpamReportDialog",SpamReportDialog)})();
(function(LIModules){var CLASS_SPINNER="spinner",$=LIModules.requires("jquery");function createSpinner(){return $('\x3cdiv class\x3d"'+CLASS_SPINNER+'"\x3e\x3c/div\x3e')}LIModules.exports("Spinner",{showSpinner:function($el){var $spinner=$el.children("."+CLASS_SPINNER);if($spinner.length===0)$el.append(createSpinner()).children("."+CLASS_SPINNER).height($el.prop("scrollHeight"));else $el.children("."+CLASS_SPINNER).show().height($el.prop("scrollHeight"))},hideSpinner:function($el){$el.children("."+
CLASS_SPINNER).hide()}})})(window.LIModules);
define("css!scss/themes/katy/chrome/hopscotch",function(hopscotchCss){return{attach:function(){}}});
(function(){var i18n=LIModules.imports("i18n");var Bidi=function(){var matches={left:"right",right:"left",ltr:"rtl",rtl:"ltr"},cachedReadsRTL;function _isFunction(val){return typeof val==="function"}function _isBoolean(val){return val===true||val===false||Object.prototype.toString.call(val)==="[object Boolean]"}function _isUndefined(val){return val===void 0}function _result(val){return _isFunction(val)?val():val}function _resolveMatching(val){val=_result(val);if(_isBoolean(val))val=!val;else if(val&&
matches[val])val=matches[val];return val}function _readsRTL(){return cachedReadsRTL}function isRtl(content){if(content===void 0||content===null)return false;var i=0,ch,contentLength=content.length,WHITESPACES=" \n\r\t\f\u00a0\u2028\u2029".split(""),EXCLUDED_CHARACTERS="~!@#$%^\x26*()_+`1234567890-\x3d{}|[]\\:\";'\x3c\x3e?,./".split(""),EXCLUSION_SET=WHITESPACES.concat(EXCLUDED_CHARACTERS),ARABIC_LOW="\u0590",ARABIC_HIGH="\u06ff";function contains(obj,target){if(obj===null)return false;var nativeIndexOf=
Array.prototype.indexOf;if(nativeIndexOf&&obj.indexOf===nativeIndexOf)return obj.indexOf(target)!==-1;return Array.prototype.some(obj,function(value){return value===target})}for(;i<contentLength;i++){ch=content.charAt(i);if(!contains(EXCLUSION_SET,ch))break}if(i>=contentLength)return false;return ch>=ARABIC_LOW&&ch<=ARABIC_HIGH?true:false}function flip(ltr,rtl){var val;if(_readsRTL())if(_isUndefined(rtl))val=_resolveMatching(ltr);else val=_result(rtl);else val=_result(ltr);return val}function applyWhenRTL(val){return this.flip(null,
val)}function init(){cachedReadsRTL=i18n&&i18n.page&&i18n.page.readsRTL()}init();return{init:init,flip:flip,applyWhenRTL:applyWhenRTL,isRtl:isRtl}}();LIModules.exports("Bidi",Bidi)})();
(function(){var BaseControl=LIModules.requires("BaseControl"),Bidi=LIModules.imports("Bidi"),$=LIModules.requires("jquery"),_=LIModules.requires("underscore");var Tooltip=BaseControl.extend(function(base){var ANIMATE_MAP,ANIMATION_EVENT,ANIMATION_EVENT_MAP,A11Y,DEFAULTS,DIRECTIONS,EVENTS,KEYS,TOOLTIP,ERRORS,ANIMATED="animated",AUTO="auto",BODY="body",ID="id",SHOWN="shown",PENDING="pending",DOCUMENT=$(document),WINDOW=$(window),DEFAULT_DELAY_OPEN=50,DEFAULT_DELAY_CLOSE=250,DEFAULT_OFFSET_EXTRA=5,DEFAULT_OFFSET=
0,NULL=null,TRUE=true,FALSE=false;EVENTS={MOUSEOVER:"mouseover",MOUSEOUT:"mouseout",FOCUS:"focus",BLUR:"blur",KEYDOWN:"keydown"};KEYS={ESCAPE:27};ANIMATION_EVENT_MAP={animation:"animationend",webkitAnimation:"webkitAnimationEnd",MozAnimation:"mozAnimationEnd",OAnimation:"oanimationend"};A11Y={DESCRIBED_BY:"aria-describedby",ROLE:"role",TABINDEX:"tabIndex"};DIRECTIONS={BOTTOM:"bottom",TOP:"top",RIGHT:"right",LEFT:"left"};ANIMATE_MAP={TOP:"fade-in-down",BOTTOM:"fade-in-up",RIGHT:"fade-in-left",LEFT:"fade-in-right"};
TOOLTIP={TOOLTIP:"tooltip",OVERLAY:"tooltip-overlay",CONTENT:"tooltip-content",ARROW:"tooltip-arrow",CONTAINER:"tooltip-content-container"};ERRORS={TOOLTIP_ALREADY_SHOWING:"Tooltip already showing.",TOOLTIP_CLOSED_BEFORE_FULLY_OPENED:"Tooltip closed before it fully opened.",USER_INTERACTING_TOOLTIP:"User is interacting with tooltip.",USER_MOUSEOUT:"User is no long hovering."};DEFAULTS={delayOpen:DEFAULT_DELAY_OPEN,delayClose:DEFAULT_DELAY_CLOSE,doAnimate:TRUE,direction:DIRECTIONS.BOTTOM,isFlippable:TRUE,
offsetExtra:DEFAULT_OFFSET_EXTRA,offsetX:DEFAULT_OFFSET,offsetY:DEFAULT_OFFSET,type:TOOLTIP.TOOLTIP,width:AUTO,tooltipContentID:NULL,dependencies:["scripts/shared/Bidi"],cssDependencies:["css!scss/modules/tooltip"]};function _browserAnimationEvent(){var el=document.body;for(var a in ANIMATION_EVENT_MAP)if(typeof el.style[a]!=="undefined")return ANIMATION_EVENT_MAP[a]}ANIMATION_EVENT=_browserAnimationEvent();return{beforeDecoration:function(){var $el=this._$el;this._config=_.defaults(this._config,
DEFAULTS);if(_.isUndefined($el.attr(A11Y.TABINDEX)))$el.attr(A11Y.TABINDEX,0)},attachEventListeners:function(){this._$el.on(EVENTS.MOUSEOVER+" "+EVENTS.FOCUS,this._setTriggerMouseover).on(EVENTS.MOUSEOUT+" "+EVENTS.BLUR,this._removeTriggerMouseover)},_attachTooltipListeners:function(){this.$overlay.on(EVENTS.MOUSEOVER,this._setTooltipMouseover).on(EVENTS.MOUSEOUT,this._removeTooltipMouseover)},_attachOpenListeners:function(){DOCUMENT.on(EVENTS.KEYDOWN,this._closeIfEscapeKey)},_setTriggerMouseover:function(){this.isMouseoverTrigger=
TRUE;this.open()},_removeTriggerMouseover:function(){this.isMouseoverTrigger=FALSE;this.close()},_setTooltipMouseover:function(){this.isMouseoverTooltip=TRUE},_removeTooltipMouseover:function(){this.isMouseoverTooltip=FALSE;this.close()},_closeIfEscapeKey:function(evt){if(evt.which===KEYS.ESCAPE)this._hideTooltip()},detachEventListeners:function(){this._$el.off(EVENTS.MOUSEOVER+" "+EVENTS.FOCUS,this._setTriggerMouseover).off(EVENTS.MOUSEOUT+" "+EVENTS.BLUR,this._removeTriggerMouseover);if(this.$overlay)this.$overlay.off(EVENTS.MOUSEOVER,
this._setTooltipMouseover).off(EVENTS.MOUSEOUT,this._removeTooltipMouseover);this._detachOpenListeners()},_detachOpenListeners:function(){DOCUMENT.off(EVENTS.KEYDOWN,this._closeIfEscapeKey)},destroy:function(){this.detachEventListeners();if(this.$overlay)this.$overlay.remove()},_loadCss:function(){return this.loadCss(this._config.cssDependencies)},open:function(){var _isOpening;if(this._isOpening&&this._isOpening.state()===PENDING)return this._isOpening.promise();this._isOpening=_isOpening=new $.Deferred;
if(!this.$overlay)this._loadCss().then(this._onFirstOpen).then(this._open).then(_isOpening.resolve,_isOpening.reject);else this._open().then(_isOpening.resolve,_isOpening.reject);return _isOpening.then(_.bind(this._attachOpenListeners,this)).promise()},_open:function(){var deferred=new $.Deferred,that=this;if(this.isMouseoverTrigger===FALSE)return deferred.reject(new Error(ERRORS.USER_MOUSEOUT)).promise();if(!this.showTimer)this.showTimer=_.delay(function(){that._showTooltip().then(deferred.resolve)},
this._config.delayOpen);else deferred.reject(new Error(ERRORS.TOOLTIP_ALREADY_SHOWING));return deferred.promise()},_onFirstOpen:function(){var config=this._config;if(Bidi)config.offsetX=Bidi.flip(config.offsetX,-config.offsetX);this.createOverlay();this.setContent();this.isCreating=false},_showTooltip:function(){var deferred=new $.Deferred,config=this._config,$overlay=this.$overlay,that=this;this.currentDirection=config.direction;$overlay.addClass(SHOWN).appendTo($(BODY));this.calculatePosition();
if(config.isFlippable)this._setTooltipStyling($overlay);if(ANIMATION_EVENT&&config.doAnimate)$overlay.one(ANIMATION_EVENT,function(){deferred.resolve(that)});else deferred.resolve(this);return deferred.promise()},close:function(){var deferred=new $.Deferred,that=this;if(this.showTimer&&this._isOpening&&this._isOpening.state()===PENDING){clearTimeout(this.showTimer);this._isOpening.reject(new Error(ERRORS.TOOLTIP_CLOSED_BEFORE_FULLY_OPENED))}_.delay(function(){that._close().then(deferred.resolve,deferred.reject)},
this._config.delayClose);return deferred.then(this._detachOpenListeners).promise()},_close:function(){var deferred=new $.Deferred;if(!this.isMouseoverTooltip&&!this.isMouseoverTrigger){this._hideTooltip();deferred.resolve(this)}else deferred.reject(new Error(ERRORS.USER_INTERACTING_TOOLTIP));return deferred.promise()},_hideTooltip:function(){this.showTimer=null;if(this.$overlay)this.$overlay.removeClass(SHOWN).detach()},createOverlay:function(){var $overlay=$("\x3cdiv/\x3e").attr(ID,TOOLTIP.OVERLAY),
$arrow=$("\x3cspan/\x3e").addClass(TOOLTIP.ARROW);$overlay.append($arrow);this._setTooltipStyling($overlay);this.$overlay=$overlay;this._attachTooltipListeners()},setContent:function(){var $content=$("\x3cdiv/\x3e").addClass(TOOLTIP.CONTENT),$contents=this._setContent();this._addAccessibility($contents);$content.append($contents);this.$overlay.prepend($content)},_setContent:function(){var $content=NULL,$parent;if(this._config.tooltipContentID){$content=$("#"+this._config.tooltipContentID);$parent=
$content.parent();if($parent.hasClass(TOOLTIP.CONTAINER)&&$parent.children().length===1)$parent.remove()}return $content},_addAccessibility:function($content){var aria=this._$el.attr(A11Y.DESCRIBED_BY),role=$content.attr(A11Y.ROLE);if(_.isUndefined(aria))this._$el.attr(A11Y.DESCRIBED_BY,this._config.tooltipContentID);if(_.isUndefined(role))$content.attr(A11Y.ROLE,TOOLTIP.TOOLTIP)},_setTooltipStyling:function($overlay){var config=this._config,type=config.type,direction=this.currentDirection||config.direction,
doAnimate=config.doAnimate,classes=[type,"tooltip-"+direction];$overlay.removeClass();if(config.overlayClasses)classes.push(config.overlayClasses);$overlay.addClass(classes.join(" ")).css({width:config.width});if(this.showTimer)$overlay.addClass(SHOWN);if(doAnimate)$overlay.addClass(ANIMATED+" "+ANIMATE_MAP[direction.toUpperCase()])},_isFlippable:function(isFlipped){return this._config.isFlippable&&!isFlipped},_isAboveViewport:function(topEdge){return topEdge<WINDOW.scrollTop()},_isBelowViewport:function(bottomEdge){return bottomEdge>
WINDOW.height()+WINDOW.scrollTop()},_isLeftOfViewport:function(leftEdge){return leftEdge<WINDOW.scrollLeft()},_isRightOfViewport:function(rightEdge){return rightEdge>WINDOW.width()+WINDOW.scrollLeft()},calculatePosition:function(){var pos={},config=this._config,offset=this._$el.offset(),top=offset.top,left=offset.left,bidiRL=Bidi&&Bidi.flip(DIRECTIONS.RIGHT,DIRECTIONS.LEFT)||DIRECTIONS.RIGHT,bidiLR=Bidi&&Bidi.flip(DIRECTIONS.LEFT,DIRECTIONS.RIGHT)||DIRECTIONS.LEFT;this.currentTop=top;this.currentLeft=
left;switch(config.direction){case DIRECTIONS.BOTTOM:pos=this.calculateBottom();break;case DIRECTIONS.TOP:pos=this.calculateTop();break;case bidiRL:pos=this.calculateRight();break;case bidiLR:pos=this.calculateLeft();break;default:pos=this.calculateBottom()}this.$overlay.css(pos);return pos},calculateBottom:function(isFlipped){var config=this._config,$overlay=this.$overlay,$el=this._$el,heightOffset,widthOffset,elWidthOffset,top,left;isFlipped=isFlipped||false;heightOffset=$overlay.outerHeight()+
config.offsetExtra;elWidthOffset=$el.outerWidth()/2;widthOffset=$overlay.outerWidth()/2;top=this.currentTop-heightOffset+config.offsetY;left=this.currentLeft-widthOffset+elWidthOffset+config.offsetX;left=this._leftOfViewportAdjustment(left);if(this._isFlippable(isFlipped)&&this._isAboveViewport(top)){this.currentDirection=DIRECTIONS.TOP;return this.calculateTop(true)}else return{top:top,left:left}},calculateTop:function(isFlipped){var config=this._config,$overlay=this.$overlay,$el=this._$el,heightOffset,
widthOffset,elWidthOffset,bottom,top,left;isFlipped=isFlipped||false;heightOffset=$el.outerHeight()+config.offsetExtra;elWidthOffset=$el.outerWidth()/2;widthOffset=$overlay.outerWidth()/2;top=this.currentTop+heightOffset+config.offsetY;left=this.currentLeft-widthOffset+elWidthOffset+config.offsetX;bottom=top+$overlay.outerHeight();left=this._leftOfViewportAdjustment(left);if(this._isFlippable(isFlipped)&&this._isBelowViewport(bottom)){this.currentDirection=DIRECTIONS.BOTTOM;return this.calculateBottom(true)}else return{top:top,
left:left}},_leftOfViewportAdjustment:function(left){var $arrow=$(this.$overlay.children(".tooltip-arrow")[0]),leftAdjustment=left,$el=this._$el;if(this._isLeftOfViewport(left)){$arrow.css("left",$el.outerWidth()+left/2);leftAdjustment=DEFAULT_OFFSET_EXTRA}else $arrow.css("left",this.$overlay.outerWidth()/2);return leftAdjustment},calculateLeft:function(isFlipped){var config=this._config,$overlay=this.$overlay,$el=this._$el,heightOffset,widthOffset,elHeightOffset,right,top,left;isFlipped=isFlipped||
false;widthOffset=$el.outerWidth()+config.offsetExtra;elHeightOffset=$el.outerHeight()/2;heightOffset=$overlay.outerHeight()/2;top=this.currentTop-heightOffset+elHeightOffset+config.offsetY;left=this.currentLeft+widthOffset+config.offsetX;right=left+$overlay.outerWidth();if(this._isFlippable(isFlipped)&&this._isRightOfViewport(right)){this.currentDirection=DIRECTIONS.RIGHT;return this.calculateRight(true)}else return{top:top,left:left}},calculateRight:function(isFlipped){var config=this._config,$overlay=
this.$overlay,$el=this._$el,heightOffset,widthOffset,elHeightOffset,top,left;isFlipped=isFlipped||false;widthOffset=$overlay.outerWidth()+config.offsetExtra;elHeightOffset=$el.outerHeight()/2;heightOffset=$overlay.outerHeight()/2;top=this.currentTop-heightOffset+elHeightOffset+config.offsetY;left=this.currentLeft-widthOffset+config.offsetX;if(this._isFlippable(isFlipped)&&this._isLeftOfViewport(left)){this.currentDirection=DIRECTIONS.LEFT;return this.calculateLeft(true)}else return{top:top,left:left}}}});
LIModules.exports("Tooltip",Tooltip)})();
!function(a){function b(){this.nodes={},this.requests={},n.addListener(a,i,n.bind(this.receiveMessage,this))}function c(b){var c,e=n.getQueryParams();b=b||{},c=b.remote,this.channel=b.channel||e[l]||"e_"+(new Date).getTime(),this.container=c?new d(this.channel,c,b.container):null,c||(this.remoteWindow=a.parent),this.remoteOrigin=this._getRemoteOrigin(c)||e[k],this.methods=b.methods||{},this.methods[j]=this._buildReady(b.ready),this.container||this._sendDiscovery()}function d(b,c,d){var e=a.document,f=this.el=e.createElement("iframe");c&&c.match(m)&&(f.name=f.id=b,f.src=this.buildFrameSrc(c),d?this.setAttributes(d):(this.setDefaults(),e.getElementsByTagName("body")[0].appendChild(f)))}function e(a,b,c){var d={method:a};b&&(d.params=b),c||(this.id=d.id=this._generateId()),this.payload=d}function f(a){function c(b){function c(a){return function(){var b=g.addRequest(a,[].slice.call(arguments));return d.send(b.payload),b}}for(var f=b.length;f--;)e[b[f]]=c(b[f]);a.methods&&d.container&&d._sendDiscovery()}var d,e=this,f=a.ready;g||(g=new b),f?a.ready=function(a){c(a),f()}:a.ready=c,d=g.addNode(a),this.$destroy=function(){g.removeNode(d)},this.$container=function(){return d.container&&d.container.el},this.VERSION="0.3.1"}var g,h="2.0",i="message",j="rpc.discover",k="e_origin",l="e_channel",m=/^https?:\/\//,n={bind:function(a,b){return function(){a.apply(b,arguments)}},isArray:function(a){return"[object Array]"===Object.prototype.toString.call(a)},getQueryParams:function(){function b(a){return a.replace(/[\x00'"<\\]/g,"�")}for(var c,d,e=a.location.search.slice(1).split("&"),f={};e.length;)d=e.pop(),d&&(c=d.split("="),c.length>1&&(f[decodeURIComponent(c[0])]=b(decodeURIComponent(c[1]))));return f}};a.addEventListener?n.addListener=function(a,b,c){a.addEventListener(b,c,!1)}:a.attachEvent&&(n.addListener=function(a,b,c){a.attachEvent("on"+b,c)}),b.prototype={addNode:function(a){var b=new c(a);return this.nodes[b.channel]=b,b},addRequest:function(a,b){var c=new e(a,b);return this.requests[c.id]=c,c},removeNode:function(a){delete this.nodes[a.channel],a.destroy()},_parseJSONMessage:function(a){try{return JSON.parse(a)}catch(b){return null}},receiveMessage:function(a){var b,c;b=this._parseJSONMessage(a.data),b&&(c=this.nodes[b.channel],c&&a.origin===c.remoteOrigin&&(b.method?this.processMessage(c,b):(this.requests[b.id].process(b),delete this.requests[b.id])))},processMessage:function(a,b){var c,d=a.methods[b.method],e=a.buildCallback(this._buildResultPayload,b.id),f=a.buildCallback(this._buildErrorPayload,b.id),g=b.params;g=n.isArray(g)?g:[g],c=d.apply(a,g.concat(e,f)),c&&e(c)},_buildResultPayload:function(a,b){return{result:a,id:b}},_buildErrorPayload:function(a,b){return{error:{code:-32099,message:a},id:b}}},c.prototype={send:function(b){var c=this;b.jsonrpc=h,b.channel=c.channel,a.setTimeout(function(){c.remoteWindow.postMessage(JSON.stringify(b),c.remoteOrigin)},10)},destroy:function(){this.container&&(this.container.destroy(),this.container=null)},buildCallback:function(a,b){var c=this;return function(){c.send(a(arguments[0],b))}},_buildReady:function(a){var b=this;return function(){var c=b.container,d=c&&c.el;return b.remoteWindow||!c||(b.remoteWindow=d.contentWindow,b.remoteWindow)?void a.apply(b,arguments):void n.addListener(d,"load",function(){b.remoteWindow=d.contentWindow,a.apply(b,arguments)})}},_sendDiscovery:function(){var a=new e(j,[this._getMethodNames()],!0);this.send(a.payload)},_getMethodNames:function(){var a,b=this.methods,c=[];for(a in b)c.push(a);return c},_getRemoteOrigin:function(a){var b;return a&&"string"==typeof a?(b=a.split("/"),b[0]+"//"+b[2]):""}},d.prototype={destroy:function(){var a=this.el;a&&a.parentNode&&a.parentNode.removeChild(a),this.el=null},setAttributes:function(a){var b,c=this.el;for(b in a)"style"===b?c.style.cssText=a[b]:c[b]=a[b]},setDefaults:function(){var a=this.el.style;a.visibility="hidden",a.width="1px",a.height="1px",a.position="absolute",a.left="-999px",a.top="0"},buildFrameSrc:function(b){var c=a.location,d=c.origin?c.origin:c.protocol+"//"+c.host,e=k+"="+d,f=b.split("#"),g=f[0].split("?");return b=(g[1]?g.join("?")+"&":g[0]+"?")+e,b+="&"+l+"="+this.el.id,f[1]&&(b+="#"+f[1]),b}},e.prototype={process:function(a){a.result&&this._resultCallback?this._resultCallback(a.result):a.error&&this._errorCallback&&this._errorCallback(a.error)},result:function(a){return this._resultCallback=a,this},error:function(a){return this._errorCallback=a,this},_generateId:function(){var a=0;return function(){return++a}}()},a.Espany=f}(window);
/* Auto generated, hash = 5ys8grdlpw8lhuycgj28kdo7v */
(function(){dust.register("templates/news/layouts/stream",body_0);var blocks={"pageHeader":body_1,"bodyClass":body_8,"pageContent":body_9};function body_0(chk,ctx){ctx=ctx.shiftBlocks(blocks);return chk.partial("templates/base",ctx,{})}function body_1(chk,ctx){ctx=ctx.shiftBlocks(blocks);return chk.write('\x3cdiv class\x3d"banner-container"\x3e').block(ctx.getBlock("banner"),ctx,{"block":body_2},{}).write("\x3c/div\x3e")}function body_2(chk,ctx){ctx=ctx.shiftBlocks(blocks);return chk.notexists(ctx.getPath(false,
["lixes","basicChromeEnabled"]),ctx,{"block":body_3},{})}function body_3(chk,ctx){ctx=ctx.shiftBlocks(blocks);return chk.helper("eq",ctx,{"block":body_4},{"key":body_7,"value":"true"})}function body_4(chk,ctx){ctx=ctx.shiftBlocks(blocks);return chk.write('\x3cdiv class\x3d"ad-text-link"\x3e').exists(ctx.getPath(false,["lixes","dexterLazyLoadTopAd"]),ctx,{"else":body_5,"block":body_6},{}).write("\x3c/div\x3e")}function body_5(chk,ctx){ctx=ctx.shiftBlocks(blocks);return chk.write('\x3ciframe src\x3d"').helper("adUrl",
ctx,{},{"width":"1","height":"1","tile":"1","publisherId":"1","zone":ctx.getPath(false,["data","pageKey"])}).write('" frameborder\x3d"0" width\x3d"974" height\x3d"17" scrolling\x3d"no"\x3e\x3c/iframe\x3e')}function body_6(chk,ctx){ctx=ctx.shiftBlocks(blocks);return chk.write('\x3ciframe id\x3d"dexterTopAd" src\x3d"about:blank" frameborder\x3d"0" width\x3d"974" height\x3d"17" scrolling\x3d"no" data-src\x3d"').helper("adUrl",ctx,{},{"width":"1","height":"1","tile":"1","publisherId":"1","zone":ctx.getPath(false,
["data","pageKey"])}).write('"\x3e\x3c/iframe\x3e')}function body_7(chk,ctx){ctx=ctx.shiftBlocks(blocks);return chk.reference(ctx.getPath(false,["lixes","streamDetailsTopAdEnabled"]),ctx,"h")}function body_8(chk,ctx){ctx=ctx.shiftBlocks(blocks);return chk.write("social-ui")}function body_9(chk,ctx){ctx=ctx.shiftBlocks(blocks);return chk.write('\x3cdiv class\x3d"stream-container" id\x3d"stream-app"').section(ctx.getPath(false,["data","channelMetadata"]),ctx,{"block":body_10},{}).write('\x3e\x3cdiv class\x3d"stream-header" ').exists(ctx.getPath(false,
["lixes","globalNavCollapseOnScroll"]),ctx,{"block":body_12},{}).write(' data-paging-context-id\x3d"').reference(ctx.get(["contextId"],false),ctx,"h").write('"\x3e\x3cdiv class\x3d"wrapper"\x3e').block(ctx.getBlock("streamHeader"),ctx,{"block":body_13},{}).write('\x3c/div\x3e\x3c/div\x3e\x3cdiv class\x3d"stream-sidebar ').helper("eq",ctx,{"block":body_14},{"key":body_15,"value":"disabled"}).block(ctx.getBlock("streamSidebarClasses"),ctx,{},{}).write('"\x3e').block(ctx.getBlock("streamSidebar"),ctx,
{},{}).write('\x3c/div\x3e\x3cdiv class\x3d"stream-content" ').block(ctx.getBlock("streamContentAttrs"),ctx,{},{}).write("\x3e").block(ctx.getBlock("streamContent"),ctx,{},{}).write("\x3c/div\x3e").block(ctx.getBlock("streamDialogs"),ctx,{},{}).block(ctx.getBlock("streamLoaders"),ctx,{},{}).write("\x3c/div\x3e")}function body_10(chk,ctx){ctx=ctx.shiftBlocks(blocks);return chk.exists(ctx.getPath(false,["lixes","dexterChannelsEnabled"]),ctx,{"block":body_11},{})}function body_11(chk,ctx){ctx=ctx.shiftBlocks(blocks);
return chk.write('data-category\x3d"channel"data-category-id\x3d"').reference(ctx.get(["vanityName"],false),ctx,"h").write('"')}function body_12(chk,ctx){ctx=ctx.shiftBlocks(blocks);return chk.write('data-nav-collapse\x3d"').reference(ctx.getPath(false,["lixes","globalNavCollapseOnScroll"]),ctx,"h").write('"')}function body_13(chk,ctx){ctx=ctx.shiftBlocks(blocks);return chk.write('\x3ch2 class\x3d"title"\x3e').block(ctx.getBlock("headerTitle"),ctx,{},{}).write("\x3c/h2\x3e")}function body_14(chk,
ctx){ctx=ctx.shiftBlocks(blocks);return chk.write("global-dropdown-permanent ")}function body_15(chk,ctx){ctx=ctx.shiftBlocks(blocks);return chk.reference(ctx.getPath(false,["lixes","globalNavCollapseOnScroll"]),ctx,"h")}return body_0})();
(function(){dust.register("templates/news/partials/stream/nav/list",body_0);var blocks={"navClass":body_1};function body_0(chk,ctx){ctx=ctx.shiftBlocks(blocks);return chk.write('\x3cdiv class\x3d"stream-nav-container"\x3e\x3cul class\x3d"stream-nav ').block(ctx.getBlock("navClass"),ctx,{},{}).write('" role\x3d"tablist"').section(ctx.get(["paging"],false),ctx,{"block":body_3},{}).exists(ctx.getPath(false,["lixes","dexterChannelsEnabled"]),ctx,{"block":body_5},{}).write("\x3e").section(ctx.get(["elements"],
false),ctx,{"block":body_7},{}).write("\x3c/ul\x3e\x3c/div\x3e")}function body_1(chk,ctx){ctx=ctx.shiftBlocks(blocks);return chk.exists(ctx.getPath(false,["lixes","streamDetailsNavOpacity"]),ctx,{"block":body_2},{})}function body_2(chk,ctx){ctx=ctx.shiftBlocks(blocks);return chk.write("stream-nav-opacity-").reference(ctx.getPath(false,["lixes","streamDetailsNavOpacity"]),ctx,"h")}function body_3(chk,ctx){ctx=ctx.shiftBlocks(blocks);return chk.helper("addToContext",ctx,{"block":body_4},{"name":"nextStart"}).write(' data-paging-start\x3d"').reference(ctx.get(["nextStart"],
false),ctx,"h").write('" data-paging-count\x3d"').reference(ctx.get(["count"],false),ctx,"h").write('" data-paging-token\x3d"').reference(ctx.get(["token"],false),ctx,"h").write('" data-paging-context-id\x3d"').reference(ctx.get(["contextId"],false),ctx,"h").write('"')}function body_4(chk,ctx){ctx=ctx.shiftBlocks(blocks);return chk.helper("math",ctx,{},{"method":"add","key":ctx.get(["start"],false),"operand":ctx.get(["count"],false)})}function body_5(chk,ctx){ctx=ctx.shiftBlocks(blocks);return chk.exists(ctx.getPath(false,
["data","channelMetadata","vanityName"]),ctx,{"block":body_6},{})}function body_6(chk,ctx){ctx=ctx.shiftBlocks(blocks);return chk.write(' data-paging-channel\x3d"').reference(ctx.getPath(false,["data","channelMetadata","vanityName"]),ctx,"h").write('"')}function body_7(chk,ctx){ctx=ctx.shiftBlocks(blocks);return chk.helper("select",ctx,{"block":body_8},{"key":body_11})}function body_8(chk,ctx){ctx=ctx.shiftBlocks(blocks);return chk.helper("eq",ctx,{"block":body_9},{"value":"details"}).helper("eq",
ctx,{"block":body_10},{"value":"editor"})}function body_9(chk,ctx){ctx=ctx.shiftBlocks(blocks);return chk.partial("templates/news/partials/stream/nav/detailsItem",ctx,{})}function body_10(chk,ctx){ctx=ctx.shiftBlocks(blocks);return chk.partial("templates/news/partials/stream/nav/editorItem",ctx,{})}function body_11(chk,ctx){ctx=ctx.shiftBlocks(blocks);return chk.reference(ctx.get(["type"],false),ctx,"h")}return body_0})();
(function(){dust.register("templates/news/partials/stream/nav/item",body_0);function body_0(chk,ctx){return chk.helper("ne",ctx,{"block":body_1},{"key":body_13,"value":"0"})}function body_1(chk,ctx){return chk.write('\x3cli itemscope itemtype\x3d"http://schema.org/Article" class\x3d"nav-item').exists(ctx.get(["selected"],false),ctx,{"block":body_2},{}).write('" role\x3d"tab" aria-controls\x3d"article-container-').reference(ctx.get(["articleId"],false),ctx,"h").write('" id\x3d"nav-item-').reference(ctx.get(["articleId"],
false),ctx,"h").write('" data-stream-article-id\x3d"').reference(ctx.get(["articleId"],false),ctx,"h").write('"').exists(ctx.get(["permLink"],false),ctx,{"block":body_3},{}).write(' data-stream-url\x3d"').block(ctx.getBlock("baseUrl"),ctx,{"block":body_4},{}).write('"').exists(ctx.get(["trackingToken"],false),ctx,{"block":body_5},{}).write(' data-li-uetrk-click\x3d"nav-stream-item"\x3e\x3ca href\x3d"').block(ctx.getBlock("trackingUrl"),ctx,{"block":body_6},{}).write('"\x3e').notexists(ctx.getPath(false,
["lixes","dexterShift1Design"]),ctx,{"block":body_7},{}).write('\x3cdiv class\x3d"content"\x3e').block(ctx.getBlock("content"),ctx,{"block":body_9},{}).write("\x3c/div\x3e").notexists(ctx.getPath(false,["lixes","dexterShift1Design"]),ctx,{"block":body_12},{}).write("\x3c/a\x3e\x3c/li\x3e")}function body_2(chk,ctx){return chk.write(" selected")}function body_3(chk,ctx){return chk.write(' data-stream-perm-link\x3d"').reference(ctx.get(["permLink"],false),ctx,"h").write('"')}function body_4(chk,ctx){return chk.reference(ctx.get(["url"],
false),ctx,"h")}function body_5(chk,ctx){return chk.write(' data-stream-tracking-token\x3d"').reference(ctx.get(["trackingToken"],false),ctx,"h").write('"')}function body_6(chk,ctx){return chk.helper("addTrackingCode",ctx,{},{"url":ctx.get(["url"],false),"code":"pulse-det-nav_art"})}function body_7(chk,ctx){return chk.write('\x3cdiv class\x3d"image-container"\x3e').block(ctx.getBlock("image"),ctx,{"block":body_8},{}).write("\x3c/div\x3e")}function body_8(chk,ctx){return chk.partial("templates/shared/partials/images/contentImage",
ctx,{"type":"news","size":"100","mprSize":"100","class":"image","imageId":ctx.get(["imageId"],false),"imageUrl":ctx.get(["imageUrl"],false),"alt":ctx.get(["title"],false),"lazy":ctx.getPath(false,["lixes","dexterLazyLoadImages"])})}function body_9(chk,ctx){return chk.write('\x3cspan itemprop\x3d"headline" class\x3d"title"\x3e').block(ctx.getBlock("title"),ctx,{"block":body_10},{}).write('\x3c/span\x3e\x3cspan itemprop\x3d"author" class\x3d"label"\x3e').block(ctx.getBlock("label"),ctx,{"block":body_11},
{}).write("\x3c/span\x3e")}function body_10(chk,ctx){return chk.reference(ctx.get(["title"],false),ctx,"h")}function body_11(chk,ctx){return chk.reference(ctx.get(["label"],false),ctx,"h")}function body_12(chk,ctx){return chk.write('\x3cspan class\x3d"arrow"\x3e\x3c/span\x3e')}function body_13(chk,ctx){return chk.reference(ctx.get(["articleId"],false),ctx,"h")}return body_0})();
(function(){dust.register("templates/news/partials/stream/nav/detailsItem",body_0);var blocks={"label":body_1};function body_0(chk,ctx){ctx=ctx.shiftBlocks(blocks);return chk.partial("templates/news/partials/stream/nav/item",ctx,{})}function body_1(chk,ctx){ctx=ctx.shiftBlocks(blocks);return chk.exists(ctx.get(["author"],false),ctx,{"else":body_2,"block":body_6},{})}function body_2(chk,ctx){ctx=ctx.shiftBlocks(blocks);return chk.section(ctx.get(["source"],false),ctx,{"block":body_3},{})}function body_3(chk,
ctx){ctx=ctx.shiftBlocks(blocks);return chk.exists(ctx.get(["name"],false),ctx,{"else":body_4,"block":body_5},{})}function body_4(chk,ctx){ctx=ctx.shiftBlocks(blocks);return chk.helper("format",ctx,{},{"type":"string.truncate","key":"fmt_string","value":ctx.get(["domain"],false),"limit":26})}function body_5(chk,ctx){ctx=ctx.shiftBlocks(blocks);return chk.helper("format",ctx,{},{"type":"string.truncate","key":"fmt_string","value":ctx.get(["name"],false),"limit":26})}function body_6(chk,ctx){ctx=ctx.shiftBlocks(blocks);
return chk.section(ctx.get(["author"],false),ctx,{"block":body_7},{})}function body_7(chk,ctx){ctx=ctx.shiftBlocks(blocks);return chk.helper("format",ctx,{},{"type":"name.full","key":"fmt_fullName","firstName":ctx.get(["firstName"],false),"lastName":ctx.get(["lastName"],false),"output":"json"}).helper("addToContext",ctx,{"block":body_8},{"name":"authorName"}).helper("format",ctx,{},{"type":"string.truncate","key":"fmt_string","value":ctx.get(["authorName"],false),"limit":26}).exists(ctx.get(["isInfluencer"],
false),ctx,{"block":body_11},{})}function body_8(chk,ctx){ctx=ctx.shiftBlocks(blocks);return chk.notexists(ctx.get(["firstName"],false),ctx,{"else":body_9,"block":body_10},{})}function body_9(chk,ctx){ctx=ctx.shiftBlocks(blocks);return chk.reference(ctx.get(["fmt_fullName"],false),ctx,"h",["s"])}function body_10(chk,ctx){ctx=ctx.shiftBlocks(blocks);return chk.helper("i18n",ctx,{},{"key":"i18n_author_linkedin_member","templateName":"templates/news/partials/stream/nav/detailsItem"})}function body_11(chk,
ctx){ctx=ctx.shiftBlocks(blocks);return chk.partial("templates/shared/partials/badges/influencerBadge",ctx,{})}return body_0})();(function(){dust.i18n=dust.i18n||{};dust.i18n.cache=dust.i18n.cache||{};dust.i18n.cache["templates/news/partials/stream/nav/detailsItem"]={"i18n_author_linkedin_member":"LinkedIn member"}})();
(function(){dust.register("templates/news/partials/stream/nav/editorItem",body_0);var blocks={"image":body_5,"content":body_8,"trackingUrl":body_18};function body_0(chk,ctx){ctx=ctx.shiftBlocks(blocks);return chk.helper("addToContext",ctx,{"block":body_1},{"name":"url"}).partial("templates/news/partials/stream/nav/item",ctx,{})}function body_1(chk,ctx){ctx=ctx.shiftBlocks(blocks);return chk.helper("ne",ctx,{"else":body_2,"block":body_3},{"key":body_4,"value":"new"})}function body_2(chk,ctx){ctx=ctx.shiftBlocks(blocks);
return chk.write("/pulse/article/new")}function body_3(chk,ctx){ctx=ctx.shiftBlocks(blocks);return chk.helper("url",ctx,{},{"alias":"com.linkedin.pulse.controllers.EditorController.editArticle","arg1":ctx.get(["articleId"],false)})}function body_4(chk,ctx){ctx=ctx.shiftBlocks(blocks);return chk.reference(ctx.get(["articleId"],false),ctx,"h")}function body_5(chk,ctx){ctx=ctx.shiftBlocks(blocks);return chk.section(ctx.get(["navImageOffsets"],false),ctx,{"else":body_6,"block":body_7},{})}function body_6(chk,
ctx){ctx=ctx.shiftBlocks(blocks);return chk.partial("templates/shared/partials/images/contentImage",ctx,{"type":"news","size":"100","mprSize":"100","class":"image","imageId":ctx.get(["imageId"],false),"imageUrl":ctx.get(["imageUrl"],false),"alt":ctx.get(["title"],false)})}function body_7(chk,ctx){ctx=ctx.shiftBlocks(blocks);return chk.write('\x3cdiv class\x3d"mini-cover-image-container"\x3e\x3cimg class\x3d"image" src\x3d"/mpr/mpr').reference(ctx.get(["srcImageMediaId"],false),ctx,"h").write('" style\x3d"top: -').reference(ctx.get(["yOffset"],
false),ctx,"h").write("px; left: -").reference(ctx.get(["xOffset"],false),ctx,"h").write("px;  width: ").reference(ctx.get(["width"],false),ctx,"h").write("px; height: ").reference(ctx.get(["height"],false),ctx,"h").write('px;" \x3e\x3c/div\x3e')}function body_8(chk,ctx){ctx=ctx.shiftBlocks(blocks);return chk.write('\x3cspan class\x3d"title"\x3e').block(ctx.getBlock("title"),ctx,{"block":body_9},{}).write('\x3c/span\x3e\x3cspan class\x3d"meta').exists(ctx.getPath(false,["lixes","navDeleteButton"]),
ctx,{"block":body_12},{}).write('"\x3e').exists(ctx.get(["permLink"],false),ctx,{"else":body_13,"block":body_14},{}).write(" \x26middot; ").exists(ctx.get(["modifiedDate"],false),ctx,{"else":body_15,"block":body_16},{}).write("\x3c/span\x3e").exists(ctx.getPath(false,["lixes","navDeleteButton"]),ctx,{"block":body_17},{})}function body_9(chk,ctx){ctx=ctx.shiftBlocks(blocks);return chk.exists(ctx.get(["title"],false),ctx,{"else":body_10,"block":body_11},{})}function body_10(chk,ctx){ctx=ctx.shiftBlocks(blocks);
return chk.helper("i18n",ctx,{},{"key":"i18n_untitled_post","templateName":"templates/news/partials/stream/nav/editorItem"})}function body_11(chk,ctx){ctx=ctx.shiftBlocks(blocks);return chk.reference(ctx.get(["title"],false),ctx,"h")}function body_12(chk,ctx){ctx=ctx.shiftBlocks(blocks);return chk.write(" delete-inline")}function body_13(chk,ctx){ctx=ctx.shiftBlocks(blocks);return chk.helper("i18n",ctx,{},{"key":"i18n_editor_nav_state_draft","templateName":"templates/news/partials/stream/nav/editorItem"})}
function body_14(chk,ctx){ctx=ctx.shiftBlocks(blocks);return chk.helper("i18n",ctx,{},{"key":"i18n_editor_nav_state_published","templateName":"templates/news/partials/stream/nav/editorItem"})}function body_15(chk,ctx){ctx=ctx.shiftBlocks(blocks);return chk.helper("format",ctx,{},{"type":"date.mdy.medium","key":"fmt_date","date":ctx.get(["publishedDate"],false),"useTimeZone":ctx.get(["true"],false)})}function body_16(chk,ctx){ctx=ctx.shiftBlocks(blocks);return chk.helper("format",ctx,{},{"type":"date.mdy.medium",
"key":"fmt_date","date":ctx.get(["modifiedDate"],false),"useTimeZone":ctx.get(["true"],false)})}function body_17(chk,ctx){ctx=ctx.shiftBlocks(blocks);return chk.write('\x3cbutton class\x3d"delete-post"\x3e').helper("i18n",ctx,{},{"key":"i18n_nav_delete_button","templateName":"templates/news/partials/stream/nav/editorItem"}).write("\x3c/button\x3e")}function body_18(chk,ctx){ctx=ctx.shiftBlocks(blocks);return chk.helper("addTrackingCode",ctx,{},{"url":ctx.get(["url"],false),"code":"pulse-edit-nav_art"})}
return body_0})();(function(){dust.i18n=dust.i18n||{};dust.i18n.cache=dust.i18n.cache||{};dust.i18n.cache["templates/news/partials/stream/nav/editorItem"]={"i18n_untitled_post":"Untitled Post","i18n_editor_nav_state_published":"Published","i18n_editor_nav_state_draft":"Draft","i18n_nav_delete_button":"Delete"}})();
(function(){dust.register("templates/news/partials/stream/article/base",body_0);function body_0(chk,ctx){return chk.write('\x3carticle itemscope itemtype\x3d"http://schema.org/BlogPosting" id\x3d"article-container-').reference(ctx.get(["articleId"],false),ctx,"h").write('" class\x3d"stream-article ').reference(ctx.get(["articleClass"],false),ctx,"h").write('" role\x3d"tabpanel" aria-labeledby\x3d"nav-item-').reference(ctx.get(["articleId"],false),ctx,"h").write('" ').block(ctx.getBlock("articleAttrs"),
ctx,{},{}).write("\x3e").block(ctx.getBlock("topBanner"),ctx,{},{}).write('\x3cdiv class\x3d"article-header"\x3e\x3cdiv class\x3d"article-cover').exists(ctx.get(["mastheadImage"],false),ctx,{"block":body_1},{}).notexists(ctx.get(["permLink"],false),ctx,{"block":body_2},{}).write('"\x3e').block(ctx.getBlock("articleCover"),ctx,{},{}).write("\x3c/div\x3e").block(ctx.getBlock("articleSource"),ctx,{},{}).write('\x3c/div\x3e\x3cdiv class\x3d"article-content"\x3e').block(ctx.getBlock("preTitle"),ctx,{},
{}).write('\x3ch1 itemprop\x3d"headline" class\x3d"article-title"').exists(ctx.get(["titleEditable"],false),ctx,{"block":body_3},{}).write("\x3e").block(ctx.getBlock("articleTitle"),ctx,{"block":body_4},{}).write("\x3c/h1\x3e").notexists(ctx.get(["noMeta"],false),ctx,{"block":body_5},{}).write('\x3cdiv itemprop\x3d"articleBody" class\x3d"article-body" ').helper("dirAttr",ctx,{},{"text":ctx.get(["title"],false)}).write("\x3e").block(ctx.getBlock("articleBody"),ctx,{"block":body_6},{}).write('\x3c/div\x3e\x3c/div\x3e\x3cdiv class\x3d"article-footer"\x3e').block(ctx.getBlock("articleFooter"),
ctx,{},{}).write("\x3c/div\x3e").block(ctx.getBlock("bottomBanner"),ctx,{},{}).write("\x3c/article\x3e")}function body_1(chk,ctx){return chk.write(" masthead")}function body_2(chk,ctx){return chk.write(" third-party")}function body_3(chk,ctx){return chk.write('contenteditable\x3d"true" placeholder\x3d\'').helper("i18n",ctx,{},{"key":"i18n_pulse_editor_article_title_placeholder","templateName":"templates/news/partials/stream/article/base"}).write("'")}function body_4(chk,ctx){return chk.reference(ctx.get(["title"],
false),ctx,"h")}function body_5(chk,ctx){return chk.write('\x3cdiv class\x3d"article-meta"\x3e').block(ctx.getBlock("articleMeta"),ctx,{},{}).write("\x3c/div\x3e")}function body_6(chk,ctx){return chk.reference(ctx.get(["content"],false),ctx,"h",["rich","s"])}return body_0})();(function(){dust.i18n=dust.i18n||{};dust.i18n.cache=dust.i18n.cache||{};dust.i18n.cache["templates/news/partials/stream/article/base"]={"i18n_pulse_editor_article_title_placeholder":"Type your title"}})();
(function(){dust.register("templates/news/partials/stream/activity/counts",body_0);var blocks={"viewCountElement":body_4};function body_0(chk,ctx){ctx=ctx.shiftBlocks(blocks);return chk.helper("addToContext",ctx,{"block":body_1},{"name":"viewCount"}).write('\x3cul itemscope itemtype\x3d"http://schema.org/Comment" class\x3d"activity-counts"\x3e').helper("gte",ctx,{"block":body_6},{"key":ctx.get(["viewCount"],false),"value":"0","type":"number"}).write('\x3cli itemprop\x3d"upvoteCount" class\x3d"likes"\x3e\x3ca class\x3d"like-toggle ').exists(ctx.get(["isLiked"],
false),ctx,{"block":body_11},{}).write('" role\x3d"button" tabindex\x3d"0" data-li-uetrk-el\x3d"main-post-like" data-like-count\x3d"').reference(ctx.get(["likeCount"],false),ctx,"h").write('"\x3e').exists(ctx.getPath(false,["lixes","dexterShift1Design"]),ctx,{"else":body_12,"block":body_13},{}).write('\x3cspan class\x3d"count"\x3e').helper("format",ctx,{},{"type":"number","key":"fmt_like_count","value":ctx.get(["likeCount"],false)}).write('\x3c/span\x3e  \x3cspan class\x3d"label"\x3e').helper("i18n",
ctx,{},{"key":"i18n_likes","templateName":"templates/news/partials/stream/activity/counts"}).write('\x3c/span\x3e\x3c/a\x3e\x3c/li\x3e\x3cli itemprop\x3d"commentCount" class\x3d"comments"\x3e\x3ca class\x3d"action-comment" href\x3d"#comments-').reference(ctx.get(["articleId"],false),ctx,"h").write('"\x3e').exists(ctx.getPath(false,["lixes","dexterShift1Design"]),ctx,{"else":body_14,"block":body_15},{}).write('\x3cspan class\x3d"count"\x3e').helper("format",ctx,{},{"type":"number","key":"fmt_comment_count",
"value":ctx.get(["commentCount"],false)}).write('\x3c/span\x3e  \x3cspan class\x3d"label"\x3e').helper("i18n",ctx,{},{"key":"i18n_comments","templateName":"templates/news/partials/stream/activity/counts"}).write("\x3c/span\x3e\x3c/a\x3e\x3c/li\x3e\x3c/ul\x3e")}function body_1(chk,ctx){ctx=ctx.shiftBlocks(blocks);return chk.notexists(ctx.get(["viewCount"],false),ctx,{"else":body_2,"block":body_3},{})}function body_2(chk,ctx){ctx=ctx.shiftBlocks(blocks);return chk.reference(ctx.get(["viewCount"],false),
ctx,"h")}function body_3(chk,ctx){ctx=ctx.shiftBlocks(blocks);return chk.write("0")}function body_4(chk,ctx){ctx=ctx.shiftBlocks(blocks);return chk.write('\x3cli itemscope itemtype\x3d"http://schema.org/UserInteraction" class\x3d"views"\x3e').notexists(ctx.getPath(false,["lixes","dexterShift1Design"]),ctx,{"block":body_5},{}).write('\x3cspan class\x3d"count" itemprop\x3d"UserPageVisits"\x3e').helper("format",ctx,{},{"type":"number","key":"fmt_view_count","value":ctx.get(["viewCount"],false)}).write('\x3c/span\x3e  \x3cspan class\x3d"label"\x3e').helper("i18n",
ctx,{},{"key":"i18n_views","templateName":"templates/news/partials/stream/activity/counts"}).write("\x3c/span\x3e\x3c/li\x3e")}function body_5(chk,ctx){ctx=ctx.shiftBlocks(blocks);return chk.write('\x3cspan class\x3d"icon" aria-hidden\x3d"true"\x3e\x3c/span\x3e')}function body_6(chk,ctx){ctx=ctx.shiftBlocks(blocks);return chk.exists(ctx.get(["permLink"],false),ctx,{"block":body_7},{})}function body_7(chk,ctx){ctx=ctx.shiftBlocks(blocks);return chk.exists(ctx.getPath(false,["lixes","hideArticleViewCount"]),
ctx,{"else":body_8,"block":body_9},{})}function body_8(chk,ctx){ctx=ctx.shiftBlocks(blocks);return chk.block(ctx.getBlock("viewCountElement"),ctx,{},{})}function body_9(chk,ctx){ctx=ctx.shiftBlocks(blocks);return chk.exists(ctx.getPath(false,["author","isCurrentUser"]),ctx,{"block":body_10},{})}function body_10(chk,ctx){ctx=ctx.shiftBlocks(blocks);return chk.block(ctx.getBlock("viewCountElement"),ctx,{},{})}function body_11(chk,ctx){ctx=ctx.shiftBlocks(blocks);return chk.write("on")}function body_12(chk,
ctx){ctx=ctx.shiftBlocks(blocks);return chk.write('\x3cspan class\x3d"icon" aria-hidden\x3d"true"\x3e\x3c/span\x3e')}function body_13(chk,ctx){ctx=ctx.shiftBlocks(blocks);return chk.write('\x3csvg class\x3d"icon"\x3e\x3cuse xlink:href\x3d"#thumbs-up-icon" data-size\x3d"small"\x3e\x3c/use\x3e\x3c/svg\x3e')}function body_14(chk,ctx){ctx=ctx.shiftBlocks(blocks);return chk.write('\x3cspan class\x3d"icon" aria-hidden\x3d"true"\x3e\x3c/span\x3e')}function body_15(chk,ctx){ctx=ctx.shiftBlocks(blocks);return chk.write('\x3csvg class\x3d"icon"\x3e\x3cuse xlink:href\x3d"#speech-bubble-icon" data-size\x3d"small"\x3e\x3c/use\x3e\x3c/svg\x3e')}
return body_0})();(function(){dust.register("__i18n__templates/news/partials/stream/activity/counts__i18n_views",body_0);function body_0(chk,ctx){return chk.helper("choice",ctx,{},{"key":ctx.get(["viewCount"],false),"singular":"view","plural":"views"})}return body_0})();
(function(){dust.register("__i18n__templates/news/partials/stream/activity/counts__i18n_likes",body_0);function body_0(chk,ctx){return chk.helper("choice",ctx,{},{"key":ctx.get(["likeCount"],false),"singular":"Like","plural":"Likes"})}return body_0})();(function(){dust.register("__i18n__templates/news/partials/stream/activity/counts__i18n_comments",body_0);function body_0(chk,ctx){return chk.helper("choice",ctx,{},{"key":ctx.get(["commentCount"],false),"singular":"Comment","plural":"Comments"})}return body_0})();
(function(){dust.register("templates/news/partials/stream/activity/counts_v2",body_0);var blocks={"viewCountElement":body_4};function body_0(chk,ctx){ctx=ctx.shiftBlocks(blocks);return chk.helper("addToContext",ctx,{"block":body_1},{"name":"viewCount"}).write('\x3cul itemscope itemtype\x3d"http://schema.org/Comment" class\x3d"activity-counts"\x3e').helper("gte",ctx,{"block":body_6},{"key":ctx.get(["viewCount"],false),"value":"0","type":"number"}).write('\x3cli itemprop\x3d"upvoteCount" class\x3d"likes"\x3e\x3cspan class\x3d"count"\x3e').helper("format",
ctx,{},{"type":"number","key":"fmt_like_count","value":ctx.get(["likeCount"],false)}).write('\x3c/span\x3e \x3cspan class\x3d"label"\x3e').helper("i18n",ctx,{},{"key":"i18n_likes","templateName":"templates/news/partials/stream/activity/counts_v2"}).write('\x3c/span\x3e\x3c/li\x3e\x3cli itemprop\x3d"commentCount" class\x3d"comments"\x3e\x3cspan class\x3d"count"\x3e').helper("format",ctx,{},{"type":"number","key":"fmt_comment_count","value":ctx.get(["commentCount"],false)}).write('\x3c/span\x3e  \x3cspan class\x3d"label"\x3e').helper("i18n",
ctx,{},{"key":"i18n_comments","templateName":"templates/news/partials/stream/activity/counts_v2"}).write('\x3c/span\x3e\x3c/li\x3e\x3c/ul\x3e\x3cul itemscope itemtype\x3d"http://schema.org/Comment" class\x3d"activity-actions"\x3e\x3cli itemprop\x3d"potentialAction" class\x3d"likes"\x3e\x3ca class\x3d"like-toggle ').exists(ctx.get(["isLiked"],false),ctx,{"block":body_11},{}).write('" role\x3d"button" tabindex\x3d"0" data-li-uetrk-el\x3d"main-post-like" data-like-count\x3d"').reference(ctx.get(["likeCount"],
false),ctx,"h").write('"\x3e\x3csvg class\x3d"icon"\x3e\x3cuse xlink:href\x3d"#thumbs-up-icon" data-size\x3d"small"\x3e\x3c/use\x3e\x3c/svg\x3e\x3c/a\x3e\x3c/li\x3e\x3cli itemprop\x3d"potentialAction" class\x3d"comments"\x3e\x3ca class\x3d"action-comment" href\x3d"#comments-').reference(ctx.get(["articleId"],false),ctx,"h").write('"\x3e\x3csvg class\x3d"icon"\x3e\x3cuse xlink:href\x3d"#speech-bubble-icon" data-size\x3d"small"\x3e\x3c/use\x3e\x3c/svg\x3e\x3c/a\x3e\x3c/li\x3e\x3c/ul\x3e')}function body_1(chk,
ctx){ctx=ctx.shiftBlocks(blocks);return chk.notexists(ctx.get(["viewCount"],false),ctx,{"else":body_2,"block":body_3},{})}function body_2(chk,ctx){ctx=ctx.shiftBlocks(blocks);return chk.reference(ctx.get(["viewCount"],false),ctx,"h")}function body_3(chk,ctx){ctx=ctx.shiftBlocks(blocks);return chk.write("0")}function body_4(chk,ctx){ctx=ctx.shiftBlocks(blocks);return chk.write('\x3cli itemscope itemtype\x3d"http://schema.org/UserInteraction" class\x3d"views"\x3e').notexists(ctx.getPath(false,["lixes",
"dexterShift1Design"]),ctx,{"block":body_5},{}).write('\x3cspan class\x3d"count" itemprop\x3d"UserPageVisits"\x3e').helper("format",ctx,{},{"type":"number","key":"fmt_view_count","value":ctx.get(["viewCount"],false)}).write('\x3c/span\x3e  \x3cspan class\x3d"label"\x3e').helper("i18n",ctx,{},{"key":"i18n_views","templateName":"templates/news/partials/stream/activity/counts_v2"}).write("\x3c/span\x3e\x3c/li\x3e")}function body_5(chk,ctx){ctx=ctx.shiftBlocks(blocks);return chk.write('\x3cspan class\x3d"icon" aria-hidden\x3d"true"\x3e\x3c/span\x3e')}
function body_6(chk,ctx){ctx=ctx.shiftBlocks(blocks);return chk.exists(ctx.get(["permLink"],false),ctx,{"block":body_7},{})}function body_7(chk,ctx){ctx=ctx.shiftBlocks(blocks);return chk.exists(ctx.getPath(false,["lixes","hideArticleViewCount"]),ctx,{"else":body_8,"block":body_9},{})}function body_8(chk,ctx){ctx=ctx.shiftBlocks(blocks);return chk.block(ctx.getBlock("viewCountElement"),ctx,{},{})}function body_9(chk,ctx){ctx=ctx.shiftBlocks(blocks);return chk.exists(ctx.getPath(false,["author","isCurrentUser"]),
ctx,{"block":body_10},{})}function body_10(chk,ctx){ctx=ctx.shiftBlocks(blocks);return chk.block(ctx.getBlock("viewCountElement"),ctx,{},{})}function body_11(chk,ctx){ctx=ctx.shiftBlocks(blocks);return chk.write("on")}return body_0})();(function(){dust.register("__i18n__templates/news/partials/stream/activity/counts_v2__i18n_views",body_0);function body_0(chk,ctx){return chk.helper("choice",ctx,{},{"key":ctx.get(["viewCount"],false),"singular":"view","plural":"views"})}return body_0})();
(function(){dust.register("__i18n__templates/news/partials/stream/activity/counts_v2__i18n_likes",body_0);function body_0(chk,ctx){return chk.helper("choice",ctx,{},{"key":ctx.get(["likeCount"],false),"singular":"like","plural":"likes"})}return body_0})();
(function(){dust.register("__i18n__templates/news/partials/stream/activity/counts_v2__i18n_comments",body_0);function body_0(chk,ctx){return chk.helper("choice",ctx,{},{"key":ctx.get(["commentCount"],false),"singular":"comment","plural":"comments"})}return body_0})();
(function(){dust.register("templates/news/partials/stream/article/details",body_0);var blocks={"topBanner":body_7,"bottomBanner":body_11,"articleCover":body_15,"articleAttrs":body_19,"articleSource":body_21,"articleMeta":body_22,"articleBody":body_28,"articleFooter":body_32};function body_0(chk,ctx){ctx=ctx.shiftBlocks(blocks);return chk.helper("addToContext",ctx,{"block":body_1},{"name":"articleType"}).helper("addToContext",ctx,{"block":body_4},{"name":"_articleClass"}).partial("templates/news/partials/stream/article/base",
ctx,{"articleClass":ctx.get(["_articleClass"],false)})}function body_1(chk,ctx){ctx=ctx.shiftBlocks(blocks);return chk.exists(ctx.get(["permLink"],false),ctx,{"else":body_2,"block":body_3},{})}function body_2(chk,ctx){ctx=ctx.shiftBlocks(blocks);return chk.write("news")}function body_3(chk,ctx){ctx=ctx.shiftBlocks(blocks);return chk.write("megaphone")}function body_4(chk,ctx){ctx=ctx.shiftBlocks(blocks);return chk.write("stream-article-").helper("eq",ctx,{"else":body_5,"block":body_6},{"key":ctx.get(["articleType"],
false),"value":"news"})}function body_5(chk,ctx){ctx=ctx.shiftBlocks(blocks);return chk.write("megaphone")}function body_6(chk,ctx){ctx=ctx.shiftBlocks(blocks);return chk.write("news")}function body_7(chk,ctx){ctx=ctx.shiftBlocks(blocks);return chk.notexists(ctx.get(["subsequentArticle"],false),ctx,{"block":body_8},{})}function body_8(chk,ctx){ctx=ctx.shiftBlocks(blocks);return chk.exists(ctx.getPath(false,["lixes","firstArticleBanner"]),ctx,{"block":body_9},{})}function body_9(chk,ctx){ctx=ctx.shiftBlocks(blocks);
return chk.helper("ne",ctx,{"block":body_10},{"key":ctx.getPath(false,["lixes","firstArticleBanner"]),"value":"control"})}function body_10(chk,ctx){ctx=ctx.shiftBlocks(blocks);return chk.partial("templates/news/partials/stream/promo/articleBanner/base_promo",ctx,{"side":"top"})}function body_11(chk,ctx){ctx=ctx.shiftBlocks(blocks);return chk.notexists(ctx.get(["subsequentArticle"],false),ctx,{"block":body_12},{})}function body_12(chk,ctx){ctx=ctx.shiftBlocks(blocks);return chk.exists(ctx.getPath(false,
["lixes","firstArticleBanner"]),ctx,{"block":body_13},{})}function body_13(chk,ctx){ctx=ctx.shiftBlocks(blocks);return chk.helper("ne",ctx,{"block":body_14},{"key":ctx.getPath(false,["lixes","firstArticleBanner"]),"value":"control"})}function body_14(chk,ctx){ctx=ctx.shiftBlocks(blocks);return chk.partial("templates/news/partials/stream/promo/articleBanner/base_promo",ctx,{"side":"bottom"})}function body_15(chk,ctx){ctx=ctx.shiftBlocks(blocks);return chk.exists(ctx.get(["mastheadCaption"],false),
ctx,{"block":body_16},{}).exists(ctx.getPath(false,["data","promptToShareEnabled"]),ctx,{"block":body_17},{}).partial("templates/news/partials/stream/source/coverImage",ctx,{"title":ctx.get(["title"],false),"isMobile":ctx.getPath(false,["data","isMobile"])})}function body_16(chk,ctx){ctx=ctx.shiftBlocks(blocks);return chk.write('\x3cspan class\x3d"img-credit" title\x3d"').reference(ctx.get(["mastheadCaption"],false),ctx,"h").write('"\x3e').reference(ctx.get(["mastheadCaption"],false),ctx,"h").write("\x3c/span\x3e")}
function body_17(chk,ctx){ctx=ctx.shiftBlocks(blocks);return chk.partial("templates/news/partials/stream/source/promptToShareOverlay",ctx,{"isMobile":ctx.getPath(false,["data","isMobile"]),"authorFollowers":ctx.getPath(false,["data","authorFollowers"])}).notexists(ctx.get(["mastheadImage"],false),ctx,{"block":body_18},{})}function body_18(chk,ctx){ctx=ctx.shiftBlocks(blocks);return chk.partial("templates/news/partials/stream/source/promptToShareDialog",ctx,{"isMobile":ctx.getPath(false,["data","isMobile"])})}
function body_19(chk,ctx){ctx=ctx.shiftBlocks(blocks);return chk.write(' data-stream-article-id\x3d"').reference(ctx.get(["articleId"],false),ctx,"h").write('" data-stream-shortlink\x3d"').reference(ctx.get(["shortlink"],false),ctx,"h").write('" data-stream-title\x3d"').reference(ctx.get(["title"],false),ctx,"h").write('" data-stream-author-id\x3d"').reference(ctx.get(["authorId"],false),ctx,"h").write('" data-stream-is-influencer-article\x3d"').reference(ctx.get(["isInfluencerArticle"],false),ctx,
"h").write('" data-stream-summary\x3d"').reference(ctx.get(["summry"],false),ctx,"h").write('" data-stream-megaphone-article-id\x3d"').reference(ctx.get(["megaphoneArticleId"],false),ctx,"h").write('" data-stream-perm-link\x3d"').reference(ctx.get(["permLink"],false),ctx,"h").write('" data-stream-tracking-token\x3d"').reference(ctx.get(["trackingToken"],false),ctx,"h").write('" data-stream-published-time\x3d"').reference(ctx.get(["publishedTime"],false),ctx,"h").write('" data-stream-context-id\x3d"').reference(ctx.get(["contextId"],
false),ctx,"h").write('"').exists(ctx.getPath(false,["urls","canonical"]),ctx,{"block":body_20},{}).write(' data-li-uetrk-token\x3d"').reference(ctx.get(["trackingToken"],false),ctx,"h").write('"')}function body_20(chk,ctx){ctx=ctx.shiftBlocks(blocks);return chk.write(' data-stream-url\x3d"').reference(ctx.getPath(false,["urls","canonical"]),ctx,"h").write('"')}function body_21(chk,ctx){ctx=ctx.shiftBlocks(blocks);return chk.partial("templates/news/partials/stream/source/promoFeature",ctx,{"allowEdit":"true"})}
function body_22(chk,ctx){ctx=ctx.shiftBlocks(blocks);return chk.helper("addToContext",ctx,{"block":body_23},{"name":"pubDateIso"}).write('\x3ctime itemprop\x3d"datePublished" datetime\x3d"').reference(ctx.get(["pubDateIso"],false),ctx,"h").write('" class\x3d"pub-date"\x3e').exists(ctx.get(["pubDateIso"],false),ctx,{"block":body_24},{}).write("\x3c/time\x3e").section(ctx.get(["socialShares"],false),ctx,{"block":body_25},{}).partial("templates/news/partials/stream/activity/shares",ctx,{})}function body_23(chk,
ctx){ctx=ctx.shiftBlocks(blocks);return chk.reference(ctx.get(["publishedDate"],false),ctx,"h",["isoDate"])}function body_24(chk,ctx){ctx=ctx.shiftBlocks(blocks);return chk.helper("format",ctx,{},{"type":"date.mdy.medium","key":"fmt_date","date":ctx.get(["pubDateIso"],false),"useTimeZone":ctx.get(["false"],false)})}function body_25(chk,ctx){ctx=ctx.shiftBlocks(blocks);return chk.exists(ctx.getPath(false,["lixes","showRevisedSocialActions"]),ctx,{"else":body_26,"block":body_27},{})}function body_26(chk,
ctx){ctx=ctx.shiftBlocks(blocks);return chk.partial("templates/news/partials/stream/activity/counts",ctx,{"viewCount":ctx.get(["impressionCount"],false),"isLiked":ctx.get(["isLikedByCurrentUser"],false)})}function body_27(chk,ctx){ctx=ctx.shiftBlocks(blocks);return chk.partial("templates/news/partials/stream/activity/counts_v2",ctx,{"viewCount":ctx.get(["impressionCount"],false),"isLiked":ctx.get(["isLikedByCurrentUser"],false)})}function body_28(chk,ctx){ctx=ctx.shiftBlocks(blocks);return chk.helper("eq",
ctx,{"else":body_29,"block":body_31},{"key":ctx.get(["articleType"],false),"value":"megaphone"})}function body_29(chk,ctx){ctx=ctx.shiftBlocks(blocks);return chk.exists(ctx.get(["imageUrl"],false),ctx,{"block":body_30},{}).write('\x3cp class\x3d"article-summary"\x3e').reference(ctx.get(["summary"],false),ctx,"h").write('\x3c/p\x3e\x3ca class\x3d"view-full" href\x3d"').helper("addTrackingCode",ctx,{},{"url":ctx.get(["externalUrl"],false),"code":"pulse-det-art_view_ext"}).write('" target\x3d"').reference(ctx.get(["articleId"],
false),ctx,"h").write('"\x3e').helper("i18n",ctx,{},{"key":"i18n_show_full_article","templateName":"templates/news/partials/stream/article/details"}).write("\x3c/a\x3e")}function body_30(chk,ctx){ctx=ctx.shiftBlocks(blocks);return chk.write('\x3cp class\x3d"article-image"\x3e\x3cimg src\x3d"').reference(ctx.get(["imageUrl"],false),ctx,"h").write('" alt\x3d"').reference(ctx.get(["title"],false),ctx,"h").write('"\x3e\x3c/p\x3e')}function body_31(chk,ctx){ctx=ctx.shiftBlocks(blocks);return chk.reference(ctx.get(["content"],
false),ctx,"h",["rich","s"])}function body_32(chk,ctx){ctx=ctx.shiftBlocks(blocks);return chk.exists(ctx.getPath(false,["lixes","showRevisedSocialActions"]),ctx,{"block":body_33},{}).helper("i18n",ctx,{},{"output":"json","key":"i18n_report_this","templateName":"templates/news/partials/stream/article/details"}).section(ctx.getPath(false,["lixes","showTags"]),ctx,{"else":body_35,"block":body_43},{}).partial("templates/news/partials/stream/source/promoList",ctx,{}).write('\x3cdiv class\x3d"article-comments" id\x3d"comments-').reference(ctx.get(["articleId"],
false),ctx,"h").write('"\x3e\x3c/div\x3e')}function body_33(chk,ctx){ctx=ctx.shiftBlocks(blocks);return chk.section(ctx.get(["socialShares"],false),ctx,{"block":body_34},{})}function body_34(chk,ctx){ctx=ctx.shiftBlocks(blocks);return chk.partial("templates/news/partials/stream/activity/socialActions",ctx,{"isLiked":ctx.get(["isLikedByCurrentUser"],false)})}function body_35(chk,ctx){ctx=ctx.shiftBlocks(blocks);return chk.write('\x3cdiv class\x3d"article-shares"\x3e').exists(ctx.getPath(false,["lixes",
"memberFlaggingEnabled"]),ctx,{"block":body_36},{}).helper("eq",ctx,{"else":body_38,"block":body_40},{"key":body_42,"value":"control"}).write("\x3c/div\x3e")}function body_36(chk,ctx){ctx=ctx.shiftBlocks(blocks);return chk.exists(ctx.get(["todayFlagContentUrl"],false),ctx,{"block":body_37},{})}function body_37(chk,ctx){ctx=ctx.shiftBlocks(blocks);return chk.write('\x3ca href\x3d"').reference(ctx.get(["todayFlagContentUrl"],false),ctx,"h").write('" id\x3d"member-tagging" class\x3d"member-tag"\x3e').reference(ctx.get(["i18n_report_this"],
false),ctx,"h").write("\x3c/a\x3e")}function body_38(chk,ctx){ctx=ctx.shiftBlocks(blocks);return chk.write('\x3cdiv class\x3d"split-column-right"\x3e').notexists(ctx.getPath(false,["lixes","dexterShift1Design"]),ctx,{"block":body_39},{}).write("\x3c/div\x3e")}function body_39(chk,ctx){ctx=ctx.shiftBlocks(blocks);return chk.partial("templates/news/partials/stream/activity/shares",ctx,{})}function body_40(chk,ctx){ctx=ctx.shiftBlocks(blocks);return chk.notexists(ctx.getPath(false,["lixes","dexterShift1Design"]),
ctx,{"block":body_41},{})}function body_41(chk,ctx){ctx=ctx.shiftBlocks(blocks);return chk.partial("templates/news/partials/stream/activity/shares",ctx,{})}function body_42(chk,ctx){ctx=ctx.shiftBlocks(blocks);return chk.reference(ctx.getPath(false,["lixes","wechatSharingType"]),ctx,"h")}function body_43(chk,ctx){ctx=ctx.shiftBlocks(blocks);return chk.write('\x3cdiv class\x3d"article-shares split-column-bar"\x3e\x3cdiv class\x3d"split-column-right"\x3e').notexists(ctx.getPath(false,["lixes","dexterShift1Design"]),
ctx,{"block":body_44},{}).notexists(ctx.getPath(false,["author","isCurrentUser"]),ctx,{"block":body_45},{}).write("\x3c/div\x3e\x3cdiv class\x3d\"split-column-left\"\x3e\x3cdiv id\x3d'tagging-wrapper' class\x3d'tagging-wrapper tagging-pills-disabled'\x3e\x3c/div\x3e\x3c/div\x3e\x3c/div\x3e")}function body_44(chk,ctx){ctx=ctx.shiftBlocks(blocks);return chk.partial("templates/news/partials/stream/activity/shares",ctx,{"isLiked":ctx.get(["isLikedByCurrentUser"],false),"articleId":ctx.get(["articleId"],
false)})}function body_45(chk,ctx){ctx=ctx.shiftBlocks(blocks);return chk.exists(ctx.getPath(false,["lixes","memberFlaggingEnabled"]),ctx,{"block":body_46},{})}function body_46(chk,ctx){ctx=ctx.shiftBlocks(blocks);return chk.exists(ctx.get(["todayFlagContentUrl"],false),ctx,{"block":body_47},{})}function body_47(chk,ctx){ctx=ctx.shiftBlocks(blocks);return chk.exists(ctx.getPath(false,["lixes","dexterShift1Design"]),ctx,{"else":body_48,"block":body_49},{})}function body_48(chk,ctx){ctx=ctx.shiftBlocks(blocks);
return chk.write('\x3cdiv class\x3d"dropdown-container"\x3e\x3cdl class\x3d"dropdown"\x3e\x3cdt class\x3d"dropdown-trigger"\x3e\x3cspan class\x3d"icon-more"\x3e\x3c/span\x3e\x3cspan class\x3d"accessibility-alt-text" aria-hidden\x3d"true"\x3e').helper("i18n",ctx,{},{"key":"more_options_menu","templateName":"templates/news/partials/stream/article/details"}).write('\x3c/span\x3e\x3c/dt\x3e\x3cdd class\x3d"dropdown-content"\x3e\x3cul class\x3d"more-options"\x3e\x3cli\x3e\x3ca href\x3d"').reference(ctx.get(["todayFlagContentUrl"],
false),ctx,"h").write('" class\x3d"member-tag"\x3e').reference(ctx.get(["i18n_report_this"],false),ctx,"h").write("\x3c/a\x3e\x3c/li\x3e\x3c/ul\x3e\x3c/dd\x3e\x3c/dl\x3e\x3c/div\x3e")}function body_49(chk,ctx){ctx=ctx.shiftBlocks(blocks);return chk.exists(ctx.getPath(false,["lixes","streamDetailsUseSemaphore"]),ctx,{"else":body_50,"block":body_51},{})}function body_50(chk,ctx){ctx=ctx.shiftBlocks(blocks);return chk.write('\x3ca href\x3d"').reference(ctx.get(["todayFlagContentUrl"],false),ctx,"h").write('" class\x3d"member-tag"\x3e').reference(ctx.get(["i18n_report_this"],
false),ctx,"h").write("\x3c/a\x3e")}function body_51(chk,ctx){ctx=ctx.shiftBlocks(blocks);return chk.write('\x3ca href\x3d"').reference(ctx.get(["todayFlagContentUrl"],false),ctx,"h").write('" class\x3d"member-tag" data-content-urn\x3d"').reference(ctx.get(["megaphoneArticleId"],false),ctx,"h").write('" data-content-source\x3d"').exists(ctx.getPath(false,["author","isInfluencer"]),ctx,{"else":body_52,"block":body_53},{}).write('" data-author-urn\x3d"').reference(ctx.getPath(false,["author","memberId"]),
ctx,"h").write("\" data-first-message\x3d'").helper("i18n",ctx,{},{"key":"spamreportdialog__text_plain__spam_title","templateName":"templates/news/partials/stream/article/details"}).write("'\x3e").reference(ctx.get(["i18n_report_this"],false),ctx,"h").write("\x3c/a\x3e")}function body_52(chk,ctx){ctx=ctx.shiftBlocks(blocks);return chk.write("PONCHO_ARTICLE")}function body_53(chk,ctx){ctx=ctx.shiftBlocks(blocks);return chk.write("INFLUENCER_ARTICLE")}return body_0})();
(function(){dust.i18n=dust.i18n||{};dust.i18n.cache=dust.i18n.cache||{};dust.i18n.cache["templates/news/partials/stream/article/details"]={"i18n_show_full_article":"Show full article","i18n_report_this":"Report this","spamreportdialog__text_plain__spam_title":"Why are you reporting this?","more_options_menu":"\n                          More options...\n                        "}})();
(function(){dust.register("templates/news/partials/stream/article/editor",body_0);var blocks={"articleCover":body_1,"articleAttrs":body_2,"articleSource":body_5,"preTitle":body_9,"articleTitle":body_10,"articleBody":body_13};function body_0(chk,ctx){ctx=ctx.shiftBlocks(blocks);return chk.partial("templates/news/partials/stream/article/base",ctx,{"noMeta":"true"})}function body_1(chk,ctx){ctx=ctx.shiftBlocks(blocks);return chk.partial("templates/news/partials/editor/coverImageUploader",ctx,{})}function body_2(chk,
ctx){ctx=ctx.shiftBlocks(blocks);return chk.write('data-stream-article-id\x3d"').exists(ctx.get(["articleId"],false),ctx,{"else":body_3,"block":body_4},{}).write('"')}function body_3(chk,ctx){ctx=ctx.shiftBlocks(blocks);return chk.write("new")}function body_4(chk,ctx){ctx=ctx.shiftBlocks(blocks);return chk.reference(ctx.get(["articleId"],false),ctx,"h")}function body_5(chk,ctx){ctx=ctx.shiftBlocks(blocks);return chk.section(ctx.get(["author"],false),ctx,{"block":body_6},{})}function body_6(chk,ctx){ctx=
ctx.shiftBlocks(blocks);return chk.helper("format",ctx,{},{"type":"name.full","firstName":ctx.get(["firstName"],false),"lastName":ctx.get(["lastName"],false),"key":"fullName","output":"json"}).partial("templates/news/partials/stream/promo/source",ctx,{"sourceName":body_7,"sourceHeadline":body_8,"editor":"true"})}function body_7(chk,ctx){ctx=ctx.shiftBlocks(blocks);return chk.reference(ctx.get(["fullName"],false),ctx,"h",["et","s"])}function body_8(chk,ctx){ctx=ctx.shiftBlocks(blocks);return chk.reference(ctx.get(["headline"],
false),ctx,"h",["et","s"])}function body_9(chk,ctx){ctx=ctx.shiftBlocks(blocks);return chk.write('\x3cp class\x3d"title-warning valid"\x3e').helper("i18n",ctx,{},{"key":"i18n_editor_title_length_warning","filters":"|mk|s","templateName":"templates/news/partials/stream/article/editor"}).write("\x3c/p\x3e")}function body_10(chk,ctx){ctx=ctx.shiftBlocks(blocks);return chk.exists(ctx.getPath(false,["lixes","titleTruePreview"]),ctx,{"else":body_11,"block":body_12},{})}function body_11(chk,ctx){ctx=ctx.shiftBlocks(blocks);
return chk.write('\x3cinput name\x3d"title" class\x3d"title" placeholder\x3d"').helper("i18n",ctx,{},{"key":"i18n_editor_title_placeholder","templateName":"templates/news/partials/stream/article/editor"}).write('" value\x3d"').reference(ctx.get(["title"],false),ctx,"h").write('"/\x3e')}function body_12(chk,ctx){ctx=ctx.shiftBlocks(blocks);return chk.write('\x3ctextarea name\x3d"title" class\x3d"title" placeholder\x3d"').helper("i18n",ctx,{},{"key":"i18n_editor_title_placeholder","templateName":"templates/news/partials/stream/article/editor"}).write('" rows\x3d"1"\x3e').reference(ctx.get(["title"],
false),ctx,"h").write("\x3c/textarea\x3e")}function body_13(chk,ctx){ctx=ctx.shiftBlocks(blocks);return chk.partial("templates/news/partials/editor/editorForm",ctx,{}).exists(ctx.getPath(false,["lixes","pillTaggingEnabled"]),ctx,{"block":body_14},{}).write('\x3cdiv id\x3d"image-dialog" data-href\x3d"#image-dialog" class\x3d"dialog"\x3e\x3cdiv class\x3d"error-msg"\x3e\x3cp class\x3d"msg"\x3e\x3c/p\x3e\x3c/div\x3e\x3cform enctype\x3d"multipart/form-data" method\x3d"post" action\x3d"/mupld/megaImageUpload" name\x3d"uploadImage"accept-charset\x3d"UTF-8" \x3e\x3clabel for\x3d"inline-image" id\x3d"upload-label"\x3e\x3cp\x3e\x3cem\x3e').helper("i18n",
ctx,{},{"key":"i18n_editor_filesize_limit","templateName":"templates/news/partials/stream/article/editor"}).write('\x3c/em\x3e\x3c/p\x3e\x3c/label\x3e\x3clabel for\x3d"inline-image" class\x3d"button" data-action\x3d"upload"\x3e').helper("i18n",ctx,{},{"key":"_i18n_uploadImage","templateName":"templates/news/partials/stream/article/editor"}).write('\x3c/label\x3e\x3cbutton class\x3d"button cancel" data-action\x3d"cancel"\x3e').helper("i18n",ctx,{},{"key":"_i18n_cancel","templateName":"templates/news/partials/stream/article/editor"}).write('\x3c/button\x3e\x3cinput type\x3d"file" name\x3d"file" class\x3d"upload-field" id\x3d"inline-image"/\x3e\x3cinput type\x3d"hidden" value\x3d"/mpr/mpr" class\x3d"title" name\x3d"mediaBaseUrl" id\x3d"mediaBaseUrl"\x3e\x3cinput type\x3d"hidden" id\x3d"uploadInfo_id_inline" name\x3d"upload_info" value\x3d"').reference(ctx.get(["uploadInfoHash"],
false),ctx,"h").write('"\x3e\x3cinput type\x3d"hidden" id\x3d"upload_info_with_js_inline" name\x3d"upload_info_with_js" value\x3d"').reference(ctx.get(["uploadInfoHash"],false),ctx,"h").write('"\x3e\x3cinput type\x3d"hidden" id\x3d"csrfToken" name\x3d"csrfToken" value\x3d"').helper("csrf",ctx,{},{}).write('"\x3e\x3cinput type\x3d"hidden" name\x3d"persist" value\x3d"true"/\x3e\x3c/form\x3e\x3c/div\x3e\x3cdiv id\x3d"video-dialog" data-href\x3d"#video-dialog" class\x3d"dialog"\x3e\x3cdiv class\x3d"error-msg"\x3e\x3cp class\x3d"msg"\x3e\x3c/p\x3e\x3c/div\x3e\x3cform\x3e').notexists(ctx.getPath(false,
["lixes","embedlyEmbedsEnabled"]),ctx,{"block":body_15},{}).notexists(ctx.getPath(false,["lixes","embedlyEmbedsEnabled"]),ctx,{"else":body_16,"block":body_17},{}).write('\x3cbutton href\x3d"javascript:void(0);" class\x3d"button"data-action\x3d"upload" data-role\x3d"button"\x3e\x3cspan class\x3d"add-media-text"\x3e').helper("i18n",ctx,{},{"key":"_i18n_uploadVideo","templateName":"templates/news/partials/stream/article/editor"}).write('\x3c/span\x3e\x3cspan class\x3d"loader add-media-loader" style\x3d"display:none;" role\x3d"alert" \x3e').helper("i18n",
ctx,{},{"key":"_i18n_uploadVideo_loading","templateName":"templates/news/partials/stream/article/editor"}).write('\x3c/span\x3e\x3c/button\x3e\x3cbutton href\x3d"javascript:void(0);" class\x3d"button cancel-media"data-action\x3d"cancel" data-role\x3d"button"\x3e').helper("i18n",ctx,{},{"key":"_i18n_cancel","templateName":"templates/news/partials/stream/article/editor"}).write('\x3c/button\x3e\x3c/form\x3e\x3c/div\x3e\x3cdiv id\x3d"embed-dialog" data-href\x3d"#embed-dialog" class\x3d"dialog"\x3e\x3cdiv class\x3d"error-msg"\x3e\x3cp class\x3d"msg"\x3e\x3c/p\x3e\x3c/div\x3e\x3cform\x3e\x3cinput type\x3d"text" id\x3d"media" class\x3d"media" placeholder\x3d\'').helper("i18n",
ctx,{},{"key":"i18n_editor_add_embed_placeholder","templateName":"templates/news/partials/stream/article/editor"}).write('\'\x3e\x3cbutton href\x3d"javascript:void(0);" class\x3d"button"data-action\x3d"upload" data-role\x3d"button"\x3e\x3cspan class\x3d"add-media-text"\x3e').helper("i18n",ctx,{},{"key":"_i18n_uploadEmbed","templateName":"templates/news/partials/stream/article/editor"}).write('\x3c/span\x3e\x3cspan class\x3d"loader add-media-loader" style\x3d"display:none;" role\x3d"alert" \x3e').helper("i18n",
ctx,{},{"key":"_i18n_uploadEmbed_loading","templateName":"templates/news/partials/stream/article/editor"}).write('\x3c/span\x3e\x3c/button\x3e\x3cbutton href\x3d"javascript:void(0);" class\x3d"button cancel-media"data-action\x3d"cancel" data-role\x3d"button"\x3e').helper("i18n",ctx,{},{"key":"_i18n_cancel","templateName":"templates/news/partials/stream/article/editor"}).write('\x3c/button\x3e\x3c/form\x3e\x3c/div\x3e\x3cdiv id\x3d"paste-bucket"\x3e\x3c/div\x3e')}function body_14(chk,ctx){ctx=ctx.shiftBlocks(blocks);
return chk.write('\x3cdiv class\x3d"tagging-wrapper" id\x3d"article-tagging"\x3e\x3c/div\x3e')}function body_15(chk,ctx){ctx=ctx.shiftBlocks(blocks);return chk.write('\x3ch5 class\x3d"valid-sources"\x3e').helper("i18n",ctx,{},{"key":"i18n_editor_tinymce_addmedia_prompt","templateName":"templates/news/partials/stream/article/editor"}).write("\x3c/h5\x3e")}function body_16(chk,ctx){ctx=ctx.shiftBlocks(blocks);return chk.write('\x3cinput type\x3d"text" id\x3d"media" style\x3d\'margin-top:0px;\' class\x3d"media" placeholder\x3d\'').helper("i18n",
ctx,{},{"key":"i18n_editor_add_video_placeholder_embedly","templateName":"templates/news/partials/stream/article/editor"}).write("'\x3e")}function body_17(chk,ctx){ctx=ctx.shiftBlocks(blocks);return chk.write('\x3cinput type\x3d"text" id\x3d"media" class\x3d"media" placeholder\x3d\'').helper("i18n",ctx,{},{"key":"i18n_editor_add_video_placeholder","templateName":"templates/news/partials/stream/article/editor"}).write("'\x3e")}return body_0})();
(function(){dust.i18n=dust.i18n||{};dust.i18n.cache=dust.i18n.cache||{};dust.i18n.cache["templates/news/partials/stream/article/editor"]={"i18n_editor_title_length_warning":'Headline must be 100 characters or less. This one exceeds that by \x3cspan class\x3d"title-char-count"\x3e0\x3c/span\x3e characters.',"i18n_editor_title_placeholder":"Write Your Headline","i18n_editor_filesize_limit":"Your file needs to be a JPG, GIF, or PNG and no larger than 10MB.","_i18n_uploadImage":"Upload Image","_i18n_cancel":"Cancel",
"i18n_editor_tinymce_addmedia_prompt":"You can add media from YouTube, SlideShare, Vimeo, Ted, Livestream, or Getty images by including their \x3cembed\x3e here","i18n_editor_add_video_placeholder":"Enter \x3ciframe\x3e code here ","i18n_editor_add_video_placeholder_embedly":"paste a link from YouTube, Vimeo, Vine, etc. ","_i18n_uploadVideo":"Add media","_i18n_uploadVideo_loading":"Loading Media...","i18n_editor_add_embed_placeholder":"paste a link from Twitter, Instagram, Bloomberg, etc.","_i18n_uploadEmbed":"Add media",
"_i18n_uploadEmbed_loading":"Loading Media..."}})();
(function(){dust.register("templates/news/partials/stream/activity/shares",body_0);var blocks={"defaultTwitterText":body_1,"twitterText":body_2};function body_0(chk,ctx){ctx=ctx.shiftBlocks(blocks);return chk.write('\x3cul class\x3d"social-shares ').exists(ctx.get(["socialCalloutEnabled"],false),ctx,{"block":body_8},{}).write('"\x3e').helper("ne",ctx,{"block":body_9},{"key":body_10,"value":"control"}).write('\x3cli itemscope itemtype\x3d"http://schema.org/ShareAction"\x3e\x3ca itemprop\x3d"url" class\x3d"share-button share-linkedin" role\x3d"button" data-share-type\x3d"linkedin" data-li-uetrk-click\x3d"share-li"\x3e\x3cspan class\x3d"icon" aria-hidden\x3d"true"\x3e\x3c/span\x3e\x3cspan itemprop\x3d"name" class\x3d"label"\x3e').helper("i18n",
ctx,{},{"key":"i18n_share_on_linkedin","templateName":"templates/news/partials/stream/activity/shares"}).write("\x3c/span\x3e\x3c/a\x3e\x3c/li\x3e").helper("eq",ctx,{"else":body_11,"block":body_15},{"key":body_16,"value":"control"}).write("\x3c/ul\x3e")}function body_1(chk,ctx){ctx=ctx.shiftBlocks(blocks);return chk.helper("i18n",ctx,{},{"key":"i18n_twitterText","templateName":"templates/news/partials/stream/activity/shares"})}function body_2(chk,ctx){ctx=ctx.shiftBlocks(blocks);return chk.exists(ctx.getPath(false,
["lixes","authorTwitterHandleEnabled"]),ctx,{"else":body_3,"block":body_4},{})}function body_3(chk,ctx){ctx=ctx.shiftBlocks(blocks);return chk.block(ctx.getBlock("defaultTwitterText"),ctx,{},{})}function body_4(chk,ctx){ctx=ctx.shiftBlocks(blocks);return chk.exists(ctx.getPath(false,["author","twitterHandle"]),ctx,{"else":body_5,"block":body_6},{})}function body_5(chk,ctx){ctx=ctx.shiftBlocks(blocks);return chk.block(ctx.getBlock("defaultTwitterText"),ctx,{},{})}function body_6(chk,ctx){ctx=ctx.shiftBlocks(blocks);
return chk.helper("addToContext",ctx,{"block":body_7},{"name":"authorHandle"}).helper("i18n",ctx,{},{"key":"i18n_twitterTextHandle","templateName":"templates/news/partials/stream/activity/shares"})}function body_7(chk,ctx){ctx=ctx.shiftBlocks(blocks);return chk.reference(ctx.getPath(false,["author","twitterHandle"]),ctx,"h")}function body_8(chk,ctx){ctx=ctx.shiftBlocks(blocks);return chk.write("social-callout-enabled")}function body_9(chk,ctx){ctx=ctx.shiftBlocks(blocks);return chk.write("\x3cli\x3e").helper("i18n",
ctx,{},{"key":"i18n_share_to_msg","templateName":"templates/news/partials/stream/activity/shares"}).write("\x3c/li\x3e")}function body_10(chk,ctx){ctx=ctx.shiftBlocks(blocks);return chk.reference(ctx.getPath(false,["lixes","wechatSharingType"]),ctx,"h")}function body_11(chk,ctx){ctx=ctx.shiftBlocks(blocks);return chk.helper("eq",ctx,{"block":body_12},{"key":body_14,"value":"wechat"})}function body_12(chk,ctx){ctx=ctx.shiftBlocks(blocks);return chk.helper("i18n",ctx,{},{"key":"i18n_wechat_share_alt",
"output":"json","templateName":"templates/news/partials/stream/activity/shares"}).write('\x3cli itemscope itemtype\x3d"http://schema.org/ShareAction"\x3e\x3ca itemprop\x3d"url" class\x3d"share-button" role\x3d"button" data-li-uetrk-click\x3d"share-wechat" data-li-uetrk-action\x3d"share"\x3e\x3cspan class\x3d"icon wechat-share-button" aria-hidden\x3d"true"\x3e').helper("scdsImg",ctx,{},{"path":"images/logos/logo_wechat_100x100_v1.png","alt":body_13}).write('\x3c/span\x3e\x3cspan itemprop\x3d"name" class\x3d"label"\x3e').helper("i18n",
ctx,{},{"key":"i18n_share_on_wechat","templateName":"templates/news/partials/stream/activity/shares"}).write("\x3c/span\x3e\x3c/a\x3e\x3c/li\x3e")}function body_13(chk,ctx){ctx=ctx.shiftBlocks(blocks);return chk.reference(ctx.get(["i18n_wechat_share_alt"],false),ctx,"h")}function body_14(chk,ctx){ctx=ctx.shiftBlocks(blocks);return chk.reference(ctx.getPath(false,["lixes","wechatSharingType"]),ctx,"h")}function body_15(chk,ctx){ctx=ctx.shiftBlocks(blocks);return chk.write('\x3cli itemscope itemtype\x3d"http://schema.org/ShareAction"\x3e\x3ca itemprop\x3d"url" class\x3d"share-button share-facebook" role\x3d"button" data-share-type\x3d"facebook" data-li-uetrk-click\x3d"share-fb" data-li-uetrk-action\x3d"share"\x3e\x3cspan class\x3d"icon" aria-hidden\x3d"true"\x3e\x3c/span\x3e\x3cspan itemprop\x3d"name" class\x3d"label"\x3e').helper("i18n",
ctx,{},{"key":"i18n_share_on_facebook","templateName":"templates/news/partials/stream/activity/shares"}).write('\x3c/span\x3e\x3c/a\x3e\x3c/li\x3e\x3cli itemscope itemtype\x3d"http://schema.org/ShareAction"\x3e\x3ca itemprop\x3d"url" class\x3d"share-button share-twitter" role\x3d"button" data-li-uetrk-click\x3d"share-twtr" data-share-type\x3d"twitter" data-share-text\x3d"').block(ctx.getBlock("twitterText"),ctx,{},{}).write('"data-li-uetrk-action\x3d"share"\x3e\x3cspan class\x3d"icon" aria-hidden\x3d"true"\x3e\x3c/span\x3e\x3cspan itemprop\x3d"name" class\x3d"label"\x3e').helper("i18n",
ctx,{},{"key":"i18n_share_on_twitter","templateName":"templates/news/partials/stream/activity/shares"}).write("\x3c/span\x3e\x3c/a\x3e\x3c/li\x3e")}function body_16(chk,ctx){ctx=ctx.shiftBlocks(blocks);return chk.reference(ctx.getPath(false,["lixes","wechatSharingType"]),ctx,"h")}return body_0})();
(function(){dust.i18n=dust.i18n||{};dust.i18n.cache=dust.i18n.cache||{};dust.i18n.cache["templates/news/partials/stream/activity/shares"]={"i18n_share_to_msg":"Share to","i18n_share_on_linkedin":"Share on LinkedIn","i18n_share_on_facebook":"Share on Facebook","i18n_share_on_twitter":"Share on Twitter","i18n_wechat_share_alt":"WeChat Logo","i18n_share_on_wechat":"Share on WeChat"}})();
(function(){dust.register("__i18n__templates/news/partials/stream/activity/shares__i18n_twitterText",body_0);function body_0(chk,ctx){return chk.write("\x26quot;").reference(ctx.get(["title"],false),ctx,"h").write("\x26quot; on @LinkedIn")}return body_0})();
(function(){dust.register("__i18n__templates/news/partials/stream/activity/shares__i18n_twitterTextHandle",body_0);function body_0(chk,ctx){return chk.write("\x26quot;").reference(ctx.get(["title"],false),ctx,"h").write("\x26quot; by @").reference(ctx.get(["authorHandle"],false),ctx,"h").write(" on @LinkedIn")}return body_0})();
(function(){dust.register("templates/news/partials/stream/activity/socialActions",body_0);var blocks={"twitterText":body_10};function body_0(chk,ctx){ctx=ctx.shiftBlocks(blocks);return chk.helper("addToContext",ctx,{"block":body_1},{"name":"likeCount"}).helper("addToContext",ctx,{"block":body_4},{"name":"commentCount"}).helper("addToContext",ctx,{"block":body_7},{"name":"shareCount"}).write('\x3cdiv class\x3d"social-actions"\x3e\x3cul class\x3d"social-actions-actions"\x3e\x3cli class\x3d"likes"\x3e\x3ca class\x3d"social-actions-button like-toggle ').exists(ctx.get(["isLiked"],
false),ctx,{"block":body_11},{}).write('" role\x3d"button" tabindex\x3d"0" data-li-uetrk-el\x3d"main-post-like"  data-like-count\x3d"').reference(ctx.get(["likeCount"],false),ctx,"h").write('"\x3e\x3csvg class\x3d"icon"\x3e\x3cuse xlink:href\x3d"#thumbs-up-icon" data-size\x3d"large"\x3e\x3c/use\x3e\x3c/svg\x3e\x3c/a\x3e\x3c/li\x3e\x3cli\x3e\x3ca class\x3d"social-actions-button action-comment" href\x3d"#comments-').reference(ctx.get(["articleId"],false),ctx,"h").write('"\x3e\x3csvg class\x3d"icon"\x3e\x3cuse xlink:href\x3d"#speech-bubble-icon" data-size\x3d"large"\x3e\x3c/use\x3e\x3c/svg\x3e\x3c/a\x3e\x3c/li\x3e\x3cli\x3e\x3ca class\x3d"social-actions-button social-actions-button-share action-share"\x3e\x3csvg class\x3d"icon"\x3e\x3cuse xlink:href\x3d"#share-ios-icon" data-size\x3d"large"\x3e\x3c/use\x3e\x3c/svg\x3e\x3c/a\x3e\x3cul class\x3d"social-actions-share social-shares"\x3e\x3cli itemscope itemtype\x3d"http://schema.org/ShareAction" class\x3d"social-actions-linkedin"\x3e\x3ca itemprop\x3d"url" class\x3d"share-button share-linkedin" role\x3d"button" data-share-type\x3d"linkedin" data-li-uetrk-click\x3d"share-li"\x3e\x3cspan class\x3d"icon" aria-hidden\x3d"true"\x3e\x3c/span\x3e\x3cspan itemprop\x3d"name" class\x3d"label"\x3e').helper("i18n",
ctx,{},{"key":"i18n_share_on_linkedin","templateName":"templates/news/partials/stream/activity/socialActions"}).write('\x3c/span\x3e\x3c/a\x3e\x3c/li\x3e\x3cli itemscope itemtype\x3d"http://schema.org/ShareAction" class\x3d"social-actions-facebook"\x3e\x3ca itemprop\x3d"url" class\x3d"share-button share-facebook" role\x3d"button" data-share-type\x3d"facebook" data-li-uetrk-click\x3d"share-fb" data-li-uetrk-action\x3d"share"\x3e\x3cspan class\x3d"icon" aria-hidden\x3d"true"\x3e\x3c/span\x3e\x3cspan itemprop\x3d"name" class\x3d"label"\x3e').helper("i18n",
ctx,{},{"key":"i18n_share_on_facebook","templateName":"templates/news/partials/stream/activity/socialActions"}).write('\x3c/span\x3e\x3c/a\x3e\x3c/li\x3e\x3cli itemscope itemtype\x3d"http://schema.org/ShareAction" class\x3d"social-actions-twitter"\x3e\x3ca itemprop\x3d"url" class\x3d"share-button share-twitter" role\x3d"button" data-li-uetrk-click\x3d"share-twtr" data-share-type\x3d"twitter" data-share-text\x3d"').block(ctx.getBlock("twitterText"),ctx,{},{}).write('" data-li-uetrk-action\x3d"share"\x3e\x3cspan class\x3d"icon" aria-hidden\x3d"true"\x3e\x3c/span\x3e\x3cspan itemprop\x3d"name" class\x3d"label"\x3e').helper("i18n",
ctx,{},{"key":"i18n_share_on_twitter","templateName":"templates/news/partials/stream/activity/socialActions"}).write('\x3c/span\x3e\x3c/a\x3e\x3c/li\x3e\x3c/ul\x3e\x3c/li\x3e\x3c/ul\x3e\x3cul class\x3d"social-actions-summary"\x3e\x3cli ').helper("eq",ctx,{"block":body_12},{"key":ctx.get(["likeCount"],false),"value":"0","type":"number"}).write('\x3e\x3ca href\x3d"/today/social/likes?articleId\x3d').reference(ctx.get(["articleId"],false),ctx,"h").write('" class\x3d"likes likers-see-all"\x3e\x3cspan class\x3d"count"\x3e').helper("format",
ctx,{},{"type":"number","key":"fmt_like_count","value":ctx.get(["likeCount"],false)}).write("\x3c/span\x3e ").helper("i18n",ctx,{},{"key":"i18n_likes","templateName":"templates/news/partials/stream/activity/socialActions"}).write("\x3c/a\x3e\x3c/li\x3e").helper("ne",ctx,{"block":body_13},{"key":ctx.get(["commentCount"],false),"value":"0","type":"number"}).helper("ne",ctx,{"block":body_14},{"key":ctx.get(["shareCount"],false),"value":"0","type":"number"}).write("\x3c/ul\x3e\x3c/div\x3e")}function body_1(chk,
ctx){ctx=ctx.shiftBlocks(blocks);return chk.notexists(ctx.get(["likeCount"],false),ctx,{"else":body_2,"block":body_3},{})}function body_2(chk,ctx){ctx=ctx.shiftBlocks(blocks);return chk.reference(ctx.get(["likeCount"],false),ctx,"h")}function body_3(chk,ctx){ctx=ctx.shiftBlocks(blocks);return chk.write("0")}function body_4(chk,ctx){ctx=ctx.shiftBlocks(blocks);return chk.notexists(ctx.get(["commentCount"],false),ctx,{"else":body_5,"block":body_6},{})}function body_5(chk,ctx){ctx=ctx.shiftBlocks(blocks);
return chk.reference(ctx.get(["commentCount"],false),ctx,"h")}function body_6(chk,ctx){ctx=ctx.shiftBlocks(blocks);return chk.write("0")}function body_7(chk,ctx){ctx=ctx.shiftBlocks(blocks);return chk.notexists(ctx.get(["shareCount"],false),ctx,{"else":body_8,"block":body_9},{})}function body_8(chk,ctx){ctx=ctx.shiftBlocks(blocks);return chk.reference(ctx.get(["shareCount"],false),ctx,"h")}function body_9(chk,ctx){ctx=ctx.shiftBlocks(blocks);return chk.write("0")}function body_10(chk,ctx){ctx=ctx.shiftBlocks(blocks);
return chk.helper("i18n",ctx,{},{"key":"i18n_twitterText","templateName":"templates/news/partials/stream/activity/socialActions"})}function body_11(chk,ctx){ctx=ctx.shiftBlocks(blocks);return chk.write("on")}function body_12(chk,ctx){ctx=ctx.shiftBlocks(blocks);return chk.write('class\x3d"hidden"')}function body_13(chk,ctx){ctx=ctx.shiftBlocks(blocks);return chk.write('\x3cli\x3e\x3cspan class\x3d"count"\x3e').helper("format",ctx,{},{"type":"number","key":"fmt_comment_count","value":ctx.get(["commentCount"],
false)}).write("\x3c/span\x3e ").helper("i18n",ctx,{},{"key":"i18n_comments","templateName":"templates/news/partials/stream/activity/socialActions"}).write("\x3c/li\x3e")}function body_14(chk,ctx){ctx=ctx.shiftBlocks(blocks);return chk.write('\x3cli\x3e\x3cspan class\x3d"count"\x3e').helper("format",ctx,{},{"type":"number","key":"fmt_share_count","value":ctx.get(["shareCount"],false)}).write("\x3c/span\x3e ").helper("i18n",ctx,{},{"key":"i18n_shares","templateName":"templates/news/partials/stream/activity/socialActions"}).write("\x3c/li\x3e")}
return body_0})();(function(){dust.i18n=dust.i18n||{};dust.i18n.cache=dust.i18n.cache||{};dust.i18n.cache["templates/news/partials/stream/activity/socialActions"]={"i18n_share_on_linkedin":"Share on LinkedIn","i18n_share_on_facebook":"Share on Facebook","i18n_share_on_twitter":"Share on Twitter"}})();
(function(){dust.register("__i18n__templates/news/partials/stream/activity/socialActions__i18n_twitterText",body_0);function body_0(chk,ctx){return chk.write("\x26quot;").reference(ctx.get(["title"],false),ctx,"h").write("\x26quot; on @LinkedIn")}return body_0})();
(function(){dust.register("__i18n__templates/news/partials/stream/activity/socialActions__i18n_likes",body_0);function body_0(chk,ctx){return chk.helper("choice",ctx,{},{"key":ctx.get(["likeCount"],false),"singular":"like","plural":"likes"})}return body_0})();
(function(){dust.register("__i18n__templates/news/partials/stream/activity/socialActions__i18n_comments",body_0);function body_0(chk,ctx){return chk.helper("choice",ctx,{},{"key":ctx.get(["commentCount"],false),"singular":"comment","plural":"comments"})}return body_0})();
(function(){dust.register("__i18n__templates/news/partials/stream/activity/socialActions__i18n_shares",body_0);function body_0(chk,ctx){return chk.helper("choice",ctx,{},{"key":ctx.get(["shareCount"],false),"singular":"share","plural":"shares"})}return body_0})();
(function(){dust.register("templates/news/partials/stream/source/base",body_0);function body_0(chk,ctx){return chk.helper("i18n",ctx,{},{"key":"i18n_source_following","output":"json","templateName":"templates/news/partials/stream/source/base"}).write('\x3cdiv class\x3d"source-promo ').reference(ctx.get(["class"],false),ctx,"h").write('" data-li-uetrk-token\x3d"').reference(ctx.getPath(true,["trackingToken"]),ctx,"h").write('"\x3e').helper("select",ctx,{"block":body_1},{"key":body_9}).write('\x3cdiv class\x3d"text-row').notexists(ctx.get(["isCurrentUser"],
false),ctx,{"block":body_10},{}).write('"\x3e').block(ctx.getBlock("label"),ctx,{"block":body_11},{}).write('\x3ch2 class\x3d"title"\x3e').block(ctx.getBlock("title"),ctx,{"block":body_12},{}).write("\x3c/h2\x3e").exists(ctx.getPath(false,["lixes","dexterShift1Design"]),ctx,{"else":body_22,"block":body_24},{}).write('\x3c/div\x3e\x3cdiv class\x3d"actions').exists(ctx.get(["isCurrentUser"],false),ctx,{"block":body_29},{}).write('"\x3e').block(ctx.getBlock("actions"),ctx,{"block":body_30},{}).write("\x3c/div\x3e\x3c/div\x3e")}
function body_1(chk,ctx){return chk.helper("eq",ctx,{"block":body_2},{"value":"feature"}).helper("default",ctx,{"block":body_6},{})}function body_2(chk,ctx){return chk.exists(ctx.get(["permLink"],false),ctx,{"block":body_3},{})}function body_3(chk,ctx){return chk.write('\x3ca class\x3d"image-container" href\x3d"').block(ctx.getBlock("url"),ctx,{"block":body_4},{}).write('" title\x3d"').block(ctx.getBlock("imgTitle"),ctx,{"block":body_5},{}).write('" data-li-uetrk-click\x3d"img"\x3e').block(ctx.getBlock("image"),
ctx,{},{}).write("\x3c/a\x3e")}function body_4(chk,ctx){return chk.reference(ctx.get(["url"],false),ctx,"h")}function body_5(chk,ctx){return chk.reference(ctx.get(["fmt_fullName"],false),ctx,"h")}function body_6(chk,ctx){return chk.write('\x3ca class\x3d"image-container" href\x3d"').block(ctx.getBlock("url"),ctx,{"block":body_7},{}).write('" title\x3d"').block(ctx.getBlock("imgTitle"),ctx,{"block":body_8},{}).write('" data-li-uetrk-click\x3d"img"\x3e').block(ctx.getBlock("image"),ctx,{},{}).write("\x3c/a\x3e")}
function body_7(chk,ctx){return chk.reference(ctx.get(["url"],false),ctx,"h")}function body_8(chk,ctx){return chk.reference(ctx.get(["fmt_fullName"],false),ctx,"h")}function body_9(chk,ctx){return chk.reference(ctx.get(["promoType"],false),ctx,"h")}function body_10(chk,ctx){return chk.write(" break")}function body_11(chk,ctx){return chk}function body_12(chk,ctx){return chk.helper("addToContext",ctx,{"block":body_13},{"name":"authorTitle"}).write('\x3ca href\x3d"').block(ctx.getBlock("url"),ctx,{"block":body_20},
{}).write('" data-li-uetrk-click\x3d"tl" title\x3d"').reference(ctx.get(["authorTitle"],false),ctx,"h").write('" ').notexists(ctx.get(["permLink"],false),ctx,{"block":body_21},{}).write("\x3e\x3cspan\x3e").helper("format",ctx,{},{"type":"string.truncate","key":"fmt_string","value":ctx.get(["authorTitle"],false),"limit":42}).write("\x3c/span\x3e\x3c/a\x3e")}function body_13(chk,ctx){return chk.helper("select",ctx,{"block":body_14},{"key":body_19})}function body_14(chk,ctx){return chk.helper("eq",ctx,
{"block":body_15},{"value":"feature"}).helper("default",ctx,{"block":body_18},{})}function body_15(chk,ctx){return chk.notexists(ctx.get(["permLink"],false),ctx,{"else":body_16,"block":body_17},{})}function body_16(chk,ctx){return chk.reference(ctx.get(["title"],false),ctx,"h",["s"])}function body_17(chk,ctx){return chk.helper("i18n",ctx,{},{"key":"i18n_published_by","filters":"mk|s","templateName":"templates/news/partials/stream/source/base"})}function body_18(chk,ctx){return chk.reference(ctx.get(["title"],
false),ctx,"h",["s"])}function body_19(chk,ctx){return chk.reference(ctx.get(["promoType"],false),ctx,"h")}function body_20(chk,ctx){return chk.reference(ctx.get(["url"],false),ctx,"h")}function body_21(chk,ctx){return chk.write('target\x3d"_blank"')}function body_22(chk,ctx){return chk.write('\x3cp class\x3d"subtitle"\x3e').block(ctx.getBlock("subtitle"),ctx,{"block":body_23},{}).write("\x3c/p\x3e")}function body_23(chk,ctx){return chk.reference(ctx.get(["subtitle"],false),ctx,"h")}function body_24(chk,
ctx){return chk.helper("select",ctx,{"block":body_25},{"key":body_28})}function body_25(chk,ctx){return chk.helper("eq",ctx,{"block":body_26},{"value":"feature"})}function body_26(chk,ctx){return chk.write('\x3cp class\x3d"subtitle"\x3e').block(ctx.getBlock("subtitle"),ctx,{"block":body_27},{}).write("\x3c/p\x3e")}function body_27(chk,ctx){return chk.reference(ctx.get(["subtitle"],false),ctx,"h")}function body_28(chk,ctx){return chk.reference(ctx.get(["promoType"],false),ctx,"h")}function body_29(chk,
ctx){return chk.write(" is-self")}function body_30(chk,ctx){return chk.notexists(ctx.get(["isCurrentUser"],false),ctx,{"block":body_31},{})}function body_31(chk,ctx){return chk.helper("eq",ctx,{"block":body_32},{"key":ctx.get(["allowFollow"],false),"value":"true"})}function body_32(chk,ctx){return chk.exists(ctx.get(["followUrl"],false),ctx,{"block":body_33},{})}function body_33(chk,ctx){return chk.partial("templates/shared/partials/buttons/followToggle",ctx,{})}return body_0})();
(function(){dust.i18n=dust.i18n||{};dust.i18n.cache=dust.i18n.cache||{};dust.i18n.cache["templates/news/partials/stream/source/base"]={"i18n_source_following":"Following"}})();(function(){dust.register("__i18n__templates/news/partials/stream/source/base__i18n_published_by",body_0);function body_0(chk,ctx){return chk.write("Published by ").reference(ctx.get(["title"],false),ctx,"h")}return body_0})();
(function(){dust.register("templates/news/partials/stream/source/channel",body_0);var blocks={"url":body_1,"subtitle":body_2,"image":body_4};function body_0(chk,ctx){ctx=ctx.shiftBlocks(blocks);return chk.partial("templates/news/partials/stream/source/base",ctx,{"title":ctx.get(["name"],false),"followId":ctx.get(["id"],false),"allowFollow":"true"})}function body_1(chk,ctx){ctx=ctx.shiftBlocks(blocks);return chk.helper("addTrackingCode",ctx,{},{"url":ctx.get(["url"],false),"code":"pulse-det-chnl-art_ftr"})}
function body_2(chk,ctx){ctx=ctx.shiftBlocks(blocks);return chk.helper("gt",ctx,{"block":body_3},{"key":ctx.get(["followerCount"],false),"value":0})}function body_3(chk,ctx){ctx=ctx.shiftBlocks(blocks);return chk.helper("format",ctx,{},{"type":"number","key":"fmt_followerCount","value":ctx.get(["followerCount"],false),"output":"json"}).helper("i18n",ctx,{},{"key":"i18n_follower_count","templateName":"templates/news/partials/stream/source/channel"})}function body_4(chk,ctx){ctx=ctx.shiftBlocks(blocks);
return chk.partial("templates/shared/partials/images/contentImage",ctx,{"type":"channel","imageId":ctx.get(["logo"],false),"size":"100","mprSize":"100","class":"image","alt":ctx.get(["title"],false),"lazy":ctx.getPath(false,["lixes","dexterLazyLoadImages"])})}return body_0})();
(function(){dust.register("__i18n__templates/news/partials/stream/source/channel__i18n_follower_count",body_0);function body_0(chk,ctx){return chk.reference(ctx.get(["fmt_followerCount"],false),ctx,"h").write(" ").helper("choice",ctx,{},{"key":ctx.get(["followerCount"],false),"singular":"follower","plural":"followers"})}return body_0})();
(function(){dust.register("templates/news/partials/stream/source/author",body_0);var blocks={"url":body_7,"subtitle":body_14,"label":body_18,"title":body_21,"image":body_24};function body_0(chk,ctx){ctx=ctx.shiftBlocks(blocks);return chk.helper("format",ctx,{},{"type":"name.full","key":"fmt_fullName","firstName":ctx.getPath(false,["author","firstName"]),"lastName":ctx.getPath(false,["author","lastName"]),"output":"json"}).helper("addToContext",ctx,{"block":body_1},{"name":"authorName"}).helper("addToContext",
ctx,{"block":body_4},{"name":"allowFollow"}).partial("templates/news/partials/stream/source/base",ctx,{"followId":ctx.get(["memberId"],false),"allowFollow":ctx.get(["allowFollow"],false)})}function body_1(chk,ctx){ctx=ctx.shiftBlocks(blocks);return chk.notexists(ctx.getPath(false,["author","firstName"]),ctx,{"else":body_2,"block":body_3},{})}function body_2(chk,ctx){ctx=ctx.shiftBlocks(blocks);return chk.reference(ctx.get(["fmt_fullName"],false),ctx,"h",["s"])}function body_3(chk,ctx){ctx=ctx.shiftBlocks(blocks);
return chk.helper("i18n",ctx,{},{"key":"i18n_author_linkedin_member","templateName":"templates/news/partials/stream/source/author"})}function body_4(chk,ctx){ctx=ctx.shiftBlocks(blocks);return chk.exists(ctx.getPath(false,["lixes","isAllowPublicToFollowLixEnabled"]),ctx,{"else":body_5,"block":body_6},{})}function body_5(chk,ctx){ctx=ctx.shiftBlocks(blocks);return chk.write("true")}function body_6(chk,ctx){ctx=ctx.shiftBlocks(blocks);return chk.reference(ctx.getPath(false,["author","allowPublicToFollow"]),
ctx,"h")}function body_7(chk,ctx){ctx=ctx.shiftBlocks(blocks);return chk.helper("addToContext",ctx,{"block":body_8},{"name":"trkCode"}).helper("addToContext",ctx,{"block":body_11},{"name":"finalProfileUrl"}).helper("addTrackingCode",ctx,{},{"url":ctx.get(["finalProfileUrl"],false),"code":ctx.get(["trkCode"],false)})}function body_8(chk,ctx){ctx=ctx.shiftBlocks(blocks);return chk.helper("eq",ctx,{"else":body_9,"block":body_10},{"key":ctx.get(["promoType"],false),"value":"feature"})}function body_9(chk,
ctx){ctx=ctx.shiftBlocks(blocks);return chk.write("pulse-det-athr_prof-art_ftr")}function body_10(chk,ctx){ctx=ctx.shiftBlocks(blocks);return chk.write("pulse-det-athr_prof-art_hdr")}function body_11(chk,ctx){ctx=ctx.shiftBlocks(blocks);return chk.exists(ctx.get(["publicProfileUrl"],false),ctx,{"else":body_12,"block":body_13},{})}function body_12(chk,ctx){ctx=ctx.shiftBlocks(blocks);return chk.reference(ctx.get(["profileUrl"],false),ctx,"h",["s"])}function body_13(chk,ctx){ctx=ctx.shiftBlocks(blocks);
return chk.reference(ctx.get(["publicProfileUrl"],false),ctx,"h",["s"])}function body_14(chk,ctx){ctx=ctx.shiftBlocks(blocks);return chk.helper("eq",ctx,{"else":body_15,"block":body_17},{"key":ctx.get(["promoType"],false),"value":"feature"})}function body_15(chk,ctx){ctx=ctx.shiftBlocks(blocks);return chk.helper("gt",ctx,{"block":body_16},{"key":ctx.get(["postCount"],false),"value":0})}function body_16(chk,ctx){ctx=ctx.shiftBlocks(blocks);return chk.helper("format",ctx,{},{"type":"number","key":"fmt_postCount",
"value":ctx.get(["postCount"],false),"output":"json"}).write('\x3ca href\x3d"').helper("addTrackingCode",ctx,{},{"url":ctx.get(["postsUrl"],false),"code":"pulse-det-athr_posts"}).write('"\x3e').helper("i18n",ctx,{},{"key":"i18n_post_count","templateName":"templates/news/partials/stream/source/author"}).write("\x3c/a\x3e")}function body_17(chk,ctx){ctx=ctx.shiftBlocks(blocks);return chk.reference(ctx.get(["headline"],false),ctx,"h")}function body_18(chk,ctx){ctx=ctx.shiftBlocks(blocks);return chk.exists(ctx.get(["shifted"],
false),ctx,{"block":body_19},{})}function body_19(chk,ctx){ctx=ctx.shiftBlocks(blocks);return chk.helper("ne",ctx,{"block":body_20},{"key":ctx.get(["promoType"],false),"value":"feature"})}function body_20(chk,ctx){ctx=ctx.shiftBlocks(blocks);return chk.write('\x3ch5 class\x3d"label"\x3e').helper("i18n",ctx,{},{"key":"i18n_written_by","templateName":"templates/news/partials/stream/source/author"}).write("\x3c/h5\x3e")}function body_21(chk,ctx){ctx=ctx.shiftBlocks(blocks);return chk.write('\x3ca class\x3d"name ').exists(ctx.get(["isInfluencer"],
false),ctx,{"block":body_22},{}).write('" href\x3d"').block(ctx.getBlock("url"),ctx,{"block":body_23},{}).write('" data-li-uetrk-click\x3d"tl" title\x3d"').reference(ctx.get(["authorName"],false),ctx,"h").write('" rel\x3d"author"\x3e\x3cspan itemprop\x3d"author" rel\x3d"author"\x3e').reference(ctx.get(["authorName"],false),ctx,"h").write("\x3c/span\x3e\x3c/a\x3e")}function body_22(chk,ctx){ctx=ctx.shiftBlocks(blocks);return chk.write("influencer")}function body_23(chk,ctx){ctx=ctx.shiftBlocks(blocks);
return chk.reference(ctx.get(["url"],false),ctx,"h")}function body_24(chk,ctx){ctx=ctx.shiftBlocks(blocks);return chk.partial("templates/shared/partials/images/profileImage",ctx,{"imageId":ctx.get(["pictureId"],false),"size":"100","mprSize":"100","class":"image","alt":ctx.get(["authorName"],false)})}return body_0})();
(function(){dust.i18n=dust.i18n||{};dust.i18n.cache=dust.i18n.cache||{};dust.i18n.cache["templates/news/partials/stream/source/author"]={"i18n_author_linkedin_member":"LinkedIn member","i18n_written_by":"Written by"}})();
(function(){dust.register("__i18n__templates/news/partials/stream/source/author__i18n_post_count",body_0);function body_0(chk,ctx){return chk.reference(ctx.get(["fmt_postCount"],false),ctx,"h").write(" ").helper("choice",ctx,{},{"key":ctx.get(["postCount"],false),"singular":"post","plural":"posts"})}return body_0})();
(function(){dust.register("templates/news/partials/stream/source/publisher",body_0);var blocks={"url":body_5,"image":body_6};function body_0(chk,ctx){ctx=ctx.shiftBlocks(blocks);return chk.helper("addToContext",ctx,{"block":body_1},{"name":"type"}).helper("eq",ctx,{"else":body_4,"block":body_8},{"key":ctx.get(["type"],false),"value":"channel"})}function body_1(chk,ctx){ctx=ctx.shiftBlocks(blocks);return chk.exists(ctx.get(["publisher"],false),ctx,{"else":body_2,"block":body_3},{})}function body_2(chk,
ctx){ctx=ctx.shiftBlocks(blocks);return chk.write("external")}function body_3(chk,ctx){ctx=ctx.shiftBlocks(blocks);return chk.write("channel")}function body_4(chk,ctx){ctx=ctx.shiftBlocks(blocks);return chk.partial("templates/news/partials/stream/source/base",ctx,{"title":ctx.get(["domain"],false),"allowFollow":"true"})}function body_5(chk,ctx){ctx=ctx.shiftBlocks(blocks);return chk.write("http://").reference(ctx.get(["domain"],false),ctx,"h")}function body_6(chk,ctx){ctx=ctx.shiftBlocks(blocks);
return chk.partial("templates/shared/partials/images/contentImage",ctx,{"imageUrl":body_7,"class":"image favicon","size":"16","alt":ctx.get(["domain"],false)})}function body_7(chk,ctx){ctx=ctx.shiftBlocks(blocks);return chk.write("http://www.google.com/s2/favicons?domain\x3d").reference(ctx.get(["domain"],false),ctx,"h")}function body_8(chk,ctx){ctx=ctx.shiftBlocks(blocks);return chk.partial("templates/news/partials/stream/source/channel",ctx,{})}return body_0})();
(function(){dust.register("templates/news/partials/stream/source/promoList",body_0);function body_0(chk,ctx){return chk.helper("addToContext",ctx,{"block":body_1},{"name":"channelSlots"}).helper("addToContext",ctx,{"block":body_6},{"name":"hasContent"}).helper("eq",ctx,{"block":body_11},{"key":ctx.get(["hasContent"],false),"value":"true"})}function body_1(chk,ctx){return chk.exists(ctx.get(["author"],false),ctx,{"else":body_2,"block":body_5},{})}function body_2(chk,ctx){return chk.exists(ctx.getPath(false,
["source","publisher"]),ctx,{"else":body_3,"block":body_4},{})}function body_3(chk,ctx){return chk.write("2")}function body_4(chk,ctx){return chk.write("1")}function body_5(chk,ctx){return chk.write("1")}function body_6(chk,ctx){return chk.helper("eq",ctx,{"else":body_7,"block":body_8},{"key":ctx.get(["channelSlots"],false),"value":2,"type":"number"})}function body_7(chk,ctx){return chk.write("true")}function body_8(chk,ctx){return chk.exists(ctx.get(["channels"],false),ctx,{"else":body_9,"block":body_10},
{})}function body_9(chk,ctx){return chk.write("false")}function body_10(chk,ctx){return chk.write("true")}function body_11(chk,ctx){return chk.write('\x3cul class\x3d"article-source-promos"\x3e').exists(ctx.getPath(false,["lixes","dexterShift1Design"]),ctx,{"else":body_12,"block":body_21},{}).write("\x3c/ul\x3e")}function body_12(chk,ctx){return chk.exists(ctx.get(["author"],false),ctx,{"else":body_13,"block":body_15},{}).section(ctx.get(["channels"],false),ctx,{"block":body_17},{})}function body_13(chk,
ctx){return chk.section(ctx.getPath(false,["source","publisher"]),ctx,{"block":body_14},{})}function body_14(chk,ctx){return chk.write('\x3cli\x3e\x3ch5 class\x3d"label"\x3e').helper("i18n",ctx,{},{"key":"i18n_published_in","templateName":"templates/news/partials/stream/source/promoList"}).write("\x3c/h5\x3e").partial("templates/news/partials/stream/source/publisher",ctx,{"promoType":"default"}).write("\x3c/li\x3e")}function body_15(chk,ctx){return chk.section(ctx.get(["author"],false),ctx,{"block":body_16},
{})}function body_16(chk,ctx){return chk.write('\x3cli\x3e\x3ch5 class\x3d"label"\x3e').helper("i18n",ctx,{},{"key":"i18n_written_by","templateName":"templates/news/partials/stream/source/promoList"}).write("\x3c/h5\x3e").partial("templates/news/partials/stream/source/author",ctx,{"promoType":"default"}).write("\x3c/li\x3e")}function body_17(chk,ctx){return chk.helper("lt",ctx,{"block":body_18},{"key":ctx.get(["$idx"],false),"value":ctx.get(["channelSlots"],false)})}function body_18(chk,ctx){return chk.write("\x3cli\x3e").helper("lt",
ctx,{"else":body_19,"block":body_20},{"key":ctx.get(["$idx"],false),"value":1}).write("\x3c/li\x3e")}function body_19(chk,ctx){return chk.partial("templates/news/partials/stream/source/channel",ctx,{"promoType":"default","class":"no-label"})}function body_20(chk,ctx){return chk.write('\x3ch5 class\x3d"label"\x3e').helper("i18n",ctx,{},{"key":"i18n_featured_in","templateName":"templates/news/partials/stream/source/promoList"}).write("\x3c/h5\x3e").partial("templates/news/partials/stream/source/channel",
ctx,{"promoType":"default"})}function body_21(chk,ctx){return chk.helper("gt",ctx,{"block":body_22},{"key":ctx.getPath(false,["channels","length"]),"value":0}).exists(ctx.get(["author"],false),ctx,{"block":body_27},{})}function body_22(chk,ctx){return chk.write('\x3cli class\x3d"channels"\x3e').helper("i18n",ctx,{},{"key":"i18n_featured_in","templateName":"templates/news/partials/stream/source/promoList"}).write(" \x3cul\x3e").section(ctx.get(["channels"],false),ctx,{"block":body_23},{}).write("\x3c/ul\x3e\x3c/li\x3e")}
function body_23(chk,ctx){return chk.write('\x3cli\x3e\x3ca href\x3d"').block(ctx.getBlock("url"),ctx,{"block":body_24},{}).write('" data-li-uetrk-click\x3d"tl" title\x3d"').reference(ctx.get(["authorTitle"],false),ctx,"h").write('" ').notexists(ctx.get(["permLink"],false),ctx,{"block":body_25},{}).write(' data-li-uetrk-token\x3d"').reference(ctx.getPath(true,["trackingToken"]),ctx,"h").write('"\x3e').reference(ctx.get(["name"],false),ctx,"h",["mk","s"]).write("\x3c/a\x3e").helper("sep",ctx,{"block":body_26},
{}).write("\x3c/li\x3e")}function body_24(chk,ctx){return chk.reference(ctx.get(["url"],false),ctx,"h")}function body_25(chk,ctx){return chk.write('target\x3d"_blank"')}function body_26(chk,ctx){return chk.helper("i18n",ctx,{},{"key":"i18n_list_comma","templateName":"templates/news/partials/stream/source/promoList"})}function body_27(chk,ctx){return chk.section(ctx.get(["author"],false),ctx,{"block":body_28},{})}function body_28(chk,ctx){return chk.write("\x3cli\x3e").notexists(ctx.getPath(false,
["lixes","dexterShift1Design"]),ctx,{"block":body_29},{}).partial("templates/news/partials/stream/source/author",ctx,{"promoType":"default","shifted":"true"}).write("\x3c/li\x3e")}function body_29(chk,ctx){return chk.write('\x3ch5 class\x3d"label"\x3e').helper("i18n",ctx,{},{"key":"i18n_written_by","templateName":"templates/news/partials/stream/source/promoList"}).write("\x3c/h5\x3e")}return body_0})();
(function(){dust.i18n=dust.i18n||{};dust.i18n.cache=dust.i18n.cache||{};dust.i18n.cache["templates/news/partials/stream/source/promoList"]={"i18n_featured_in":"Featured In","i18n_list_comma":", ","i18n_written_by":"Written by","i18n_published_in":"Published In"}})();
(function(){dust.register("templates/news/partials/stream/source/promoFeature",body_0);var blocks={"editBtn":body_6,"spockBtn":body_9,"actions":body_5};function body_0(chk,ctx){ctx=ctx.shiftBlocks(blocks);return chk.helper("addToContext",ctx,{"block":body_1},{"name":"allowFollow"}).helper("addToContext",ctx,{"block":body_4},{"name":"spockUrl"}).exists(ctx.get(["author"],false),ctx,{"else":body_16,"block":body_18},{})}function body_1(chk,ctx){ctx=ctx.shiftBlocks(blocks);return chk.exists(ctx.getPath(false,
["lixes","isAllowPublicToFollowLixEnabled"]),ctx,{"else":body_2,"block":body_3},{})}function body_2(chk,ctx){ctx=ctx.shiftBlocks(blocks);return chk.write("true")}function body_3(chk,ctx){ctx=ctx.shiftBlocks(blocks);return chk.reference(ctx.getPath(false,["author","allowPublicToFollow"]),ctx,"h")}function body_4(chk,ctx){ctx=ctx.shiftBlocks(blocks);return chk.helper("url",ctx,{},{"alias":"com.linkedin.pulse.controllers.AnalyticsController.getAnalytics","track":"pulse_det-view-stats-author-section-btn"})}
function body_5(chk,ctx){ctx=ctx.shiftBlocks(blocks);return chk.exists(ctx.get(["isCurrentUser"],false),ctx,{"else":body_11,"block":body_15},{})}function body_6(chk,ctx){ctx=ctx.shiftBlocks(blocks);return chk.helper("eq",ctx,{"block":body_7},{"key":ctx.get(["allowEdit"],false),"value":"true"})}function body_7(chk,ctx){ctx=ctx.shiftBlocks(blocks);return chk.exists(ctx.getPath(false,["lixes","streamDetailsEditBtnEnabled"]),ctx,{"block":body_8},{})}function body_8(chk,ctx){ctx=ctx.shiftBlocks(blocks);
return chk.write('\x3ca class\x3d"action-edit" href\x3d"').helper("addTrackingCode",ctx,{},{"url":ctx.get(["editUrl"],false),"code":"pulse-art-edit_btn"}).write('"\x3e').helper("i18n",ctx,{},{"key":"i18n_edit_this_post","templateName":"templates/news/partials/stream/source/promoFeature"}).write("\x3c/a\x3e")}function body_9(chk,ctx){ctx=ctx.shiftBlocks(blocks);return chk.exists(ctx.getPath(false,["lixes","SpockEntryPointEnabled"]),ctx,{"block":body_10},{})}function body_10(chk,ctx){ctx=ctx.shiftBlocks(blocks);
return chk.write('\x3ca class\x3d"action-analytics" href\x3d"').helper("addQueryParameter",ctx,{},{"url":ctx.get(["spockUrl"],false),"key":"articleId","value":ctx.get(["megaphoneArticleId"],false)}).write('"\x3e').helper("i18n",ctx,{},{"key":"i18n_analytics_view_stats","templateName":"templates/news/partials/stream/source/promoFeature"}).write("\x3c/a\x3e")}function body_11(chk,ctx){ctx=ctx.shiftBlocks(blocks);return chk.exists(ctx.getPath(false,["data","isEditor"]),ctx,{"block":body_12},{}).helper("eq",
ctx,{"block":body_13},{"key":ctx.get(["allowFollow"],false),"value":"true"})}function body_12(chk,ctx){ctx=ctx.shiftBlocks(blocks);return chk.block(ctx.getBlock("editBtn"),ctx,{},{})}function body_13(chk,ctx){ctx=ctx.shiftBlocks(blocks);return chk.exists(ctx.get(["followUrl"],false),ctx,{"block":body_14},{})}function body_14(chk,ctx){ctx=ctx.shiftBlocks(blocks);return chk.partial("templates/shared/partials/buttons/followToggle",ctx,{})}function body_15(chk,ctx){ctx=ctx.shiftBlocks(blocks);return chk.block(ctx.getBlock("editBtn"),
ctx,{},{}).block(ctx.getBlock("spockBtn"),ctx,{},{})}function body_16(chk,ctx){ctx=ctx.shiftBlocks(blocks);return chk.section(ctx.get(["source"],false),ctx,{"block":body_17},{})}function body_17(chk,ctx){ctx=ctx.shiftBlocks(blocks);return chk.partial("templates/news/partials/stream/source/publisher",ctx,{"promoType":"feature"})}function body_18(chk,ctx){ctx=ctx.shiftBlocks(blocks);return chk.section(ctx.get(["author"],false),ctx,{"block":body_19},{})}function body_19(chk,ctx){ctx=ctx.shiftBlocks(blocks);
return chk.partial("templates/news/partials/stream/source/author",ctx,{"promoType":"feature"})}return body_0})();(function(){dust.i18n=dust.i18n||{};dust.i18n.cache=dust.i18n.cache||{};dust.i18n.cache["templates/news/partials/stream/source/promoFeature"]={"i18n_edit_this_post":"Edit post","i18n_analytics_view_stats":"View stats"}})();
(function(){dust.register("templates/news/partials/stream/source/coverImage",body_0);function body_0(chk,ctx){return chk.exists(ctx.get(["mastheadImage"],false),ctx,{"block":body_1},{})}function body_1(chk,ctx){return chk.exists(ctx.get(["lazy"],false),ctx,{"else":body_2,"block":body_5},{})}function body_2(chk,ctx){return chk.exists(ctx.get(["isMobile"],false),ctx,{"else":body_3,"block":body_4},{})}function body_3(chk,ctx){return chk.helper("mprCdnImg",ctx,{},{"itemprop":"image","mediaId":ctx.get(["mastheadImage"],
false),"class":"cover-image","alt":ctx.get(["title"],false)})}function body_4(chk,ctx){return chk.helper("mprImgNp",ctx,{},{"itemprop":"image","size":"400","mediaId":ctx.get(["mastheadImage"],false),"class":"cover-image","alt":ctx.get(["title"],false)})}function body_5(chk,ctx){return chk.helper("mprCdnImg",ctx,{},{"itemprop":"image","mediaId":ctx.get(["mastheadImage"],false),"class":"cover-image","alt":ctx.get(["title"],false),"lazy":"true"})}return body_0})();
(function(){dust.register("templates/news/partials/stream/source/header",body_0);function body_0(chk,ctx){return chk.exists(ctx.getPath(false,["lixes","dexterChannelsEnabled"]),ctx,{"block":body_1},{}).write('\x3ch3 class\x3d"title"\x3e\x3ca href\x3d"').reference(ctx.getPath(false,["urls","hub"]),ctx,"h").write('" id\x3d"pulse-title"').exists(ctx.getPath(false,["data","showIntlTitle"]),ctx,{"block":body_4},{}).write("\x3e").helper("i18n",ctx,{},{"key":"i18n_pulse","doc":"Brand name of LinkedIn news section",
"templateName":"templates/news/partials/stream/source/header"}).write("\x3c/a\x3e").exists(ctx.getPath(false,["data","showIntlTitle"]),ctx,{"block":body_5},{}).exists(ctx.getPath(false,["lixes","dexterChannelsEnabled"]),ctx,{"block":body_6},{}).write('\x3c/h3\x3e\x3cdiv class\x3d"article-actions"\x3e').exists(ctx.getPath(false,["lixes","dexterShift1Design"]),ctx,{"block":body_7},{}).exists(ctx.getPath(false,["data","isAuthor"]),ctx,{"block":body_10},{}).write("\x3c/div\x3e")}function body_1(chk,ctx){return chk.write('\x3cbutton id\x3d"channels-icon" aria-describedby\x3d"channels-dropdown-container"\x3e\x3csvg class\x3d"icon"\x3e').exists(ctx.getPath(false,
["lixes","dexterShift1Design"]),ctx,{"else":body_2,"block":body_3},{}).write('\x3c/svg\x3e\x3cspan class\x3d"screen-reader-text"\x3e').helper("i18n",ctx,{},{"key":"i18n_pulse_channels","templateName":"templates/news/partials/stream/source/header"}).write('\x3c/span\x3e\x3c/button\x3e\x3cdiv class\x3d"tooltip-content-container"\x3e\x3cdiv id\x3d"channels-dropdown-container" role\x3d"navigation"\x3e\x3c/div\x3e\x3c/div\x3e')}function body_2(chk,ctx){return chk.write('\x3cg class\x3d"large-icon" style\x3d"fill: currentColor;"\x3e\x3cpath d\x3d"M22,6v2H2V6H22z M2,13h20v-2H2V13z M2,18h20v-2H2V18z" /\x3e\x3c/g\x3e')}
function body_3(chk,ctx){return chk.write('\x3cuse xlink:href\x3d"#hamburger-icon"\x3e\x3c/use\x3e')}function body_4(chk,ctx){return chk.write(' class\x3d"hide"')}function body_5(chk,ctx){return chk.write('\x3ca href\x3d"').reference(ctx.getPath(false,["urls","hub"]),ctx,"h").write('" id\x3d"pulse-title-intl"\x3e').helper("i18n",ctx,{},{"key":"i18n_pulse_intl_article","templateName":"templates/news/partials/stream/source/header"}).write("\x3c/a\x3e")}function body_6(chk,ctx){return chk.write('\x3cspan class\x3d"channel-title"\x3e').partial("templates/news/partials/stream/source/channelTitle",
ctx,{"title":ctx.getPath(false,["data","channelMetadata","title"])}).write("\x3c/span\x3e")}function body_7(chk,ctx){return chk.exists(ctx.getPath(false,["data","streamList","channelMetadata"]),ctx,{"block":body_8},{})}function body_8(chk,ctx){return chk.section(ctx.getPath(false,["data","streamList","channelMetadata"]),ctx,{"block":body_9},{})}function body_9(chk,ctx){return chk.partial("templates/shared/partials/buttons/channelFollowToggle",ctx,{})}function body_10(chk,ctx){return chk.write('\x3ca class\x3d"btn action-create" href\x3d"').helper("addTrackingCode",
ctx,{},{"url":ctx.getPath(false,["urls","createArticle"]),"code":"pulse-write-hdr_btn"}).write('"\x3e').helper("i18n",ctx,{},{"key":"i18n_publish_a_post","templateName":"templates/news/partials/stream/source/header"}).write("\x3c/a\x3e")}return body_0})();
(function(){dust.i18n=dust.i18n||{};dust.i18n.cache=dust.i18n.cache||{};dust.i18n.cache["templates/news/partials/stream/source/header"]={"i18n_pulse_channels":"Pulse Channels","i18n_pulse":"Pulse","i18n_pulse_intl_article":"International Article","i18n_publish_a_post":"Publish a post"}})();
(function(){dust.register("templates/news/partials/inline-scripts/fonts64_complex",body_0);function body_0(chk,ctx){return chk.write("\x3cscript\x3e(function (window, document) {var fonts64Path \x3d '/pulse/assets/%2Fpulse-web-frontend%2Fscss%2Fshared%2Fpemberly-davinci%2Fthemes%2Fshift%2Freset%2Ffonts64.css?v\x3dcomplex_20150805',VERSION_KEY \x3d 'artdeco_fonts_version',CACHE_KEY \x3d 'artdeco_font_styles',cache,fontStyles \x3d ['@font-face {','font-family: \"Helvetica Neue\";','src: local(\"Helvetica Neue\"),','local(\"HelveticaNeue\"),','url(\"//static.licdn.com/sc/h/4wov63imoms5gjsywc58axiux\") format(\"woff\");','}','@font-face {','font-family: \"Helvetica Neue\";','font-weight: 200;','src: local(\"Helvetica Neue Light\"),','local(\"HelveticaNeue-Light\"),','url(\"//static.licdn.com/sc/h/f5k70zdjshxhrwjeuvarazb6\") format(\"woff\");','}','@font-face {','font-family: \"Helvetica Neue\";','font-style: italic;','font-weight: regular;','src: local(\"Helvetica Neue Italic\"),','local(\"HelveticaNeue-Italic\"),','url(\"//static.licdn.com/sc/h/58mrdp9t1tjck760sokv8s4qe\") format(\"woff\");','}','@font-face {','font-family: \"Helvetica Neue\";','font-weight: bold;','src: local(\"Helvetica Neue Bold\"),','local(\"HelveticaNeue-Bold\"),','url(\"//static.licdn.com/sc/h/2koykds746j7kxshvm602d3ty\") format(\"woff\");','}'].join('');function getCache() {var lastVersion \x3d window.localStorage.getItem(VERSION_KEY);if (lastVersion \x26\x26 lastVersion !\x3d\x3d fonts64Path) {window.localStorage.removeItem(CACHE_KEY);} else {return window.localStorage.getItem(CACHE_KEY);}}function appendFontStyles(value) {var style \x3d document.createElement('style');style.textContent \x3d value;document.head.appendChild(style);}function getFont64Styles() {var request \x3d new XMLHttpRequest();request.open('GET', fonts64Path, true);request.onreadystatechange \x3d function () {if (request.readyState \x3d\x3d\x3d 4) {if (request.status \x3d\x3d\x3d 200) {var response \x3d request.response;window.localStorage.setItem(VERSION_KEY, fonts64Path);window.localStorage.setItem(CACHE_KEY, response);} else {console.warn('Failed to load font styles from CDN.');}}};request.send();}try {cache \x3d getCache();if (cache) {appendFontStyles(cache);} else {appendFontStyles(fontStyles);window.addEventListener('load', function () {/** Wait 1s to match Art Deco */setTimeout(getFont64Styles, 1000);});}} catch(e) {}})(window, document);\x3c/script\x3e")}
return body_0})();
(function(){dust.register("templates/news/partials/inline-scripts/fonts64_simple",body_0);function body_0(chk,ctx){return chk.write("\x3cscript\x3e(function (window, document) {var fonts64Path \x3d '/pulse/assets/%2Fpulse-web-frontend%2Fscss%2Fshared%2Fpemberly-davinci%2Fthemes%2Fshift%2Freset%2Ffonts64.css?v\x3dsimple_20150805',VERSION_KEY \x3d 'artdeco_fonts_version',CACHE_KEY \x3d 'artdeco_font_styles',cache;function getCache() {var lastVersion \x3d window.localStorage.getItem(VERSION_KEY);if (lastVersion \x26\x26 lastVersion !\x3d\x3d fonts64Path) {window.localStorage.removeItem(CACHE_KEY);} else {return window.localStorage.getItem(CACHE_KEY);}}function appendFontStyles(value) {var style \x3d document.createElement('style');style.textContent \x3d value;document.head.appendChild(style);}function getFont64Styles() {var request \x3d new XMLHttpRequest();request.open('GET', fonts64Path, true);request.onreadystatechange \x3d function () {if (request.readyState \x3d\x3d\x3d 4) {if (request.status \x3d\x3d\x3d 200) {var response \x3d request.response;appendFontStyles(response);window.localStorage.setItem(VERSION_KEY, fonts64Path);window.localStorage.setItem(CACHE_KEY, response);} else {console.warn('Failed to load font styles from CDN.');}}};request.send();}try {cache \x3d getCache();if (cache) {appendFontStyles(cache);} else {window.addEventListener('load', function () {setTimeout(getFont64Styles, 0);});}} catch(e) {}})(window, document);\x3c/script\x3e")}
return body_0})();
(function(){dust.register("templates/shared/partials/images/profileImage",body_0);function body_0(chk,ctx){return chk.helper("param",ctx,{},{"key":"imageId"}).helper("param",ctx,{},{"key":"size"}).helper("param",ctx,{},{"key":"mprSize"}).helper("param",ctx,{},{"key":"class"}).helper("param",ctx,{},{"key":"alt"}).helper("param",ctx,{},{"key":"lazy"}).helper("addToContext",ctx,{"block":body_1},{"name":"ghostImagePath"}).exists(ctx.get(["imageId"],false),ctx,{"else":body_2,"block":body_5},{})}function body_1(chk,
ctx){return chk.write("/images/themes/katy/ghosts/person/ghost_person_").reference(ctx.get(["size"],false),ctx,"h").write("x").reference(ctx.get(["size"],false),ctx,"h").write("_v1.png")}function body_2(chk,ctx){return chk.exists(ctx.get(["lazy"],false),ctx,{"else":body_3,"block":body_4},{})}function body_3(chk,ctx){return chk.helper("scdsImg",ctx,{},{"itemprop":"image","path":ctx.get(["ghostImagePath"],false),"width":ctx.get(["size"],false),"height":ctx.get(["size"],false),"class":ctx.get(["class"],
false),"alt":ctx.get(["alt"],false)})}function body_4(chk,ctx){return chk.write('\x3cimg itemprop\x3d"image" src\x3d"" class\x3d"').reference(ctx.get(["class"],false),ctx,"h").write('" alt\x3d"').reference(ctx.get(["alt"],false),ctx,"h").write('" width\x3d"').reference(ctx.get(["size"],false),ctx,"h").write('" height\x3d"').reference(ctx.get(["size"],false),ctx,"h").write('" data-li-src\x3d"').helper("scdsUrl",ctx,{},{"path":ctx.get(["ghostImagePath"],false)}).write('"\x3e')}function body_5(chk,ctx){return chk.exists(ctx.get(["lazy"],
false),ctx,{"else":body_6,"block":body_7},{})}function body_6(chk,ctx){return chk.helper("profileImg",ctx,{},{"itemprop":"image","mediaId":ctx.get(["imageId"],false),"size":ctx.get(["size"],false),"mprSize":ctx.get(["mprSize"],false),"class":ctx.get(["class"],false),"alt":ctx.get(["alt"],false)})}function body_7(chk,ctx){return chk.write('\x3cimg itemprop\x3d"image" src\x3d"" class\x3d"').reference(ctx.get(["class"],false),ctx,"h").write('" alt\x3d"').reference(ctx.get(["alt"],false),ctx,"h").write('" width\x3d"').reference(ctx.get(["size"],
false),ctx,"h").write('" height\x3d"').reference(ctx.get(["size"],false),ctx,"h").write('" data-li-src\x3d"').helper("mprImgUrl",ctx,{},{"mediaId":ctx.get(["imageId"],false),"width":ctx.get(["mprSize"],false),"height":ctx.get(["mprSize"],false)}).write('"\x3e')}return body_0})();
(function(){dust.register("templates/shared/partials/images/contentImage",body_0);function body_0(chk,ctx){return chk.helper("param",ctx,{},{"key":"imageId"}).helper("param",ctx,{},{"key":"imageUrl"}).helper("param",ctx,{},{"key":"size"}).helper("param",ctx,{},{"key":"mprSize"}).helper("param",ctx,{},{"key":"class"}).helper("param",ctx,{},{"key":"alt"}).helper("param",ctx,{},{"key":"type"}).helper("param",ctx,{},{"key":"lazy"}).helper("addToContext",ctx,{"block":body_1},{"name":"ghostImagePath"}).exists(ctx.get(["imageId"],
false),ctx,{"else":body_6,"block":body_17},{})}function body_1(chk,ctx){return chk.helper("select",ctx,{"block":body_2},{"key":body_5})}function body_2(chk,ctx){return chk.helper("eq",ctx,{"block":body_3},{"value":"channel"}).helper("default",ctx,{"block":body_4},{})}function body_3(chk,ctx){return chk.write("/images/themes/katy/ghosts/trending_news/ghost_trending_news_").reference(ctx.get(["size"],false),ctx,"h").write("x").reference(ctx.get(["size"],false),ctx,"h").write("_v2.png")}function body_4(chk,
ctx){return chk.write("/images/themes/katy/ghosts/trending_news/ghost_trending_news_").reference(ctx.get(["size"],false),ctx,"h").write("x").reference(ctx.get(["size"],false),ctx,"h").write("_v2.png")}function body_5(chk,ctx){return chk.reference(ctx.get(["type"],false),ctx,"h")}function body_6(chk,ctx){return chk.exists(ctx.get(["imageUrl"],false),ctx,{"else":body_7,"block":body_10},{})}function body_7(chk,ctx){return chk.exists(ctx.get(["lazy"],false),ctx,{"else":body_8,"block":body_9},{})}function body_8(chk,
ctx){return chk.helper("scdsImg",ctx,{},{"itemprop":"image","path":ctx.get(["ghostImagePath"],false),"width":ctx.get(["size"],false),"height":ctx.get(["size"],false),"class":ctx.get(["class"],false),"alt":ctx.get(["alt"],false)})}function body_9(chk,ctx){return chk.write('\x3cimg itemprop\x3d"image" src\x3d"" class\x3d"').reference(ctx.get(["class"],false),ctx,"h").write('" alt\x3d"').reference(ctx.get(["alt"],false),ctx,"h").write('" width\x3d"').reference(ctx.get(["size"],false),ctx,"h").write('" height\x3d"').reference(ctx.get(["size"],
false),ctx,"h").write('" data-li-src\x3d"').helper("scdsUrl",ctx,{},{"path":ctx.get(["ghostImagePath"],false)}).write('"\x3e')}function body_10(chk,ctx){return chk.helper("select",ctx,{"block":body_11},{"key":body_16})}function body_11(chk,ctx){return chk.helper("eq",ctx,{"block":body_12},{"value":"channel"}).helper("default",ctx,{"block":body_13},{})}function body_12(chk,ctx){return chk.helper("scdsImg",ctx,{},{"itemprop":"image","path":ctx.get(["ghostImagePath"],false),"width":ctx.get(["size"],
false),"height":ctx.get(["size"],false),"class":ctx.get(["class"],false),"alt":ctx.get(["alt"],false)})}function body_13(chk,ctx){return chk.exists(ctx.get(["lazy"],false),ctx,{"else":body_14,"block":body_15},{})}function body_14(chk,ctx){return chk.write('\x3cimg itemprop\x3d"image" src\x3d"').reference(ctx.get(["imageUrl"],false),ctx,"h").write('" class\x3d"').reference(ctx.get(["class"],false),ctx,"h").write('" alt\x3d"').reference(ctx.get(["alt"],false),ctx,"h").write('" width\x3d"').reference(ctx.get(["size"],
false),ctx,"h").write('" height\x3d"').reference(ctx.get(["size"],false),ctx,"h").write('"\x3e')}function body_15(chk,ctx){return chk.write('\x3cimg itemprop\x3d"image" src\x3d"" class\x3d"').reference(ctx.get(["class"],false),ctx,"h").write('" alt\x3d"').reference(ctx.get(["alt"],false),ctx,"h").write('" width\x3d"').reference(ctx.get(["size"],false),ctx,"h").write('" height\x3d"').reference(ctx.get(["size"],false),ctx,"h").write('" data-li-src\x3d"').reference(ctx.get(["imageUrl"],false),ctx,"h").write('"\x3e')}
function body_16(chk,ctx){return chk.reference(ctx.get(["type"],false),ctx,"h")}function body_17(chk,ctx){return chk.exists(ctx.get(["lazy"],false),ctx,{"else":body_18,"block":body_19},{})}function body_18(chk,ctx){return chk.helper("mprImg",ctx,{},{"itemprop":"image","mediaId":ctx.get(["imageId"],false),"mprSize":ctx.get(["mprSize"],false),"size":ctx.get(["size"],false),"class":ctx.get(["class"],false),"alt":ctx.get(["alt"],false)})}function body_19(chk,ctx){return chk.write('\x3cimg itemprop\x3d"image" src\x3d"" class\x3d"').reference(ctx.get(["class"],
false),ctx,"h").write('" alt\x3d"').reference(ctx.get(["alt"],false),ctx,"h").write('" width\x3d"').reference(ctx.get(["size"],false),ctx,"h").write('" height\x3d"').reference(ctx.get(["size"],false),ctx,"h").write('" data-li-src\x3d"').helper("mprImgUrl",ctx,{},{"mediaId":ctx.get(["imageId"],false),"width":ctx.get(["mprSize"],false),"height":ctx.get(["mprSize"],false)}).write('"\x3e')}return body_0})();
(function(){dust.register("templates/shared/partials/badges/influencerBadge",body_0);function body_0(chk,ctx){return chk.helper("param",ctx,{},{"key":"badgeUrl"}).helper("param",ctx,{},{"key":"badgeName"}).exists(ctx.get(["badgeUrl"],false),ctx,{"else":body_1,"block":body_2},{}).helper("i18n",ctx,{},{"key":"i18n_influencer","templateName":"templates/shared/partials/badges/influencerBadge"}).exists(ctx.get(["badgeUrl"],false),ctx,{"else":body_6,"block":body_7},{})}function body_1(chk,ctx){return chk.write('\x3cspan class\x3d"influencer-badge"\x3e')}
function body_2(chk,ctx){return chk.helper("addToContext",ctx,{"block":body_3},{"name":"_title"}).write('\x3ca href\x3d"').reference(ctx.get(["badgeUrl"],false),ctx,"h").write('" title\x3d"').reference(ctx.get(["_title"],false),ctx,"h").write('" class\x3d"influencer-badge"\x3e')}function body_3(chk,ctx){return chk.exists(ctx.get(["badgeName"],false),ctx,{"else":body_4,"block":body_5},{})}function body_4(chk,ctx){return chk.helper("i18n",ctx,{},{"key":"i18n_influencer_badge_title","templateName":"templates/shared/partials/badges/influencerBadge"})}
function body_5(chk,ctx){return chk.helper("i18n",ctx,{},{"key":"i18n_influencer_badge_title_name","templateName":"templates/shared/partials/badges/influencerBadge"})}function body_6(chk,ctx){return chk.write("\x3c/span\x3e")}function body_7(chk,ctx){return chk.write("\x3c/a\x3e")}return body_0})();(function(){dust.i18n=dust.i18n||{};dust.i18n.cache=dust.i18n.cache||{};dust.i18n.cache["templates/shared/partials/badges/influencerBadge"]={"i18n_influencer_badge_title":"LinkedIn Influencer","i18n_influencer":"Influencer"}})();
(function(){dust.register("__i18n__templates/shared/partials/badges/influencerBadge__i18n_influencer_badge_title_name",body_0);function body_0(chk,ctx){return chk.reference(ctx.get(["badgeName"],false),ctx,"h").write(" is a LinkedIn Influencer")}return body_0})();
(function(){dust.register("templates/shared/partials/buttons/followToggle",body_0);var blocks={"classFormat":body_1};function body_0(chk,ctx){ctx=ctx.shiftBlocks(blocks);return chk.helper("i18n",ctx,{},{"key":"i18n_following","output":"json","templateName":"templates/shared/partials/buttons/followToggle"}).write('\x3cdiv class\x3d"follow-toggle ').block(ctx.getBlock("classFormat"),ctx,{},{}).write('" data-li-follow-id\x3d"').reference(ctx.get(["followId"],false),ctx,"h").write('"\x3e').exists(ctx.get(["isConnection"],
false),ctx,{"else":body_5,"block":body_14},{}).write("\x3c/div\x3e")}function body_1(chk,ctx){ctx=ctx.shiftBlocks(blocks);return chk.block(ctx.getBlock("containerClass"),ctx,{"block":body_2},{}).helper("eq",ctx,{"block":body_3},{"key":body_4,"value":"true"})}function body_2(chk,ctx){ctx=ctx.shiftBlocks(blocks);return chk.reference(ctx.getPath(true,["containerClass"]),ctx,"h")}function body_3(chk,ctx){ctx=ctx.shiftBlocks(blocks);return chk.write(" is-following")}function body_4(chk,ctx){ctx=ctx.shiftBlocks(blocks);
return chk.reference(ctx.get(["isFollowing"],false),ctx,"h")}function body_5(chk,ctx){ctx=ctx.shiftBlocks(blocks);return chk.exists(ctx.get(["isCurrentUser"],false),ctx,{"else":body_6,"block":body_12},{})}function body_6(chk,ctx){ctx=ctx.shiftBlocks(blocks);return chk.write('\x3ca class\x3d"action-follow" role\x3d"button" href\x3d"').block(ctx.getBlock("followUrl"),ctx,{"block":body_7},{}).write('"\x3e').block(ctx.getBlock("followText"),ctx,{"block":body_8},{}).write('\x3c/a\x3e\x3ca class\x3d"action-unfollow" role\x3d"button" href\x3d"').block(ctx.getBlock("unfollowUrl"),
ctx,{"block":body_9},{}).write('"\x3e').block(ctx.getBlock("unfollowText"),ctx,{"block":body_10},{}).write('\x3c/a\x3e\x3cspan class\x3d"loader"\x3e').block(ctx.getBlock("loaderText"),ctx,{"block":body_11},{}).write("\x3c/span\x3e")}function body_7(chk,ctx){ctx=ctx.shiftBlocks(blocks);return chk.reference(ctx.get(["followUrl"],false),ctx,"h")}function body_8(chk,ctx){ctx=ctx.shiftBlocks(blocks);return chk.helper("i18n",ctx,{},{"key":"i18n_follow","templateName":"templates/shared/partials/buttons/followToggle"})}
function body_9(chk,ctx){ctx=ctx.shiftBlocks(blocks);return chk.reference(ctx.get(["unfollowUrl"],false),ctx,"h")}function body_10(chk,ctx){ctx=ctx.shiftBlocks(blocks);return chk.write('\x3cspan class\x3d"text-unfollow"\x3e').helper("i18n",ctx,{},{"key":"i18n_unfollow","templateName":"templates/shared/partials/buttons/followToggle"}).write('\x3c/span\x3e\x3cspan class\x3d"text-following"\x3e').reference(ctx.get(["i18n_following"],false),ctx,"h").write("\x3c/span\x3e")}function body_11(chk,ctx){ctx=
ctx.shiftBlocks(blocks);return chk.write('\x3cspan class\x3d"text-loading"\x3e').helper("i18n",ctx,{},{"key":"i18n_loading","templateName":"templates/shared/partials/buttons/followToggle"}).write("\x3c/span\x3e")}function body_12(chk,ctx){ctx=ctx.shiftBlocks(blocks);return chk.write('\x3ca class\x3d"static-user" disabled\x3d"disabled"\x3e').block(ctx.getBlock("userText"),ctx,{"block":body_13},{}).write("\x3c/a\x3e")}function body_13(chk,ctx){ctx=ctx.shiftBlocks(blocks);return chk.helper("i18n",ctx,
{},{"key":"i18n_you","templateName":"templates/shared/partials/buttons/followToggle"})}function body_14(chk,ctx){ctx=ctx.shiftBlocks(blocks);return chk.write('\x3ca class\x3d"static-following" disabled\x3d"disabled"\x3e').block(ctx.getBlock("followingText"),ctx,{"block":body_15},{}).write("\x3c/a\x3e")}function body_15(chk,ctx){ctx=ctx.shiftBlocks(blocks);return chk.reference(ctx.get(["i18n_following"],false),ctx,"h")}return body_0})();
(function(){dust.i18n=dust.i18n||{};dust.i18n.cache=dust.i18n.cache||{};dust.i18n.cache["templates/shared/partials/buttons/followToggle"]={"i18n_following":"Following","i18n_you":"You","i18n_follow":"Follow","i18n_unfollow":"Unfollow","i18n_loading":"Loading"}})();
(function(){dust.register("templates/shared/partials/seo/seoTags",body_0);function body_0(chk,ctx){return chk.exists(ctx.get(["summary"],false),ctx,{"block":body_1},{}).helper("seoTag",ctx,{},{"property":"site_name","prefix":"og","content":"LinkedIn Pulse"}).helper("seoTag",ctx,{},{"property":"type","prefix":"og","content":"article"}).exists(ctx.get(["title"],false),ctx,{"block":body_2},{}).exists(ctx.get(["imageUrl"],false),ctx,{"block":body_3},{}).exists(ctx.get(["canonical"],false),ctx,{"block":body_4},
{}).helper("addToContext",ctx,{"block":body_5},{"name":"twitterCardVar"}).helper("seoTag",ctx,{},{"name":"card","prefix":"twitter","content":ctx.get(["twitterCardVar"],false)}).helper("seoTag",ctx,{},{"name":"site","prefix":"twitter","content":"@LinkedIn"}).exists(ctx.get(["twitterHandle"],false),ctx,{"block":body_8},{}).helper("addToContext",ctx,{"block":body_9},{"name":"pubDateIso"}).helper("format",ctx,{},{"type":"date.iso","key":"fmt_date","date":ctx.get(["pubDateIso"],false),"useTimeZone":ctx.get(["false"],
false),"output":"json"}).helper("seoTag",ctx,{},{"property":"published_time","prefix":"article","content":ctx.get(["fmt_date"],false)})}function body_1(chk,ctx){return chk.helper("seoTag",ctx,{},{"name":"description","content":ctx.get(["summary"],false)}).helper("seoTag",ctx,{},{"property":"description","prefix":"og","content":ctx.get(["summary"],false)}).helper("seoTag",ctx,{},{"name":"description","prefix":"twitter","content":ctx.get(["summary"],false)})}function body_2(chk,ctx){return chk.helper("seoTag",
ctx,{},{"property":"title","prefix":"og","content":ctx.get(["title"],false)}).helper("seoTag",ctx,{},{"name":"title","prefix":"twitter","content":ctx.get(["title"],false)})}function body_3(chk,ctx){return chk.helper("seoTag",ctx,{},{"property":"image","prefix":"og","content":ctx.get(["imageUrl"],false)}).helper("seoTag",ctx,{},{"name":"image:src","prefix":"twitter","content":ctx.get(["imageUrl"],false)})}function body_4(chk,ctx){return chk.helper("seoTag",ctx,{},{"property":"url","prefix":"og","content":ctx.get(["canonical"],
false)})}function body_5(chk,ctx){return chk.notexists(ctx.get(["twitterCard"],false),ctx,{"else":body_6,"block":body_7},{})}function body_6(chk,ctx){return chk.reference(ctx.get(["twitterCard"],false),ctx,"h")}function body_7(chk,ctx){return chk.write("summary_large_image")}function body_8(chk,ctx){return chk.helper("seoTag",ctx,{},{"name":"creator","prefix":"twitter","content":ctx.get(["authorTwitterHandle"],false)})}function body_9(chk,ctx){return chk.reference(ctx.get(["publishedDate"],false),
ctx,"h",["isoDate"])}return body_0})();
(function(){dust.register("templates/shared/embeds/flagContentForm",body_0);function body_0(chk,ctx){return chk.section(ctx.get(["flagArticleForm"],false),ctx,{"block":body_1},{})}function body_1(chk,ctx){return chk.write('\x3cform class\x3d"standard-form" id\x3d"').reference(ctx.get(["name"],false),ctx,"h").write('_id" name\x3d"').reference(ctx.get(["name"],false),ctx,"h").write('" method\x3d"').reference(ctx.get(["method"],false),ctx,"h").write('" action\x3d"').block(ctx.getBlock("actionUrl"),ctx,
{"block":body_2},{}).write('"\x3e\x3cfieldset\x3e\x3clegend\x3e').helper("i18n",ctx,{},{"key":"main_title","templateName":"templates/shared/embeds/flagContentForm"}).write("\x3c/legend\x3e").section(ctx.get(["html"],false),ctx,{"block":body_3},{}).write('\x3c/fieldset\x3e\x3cdiv class\x3d"dialog-actions"\x3e\x3ca href\x3d"').reference(ctx.get(["url_copyright_policy"],false),ctx,"h").write('" class\x3d"copyright-policy" target\x3d"_blank"\x3e').helper("i18n",ctx,{},{"key":"claim_copyright","templateName":"templates/shared/embeds/flagContentForm"}).write('\x3c/a\x3e\x3cdiv class\x3d"button-group"\x3e\x3cbutton type\x3d"submit" class\x3d"submit-btn" disabled\x3d"disabled" data-li-dialog-action\x3d"ok"\x3e').helper("i18n",
ctx,{},{"key":"submit_btn","templateName":"templates/shared/embeds/flagContentForm"}).write('\x3c/button\x3e\x3cbutton class\x3d"dismiss-btn dialog-close" data-li-dialog-action\x3d"cancel"\x3e').helper("i18n",ctx,{},{"key":"cancel_btn","templateName":"templates/shared/embeds/flagContentForm"}).write("\x3c/button\x3e\x3c/div\x3e\x3c/div\x3e\x3c/form\x3e")}function body_2(chk,ctx){return chk.reference(ctx.get(["action"],false),ctx,"h")}function body_3(chk,ctx){return chk.section(ctx.get(["reason"],
false),ctx,{"block":body_4},{}).partial("templates/shared/partials/inputs/inputHidden",ctx.rebase(ctx.get(["contentUrn"],false)),{}).partial("templates/shared/partials/inputs/inputHidden",ctx.rebase(ctx.get(["contentSource"],false)),{}).partial("templates/shared/partials/inputs/inputHidden",ctx.rebase(ctx.get(["csrfToken"],false)),{}).partial("templates/shared/partials/inputs/inputHidden",ctx.rebase(ctx.get(["sourceAlias"],false)),{})}function body_4(chk,ctx){return chk.write("\x3cul\x3e\x3cli\x3e\x3clabel\x3e").partial("templates/shared/partials/inputs/inputRadio",
ctx.rebase(ctx.get(["INAPPROPRIATE_CONTENT"],false)),{}).write(" \x3cspan\x3e").helper("i18n",ctx,{},{"key":"reason_hateraid","filters":"|et|s","templateName":"templates/shared/embeds/flagContentForm"}).write("\x3c/span\x3e\x3c/label\x3e\x3c/li\x3e\x3cli\x3e\x3clabel\x3e").partial("templates/shared/partials/inputs/inputRadio",ctx.rebase(ctx.get(["PORNOGRAPHIC"],false)),{}).write(" \x3cspan\x3e").helper("i18n",ctx,{},{"key":"reason_birthday_suits","templateName":"templates/shared/embeds/flagContentForm"}).write("\x3c/span\x3e\x3c/label\x3e\x3c/li\x3e\x3cli\x3e\x3clabel\x3e").partial("templates/shared/partials/inputs/inputRadio",
ctx.rebase(ctx.get(["SPAM_CONTENT"],false)),{}).write(" \x3cspan\x3e").helper("i18n",ctx,{},{"key":"reason_spammy","filters":"|et|s","templateName":"templates/shared/embeds/flagContentForm"}).write("\x3c/span\x3e\x3c/label\x3e\x3c/li\x3e\x3cli\x3e\x3clabel\x3e").partial("templates/shared/partials/inputs/inputRadio",ctx.rebase(ctx.get(["PLAGIARISM"],false)),{}).write(" \x3cspan\x3e").helper("i18n",ctx,{},{"key":"reason_theivery","filters":"|et|s","templateName":"templates/shared/embeds/flagContentForm"}).write("\x3c/span\x3e\x3c/label\x3e\x3c/li\x3e\x3c/ul\x3e")}
return body_0})();(function(){dust.i18n=dust.i18n||{};dust.i18n.cache=dust.i18n.cache||{};dust.i18n.cache["templates/shared/embeds/flagContentForm"]={"main_title":"Why should we flag this?","reason_hateraid":"It's hateful or abusive","reason_birthday_suits":"It contains nudity or pornography","reason_spammy":"It's spam or a scam","reason_theivery":"It's plagiarism","claim_copyright":"Claim copyright infringement","submit_btn":"Submit","cancel_btn":"Cancel"}})();
(function(){dust.register("templates/shared/embeds/dialog/dialog",body_0);function body_0(chk,ctx){return chk.write('\x3cdiv id\x3d"dialog" style\x3d"width:').reference(ctx.get(["width"],false),ctx,"h").write('px;" class\x3d"').reference(ctx.get(["customClassName"],false),ctx,"h").write('" aria-labelledby\x3d"dialog-v3-title" role\x3d"dialog"\x3e\x3cdiv role\x3d"document"\x3e\x3cspan class\x3d"dialog-a11y-hidden"\x3e').reference(ctx.get(["startText"],false),ctx,"h").write('\x3c/span\x3e\x3cdiv class\x3d"dialog-title" id\x3d"dialog-v3-title"\x3e\x3cbutton class\x3d"dialog-close"\x3e\x3cspan class\x3d"dialog-a11y-hidden"\x3e').reference(ctx.get(["closeText"],
false),ctx,"h").write('\x3c/span\x3e\x3c/button\x3e\x3ch3 class\x3d"title"\x3e').reference(ctx.get(["title"],false),ctx,"h").write('\x3c/h3\x3e\x3c/div\x3e\x3cdiv class\x3d"dialog-body"\x3e\x3c/div\x3e\x3cspan class\x3d"dialog-a11y-hidden"\x3e').reference(ctx.get(["endText"],false),ctx,"h").write("\x3c/span\x3e\x3c/div\x3e\x3c/div\x3e")}return body_0})();
(function(){dust.register("templates/shared/embeds/dialog/dialog_mask",body_0);function body_0(chk,ctx){return chk.write('\x3cdiv id\x3d"dialog-mask"\x3e\x3c/div\x3e')}return body_0})();
(function(){dust.register("templates/shared/partials/inputs/inputHidden",body_0);function body_0(chk,ctx){return chk.write('\x3cinput type\x3d"hidden" value\x3d"').reference(ctx.getPath(true,["value"]),ctx,"h").write('" name\x3d"').reference(ctx.getPath(true,["name"]),ctx,"h").write('" id\x3d"').reference(ctx.getPath(true,["name"]),ctx,"h").write('_id"/\x3e')}return body_0})();
(function(){dust.register("templates/shared/partials/inputs/inputRadio",body_0);function body_0(chk,ctx){return chk.write('\x3cinput type\x3d"radio" id\x3d"').reference(ctx.getPath(true,["id"]),ctx,"h").write('" value\x3d"').reference(ctx.getPath(true,["value"]),ctx,"h").write('" name\x3d"').reference(ctx.getPath(true,["name"]),ctx,"h").write('" ').exists(ctx.getPath(true,["checked"]),ctx,{"block":body_1},{}).write("/\x3e")}function body_1(chk,ctx){return chk.write("checked")}return body_0})();
(function(){dust.register("tl/apps/tagging/tagging",body_0);function body_0(chk,ctx){return chk.write('\x3cdiv class\x3d"pill-tagging-wrapper"\x3e\x3ci class\x3d"pill-tagging-icon" aria-hidden\x3d"true"\x3e\x3c/i\x3e\x3cinput type\x3d"text" name\x3d"pill-tagging" class\x3d"pill-tagging-input"/\x3e\x3cinput name\x3d"pill-tagging-hidden" type\x3d"hidden" class\x3d"pill-tagging-hidden"/\x3e\x3c/div\x3e')}return body_0})();
(function(){dust.register("templates/shared/tagging/tagging_pill",body_0);function body_0(chk,ctx){return chk.write('\x3ca class\x3d"tagging-pill-item"\x3e\x3c/a\x3e')}return body_0})();
(function(){dust.register("templates/news/partials/editor/fakeNavItem",body_0);function body_0(chk,ctx){return chk.write('\x3cdiv class\x3d"fake-nav-item ').notexists(ctx.getPath(false,["lixes","dexterShift1Design"]),ctx,{"block":body_1},{}).exists(ctx.get(["class"],false),ctx,{"block":body_3},{}).write('"\x3e').notexists(ctx.getPath(false,["lixes","dexterShift1Design"]),ctx,{"block":body_4},{}).write('\x3cdiv class\x3d"content"\x3e\x3c/div\x3e\x3cdiv class\x3d"title"\x3e\x3c/div\x3e\x3cdiv class\x3d"meta"\x3e\x3c/div\x3e\x3cdiv class\x3d"arrow"\x3e\x3c/div\x3e\x3c/div\x3e')}
function body_1(chk,ctx){return chk.exists(ctx.get(["selected"],false),ctx,{"block":body_2},{})}function body_2(chk,ctx){return chk.write(" selected")}function body_3(chk,ctx){return chk.write(" ").reference(ctx.get(["class"],false),ctx,"h")}function body_4(chk,ctx){return chk.write('\x3cdiv class\x3d"image"\x3e\x3c/div\x3e')}return body_0})();
(function(){dust.register("templates/news/partials/editor/fakeArticle",body_0);function body_0(chk,ctx){return chk.write('\x3cdiv class\x3d"fake-article').exists(ctx.get(["class"],false),ctx,{"block":body_1},{}).write('"\x3e\x3cdiv class\x3d"cover-image"\x3e\x3c/div\x3e\x3cdiv class\x3d"author"\x3e\x3cdiv class\x3d"image"\x3e\x3c/div\x3e\x3cdiv class\x3d"name"\x3e\x3c/div\x3e\x3c/div\x3e\x3cdiv class\x3d"title"\x3e\x3c/div\x3e\x3cdiv class\x3d"editor"\x3e\x3c/div\x3e\x3c/div\x3e')}function body_1(chk,
ctx){return chk.write(" ").reference(ctx.get(["class"],false),ctx,"h")}return body_0})();
(function(){dust.register("templates/news/partials/stream/source/channelTitle",body_0);function body_0(chk,ctx){return chk.exists(ctx.get(["title"],false),ctx,{"block":body_1},{})}function body_1(chk,ctx){return chk.notexists(ctx.get(["isInternational"],false),ctx,{"block":body_2},{})}function body_2(chk,ctx){return chk.helper("i18n",ctx,{},{"key":"i18n_channel_specifier","filters":"mk|s","templateName":"templates/news/partials/stream/source/channelTitle"})}return body_0})();
(function(){dust.register("__i18n__templates/news/partials/stream/source/channelTitle__i18n_channel_specifier",body_0);function body_0(chk,ctx){return chk.write(" : ").reference(ctx.get(["title"],false),ctx,"h")}return body_0})();
(function(){dust.register("templates/shared/partials/buttons/channelFollowToggle",body_0);function body_0(chk,ctx){return chk.write('\x3cdiv class\x3d"follow-toggle ').exists(ctx.get(["isFollowing"],false),ctx,{"block":body_1},{}).write('"\x3e\x3ca class\x3d"action-follow" role\x3d"button" href\x3d"').reference(ctx.get(["followUrl"],false),ctx,"h").write('"\x3e\x3csvg class\x3d"icon" aria-hidden\x3d"true"\x3e\x3cuse xlink:href\x3d"#plus-icon" data-size\x3d"small"\x3e\x3c/use\x3e\x3c/svg\x3e\x3cspan class\x3d"text"\x3e').helper("i18n",
ctx,{},{"key":"i18n_follow_this_channel","templateName":"templates/shared/partials/buttons/channelFollowToggle"}).write('\x3c/span\x3e\x3c/a\x3e\x3ca class\x3d"action-unfollow" href\x3d"').reference(ctx.get(["unfollowUrl"],false),ctx,"h").write('"\x3e\x3cspan class\x3d"text-unfollow"\x3e\x3csvg class\x3d"icon" aria-hidden\x3d"true"\x3e\x3cuse xlink:href\x3d"#cancel-icon" data-size\x3d"small"\x3e\x3c/use\x3e\x3c/svg\x3e\x3cspan aria-hidden\x3d"true"\x3e').helper("i18n",ctx,{},{"key":"i18n_unfollow",
"templateName":"templates/shared/partials/buttons/channelFollowToggle"}).write('\x3c/span\x3e\x3c/span\x3e\x3cspan class\x3d"a11y-hidden"\x3e').helper("i18n",ctx,{},{"key":"i18n_unfollow_a11y","templateName":"templates/shared/partials/buttons/channelFollowToggle"}).write('\x3c/span\x3e\x3cspan class\x3d"text-following" aria-hidden\x3d"true"\x3e\x3csvg class\x3d"icon"\x3e\x3cuse xlink:href\x3d"#check-icon" data-size\x3d"small"\x3e\x3c/use\x3e\x3c/svg\x3e\x3cspan\x3e').helper("i18n",ctx,{},{"key":"i18n_following",
"templateName":"templates/shared/partials/buttons/channelFollowToggle"}).write("\x3c/span\x3e\x3c/span\x3e\x3c/a\x3e\x3c/div\x3e")}function body_1(chk,ctx){return chk.write("is-following")}return body_0})();(function(){dust.i18n=dust.i18n||{};dust.i18n.cache=dust.i18n.cache||{};dust.i18n.cache["templates/shared/partials/buttons/channelFollowToggle"]={"i18n_follow_this_channel":"Follow this channel","i18n_unfollow":"Unfollow","i18n_unfollow_a11y":"Unfollow this channel","i18n_following":"Following"}})();
(function(){dust.register("templates/news/partials/stream/source/artDecoIcons",body_0);function body_0(chk,ctx){return chk.write("\x3cscript\x3e(function() {var c \x3d new XMLHttpRequest();c.onreadystatechange \x3d function() {if (c.readyState\x3d\x3d4 \x26\x26 c.status\x3d\x3d200) {document.body.insertBefore(c.responseXML.firstChild, document.body.firstChild);}};c.open('GET', '/pulse/assets/%2Fpulse-web-frontend%2Fscss%2Fshared%2Fpemberly-davinci%2Fthemes%2Fshift%2Ficons.svg', true);c.setRequestHeader('Content-Type', 'text/xml');c.send();})();\x3c/script\x3e")}
return body_0})();
(function(){dust.register("tl/shared/mentions/mentions-play",body_0);function body_0(chk,ctx){return chk.exists(ctx.get(["imageUrl"],false),ctx,{"block":body_1},{}).write("\x3ch4\x3e").reference(ctx.get(["headLine"],false),ctx,"h",["mk","s"]).write("\x3c/h4\x3e\x3cp\x3e").reference(ctx.get(["subLine"],false),ctx,"h",["et","s"]).write("\x3c/p\x3e").helper("i18n",ctx,{},{"key":"i18n_people","output":"json","templateName":"tl/shared/mentions/mentions-play"}).helper("i18n",ctx,{},{"key":"i18n_companies",
"output":"json","templateName":"tl/shared/mentions/mentions-play"}).helper("i18n",ctx,{},{"key":"i18n_universities","output":"json","templateName":"tl/shared/mentions/mentions-play"}).helper("i18n",ctx,{},{"key":"i18n_participants","output":"json","templateName":"tl/shared/mentions/mentions-play"})}function body_1(chk,ctx){return chk.write('\x3cimg src\x3d"').reference(ctx.get(["imageUrl"],false),ctx,"h").write('" alt\x3d"').reference(ctx.get(["displayName"],false),ctx,"h").write('" /\x3e')}return body_0})();
(function(){dust.i18n=dust.i18n||{};dust.i18n.cache=dust.i18n.cache||{};dust.i18n.cache["tl/shared/mentions/mentions-play"]={"i18n_people":"\x3ch3\x3ePeople\x3c/h3\x3e","i18n_companies":"\x3ch3\x3eCompanies\x3c/h3\x3e","i18n_universities":"\x3ch3\x3eUniversities\x3c/h3\x3e","i18n_participants":"\x3ch3\x3eParticipants\x3c/h3\x3e"}})();
(function(){dust.register("templates/news/partials/stream/source/promptToShareDialog",body_0);function body_0(chk,ctx){return chk.write(" \x3cimg class\x3d'prompt-to-share-dialog-image ").notexists(ctx.get(["isMobile"],false),ctx,{"block":body_1},{}).write("' src\x3d\"").helper("assetUrl",ctx,{},{"path":"/images/news/stream/blur-share-stock.png"}).write('" /\x3e')}function body_1(chk,ctx){return chk.write("prompt-to-share-animations")}return body_0})();
(function(){dust.register("templates/news/partials/stream/source/promptToShareOverlay",body_0);function body_0(chk,ctx){return chk.write("\x3cdiv class\x3d'prompt-to-share-dialog ").notexists(ctx.get(["isMobile"],false),ctx,{"block":body_1},{}).write("'\x3e\x3cbutton class\x3d'prompt-to-share-x'\x3e\x3cspan aria-hidden\x3d\"true\" style\x3d'display:none'\x3e").helper("i18n",ctx,{},{"key":"i18n_prompt_to_share_close_message","templateName":"templates/news/partials/stream/source/promptToShareOverlay"}).write("\x3c/span\x3e\x3c/button\x3e\x3cdiv class\x3d'prompt-to-share-content'\x3e\x3ch1\x3e").helper("eq",
ctx,{"else":body_2,"block":body_3},{"key":ctx.get(["authorFollowers"],false),"val":0}).write("\x3chr\x3e\x3c/h1\x3e\x3cul\x3e\x3cli\x3e\x3cbutton class\x3d'prompt-to-fb prompt-to-button' data-share-type\x3d\"facebook\" data-li-uetrk-click\x3d\"prompt-to-share-fb\" data-li-uetrk-action\x3d\"share\"\x3e\x3cimg alt\x3d'facebook icon' src\x3d'data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iaXNvLTg4NTktMSI/Pg0KPCFET0NUWVBFIHN2ZyBQVUJMSUMgIi0vL1czQy8vRFREIFNWRyAxLjEvL0VOIiAiaHR0cDovL3d3dy53My5vcmcvR3JhcGhpY3MvU1ZHLzEuMS9EVEQvc3ZnMTEuZHRkIj4NCjxzdmcgdmVyc2lvbj0iMS4xIiBpZD0iQ2FwYV8xIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB4PSIwcHgiIHk9IjBweCINCiAgIHdpZHRoPSI5Ni4xMjRweCIgaGVpZ2h0PSI5Ni4xMjNweCIgdmlld0JveD0iMCAwIDk2LjEyNCA5Ni4xMjMiIHN0eWxlPSJlbmFibGUtYmFja2dyb3VuZDpuZXcgMCAwIDk2LjEyNCA5Ni4xMjM7Ig0KICAgeG1sOnNwYWNlPSJwcmVzZXJ2ZSI+DQo8Zz4NCiAgPHBhdGggZmlsbD0id2hpdGUiIGQ9Ik03Mi4wODksMC4wMkw1OS42MjQsMEM0NS42MiwwLDM2LjU3LDkuMjg1LDM2LjU3LDIzLjY1NnYxMC45MDdIMjQuMDM3Yy0xLjA4MywwLTEuOTYsMC44NzgtMS45NiwxLjk2MXYxNS44MDMNCiAgICBjMCwxLjA4MywwLjg3OCwxLjk2LDEuOTYsMS45NmgxMi41MzN2MzkuODc2YzAsMS4wODMsMC44NzcsMS45NiwxLjk2LDEuOTZoMTYuMzUyYzEuMDgzLDAsMS45Ni0wLjg3OCwxLjk2LTEuOTZWNTQuMjg3aDE0LjY1NA0KICAgIGMxLjA4MywwLDEuOTYtMC44NzcsMS45Ni0xLjk2bDAuMDA2LTE1LjgwM2MwLTAuNTItMC4yMDctMS4wMTgtMC41NzQtMS4zODZjLTAuMzY3LTAuMzY4LTAuODY3LTAuNTc1LTEuMzg3LTAuNTc1SDU2Ljg0MnYtOS4yNDYNCiAgICBjMC00LjQ0NCwxLjA1OS02LjcsNi44NDgtNi43bDguMzk3LTAuMDAzYzEuMDgyLDAsMS45NTktMC44NzgsMS45NTktMS45NlYxLjk4Qzc0LjA0NiwwLjg5OSw3My4xNywwLjAyMiw3Mi4wODksMC4wMnoiLz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjwvc3ZnPg\x3d\x3d'\x3e").helper("i18n",
ctx,{},{"key":"i18n_prompt_to_share_message_fb","templateName":"templates/news/partials/stream/source/promptToShareOverlay"}).write("\x3c/button\x3e\x3c/li\x3e\x3cli\x3e\x3cbutton class\x3d'prompt-to-twitter prompt-to-button' data-share-type\x3d\"twitter\" data-li-uetrk-click\x3d\"prompt-to-share-twitter\" data-li-uetrk-action\x3d\"share\"\x3e\x3cimg alt\x3d'twitter icon' src\x3d'data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0idXRmLTgiPz4NCjwhLS0gR2VuZXJhdG9yOiBBZG9iZSBJbGx1c3RyYXRvciAxNy4xLjAsIFNWRyBFeHBvcnQgUGx1Zy1JbiAuIFNWRyBWZXJzaW9uOiA2LjAwIEJ1aWxkIDApICAtLT4NCjwhRE9DVFlQRSBzdmcgUFVCTElDICItLy9XM0MvL0RURCBTVkcgMS4xLy9FTiIgImh0dHA6Ly93d3cudzMub3JnL0dyYXBoaWNzL1NWRy8xLjEvRFREL3N2ZzExLmR0ZCI+DQo8c3ZnIHZlcnNpb249IjEuMSIgaWQ9IkxheWVyXzEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHg9IjBweCIgeT0iMHB4Ig0KCSB2aWV3Qm94PSIwIDAgNzIgNzIiIGVuYWJsZS1iYWNrZ3JvdW5kPSJuZXcgMCAwIDcyIDcyIiB4bWw6c3BhY2U9InByZXNlcnZlIj4NCjxyZWN0IHg9IjAiIGZpbGw9Im5vbmUiIHdpZHRoPSI3MiIgaGVpZ2h0PSI3MiIvPg0KPHBhdGggZmlsbD0id2hpdGUiIGQ9Ik02OC44MTIsMTUuMTQxYy0yLjM0OCwxLjAzOS00Ljg2OSwxLjc0My03LjUxOSwyLjA2YzIuNzAzLTEuNjIsNC43NzgtNC4xODcsNS43NTYtNy4yNDRjLTIuNTI5LDEuNS01LjMzLDIuNTkyLTguMzEzLDMuMTc2DQoJQzU2LjM0OSwxMC41OTEsNTIuOTQ4LDksNDkuMTgyLDljLTcuMjI5LDAtMTMuMDkyLDUuODYxLTEzLjA5MiwxMy4wOTNjMCwxLjAyNiwwLjExOCwyLjAyMSwwLjMzOCwyLjk4MQ0KCWMtMTAuODg1LTAuNTQ4LTIwLjUyOC01Ljc1Ny0yNi45ODctMTMuNjc5Yy0xLjEyNiwxLjkzNi0xLjc3MSw0LjE4NC0xLjc3MSw2LjU4MWMwLDQuNTQyLDIuMzEyLDguNTUxLDUuODI0LDEwLjg5OA0KCWMtMi4xNDYtMC4wNjktNC4xNjUtMC42NTctNS45My0xLjYzOGMtMC4wMDIsMC4wNTUtMC4wMDIsMC4xMS0wLjAwMiwwLjE2MmMwLDYuMzQ1LDQuNTEzLDExLjYzOCwxMC41MDQsMTIuODQNCgljLTEuMTAxLDAuMjk4LTIuMjU2LDAuNDU3LTMuNDQ5LDAuNDU3Yy0wLjg0NiwwLTEuNjY3LTAuMDc4LTIuNDY1LTAuMjMxYzEuNjY3LDUuMiw2LjQ5OSw4Ljk4NiwxMi4yMyw5LjA5DQoJYy00LjQ4MiwzLjUxMi0xMC4xMjksNS42MDYtMTYuMjYsNS42MDZjLTEuMDU1LDAtMi4wOTYtMC4wNjEtMy4xMjItMC4xODRjNS43OTQsMy43MTcsMTIuNjc2LDUuODgyLDIwLjA2Nyw1Ljg4Mg0KCWMyNC4wODMsMCwzNy4yNTEtMTkuOTQ5LDM3LjI1MS0zNy4yNDljMC0wLjU2Ni0wLjAxNC0xLjEzNC0wLjAzOS0xLjY5NEM2NC44MzgsMjAuMDY4LDY3LjA1OCwxNy43NjUsNjguODEyLDE1LjE0MXoiLz4NCjwvc3ZnPg\x3d\x3d'\x3e").helper("i18n",
ctx,{},{"key":"i18n_prompt_to_share_message_twitter","templateName":"templates/news/partials/stream/source/promptToShareOverlay"}).write("\x3c/button\x3e\x3c/li\x3e\x3c/ul\x3e\x3c/div\x3e\x3c/div\x3e")}function body_1(chk,ctx){return chk.write("prompt-to-share-animations")}function body_2(chk,ctx){return chk.helper("i18n",ctx,{},{"key":"i18n_prompt_to_share_message","doc":"Message for prompt to share dialog for first time articles","templateName":"templates/news/partials/stream/source/promptToShareOverlay"})}
function body_3(chk,ctx){return chk.helper("i18n",ctx,{},{"key":"i18n_prompt_to_share_message_no_followers","doc":"Message for prompt to share dialog for first time articles if they have no followers","templateName":"templates/news/partials/stream/source/promptToShareOverlay"})}return body_0})();
(function(){dust.i18n=dust.i18n||{};dust.i18n.cache=dust.i18n.cache||{};dust.i18n.cache["templates/news/partials/stream/source/promptToShareOverlay"]={"i18n_prompt_to_share_close_message":"\n          Close Dialog\n        ","i18n_prompt_to_share_message_no_followers":"\n            Nicely done! We've let your LinkedIn network know that you've published. To reach more people, share with your other social networks!\n        ","i18n_prompt_to_share_message_fb":"\n            Facebook\n          ","i18n_prompt_to_share_message_twitter":"\n            Twitter\n          "}})();
(function(){dust.register("__i18n__templates/news/partials/stream/source/promptToShareOverlay__i18n_prompt_to_share_message",body_0);function body_0(chk,ctx){return chk.write("Nice work! We\u2019ve let your ").reference(ctx.get(["authorFollowers"],false),ctx,"h").write(" LinkedIn followers know that you\u2019ve published. Keep up the momentum by sharing with your other networks!")}return body_0})();
(function(){dust.register("templates/shared/embeds/pageInfoJsonShim",body_0);function body_0(chk,ctx){return chk.write(" ").helper("i18n",ctx,{},{"key":"i18n_text_just_now","output":"json","templateName":"templates/shared/embeds/pageInfoJsonShim"}).helper("i18n",ctx,{},{"key":"i18n_text_delete","output":"json","templateName":"templates/shared/embeds/pageInfoJsonShim"}).write('\x3cspan id\x3d"comment-delete-tooltip" class\x3d"callout-container"\x3e\x3cspan class\x3d"callout-content"\x3e').reference(ctx.get(["i18n_text_delete"],
false),ctx,"h").write("\x3c/span\x3e\x3c/span\x3e").helper("i18n",ctx,{},{"key":"i18n_text_flag_hide","output":"json","templateName":"templates/shared/embeds/pageInfoJsonShim"}).write('\x3cspan id\x3d"comment-flag-tooltip" class\x3d"callout-container"\x3e\x3cspan class\x3d"callout-content"\x3e').reference(ctx.get(["i18n_text_flag_hide"],false),ctx,"h").write("\x3c/span\x3e\x3c/span\x3e").helper("i18n",ctx,{},{"key":"i18n_text_flagging_dialog_title","output":"json","templateName":"templates/shared/embeds/pageInfoJsonShim"}).write('\x3cdiv class\x3d"dialog-placeholder"\x3e\x3cdiv id\x3d"delete-confirm-dialog" class\x3d"dialog"\x3e').notexists(ctx.getPath(false,
["lixes","consumer2Enabled"]),ctx,{"block":body_1},{}).write("\x3cp\x3e").helper("i18n",ctx,{},{"key":"i18n_areYouSureDelete","templateName":"templates/shared/embeds/pageInfoJsonShim"}).write('\x3c/p\x3e\x3cdiv class\x3d"dialog-actions"\x3e\x3cbutton class\x3d"btn-primary dialog-submit"\x3e').helper("i18n",ctx,{},{"key":"i18n_yesDeleteIt","templateName":"templates/shared/embeds/pageInfoJsonShim"}).write('\x3c/button\x3e\x3cbutton class\x3d"btn-secondary dialog-close"\x3e').helper("i18n",ctx,{},{"key":"i18n_cancel",
"templateName":"templates/shared/embeds/pageInfoJsonShim"}).write("\x3c/button\x3e\x3c/div\x3e\x3c/div\x3e\x3c/div\x3e").section(ctx.get(["urls"],false),ctx,{"block":body_2},{})}function body_1(chk,ctx){return chk.write('\x3cdiv class\x3d"dialog-title"\x3e').helper("i18n",ctx,{},{"key":"i18n_pleaseConfirm","templateName":"templates/shared/embeds/pageInfoJsonShim"}).write("\x3c/div\x3e")}function body_2(chk,ctx){return chk.section(ctx.get(["lixes"],false),ctx,{"block":body_3},{})}function body_3(chk,
ctx){return chk.write('\x3cscript type\x3d"text/javascript"\x3e(function() {var i18nRegistry \x3d window.__li__i18n_registry__ \x3d window.__li__i18n_registry__ || {};LI.PulsePageInfo \x3d LI.PulsePageInfo || {};_.extend(LI.PulsePageInfo, {"urls": {\'MPR_STUB\': \'').reference(ctx.get(["mprStub"],false),ctx,"h",["h","j","s"]).write("' || play.mprUrl('*', 100, 100),'MPR_65_STUB': '").reference(ctx.get(["mpr65Stub"],false),ctx,"h",["h","j","s"]).write("' || play.mprUrl('*', 100, 100),'NO_PHOTO': '").reference(ctx.get(["noPhoto"],
false),ctx,"h",["h","j","s"]).write("' || play.scdsDirectUnversionedUrl('images/themes/katy/ghosts/person/ghost_person_40x40_v1.png'),'NO_PHOTO_65_65': '").reference(ctx.get(["noPhoto65"],false),ctx,"h",["h","j","s"]).write("' || play.scdsDirectUnversionedUrl('images/themes/katy/ghosts/person/ghost_person_65x65_v1.png'),'UNCOMMENT': '").reference(ctx.get(["urlUncomment"],false),ctx,"h",["h","j","s"]).write("','FLAG': '").reference(ctx.get(["urlFlagComment"],false),ctx,"h",["h","j","s"]).write("','LIKE': '").reference(ctx.get(["urlLikeArticle"],
false),ctx,"h",["h","j","s"]).write("','UNLIKE': '").reference(ctx.get(["urlUnlikeArticle"],false),ctx,"h",["h","j","s"]).write('\'},"lix": {"isLinkedInEmployee": ').reference(ctx.get(["lixIsLinkedInEmployee"],false),ctx,"h",["js","s"]).write(',"commentUiVersion2": ').reference(ctx.get(["lixCommentUiVersion2"],false),ctx,"h",["js","s"]).write(',"enableCommenterPosition": ').reference(ctx.get(["lixEnableCommenterPosition"],false),ctx,"h",["js","s"]).write(',"enableCommenterDegree": ').reference(ctx.get(["lixEnableCommenterDegree"],
false),ctx,"h",["js","s"]).write(',"enableAuthorBadge": ').reference(ctx.get(["lixEnableAuthorBadge"],false),ctx,"h",["js","s"]).write(',"bigProfilePicture": ').reference(ctx.get(["lixEnableBigProfilePicture"],false),ctx,"h",["js","s"]).write(',"showInfluencerIcon": ').reference(ctx.get(["lixShowInfluencerIcon"],false),ctx,"h",["js","s"]).write("}});function registeri18n(key, strng) {if(LI \x26\x26 LI.i18n \x26\x26 LI.i18n.register) {LI.i18n.register(key, strng);} else {i18nRegistry[key] \x3d strng;}};if (i18nRegistry) {registeri18n('i18n_text_you', '").helper("i18n",
ctx,{},{"key":"i18n_text_you","filters":"|h|j|s","templateName":"templates/shared/embeds/pageInfoJsonShim"}).write("');registeri18n('i18n_text_author', '").helper("i18n",ctx,{},{"key":"i18n_text_author","filters":"|h|j|s","templateName":"templates/shared/embeds/pageInfoJsonShim"}).write("');registeri18n('i18n_text_influencer', '").helper("i18n",ctx,{},{"key":"i18n_text_influencer","filters":"|h|j|s","templateName":"templates/shared/embeds/pageInfoJsonShim"}).write("');registeri18n('i18n_text_delete', '").reference(ctx.get(["i18n_text_delete"],
false),ctx,"h",["h","j","s"]).write("');registeri18n('i18n_text_likes', '").helper("i18n",ctx,{},{"key":"i18n_text_likes","filters":"|h|j|s","templateName":"templates/shared/embeds/pageInfoJsonShim"}).write("');").helper("addToContext",ctx,{"block":body_4},{"name":"jsI18nPlaceholder"}).write("registeri18n('i18n_text_influencer_title', '").helper("i18n",ctx,{},{"key":"i18n_influencer_title_pre","filters":"j|s","templateName":"templates/shared/embeds/pageInfoJsonShim"}).write("');registeri18n('i18n_text_paren', '").helper("i18n",
ctx,{},{"key":"i18n_text_paren_pre","filters":"j|s","templateName":"templates/shared/embeds/pageInfoJsonShim"}).write("');registeri18n('article_activity_en_US_delete', '").reference(ctx.get(["i18n_text_delete"],false),ctx,"h",["h","j","s"]).write("');registeri18n('article_activity_en_US_flag_hide', '").reference(ctx.get(["i18n_text_flag_hide"],false),ctx,"h",["h","j","s"]).write("');registeri18n('article_activity_en_US_comment_posted_just_now', '").reference(ctx.get(["i18n_text_just_now"],false),
ctx,"h",["h","j","s"]).write("');registeri18n('commentDelete', '").helper("i18n",ctx,{},{"key":"i18n_text_comment_delete","filters":"|h|j|s","templateName":"templates/shared/embeds/pageInfoJsonShim"}).write("');registeri18n('commentFlag', '").helper("i18n",ctx,{},{"key":"i18n_text_comment_flag","filters":"|j|s","templateName":"templates/shared/embeds/pageInfoJsonShim"}).write("');registeri18n('commentHiddenReport', '").helper("i18n",ctx,{},{"key":"i18n_text_comment_report","filters":"|j|s","templateName":"templates/shared/embeds/pageInfoJsonShim"}).write("');registeri18n('commentHidden', '").helper("i18n",
ctx,{},{"key":"i18n_text_comment_hidden","filters":"|h|j|s","templateName":"templates/shared/embeds/pageInfoJsonShim"}).write("');registeri18n('dialogReport', '").helper("i18n",ctx,{},{"key":"i18n_text_dialog_report","filters":"|h|j|s","templateName":"templates/shared/embeds/pageInfoJsonShim"}).write("');registeri18n('commentFlagDialogTitle', '").reference(ctx.get(["i18n_text_flagging_dialog_title"],false),ctx,"h",["h","j","s"]).write("');registeri18n('i18n_text_comment_post_time_seconds', '").helper("i18n",
ctx,{},{"key":"i18n_text_comment_post_time_seconds","filters":"j|s","templateName":"templates/shared/embeds/pageInfoJsonShim"}).write("');registeri18n('i18n_text_comment_post_time_minutes', '").helper("i18n",ctx,{},{"key":"i18n_text_comment_post_time_minutes","filters":"j|s","templateName":"templates/shared/embeds/pageInfoJsonShim"}).write("');registeri18n('i18n_text_comment_post_time_hours', '").helper("i18n",ctx,{},{"key":"i18n_text_comment_post_time_hours","filters":"j|s","templateName":"templates/shared/embeds/pageInfoJsonShim"}).write("');registeri18n('i18n_text_comment_post_time_days', '").helper("i18n",
ctx,{},{"key":"i18n_text_comment_post_time_days","filters":"j|s","templateName":"templates/shared/embeds/pageInfoJsonShim"}).write("');registeri18n('i18n_text_comment_post_time_weeks', '").helper("i18n",ctx,{},{"key":"i18n_text_comment_post_time_weeks","filters":"j|s","templateName":"templates/shared/embeds/pageInfoJsonShim"}).write("');registeri18n('i18n_text_comment_post_time_months', '").helper("i18n",ctx,{},{"key":"i18n_text_comment_post_time_months","filters":"j|s","templateName":"templates/shared/embeds/pageInfoJsonShim"}).write("');registeri18n('i18n_text_comment_post_time_years', '").helper("i18n",
ctx,{},{"key":"i18n_text_comment_post_time_years","filters":"j|s","templateName":"templates/shared/embeds/pageInfoJsonShim"}).write("');registeri18n('i18n_show_more', '").helper("i18n",ctx,{},{"key":"i18n_show_more","filters":"|h|j|s","templateName":"templates/shared/embeds/pageInfoJsonShim"}).write("');}}());\x3c/script\x3e")}function body_4(chk,ctx){return chk.write("{0}")}return body_0})();
(function(){dust.i18n=dust.i18n||{};dust.i18n.cache=dust.i18n.cache||{};dust.i18n.cache["templates/shared/embeds/pageInfoJsonShim"]={"i18n_text_just_now":"just now ","i18n_text_delete":"Delete","i18n_text_flag_hide":"Flag and Hide","i18n_text_flagging_dialog_title":"Why are you reporting this?","i18n_pleaseConfirm":"Delete","i18n_areYouSureDelete":"Are you sure you want to delete this comment?","i18n_yesDeleteIt":"Delete","i18n_cancel":"Cancel","i18n_text_you":"YOU","i18n_text_author":"AUTHOR","i18n_text_influencer":"INFLUENCER",
"i18n_text_likes":"Likes","i18n_text_comment_delete":"You have successfully deleted this comment.","i18n_text_comment_flag":'\x3ca href\x3d"#" role\x3d"button" class\x3d"action-undo-comment"\x3eUndo\x3c/a\x3eFlagged. Abusive, offensive, or copyright material? \x3ca href\x3d"#" role\x3d"button" class\x3d"action-report-comment"\x3eTell us more\x3c/a\x3e',"i18n_text_comment_report":'\x3ca href\x3d"#" role\x3d"button" class\x3d"action-undo-comment"\x3eUndo\x3c/a\x3eComment hidden \x3ca href\x3d"#" role\x3d"button" class\x3d"action-report-comment"\x3eReport this\x3c/a\x3e',
"i18n_text_comment_hidden":"You have flagged and hidden this comment.","i18n_text_dialog_report":"Tell us more","i18n_show_more":"Show More"}})();(function(){dust.register("__i18n__templates/shared/embeds/pageInfoJsonShim__i18n_influencer_title_pre",body_0);function body_0(chk,ctx){return chk.reference(ctx.get(["jsI18nPlaceholder"],false),ctx,"h").write(" is a LinkedIn Influencer!")}return body_0})();
(function(){dust.register("__i18n__templates/shared/embeds/pageInfoJsonShim__i18n_text_paren_pre",body_0);function body_0(chk,ctx){return chk.write("(").reference(ctx.get(["jsI18nPlaceholder"],false),ctx,"h").write(")")}return body_0})();(function(){dust.register("__i18n__templates/shared/embeds/pageInfoJsonShim__i18n_text_comment_post_time_seconds",body_0);function body_0(chk,ctx){return chk.reference(ctx.get(["jsI18nPlaceholder"],false),ctx,"h").write("s")}return body_0})();
(function(){dust.register("__i18n__templates/shared/embeds/pageInfoJsonShim__i18n_text_comment_post_time_minutes",body_0);function body_0(chk,ctx){return chk.reference(ctx.get(["jsI18nPlaceholder"],false),ctx,"h").write("m")}return body_0})();(function(){dust.register("__i18n__templates/shared/embeds/pageInfoJsonShim__i18n_text_comment_post_time_hours",body_0);function body_0(chk,ctx){return chk.reference(ctx.get(["jsI18nPlaceholder"],false),ctx,"h").write("h")}return body_0})();
(function(){dust.register("__i18n__templates/shared/embeds/pageInfoJsonShim__i18n_text_comment_post_time_days",body_0);function body_0(chk,ctx){return chk.reference(ctx.get(["jsI18nPlaceholder"],false),ctx,"h").write("d")}return body_0})();(function(){dust.register("__i18n__templates/shared/embeds/pageInfoJsonShim__i18n_text_comment_post_time_weeks",body_0);function body_0(chk,ctx){return chk.reference(ctx.get(["jsI18nPlaceholder"],false),ctx,"h").write("w")}return body_0})();
(function(){dust.register("__i18n__templates/shared/embeds/pageInfoJsonShim__i18n_text_comment_post_time_months",body_0);function body_0(chk,ctx){return chk.reference(ctx.get(["jsI18nPlaceholder"],false),ctx,"h").write("mth")}return body_0})();(function(){dust.register("__i18n__templates/shared/embeds/pageInfoJsonShim__i18n_text_comment_post_time_years",body_0);function body_0(chk,ctx){return chk.reference(ctx.get(["jsI18nPlaceholder"],false),ctx,"h").write("y")}return body_0})();
(function(){dust.register("templates/news/partials/stream/promo/articleBanner/base_promo",body_0);var blocks={"topPromoHeader":body_2,"bottomPromoHeader":body_8};function body_0(chk,ctx){ctx=ctx.shiftBlocks(blocks);return chk.helper("eq",ctx,{"block":body_1},{"key":ctx.get(["side"],false),"value":"top"}).helper("eq",ctx,{"block":body_7},{"key":ctx.get(["side"],false),"value":"bottom"})}function body_1(chk,ctx){ctx=ctx.shiftBlocks(blocks);return chk.write('\x3cdiv class\x3d"article-banner-promo german-promo-top hidden"\x3e').block(ctx.getBlock("topPromoHeader"),
ctx,{},{}).write('\x3cbutton aria-label\x3d"Follow channel"\x3e\x3csvg class\x3d"check" tabindex\x3d"-1"\x3e\x3cuse xlink:href\x3d"#check-icon" data-size\x3d"small"\x3e\x3c/use\x3e\x3c/svg\x3e\x3cspan class\x3d"article-banner-promo-follow" tabindex\x3d"0"\x3e').helper("i18n",ctx,{},{"key":"_i18n_pulse-stream-promo-bottom-button","templateName":"templates/news/partials/stream/promo/articleBanner/base_promo"}).write(' \x3cspan class\x3d"channelName"\x3e\x3c/span\x3e\x3c/span\x3e\x3cspan class\x3d"promo-msg-following" tabindex\x3d"0"\x3e').helper("i18n",
ctx,{},{"key":"_i18n_pulse-stream-promo-bottom-button-following","templateName":"templates/news/partials/stream/promo/articleBanner/base_promo"}).write("\x3c/span\x3e\x3c/button\x3e\x3c/div\x3e")}function body_2(chk,ctx){ctx=ctx.shiftBlocks(blocks);return chk.helper("select",ctx,{"block":body_3},{"key":ctx.getPath(false,["lixes","firstArticleBanner"])})}function body_3(chk,ctx){ctx=ctx.shiftBlocks(blocks);return chk.helper("eq",ctx,{"block":body_4},{"value":"german_promo"}).helper("eq",ctx,{"block":body_5},
{"value":"portuguese_promo"}).helper("eq",ctx,{"block":body_6},{"value":"indian_promo"})}function body_4(chk,ctx){ctx=ctx.shiftBlocks(blocks);return chk.write("\x3ch1\x3e").helper("i18n",ctx,{},{"key":"_i18n_pulse-stream-german-promo-top-title","templateName":"templates/news/partials/stream/promo/articleBanner/base_promo"}).write("\x3c/h1\x3e\x3ch4\x3e").helper("i18n",ctx,{},{"key":"_i18n_pulse-stream-german-promo-top-subtitle","templateName":"templates/news/partials/stream/promo/articleBanner/base_promo"}).write("\x3c/h4\x3e")}
function body_5(chk,ctx){ctx=ctx.shiftBlocks(blocks);return chk.write("\x3ch1\x3e").helper("i18n",ctx,{},{"key":"_i18n_pulse-stream-portuguese-promo-top-title","templateName":"templates/news/partials/stream/promo/articleBanner/base_promo"}).write("\x3c/h1\x3e\x3ch4\x3e").helper("i18n",ctx,{},{"key":"_i18n_pulse-stream-portuguese-promo-top-subtitle","templateName":"templates/news/partials/stream/promo/articleBanner/base_promo"}).write("\x3c/h4\x3e")}function body_6(chk,ctx){ctx=ctx.shiftBlocks(blocks);
return chk.write("\x3ch1\x3e").helper("i18n",ctx,{},{"key":"_i18n_pulse-stream-indian-promo-top-title","templateName":"templates/news/partials/stream/promo/articleBanner/base_promo"}).write("\x3c/h1\x3e\x3ch4\x3e").helper("i18n",ctx,{},{"key":"_i18n_pulse-stream-indian-promo-bottom-subtitle","templateName":"templates/news/partials/stream/promo/articleBanner/base_promo"}).write("\x3c/h4\x3e")}function body_7(chk,ctx){ctx=ctx.shiftBlocks(blocks);return chk.write('\x3cdiv class\x3d"article-banner-promo  article-banner-promo-bottom hidden"\x3e').block(ctx.getBlock("bottomPromoHeader"),
ctx,{},{}).write('\x3cbutton aria-label\x3d"Follow channel"\x3e\x3csvg class\x3d"check" tabindex\x3d"-1"\x3e\x3cuse xlink:href\x3d"#check-icon" data-size\x3d"small"\x3e\x3c/use\x3e\x3c/svg\x3e\x3cspan class\x3d"article-banner-promo-msg-follow" tabindex\x3d"0"\x3e').helper("i18n",ctx,{},{"key":"_i18n_pulse-stream-promo-bottom-button","templateName":"templates/news/partials/stream/promo/articleBanner/base_promo"}).write(' \x3cspan class\x3d"channelName"\x3e\x3c/span\x3e\x3c/span\x3e\x3cspan class\x3d"promo-msg-following" tabindex\x3d"0"\x3e').helper("i18n",
ctx,{},{"key":"_i18n_pulse-stream-promo-bottom-button-following","templateName":"templates/news/partials/stream/promo/articleBanner/base_promo"}).write("\x3c/span\x3e\x3c/button\x3e\x3c/div\x3e")}function body_8(chk,ctx){ctx=ctx.shiftBlocks(blocks);return chk.helper("select",ctx,{"block":body_9},{"key":ctx.getPath(false,["lixes","firstArticleBanner"])})}function body_9(chk,ctx){ctx=ctx.shiftBlocks(blocks);return chk.helper("eq",ctx,{"block":body_10},{"value":"german_promo"}).helper("eq",ctx,{"block":body_11},
{"value":"portuguese_promo"}).helper("eq",ctx,{"block":body_12},{"value":"indian_promo"})}function body_10(chk,ctx){ctx=ctx.shiftBlocks(blocks);return chk.write("\x3ch1\x3e").helper("i18n",ctx,{},{"key":"_i18n_pulse-stream-german-promo-bottom-title","templateName":"templates/news/partials/stream/promo/articleBanner/base_promo"}).write("\x3c/h1\x3e\x3ch4\x3e").helper("i18n",ctx,{},{"key":"_i18n_pulse-stream-german-promo-bottom-subtitle","templateName":"templates/news/partials/stream/promo/articleBanner/base_promo"}).write("\x3c/h4\x3e")}
function body_11(chk,ctx){ctx=ctx.shiftBlocks(blocks);return chk.write("\x3ch1\x3e").helper("i18n",ctx,{},{"key":"_i18n_pulse-stream-portuguese-promo-bottom-title","templateName":"templates/news/partials/stream/promo/articleBanner/base_promo"}).write("\x3c/h1\x3e\x3ch4\x3e").helper("i18n",ctx,{},{"key":"_i18n_pulse-stream-portuguese-promo-bottom-subtitle","templateName":"templates/news/partials/stream/promo/articleBanner/base_promo"}).write("\x3c/h4\x3e")}function body_12(chk,ctx){ctx=ctx.shiftBlocks(blocks);
return chk.write("\x3ch1\x3e").helper("i18n",ctx,{},{"key":"_i18n_pulse-stream-indian-promo-bottom-title","templateName":"templates/news/partials/stream/promo/articleBanner/base_promo"}).write("\x3c/h1\x3e\x3ch4\x3e").helper("i18n",ctx,{},{"key":"_i18n_pulse-stream-indian-promo-bottom-subtitle","templateName":"templates/news/partials/stream/promo/articleBanner/base_promo"}).write("\x3c/h4\x3e")}return body_0})();
(function(){dust.i18n=dust.i18n||{};dust.i18n.cache=dust.i18n.cache||{};dust.i18n.cache["templates/news/partials/stream/promo/articleBanner/base_promo"]={"_i18n_pulse-stream-german-promo-top-title":"\n            Introducing content in German\n          ","_i18n_pulse-stream-german-promo-top-subtitle":"\n            Get all of the professional content you need to know\n          ","_i18n_pulse-stream-portuguese-promo-top-title":"\n            Introducing content in Portuguese\n          ","_i18n_pulse-stream-portuguese-promo-top-subtitle":"\n            Get all of the professional content you need to know\n          ",
"_i18n_pulse-stream-indian-promo-top-title":"\n            Don't miss what's trending in India\n          ","_i18n_pulse-stream-indian-promo-bottom-subtitle":"\n            Stay informed on industry insights from local thought leaders\n          ","_i18n_pulse-stream-promo-bottom-button":"Follow","_i18n_pulse-stream-promo-bottom-button-following":"Following","_i18n_pulse-stream-german-promo-bottom-title":"\n            Enjoying your content in German?\n          ","_i18n_pulse-stream-german-promo-bottom-subtitle":"\n            Stay informed on what industry leaders say about leadership, business, and more\n          ",
"_i18n_pulse-stream-portuguese-promo-bottom-title":"\n            Enjoying your content in Portuguese?\n          ","_i18n_pulse-stream-portuguese-promo-bottom-subtitle":"\n            Stay informed on what industry leaders say about leadership, business, and more\n          ","_i18n_pulse-stream-indian-promo-bottom-title":"\n            Enjoying this content?\n          "}})();
