---
parent: Core
grand_parent: Components (API)
nav_order: 0
---
# VglGeometry

This is the base mixin component for all geometry components,
corresponding [THREE.Geometry](https://threejs.org/docs/index.html#api/core/Geometry).
This can also be used directly for building custom geometries. 

## props 

- `name` ***name*** (*optional*) 

  Name of the component. 

- `position-attribute` ***floatArray*** (*optional*) 

  The x, y, and z coordinates of each vertex in this geometry. 

- `color-attribute` ***floatArray*** (*optional*) 

  The red, green, and blue channels of vertex color of each vertex in this geometry. 

- `normal-attribute` ***floatArray*** (*optional*) 

  The x, y, and z components of the vertex normal vector of each vertex in this geometry. 

## computed properties 

- `inst` 

  The THREE.BufferGeometry instance. 

## methods 

- `update()` 

  Emit an event in `geometries` namespace. Call this method after editing instance's
  properties. 


## Example

{% include example.html url='/examples/core/vgl-geometry.html' %}

