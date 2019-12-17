---
parent: Lights
grand_parent: Components (API)
nav_order: 2
---
# VglHemisphereLight

A light source positioned directly above the scene, with color fading from the sky color to the
ground color, corresponding [THREE.HemisphereLight](https://threejs.org/docs/index.html#api/lights/HemisphereLight).
This light cannot be used to cast shadows.

Properties of [VglLight](vgl-light) are also available as mixin. 

## props 

- `ground-color` ***string*** (*optional*) `default: '#fff'` 

  The light's ground color 

## computed properties 

- `inst` 

  The THREE.HemisphereLight instance. 


## Example

{% include example.html url='/examples/lights/vgl-hemisphere-light.html' %}

