---
parent: Materials
grand_parent: Components (API)
nav_order: 14
---
# VglSpriteMaterial

A material for a use with a [VglSprite](vgl-sprite) component,
corresponding [THREE.SpriteMaterial](https://threejs.org/docs/index.html#api/materials/SpriteMaterial).

Properties of [VglMaterial](vgl-material) are also available as mixin. 

## props 

- `color` ***string*** (*optional*) `default: '#fff'` 

  CSS style color of the material. 

- `map` ***name*** (*optional*) 

  The texture map of the material. 

## computed properties 

- `inst` 

  The THREE.SpriteMaterial instance. 


## Example

{% include example.html url='/examples/materials/vgl-sprite-material.html' %}

