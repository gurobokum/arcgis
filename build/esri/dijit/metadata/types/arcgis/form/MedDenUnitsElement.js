//>>built
define("esri/dijit/metadata/types/arcgis/form/MedDenUnitsElement","dojo/_base/declare dojo/_base/lang dojo/_base/array dojo/query dijit/registry dojo/has ../../../../../kernel ../../../form/OpenElement dojo/i18n!../../../nls/i18nBase".split(" "),function(a,c,f,g,h,k,l,m,e){a=a([m],{postCreate:function(){this.inherited(arguments)},beforeValidateValue:function(a,d,b){null!==b&&0!==c.trim(b).length||!this._hasDensityValue()||(a=e.validation.pattern,b=e.validation.empty,d.isValid=!1,d.message=a.replace("{label}",
d.label).replace("{message}",b))},_hasDensityValue:function(){var a=g("[data-gxe-path\x3d'"+(this.parentElement.gxePath+"/medDensity")+"']",this.domNode.parentNode);return f.some(a,function(a){var b;return(a=h.byNode(a))&&a.inputWidget?(b=a.inputWidget.getInputValue(),!(null===b||0===c.trim(b).length)):void 0})}});return k("extend-esri")&&c.setObject("dijit.metadata.types.arcgis.form.MedDenUnitsElement",a,l),a});