// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See http://js.arcgis.com/3.15/esri/copyright.txt and http://www.arcgis.com/apps/webappbuilder/copyright.txt for details.

require({cache:{"url:widgets/Search/setting/LocatorSourceSetting.html":'\x3cdiv\x3e\r\n  \x3cdiv class\x3d"source-tips jimu-ellipsis" title\x3d"${nls.locatorTips}" data-dojo-attach-point\x3d"tipsNode"\x3e\r\n    \x3cem\x3e${nls.locatorTips}\x3c/em\x3e\r\n  \x3c/div\x3e\r\n  \x3cdiv class\x3d"source-url-section"\x3e\r\n    \x3ctable class\x3d"source-table" cellspacing\x3d"0"\x3e\r\n      \x3ctbody\x3e\r\n        \x3ctr\x3e\r\n          \x3ctd class\x3d"first"\x3e\r\n            \x3cspan class\x3d"source-label"\x3e${nls.locatorUrl}\x3c/span\x3e\r\n          \x3c/td\x3e\r\n          \x3ctd class\x3d"second"\x3e\r\n            \x3cdiv data-dojo-attach-point\x3d"locatorUrl" data-dojo-type\x3d"dijit/form/ValidationTextBox" data-dojo-props\x3d"required:true,trim:true,disabled:true,style:{width:\'100%\'}"\x3e\x3c/div\x3e\r\n          \x3c/td\x3e\r\n          \x3ctd class\x3d"third"\x3e\r\n            \x3cspan class\x3d"jimu-btn" data-dojo-attach-event\x3d"click:_onSetLocatorUrlClick"\x3e${nls.set}\x3c/span\x3e\r\n          \x3c/td\x3e\r\n        \x3c/tr\x3e\r\n        \x3ctr class\x3d"example"\x3e\r\n          \x3ctd class\x3d"first"\x3e\x3c/td\x3e\r\n          \x3ctd class\x3d"second"\x3e\r\n            \x3cspan class\x3d"example"\x3e${nls.locatorExample}: http://\x26lt;myServerName\x26gt;/arcgis/rest/services/World/GeocodeServer\x3c/span\x3e\r\n          \x3c/td\x3e\r\n        \x3c/tr\x3e\r\n      \x3c/tbody\x3e\r\n    \x3c/table\x3e\r\n  \x3c/div\x3e\r\n  \x3cdiv class\x3d"source-details-section" data-dojo-attach-point\x3d"detailsSection"\x3e\r\n    \x3ctable class\x3d"source-table" cellspacing\x3d"0"\x3e\r\n      \x3ctbody\x3e\r\n        \x3ctr\x3e\r\n          \x3ctd class\x3d"first"\x3e${nls.locatorName}\x3c/td\x3e\r\n          \x3ctd class\x3d"second"\x3e\r\n            \x3cinput type\x3d"text" data-dojo-type\x3d"dijit/form/ValidationTextBox" data-dojo-attach-point\x3d"locatorName" data-dojo-attach-event\x3d"Blur: _onLocatorNameBlur"\r\n            placeHolder\x3d"${nls.locatorName}"\r\n            required\x3d"true" data-dojo-props\x3d\'style:{width:"100%"}\'/\x3e\r\n          \x3c/td\x3e\r\n        \x3c/tr\x3e\r\n        \x3ctr\x3e\r\n          \x3ctd class\x3d"first"\x3e${nls.placeholder}\x3c/td\x3e\r\n          \x3ctd class\x3d"second"\x3e\r\n            \x3cinput type\x3d"text" data-dojo-type\x3d"dijit/form/TextBox" data-dojo-attach-point\x3d"placeholder"\r\n            data-dojo-attach-event\x3d"Blur: _onPlaceholderBlur"\r\n            placeHolder\x3d"${nls.placeholder}" data-dojo-props\x3d\'style:{width:"100%"}\'/\x3e\r\n          \x3c/td\x3e\r\n        \x3c/tr\x3e\r\n        \x3ctr class\x3d"hide-country-code-row country-code-row" data-dojo-attach-point\x3d"countryCodeRow"\x3e\r\n          \x3ctd class\x3d"first"\x3e${nls.countryCode}\x3c/td\x3e\r\n          \x3ctd class\x3d"second"\x3e\r\n            \x3cinput type\x3d"text" data-dojo-type\x3d"dijit/form/TextBox" data-dojo-attach-point\x3d"countryCode"\r\n            data-dojo-attach-event\x3d"Blur:_onCountryCodeBlur"\r\n            placeHolder\x3d"${nls.countryCodeEg} USA,CHN" data-dojo-props\x3d\'style:{width:"97%"}\'/\x3e\r\n            \x3ca class\x3d"jimu-float-trailing" target\x3d"_blank" href\x3d"https://developers.arcgis.com/rest/geocode/api-reference/geocode-coverage.htm" style\x3d"line-height:30px;"\x3e?\x3c/a\x3e\r\n            \x3cspan class\x3d"example"\x3e${nls.countryCodeHint}\x3c/span\x3e\r\n          \x3c/td\x3e\r\n        \x3c/tr\x3e\r\n        \x3ctr\x3e\r\n          \x3ctd class\x3d"first"\x3e\r\n            \x3cspan class\x3d"source-label"\x3e${nls.maxResults}\x3c/span\x3e\r\n          \x3c/td\x3e\r\n          \x3ctd class\x3d"second"\x3e\r\n            \x3cdiv data-dojo-attach-point\x3d"maxResults" data-dojo-type\x3d"dijit/form/NumberTextBox" data-dojo-props\x3d"constraints:{min:1,places:0},style:{width:\'100%\'}"\x3e\x3c/div\x3e\r\n          \x3c/td\x3e\r\n        \x3c/tr\x3e\r\n      \x3c/tbody\x3e\r\n    \x3c/table\x3e\r\n    \x3ctable class\x3d"source-table" cellspacing\x3d"0"\x3e\r\n      \x3ctbody\x3e\r\n        \x3ctr\x3e\r\n          \x3ctd class\x3d"first"\x3e\r\n            \x3cdiv data-dojo-attach-point\x3d"searchInCurrentMapExtent"\x3e\x3c/div\x3e\r\n          \x3c/td\x3e\r\n        \x3c/tr\x3e\r\n      \x3c/tbody\x3e\r\n    \x3c/table\x3e\r\n  \x3c/div\x3e\r\n  \x3cdiv data-dojo-attach-point\x3d"shelter" data-dojo-type\x3d"jimu/dijit/LoadingShelter" data-dojo-props\x3d"hidden:true"\x3e\x3c/div\x3e\r\n\x3c/div\x3e'}});
define("dojo/_base/declare dojo/_base/lang dojo/_base/html dojo/on dojo/Evented dojo/Deferred dijit/_WidgetBase dijit/_TemplatedMixin dijit/_WidgetsInTemplateMixin jimu/dijit/Message jimu/dijit/_GeocodeServiceChooserContent jimu/dijit/Popup jimu/dijit/LoadingShelter esri/request ../utils jimu/utils dojo/text!./LocatorSourceSetting.html jimu/dijit/CheckBox dijit/form/ValidationTextBox dijit/form/NumberTextBox".split(" "),function(k,c,e,f,l,m,n,p,q,g,r,s,t,h,u,d,v,w){return k([n,p,q,l],{baseClass:"jimu-widget-search-locator-source-setting",
tr:null,nls:null,config:null,singleLineFieldName:null,templateString:v,_suggestible:!1,_locatorDefinition:null,_esriLocatorRegExp:/http(s)?:\/\/geocode(.){0,3}\.arcgis.com\/arcgis\/rest\/services\/World\/GeocodeServer/g,serviceChooserContent:null,geocoderPopup:null,_clickSet:!1,postCreate:function(){this.inherited(arguments);this.searchInCurrentMapExtent=new w({checked:!1,label:this.nls.searchInCurrentMapExtent},this.searchInCurrentMapExtent);this.config=this.config?this.config:{};this.setConfig(this.config)},
setRelatedTr:function(a){this.tr=a},getRelatedTr:function(){return this.tr},setDefinition:function(a){this._locatorDefinition=a||{}},getDefinition:function(){return this._locatorDefinition},setConfig:function(a){if("[object Object]"===Object.prototype.toString.call(a)){var b=a.url;b&&(this.config=a,this.shelter.show(),this._locatorDefinition.url!==b?this._getDefinitionFromRemote(b).then(c.hitch(this,function(a){a&&(this._locatorDefinition=a,this._locatorDefinition.url=b,this._setSourceItems());this.shelter.hide()})):
(this._setSourceItems(),this.shelter.hide()))}},isValidConfig:function(){var a=this.getConfig();return a.url&&a.name&&a.singleLineFieldName?!0:!1},showValidationTip:function(){this._showValidationErrorTip(this.locatorUrl);this._showValidationErrorTip(this.locatorName)},getConfig:function(){return{url:this.locatorUrl.get("value"),name:d.stripHTML(this.locatorName.get("value")),singleLineFieldName:this.singleLineFieldName,placeholder:d.stripHTML(this.placeholder.get("value")),countryCode:d.stripHTML(this.countryCode.get("value")),
maxResults:this.maxResults.get("value"),searchInCurrentMapExtent:this.searchInCurrentMapExtent.checked,type:"locator"}},_onLocatorNameBlur:function(){this.locatorName.set("value",d.stripHTML(this.locatorName.get("value")))},_onPlaceholderBlur:function(){this.placeholder.set("value",d.stripHTML(this.placeholder.get("value")))},_onCountryCodeBlur:function(){this.countryCode.set("value",d.stripHTML(this.countryCode.get("value")))},_setSourceItems:function(){var a=this.config;a.url&&(this.locatorUrl.set("value",
a.url),this._processCountryCodeRow(a.url));a.name&&this.locatorName.set("value",d.stripHTML(a.name));a.singleLineFieldName&&(this.singleLineFieldName=a.singleLineFieldName);a.placeholder&&this.placeholder.set("value",d.stripHTML(a.placeholder));a.countryCode&&this.countryCode.set("value",d.stripHTML(a.countryCode));(this._suggestible=this._locatorDefinition&&this._locatorDefinition.capabilities&&-1<this._locatorDefinition.capabilities.indexOf("Suggest"))?this._hideSuggestibleTips():this._showSuggestibleTips();
this.searchInCurrentMapExtent.setValue(!!a.searchInCurrentMapExtent);this.maxResults.set("value",a.maxResults||6)},_isEsriLocator:function(a){this._esriLocatorRegExp.lastIndex=0;return this._esriLocatorRegExp.test(a)},_getDefinitionFromRemote:function(a){var b=new m;this._isEsriLocator(a)?b.resolve({singleLineAddressField:{name:"SingleLine",type:"esriFieldTypeString",alias:"Single Line Input",required:!1,length:200,localizedNames:{},recognizedNames:{}},capabilities:"Geocode,ReverseGeocode,Suggest"}):
(a=h({url:a,content:{f:"json"},handleAs:"json",callbackParamName:"callback"}),this.own(a),a.then(c.hitch(this,function(a){b.resolve(a)}),c.hitch(this,function(a){console.error(a);b.resolve(null)})));return b.promise},_onSetLocatorUrlClick:function(){this._clickSet=!0;this._openServiceChooser()},_openLocatorChooser:function(){this._clickSet=!1;this._openServiceChooser()},_openServiceChooser:function(){this.serviceChooserContent=new r({url:this.locatorUrl.get("value")||""});this.shelter=new t({hidden:!0});
this.geocoderPopup=new s({titleLabel:this.nls.setGeocoderURL,autoHeight:!0,content:this.serviceChooserContent.domNode,container:window.jimuConfig.layoutId,width:640});this.shelter.placeAt(this.geocoderPopup.domNode);e.setStyle(this.serviceChooserContent.domNode,"width","580px");e.addClass(this.serviceChooserContent.domNode,"override-geocode-service-chooser-content");this.serviceChooserContent.own(f(this.serviceChooserContent,"validate-click",c.hitch(this,function(){e.removeClass(this.serviceChooserContent.domNode,
"override-geocode-service-chooser-content")})));this.serviceChooserContent.own(f(this.serviceChooserContent,"ok",c.hitch(this,"_onSelectLocatorUrlOk")));this.serviceChooserContent.own(f(this.serviceChooserContent,"cancel",c.hitch(this,"_onSelectLocatorUrlCancel")))},_onSelectLocatorUrlOk:function(a){a&&(a[0]&&a[0].url&&this.domNode)&&(this.shelter.show(),h({url:a[0].url,content:{f:"json"},handleAs:"json",callbackParamName:"callback"}).then(c.hitch(this,function(b){this.shelter.hide();b&&b.singleLineAddressField&&
b.singleLineAddressField.name?(this.locatorUrl.set("value",a[0].url),this.locatorName.get("value")||this.locatorName.set("value",u.getGeocoderName(a[0].url)),this.singleLineFieldName=b.singleLineAddressField.name,this._processCountryCodeRow(a[0].url),this._locatorDefinition=b,this._locatorDefinition.url=a[0].url,(this._suggestible=b.capabilities&&-1<this._locatorDefinition.capabilities.indexOf("Suggest"))?this._hideSuggestibleTips():this._showSuggestibleTips(),this._clickSet?this.emit("reselect-locator-url-ok",
this.getConfig()):this.emit("select-locator-url-ok",this.getConfig()),this.geocoderPopup&&(this.geocoderPopup.close(),this.geocoderPopup=null)):new g({message:this.nls.locatorWarning})}),c.hitch(this,function(a){console.error(a);this.shelter.hide();new g({message:this.nls.invalidUrlTip})})))},_onSelectLocatorUrlCancel:function(){this.geocoderPopup&&(this.geocoderPopup.close(),this.geocoderPopup=null,this.emit("select-locator-url-cancel"))},_processCountryCodeRow:function(a){this._isEsriLocator(a)?
(this.countryCode.set("value",""),e.removeClass(this.countryCodeRow,"hide-country-code-row")):e.addClass(this.countryCodeRow,"hide-country-code-row")},_showSuggestibleTips:function(){e.addClass(this.tipsNode,"source-tips-show")},_hideSuggestibleTips:function(){e.removeClass(this.tipsNode,"source-tips-show")},_showValidationErrorTip:function(a){if(!a.validate()&&a.domNode&&a.focusNode){var b=a.get("disabled");b&&a.set("disabled",!1);a.focusNode.focus();setTimeout(c.hitch(this,function(){a.focusNode.blur();
b&&a.set("disabled",!0);a=null}),100)}}})});