---
parent: Helpers
grand_parent: Components (API)
nav_order: 7
---
# VglRectAreaLightHelper

Creates a visual aid for a RectAreaLight, corresponding [THREE.RectAreaLightHelper](https://threejs.org/docs/#api/en/helpers/RectAreaLightHelper).

Properties of [VglObject3d](../core/vgl-object3d) are also available as mixin. 

## props 

- `color` ***string*** (*optional*) 

  If this is not the set the helper will take the color of the light. 

- `light` ***string*** (*optional*) 

  Name of the RectAreaLight being visualized. 

## data 

- `lightUuid` 

  Light object's UUID. This would be null if light object is not specified by `light` prop. Do
  not set this data manually. 

**initial value:** `null` 

## computed properties 

- `inst` 

  The THREE.RectAreaLightHelper instance. If any cameras specified by the name, it returns a
  THREE.Object3D instance. 

   **dependencies:** `lightUuid`, `vglNamespace`, `light` 


## methods 

- `setLightUuid(light)` 

  Set `lightUuid` data to given object's UUID. 


## Example

{% include example.html url='/examples/helpers/vgl-rect-area-light-helper.html' %}

