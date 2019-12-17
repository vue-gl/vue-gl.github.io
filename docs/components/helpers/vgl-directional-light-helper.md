---
parent: Helpers
grand_parent: Components (API)
nav_order: 4
---
# VglDirectionalLightHelper

A helper component to assist with visualizing a DirectionalLight's effect on the scene,
corresponding [THREE.DirectionalLightHelper](https://threejs.org/docs/index.html#api/helpers/DirectionalLightHelper).

Properties of [VglObject3d](../core/vgl-object3d) are also available as mixin. 

## props 

- `color` ***string*** (*optional*) 

  If this is not the set the helper will take the color of the light. 

- `size` ***number*** (*optional*) `default: 1` 

  Dimensions of the plane. 

- `light` ***string*** (*optional*) 

  Name of the directional light being visualized. 

## data 

- `lightUuid` 

  Light object's UUID. This would be null if light object is not specified by `light` prop. Do
  not set this data manually. 

**initial value:** `null` 

## computed properties 

- `inst` 

  The THREE.DirectionalLightHelper instance. If any cameras specified by the name, it returns
  a THREE.Object3D instance. 

   **dependencies:** `lightUuid`, `vglNamespace`, `light`, `size` 


## methods 

- `setLightUuid(light)` 

  Set `lightUuid` data to given object's UUID. 


## Example

{% include example.html url='/examples/helpers/vgl-directional-light-helper.html' %}

