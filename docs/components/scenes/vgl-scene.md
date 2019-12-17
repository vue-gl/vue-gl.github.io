---
parent: Scenes
grand_parent: Components (API)
nav_order: 0
---
# VglScene

This is where you place objects,
corresponding [THREE.Scene](https://threejs.org/docs/index.html#api/scenes/Scene).

Properties of [VglObject3d](../core/vgl-object3d) are also available as mixin. 

## props 

- `fog` ***fog*** (*optional*) 

  the color, near and far parameters of the scene's fog 

- `background-color` ***string*** (*optional*) 

  Expecting to accept a string representing a color.
  Will be overwrited by backgroundTexture prop if both props are set 

- `background-texture` ***string*** (*optional*) 

  Expecting to accept a string representing a texture name. 

## computed properties 

- `inst` 

  The THREE.Scene instance. 

## methods 

- `setBackgroundTexture(texture)` 

  Set scene's background property to given texture. 

- `emitAsScene()` 

  Emit an event in the `scenes` namespace. 

