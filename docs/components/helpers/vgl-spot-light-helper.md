---
parent: Helpers
grand_parent: Components (API)
nav_order: 8
---
# VglSpotLightHelper

This component displays a cone shaped helper object for a SpotLight,
corresponding [THREE.SpotLightHelper](https://threejs.org/docs/index.html#api/helpers/SpotLightHelper).

Properties of [VglObject3d](../core/vgl-object3d) are also available as mixin. 

## props 

- `color` ***string*** (*optional*) 

  If this is not the set the helper will take the color of the light. 

- `light` ***string*** (*optional*) 

  Name of the spot light being visualized. 

## data 

- `lightUuid` 

  Light object's UUID. This would be null if light object is not specified by `light` prop. Do
  not set this data manually. 

**initial value:** `null` 

## computed properties 

- `inst` 

  The THREE.SpotLightHelper instance. If any cameras specified by the name, it returns a
  THREE.Object3D instance. 

   **dependencies:** `lightUuid`, `vglNamespace`, `light` 


## methods 

- `setLightUuid(light)` 

  Set `lightUuid` data to given object's UUID. 


## Example

{% include example.html url='/examples/helpers/vgl-spot-light-helper.html' %}

