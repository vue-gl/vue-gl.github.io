---
parent: Helpers
grand_parent: Components (API)
nav_order: 3
---
# VglCameraHelper

This helps with visualizing what a camera contains in its frustum,
corresponding [THREE.CameraHelper](https://threejs.org/docs/index.html#api/helpers/CameraHelper).
It visualizes the frustum of a camera using a LineSegments.

Properties of [VglObject3d](../core/vgl-object3d) are also available as mixin. 

## props 

- `camera` ***name*** (*required*) 

  Name of the camera to visualize. 

## data 

- `exist` 

  If camera specified by the name exists or not. Do not set this data manually. 

**initial value:** `false` 

## computed properties 

- `inst` 

  The THREE.CameraHelper instance. If any cameras specified by the name, it returns a
  THREE.Object3D instance. 

   **dependencies:** `exist`, `vglNamespace`, `camera` 


## methods 

- `update(camera)` 

  Update the helper geometry for given camera object. 


## Example

{% include example.html url='/examples/helpers/vgl-camera-helper.html' %}

