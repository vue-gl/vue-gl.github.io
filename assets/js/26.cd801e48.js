(window.webpackJsonp=window.webpackJsonp||[]).push([[26],{471:function(e,t,n){"use strict";n.r(t);var r={components:n(309),data:function(){return{radius:25,segments:16}}},s=n(40),a=Object(s.a)(r,(function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[n("vgl-renderer",{attrs:{antialias:""},scopedSlots:e._u([{key:"scene",fn:function(){return[n("vgl-scene",[n("vgl-mesh",{scopedSlots:e._u([{key:"geometry",fn:function(){return[n("vgl-circle-geometry",{attrs:{radius:e.radius,segments:e.segments}})]},proxy:!0},{key:"material",fn:function(){return[n("vgl-mesh-standard-material")]},proxy:!0}])}),e._v(" "),n("vgl-ambient-light",{attrs:{color:"#ffeecc"}}),e._v(" "),n("vgl-directional-light",{attrs:{"position-y":1,"position-z":2}})],1)]},proxy:!0},{key:"camera",fn:function(){return[n("vgl-perspective-camera",{attrs:{position:"spherical","position-radius":200,"position-phi":1,"position-theta":.5,rotation:"lookAt"}})]},proxy:!0}])}),e._v(" "),n("aside",[n("label",[e._v("Radius"),n("input",{directives:[{name:"model",rawName:"v-model.number",value:e.radius,expression:"radius",modifiers:{number:!0}}],attrs:{type:"range"},domProps:{value:e.radius},on:{__r:function(t){e.radius=e._n(t.target.value)},blur:function(t){return e.$forceUpdate()}}})]),e._v(" "),n("label",[e._v("Segments"),n("input",{directives:[{name:"model",rawName:"v-model.number",value:e.segments,expression:"segments",modifiers:{number:!0}}],attrs:{type:"range"},domProps:{value:e.segments},on:{__r:function(t){e.segments=e._n(t.target.value)},blur:function(t){return e.$forceUpdate()}}})])])],1)}),[],!1,null,null,null);t.default=a.exports}}]);