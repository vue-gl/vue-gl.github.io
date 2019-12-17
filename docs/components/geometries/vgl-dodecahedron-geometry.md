---
parent: Geometries
grand_parent: Components (API)
nav_order: 4
---
# VglDodecahedronGeometry

A component for generating a dodecahedron geometries,
corresponding [THREE.DodecahedronGeometry](https://threejs.org/docs/index.html#api/geometries/DodecahedronGeometry).

Properties of [VglGeometry](../core/vgl-geometry) are also available as mixin. 

## props 

- `radius` ***number*** (*optional*) `default: 1` 

  Radius of the dodecahedron. 

- `detail` ***number*** (*optional*) 

  Setting this to a value greater than 0 adds vertices making it no longer a dodecahedron. 

## computed properties 

- `inst` 

   **dependencies:** `radius`, `detail` 



## Example

{% include example.html url='/examples/geometries/vgl-dodecahedron-geometry.html' %}

