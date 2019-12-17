---
parent: Materials
grand_parent: Components (API)
nav_order: 9
---
# VglMeshStandardMaterial

A standard physically based material,
corresponding [THREE.MeshStandardMaterial](https://threejs.org/docs/index.html#api/materials/MeshStandardMaterial).
Using Metallic-Roughness workflow.

Properties of [VglMaterial](vgl-material) are also available as mixin. 

## props 

- `color` ***string*** (*optional*) `default: '#fff'` 

  CSS style color of the material. 

- `map` ***string*** (*optional*) 

  The color map of the material. 

## computed properties 

- `inst` 

  The THREE.MeshStandardMaterial instance. 


## Example

{% include example.html url='/examples/materials/vgl-mesh-standard-material.html' %}

