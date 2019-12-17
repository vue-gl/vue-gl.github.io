---
parent: Geometries
grand_parent: Components (API)
nav_order: 11
---
# VglSphereGeometry

This is a component for generating sphere geometries,
corresponding [THREE.SphereGeometry](https://threejs.org/docs/index.html#api/geometries/SphereGeometry).

Properties of [VglGeometry](../core/vgl-geometry) are also available as mixin. 

## props 

- `radius` ***number*** (*optional*) `default: 1` 

  Sphere radius. 

- `width-segments` ***number*** (*optional*) `default: 8` 

  Number of horizontal segments. 

- `height-segments` ***number*** (*optional*) `default: 6` 

  Number of vertical segments. 

- `phi-start` ***number*** (*optional*) 

  Specify horizontal starting angle. 

- `phi-length` ***number*** (*optional*) `default: [object Object]` 

  Specify horizontal sweep angle size. 

- `theta-start` ***number*** (*optional*) 

  Specify vertical starting angle. 

- `theta-length` ***number*** (*optional*) `default: [object Object]` 

  Specify vertical sweep angle size. 

## computed properties 

- `inst` 

   **dependencies:** `radius`, `widthSegments`, `heightSegments`, `phiStart`, `phiLength`, `thetaStart`, `thetaLength` 



## Example

{% include example.html url='/examples/geometries/vgl-sphere-geometry.html' %}

