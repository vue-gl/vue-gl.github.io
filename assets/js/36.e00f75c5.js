(window.webpackJsonp=window.webpackJsonp||[]).push([[36],{481:function(e,r,n){"use strict";n.r(r);var t={components:n(309),data:function(){return{innerRadius:25,outerRadius:50}}},i=n(40),a=Object(i.a)(t,(function(){var e=this,r=e.$createElement,n=e._self._c||r;return n("div",[n("vgl-renderer",{attrs:{antialias:""},scopedSlots:e._u([{key:"scene",fn:function(){return[n("vgl-scene",[n("vgl-mesh",{scopedSlots:e._u([{key:"geometry",fn:function(){return[n("vgl-ring-geometry",{attrs:{"inner-radius":e.innerRadius,"outer-radius":e.outerRadius}})]},proxy:!0},{key:"material",fn:function(){return[n("vgl-mesh-standard-material")]},proxy:!0}])}),e._v(" "),n("vgl-ambient-light",{attrs:{color:"#ffeecc"}}),e._v(" "),n("vgl-directional-light",{attrs:{"position-y":1,"position-z":2}})],1)]},proxy:!0},{key:"camera",fn:function(){return[n("vgl-perspective-camera",{attrs:{position:"spherical","position-radius":250,"position-phi":1,"position-theta":.5,rotation:"lookAt"}})]},proxy:!0}])}),e._v(" "),n("aside",[n("label",[e._v("Inner radius"),n("input",{directives:[{name:"model",rawName:"v-model.number",value:e.innerRadius,expression:"innerRadius",modifiers:{number:!0}}],attrs:{type:"range"},domProps:{value:e.innerRadius},on:{__r:function(r){e.innerRadius=e._n(r.target.value)},blur:function(r){return e.$forceUpdate()}}})]),e._v(" "),n("label",[e._v("Outer radius"),n("input",{directives:[{name:"model",rawName:"v-model.number",value:e.outerRadius,expression:"outerRadius",modifiers:{number:!0}}],attrs:{type:"range"},domProps:{value:e.outerRadius},on:{__r:function(r){e.outerRadius=e._n(r.target.value)},blur:function(r){return e.$forceUpdate()}}})])])],1)}),[],!1,null,null,null);r.default=a.exports}}]);