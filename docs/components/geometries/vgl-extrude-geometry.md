---
parent: Geometries
grand_parent: Components (API)
nav_order: 5
---
# VglExtrudeGeometry

A component for creating extruded geometry from a path shape,
corresponding [THREE.ExtrudeGeometry](https://threejs.org/docs/index.html#api/geometries/ExtrudeGeometry).

Properties of [VglGeometry](../core/vgl-geometry) are also available as mixin. 

## props 

- `shapes` ***names*** (*optional*) 

  The Shape names 

- `curve-segments` ***number*** (*optional*) 

  int. Number of points on the curves 

- `steps` ***number*** (*optional*) 

  int. Number of points used for subdividing segments
  along the depth of the extruded spline 

- `depth` ***number*** (*optional*) 

  float. Depth to extrude the shape 

- `bevel-enabled` ***boolean*** (*optional*) 

  Apply beveling to the shape 

- `bevel-thickness` ***number*** (*optional*) 

  float. How deep into the original shape the bevel goes 

- `bevel-size` ***number*** (*optional*) 

  float. Distance from the shape outline that the bevel extends 

- `bevel-offset` ***number*** (*optional*) 

  float. Distance from the shape outline that the bevel starts 

- `bevel-segments` ***number*** (*optional*) 

  int. Number of bevel layers 

- `extrude-path` ***Object*** (*optional*) 

  THREE.Curve. A 3D spline path along which the shape should be extruded 

- `uv-generator` ***Object*** (*optional*) 

  Object that provides UV generator functions 

## data 

- `shapeNames` 

**initial value:** `[object Object]` 

## computed properties 

- `options` 
- `inst` 

   **dependencies:** `shapeNames`, `vglNamespace`, `options` 


## methods 

- `setShapeNames()` 

  Update the array of Shape names and Shape UUIDs and emit an event. 


## Example

{% include example.html url='/examples/geometries/vgl-extrude-geometry.html' %}

