//>>built
define("esri/opsdashboard/core/ExtensionConfigurationBase",["dojo/_base/declare","./messageHandler","./errorMessages","./ExtensionBase"],function(c,b,d,e){return c([e],{config:null,_setConfig:function(a){this.config=a||{}},__messageReceived:function(a){return"updateconfig"===a.functionName.toLowerCase()?(a.args={configuration:this.config},b._sendMessage(a)):void this.inherited(arguments)},readyToPersistConfig:function(a){if(!this._isHostInitialized())throw Error(d.hostNotReady);b._sendMessage({functionName:"readyToPersistConfig",
args:{canAccept:a}})}})});