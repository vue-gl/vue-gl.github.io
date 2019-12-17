---
parent: Helpers
grand_parent: Components (API)
nav_order: 5
---
# VglGridHelper

A component to define grids,
corresponding [THREE.GridHelper](https://threejs.org/docs/index.html#api/helpers/GridHelper).
Grids are two-dimensional arrays of lines.

Properties of [VglObject3d](../core/vgl-object3d) are also available as mixin. 

## props 

- `size` ***number*** (*optional*) `default: 10` 

  The size of the grid. 

- `divisions` ***number*** (*optional*) `default: 10` 

  The number of divisions across the grid. 

- `color-center-line` ***string*** (*optional*) `default: '#444444'` 

  The color of the centerline. 

- `color-grid` ***string*** (*optional*) `default: '#888888'` 

  The color of the lines of the grid. 

## computed properties 

- `inst` 

  The THREE.GridHelper instance. 

   **dependencies:** `size`, `divisions`, `colorCenterLine`, `colorGrid` 



## Example

{% include example.html url='/examples/helpers/vgl-grid-helper.html' %}

