(window.webpackJsonp=window.webpackJsonp||[]).push([[13],{386:function(e,t,r){},442:function(e,t,r){"use strict";r(386)},465:function(e,t,r){"use strict";r.r(t);var n={components:r(309),data:function(){return{fov:50,zoom:1,near:10,far:30,aspect:2,autoAspect:!0}}},a=(r(442),r(40)),o=Object(a.a)(n,(function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",[r("vgl-renderer",{attrs:{antialias:""},scopedSlots:e._u([{key:"scene",fn:function(){return[r("vgl-scene",[r("vgl-mesh",{scopedSlots:e._u([{key:"geometry",fn:function(){return[r("vgl-box-geometry",{attrs:{width:7.5,height:7.5,depth:7.5}})]},proxy:!0},{key:"material",fn:function(){return[r("vgl-mesh-standard-material")]},proxy:!0}])}),e._v(" "),r("vgl-ambient-light",{attrs:{color:"#ffeecc",intensity:.4}}),e._v(" "),r("vgl-directional-light",{attrs:{"position-x":2,"position-y":1,"position-z":3,intensity:.7}})],1)]},proxy:!0},{key:"camera",fn:function(){return[r("vgl-perspective-camera",{attrs:{position:"spherical",rotation:"lookAt","position-radius":20,"position-phi":1,"position-theta":1,zoom:e.zoom,near:e.near,far:e.far,fov:e.fov,aspect:e.autoAspect?void 0:e.aspect}})]},proxy:!0}])}),e._v(" "),r("aside",[r("label",[e._v("Zoom"),r("input",{directives:[{name:"model",rawName:"v-model.number",value:e.zoom,expression:"zoom",modifiers:{number:!0}}],attrs:{type:"range",min:"0.2",max:"3",step:"0.1"},domProps:{value:e.zoom},on:{__r:function(t){e.zoom=e._n(t.target.value)},blur:function(t){return e.$forceUpdate()}}})]),e._v(" "),r("label",[e._v("Near"),r("input",{directives:[{name:"model",rawName:"v-model.number",value:e.near,expression:"near",modifiers:{number:!0}}],attrs:{type:"range",min:"10",max:"30"},domProps:{value:e.near},on:{__r:function(t){e.near=e._n(t.target.value)},blur:function(t){return e.$forceUpdate()}}})]),e._v(" "),r("label",[e._v("Far"),r("input",{directives:[{name:"model",rawName:"v-model.number",value:e.far,expression:"far",modifiers:{number:!0}}],attrs:{type:"range",min:"10",max:"30"},domProps:{value:e.far},on:{__r:function(t){e.far=e._n(t.target.value)},blur:function(t){return e.$forceUpdate()}}})]),e._v(" "),r("label",[e._v("Fov"),r("input",{directives:[{name:"model",rawName:"v-model.number",value:e.fov,expression:"fov",modifiers:{number:!0}}],attrs:{type:"range",max:"85",min:"15"},domProps:{value:e.fov},on:{__r:function(t){e.fov=e._n(t.target.value)},blur:function(t){return e.$forceUpdate()}}})]),e._v(" "),r("p",[e._v("\n      Aspect\n      "),r("label",[e._v("Auto"),r("input",{directives:[{name:"model",rawName:"v-model",value:e.autoAspect,expression:"autoAspect"}],attrs:{type:"checkbox"},domProps:{checked:Array.isArray(e.autoAspect)?e._i(e.autoAspect,null)>-1:e.autoAspect},on:{change:function(t){var r=e.autoAspect,n=t.target,a=!!n.checked;if(Array.isArray(r)){var o=e._i(r,null);n.checked?o<0&&(e.autoAspect=r.concat([null])):o>-1&&(e.autoAspect=r.slice(0,o).concat(r.slice(o+1)))}else e.autoAspect=a}}})]),e._v(" "),r("label",[e._v("\n        Ratio\n        "),r("input",{directives:[{name:"model",rawName:"v-model.number",value:e.aspect,expression:"aspect",modifiers:{number:!0}}],attrs:{disabled:e.autoAspect,type:"range",max:"5",min:"0.2",step:"0.1"},domProps:{value:e.aspect},on:{__r:function(t){e.aspect=e._n(t.target.value)},blur:function(t){return e.$forceUpdate()}}})])])])],1)}),[],!1,null,"79591d17",null);t.default=o.exports}}]);