---
parent: Geometries
grand_parent: Components (API)
nav_order: 0
---
# VglBoxGeometry

This is the quadrilateral primitive geometry component,
corresponding [THREE.BoxGeometry](https://threejs.org/docs/index.html#api/geometries/BoxGeometry).

Properties of [VglGeometry](../core/vgl-geometry) are also available as mixin. 

## props 

- `width` ***number*** (*optional*) `default: 1` 

  Width of the sides on the X axis. 

- `height` ***number*** (*optional*) `default: 1` 

  Height of the sides on the Y axis. 

- `depth` ***number*** (*optional*) `default: 1` 

  Depth of the sides on the Z axis. 

- `width-segments` ***number*** (*optional*) `default: 1` 

  Number of segmented faces along the width of the sides. 

- `height-segments` ***number*** (*optional*) `default: 1` 

  Number of segmented faces along the height of the sides. 

- `depth-segments` ***number*** (*optional*) `default: 1` 

  Number of segmented faces along the depth of the sides. 

## computed properties 

- `inst` 

   **dependencies:** `width`, `height`, `depth`, `widthSegments`, `heightSegments`, `depthSegments` 



## Example

{% include example.html url='/examples/geometries/vgl-box-geometry.html' %}

