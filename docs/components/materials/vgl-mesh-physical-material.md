---
parent: Materials
grand_parent: Components (API)
nav_order: 8
---
# VglMeshPhysicalMaterial

An extension of the mesh standard material that allows for greater control over reflectivity,
corresponding [THREE.MeshPhysicalMaterial](https://threejs.org/docs/index.html#api/materials/MeshPhysicalMaterial).

Properties of [VglMeshStandardMaterial](vgl-mesh-standard-material) are also available as mixin. 

## props 

- `clearcoat` ***number*** (*optional*) 

  ClearCoat level, from 0.0 to 1.0. 

- `clearcoat-roughness` ***number*** (*optional*) 

  How rough the clearCoat appears, from 0.0 to 1.0. 

- `reflectivity` ***number*** (*optional*) `default: 0.5` 

  Degree of reflectivity, from 0.0 to 1.0. 

## computed properties 

- `inst` 

  The THREE.MeshPhysicalMaterial instance. 


## Example

{% include example.html url='/examples/materials/vgl-mesh-physical-material.html' %}

