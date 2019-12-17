---
parent: Geometries
grand_parent: Components (API)
nav_order: 2
---
# VglConeGeometry

This is a component for generating cone geometries,
corresponding [THREE.ConeGeometry](https://threejs.org/docs/index.html#api/geometries/ConeGeometry).

Properties of [VglCylinderGeometry](vgl-cylinder-geometry) are also available as mixin. 

## props 

- `radius` ***number*** (*optional*) `default: 1` 

  Radius of the cone at the base. 

## computed properties 

- `inst` 

   **dependencies:** `radius`, `height`, `radialSegments`, `heightSegments`, `openEnded`, `thetaStart`, `thetaLength` 



## Example

{% include example.html url='/examples/geometries/vgl-cone-geometry.html' %}

