---
parent: Helpers
grand_parent: Components (API)
nav_order: 1
---
# VglAxesHelper

An axis object to visualize the the 3 axes in a simple way,
corresponding [THREE.AxesHelper](https://threejs.org/docs/index.html#api/helpers/AxesHelper).
The X axis is red. The Y axis is green. The Z axis is blue.

Properties of [VglObject3d](../core/vgl-object3d) are also available as mixin. 

## props 

- `size` ***number*** (*optional*) `default: 1` 

  Size of the lines representing the axes. 

## computed properties 

- `inst` 

  The THREE.AxesHelper instance. 

   **dependencies:** `size` 



## Example

{% include example.html url='/examples/helpers/vgl-axes-helper.html' %}

