---
parent: Materials
grand_parent: Components (API)
nav_order: 7
---
# VglMeshPhongMaterial

A material for shiny surfaces with specular highlights,
corresponding [THREE.MeshPhongMaterial](https://threejs.org/docs/index.html#api/materials/MeshPhongMaterial).

Properties of [VglMaterial](vgl-material) are also available as mixin. 

## props 

- `color` ***string*** (*optional*) `default: '#fff'` 

  CSS style color of the material. 

- `map` ***string*** (*optional*) 

  The color map of the material. 

- `specular` ***string*** (*optional*) `default: '#111111'` 

  Specular color of the material. 

- `shininess` ***number*** (*optional*) `default: 30` 

  How shiny the specular highlight is. A higher value gives a sharper highlight. 

## computed properties 

- `inst` 

  The THREE.MeshPhongMaterial instance. 


## Example

{% include example.html url='/examples/materials/vgl-mesh-phong-material.html' %}

