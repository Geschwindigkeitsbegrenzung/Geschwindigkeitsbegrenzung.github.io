// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See http://js.arcgis.com/3.15/esri/copyright.txt and http://www.arcgis.com/apps/webappbuilder/copyright.txt for details.
//>>built
define("dojo/_base/declare dojo/_base/lang dojo/_base/Color dojo/_base/array dojo/DeferredList dojo/dom-class dojo/dom-construct dojo/dom-style dojo/on jimu/utils esri/geometry/geometryEngine esri/geometry/Polyline esri/graphic esri/layers/FeatureLayer esri/symbols/SimpleMarkerSymbol esri/symbols/SimpleLineSymbol esri/symbols/Font esri/symbols/TextSymbol esri/tasks/query".split(" "),function(A,m,u,r,B,k,n,C,v,D,y,E,w,F,z,s,G,H,I){return A("ClosestInfo",null,{constructor:function(c,a,b){this.tab=c;
this.container=a;this.parent=b;this.graphicsLayer=this.incident=null;this.map=b.map;this.specialFields={};this.dateFields={}},updateForIncident:function(c,a,b){r.forEach(this.tab.tabLayers,m.hitch(this,function(e){if("undefined"!==typeof e.empty){var f=new F(e.url);v(f,"load",m.hitch(this,function(){this.tab.tabLayers=[f];this.processIncident(c,a,b)}))}else this.processIncident(c,a,b)}))},processIncident:function(c,a,b){this.container.innerHTML="";k.add(this.container,"loading");var e=[];this.incident=
c;a=y.buffer(c.geometry,a,this.parent.config.distanceSettings[this.parent.config.distanceUnits]);this.graphicsLayer=b;this.graphicsLayer.clear();var f=this.tab.tabLayers;b=[];for(var g=0;g<f.length;g++){var d=f[g],h=new I;h.returnGeometry=!0;h.geometry=a;h.outFields=this._getFields(d);b.push(d.queryFeatures(h))}(new B(b)).then(m.hitch(this,function(a){for(var b=0;b<a.length;b++){var d=a[b][1],g=this._getFields(f[b]),d=d.features;if(0<d.length){for(var h=0;h<d.length;h++){for(var k=d[h],n={DISTANCE:this._getDistance(c.geometry,
k.geometry)},m=0;m<g.length;m++)n[g[m]]=k.attributes[g[m]];k.attributes=n}d.sort(this._compareDistance);e.push(d[0])}}this._processResults(e)}))},_processResults:function(c){this.container.innerHTML="";k.remove(this.container,"loading");0===c.length&&(this.container.innerHTML=this.parent.nls.noFeaturesFound);var a=n.create("div",{id:"SA_tpc",style:"width:"+220*c.length+"px;"},this.container);k.add(a,"SAT_tabPanelContent");for(var b=this.parent.nls[this.parent.config.distanceUnits],e=0;e<c.length;e++){var f=
e+1,g=c[e],d=g.geometry,h=d;"point"!==d.type&&(h=d.getExtent().getCenter());var g=g.attributes,x;"point"===this.incident.geometry.type&&(x=b+": "+Math.round(100*g.DISTANCE)/100);var d="",l=0,t;for(t in g)"DISTANCE"!==t&&3>l&&(d+=D.sanitizeHTML(this._getFieldValue(t,g[t])+"\x3cbr/\x3e"),l+=1);l=n.create("div",{id:"SA_Feature_"+f},a);k.add(l,"SATcolRec");var p=n.create("div",{},l);k.add(p,"SATcolRecBar");var q=n.create("div",{innerHTML:f},p);k.add(q,"SATcolRecNum");C.set(q,"backgroundColor",this.parent.config.color);
v(q,"click",m.hitch(this,this._zoomToLocation,h));x&&(q=n.create("div",{innerHTML:x},p),k.add(q,"SATcolDistance"));this.parent.config.enableRouting&&(p=n.create("div",{},p),k.add(p,"SATcolDir"),v(p,"click",m.hitch(this,this._routeToIncident,h)));d=n.create("div",{innerHTML:d},l);k.add(d,"SATcolInfo");d=new s(s.STYLE_SOLID,new u.fromString(this.parent.config.color),1);d=new z(z.STYLE_CIRCLE,24,d,new u.fromString(this.parent.config.color));l=new G;l.family="Arial";l.size="12px";f=new H(f,l,"#ffffff");
f.setOffset(0,-4);null===g.OUTSIDE_POLYGON&&(l=new s(s.STYLE_SOLID,new u([0,0,0,1]),1),p=new E(h.spatialReference),q=this.incident.geometry,"point"!==this.incident.geometry.type&&(q=this.incident.geometry.getExtent().getCenter()),p.addPath([h,q]),this.graphicsLayer.add(new w(p,l,{})));this.graphicsLayer.add(new w(h,d,g));this.graphicsLayer.add(new w(h,f,g))}},_getFields:function(c){var a=[];if(this.tab.advStat&&this.tab.advStat.stats&&0<this.tab.advStat.stats.outFields.length)r.forEach(this.tab.advStat.stats.outFields,
function(b){a.push(b.expression)});else{var b;if(c.infoTemplate)b=c.infoTemplate.info.fieldInfos;else if(0<this.parent.map.itemInfo.itemData.operationalLayers.length){var e=this.parent.map.itemInfo.itemData.operationalLayers;b=null;var f=0;a:for(;f<e.length;f++){var g=e[f];if("ArcGISMapServiceLayer"===g.layerType&&"undefined"!==typeof g.layers)for(var d=0;d<g.layers.length;d++){var h=g.layers[d];if(h.id===c.layerId&&h.popupInfo){b=h.popupInfo.fieldInfos;break a}}}b||(b=c.fields)}else b=c.fields;for(e=
0;e<b.length;e++)f=b[e],"undefined"!==typeof f.visible?f.visible&&a.push(f.fieldName):a.push(f.name)}var k={};r.forEach(c.fields,m.hitch(this,function(a){if("esriFieldTypeDate"===a.type||a.domain){if("esriFieldTypeDate"===a.type&&c.infoTemplate)for(var b in c.infoTemplate._fieldsMap)"undefined"!==typeof c.infoTemplate._fieldsMap[b].fieldName&&(c.infoTemplate._fieldsMap[b].fieldName===a.name&&"undefined"!==typeof c.infoTemplate._fieldsMap[b].format.dateFormat)&&(this.dateFields[a.name]=c.infoTemplate._fieldsMap[b].format.dateFormat);
k[a.name]=a}}));this.specialFields=k;return a},_getFieldValue:function(c,a){var b=a;if(this.specialFields[c]){var e=this.specialFields[c];"esriFieldTypeDate"===e.type?"undefined"!==this.dateFields[c]?(e=this._getDateFormat(this.dateFields[c]),b=void 0!==typeof e?(new Date(a)).toLocaleDateString(navigator.language,e):(new Date(a)).toLocaleString()):b=(new Date(a)).toLocaleString():r.some(e.domain.codedValues,function(c){if(c.code===a)return b=c.name,!0})}return b},_getDateFormat:function(c){var a;
switch(c){case "shortDate":a={month:"2-digit",day:"2-digit",year:"numeric"};break;case "shortDateLE":a={day:"2-digit",month:"2-digit",year:"numeric"};break;case "longMonthDayYear":a={month:"long",day:"2-digit",year:"numeric"};break;case "dayShortMonthYear":a={day:"2-digit",month:"short",year:"numeric"};break;case "longDate":a={weekday:"long",month:"long",day:"2-digit",year:"numeric"};break;case "shortDateLongTime":a={month:"2-digit",day:"2-digit",year:"numeric",hour:"numeric",minute:"2-digit",second:"2-digit",
hour12:!0};break;case "shortDateLELongTime":a={day:"2-digit",month:"2-digit",year:"numeric",hour:"numeric",minute:"2-digit",second:"2-digit",hour12:!0};break;case "shortDateShortTime":a={month:"2-digit",day:"2-digit",year:"numeric",hour:"numeric",minute:"2-digit",hour12:!0};break;case "shortDateLEShortTime":a={day:"2-digit",month:"2-digit",year:"numeric",hour:"numeric",minute:"2-digit",hour12:!0};break;case "shortDateShortTime24":a={month:"2-digit",day:"2-digit",year:"numeric",hour:"numeric",minute:"2-digit",
hour12:!1};break;case "shortDateLEShortTime24":a={day:"2-digit",month:"2-digit",year:"numeric",hour:"numeric",minute:"2-digit",hour12:!1};break;case "longMonthYear":a={month:"long",year:"numeric"};break;case "shortMonthYear":a={month:"short",year:"numeric"};break;case "year":a={year:"numeric"}}return a},_getDistance:function(c,a){var b=0,e=this.parent.config.distanceUnits,b=y.distance(c,a,9001);switch(e){case "miles":b*=6.21371E-4;break;case "kilometers":b*=0.0010;break;case "feet":b*=3.28084;break;
case "yards":b*=1.09361;break;case "nauticalMiles":b*=5.39957E-4}return b},_compareDistance:function(c,a){return c.attributes.DISTANCE<a.attributes.DISTANCE?-1:c.attributes.DISTANCE>a.attributes.DISTANCE?1:0},_zoomToLocation:function(c){this.parent.zoomToLocation(c)},_routeToIncident:function(c){this.parent.routeToIncident(c)}})});