---
parent: Lights
grand_parent: Components (API)
nav_order: 3
---
# VglLight

Abstract mixin component for lights,
corresponding [THREE.Light](https://threejs.org/docs/index.html#api/lights/Light).

Properties of [VglObject3d](../core/vgl-object3d) are also available as mixin. 

## props 

- `color` ***string*** (*optional*) `default: '#fff'` 

  CSS style color of the light. 

- `intensity` ***number*** (*optional*) `default: 1` 

  Numeric value of the light's strength/intensity. 

## computed properties 

- `inst` 

  The THREE.Light instance. 

