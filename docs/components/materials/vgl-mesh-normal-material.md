---
parent: Materials
grand_parent: Components (API)
nav_order: 6
---
# VglMeshNormalMaterial

A material that maps the normal vectors to RGB colors,
corresponding [THREE.MeshNormalMaterial](https://threejs.org/docs/index.html#api/materials/MeshNormalMaterial).

Properties of [VglMaterial](vgl-material) are also available as mixin. 

## props 

- `fog` ***boolean*** (*optional*) 

  Whether the material is affected by fog. 

## computed properties 

- `inst` 

  The THREE.MeshNormalMaterial instance. 


## Example

{% include example.html url='/examples/materials/vgl-mesh-normal-material.html' %}

