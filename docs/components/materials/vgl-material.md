---
parent: Materials
grand_parent: Components (API)
nav_order: 2
---
# VglMaterial

Abstract mixin component for materials,
corresponding [THREE.Material](https://threejs.org/docs/index.html#api/materials/Material). 

## props 

- `name` ***name*** (*optional*) 

  Name of the material. 

- `side` ***string*** (*optional*) `default: 'front'` 

  Defines which side of faces will be rendered. front, back or double. 

- `vertex-colors` ***string*** (*optional*) `default: 'no'` 

  Defines whether vertex coloring is used. Other options are 'vertex' and 'face'. 

## computed properties 

- `inst` 

  The THREE.Material instance. 

## methods 

- `update()` 

  Emit an event in `materials` namespace. Call this method after editing instance's
  properties. 

