---
parent: Geometries
grand_parent: Components (API)
nav_order: 1
---
# VglCircleGeometry

This is a simple shape component of Euclidean geometry,
corresponding [THREE.CircleGeometry](https://threejs.org/docs/index.html#api/geometries/CircleGeometry).
It is contructed from a number of triangular segments that are oriented around a central point
and extend as far out as a given radius.
It is built counter-clockwise from a start angle and a given central angle.
It can also be used to create regular polygons,
where the number of segments determines the number of sides.

Properties of [VglGeometry](../core/vgl-geometry) are also available as mixin. 

## props 

- `radius` ***number*** (*optional*) `default: 1` 

  Radius of the circle. 

- `segments` ***number*** (*optional*) `default: 8` 

  Number of segments (triangles). 

- `theta-start` ***number*** (*optional*) 

  Start angle for first segment. 

- `theta-length` ***number*** (*optional*) `default: [object Object]` 

  The central angle of the circular sector. 

## computed properties 

- `inst` 

   **dependencies:** `radius`, `segments`, `thetaStart`, `thetaLength` 



## Example

{% include example.html url='/examples/geometries/vgl-circle-geometry.html' %}

