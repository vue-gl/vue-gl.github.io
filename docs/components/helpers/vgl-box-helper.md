---
parent: Helpers
grand_parent: Components (API)
nav_order: 2
---
# VglBoxHelper

A helper component to show the world-axis-aligned bounding box around its parent,
corresponding [THREE.BoxHelper](https://threejs.org/docs/index.html#api/helpers/BoxHelper).

Properties of [VglObject3d](../core/vgl-object3d) are also available as mixin. 

## props 

- `color` ***string*** (*optional*) `default: '#ff0'` 

  Size of the lines representing the axes. 

- `object` ***name*** (*optional*) 

  Name of the object to show the world-axis-aligned boundingbox. 

## computed properties 

- `inst` 

  The THREE.BoxHelper instance. 

   **dependencies:** `color` 


## methods 

- `setFromObject(obj)` 

  Set the geometry of the helper box from given object. 


## Example

{% include example.html url='/examples/helpers/vgl-box-helper.html' %}

