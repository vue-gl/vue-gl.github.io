(window.webpackJsonp=window.webpackJsonp||[]).push([[47],{492:function(e,t,r){"use strict";r.r(t);r(162);var n={components:r(309),data:function(){return{size:1,r:"255",g:"255",b:"255",x:1,y:2,z:0}},computed:{color:function(){return"rgb(".concat(this.r,", ").concat(this.g,", ").concat(this.b,")")}}},o=r(40),a=Object(o.a)(n,(function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",[r("vgl-renderer",{attrs:{antialias:""},scopedSlots:e._u([{key:"scene",fn:function(){return[r("vgl-scene",[r("vgl-directional-light-helper",{attrs:{size:e.size},scopedSlots:e._u([{key:"light",fn:function(){return[r("vgl-directional-light",{attrs:{"position-x":e.x,"position-y":e.y,"position-z":e.z,color:e.color}})]},proxy:!0}])})],1)]},proxy:!0},{key:"camera",fn:function(){return[r("vgl-perspective-camera",{attrs:{position:"spherical","position-radius":20,"position-phi":1.8,"position-theta":.5,rotation:"lookAt"}})]},proxy:!0}])}),e._v(" "),r("aside",{staticClass:"control-panel"},[r("section",[r("h3",[e._v("Light color")]),e._v(" "),r("label",[e._v("R"),r("input",{directives:[{name:"model",rawName:"v-model",value:e.r,expression:"r"}],attrs:{type:"range",max:"255"},domProps:{value:e.r},on:{__r:function(t){e.r=t.target.value}}})]),e._v(" "),r("label",[e._v("G"),r("input",{directives:[{name:"model",rawName:"v-model",value:e.g,expression:"g"}],attrs:{type:"range",max:"255"},domProps:{value:e.g},on:{__r:function(t){e.g=t.target.value}}})]),e._v(" "),r("label",[e._v("B"),r("input",{directives:[{name:"model",rawName:"v-model",value:e.b,expression:"b"}],attrs:{type:"range",max:"255"},domProps:{value:e.b},on:{__r:function(t){e.b=t.target.value}}})])]),e._v(" "),r("section",[r("h3",[e._v("Light position")]),e._v(" "),r("label",[e._v("x"),r("input",{directives:[{name:"model",rawName:"v-model.number",value:e.x,expression:"x",modifiers:{number:!0}}],attrs:{type:"range",max:"5",min:"-5",step:"0.01"},domProps:{value:e.x},on:{__r:function(t){e.x=e._n(t.target.value)},blur:function(t){return e.$forceUpdate()}}})]),e._v(" "),r("label",[e._v("y"),r("input",{directives:[{name:"model",rawName:"v-model.number",value:e.y,expression:"y",modifiers:{number:!0}}],attrs:{type:"range",max:"5",min:"-5",step:"0.01"},domProps:{value:e.y},on:{__r:function(t){e.y=e._n(t.target.value)},blur:function(t){return e.$forceUpdate()}}})]),e._v(" "),r("label",[e._v("z"),r("input",{directives:[{name:"model",rawName:"v-model.number",value:e.z,expression:"z",modifiers:{number:!0}}],attrs:{type:"range",max:"5",min:"-5",step:"0.01"},domProps:{value:e.z},on:{__r:function(t){e.z=e._n(t.target.value)},blur:function(t){return e.$forceUpdate()}}})])]),e._v(" "),r("section",[r("h3",[e._v("Helper size")]),e._v(" "),r("label",[e._v("Size"),r("input",{directives:[{name:"model",rawName:"v-model.number",value:e.size,expression:"size",modifiers:{number:!0}}],attrs:{type:"range",max:"5",step:"0.05"},domProps:{value:e.size},on:{__r:function(t){e.size=e._n(t.target.value)},blur:function(t){return e.$forceUpdate()}}})])])])],1)}),[],!1,null,null,null);t.default=a.exports}}]);