(window.webpackJsonp=window.webpackJsonp||[]).push([[16],{350:function(e,t,n){var o=n(3),r=n(0),l=n(44),a=[].slice,s=function(e){return function(t,n){var o=arguments.length>2,r=o?a.call(arguments,2):void 0;return e(o?function(){("function"==typeof t?t:Function(t)).apply(this,r)}:t,n)}};o({global:!0,bind:!0,forced:/MSIE .\./.test(l)},{setTimeout:s(r.setTimeout),setInterval:s(r.setInterval)})},456:function(e,t,n){"use strict";n.r(t);n(350);var o=n(309),r={components:{VglRenderer:o.VglRenderer,VglDefs:o.VglDefs,VglUse:o.VglUse,VglScene:o.VglScene,VglMesh:o.VglMesh,VglIcosahedronGeometry:o.VglIcosahedronGeometry,VglOctahedronGeometry:o.VglOctahedronGeometry,VglMeshStandardMaterial:o.VglMeshStandardMaterial,VglSpotLight:o.VglSpotLight,VglPerspectiveCamera:o.VglPerspectiveCamera},data:function(){return{planet:.5,satellite:0}},mounted:function(){var e=this;setInterval((function(){e.planet+=.005,e.satellite+=.02}),10)}},l=n(40),a=Object(l.a)(r,(function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("vgl-renderer",{scopedSlots:e._u([{key:"scene",fn:function(){return[n("vgl-scene",[n("vgl-defs",{scopedSlots:e._u([{key:"satellite",fn:function(){return[n("vgl-mesh",{attrs:{position:"spherical","position-radius":3,"position-phi":Math.PI/2,"position-theta":e.satellite},scopedSlots:e._u([{key:"geometry",fn:function(){return[n("vgl-icosahedron-geometry")]},proxy:!0},{key:"material",fn:function(){return[n("vgl-mesh-standard-material")]},proxy:!0}])})]},proxy:!0}])}),e._v(" "),n("vgl-mesh",{attrs:{position:"spherical","position-radius":5,"position-phi":Math.PI/2,"position-theta":e.planet,"rotation-x":Math.PI/6},scopedSlots:e._u([{key:"geometry",fn:function(){return[n("vgl-octahedron-geometry")]},proxy:!0},{key:"material",fn:function(){return[n("vgl-mesh-standard-material")]},proxy:!0}])},[e._v(" "),e._v(" "),n("vgl-use",{attrs:{href:"satellite"}})],1),e._v(" "),n("vgl-spot-light",{attrs:{"position-y":10,angle:.3,penumbra:.5},scopedSlots:e._u([{key:"target",fn:function(){return[n("vgl-use",{attrs:{href:"satellite"}})]},proxy:!0}])})],1)]},proxy:!0},{key:"camera",fn:function(){return[n("vgl-perspective-camera",{attrs:{"position-x":12,"position-y":8,rotation:"lookAt"}})]},proxy:!0}])})}),[],!1,null,null,null);t.default=a.exports}}]);