(window.webpackJsonp=window.webpackJsonp||[]).push([[62],{507:function(e,t,n){"use strict";n.r(t);n(162);var r={components:n(309),data:function(){return{r:"255",g:"255",b:"255"}},computed:{color:function(){return"rgb(".concat(this.r,", ").concat(this.g,", ").concat(this.b,")")}}},o=n(40),a=Object(o.a)(r,(function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[n("vgl-renderer",{attrs:{antialias:""},scopedSlots:e._u([{key:"scene",fn:function(){return[n("vgl-scene",[n("vgl-mesh",{scopedSlots:e._u([{key:"geometry",fn:function(){return[n("vgl-torus-knot-geometry")]},proxy:!0},{key:"material",fn:function(){return[n("vgl-mesh-standard-material",{attrs:{color:e.color}})]},proxy:!0}])}),e._v(" "),n("vgl-ambient-light",{attrs:{intensity:.5}}),e._v(" "),n("vgl-directional-light",{attrs:{"position-y":2,"position-z":1,intensity:.5}})],1)]},proxy:!0},{key:"camera",fn:function(){return[n("vgl-perspective-camera",{attrs:{position:"spherical","position-radius":5,"position-phi":1,rotation:"lookAt","position-theta":.5}})]},proxy:!0}])}),e._v(" "),n("aside",{staticClass:"control-panel"},[n("section",[n("h3",[e._v("Color")]),e._v(" "),n("label",[e._v("R"),n("input",{directives:[{name:"model",rawName:"v-model",value:e.r,expression:"r"}],attrs:{type:"range",max:"255"},domProps:{value:e.r},on:{__r:function(t){e.r=t.target.value}}})]),e._v(" "),n("label",[e._v("G"),n("input",{directives:[{name:"model",rawName:"v-model",value:e.g,expression:"g"}],attrs:{type:"range",max:"255"},domProps:{value:e.g},on:{__r:function(t){e.g=t.target.value}}})]),e._v(" "),n("label",[e._v("B"),n("input",{directives:[{name:"model",rawName:"v-model",value:e.b,expression:"b"}],attrs:{type:"range",max:"255"},domProps:{value:e.b},on:{__r:function(t){e.b=t.target.value}}})])])])],1)}),[],!1,null,null,null);t.default=a.exports}}]);