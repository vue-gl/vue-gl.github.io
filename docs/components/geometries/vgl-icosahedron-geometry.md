---
parent: Geometries
grand_parent: Components (API)
nav_order: 6
---
# VglIcosahedronGeometry

A component for generating a icosahedron geometries,
corresponding [THREE.IcosahedronGeometry](https://threejs.org/docs/index.html#api/geometries/IcosahedronGeometry).

Properties of [VglGeometry](../core/vgl-geometry) are also available as mixin. 

## props 

- `radius` ***number*** (*optional*) `default: 1` 

  Radius of the icosahedron. 

- `detail` ***number*** (*optional*) 

  Setting this to a value greater than 0 adds vertices making it no longer a icosahedron. 

## computed properties 

- `inst` 

   **dependencies:** `radius`, `detail` 



## Example

{% include example.html url='/examples/geometries/vgl-icosahedron-geometry.html' %}

