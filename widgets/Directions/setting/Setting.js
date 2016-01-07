// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See http://js.arcgis.com/3.15/esri/copyright.txt and http://www.arcgis.com/apps/webappbuilder/copyright.txt for details.
//>>built
require({cache:{"widgets/Directions/setting/_build-generate_module":function(){define(["dojo/text!./Setting.html","dojo/text!./css/style.css","dojo/i18n!./nls/strings"],function(){})},"url:widgets/Directions/setting/Setting.html":'\x3cdiv style\x3d"width:100%;height:auto;"\x3e\r\n\t\x3ctable style\x3d"width:100%;" cellspacing\x3d"0"\x3e\r\n\t\t\x3ccolgroup\x3e\r\n\t\t\t\x3ccol width\x3d"187px" /\x3e\r\n\t\t\t\x3ccol width\x3d"auto" /\x3e\r\n\t\t\x3c/colgroup\x3e\r\n\t\t\x3ctbody\x3e\r\n\t\t\t\x3ctr\x3e\r\n\t\t\t\t\x3ctd\x3e\r\n\t\t\t\t\t\x3cspan class\x3d"jimu-ellipsis"\x3e${nls.routeUrl}\x3c/span\x3e\r\n\t\t\t\t\x3c/td\x3e\r\n\t\t\t\t\x3ctd class\x3d"route-td"\x3e\r\n\t\t\t\t\t\x3cinput data-dojo-attach-point\x3d"routeUrl" data-dojo-type\x3d"jimu/dijit/ServiceURLInput"\r\n\t\t\t\t\tdata-dojo-attach-props\x3d"trim:true" type\x3d"text" style\x3d"width:100%;" placeHolder\x3d"${_routeTaskUrl}" /\x3e\r\n\t\t\t\t\x3c/td\x3e\r\n\t\t\t\x3c/tr\x3e\r\n\t\t\t\x3ctr\x3e\r\n\t\t\t\t\x3ctd\x3e\r\n\t\t\t\t\t\x3cspan class\x3d"jimu-ellipsis"\x3e${nls.locatorUrl}\x3c/span\x3e\r\n\t\t\t\t\x3c/td\x3e\r\n\t\t\t\t\x3ctd class\x3d"locator-td"\x3e\r\n\t\t\t\t\t\x3cinput data-dojo-attach-point\x3d"locatorUrl" data-dojo-type\x3d"jimu/dijit/ServiceURLInput"\r\n\t\t\t\t\tdata-dojo-attach-props\x3d"trim:true" type\x3d"text" style\x3d"width:100%;" placeHolder\x3d"${_locatorUrl}" /\x3e\r\n\t\t\t\t\x3c/td\x3e\r\n\t\t\t\x3c/tr\x3e\r\n\t\t\t\x3ctr\x3e\r\n\t\t\t\t\x3ctd\x3e\r\n\t\t\t\t\t\x3cspan\x3e${nls.travelModesUrl}\x3c/span\x3e\r\n\t\t\t\t\x3c/td\x3e\r\n\t\t\t\t\x3ctd class\x3d"travelmodes-td"\x3e\r\n\t\t\t\t\t\x3cinput data-dojo-attach-point\x3d"travelModesUrl" data-dojo-type\x3d"jimu/dijit/ServiceURLInput"\r\n\t\t\t\t\tdata-dojo-attach-props\x3d"trim:true" type\x3d"text" style\x3d"width:100%;" placeHolder\x3d"${_travelModesUrl}" /\x3e\r\n\t\t\t\t\x3c/td\x3e\r\n\t\t\t\x3c/tr\x3e\r\n\t\t\t\x3ctr\x3e\r\n\t\t\t\t\x3ctd\x3e\r\n\t\t\t\t\t\x3cspan\x3e${nls.trafficLayerUrl}\x3c/span\x3e\r\n\t\t\t\t\x3c/td\x3e\r\n\t\t\t\t\x3ctd class\x3d"trafficlayer-td"\x3e\r\n\t\t\t\t\t\x3cinput data-dojo-attach-point\x3d"trafficLayerUrl" data-dojo-type\x3d"jimu/dijit/ServiceURLInput"\r\n\t\t\t\t\tdata-dojo-attach-props\x3d"trim:true" type\x3d"text" style\x3d"width:100%;" placeHolder\x3d"${_trafficLayerUrl}" /\x3e\r\n\t\t\t\t\x3c/td\x3e\r\n\t\t\t\x3c/tr\x3e\r\n\t\t\x3c/tbody\x3e\r\n\t\x3c/table\x3e\r\n\t\x3cspan style\x3d"margin:10px 0 5px 0;display:inline-block;font-weight:bold;"\x3e${nls.geocoderOptions}\x3c/span\x3e\r\n\t\x3ctable style\x3d"width:100%;" cellspacing\x3d"0"\x3e\r\n\t\t\x3ctbody\x3e\r\n\t\t\t\x3ctr\x3e\r\n\t\t\t\t\x3ctd style\x3d"width:50%;" class\x3d"auto-complete-td" data-dojo-attach-point\x3d"autoCompleteTd"\x3e\r\n\t\t\t\t\t\x3cspan\x3e${nls.autoComplete}\x3c/span\x3e\r\n\t\t\t\t\x3c/td\x3e\r\n\t\t\t\t\x3ctd style\x3d"width:50%;"\x3e\r\n\t\t\t\t\t\x3ctable style\x3d"width:100%;" cellspacing\x3d"0"\x3e\r\n\t\t\t\t\t\t\x3ctbody\x3e\r\n\t\t\t\t\t\t\t\x3ctr\x3e\r\n\t\t\t\t\t\t\t\t\x3ctd style\x3d"width:200px;"\x3e\r\n\t\t\t\t\t\t\t\t\t\x3cspan class\x3d"search-delay"\x3e${nls.searchDelay}\x3c/span\x3e\r\n\t\t\t\t\t\t\t\t\x3c/td\x3e\r\n\t\t\t\t\t\t\t\t\x3ctd style\x3d"width:auto;"\x3e\r\n\t\t\t\t\t\t\t\t\t\x3cinput data-dojo-attach-point\x3d"searchDelay" data-dojo-type\x3d"dijit/form/NumberSpinner" data-dojo-props\x3d\'required:true,value:350,smallDelta:1,largeDelta:10,constraints:{min:10},intermediateChanges:true\' type\x3d"text" style\x3d"width:220px;" /\x3e\r\n\t\t\t\t\t\t\t\t\x3c/td\x3e\r\n\t\t\t\t\t\t\t\x3c/tr\x3e\r\n\t\t\t\t\t\t\x3c/tbody\x3e\r\n\t\t\t\t\t\x3c/table\x3e\r\n\t\t\t\t\x3c/td\x3e\r\n\t\t\t\x3c/tr\x3e\r\n\t\t\t\x3ctr\x3e\r\n\t\t\t\t\x3ctd style\x3d"width:50%;"\x3e\r\n\t\t\t\t\t\x3ctable style\x3d"width:100%;" cellspacing\x3d"0"\x3e\r\n\t\t\t\t\t\t\x3ctbody\x3e\r\n\t\t\t\t\t\t\t\x3ctr\x3e\r\n\t\t\t\t\t\t\t\t\x3ctd style\x3d"width:200px;"\x3e\r\n\t\t\t\t\t\t\t\t\t\x3cspan class\x3d"jimu-ellipsis"\x3e${nls.maxLocations}\x3c/span\x3e\r\n\t\t\t\t\t\t\t\t\x3c/td\x3e\r\n\t\t\t\t\t\t\t\t\x3ctd style\x3d"width:auto;"\x3e\r\n\t\t\t\t\t\t\t\t\t\x3cinput data-dojo-attach-point\x3d"maxLocations" data-dojo-type\x3d"dijit/form/NumberSpinner" data-dojo-props\x3d\'required:true,value:6,smallDelta:1,largeDelta:1,constraints:{min:1},intermediateChanges:true\' type\x3d"text" style\x3d"width:220px;" /\x3e\r\n\t\t\t\t\t\t\t\t\x3c/td\x3e\r\n\t\t\t\t\t\t\t\x3c/tr\x3e\r\n\t\t\t\t\t\t\x3c/tbody\x3e\r\n\t\t\t\t\t\x3c/table\x3e\r\n\t\t\t\t\x3c/td\x3e\r\n\t\t\t\t\x3ctd style\x3d"width:50%;"\x3e\r\n\t\t\t\t\t\x3ctable style\x3d"width:100%;" cellspacing\x3d"0"\x3e\r\n\t\t\t\t\t\t\x3ctbody\x3e\r\n\t\t\t\t\t\t\t\x3ctr\x3e\r\n\t\t\t\t\t\t\t\t\x3ctd style\x3d"width:200px;"\x3e\r\n\t\t\t\t\t\t\t\t\t\x3cspan class\x3d"min-characters jimu-ellipsis"\x3e${nls.minCharacters}\x3c/span\x3e\r\n\t\t\t\t\t\t\t\t\x3c/td\x3e\r\n\t\t\t\t\t\t\t\t\x3ctd style\x3d"width:auto;"\x3e\r\n\t\t\t\t\t\t\t\t\t\x3cinput data-dojo-attach-point\x3d"minCharacters" data-dojo-type\x3d"dijit/form/NumberSpinner" data-dojo-props\x3d\'required:true,value:3,smallDelta:1,largeDelta:1,constraints:{min:3},intermediateChanges:true\' type\x3d"text" style\x3d"width:220px;" /\x3e\r\n\t\t\t\t\t\t\t\t\x3c/td\x3e\r\n\t\t\t\t\t\t\t\x3c/tr\x3e\r\n\t\t\t\t\t\t\x3c/tbody\x3e\r\n\t\t\t\t\t\x3c/table\x3e\r\n\t\t\t\t\x3c/td\x3e\r\n\t\t\t\x3c/tr\x3e\r\n\t\t\t\x3ctr\x3e\r\n\t\t\t\t\x3ctd colspan\x3d"2"\x3e\r\n\t\t\t\t\t\x3ctable style\x3d"width:100%;" cellspacing\x3d"0"\x3e\r\n\t\t\t\t\t\t\x3ctbody\x3e\r\n\t\t\t\t\t\t\t\x3ctr\x3e\r\n\t\t\t\t\t\t\t\t\x3ctd style\x3d"width:200px;"\x3e\r\n\t\t\t\t\t\t\t\t\t\x3cspan\x3e${nls.placeholder}\x3c/span\x3e\r\n\t\t\t\t\t\t\t\t\x3c/td\x3e\r\n\t\t\t\t\t\t\t\t\x3ctd style\x3d"width:auto;"\x3e\r\n\t\t\t\t\t\t\t\t\t\x3cinput data-dojo-attach-point\x3d"placeholder" data-dojo-type\x3d"dijit/form/ValidationTextBox" type\x3d"text" style\x3d"width:220px;" /\x3e\r\n\t\t\t\t\t\t\t\t\x3c/td\x3e\r\n\t\t\t\t\t\t\t\x3c/tr\x3e\r\n\t\t\t\t\t\t\x3c/tbody\x3e\r\n\t\t\t\t\t\x3c/table\x3e\r\n\t\t\t\t\x3c/td\x3e\r\n\t\t\t\x3c/tr\x3e\r\n\t\t\x3c/tbody\x3e\r\n\t\x3c/table\x3e\r\n\t\x3cspan style\x3d"margin:10px 0 5px 0px;display:inline-block;font-weight:bold;"\x3e${nls.routeOptions}\x3c/span\x3e\r\n\t\x3ctable style\x3d"width:100%;" cellspacing\x3d"0"\x3e\r\n\t\t\x3ctbody\x3e\r\n\t\t\t\x3ctr\x3e\r\n\t\t\t\t\x3ctd style\x3d"width:50%;"\x3e\r\n\t\t\t\t\t\x3ctable style\x3d"width:100%;" cellspacing\x3d"0"\x3e\r\n\t\t\t\t\t\t\x3ctbody\x3e\r\n\t\t\t\t\t\t\t\x3ctr\x3e\r\n\t\t\t\t\t\t\t\t\x3ctd style\x3d"width:200px;"\x3e\r\n\t\t\t\t\t\t\t\t\t\x3cspan class\x3d"jimu-ellipsis"\x3e${nls.directionsLanguage}\x3c/span\x3e\r\n\t\t\t\t\t\t\t\t\x3c/td\x3e\r\n\t\t\t\t\t\t\t\t\x3ctd style\x3d"width:auto;"\x3e\r\n\t\t\t\t\t\t\t\t\t\x3cinput data-dojo-attach-point\x3d"directionsLanguage" data-dojo-type\x3d"dijit/form/ValidationTextBox" data-dojo-props\x3d\'required:true\' style\x3d"width:220px;" /\x3e\r\n\t\t\t\t\t\t\t\t\x3c/td\x3e\r\n\t\t\t\t\t\t\t\x3c/tr\x3e\r\n\t\t\t\t\t\t\x3c/tbody\x3e\r\n\t\t\t\t\t\x3c/table\x3e\r\n\t\t\t\t\x3c/td\x3e\r\n\t\t\t\t\x3ctd style\x3d"width:50%;"\x3e\r\n\t\t\t\t\t\x3ctable  style\x3d"width:100%;" cellspacing\x3d"0"\x3e\r\n\t\t\t\t\t\t\x3ctbody\x3e\r\n\t\t\t\t\t\t\t\x3ctr\x3e\r\n\t\t\t\t\t\t\t\t\x3ctd style\x3d"width:200px"\x3e\r\n\t\t\t\t\t\t\t\t\t\x3cspan class\x3d"length-units jimu-ellipsis"\x3e${nls.directionsLengthUnits}\x3c/span\x3e\r\n\t\t\t\t\t\t\t\t\x3c/td\x3e\r\n\t\t\t\t\t\t\t\t\x3ctd style\x3d"width:auto;"\x3e\r\n\t\t\t\t\t\t\t\t\t\x3cselect data-dojo-attach-point\x3d"directionsLengthUnits" data-dojo-type\x3d"dijit/form/Select" style\x3d"width:220px;height:30px;"\x3e\r\n\t\t\t\t\t\t\t\t\t\t\x3coption value\x3d"esriFeet"\x3e${nls.feet}\x3c/option\x3e\r\n\t\t\t\t\t\t\t\t\t\t\x3coption value\x3d"esriKilometers" selected\x3e${nls.kilometers}\x3c/option\x3e\r\n\t\t\t\t\t\t\t\t\t\t\x3coption value\x3d"esriMeters"\x3e${nls.meters}\x3c/option\x3e\r\n\t\t\t\t\t\t\t\t\t\t\x3coption value\x3d"esriMiles"\x3e${nls.miles}\x3c/option\x3e\r\n\t\t\t\t\t\t\t\t\t\t\x3coption value\x3d"esriNauticalMiles"\x3e${nls.nauticalMiles}\x3c/option\x3e\r\n\t\t\t\t\t\t\t\t\t\t\x3coption value\x3d"esriYards"\x3e${nls.yards}\x3c/option\x3e\r\n\t\t\t\t\t\t\t\t\t\x3c/select\x3e\r\n\t\t\t\t\t\t\t\t\x3c/td\x3e\r\n\t\t\t\t\t\t\t\x3c/tr\x3e\r\n\t\t\t\t\t\t\x3c/tbody\x3e\r\n\t\t\t\t\t\x3c/table\x3e\r\n\t\t\t\t\x3c/td\x3e\r\n\t\t\t\x3c/tr\x3e\r\n\t\t\t\x3ctr\x3e\r\n\t\t\t\t\x3ctd style\x3d"width:50%;"\x3e\r\n\t\t\t\t\t\x3ctable style\x3d"width:100%;" cellspacing\x3d"0"\x3e\r\n\t\t\t\t\t\t\x3ctbody\x3e\r\n\t\t\t\t\t\t\t\x3ctr\x3e\r\n\t\t\t\t\t\t\t\t\x3ctd style\x3d"width:200px;"\x3e\r\n\t\t\t\t\t\t\t\t\t\x3cspan class\x3d"jimu-ellipsis"\x3e${nls.directionsOutputType}\x3c/span\x3e\r\n\t\t\t\t\t\t\t\t\x3c/td\x3e\r\n\t\t\t\t\t\t\t\t\x3ctd style\x3d"width:auto;"\x3e\r\n\t\t\t\t\t\t\t\t\t\x3cselect data-dojo-attach-point\x3d"directionsOutputType" data-dojo-type\x3d"dijit/form/Select" style\x3d"width:220px;height:30px;"\x3e\r\n\t\t\t\t\t\t\t\t\t\t\x3coption value\x3d"standard" selected\x3e${nls.standard}\x3c/option\x3e\r\n\t\t\t\t\t\t\t\t\t\t\x3coption value\x3d"complete"\x3e${nls.complete}\x3c/option\x3e\r\n\t\t\t\t\t\t\t\t\t\t\x3coption value\x3d"complete-no-events"\x3e${nls.completeNoEvents}\x3c/option\x3e\r\n\t\t\t\t\t\t\t\t\t\t\x3coption value\x3d"instructions-only"\x3e${nls.instructionsOnly}\x3c/option\x3e\r\n\t\t\t\t\t\t\t\t\t\t\x3coption value\x3d"summary-only"\x3e${nls.summaryOnly}\x3c/option\x3e\r\n\t\t\t\t\t\t\t\t\t\x3c/select\x3e\r\n\t\t\t\t\t\t\t\t\x3c/td\x3e\r\n\t\t\t\t\t\t\t\x3c/tr\x3e\r\n\t\t\t\t\t\t\x3c/tbody\x3e\r\n\t\t\t\t\t\x3c/table\x3e\r\n\t\t\t\t\x3c/td\x3e\r\n\t\t\t\t\x3ctd style\x3d"width:50%;"\x3e\r\n\t\t\t\t\t\x3ctable style\x3d"width:100%;" cellspacing\x3d"0"\x3e\r\n\t\t\t\t\t\t\x3ctbody\x3e\r\n\t\t\t\t\t\t\t\x3ctr\x3e\r\n\t\t\t\t\t\t\t\t\x3ctd style\x3d"width:200px;"\x3e\r\n\t\t\t\t\t\t\t\t\t\x3cspan class\x3d"impedance-attribute jimu-ellipsis"\x3e${nls.impedanceAttribute}\x3c/span\x3e\r\n\t\t\t\t\t\t\t\t\x3c/td\x3e\r\n\t\t\t\t\t\t\t\t\x3ctd style\x3d"width:auto;"\x3e\r\n\t\t\t\t\t\t\t\t\t\x3cinput data-dojo-attach-point\x3d"impedanceAttribute" data-dojo-type\x3d"dijit/form/ValidationTextBox"  style\x3d"width:220px;" /\x3e\r\n\t\t\t\t\t\t\t\t\x3c/td\x3e\r\n\t\t\t\t\t\t\t\x3c/tr\x3e\r\n\t\t\t\t\t\t\x3c/tbody\x3e\r\n\t\t\t\t\t\x3c/table\x3e\r\n\t\t\t\t\x3c/td\x3e\r\n\t\t\t\x3c/tr\x3e\r\n\t\t\x3c/tbody\x3e\r\n\t\x3c/table\x3e\r\n\x3c/div\x3e',
"url:widgets/Directions/setting/css/style.css":".jimu-widget-directions-setting \x3e table \x3e tbody \x3e tr \x3e td{padding:5px 0;}.jimu-widget-directions-setting .route-td{padding-left: 10px;}.jimu-widget-directions-setting .jimu-ellipsis{white-space: normal;}.jimu-rtl .jimu-widget-directions-setting .route-td{padding-left: 0; padding-right: 10px;}.jimu-widget-directions-setting .locator-td{padding-left: 10px;}.jimu-rtl .jimu-widget-directions-setting .locator-td{padding-left: 0; padding-right: 10px;}.jimu-widget-directions-setting .travelmodes-td{padding-left: 10px;}.jimu-rtl .jimu-widget-directions-setting .travelmodes-td{padding-left: 0; padding-right: 10px;}.jimu-widget-directions-setting .trafficlayer-td{padding-left: 10px;}.jimu-rtl .jimu-widget-directions-setting .trafficlayer-td{padding-left: 0; padding-right: 10px;}.jimu-widget-directions-setting .auto-complete-td span{margin-left: 10px;}.jimu-rtl .jimu-widget-directions-setting .auto-complete-td span{margin-left: 0px; margin-right: 10px;}",
"*now":function(d){d(['dojo/i18n!*preload*widgets/Directions/setting/nls/Setting*["ar","cs","da","de","en","el","es","et","fi","fr","he","it","ja","ko","lt","lv","nb","nl","pl","pt-br","pt-pt","ro","ru","sv","th","tr","zh-cn","vi","zh-hk","zh-tw","ROOT"]'])}}});
define("dojo/_base/declare dojo/_base/lang dojo/_base/html dojo/_base/config dojo/Deferred dijit/_WidgetsInTemplateMixin jimu/BaseWidgetSetting jimu/utils jimu/portalUtils jimu/dijit/Message jimu/dijit/CheckBox jimu/dijit/ServiceURLInput dijit/form/NumberSpinner dijit/form/ValidationTextBox dijit/form/Select".split(" "),function(d,c,e,g,f,h,k,l,m,n,p){return d([k,h],{baseClass:"jimu-widget-directions-setting",_serviceUrlInputInvalidClass:"jimu-serviceurl-input-invalid",_routeTaskUrl:"http://route.arcgis.com/arcgis/rest/services/World/Route/NAServer/Route_World",
_locatorUrl:"http://geocode.arcgis.com/arcgis/rest/services/World/GeocodeServer",_travelModesUrl:"http://logistics.arcgis.com/arcgis/rest/services/World/Utilities/GPServer",_trafficLayerUrl:"http://traffic.arcgis.com/arcgis/rest/services/World/Traffic/MapServer",postMixInProperties:function(){this.nls.complete||(this.nls.complete="Complete");this.nls.completeNoEvents||(this.nls.completeNoEvents="Complete No Events");this.nls.instructionsOnly||(this.nls.instructionsOnly="Instructions Only");this.nls.standard||
(this.nls.standard="Standard");this.nls.summaryOnly||(this.nls.summaryOnly="Summary Only");this.nls.travelModesUrl||(this.nls.travelModesUrl="Travel Modes URL")},postCreate:function(){this.inherited(arguments);this.autoComplete=new p;this.autoComplete.placeAt(this.autoCompleteTd,"first");e.addClass(this.autoComplete.domNode,"class","jimu-float-leading");this.portal=m.getPortal(this.appConfig.portalUrl);this.routeUrl.setProcessFunction(c.hitch(this,function(a){var b=!1;a&&a.data&&(b="esriNAServerRouteLayer"===
a.data.layerType);a=this._getHandledUrlFromServiceUrlInput(this.routeUrl);var c=/\/rest\/services\/.+\/NAServer/gi;return b&&c.test(a)}));this.locatorUrl.setProcessFunction(c.hitch(this,function(){var a=this._getHandledUrlFromServiceUrlInput(this.locatorUrl);return/\/rest\/services\/.+\/GeocodeServer/gi.test(a)}));this.travelModesUrl.setProcessFunction(c.hitch(this,function(){var a=this._getHandledUrlFromServiceUrlInput(this.travelModesUrl);return/\/rest\/services\/.+\/GPServer/gi.test(a)}),c.hitch(this,
function(){this.travelModesUrl.get("value")||e.removeClass(this.travelModesUrl.domNode,this._serviceUrlInputInvalidClass)}));this.trafficLayerUrl.setProcessFunction(c.hitch(this,function(){var a=this._getHandledUrlFromServiceUrlInput(this.trafficLayerUrl);return/\/rest\/services\/.+\/MapServer/gi.test(a)}),c.hitch(this,function(){this.trafficLayerUrl.get("value")||e.removeClass(this.trafficLayerUrl.domNode,this._serviceUrlInputInvalidClass)}));this.portal.loadSelfInfo().then(c.hitch(this,function(a){var b=
this._getRouteUrlFromPortalSelf(a);b&&this.routeUrl.set("placeHolder",b);(b=this._getLocatorUrlFromPortalSelf(a))&&this.locatorUrl.set("placeHolder",b);(b=this._getTravelModesUrlFromPortalSelf(a))&&this.travelModesUrl.set("placeHolder",b);(a=this._getTrafficLayerUrlFromPortalSelf(a))&&this.trafficLayerUrl.set("placeHolder",a)}))},_getHandledUrlFromServiceUrlInput:function(a){a=a.get("value");return l.removeSuffixSlashes(a)},startup:function(){this.inherited(arguments);this.setConfig(this.config)},
setConfig:function(a){if(this.config=a){if((a=this.config.geocoderOptions)&&"object"===typeof a)this.autoComplete.setValue(!0===a.autoComplete),this.maxLocations.set("value",a.maxLocations),this.minCharacters.set("value",a.minCharacters),this.searchDelay.set("value",a.searchDelay),(a=a.geocoders)&&0<a.length&&this.placeholder.set("value",a[0].placeholder||"");if((a=this.config.routeOptions)&&"object"===typeof a)this.directionsLanguage.set("value",a.directionsLanguage||g.locale||"en_us"),this.directionsLengthUnits.set("value",
a.directionsLengthUnits),this.directionsOutputType.set("value",a.directionsOutputType),this.impedanceAttribute.set("value",a.impedanceAttribute);this._getRouteTaskUrl().then(c.hitch(this,function(a){this.routeUrl.set("value",a)}));this._getLocatorUrl().then(c.hitch(this,function(a){this.locatorUrl.set("value",a)}));this._getTravelModesUrl().then(c.hitch(this,function(a){this.travelModesUrl.set("value",a)}));this.config.routeTaskUrl||this.placeholder.get("value")||this.placeholder.set("value",this.nls.searchPlaceholder);
this.config.trafficLayerUrl&&this.trafficLayerUrl.set("value",this.config.trafficLayerUrl)}},_getRouteTaskUrl:function(){var a=new f;this.config.routeTaskUrl?a.resolve(this.config.routeTaskUrl):this.portal.loadSelfInfo().then(c.hitch(this,function(b){(b=this._getRouteUrlFromPortalSelf(b))?a.resolve(b):a.resolve(this._routeTaskUrl)}),c.hitch(this,function(b){console.error(b);a.resolve(this._routeTaskUrl)}));return a},_getRouteUrlFromPortalSelf:function(a){var b="";if(a&&a.helperServices&&(a=a.helperServices.route)&&
a.url)b=a.url;return b},_getLocatorUrl:function(){var a=new f,b=this.config.geocoderOptions&&this.config.geocoderOptions.geocoders&&this.config.geocoderOptions.geocoders[0];(b=b&&b.url)?a.resolve(b):this.portal.loadSelfInfo().then(c.hitch(this,function(b){(b=this._getLocatorUrlFromPortalSelf(b))?a.resolve(b):a.resolve(this._locatorUrl)}),c.hitch(this,function(b){console.error(b);a.resolve(this._locatorUrl)}));return a},_getLocatorUrlFromPortalSelf:function(a){var b="";if(a&&a.helperServices&&(a=a.helperServices.geocode)&&
0<a.length&&a[0]&&a[0].url)b=a[0].url;return b},_getTravelModesUrl:function(){var a=new f;this.config.travelModesUrl?a.resolve(this.config.travelModesUrl):this.config.routeTaskUrl?a.resolve(this.config.travelModesUrl):this.portal.loadSelfInfo().then(c.hitch(this,function(b){(b=this._getTravelModesUrlFromPortalSelf(b))?a.resolve(b):a.resolve("")}),c.hitch(this,function(b){console.error(b);a.reject(b)}));return a},_getTravelModesUrlFromPortalSelf:function(a){var b="";if(a&&a.helperServices&&(a=a.helperServices.routingUtilities)&&
a.url)b=a.url;return b},_getTrafficLayerUrlFromPortalSelf:function(a){var b="";if(a&&a.helperServices&&(a=a.helperServices.traffic)&&a.url)b=a.url;return b},getConfig:function(){return"valid"!==this.routeUrl.getStatus()?(this._showValidationErrorTip(this.routeUrl),this._showParametersTip(),!1):"valid"!==this.locatorUrl.getStatus()?(this._showValidationErrorTip(this.locatorUrl),this._showParametersTip(),!1):this.travelModesUrl.get("value")&&"valid"!==this.travelModesUrl.getStatus()?(this._showValidationErrorTip(this.travelModesUrl),
this._showParametersTip(),!1):this.trafficLayerUrl.get("value")&&"valid"!==this.trafficLayerUrl.getStatus()?(this._showValidationErrorTip(this.trafficLayerUrl),this._showParametersTip(),!1):!this.searchDelay.validate()?(this._showValidationErrorTip(this.searchDelay),this._showParametersTip(),!1):!this.maxLocations.validate()?(this._showValidationErrorTip(this.maxLocations),this._showParametersTip(),!1):!this.minCharacters.validate()?(this._showValidationErrorTip(this.minCharacters),this._showParametersTip(),
!1):!this.directionsLanguage.validate()?(this._showValidationErrorTip(this.directionsLanguage),this._showParametersTip(),!1):this.config={routeTaskUrl:this._getHandledUrlFromServiceUrlInput(this.routeUrl),travelModesUrl:this._getHandledUrlFromServiceUrlInput(this.travelModesUrl),trafficLayerUrl:this._getHandledUrlFromServiceUrlInput(this.trafficLayerUrl),routeOptions:{directionsLanguage:this.directionsLanguage.get("value"),directionsLengthUnits:this.directionsLengthUnits.get("value"),directionsOutputType:this.directionsOutputType.get("value"),
impedanceAttribute:this.impedanceAttribute.get("value")},geocoderOptions:{autoComplete:this.autoComplete.getValue(),maxLocations:this.maxLocations.get("value"),minCharacters:this.minCharacters.get("value"),searchDelay:this.searchDelay.get("value"),arcgisGeocoder:!1,geocoders:[{url:this._getHandledUrlFromServiceUrlInput(this.locatorUrl),placeholder:this.placeholder.get("value")}]}}},_showValidationErrorTip:function(a){!a.validate()&&a.domNode&&a.focusNode&&(a.focusNode.focus(),setTimeout(c.hitch(this,
function(){a.focusNode.blur()}),100))},_showParametersTip:function(){new n({message:this.nls.parametersTip})}})});