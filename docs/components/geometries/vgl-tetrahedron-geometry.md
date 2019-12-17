---
parent: Geometries
grand_parent: Components (API)
nav_order: 12
---
# VglTetrahedronGeometry

A component for generating a tetrahedron geometries,
corresponding [THREE.TetrohedronGeometry](https://threejs.org/docs/index.html#api/geometries/TetrohedronGeometry).

Properties of [VglGeometry](../core/vgl-geometry) are also available as mixin. 

## props 

- `radius` ***number*** (*optional*) `default: 1` 

  Radius of the tetrahedron. 

- `detail` ***number*** (*optional*) 

  Setting this to a value greater than 0 adds vertices making it no longer a tetrahedron. 

## computed properties 

- `inst` 

   **dependencies:** `radius`, `detail` 



## Example

{% include example.html url='/examples/geometries/vgl-tetrahedron-geometry.html' %}

