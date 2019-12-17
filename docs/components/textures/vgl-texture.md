---
parent: Textures
grand_parent: Components (API)
nav_order: 0
---
# VglTexture

A texture to apply to a surface or as a reflection or refraction map,
corresponding [THREE.Texture](https://threejs.org/docs/index.html#api/textures/Texture). 

## props 

- `src` ***string*** (*optional*) 

  The path or URL to the file. This can also be a Data URI. 

- `name` ***name*** (*optional*) 

- `mapping` ***string*** (*optional*) `default: 'uv'` 

- `wrap-s` ***string*** (*optional*) `default: 'clamp-to-edge'` 

- `wrap-t` ***string*** (*optional*) `default: 'clamp-to-edge'` 

- `mag-filter` ***string*** (*optional*) `default: 'linear'` 

- `min-filter` ***string*** (*optional*) `default: 'linear-mip-map-linear'` 

- `anisotropy` ***number*** (*optional*) `default: 1` 

- `format` ***string*** (*optional*) 

- `type` ***string*** (*optional*) `default: 'unsigned-byte'` 

- `offset` ***vector2*** (*optional*) 

- `repeat` ***vector2*** (*optional*) 

- `rotation` ***number*** (*optional*) 

- `center` ***vector2*** (*optional*) 

- `premultiply-alpha` ***boolean*** (*optional*) 

- `unpack-alignment` ***number*** (*optional*) `default: 4` 

- `encoding` ***string*** (*optional*) `default: 'linear'` 

## computed properties 

- `inst` 

  The THREE.Texture instance. 

   **dependencies:** `src`, `format`, `format`, `update` 


## methods 

- `update()` 

  Emit an event in the `textures` namespace. 


## Example

{% include example.html url='/examples/textures/vgl-texture.html' %}

