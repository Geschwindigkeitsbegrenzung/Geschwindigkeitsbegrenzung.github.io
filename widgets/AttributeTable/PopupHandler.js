// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See http://js.arcgis.com/3.15/esri/copyright.txt and http://www.arcgis.com/apps/webappbuilder/copyright.txt for details.
//>>built
define("dojo/_base/declare dojo/_base/lang dijit/_WidgetBase dojo/on jimu/LayerInfos/LayerInfos jimu/InfoWindowAction".split(" "),function(d,b,e,c,f,g){return d([e],{postCreate:function(){this.inherited(arguments);f.getInstance(this.map,this.map.itemInfo).then(b.hitch(this,function(a){this.layerInfos=a}));this.showRelatedTableBtn=new g({buttonInfo:{title:this.nls.showRelatedRecords,baseClass:"relationship"}});this.own(c(this.showRelatedTableBtn,"buttonClick",b.hitch(this,this._onRealtionshipClick)));
this.own(c(this.showRelatedTableBtn,"selectionChange",b.hitch(this,this._onSelectionChange)))},_onRealtionshipClick:function(a){var b=this.layerInfos.getLayerInfoById(a._layer.id);this.attrWidget.showRelatedRecordsFromPopup(b,[a.attributes[a._layer.objectIdField]])},_onSelectionChange:function(a){this.layerInfos&&a._layer&&a._layer.relationships&&0<a._layer.relationships.length?(a=this.layerInfos.getLayerInfoById(a._layer.id))?a.getRelatedTableInfoArray().then(b.hitch(this,function(a){0<a.length?
this.showRelatedTableBtn.enableButtonNode():this.showRelatedTableBtn.disableButtonNode()})):this.showRelatedTableBtn.disableButtonNode():this.showRelatedTableBtn.disableButtonNode()},destroy:function(){this.showRelatedTableBtn.destroy();this.inherited(arguments)}})});