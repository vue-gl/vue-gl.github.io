---
parent: Materials
grand_parent: Components (API)
nav_order: 3
---
# VglMeshBasicMaterial

A material for drawing geometries in a simple shaded (flat or wireframe) way,
corresponding [THREE.MeshBasicMaterial](https://threejs.org/docs/index.html#api/materials/MeshBasicMaterial).
This material is not affected by lights.

Properties of [VglMaterial](vgl-material) are also available as mixin. 

## props 

- `color` ***string*** (*optional*) `default: '#fff'` 

  CSS style color of the material. 

- `map` ***string*** (*optional*) 

  The color map of the material. 

## computed properties 

- `inst` 

  The THREE.MeshBasicMaterial instance. 


## Example

{% include example.html url='/examples/materials/vgl-mesh-basic-material.html' %}

