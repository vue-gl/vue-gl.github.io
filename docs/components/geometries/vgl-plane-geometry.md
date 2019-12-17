---
parent: Geometries
grand_parent: Components (API)
nav_order: 9
---
# VglPlaneGeometry

A component for generating plane geometries,
corresponding [THREE.PlaneGeometry](https://threejs.org/docs/index.html#api/geometries/PlaneGeometry).

Properties of [VglGeometry](../core/vgl-geometry) are also available as mixin. 

## props 

- `width` ***number*** (*optional*) `default: 1` 

  Width along the X axis. 

- `height` ***number*** (*optional*) `default: 1` 

  Height along the Y axis. 

- `width-segments` ***number*** (*optional*) `default: 1` 

  Number of segments along the X axis. 

- `height-segments` ***number*** (*optional*) `default: 1` 

  Number of segments along the Y axis. 

## computed properties 

- `inst` 

   **dependencies:** `width`, `height`, `widthSegments`, `heightSegments` 



## Example

{% include example.html url='/examples/geometries/vgl-plane-geometry.html' %}

