// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See http://js.arcgis.com/3.15/esri/copyright.txt and http://www.arcgis.com/apps/webappbuilder/copyright.txt for details.

define("dojo/_base/declare dojo/_base/lang dojo/_base/Color dojo/_base/array dojo/DeferredList dojo/dom-class dojo/dom-construct dojo/dom-style dojo/on esri/geometry/geometryEngine esri/geometry/Polyline esri/graphic esri/layers/FeatureLayer esri/symbols/SimpleMarkerSymbol esri/symbols/SimpleLineSymbol esri/symbols/Font esri/symbols/TextSymbol esri/tasks/query".split(" "),function(z,m,t,p,A,k,n,B,u,x,C,v,D,y,s,E,F,G){return z("ClosestInfo",null,{constructor:function(b,c,a){this.tab=b;this.container=
c;this.parent=a;this.graphicsLayer=this.incident=null;this.map=a.map;this.specialFields={}},updateForIncident:function(b,c,a){p.forEach(this.tab.tabLayers,m.hitch(this,function(f){if("undefined"!==typeof f.empty){var g=new D(f.url);u(g,"load",m.hitch(this,function(){this.tab.tabLayers=[g];this.processIncident(b,c,a)}))}else this.processIncident(b,c,a)}))},processIncident:function(b,c,a){this.container.innerHTML="";k.add(this.container,"loading");var f=[];this.incident=b;c=x.buffer(b.geometry,c,this.parent.config.distanceSettings[this.parent.config.distanceUnits]);
this.graphicsLayer=a;this.graphicsLayer.clear();var g=this.tab.tabLayers;a=[];for(var e=0;e<g.length;e++){var d=g[e],h=new G;h.returnGeometry=!0;h.geometry=c;h.outFields=this._getFields(d);a.push(d.queryFeatures(h))}(new A(a)).then(m.hitch(this,function(a){for(var c=0;c<a.length;c++){var d=a[c][1],e=this._getFields(g[c]),d=d.features;if(0<d.length){for(var h=0;h<d.length;h++){for(var k=d[h],n={DISTANCE:this._getDistance(b.geometry,k.geometry)},m=0;m<e.length;m++)n[e[m]]=k.attributes[e[m]];k.attributes=
n}d.sort(this._compareDistance);f.push(d[0])}}this._processResults(f)}))},_processResults:function(b){this.container.innerHTML="";k.remove(this.container,"loading");0===b.length&&(this.container.innerHTML=this.parent.nls.noFeaturesFound);var c=n.create("div",{id:"tpc",style:"width:"+220*b.length+"px;"},this.container);k.add(c,"IMT_tabPanelContent");for(var a=this.parent.nls[this.parent.config.distanceUnits],f=0;f<b.length;f++){var g=f+1,e=b[f],d=e.geometry,h=d;"point"!==d.type&&(h=d.getExtent().getCenter());
var e=e.attributes,q=a+": "+Math.round(100*e.DISTANCE)/100,d="",l=0,p;for(p in e)"DISTANCE"!==p&&3>l&&(d+=this._getFieldValue(p,e[p])+"\x3cbr/\x3e",l+=1);l=n.create("div",{id:"Feature_"+g},c);k.add(l,"IMTcolRec");var r=n.create("div",{},l);k.add(r,"IMTcolRecBar");var w=n.create("div",{innerHTML:g},r);k.add(w,"IMTcolRecNum");B.set(w,"backgroundColor",this.parent.config.color);u(w,"click",m.hitch(this,this._zoomToLocation,h));q=n.create("div",{innerHTML:q},r);k.add(q,"IMTcolDistance");this.parent.config.enableRouting&&
(q=n.create("div",{},r),k.add(q,"IMTcolDir"),u(q,"click",m.hitch(this,this._routeToIncident,h)));d=n.create("div",{innerHTML:d},l);k.add(d,"IMTcolInfo");d=new s(s.STYLE_SOLID,new t.fromString(this.parent.config.color),1);d=new y(y.STYLE_CIRCLE,24,d,new t.fromString(this.parent.config.color));l=new E;l.family="Arial";l.size="12px";g=new F(g,l,"#ffffff");g.setOffset(0,-4);null===e.OUTSIDE_POLYGON&&(l=new s(s.STYLE_SOLID,new t([0,0,0,1]),1),q=new C(h.spatialReference),r=this.incident.geometry,"point"!==
this.incident.geometry.type&&(r=this.incident.geometry.getExtent().getCenter()),q.addPath([h,r]),this.graphicsLayer.add(new v(q,l,{})));this.graphicsLayer.add(new v(h,d,e));this.graphicsLayer.add(new v(h,g,e))}},_getFields:function(b){var c=[];if(this.tab.advConfig&&this.tab.advConfig.fields&&0<this.tab.advConfig.fields.length)p.forEach(this.tab.advConfig.fields,function(a){c.push(a.expression)});else{var a;a=b.infoTemplate?b.infoTemplate.info.fieldInfos:b.fields;for(var f=0;f<a.length;f++){var g=
a[f];"undefined"!==typeof g.visible?g.visible&&c.push(g.fieldName):c.push(g.name)}}var e={};p.forEach(b.fields,function(a){if("esriFieldTypeDate"===a.type||a.domain)e[a.name]=a});this.specialFields=e;return c},_getFieldValue:function(b,c){var a=c;if(this.specialFields[b]){var f=this.specialFields[b];"esriFieldTypeDate"===f.type?a=(new Date(c)).toLocaleString():p.some(f.domain.codedValues,function(b){if(b.code===c)return a=b.name,!0})}return a},_getDistance:function(b,c){var a=0,f=this.parent.config.distanceUnits,
a=x.distance(b,c,9001);switch(f){case "miles":a*=6.21371E-4;break;case "kilometers":a*=0.0010;break;case "feet":a*=3.28084;break;case "yards":a*=1.09361;break;case "nauticalMiles":a*=5.39957E-4}return a},_compareDistance:function(b,c){return b.attributes.DISTANCE<c.attributes.DISTANCE?-1:b.attributes.DISTANCE>c.attributes.DISTANCE?1:0},_zoomToLocation:function(b){this.parent.zoomToLocation(b)},_routeToIncident:function(b){this.parent.routeToIncident(b)}})});