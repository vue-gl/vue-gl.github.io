---
parent: Cameras
grand_parent: Components (API)
nav_order: 1
---
# VglOrthographicCamera

Camera that uses orthographic projection,
corresponding [THREE.OrthographicCamera](https://threejs.org/docs/index.html#api/cameras/OrthographicCamera).
Camera frustum top, bottom, left, and right planes are automatically set to the renderer size.

Properties of [VglCamera](vgl-camera) are also available as mixin. 

## props 

- `zoom` ***number*** (*optional*) `default: 1` 

  Zoom factor of the camera. 

- `near` ***number*** (*optional*) `default: 0.1` 

  Camera frustum near plane. 

- `far` ***number*** (*optional*) `default: 2000` 

  Camera frustum far plane. 

## computed properties 

- `inst` 

  The THREE.OrthographicCamera instance. 


## Example

{% include example.html url='/examples/cameras/vgl-orthographic-camera.html' %}

