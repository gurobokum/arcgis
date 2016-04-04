//>>built
define("esri/arcade/treeAnalysis",["require","exports"],function(z,r){function t(a,d,b){return void 0!==a.fmin&&(a.min=a.fmin),void 0!==a.fmax&&(a.max=a.fmax),"0"!==a.min&&b.length<Number(a.min)?-2:"*"!==a.max&&b.length>Number(a.max)?-2:1}function u(a,d,b){if(null!==b.localScope&&void 0!==b.localScope[a.toLowerCase()]){var c=b.localScope[a.toLowerCase()];if("FormulaFunction"===c.type||"any"===c.type)return void 0===c.signature&&(c.signature={min:"0",max:"*"}),t(c.signature,a,d,b)}return void 0!==
b.globalScope[a.toLowerCase()]&&(c=b.globalScope[a.toLowerCase()],"FormulaFunction"===c.type||"any"===c.type)?(void 0===c.signature&&(c.signature={min:"0",max:"*"}),t(c.signature,a,d,b)):-1}function k(a,d){void 0===d&&(d=!0);var b=f(a,"SYNTAX","UNREOGNISED");try{switch(a.type){case "VariableDeclarator":return null!==a.init&&"FunctionExpression"===a.init.type?f(a,"SYNTAX","FUNCTIONVARIABLEDECLARATOR"):"Identifier"!==a.id.type?f(a,"SYNTAX","VARIABLEMUSTHAVEIDENTIFIER"):null!==a.init?k(a.init,!1):"";
case "VariableDeclaration":for(var c=0;c<a.declarations.length;c++)if(b=k(a.declarations[c],d),""!==b)return b;return"";case "ForInStatement":if(b=k(a.left,d),""!==b)break;if("VariableDeclaration"===a.left.type){if(1<a.left.declarations.length)return f(a,"SYNTAX","ONLY1VAR");if(null!==a.left.declarations[0].init)return f(a,"SYNTAX","CANNOTDECLAREVAL")}else if("Identifier"!==a.left.type)return f(a,"SYNTAX","LEFTNOTVAR");return b=k(a.right,d),""!==b?b:(b=k(a.body,d),""!==b?b:"");case "ForStatement":return null!==
a.test&&(b=k(a.test,d),""!==b)?b:null!==a.init&&(b=k(a.init,d),""!==b)?b:null!==a.update&&(b=k(a.update,d),""!==b)?b:null!==a.body&&(b=k(a.body,d),""!==b)?b:"";case "ContinueStatement":return"";case "EmptyStatement":return"";case "BreakStatement":return"";case "IfStatement":return b=k(a.test,d),""!==b?b:null!==a.consequent&&(b=k(a.consequent,!1),""!==b)?b:null!==a.alternate&&(b=k(a.alternate,!1),""!==b)?b:"";case "EmptyStatement":return"";case "BlockStatement":for(var e=[],c=0;c<a.body.length;c++)"EmptyStatement"!==
a.body[c].type&&e.push(a.body[c]);a.body=e;for(c=0;c<a.body.length;c++)if(b=k(a.body[c],d),""!==b)return b;return"";case "FunctionDeclaration":return!1===d?f(a,"SYNTAX","GLOBALFUNCTIONSONLY"):"Identifier"!==a.id.type?f(a,"SYNTAX","FUNCTIONMUSTHAVEIDENTIFIER"):k(a.body,!1);case "ReturnStatement":return null!==a.argument?k(a.argument,d):"";case "UpdateExpression":return"Identifier"!==a.argument.type?f(a,"SYNTAX","ASSIGNMENTTOVARSONLY"):"";case "AssignmentExpression":if("Identifier"!==a.left.type)return f(a,
"SYNTAX","ASSIGNMENTTOVARSONLY");switch(a.operator){case "\x3d":case "/\x3d":case "*\x3d":case "%\x3d":case "+\x3d":case "-\x3d":break;default:return f(a,"SYNTAX","OPERATORNOTRECOGNISED")}return k(a.right,!1);case "ExpressionStatement":return k(a.expression,!1);case "Identifier":b="";break;case "MemberExpression":return k(a.object,d);case "Literal":return"";case "ThisExpression":return f(a,"SYNTAX","NOTSUPPORTED");case "CallExpression":if("Identifier"!==a.callee.type)return f(a,"SYNTAX","ONLYNODESSUPPORTED");
b="";for(c=0;c<a.arguments.length;c++)if(b=k(a.arguments[c],d),""!==b)return b;return"";case "UnaryExpression":b=k(a.argument,d);break;case "BinaryExpression":if(b=k(a.left,d),""!==b)break;if(b=k(a.right,d),""!==b)break;switch(a.operator){case "\x3d\x3d":case "!\x3d":case "!\x3d":case "\x3c":case "\x3c\x3d":case "\x3e":case "\x3e\x3d":case "+":case "-":case "*":case "/":case "%":break;default:return f(a,"SYNTAX","OPERATORNOTRECOGNISED")}return"";case "LogicalExpression":if(b=k(a.left,d),""!==b)break;
if(b=k(a.right),""!==b)break;switch(a.operator){case "\x26\x26":case "||":break;default:return f(a,"SYNTAX","OPERATORNOTRECOGNISED")}return"";case "ConditionalExpression":return f(a,"SYNTAX","NOTSUPPORTED");case "ArrayExpression":b="";for(c=0;c<a.elements.length&&(b=k(a.elements[c],d),""===b);c++);break;case "Array":return f(a,"SYNTAX","NOTSUPPORTED");case "ObjectExpression":b="";for(c=0;c<a.properties.length&&(b=k(a.properties[c],d),""===b);c++);break;case "Property":return"Literal"!==a.key.type&&
"Identifier"!==a.key.type?f(a,"SYNTAX","ONLYLITERAL"):"Identifier"!==a.key.type&&(b=k(a.key,d),""!==b)?b:k(a.value,d)}return b}catch(m){throw m;}}function m(a,d){var b=f(a,"SYNTAX","UNREOGNISED"),c=null,e="";try{switch(a.type){case "VariableDeclarator":if(null!==a.init&&"FunctionExpression"===a.init.type)return f(a,"SYNTAX","FUNCTIONVARIABLEDECLARATOR");null!==d.localScope?void 0!==d.localScope[a.id.name.toLowerCase()]&&a.id.name.toLowerCase():void 0!==d.globalScope[a.id.name.toLowerCase()]&&a.id.name.toLowerCase();
var k=null==a.init?"":m(a.init,d);return""!==k?k:(null===d.localScope?d.globalScope[a.id.name.toLowerCase()]={type:"any"}:d.localScope[a.id.name.toLowerCase()]={type:"any"},"");case "FunctionDeclaration":return c=v(a.id.name.toLowerCase(),a,d),e=x(a,d),""!==e?e:null!==d.localScope?f(a,"SYNTAX","GLOBALFUNCTIONSONLY"):(c.isnative=!1,d.globalScope[a.id.name.toLowerCase()]={type:"FormulaFunction",signature:[c]},"");case "VariableDeclaration":for(var b="",h=0;h<a.declarations.length&&(b=m(a.declarations[h],
d),""===b);h++);break;case "IfStatement":return b=m(a.test,d),""!==b?b:"AssignmentExpression"===a.test.type||"UpdateExpression"===a.test.type?f(a.test,"SYNTAX","CANNOT_USE_ASSIGNMENT_IN_CONDITION"):null!==a.consequent&&(b=m(a.consequent,d),""!==b)?b:null!==a.alternate&&(b=m(a.alternate,d),""!==b)?b:"";case "EmptyStatement":return"";case "BlockStatement":for(h=0;h<a.body.length;h++)if(b=m(a.body[h],d),""!==b)return b;return"";case "ReturnStatement":return null!==a.argument?m(a.argument,d):"";case "ForInStatement":if("VariableDeclaration"===
a.left.type){if(1<a.left.declarations.length)return f(a,"SYNTAX","ONLY1VAR");if(null!==a.left.declarations[0].init)return f(a,"SYNTAX","CANNOTDECLAREVAL")}else if("Identifier"!==a.left.type)return f(a,"SYNTAX","LEFTNOTVAR");return b=m(a.left,d),""!==b?b:(b=m(a.right,d),""!==b?b:(b=m(a.body,d),""!==b?b:""));case "ForStatement":return null!==a.init&&(b=m(a.init,d),""!==b)?b:null!==a.test&&(b=m(a.test,d),""!==b)?b:null!==a.body&&(b=m(a.body,d),""!==b)?b:null!==a.update&&(b=m(a.update,d),""!==b)?b:"";
case "BreakStatement":return"";case "ContinueStatement":return"";case "UpdateExpression":if("Identifier"!==a.argument.type)return f(a,"SYNTAX","ASSIGNMENTTOVARSONLY");var g=!1;return null!==d.localScope&&void 0!==d.localScope[a.argument.name.toLowerCase()]&&(g=!0),void 0!==d.globalScope[a.argument.name.toLowerCase()]&&(g=!0),!1===g?"Identifier "+a.argument.name+" has not been declared.":"";case "AssignmentExpression":if("Identifier"!==a.left.type)return f(a,"SYNTAX","ASSIGNMENTTOVARSONLY");var l=
m(a.right,d);return""!==l?l:(g=!1,null!==d.localScope&&void 0!==d.localScope[a.left.name.toLowerCase()]&&(g=!0),void 0!==d.globalScope[a.left.name.toLowerCase()]&&(g=!0),!1===g?"Identifier "+a.left.name+" has not been declared.":"");case "ExpressionStatement":return m(a.expression,d);case "Identifier":var n=a.name.toLowerCase();if(null!==d.localScope&&void 0!==d.localScope[n])return"";b=void 0!==d.globalScope[n]?"":f(a,"SYNTAX","VARIABLENOTFOUND");break;case "MemberExpression":return b=m(a.object,
d),""!==b?b:"";case "Literal":return"";case "ThisExpression":b=f(a,"SYNTAX","NOTSUPPORTED");break;case "CallExpression":if("Identifier"!==a.callee.type)return f(a,"SYNTAX","ONLYNODESSUPPORTED");b="";for(h=0;h<a.arguments.length;h++)if(b=m(a.arguments[h],d),""!==b)return b;var p=u(a.callee.name,a.arguments,d);-1===p&&(b=f(a,"SYNTAX","NOTFOUND"));-2===p&&(b=f(a,"SYNTAX","WRONGSIGNATURE"));break;case "UnaryExpression":b=m(a.argument,d);break;case "BinaryExpression":return b=m(a.left,d),""!==b?b:(b=m(a.right,
d),""!==b?b:"");case "LogicalExpression":return b=m(a.left,d),""!==b?b:"AssignmentExpression"===a.left.type||"UpdateExpression"===a.left.type?f(a.left,"SYNTAX","CANNOT_USE_ASSIGNMENT_IN_CONDITION"):(b=m(a.right,d),""!==b?b:"AssignmentExpression"===a.right.type||"UpdateExpression"===a.right.type?f(a.right,"SYNTAX","CANNOT_USE_ASSIGNMENT_IN_CONDITION"):"");case "ConditionalExpression":return f(a,"SYNTAX","NOTSUPPORTED");case "ArrayExpression":b="";for(h=0;h<a.elements.length&&(b=m(a.elements[h],d),
""===b);h++);break;case "ObjectExpression":b="";for(h=0;h<a.properties.length&&(b=m(a.properties[h],d),""===b);h++);break;case "Property":return"Literal"!==a.key.type&&"Identifier"!==a.key.type?f(a,"SYNTAX","ONLYLITERAL"):"Identifier"!==a.key.type&&(b=m(a.key,d),""!==b)?b:m(a.value,d);case "Array":return f(a,"SYNTAX","NOTSUPPORTED")}return b}catch(q){throw q;}}function g(a,d){var b=!1;try{switch(a.type){case "VariableDeclarator":return null!==a.init?g(a.init,d):b;case "FunctionDeclaration":return g(a.body,
d);case "VariableDeclaration":for(var c=0;c<a.declarations.length;c++)if(g(a.declarations[c],d))return!0;return b;case "IfStatement":return g(a.test,d)?!0:null!==a.consequent&&g(a.consequent,d)?!0:null!==a.alternate&&g(a.alternate,d)?!0:b;case "EmptyStatement":return b;case "BlockStatement":for(c=0;c<a.body.length;c++)if(g(a.body[c],d))return!0;return b;case "ReturnStatement":return null!==a.argument?g(a.argument,d):b;case "UpdateExpression":return b;case "AssignmentExpression":return g(a.right,d);
case "ExpressionStatement":return g(a.expression,d);case "ForInStatement":return(b=g(a.left,d))?b:(b=g(a.right,d))?b:(b=g(a.body,d),b);case "ForStatement":return null!==a.init&&(b=g(a.init,d))?b:null!==a.test&&(b=g(a.test,d))?b:null!==a.body&&(b=g(a.body,d))?b:(null!==a.update&&(b=g(a.update,d)),b);case "BreakStatement":return b;case "ContinueStatement":return b;case "Compound":return b;case "Identifier":return d.toLowerCase()===a.name.toLowerCase();case "MemberExpression":return(b=g(a.object,d))?
b:(!0===a.computed&&(b=g(a.property,d)),b);case "Literal":return b;case "ThisExpression":return b;case "CallExpression":for(c=0;c<a.arguments.length;c++)g(a.arguments[c],d)&&(b=!0);return b;case "ArrayExpression":for(c=0;c<a.elements.length;c++)g(a.elements[c],d)&&(b=!0);return b;case "UnaryExpression":return g(a.argument,d);case "BinaryExpression":return(b=g(a.left,d))?b:g(a.right,d);case "LogicalExpression":return(b=g(a.left,d))?b:g(a.right,d);case "ObjectExpression":for(c=0;c<a.properties.length;c++)g(a.properties[c],
d)&&(b=!0);return b;case "Property":return g(a.value,d);case "ConditionalExpression":return b;case "Array":return b;default:return b}}catch(e){throw e;}}function l(a,d){var b=!1;try{switch(a.type){case "VariableDeclarator":return null!==a.init?l(a.init,d):b;case "FunctionDeclaration":return l(a.body,d);case "VariableDeclaration":for(var c=0;c<a.declarations.length;c++)if(l(a.declarations[c],d))return!0;return b;case "IfStatement":return l(a.test,d)?!0:null!==a.consequent&&l(a.consequent,d)?!0:null!==
a.alternate&&l(a.alternate,d)?!0:b;case "EmptyStatement":return b;case "BlockStatement":for(c=0;c<a.body.length;c++)if(l(a.body[c],d))return!0;return b;case "ReturnStatement":return null!==a.argument?l(a.argument,d):b;case "UpdateExpression":return b;case "AssignmentExpression":return l(a.right,d);case "ExpressionStatement":return l(a.expression,d);case "ForInStatement":return(b=l(a.left,d))?b:(b=l(a.right,d))?b:(b=l(a.body,d),b);case "ForStatement":return null!==a.init&&(b=l(a.init,d))?b:null!==
a.test&&(b=l(a.test,d))?b:null!==a.body&&(b=l(a.body,d))?b:(null!==a.update&&(b=l(a.update,d)),b);case "BreakStatement":return b;case "ContinueStatement":return b;case "Compound":return b;case "Identifier":return b;case "MemberExpression":return(b=l(a.object,d))?b:(!0===a.computed&&(b=l(a.property,d)),b);case "Literal":return b;case "ThisExpression":return b;case "CallExpression":if(a.callee.name.toLowerCase()===d.toLowerCase())return!0;for(c=0;c<a.arguments.length;c++)l(a.arguments[c],d)&&(b=!0);
return b;case "ArrayExpression":for(c=0;c<a.elements.length;c++)l(a.elements[c],d)&&(b=!0);return b;case "UnaryExpression":return l(a.argument,d);case "BinaryExpression":return(b=l(a.left,d))?b:l(a.right,d);case "LogicalExpression":return(b=l(a.left,d))?b:l(a.right,d);case "ConditionalExpression":return b;case "ObjectExpression":for(c=0;c<a.properties.length;c++)l(a.properties[c],d)&&(b=!0);return b;case "Property":return l(a.value,d);case "Array":return b;default:return b}}catch(e){throw e;}}function p(a,
d){var b,c=[];try{switch(a.type){case "VariableDeclarator":return null!==a.init?p(a.init,d):c;case "FunctionDeclaration":return p(a.body,d);case "VariableDeclaration":for(var e=0;e<a.declarations.length;e++)b=p(a.declarations[e],d),c=c.concat(b);return c;case "ForInStatement":return b=p(a.left,d),c=c.concat(b),b=p(a.right,d),c=c.concat(b),b=p(a.body,d),c.concat(b);case "ForStatement":return null!==a.init&&(b=p(a.init,d),c=c.concat(b)),null!==a.test&&(b=p(a.test,d),c=c.concat(b)),null!==a.body&&(b=
p(a.body,d),c=c.concat(b)),null!==a.update&&(b=p(a.update,d),c=c.concat(b)),c;case "IfStatement":return b=p(a.test,d),c=c.concat(b),null!==a.consequent&&(b=p(a.consequent,d),c=c.concat(b)),null!==a.alternate&&(b=p(a.alternate,d),c=c.concat(b)),c;case "EmptyStatement":return c;case "BlockStatement":for(e=0;e<a.body.length;e++)b=p(a.body[e],d),c=c.concat(b);return c;case "ReturnStatement":return null!==a.argument?p(a.argument,d):c;case "UpdateExpression":return c;case "AssignmentExpression":return p(a.right,
d);case "ExpressionStatement":return p(a.expression,d);case "BreakStatement":return c;case "ContinueStatement":return c;case "Compound":return c;case "Identifier":return c;case "MemberExpression":if("Identifier"!==a.object.type)return c;if(!1===a.computed)c.push(a.object.name.toLowerCase()+"."+a.property.name.toLowerCase());else try{"Literal"===a.property.type&&"string"==typeof a.property.value&&c.push(a.object.name.toLowerCase()+"."+a.property.value.toString().toLowerCase())}catch(f){}return c;case "Literal":return c;
case "ThisExpression":return c;case "CallExpression":for(e=0;e<a.arguments.length;e++)b=p(a.arguments[e],d),c=c.concat(b);return c;case "ArrayExpression":for(e=0;e<a.elements.length;e++)b=p(a.elements[e],d),c=c.concat(b);return c;case "UnaryExpression":return p(a.argument,d);case "ObjectExpression":for(e=0;e<a.properties.length;e++)b=p(a.properties[e],d),c=c.concat(b);return c;case "Property":return p(a.value,d);case "BinaryExpression":return b=p(a.left,d),c=c.concat(b),b=p(a.right,d),c.concat(b);
case "LogicalExpression":return b=p(a.left,d),c=c.concat(b),b=p(a.right,d),c.concat(b);case "ConditionalExpression":return c;case "Array":return c;default:return c}}catch(h){throw h;}}function v(a,d){var b=[];if(void 0!==d.params&&null!==d.params)for(var c=0;c<d.params.length;c++)b.push("any");return{name:a,"return":"any",params:b}}function x(a,d){for(var b={globalScope:d.globalScope,localScope:{}},c=0;c<a.params.length;c++)b.localScope[a.params[c].name.toLowerCase()]={type:"any"};return m(a.body,
b)}function w(a,d,b,c){var e={};void 0!==a&&null!==a||(a={});void 0!==b&&null!==b||(b={});e.infinity={type:"any"};e.pi={type:"any"};for(var f in d)("simple"!==c||"simple"===c&&"a"===d[f].av)&&(e[f]={type:"FormulaFunction",signature:d[f]});for(d=0;d<b.length;d++)f=b[d],e[f.name]={type:"FormulaFunction",signature:f};for(f in a)e[f]=a[f],e[f].type="any";return e}function f(a,d,b){var c="";switch(d){case "SYNTAX":c="Syntax Error: ";break;case "RUNTIME":c="Runtime Error: ";break;default:c="Syntax Error: "}try{switch(a.type){case "IfStatement":switch(b){case "CANNOT_USE_ASSIGNMENT_IN_CONDITION":c+=
" Assignments not be made in logical tests";break;case "CANNOT_USE_NONBOOLEAN_IN_CONDITION":c+=" Non Boolean used as Condition"}break;case "UpdateExpression":case "AssignmentExpression":switch(b){case "CANNOT_USE_ASSIGNMENT_IN_CONDITION":c+=" Assignments not be made in logical tests";break;case "ASSIGNMENTTOVARSONLY":c+=" Assignments can only be made to identifiers"}break;case "ExpressionStatement":c+=" Assignments can only be made to identifiers";break;case "FunctionDeclaration":switch(b){case "GLOBALFUNCTIONSONLY":c+=
" Functions cannot be declared as variables";break;case "FUNCTIONMUSTHAVEIDENTIFIER":c+=" Function Definition must have an identifier"}break;case "VariableDeclaration":c+=" Only 1 variable can be declared at a time";break;case "VariableDeclarator":switch(b){case "FUNCTIONVARIABLEDECLARATOR":c+=" Functions cannot be declared as variables";break;case "VARIABLEMUSTHAVEIDENTIFIER":c+=" Variable Definition must have an identifier"}break;case "Identifier":c+=" Identifier Not Found. ";c+=a.name;break;case "ForInStatement":switch(b){case "ONLY1VAR":c+=
" Can only declare 1 var for use with IN";break;case "CANNOTDECLAREVAL":c+=" Can only declare value for use with IN";break;case "LEFTNOVAR":c+="Must provide a variable to iterate with.";break;case "VARIABLENOTDECLARED":c+="Variable must be declared before it is used..";break;case "CANNOTITERATETHISTYPE":c+="This type cannot be used in an IN loop"}break;case "MemberExpression":switch(b){case "NOTFOUND":c+="Cannot call member method on null. ";c+=!1===a.computed?a.property.name:"";break;case "INVALIDTYPE":c+=
"Cannot call member property on object of this type. ",c+=!1===a.computed?a.property.name:""}break;case "Property":switch(b){case "ONLYLITERAL":c+="Property names must be literals or identifiers"}break;case "Literal":break;case "ThisExpression":c+="THIS construct is not supported.";case "CallExpression":switch(b){case "WRONGSIGNATURE":c+="Function signature does not match: ";c+=a.callee.name;break;case "ONLYNODESUPPORTED":c+="Functions must be declared.";c+=a.callee.name;break;case "NOTAFUNCTION":c+=
"Not a Function: ";c+=a.callee.name;break;case "NOTFOUND":c+="Function Not Found: "+a.callee.name}break;case "UnaryExpression":switch(b){case "NOTSUPPORTEDUNARYOPERATOR":c+="Operator "+a.operator+" not allowed in this context. Only ! can be used with boolean, and - with a number";break;case "NOTSUPPORTEDTYPE":c+="Unary operator "+a.operator+" cannot be used with this argument."}case "BinaryExpression":switch(b){case "OPERATORNOTRECOGNISED":c+="Binary Operator not recognised "+a.operator}break;case "LogicalExpression":return"";
case "ConditionalExpression":c+="Conditional statements not supported.";break;case "ArrayExpression":switch(b){case "FUNCTIONCONTEXTILLEGAL":c+=" Cannot Put Function inside Array."}break;case "Array":c+="Expression contains unrecognised array structure.";break;default:c+="Expression contains unrecognised code structures."}}catch(e){throw e;}return c}function q(a,d,b){return{line:a.loc.start.line,character:a.loc.start.column,reason:f(a,d,b)}}function y(a,d,b,c,e){d={globalScope:d.globalScope,localScope:{}};
for(e=0;e<a.params.length;e++)d.localScope[a.params[e].name.toLowerCase()]={type:"any"};n(a.body,d,b,c,!1)}function n(a,d,b,c,e){if(void 0===e&&(e=!0),null===a)throw Error("Unnexpexted Expression Syntax");f(a,"SYNTAX","UNREOGNISED");var g=null;try{switch(a.type){case "VariableDeclarator":return null!==a.init&&"FunctionExpression"===a.init.type?void c.push(q(a,"SYNTAX","FUNCTIONVARIABLEDECLARATOR")):("Identifier"!==a.id.type?c.push(q(a,"SYNTAX","VARIABLEMUSTHAVEIDENTIFIER")):(null!==d.localScope?void 0!==
d.localScope[a.id.name.toLowerCase()]&&a.id.name.toLowerCase():void 0!==d.globalScope[a.id.name.toLowerCase()]&&a.id.name.toLowerCase(),null===d.localScope?d.globalScope[a.id.name.toLowerCase()]={type:"any"}:d.localScope[a.id.name.toLowerCase()]={type:"any"}),void(null===a.init?"":n(a.init,d,b,c,e)));case "FunctionDeclaration":return!1===e&&c.push(q(a,"SYNTAX","GLOBALFUNCTIONSONLY")),"Identifier"!==a.id.type&&c.push(q(a,"SYNTAX","FUNCTIONMUSTHAVEIDENTIFIER")),g=v("",a,d),y(a,d,b,c,e),null!==d.localScope&&
c.push(q(a,"SYNTAX","GLOBALFUNCTIONSONLY")),g.isnative=!1,void("Identifier"===a.id.type&&(d.globalScope[a.id.name.toLowerCase()]={type:"FormulaFunction",signature:[g]}));case "VariableDeclaration":for(var h=0;h<a.declarations.length;h++)n(a.declarations[h],d,b,c,e);break;case "IfStatement":return null!==a.test&&(n(a.test,d,b,c,e),("AssignmentExpression"===a.test.type||"UpdateExpression"===a.test.type)&&c.push(q(a.test,"SYNTAX","CANNOT_USE_ASSIGNMENT_IN_CONDITION"))),null!==a.consequent&&n(a.consequent,
d,b,c,e),void(null!==a.alternate&&n(a.alternate,d,b,c,e));case "EmptyStatement":break;case "BlockStatement":if(null!==a.body)for(h=0;h<a.body.length;h++)n(a.body[h],d,b,c,e);break;case "ReturnStatement":return void(null!==a.argument&&n(a.argument,d,b,c,e));case "ForInStatement":return"VariableDeclaration"===a.left.type?(1<a.left.declarations.length&&c.push(q(a,"SYNTAX","ONLY1VAR")),null!==a.left.declarations[0].init&&c.push(q(a,"SYNTAX","CANNOTDECLAREVAL"))):"Identifier"!==a.left.type&&c.push(q(a,
"SYNTAX","LEFTNOTVAR")),n(a.left,d,b,c,e),n(a.right,d,b,c,e),void n(a.body,d,b,c,e);case "ForStatement":return null!==a.init&&n(a.init,d,b,c,e),null!==a.test&&n(a.test,d,b,c,e),null!==a.body&&n(a.body,d,b,c,e),void(null!==a.update&&n(a.update,d,b,c,e));case "BreakStatement":break;case "ContinueStatement":break;case "UpdateExpression":"Identifier"!==a.argument.type?c.push(q(a,"SYNTAX","ASSIGNMENTTOVARSONLY")):(e=!1,!1===b&&(null!==d.localScope&&void 0!==d.localScope[a.argument.name.toLowerCase()]&&
(e=!0),void 0!==d.globalScope[a.argument.name.toLowerCase()]&&(e=!0),!1===e&&c.push({line:null===a?0:a.loc.start.line,character:null===a?0:a.loc.start.column,reason:"Identifier "+a.argument.name+" has not been declared."})));break;case "AssignmentExpression":switch("Identifier"!==a.left.type&&c.push(q(a,"SYNTAX","ASSIGNMENTTOVARSONLY")),a.operator){case "\x3d":case "/\x3d":case "*\x3d":case "%\x3d":case "+\x3d":case "-\x3d":break;default:c.push(q(a,"SYNTAX","OPERATORNOTRECOGNISED"))}n(a.right,d,b,
c,e);e=!1;return void("Identifier"===a.left.type&&(null!==d.localScope&&void 0!==d.localScope[a.left.name.toLowerCase()]&&(e=!0),void 0!==d.globalScope[a.left.name.toLowerCase()]&&(e=!0),!1===b&&!1===e&&c.push({line:null===a?0:a.loc.start.line,character:null===a?0:a.loc.start.column,reason:"Identifier "+a.argument.name+" has not been declared."})));case "ExpressionStatement":return void n(a.expression,d,b,c,e);case "Identifier":var k=a.name.toLowerCase();if(null!==d.localScope&&void 0!==d.localScope[k])break;
if(void 0!==d.globalScope[k])break;!1===b&&c.push(q(a,"SYNTAX","VARIABLENOTFOUND"));break;case "MemberExpression":return void n(a.object,d,b,c,e);case "Literal":return"";case "ThisExpression":c.push(q(a,"SYNTAX","NOTSUPPORTED"));break;case "CallExpression":"Identifier"!==a.callee.type&&c.push(q(a,"SYNTAX","ONLYNODESSUPPORTED"));for(h=0;h<a.arguments.length;h++)n(a.arguments[h],d,b,c,e);var l=u(a.callee.name,a.arguments,d);return!1===b&&-1===l&&c.push(q(a,"SYNTAX","NOTFOUND")),void(-2===l&&c.push(q(a,
"SYNTAX","WRONGSIGNATURE")));case "UnaryExpression":return void n(a.argument,d,b,c,e);case "BinaryExpression":switch(n(a.left,d,b,c,e),n(a.right,d,b,c,e),a.operator){case "\x3d\x3d":case "!\x3d":case "!\x3d":case "\x3c":case "\x3c\x3d":case "\x3e":case "\x3e\x3d":case "+":case "-":case "*":case "/":case "%":break;default:c.push(q(a,"SYNTAX","OPERATORNOTRECOGNISED"))}break;case "LogicalExpression":switch(a.operator){case "\x26\x26":case "||":break;default:c.push(q(a,"SYNTAX","OPERATORNOTRECOGNISED"))}return n(a.left,
d,b,c,e),("AssignmentExpression"===a.left.type||"UpdateExpression"===a.left.type)&&c.push(q(a,"SYNTAX","CANNOT_USE_ASSIGNMENT_IN_CONDITION")),n(a.right,d,b,c,e),void(("AssignmentExpression"===a.right.type||"UpdateExpression"===a.right.type)&&c.push(q(a,"SYNTAX","CANNOT_USE_ASSIGNMENT_IN_CONDITION")));case "ConditionalExpression":c.push(q(a,"SYNTAX","NOTSUPPORTED"));break;case "ArrayExpression":for(h=0;h<a.elements.length;h++)n(a.elements[h],d,b,c,e);break;case "Array":c.push(q(a,"SYNTAX","NOTSUPPORTED"));
case "ObjectExpression":for(h=0;h<a.properties.length;h++)n(a.properties[h],d,b,c,e);break;case "Property":return"Literal"!==a.key.type&&"Identifier"!==a.key.type&&c.push(q(a,"SYNTAX","ONLYLITERAL")),"Literal"===a.key.type&&n(a.key,d,b,c,e),void n(a.value,d,b,c,e);default:c.push(q(a,"SYNTAX","UNRECOGNISED"))}}catch(m){c.push({line:null==a?0:a.loc.start.line,character:null===a?0:a.loc.start.column,reason:"Unnexpected Syntax"})}}r.functionDecls={concatenate:{min:"0",max:"*",av:"a"},split:{min:"2",max:"4",
av:"a"},guid:{min:"0",max:"1",av:"a"},today:{min:"0",max:"0",av:"a"},now:{min:"0",max:"0",av:"a"},timestamp:{min:"0",max:"0",av:"a"},day:{min:"1",max:"1",av:"a"},month:{min:"1",max:"1",av:"a"},year:{min:"1",max:"1",av:"a"},hour:{min:"1",max:"1",av:"a"},second:{min:"1",max:"1",av:"a"},millisecond:{min:"1",max:"1",av:"a"},minute:{min:"1",max:"1",av:"a"},weekday:{min:"1",max:"1",av:"a"},toutc:{min:"1",max:"1",av:"a"},tolocal:{min:"1",max:"1",av:"a"},date:{min:"0",max:"7",av:"a"},datediff:{min:"2",max:"3",
av:"a"},dateadd:{min:"2",max:"3",av:"a"},trim:{min:"1",max:"1",av:"a"},len:{min:"1",max:"1",av:"a"},text:{min:"1",max:"2",av:"a"},left:{min:"2",max:"2",av:"a"},right:{min:"2",max:"2",av:"a"},mid:{min:"2",max:"3",av:"a"},upper:{min:"1",max:"1",av:"a"},proper:{min:"1",max:"2",av:"a"},lower:{min:"1",max:"1",av:"a"},find:{min:"2",max:"3",av:"a"},iif:{min:"3",max:"3",av:"a"},decode:{min:"2",max:"*",av:"a"},when:{min:"2",max:"*",av:"a"},defaultvalue:{min:"2",max:"2",av:"a"},isempty:{min:"1",max:"1",av:"a"},
maplayer:{min:"2",max:"3",av:"f"},domaincode:{min:"3",max:"3",av:"f"},domainvalue:{min:"3",max:"3",av:"f"},polygon:{min:"1",max:"1",av:"a"},point:{min:"1",max:"1",av:"a"},polyline:{min:"1",max:"1",av:"a"},envelope:{min:"1",max:"1",av:"a"},multipoint:{min:"1",max:"1",av:"a"},geometry:{min:"1",max:"1",av:"a"},featurelayer:{min:"1",max:"3",av:"f"},featurecollection:{min:"1",max:"1",av:"f"},buffer:{min:"2",max:"4",av:"f"},area:{min:"1",max:"2",av:"f"},sumarea:{min:"1",max:"2",av:"f"},length:{min:"1",
max:"2",av:"f"},sumlength:{min:"1",max:"2",av:"f"},count:{min:"0",max:"*",av:"a"},filter:{min:"2",max:"2",av:"f"},envelopeintersects:{min:"2",max:"2",av:"f"},intersects:{min:"2",max:"2",av:"f"},contains:{min:"2",max:"2",av:"f"},overlaps:{min:"2",max:"2",av:"f"},within:{min:"2",max:"2",av:"f"},touches:{min:"2",max:"2",av:"f"},crosses:{min:"2",max:"2",av:"f"},union:{min:"2",max:"2",av:"f",fmin:2},difference:{min:"2",max:"2",av:"f",fmin:2,fmax:3},intersection:{min:"2",max:"2",av:"f",fmin:2,fmax:3},symmetricdifference:{min:"2",
max:"2",av:"f",fmin:2,fmax:3},number:{min:"1",max:"1",av:"a"},acos:{min:"1",max:"1",av:"a"},asin:{min:"1",max:"1",av:"a"},atan:{min:"1",max:"1",av:"a"},atan2:{min:"2",max:"2",av:"a"},ceil:{min:"1",max:"2",av:"a"},floor:{min:"1",max:"2",av:"a"},round:{min:"1",max:"2",av:"a"},cos:{min:"1",max:"1",av:"a"},exp:{min:"1",max:"1",av:"a"},log:{min:"1",max:"1",av:"a"},min:{min:"0",max:"*",av:"a"},max:{min:"0",max:"*",av:"a"},pow:{min:"2",max:"2",av:"a"},random:{min:"0",max:"0",av:"a"},sqrt:{min:"1",max:"1",
av:"a"},sin:{min:"1",max:"1",av:"a"},tan:{min:"1",max:"1",av:"a"},abs:{min:"1",max:"1",av:"a"},isnan:{min:"1",max:"1",av:"a"},stdev:{min:"0",max:"*",av:"a"},average:{min:"0",max:"*",av:"a"},sum:{min:"0",max:"*",av:"a"},variance:{min:"0",max:"*",av:"a"},distinct:{min:"0",max:"*",av:"a"},addfield:{min:"3",max:"3",av:"f"},removefield:{min:"2",max:"2",av:"f"},aggregate:{min:"3",max:"3",av:"f"},dissolve:{min:"2",max:"3",av:"f"},changeshape:{min:"2",max:"4",av:"f"},first:{min:"1",max:"1",av:"a"},top:{min:"2",
max:"2",av:"a"},orderby:{min:"2",max:"2",av:"f"},"boolean":{min:"1",max:"1",av:"a"},dictionary:{min:"0",max:"*",av:"a"},servicearea:{min:"2",max:"*",av:"f"},equals:{min:"2",max:"2",av:"a"},"typeof":{min:"1",max:"1",av:"a"},reverse:{min:"1",max:"1",av:"a"},sort:{min:"1",max:"2",av:"a"},feature:{min:"1",max:"*",av:"a"}};r.checkFunctionSignature=t;r.findFunction=u;r.validateLanguageNode=k;r.testValidityOfExpression=m;r.referencesMemberImpl=g;r.referencesMember=function(a,d){return!0===g(a.body[0].body,
d)?!0:!1};r.referencesFunctionImpl=l;r.referencesFunction=function(a,d){return!0===l(a.body[0].body,d)?!0:!1};r.findFieldLiteralsImpl=p;r.findFieldLiterals=function(a,d){return p(a.body[0].body,d)};r.extractFunctionDeclaration=v;r.validateFunction=x;r.constructGlobalScope=w;r.validateScript=function(a,d,b){void 0===b&&(b="full");d={globalScope:w(d.vars,r.functionDecls,d.customFunctions,b),localScope:null};return m(a.body[0].body,d)};r.validateLanguage=function(a){return"BlockStatement"!==a.body[0].body.type?
"Invalid formula content.":k(a.body[0].body)};r.nodeErrorMessage=f;r.makeError=q;r.extractAllIssuesInFunction=y;r.extractAllIssues=n;r.checkScript=function(a,d,b,c){void 0===c&&(c="full");var e=[];if("BlockStatement"!==a.body[0].body.type)return[{line:0,character:0,reason:"Invalid Body"}];null!==d&&void 0!==d||(d={vars:{},customFunctions:[]});d={globalScope:w(d.vars,r.functionDecls,d.customFunctions,c),localScope:null};try{n(a.body[0].body,d,b,e)}catch(f){}return e}});