//>>built
define("esri/urlUtils","dojo/_base/lang dojo/_base/array dojo/_base/url dojo/io-query ./kernel ./config ./sniff dojo/i18n!./nls/jsapi".split(" "),function(k,v,m,t,f,w,r,x){var u=new m(window.location.href.toLowerCase()),c={},n=w.defaults.io,p=window.location.protocol;return"file:"===p&&(p="http:"),c.urlToObject=function(a){var b={},c=new m(a),d=a.indexOf("?");return null===c.query?b={path:a,query:null}:(b.path=a.substring(0,d),b.query=t.queryToObject(c.query)),c.fragment&&(b.hash=c.fragment,null===
c.query&&(b.path=b.path.substring(0,b.path.length-(c.fragment.length+1)))),b},c.getProxyUrl=function(a,b){var e,d,g,l,h=k.isString(a)?0===k.trim(a).toLowerCase().indexOf("https:"):a,q=n.proxyUrl,f=x.io.proxyNotSet;if(k.isString(a)&&(l=c.getProxyRule(a),l&&(q=l.proxyUrl)),!q)throw console.log(f),Error(f);return h&&!1!==b&&0!==window.location.href.toLowerCase().indexOf("https:")&&(d=q,0!==d.toLowerCase().indexOf("http")&&(d=c.getAbsoluteUrl(d)),d=d.replace(/^http:/i,"https:"),c.canUseXhr(d)&&(q=d,g=
1)),e=c.urlToObject(q),e._xo=g,e},c.addProxy=function(a){var b,e,d,g=c.getProxyRule(a);return g?b=c.urlToObject(g.proxyUrl):n.alwaysUseProxy&&(b=c.getProxyUrl()),b&&(e=c.urlToObject(a),a=b.path+"?"+e.path,d=t.objectToQuery(k.mixin(b.query||{},e.query)),d&&(a+="?"+d)),a},c.addProxyRule=function(a){var b,e,d=a.urlPrefix=c.urlToObject(a.urlPrefix).path.replace(/([^\/])$/,"$1/").replace(/^https?:\/\//gi,"").toLowerCase(),g=n.proxyRules,f=g.length,h=f;for(b=0;f>b;b++){if(e=g[b].urlPrefix,0===d.indexOf(e)){if(d.length===
e)return-1;h=b;break}0===e.indexOf(d)&&(h=b+1)}return g.splice(h,0,a),h},c.getProxyRule=function(a){var b,e=n.proxyRules,d=e.length,f=c.urlToObject(a).path.replace(/([^\/])$/,"$1/").replace(/^https?:\/\//gi,"").toLowerCase();for(a=0;d>a;a++)if(0===f.indexOf(e[a].urlPrefix)){b=e[a];break}return b},c.hasSameOrigin=function(a,b,c){a=a.toLowerCase();b=b.toLowerCase();var d=window.location.href.toLowerCase();return a=0===a.indexOf("http")?new m(a):d=new m(d),b=0===b.indexOf("http")?new m(b):k.isString(d)?
new m(d):d,(c||a.scheme===b.scheme)&&a.host===b.host&&a.port===b.port},c.canUseXhr=function(a,b){var e,d=r("esri-phonegap")?!0:!1,f=c.hasSameOrigin,l=n.corsEnabledServers,h=-1;return!d&&r("esri-cors")&&l&&l.length&&(d=v.some(l,function(b,c){var d=b&&"object"==typeof b?b.host:b;return d&&(e=0!==k.trim(d).toLowerCase().indexOf("http"),f(a,e?"http://"+d:d)||e&&f(a,"https://"+d))?(h=c,!0):!1})),b?h:d},c.getAbsoluteUrl=function(a){return k.isString(a)&&!/^https?:\/\//i.test(a)?0===a.indexOf("//")?p+a:
0===a.indexOf("/")?p+"//"+window.location.host+a:f._appBaseUrl+a:a},c.fixUrl=function(a){return/^\/\//i.test(a)&&(a=p+a),a.replace(/^(https?:\/\/)(arcgis\.com)/i,"$1www.$2")},c.normalize=function(a){return a=c._ensureProtocol(a),c._ensureProperProtocolForAGOResource(a)},c._ensureProtocol=function(a){var b;return a?(/^\/\//i.test(a)&&(b=u.scheme,b="file"===b?"https":b,a=b+":"+a),a):a},c._ensureProperProtocolForAGOResource=function(a){return"https"===u.scheme&&(/^http\:\/\/server\.arcgisonline\.com(?!:)/i.test(a)||
/^http\:\/\/services\.arcgisonline\.com(?!:)/i.test(a)||/^http\:\/\/.+\.arcgis\.com(?!:)/i.test(a))?a.replace(/http:/i,"https:"):a},r("extend-esri")&&(k.mixin(f,c),f._getProxyUrl=c.getProxyUrl,f._getProxiedUrl=c.addProxy,f._hasSameOrigin=c.hasSameOrigin,f._canDoXOXHR=c.canUseXhr,f._getAbsoluteUrl=c.getAbsoluteUrl,f.fixUrl=c.fixUrl),c});