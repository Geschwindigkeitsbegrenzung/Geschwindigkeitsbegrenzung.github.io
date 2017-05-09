// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See http://js.arcgis.com/3.15/esri/copyright.txt and http://www.arcgis.com/apps/webappbuilder/copyright.txt for details.

define("dojo/_base/declare dojo/_base/html dijit/_WidgetBase jimu/dijit/Message dgrid/OnDemandGrid dgrid/Selection dgrid/extensions/ColumnHider dgrid/extensions/ColumnResizer dgrid/extensions/ColumnReorder dojo/Deferred dojo/Evented dojo/store/Memory esri/config esri/lang esri/tasks/RelationParameters esri/layers/GraphicsLayer esri/layers/FeatureLayer esri/tasks/QueryTask esri/tasks/query esri/tasks/ProjectParameters esri/graphic esri/geometry/Point esri/geometry/Multipoint esri/geometry/Polyline esri/geometry/Polygon esri/symbols/SimpleLineSymbol esri/symbols/SimpleFillSymbol esri/Color esri/geometry/normalizeUtils dojo/_base/lang dojo/on dojo/_base/array jimu/dijit/LoadingIndicator jimu/CSVUtils ./utils dojo/query".split(" "),
function(u,l,D,E,F,G,H,I,J,q,K,v,s,r,w,L,x,y,n,M,N,O,z,P,Q,A,B,C,R,e,p,m,S,T,t){return u([D,K],{baseClass:"jimu-widget-attributetable-feature-table",_defaultFeatureCount:2E3,_defaultBatchCount:25,_batchCount:0,_filterObj:null,_currentDef:null,_requestStatus:"initial",map:null,matchingMap:!1,layerInfo:null,configedInfo:null,parentWidget:null,noGridHeight:0,footerHeight:25,layer:null,loading:null,grid:null,footer:null,selectedRowsLabel:null,selectionRows:null,griaphicLayer:null,nls:null,actived:!1,
_onlyShowSelected:!1,constructor:function(a){a=a||{};this.set("map",a.map||null);this.set("matchingMap",!!a.matchingMap);this.set("layerInfo",a.layerInfo||null);this.set("layer",a.layer||null);this.set("configedInfo",a.configedInfo||null);this.parentWidget=a.parentWidget||null;this.noGridHeight=a.noGridHeight||0},postCreate:function(){this.selectionRows=[];this.loading=new S;this.loading.placeAt(this.domNode);this.get("map")&&this.own(p(this.map,"extent-change",e.hitch(this,"_onExtentChange")))},
startup:function(){this.map&&(this.graphicsLayer=new L,this.map.addLayer(this.graphicsLayer))},setLayerDefinition:function(a){this._layerDefinition=a},getLayerDefinition:function(){return e.clone(this._layerDefinition)},getFilterObj:function(){return this._filterObj},setFilterObj:function(a){this._filterObj=a},cancelThread:function(){"fulfilled"!==this._requestStatus&&this._currentDef&&(this._currentDef.cancel({canceledBySelf:!0}),this._requestStatus="canceled")},isCanceled:function(){return"canceled"===
this._requestStatus},startQuery:function(){this.cancelThread();this._requestStatus="processing";this.loading.show();this._getLayerObject().then(e.hitch(this,function(a){this.domNode&&(this.layer=a,(a=!this.layerInfo.isTable&&this.matchingMap&&this.map.extent||null)&&a.spatialReference&&a.spatialReference.isWebMercator()?(this._currentDef=R.normalizeCentralMeridian([a],null,e.hitch(this,function(a){return a[0]}))).then(e.hitch(this,function(a){this._doQuery(a)}),e.hitch(this,function(a){console.error(a);
this.loading.hide()})):this._doQuery(a))}))},getSelectedRows:function(){return this.selectionRows},zoomTo:function(){this._zoomToSelected()},toggleSelectedRecords:function(){this._onlyShowSelected?this.showAllSelectedRecords():this.showSelectedRecords();this._onlyShowSelected=!this._onlyShowSelected},showSelectedRecords:function(){var a=this.layer.objectIdField;this.grid._clickShowSelectedRecords=!0;var b=this._getSelectedIds();0<b.length&&this.grid&&(this.grid.store instanceof v?this.grid.set("query",
e.hitch(this,function(c){return"number"===typeof c&&-1<b.indexOf(c)||-1<b.indexOf(c[a])?!0:!1})):this.grid.set("query",function(){return b}))},showAllSelectedRecords:function(){this.grid.set("query",{});m.forEach(this.selectionRows,e.hitch(this,function(a){this.grid.select(a)}));this.setSelectedNumber()},clearSelection:function(){this.grid.clearSelection();this.selectionRows=[];this.grid.set("query",{});this.graphicsLayer.clear();this.setSelectedNumber();this._onlyShowSelected=!1;this.emit("clear-selection")},
exportToCSV:function(a){if(this.layerInfo&&this.layer){var b=null,b=this.layer.objectIdField,c=this.getSelectedRowsData(),b=this._getOutFieldsFromLayerInfos(b),b=this._processExecuteFields(this.layer.fields,b),d={};c&&0<c.length?d.datas=c:this.grid.store instanceof v&&(c=this.grid.store.data,d.datas=c);d.fromClient=!1;d.outFields=b;d.formatNumber=!1;d.formatDate=!0;d.formatCodedValue=!0;return T.exportCSVFromFeatureLayer(a,this.layer,d)}},toggleColumns:function(){this.grid&&this.grid._toggleColumnHiderMenu()},
changeHeight:function(a){this.grid&&0<=a-this.noGridHeight-this.footerHeight&&l.setStyle(this.grid.domNode,"height",a-this.noGridHeight-this.footerHeight+"px")},showGraphic:function(){this.graphicsLayer&&this.graphicsLayer.show()},hideGraphic:function(){this.graphicsLayer&&this.graphicsLayer.hide()},isSupportQueryToServer:function(){var a=this.layer&&"esri.layers.CSVLayer"===this.layer.declaredClass,b=this.layer&&"esri.layers.StreamLayer"===this.layer.declaredClass;return this.layer&&this.layer.url&&
this.configedInfo.layer.url&&!a&&!b},isSupportQueryOnClient:function(){var a=this.layer&&"esri.layers.CSVLayer"===this.layer.declaredClass,b=this.layer&&"esri.layers.StreamLayer"===this.layer.declaredClass;return!(this.layer&&this.layer.url&&this.configedInfo.layer.url)||a||b},destroy:function(){this.layer=this.parentWidget=this.configedInfo=this.layerInfo=null;this.graphicsLayer&&this.graphicsLayer.clear&&(this.graphicsLayer.clear(),this.map.removeLayer(this.graphicsLayer));this.grid&&this.grid.destroy();
this.nls=this.map=null;this._currentDef&&!this._currentDef.isCanceled()&&this._currentDef.cancel({canceledBySelf:!0});this.inherited(arguments)},_getLayerObject:function(){return(this._currentDef=this.layerInfo.getLayerObject()).then(e.hitch(this,function(a){var b=new q;"esri.layers.ArcGISImageServiceLayer"===a.declaredClass||"esri.layers.ArcGISImageServiceVectorLayer"===a.declaredClass?(a=new x(a.url),this.own(p(a,"load",e.hitch(this,function(a){b.resolve(a.layer)})))):b.resolve(a);return b}))},
_doQuery:function(a){if(this.layer){var b=this.getSelectedRows(),c=this.layer.objectIdField;this.isSupportQueryToServer()?this._queryToServer(a,c,b):this.isSupportQueryOnClient()&&this._queryOnClient(a,c,b)}},_queryOnClient:function(a,b,c){var d={};d.features="esri.layers.StreamLayer"===this.layer.declaredClass?this.layer.getLatestObservations():this.layer.graphics;var g=this.layer.fields,f=this.configedInfo.layer.fields;d.fields=f?m.filter(f,e.hitch(this,function(a){r.isDefined(a.show)||(a.show=
!0);a.name===b&&"esriFieldTypeOID"===a.type&&(a._pk=!0);for(var c=0,d=g.length;c<d;c++)g[c].name===a.name&&!a.type&&(a.type=g[c].type);return a.show||a._pk})):m.filter(g,e.hitch(this,function(a){r.isDefined(a.show)||(a.show=!0);a.name===b&&"esriFieldTypeOID"===a.type&&(a._pk=!0);return a.show||a._pk}));for(var f=[],h=d.features.length,k=0;k<h;k++)d&&(d.features&&d.features[k]&&d.features[k].geometry)&&f.push(d.features[k].geometry);d.selectionRows=c;a&&s.defaults.geometryService&&0<f.length?(h=new w,
h.geometries1=f,h.geometries2=[a],h.relation=w.SPATIAL_REL_INTERSECTION,(this._currentDef=s.defaults.geometryService.relation(h,e.hitch(this,function(a){return a}))).then(e.hitch(this,function(a,b){for(var d=b.length,f=[],e=0;e<d;e++)f.push(a.features[b[e].geometry1Index]);a.features=f;this.queryExecute(c,a.fields,a.features.length,!1,a)},d),e.hitch(this,function(a){console.error(a);this.loading.hide()}))):this.queryExecute(c,d.fields,d.features.length,!1,d)},_queryToServer:function(a,b,c){this._getFeatureCount(a).then(e.hitch(this,
function(d){if(this.domNode){var g=this.layer,f=r.isDefined(g.maxRecordCount)?g.maxRecordCount:1E3;this._batchCount=Math.min(f,this._defaultBatchCount);if(d<f)this._queryFeatureLayer(a,b,c,d,!1);else{var h=this._getOutFieldsFromLayerInfos(b),k={fields:this.layer.fields};this.layer._recordCounts=d;g.advancedQueryCapabilities&&g.advancedQueryCapabilities.supportsPagination?this.queryExecute(c,h,d,!0,k,a):this._getFeatureIds(b,a).then(e.hitch(this,function(a){this.domNode&&(this.layer._objectIds=a,this.queryExecute(c,
h,d,!0,k))}))}}}))},_getFeatureCount:function(a){var b=new q,c=new n;c.returnGeometry=!1;c.where=this._getLayerFilterExpression();a&&(c.geometry=a);(this._currentDef=this.layer.queryCount(c)).then(e.hitch(this,function(a){b.resolve(a)}),e.hitch(this,function(a){console.error(a);console.log("Could not get feature count.");this.loading.hide();b.reject(a)}));return b},_queryFeatureLayer:function(a,b,c,d,g){var f=new y(this.configedInfo.layer.url),h=new n;h.where=this._getLayerFilterExpression();var k=
this._getOutFieldsFromLayerInfos(b);0<k.length?(b=m.map(k,function(a){return a.name}),h.outFields=b):h.outFields=["*"];a&&(h.geometry=a,h.spatialRelationship=n.SPATIAL_REL_INTERSECTS);h.outSpatialReference=e.clone(this.map.spatialReference);h.returnGeometry=!1;(this._currentDef=f.execute(h,e.hitch(this,function(a){return a}))).then(e.hitch(this,function(a){this.queryExecute(c,k,d,g,a)}),e.hitch(this,function(a){console.error(a);this.loading.hide()}))},_getFeatureIds:function(a,b){var c=new q,d=new n;
d.returnGeometry=!1;d.returnIdsOnly=!0;d.where=this._getLayerFilterExpression();d.orderByFields=this.layer._orderByFields||[a+" ASC"];b&&(d.geometry=b);(this._currentDef=this.layer.queryIds(d)).then(e.hitch(this,function(a){c.resolve(a)}),e.hitch(this,function(a){console.error(a);console.log("Could not get feature Ids");c.resolve([])}));return c},queryExecute:function(a,b,c,d,g,f){var h=[],h=null,k={};if(this.domNode){g.fields=this._processExecuteFields(this.layer.fields,b);d?h=t.generateCacheStore(this.layer,
c,this._batchCount,this._getLayerFilterExpression(),f):(h=m.map(g.features,e.hitch(this,function(a){return e.clone(a.attributes)})),h=t.generateMemoryStore(h,this.layer.objectIdField));b=this.layer;f=b.advancedQueryCapabilities&&b.advancedQueryCapabilities.supportsPagination;k=t.generateColumnsFromFields(g.fields,b.typeIdField,b.types,b.advancedQueryCapabilities&&b.advancedQueryCapabilities.supportsOrderBy&&f||!d);this.createTable(k,h,c);if(a&&a.length){for(var l in a)this.grid.select(a[l]);this.selectionRows=
a;this.setSelectedNumber()}this.emit("data-loaded")}},createTable:function(a,b,c){if(this.grid)this.grid.set("store",b),this.grid.refresh();else{var d={};d.columns=a;d.store=b;d.keepScrollPosition=!0;d.pagingDelay=1E3;this.grid=new (u([F,G,H,I,J]))(d,l.create("div"));l.place(this.grid.domNode,this.domNode);this.grid.startup();this.grid._clickShowSelectedRecords=!1;this.own(p(this.grid,".dgrid-row:click",e.hitch(this,this._onRowClick)));this.own(p(this.grid,".dgrid-row:dblclick",e.hitch(this,function(){this.layerInfo&&
this.layerInfo.isShowInMap()&&this._zoomToSelected()})));this.own(p(this.grid,"dgrid-refresh-complete",e.hitch(this,this._onRefreshComplete)))}this.footer?l.empty(this.footer):this.footer=l.create("div",null,this.domNode);a=l.create("div",{"class":"dgrid-status self-footer",innerHTML:c+"\x26nbsp;"+this.nls.features+"\x26nbsp;"},this.footer);this.selectedRowsLabel=l.create("div",{"class":"dgrid-status self-footer",innerHTML:"0\x26nbsp;"+this.nls.selected+"\x26nbsp;"},a,"after");a=l.getStyle(this.parentWidget.domNode,
"height");this.changeHeight(a);this._requestStatus="fulfilled";this.configedInfo.opened=!0;this.loading.hide()},getSelectedRowsData:function(){if(!this.grid)return null;var a=this.layer.objectIdField,b=this.grid.store,c=b._entityData||b.data,b=this.getSelectedRows();return m.map(b,e.hitch(this,function(b){for(var e=0,f=c.length;e<f;e++)if(c[e]&&c[e][a]===b)return c[e];return{}}))||[]},setSelectedNumber:function(){if(this.selectedRowsLabel&&this.grid){var a=this.getSelectedRows();this.selectedRowsLabel.innerHTML=
"\x26nbsp;\x26nbsp;"+a.length+" "+this.nls.selected+"\x26nbsp;\x26nbsp;"}},selectFeatures:function(a,b){b&&0<b.length?("rowclick"===a||"selectall"===a?this.addGraphics(b,!0):"zoom"===a&&this.getExtent(b).then(e.hitch(this,function(a){if(a)if("point"===a.type){var b=15,b=-1<this.map.getMaxZoom()?this.map.getMaxZoom():0.1;this.map.centerAndZoom(a,b)}else this.map.setExtent(a.expand(1.1))}),e.hitch(this,function(a){console.error(a)})),this.setSelectedNumber()):this._popupMessage(this.nls.dataNotAvailable)},
getGraphicsFromLocalFeatureLayer:function(a){for(var b=[],c,d,e=a.length,f=this.layer.graphics.length,h=this.layer.objectIdField,k=0;k<e;k++)for(var l=0;l<f;l++)if(c=this.layer.graphics[l].attributes[h]+"",d=a[k]+"",c===d){b.push(this.layer.graphics[l]);break}return b},addGraphics:function(a){var b,c,d=a.length;this.graphicsLayer.clear();for(var g=new A(A.STYLE_SOLID,new C([0,255,255]),2),f=0;f<d;f++)c=null,a[f].geometry?(a[f].geometry.spatialReference.equals(this.map.spatialReference)||console.warn("unable to draw graphic result in different wkid from map"),
"point"===a[f].geometry.type?(c=new O(a[f].geometry.toJson()),b=e.clone(this.map.infoWindow.markerSymbol)):"multipoint"===a[f].geometry.type?(c=new z(a[f].geometry.toJson()),b=e.clone(this.map.infoWindow.markerSymbol)):"polyline"===a[f].geometry.type?(c=new P(a[f].geometry.toJson()),b=g):"polygon"===a[f].geometry.type&&(c=new Q(a[f].geometry.toJson()),b=new B(B.STYLE_SOLID,g,new C([255,255,255,0.25]))),c=new N(c,b,a[f].attributes,a[f].infoTemplate),this.graphicsLayer.add(c)):console.error("unable to get geometry of the reocord: ",
a[f])},getExtent:function(a){var b=new q,c,d,g=a.length;if(1===g&&a[0].geometry&&"point"===a[0].geometry.type)c=a[0].geometry;else{if(1===g&&!a[0].geometry)return b.reject(Error("AttributeTable.getExtent:: extent was not projected.")),b;for(var f=0;f<g;f++)a[f].geometry?"point"===a[f].geometry.type?(d||(d=new z(a[f].geometry.spatialReference)),d.addPoint(a[f].geometry),f===g-1&&(c=d.getExtent())):c=c?c.union(a[f].geometry.getExtent()):a[f].geometry.getExtent():console.error("unable to get geometry of the reocord: ",
a[f])}if(!c||!c.spatialReference)return b.reject(Error("AttributeTable.getExtent:: extent was not projected.")),b;a=this.map.spatialReference;c.spatialReference.equals(a)?b.resolve(c):(d=new M,d.geometries=[c],d.outSR=a,s.defaults.geometryService.project(d,e.hitch(this,function(a){this.domNode&&(a&&a.length?b.resolve(a[0]):b.reject(Error("AttributeTable.getExtent:: extent was not projected.")))}),e.hitch(this,function(a){a||(a=Error("AttributeTable.getExtent:: extent was not projected."));b.reject(a)})));
return b},_onRefreshComplete:function(a){if(a.grid._clickShowSelectedRecords){var b=this.selectionRows;m.forEach(b,e.hitch(this,function(b){a.grid.select(b)}));a.grid._clickShowSelectedRecords=!1;this.isSupportQueryToServer()?this._queryFeaturesByIds(b,"selectall"):this.isSupportQueryOnClient()&&this.selectFeatures("selectall",this.getGraphicsFromLocalFeatureLayer(b))}},_zoomToSelected:function(){if(this.configedInfo){var a=this._getSelectedIds();0!==a.length&&(this.isSupportQueryToServer()?this._queryFeaturesByIds(a,
"zoom"):this.isSupportQueryOnClient()&&this.selectFeatures("zoom",this.getGraphicsFromLocalFeatureLayer(a)))}},_queryFeaturesByIds:function(a,b){var c=new n;c.objectIds=a;c.returnGeometry=!0;c.outSpatialReference=e.clone(this.map.spatialReference);c.outFields=["*"];var d=this.layer,g="esri.layers.CSVLayer"===d.declaredClass;d.url&&!g?(new y(d.url)).execute(c,e.hitch(this,function(a){this.selectFeatures(b,a.features)}),e.hitch(this,this._errorSelectFeatures)):d.selectFeatures(c,x.SELECTION_NEW,e.hitch(this,
this.selectFeatures,b),e.hitch(this,this._errorSelectFeatures))},_onRowClick:function(){var a=this._getSelectedIds();this.selectionRows=a;a.length?this.isSupportQueryToServer()?this._queryFeaturesByIds(a,"rowclick"):this.isSupportQueryOnClient()&&this.selectFeatures("rowclick",this.getGraphicsFromLocalFeatureLayer(a)):this.graphicsLayer.clear();this.setSelectedNumber();this.emit("row-click",{table:this,selectedIds:a})},_onExtentChange:function(a){this.matchingMap&&this.actived&&this.startQuery(a.extent)},
_getLayerFilterExpression:function(){var a=this._filterObj&&this._filterObj.expr||"",b=this.layerInfo.getFilterOfWebmap();return a?b?a+" AND "+b:a:b?b:"1\x3d1"},_getOutFieldsFromLayerInfos:function(a){var b=this.configedInfo.layer.fields,c=[];b&&m.forEach(b,e.hitch(this,function(b){r.isDefined(b.show)||(b.show=!0);if(b.name===a&&("esriFieldTypeOID"===b.type||!b.type))b._pk=!0;(b.show||b._pk)&&c.push(b)}));return c},_processExecuteFields:function(a,b){if(a&&0<a.length){var c=[];if(!b.length)return a;
for(var d=0,g=b.length;d<g;d++)for(var f=0;f<a.length;f++)if(b[d].name===a[f].name&&(b[d].type===a[f].type||!b[d].type))a[f]=e.mixin(a[f],b[d]),c.push(a[f]);return c}return b},_getSelectedIds:function(){var a=[],b=this.grid.selection,c;for(c in b)b[c]&&(isFinite(c)?a.push(parseInt(c,10)):a.push(c));return a},_errorQueryTask:function(a){this._popupMessage(a.message)},_errorGeometryServices:function(a){this._popupMessage(a.message)},_errorSelectFeatures:function(a){this._popupMessage(a.message)},_popupMessage:function(a){var b=
new E({message:a,buttons:[{label:this.nls.ok,onClick:e.hitch(this,function(){b.close()})}]});this.loading.hide()}})});