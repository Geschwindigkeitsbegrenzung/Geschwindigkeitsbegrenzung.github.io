// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See http://js.arcgis.com/3.15/esri/copyright.txt and http://www.arcgis.com/apps/webappbuilder/copyright.txt for details.
//>>built
define("dojo/_base/declare dojo/_base/lang dojo/_base/Color dojo/_base/array dojo/DeferredList dojo/dom-class dojo/dom-construct dojo/dom-style dojo/on esri/geometry/geometryEngine esri/graphic esri/layers/FeatureLayer esri/symbols/SimpleMarkerSymbol esri/symbols/SimpleLineSymbol esri/symbols/Font esri/symbols/TextSymbol esri/tasks/query jimu/CSVUtils".split(" "),function(y,m,u,p,z,h,l,A,r,B,v,C,w,x,D,E,F,G){return y("ProximityInfo",null,{constructor:function(b,c,a){this.tab=b;this.container=c;this.parent=
a;this.graphicsLayer=this.incident=null;this.specialFields={}},updateForIncident:function(b,c,a){p.forEach(this.tab.tabLayers,m.hitch(this,function(d){if("undefined"!==typeof d.empty){var f=new C(d.url);r(f,"load",m.hitch(this,function(){this.tab.tabLayers=[f];this.processIncident(b,c,a)}))}else this.processIncident(b,c,a)}))},processIncident:function(b,c,a){this.container.innerHTML="";h.add(this.container,"loading");var d=[];this.incident=b;this.graphicsLayer=a;var f=this.tab.tabLayers;a=[];for(var g=
0;g<f.length;g++){var e=f[g],k=new F;k.returnGeometry=!0;k.geometry=c.geometry;k.outFields=this._getFields(e);a.push(e.queryFeatures(k))}(new z(a)).then(m.hitch(this,function(a){for(var c=0;c<a.length;c++)for(var e=a[c][1],g=this._getFields(f[c]),e=e.features,h=0;h<e.length;h++){for(var k=e[h],l={DISTANCE:this._getDistance(b.geometry,k.geometry)},m=0;m<g.length;m++)l[g[m]]=k.attributes[g[m]];k.attributes=l;d.push(k)}this._processResults(d)}))},_processResults:function(b){this.container.innerHTML=
"";h.remove(this.container,"loading");this.graphicsLayer.clear();if(0===b.length)this.container.innerHTML=this.parent.nls.noFeaturesFound;else{b.sort(this._compareDistance);var c=l.create("div",{id:"tpc",style:"width:"+220*(b.length+1)+"px;"},this.container);h.add(c,"IMT_tabPanelContent");var a=l.create("div",{},c);h.add(a,"IMTcol");a=l.create("div",{innerHTML:this.parent.nls.downloadCSV},a);h.add(a,"btnExport");r(a,"click",m.hitch(this,this._exportToCSV,b));for(var a=this.parent.nls[this.parent.config.distanceUnits],
d=0;d<b.length;d++){var f=d+1,g=b[d],e=g.geometry,k=e;"point"!==e.type&&(k=e.getExtent().getCenter());var g=g.attributes,q=a+": "+Math.round(100*g.DISTANCE)/100,e="",n=0,p;for(p in g)"DISTANCE"!==p&&3>n&&(e+=this._getFieldValue(p,g[p])+"\x3cbr/\x3e",n+=1);n=l.create("div",{id:"Feature_"+f},c);h.add(n,"IMTcolRec");var s=l.create("div",{},n);h.add(s,"IMTcolRecBar");var t=l.create("div",{innerHTML:f},s);h.add(t,"IMTcolRecNum");A.set(t,"backgroundColor",this.parent.config.color);r(t,"click",m.hitch(this,
this._zoomToLocation,k));q=l.create("div",{innerHTML:q},s);h.add(q,"IMTcolDistance");this.parent.config.enableRouting&&(q=l.create("div",{},s),h.add(q,"IMTcolDir"),r(q,"click",m.hitch(this,this._routeToIncident,k)));e=l.create("div",{innerHTML:e},n);h.add(e,"IMTcolInfo");e=new x(x.STYLE_SOLID,new u.fromString(this.parent.config.color),1);e=new w(w.STYLE_CIRCLE,24,e,new u.fromString(this.parent.config.color));n=new D;n.family="Arial";n.size="12px";f=new E(f,n,"#ffffff");f.setOffset(0,-4);this.graphicsLayer.add(new v(k,
e,g));this.graphicsLayer.add(new v(k,f,g))}}},_exportToCSV:function(b){if(0===b.length)return!1;var c=this.tab.layers,a=[],d=[];p.forEach(b,function(b){a.push(b.attributes)});for(var f in a[0])d.push(f);G.exportCSV(c,a,d)},_getFields:function(b){var c=[];if(this.tab.advConfig&&this.tab.advConfig.fields&&0<this.tab.advConfig.fields.length)p.forEach(this.tab.advConfig.fields,function(a){c.push(a.expression)});else{var a;a=b.infoTemplate?b.infoTemplate.info.fieldInfos:b.fields;for(var d=0;d<a.length;d++){var f=
a[d];"undefined"!==typeof f.visible?f.visible&&c.push(f.fieldName):c.push(f.name)}}var g={};p.forEach(b.fields,function(a){if("esriFieldTypeDate"===a.type||a.domain)g[a.name]=a});this.specialFields=g;return c},_getFieldValue:function(b,c){var a=c;if(this.specialFields[b]){var d=this.specialFields[b];"esriFieldTypeDate"===d.type?a=(new Date(c)).toLocaleString():p.some(d.domain.codedValues,function(b){if(b.code===c)return a=b.name,!0})}return a},_getDistance:function(b,c){var a=0,d=this.parent.config.distanceUnits,
a=B.distance(b,c,9001);switch(d){case "miles":a*=6.21371E-4;break;case "kilometers":a*=0.0010;break;case "feet":a*=3.28084;break;case "yards":a*=1.09361;break;case "nauticalMiles":a*=5.39957E-4}return a},_compareDistance:function(b,c){return b.attributes.DISTANCE<c.attributes.DISTANCE?-1:b.attributes.DISTANCE>c.attributes.DISTANCE?1:0},_zoomToLocation:function(b){this.parent.zoomToLocation(b)},_routeToIncident:function(b){this.parent.routeToIncident(b)}})});