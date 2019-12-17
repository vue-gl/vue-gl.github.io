---
parent: Lights
grand_parent: Components (API)
nav_order: 0
---
# VglAmbientLight

A light component globally illuminates all objects in the scene equally,
corresponding [THREE.AmbientLight](https://threejs.org/docs/index.html#api/lights/AmbientLight).
This light cannot be used to cast shadows as it does not have a direction.

Properties of [VglLight](vgl-light) are also available as mixin. 

## computed properties 

- `inst` 

  The THREE.AmbientLight instance. 


## Example

{% include example.html url='/examples/lights/vgl-ambient-light.html' %}

