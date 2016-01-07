// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See http://js.arcgis.com/3.15/esri/copyright.txt and http://www.arcgis.com/apps/webappbuilder/copyright.txt for details.
//>>built
require({cache:{"url:widgets/SituationAwareness/setting/FieldPicker.html":'\x3cdiv style\x3d"height:100%;width:100%;overflow:auto"\x3e\r\n  \x3cdiv data-dojo-attach-point\x3d"tableArea" class\x3d"tableArea"\x3e\r\n    \x3cdiv class\x3d"btn-add-section enable" data-dojo-attach-point\x3d"btnAddField"\x3e\r\n        \x3cspan class\x3d"btn-add-icon"\x3e\x3c/span\x3e\r\n        \x3cspan class\x3d"btn-add-label" id\x3d"divLayerTitle" data-dojo-attach-point\x3d"divLayerTitle"\x3e${nls.addField}\x3c/span\x3e\r\n    \x3c/div\x3e\r\n    \x3cdiv data-dojo-attach-point\x3d"fieldTable"\x3e\x3c/div\x3e\r\n  \x3c/div\x3e\r\n  \x3cdiv class\x3d"jimu-r-row" style\x3d"padding-top:20px" data-dojo-attach-point\x3d"chk_summary"\x3e\r\n    \x3cdiv class\x3d"col-1-3" data-dojo-attach-point\x3d"div_chkCount"\x3e\r\n        \x3cinput data-dojo-type\x3d"dijit/form/CheckBox" data-dojo-attach-point\x3d"chk_count" title\x3d"${nls.count_checkBox}" /\x3e\r\n        \x3cspan class\x3d"label"\x3e${nls.count_checkBox}\x3c/span\x3e\r\n    \x3c/div\x3e\r\n      \x3cdiv class\x3d"col-1-3"  data-dojo-attach-point\x3d"div_chkArea"\x3e\r\n          \x3cinput data-dojo-type\x3d"dijit/form/CheckBox" data-dojo-attach-point\x3d"chk_area" title\x3d"${nls.area_checkBox}" /\x3e\r\n          \x3cspan class\x3d"label"\x3e${nls.area_checkBox}\x3c/span\x3e\r\n      \x3c/div\x3e\r\n      \x3cdiv class\x3d"col-1-3"  data-dojo-attach-point\x3d"div_chkLength"\x3e\r\n          \x3cinput data-dojo-type\x3d"dijit/form/CheckBox" data-dojo-attach-point\x3d"chk_length" title\x3d"${nls.length_checkBox}" /\x3e\r\n          \x3cspan class\x3d"label"\x3e${nls.length_checkBox}\x3c/span\x3e\r\n      \x3c/div\x3e\r\n  \x3c/div\x3e\r\n  \x3cdiv class\x3d"footer"\x3e\r\n    \x3cdiv class\x3d"jimu-btn ok" data-dojo-attach-point\x3d"btnOk"\x3e${nls.ok}\x3c/div\x3e\r\n    \x3cdiv class\x3d"jimu-btn cancel" data-dojo-attach-point\x3d"btnCancel"\x3e${nls.cancel}\x3c/div\x3e\r\n  \x3c/div\x3e\r\n\x3c/div\x3e\r\n'}});
define("dojo/_base/declare dijit/_WidgetsInTemplateMixin dijit/form/Select dijit/form/ValidationTextBox dojo/_base/array dojo/_base/lang dojo/_base/html dojo/dom-style dojo/on dojo/query jimu/BaseWidget jimu/dijit/Message esri/layers/FeatureLayer dojo/text!./FieldPicker.html dojo/Evented jimu/dijit/SimpleTable".split(" "),function(n,p,m,q,e,d,g,k,h,l,r,s,t,u,v,w){return n([r,p,v],{templateString:u,baseClass:"jimu-widget-SAT-setting",advStat:{},fieldsList:null,callerLayer:null,callerTab:null,callerOpLayers:null,
layerList:null,constructor:function(a){this.map=a.map},postCreate:function(){this.inherited(arguments);this.startup()},startup:function(){var a=null,a="summary"===this.callerTab.type?[{name:"layer",title:"Field","class":"label",type:"empty",width:"250px"},{name:"label",title:this.nls.layerLabel,"class":"label",type:"empty",width:"200px"},{name:"type",title:"Type","class":"sumlabel",type:"empty"},{name:"actions",title:"Actions","class":"actions",type:"actions",actions:["up","down","delete"]}]:[{name:"layer",
title:"Field","class":"label",type:"empty",width:"60%"},{name:"actions",title:"Actions","class":"actions",type:"actions",actions:["up","down","delete"],width:"40%"}];this.displayFieldsTable=new w({fields:a});this.displayFieldsTable.placeAt(this.fieldTable);g.setStyle(this.displayFieldsTable.domNode,{height:"100%"});this.displayFieldsTable.startup();this.operationsList=[{value:"sum",label:this.nls.sum},{value:"avg",label:this.nls.avg},{value:"min",label:this.nls.min},{value:"max",label:this.nls.max}];
"summary"===this.callerTab.type?k.set(this.chk_summary,"display","block"):k.set(this.chk_summary,"display","none");this.own(h(this.btnCancel,"click",d.hitch(this,function(){this.emit("cancel")})));this.own(h(this.btnOk,"click",d.hitch(this,function(){this.updateSummaryType();var a=!1,c;for(c in this.advStat.stats)this.advStat.stats.hasOwnProperty(c)&&(a=!0);a||(this.advStat=null);this.emit("ok",this.advStat)})));this.layerTables=[];this.summaryLayers=[];this.advStat={};this._getAllValidLayers();this.own(h(this.btnAddField,
"click",d.hitch(this,this._addTabRow)))},_updateGeomOptions:function(a){a&&(this.chk_area.set("disabled","esriGeometryPolygon"!==a),this.chk_length.set("disabled","esriGeometryPolyline"!==a))},_getAllValidLayers:function(){e.forEach(this.callerOpLayers,d.hitch(this,function(a){0<a.newSubLayers.length?this._recurseOpLayers(a.newSubLayers):a.title===this.callerLayer&&(this.layerList=a)}));if(this.layerList.layerObject.empty){var a=new t(this.layerList.layerObject.url);h(a,"load",d.hitch(this,function(){this._completeMapLayers(a)}))}else this._completeMapLayers(this.layerList)},
_recurseOpLayers:function(a){e.forEach(a,d.hitch(this,function(a){0<a.newSubLayers.length?this._recurseOpLayers(a.newSubLayers):a.title===this.callerLayer&&(this.layerList=a)}))},_completeMapLayers:function(a){if(a){console.log(a);var b,c;"undefined"===typeof a.layerObject?(c=a.geometryType,this.objectIdField=a.objectIdField,b={url:a.url,stats:{}},a=d.clone(a.fields)):(c=a.layerObject.geometryType,this.objectIdField=a.layerObject.objectIdField,b={url:a.layerObject.url,stats:{}},a=d.clone(a.layerObject.fields));
this.advStat=b;this._updateGeomOptions(c);if(this.advStat.url&&(this._setFields(a),"undefined"!==typeof this.callerTab.advStat)){b=this.callerTab.advStat.stats;for(var f in b)"count"===f?this.chk_count.set("value",!0):"area"===f?this.chk_area.set("value",!0):"length"===f?this.chk_length.set("value",!0):e.forEach(b[f],d.hitch(this,function(a){this._populateTabTableRow(f,a)}))}}},_setFields:function(a){var b=["esriFieldTypeInteger","esriFieldTypeSmallInteger","esriFieldTypeDouble"];"summary"!==this.callerTab.type&&
(b.push("esriFieldTypeString"),b.push("esriFieldTypeDate"));var c=[];e.forEach(a,d.hitch(this,function(a){-1<b.indexOf(a.type)&&c.push({label:a.alias,value:a.name})}));1>c.length&&k.set(this.btnAddField,"display","none");this.fieldsList=d.clone(c)},_populateTabTableRow:function(a,b){var c=this.displayFieldsTable.addRow({});c.success&&c.tr&&(c=c.tr,this._addTabFields(c),this._addTabTypes(c),this._addTabLabel(c),c.selectFields.set("value",b.expression),c.labelText.set("value",b.label),"summary"===this.callerTab.type&&
c.selectTypes.set("value",a))},_addTabRow:function(){if("summary"!==this.callerTab.type&&3<=this.displayFieldsTable.getRows().length)new s({message:this.nls.max_records});else{var a=this.displayFieldsTable.addRow({});a.success&&a.tr&&(a=a.tr,this._addTabFields(a),this._addTabTypes(a),this._addTabLabel(a))}},_addTabFields:function(a){var b=d.clone(this.fieldsList),c=l(".simple-table-cell",a)[0];c&&(g.setStyle(c,"verticalAlign","middle"),b=new m({style:{width:"100%",height:"30px"},options:b}),b.placeAt(c),
b.startup(),a.selectFields=b)},_addTabLabel:function(a){if("summary"===this.callerTab.type){var b=l(".simple-table-cell",a)[1];g.setStyle(b,"verticalAlign","middle");var c=new q({style:{width:"100%",height:"30px"}});c.placeAt(b);c.startup();a.labelText=c}},_addTabTypes:function(a){if("summary"===this.callerTab.type){var b=d.clone(this.operationsList),c=l(".simple-table-cell",a)[2];c&&(g.setStyle(c,"verticalAlign","middle"),b=new m({style:{width:"100%",height:"30px"},options:b}),b.placeAt(c),b.startup(),
a.selectTypes=b)}},updateSummaryType:function(){var a=this.displayFieldsTable.getRows();if("summary"!==this.callerTab.type){var b=[];e.forEach(a,function(a){b.push({value:0,expression:a.selectFields.value,label:a.selectFields.value})});0<b.length&&(this.advStat.stats.outFields=b)}else this.chk_count.checked&&(this.advStat.stats.count=[{value:0,expression:this.objectIdField,label:this.nls.count}]),this.chk_area.checked&&(this.advStat.stats.area=[{value:0,expression:this.objectIdField,label:this.nls.area}]),
this.chk_length.checked&&(this.advStat.stats.length=[{value:0,expression:this.objectIdField,label:this.nls.length}]),e.forEach(a,d.hitch(this,function(a){"undefined"===typeof this.advStat.stats[a.selectTypes.value]&&(this.advStat.stats[a.selectTypes.value]=[]);var b={value:0};b.expression=a.selectFields.value;for(var d=0;d<a.selectFields.options.length;d++)if(a.selectFields.options[d].value===a.selectFields.value){b.label=a.labelText.value?a.labelText.value:a.selectFields.options[d].label;break}"undefined"===
typeof b.label&&(b.label=b.expression);this.advStat.stats[a.selectTypes.value].push(b)}));console.log("ADVSTAT",this.advStat)},destroy:function(){this.advStat=null}})});