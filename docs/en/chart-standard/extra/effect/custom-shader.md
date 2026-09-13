# Writing your own shaders

Fragment shaders are used for making the special effects. You can write your own shaders and attach them to the chart’s zip file. In the `shader` field, you need to fill in the `/shader_path`. Note that the `/` must be included and this field must be filled in because it distinguishes the built-in shaders from the custom shaders.

For compatibility, GLSL 1.00 is used.

## Built-in variables

prpr has the following variables used for shaders:

```glsl
varying vec2 uv; // UV of texture
uniform vec2 screenSize; // Size of the screen (Note that it refers to the entire screen, and not just the chart/gameplay area)
uniform sampler2D screenTexture; // Texture of the screen (Refers to the texture of the entire screen, and not just the chart/gameplay area)
uniform float time; // The chart's time in seconds
```

There are also variables that exists, but these variables are useless in the fragment shaders. When defining your own variables, you should avoid these variables’ name:

```glsl
uniform mat4 Model;
uniform mat4 Projection;
uniform vec2 UVScale;
```

## Shader variables

In order to define your own parameters in the chart, you need to define your shader `uniform` variables like this:

```glsl
uniform type name; // %def%
```

where `type` is the variable type, currently `float`, `vec2`, and `vec4` are supported; `name` is the variable name; `def` is the default value. Any of the 3 values cannot be left out.

## Example

The example below shows that the shader will overlay the screen with varying shades of red depending on the value of factor:

```glsl
#version 100
precision mediump float;

varying lowp vec2 uv;
uniform sampler2D screenTexture;

uniform float factor; // %0.5% 0..1

void main() {
  gl_FragColor = mix(texture2D(screenTexture, uv), vec4(1.0, 0.0, 0.0, 1.0), factor);
}
```
