// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See http://js.arcgis.com/3.15/esri/copyright.txt and http://www.arcgis.com/apps/webappbuilder/copyright.txt for details.
//>>built
define(["dojo/Evented","dojo/_base/declare","dojo/_base/lang"],function(d,b,c){return b([d],{declaredClass:"layerSyncDetails",layerID:null,numberOfRequest:0,requestComplete:0,totalRecordsToSync:0,recordsSynced:0,deferreds:[],complete:!1,hasError:!1,constructor:function(a){b.safeMixin(this,a)},addDeferred:function(a){a.then(c.hitch(this,function(a,b,c){this.recordsSynced+=b.length;this.requestComplete+=1;this.emit("requestComplete",{layerID:this.layerID,countRequest:b.length,countSoFar:this.recordsSynced,
totalToSync:this.totalRecordsToSync,addded:a,removed:c});this.isComplete()&&this.emit("complete",{})}),c.hitch(this,function(a){this.hasError=!0;console.log("error: "+a);return a}));this.deferreds.push(a)},isComplete:function(){return this.complete=this.numberOfRequest===this.requestComplete?!0:!1}})});