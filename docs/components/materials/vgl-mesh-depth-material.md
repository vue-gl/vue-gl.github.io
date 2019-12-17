---
parent: Materials
grand_parent: Components (API)
nav_order: 4
---
# VglMeshDepthMaterial

A material for drawing geometry by depth,
corresponding [THREE.MeshDepthMaterial](https://threejs.org/docs/index.html#api/materials/MeshDepthMaterial).
This material is not affected by lights.

Properties of [VglMaterial](vgl-material) are also available as mixin. 

## props 

- `fog` ***boolean*** (*optional*) 

  Whether the material is affected by fog. 

- `map` ***string*** (*optional*) 

  The color map of the material. 

## computed properties 

- `inst` 

  The THREE.MeshDepthMaterial instance. 


## Example

{% include example.html url='/examples/materials/vgl-mesh-depth-material.html' %}

