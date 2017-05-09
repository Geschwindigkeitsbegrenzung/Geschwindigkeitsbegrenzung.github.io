// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See http://js.arcgis.com/3.15/esri/copyright.txt and http://www.arcgis.com/apps/webappbuilder/copyright.txt for details.

require({cache:{"url:widgets/Geoprocessing/resultrenderers/RecordSetRenderer.html":'\x3cdiv\x3e\r\n  \x3cdiv class\x3d"export-node" data-dojo-attach-point\x3d"exportNode" style\x3d"display:none"\x3e\x3c/div\x3e\r\n  \x3cdiv class\x3d"table-node" data-dojo-attach-point\x3d"tableNode"\x3e\x3c/div\x3e\r\n\x3c/div\x3e'}});
define("dojo/_base/declare dojo/_base/lang dojo/_base/array dojo/_base/html dojo/dom-style dojo/on dijit/_TemplatedMixin dojo/store/Memory dgrid/OnDemandGrid dgrid/extensions/ColumnResizer jimu/exportUtils jimu/dijit/ExportChooser jimu/LayerInfos/LayerInfos dojo/text!./RecordSetRenderer.html ../BaseResultRenderer".split(" "),function(f,g,d,h,m,n,p,q,r,s,k,t,u,v,w){return f([w,p],{baseClass:"jimu-gp-resultrenderer-base jimu-gp-renderer-table",templateString:v,postCreate:function(){this.inherited(arguments);
var b=[];if(this.param.defaultValue&&this.param.defaultValue.output&&this.param.defaultValue.output.fields)b=this.param.defaultValue.output.fields;else if(this.value.fields)b=this.value.fields;else if(this.value.features&&0<this.value.features.length)for(var c in this.value.features[0].attributes)b.push({name:c});this.config.shareResults&&u.getInstance(this.map,this.map.itemInfo).then(g.hitch(this,function(a){a.addTable({featureCollectionData:{layerDefinition:{fields:b},featureSet:this.value},title:this.param.label||
this.param.name})}));c=d.map(this.value.features,function(a){return a.attributes});if(this.config.showExportButton){m.set(this.exportNode,"display","");var e=k.createDataSource({type:k.TYPE_TABLE,data:{fields:b,datas:c},filename:this.param.name});this.exportChooser=new t({dataSource:e});this.exportChooser.hide();h.place(this.exportChooser.domNode,this.domNode);this.own(n(this.exportNode,"click",g.hitch(this,function(a){a.preventDefault();a.stopPropagation();this.exportChooser.show(20,16)})))}var e=
d.map(b,function(a){return{label:a.alias||a.name,field:a.name}}),l;d.some(this.value.fields,function(a){if("esriFieldTypeOID"===a.type)return l=a.name,!0});c=new q({data:c,idProperty:l});this.table=new (f([r,s]))({columns:e,store:c});h.place(this.table.domNode,this.tableNode)},startup:function(){this.inherited(arguments);this.table.startup()}})});