// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See http://js.arcgis.com/3.15/esri/copyright.txt and http://www.arcgis.com/apps/webappbuilder/copyright.txt for details.

define("dojo/_base/declare dojo/_base/lang dojo/_base/Color dojo/_base/array dojo/DeferredList dojo/dom-class dojo/dom-construct dojo/dom-style dojo/on esri/geometry/geometryEngine esri/graphic esri/layers/FeatureLayer esri/symbols/SimpleMarkerSymbol esri/symbols/SimpleLineSymbol esri/symbols/Font esri/symbols/TextSymbol esri/tasks/query jimu/CSVUtils jimu/utils".split(" "),function(y,l,u,n,z,h,m,A,r,B,v,C,w,x,D,E,F,G,H){return y("ProximityInfo",null,{constructor:function(c,b,a){this.tab=c;this.container=
b;this.parent=a;this.graphicsLayer=this.incident=null;this.specialFields={};this.dateFields={}},updateForIncident:function(c,b,a){n.forEach(this.tab.tabLayers,l.hitch(this,function(d){if("undefined"!==typeof d.empty){var f=new C(d.url);r(f,"load",l.hitch(this,function(){this.tab.tabLayers=[f];this.processIncident(c,b,a)}))}else this.processIncident(c,b,a)}))},processIncident:function(c,b,a){this.container.innerHTML="";h.add(this.container,"loading");var d=[];this.incident=c;this.graphicsLayer=a;var f=
this.tab.tabLayers;a=[];for(var g=0;g<f.length;g++){var e=f[g],k=new F;k.returnGeometry=!0;k.geometry=b.geometry;k.outFields="true"===this.parent.config.csvAllFields||!0===this.parent.config.csvAllFields?["*"]:this._getFields(e);a.push(e.queryFeatures(k))}(new z(a)).then(l.hitch(this,function(a){for(var b=0;b<a.length;b++)for(var e=a[b][1],g=this._getFields(f[b]),e=e.features,k=0;k<e.length;k++){for(var h=e[k],m={DISTANCE:this._getDistance(c.geometry,h.geometry)},l=0;l<g.length;l++)m[g[l]]=h.attributes[g[l]];
h.attributes=m;d.push(h)}this._processResults(d)}))},_processResults:function(c){this.container.innerHTML="";h.remove(this.container,"loading");this.graphicsLayer.clear();if(0===c.length)this.container.innerHTML=this.parent.nls.noFeaturesFound;else{c.sort(this._compareDistance);var b=m.create("div",{id:"SA_tpc",style:"width:"+220*(c.length+1)+"px;"},this.container);h.add(b,"SAT_tabPanelContent");var a=m.create("div",{},b);h.add(a,"SATcol");a=m.create("div",{innerHTML:this.parent.nls.downloadCSV},
a);h.add(a,"btnExport");r(a,"click",l.hitch(this,this._exportToCSV,c));for(var a=this.parent.nls[this.parent.config.distanceUnits],d=0;d<c.length;d++){var f=d+1,g=c[d],e=g.geometry,k=e;"point"!==e.type&&(k=e.getExtent().getCenter());var g=g.attributes,t;"point"===this.incident.geometry.type&&(t=a+": "+Math.round(100*g.DISTANCE)/100);var e="",p=0,s;for(s in g)"DISTANCE"!==s&&3>p&&(e+=H.sanitizeHTML(this._getFieldValue(s,g[s])+"\x3cbr/\x3e"),p+=1);p=m.create("div",{id:"SA_Feature_"+f},b);h.add(p,"SATcolRec");
var q=m.create("div",{},p);h.add(q,"SATcolRecBar");var n=m.create("div",{innerHTML:f},q);h.add(n,"SATcolRecNum");A.set(n,"backgroundColor",this.parent.config.color);r(n,"click",l.hitch(this,this._zoomToLocation,k));t&&(n=m.create("div",{innerHTML:t},q),h.add(n,"SATcolDistance"));this.parent.config.enableRouting&&(q=m.create("div",{},q),h.add(q,"SATcolDir"),r(q,"click",l.hitch(this,this._routeToIncident,k)));e=m.create("div",{innerHTML:e},p);h.add(e,"SATcolInfo");e=new x(x.STYLE_SOLID,new u.fromString(this.parent.config.color),
1);e=new w(w.STYLE_CIRCLE,24,e,new u.fromString(this.parent.config.color));p=new D;p.family="Arial";p.size="12px";f=new E(f,p,"#ffffff");f.setOffset(0,-4);this.graphicsLayer.add(new v(k,e,g));this.graphicsLayer.add(new v(k,f,g))}}},_exportToCSV:function(c){if(0===c.length)return!1;var b=this.tab.tabLayers[0].id,a=[],d=[];n.forEach(c,function(b){a.push(b.attributes)});for(var f in a[0])d.push(f);G.exportCSV(b,a,d)},_getFields:function(c){var b=[];if(this.tab.advStat&&this.tab.advStat.stats&&0<this.tab.advStat.stats.outFields.length)n.forEach(this.tab.advStat.stats.outFields,
function(a){b.push(a.expression)});else{var a;if(c.infoTemplate)a=c.infoTemplate.info.fieldInfos;else if(0<this.parent.map.itemInfo.itemData.operationalLayers.length){var d=this.parent.map.itemInfo.itemData.operationalLayers;a=null;var f=0;a:for(;f<d.length;f++){var g=d[f];if("ArcGISMapServiceLayer"===g.layerType&&"undefined"!==typeof g.layers)for(var e=0;e<g.layers.length;e++){var k=g.layers[e];if(k.popupInfo&&k.id===c.layerId){a=k.popupInfo.fieldInfos;break a}}}a||(a=c.fields)}else a=c.fields;for(d=
0;d<a.length;d++)f=a[d],"undefined"!==typeof f.visible?f.visible&&b.push(f.fieldName):b.push(f.name)}var h={};n.forEach(c.fields,l.hitch(this,function(a){if("esriFieldTypeDate"===a.type||a.domain){if("esriFieldTypeDate"===a.type&&c.infoTemplate)for(var b in c.infoTemplate._fieldsMap)"undefined"!==typeof c.infoTemplate._fieldsMap[b].fieldName&&(c.infoTemplate._fieldsMap[b].fieldName===a.name&&"undefined"!==typeof c.infoTemplate._fieldsMap[b].format.dateFormat)&&(this.dateFields[a.name]=c.infoTemplate._fieldsMap[b].format.dateFormat);
h[a.name]=a}}));this.specialFields=h;return b},_getFieldValue:function(c,b){var a=b;if(this.specialFields[c]){var d=this.specialFields[c];"esriFieldTypeDate"===d.type?"undefined"!==this.dateFields[c]?(d=this._getDateFormat(this.dateFields[c]),a=void 0!==typeof d?(new Date(b)).toLocaleDateString(navigator.language,d):(new Date(b)).toLocaleString()):a=(new Date(b)).toLocaleString():n.some(d.domain.codedValues,function(c){if(c.code===b)return a=c.name,!0})}return a},_getDateFormat:function(c){var b;
switch(c){case "shortDate":b={month:"2-digit",day:"2-digit",year:"numeric"};break;case "shortDateLE":b={day:"2-digit",month:"2-digit",year:"numeric"};break;case "longMonthDayYear":b={month:"long",day:"2-digit",year:"numeric"};break;case "dayShortMonthYear":b={day:"2-digit",month:"short",year:"numeric"};break;case "longDate":b={weekday:"long",month:"long",day:"2-digit",year:"numeric"};break;case "shortDateLongTime":b={month:"2-digit",day:"2-digit",year:"numeric",hour:"numeric",minute:"2-digit",second:"2-digit",
hour12:!0};break;case "shortDateLELongTime":b={day:"2-digit",month:"2-digit",year:"numeric",hour:"numeric",minute:"2-digit",second:"2-digit",hour12:!0};break;case "shortDateShortTime":b={month:"2-digit",day:"2-digit",year:"numeric",hour:"numeric",minute:"2-digit",hour12:!0};break;case "shortDateLEShortTime":b={day:"2-digit",month:"2-digit",year:"numeric",hour:"numeric",minute:"2-digit",hour12:!0};break;case "shortDateShortTime24":b={month:"2-digit",day:"2-digit",year:"numeric",hour:"numeric",minute:"2-digit",
hour12:!1};break;case "shortDateLEShortTime24":b={day:"2-digit",month:"2-digit",year:"numeric",hour:"numeric",minute:"2-digit",hour12:!1};break;case "longMonthYear":b={month:"long",year:"numeric"};break;case "shortMonthYear":b={month:"short",year:"numeric"};break;case "year":b={year:"numeric"}}return b},_getDistance:function(c,b){var a=0,d=this.parent.config.distanceUnits,a=B.distance(c,b,9001);switch(d){case "miles":a*=6.21371E-4;break;case "kilometers":a*=0.0010;break;case "feet":a*=3.28084;break;
case "yards":a*=1.09361;break;case "nauticalMiles":a*=5.39957E-4}return a},_compareDistance:function(c,b){return c.attributes.DISTANCE<b.attributes.DISTANCE?-1:c.attributes.DISTANCE>b.attributes.DISTANCE?1:0},_zoomToLocation:function(c){this.parent.zoomToLocation(c)},_routeToIncident:function(c){this.parent.routeToIncident(c)}})});