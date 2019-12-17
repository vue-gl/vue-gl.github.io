---
parent: Materials
grand_parent: Components (API)
nav_order: 1
---
# VglLineDashedMaterial

A material for drawing wireframe-style geometries,
corresponding [THREE.LineBasicMaterial](https://threejs.org/docs/index.html#api/materials/LineBasicMaterial).

Properties of [VglMaterial](vgl-material) are also available as mixin. 

## props 

- `color` ***string*** (*optional*) `default: '#fff'` 

  CSS style color of the material. 

- `linewidth` ***number*** (*optional*) `default: 1` 

  The line thickness. 

- `dash-size` ***number*** (*optional*) `default: 3` 

  The size of the dash. This is both the gap with the stroke. 

- `gap-size` ***number*** (*optional*) `default: 1` 

  The size of the gap. 

## computed properties 

- `inst` 

  The THREE.LineDashedMaterial instance. 


## Example

{% include example.html url='/examples/materials/vgl-line-dashed-material.html' %}

