//>>built
define("dojox/json/schema",["dojo/_base/kernel","dojox","dojo/_base/array"],function(n,h){n.getObject("json.schema",!0,h);h.json.schema.validate=function(e,m){return this._validate(e,m,!1)};h.json.schema.checkPropertyChange=function(e,m,h){return this._validate(e,m,h||"property")};h.json.schema.mustBeValid=function(e){if(!e.valid)throw new TypeError(n.map(e.errors,function(e){return"for property "+e.property+": "+e.message}).join(", "));};h.json.schema._validate=function(e,h,p){function l(b,a,k,d){function c(a){f.push({property:k,
message:a})}function g(a,b){if(a){if(!("string"!=typeof a||"any"==a||("null"==a?null===b:typeof b==a)||b instanceof Array&&"array"==a||"integer"==a&&0===b%1))return[{property:k,message:typeof b+" value found, but a "+a+" is required"}];if(a instanceof Array){for(var c=[],d=0;d<a.length&&(c=g(a[d],b)).length;d++);if(c.length)return c}else if("object"==typeof a)return c=f,f=[],l(b,a,k),d=f,f=c,d}return[]}var e;k+=k?"number"==typeof d?"["+d+"]":"undefined"==typeof d?"":"."+d:d;if(("object"!=typeof a||
a instanceof Array)&&(k||"function"!=typeof a))return"function"==typeof a?Object(b)instanceof a||c("is not an instance of the class/constructor "+a.name):a&&c("Invalid schema/property definition "+a),null;p&&a.readonly&&c("is a readonly field, it can not be changed");a["extends"]&&l(b,a["extends"],k,d);if(void 0===b)a.optional||c("is missing and it is not optional");else if(f=f.concat(g(a.type,b)),a.disallow&&!g(a.disallow,b).length&&c(" disallowed value was matched"),null!==b){if(b instanceof Array){if(a.items)if(a.items instanceof
Array)for(d=0,e=b.length;d<e;d++)f.concat(l(b[d],a.items[d],k,d));else for(d=0,e=b.length;d<e;d++)f.concat(l(b[d],a.items,k,d));a.minItems&&b.length<a.minItems&&c("There must be a minimum of "+a.minItems+" in the array");a.maxItems&&b.length>a.maxItems&&c("There must be a maximum of "+a.maxItems+" in the array")}else a.properties&&f.concat(n(b,a.properties,k,a.additionalProperties));a.pattern&&"string"==typeof b&&!b.match(a.pattern)&&c("does not match the regex pattern "+a.pattern);a.maxLength&&"string"==
typeof b&&b.length>a.maxLength&&c("may only be "+a.maxLength+" characters long");a.minLength&&"string"==typeof b&&b.length<a.minLength&&c("must be at least "+a.minLength+" characters long");void 0!==typeof a.minimum&&typeof b==typeof a.minimum&&a.minimum>b&&c("must have a minimum value of "+a.minimum);void 0!==typeof a.maximum&&typeof b==typeof a.maximum&&a.maximum<b&&c("must have a maximum value of "+a.maximum);if(a["enum"]){d=a["enum"];e=d.length;for(var h,m=0;m<e;m++)if(d[m]===b){h=1;break}h||
c("does not have a value in the enumeration "+d.join(", "))}"number"==typeof a.maxDecimal&&b.toString().match(new RegExp("\\.[0-9]{"+(a.maxDecimal+1)+",}"))&&c("may only have "+a.maxDecimal+" digits of decimal places")}return null}function n(b,a,e,d){if("object"==typeof a){("object"!=typeof b||b instanceof Array)&&f.push({property:e,message:"an object is required"});for(var c in a)if(a.hasOwnProperty(c)&&("_"!=c.charAt(0)||"_"!=c.charAt(1))){var g=b[c];l(g,a[c],e,c)}}for(c in b)!b.hasOwnProperty(c)||
"_"==c.charAt(0)&&"_"==c.charAt(1)||!a||a[c]||!1!==d||f.push({property:e,message:typeof g+"The property "+c+" is not defined in the schema and the schema does not allow additional properties"}),g=a&&a[c]&&a[c].requires,!g||g in b||f.push({property:e,message:"the presence of the property "+c+" requires that "+g+" also be present"}),g=b[c],!a||"object"!=typeof a||c in a||l(g,d,e,c),!p&&g&&g.$schema&&(f=f.concat(l(g,g.$schema,e,c)));return f}var f=[];h&&l(e,h,"",p||"");!p&&e&&e.$schema&&l(e,e.$schema,
"","");return{valid:!f.length,errors:f}};return h.json.schema});