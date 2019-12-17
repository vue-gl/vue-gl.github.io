---
parent: Materials
grand_parent: Components (API)
nav_order: 11
---
# VglPointsMaterial

The default material used by [VglPoints](vgl-points),
corresponding [THREE.PointsMaterial](https://threejs.org/docs/index.html#api/materials/PointsMaterial).

Properties of [VglMaterial](vgl-material) are also available as mixin. 

## props 

- `color` ***string*** (*optional*) `default: '#fff'` 

  CSS style color of the material. 

- `size` ***number*** (*optional*) `default: 1` 

  The size of the points. 

- `disable-size-attenuation` ***boolean*** (*optional*) 

  Specify whether points' size will get smaller with the distance. 

## computed properties 

- `inst` 

  The THREE.PointsMaterial instance. 


## Example

{% include example.html url='/examples/materials/vgl-points-material.html' %}

