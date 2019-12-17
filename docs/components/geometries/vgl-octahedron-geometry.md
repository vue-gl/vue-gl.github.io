---
parent: Geometries
grand_parent: Components (API)
nav_order: 8
---
# VglOctahedronGeometry

A component for generating a octahedron geometries,
corresponding [THREE.OctahedronGeometry](https://threejs.org/docs/index.html#api/geometries/OctahedronGeometry).

Properties of [VglGeometry](../core/vgl-geometry) are also available as mixin. 

## props 

- `radius` ***number*** (*optional*) `default: 1` 

  Radius of the octahedron. 

- `detail` ***number*** (*optional*) 

  Setting this to a value greater than 0 adds vertices making it no longer a octahedron. 

## computed properties 

- `inst` 

   **dependencies:** `radius`, `detail` 



## Example

{% include example.html url='/examples/geometries/vgl-octahedron-geometry.html' %}

