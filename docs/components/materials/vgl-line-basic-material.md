---
parent: Materials
grand_parent: Components (API)
nav_order: 0
---
# VglLineBasicMaterial

A material for drawing wireframe-style geometries,
corresponding [THREE.LineBasicMaterial](https://threejs.org/docs/index.html#api/materials/LineBasicMaterial).

Properties of [VglMaterial](vgl-material) are also available as mixin. 

## props 

- `color` ***string*** (*optional*) `default: '#fff'` 

  CSS style color of the material. 

- `linewidth` ***number*** (*optional*) `default: 1` 

  The line thickness. 

- `linecap` ***string*** (*optional*) `default: 'round'` 

  Define appearance of line ends. Possible values are "butt", "round" and "square". 

- `linejoin` ***string*** (*optional*) `default: 'round'` 

  Define appearance of line joints. Possible values are "round", "bevel" and "miter". 

## computed properties 

- `inst` 

  The THREE.LineBasicMaterial instance. 


## Example

{% include example.html url='/examples/materials/vgl-line-basic-material.html' %}

