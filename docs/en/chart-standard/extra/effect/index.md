# Effects

Effect is a feature that applies shader to the entire chart for a specified amount of time. They can be used to achieve visual effects that are impossible or difficult to achieve in vanilla charts. prpr has some premade shaders, or you can also write your own shaders. For more details, see [Writing your own shader](./custom-shader.md).

## Format

You need to add the `effects` field in `extra.json`, whose content is an array of `Effect`.

### Effect

The format of a single `Effect` is shown below:

```json
{
	"start": [0, 0, 1],
	"end": [0, 0, 1],
	"shader": "Name of shader",
	"global": false,
	"vars": {
		...
	}
}
```

`start` and `end` specify the start and end time respectively in the same format as RPE’s default time format (`[bar number, numerator, denominator]`).

`shader` represents the shader’s name, it can be a built-in shader, or a custom shader.

`global` determines whether the effect will affect UI elements (combo count, pause button, etc). This field can be left blank, and its default value is `false`.

`vars` is an optional parameter, it is a mapping of variable names to [animation variables](../index.md#animation-variables), it is used to specify the parameters of the shader (or rather: shader’s `uniform` variables). i.e. suppose I need to specify the values of 2 variables, `power` and `radius`, I can write it like this:

```json
{
	...,
	"vars": {
		"power": ...,
		"radius": ...
	}
}
```

## Example

The following example will apply the built-in `chromatic` shader from `[2, 0, 1]` to `[4, 0, 1]` and will vary the `power` parameter linearly from `0` to `0.1` in this time period, with the `sampleCount` fixed at `5`:

```json
{
	...,
	"effects": [
		{
			"start": [2, 0, 1],
			"end": [4, 0, 1],
			"shader": "chromatic",
			"vars": {
				"power": [
					{
						"startTime": [2, 0, 1],
						"endTime": [4, 0, 1],
						"easingType": 2,
						"start": 0.0,
						"end": 0.1
					}
				],
				"sampleCount": 5
			}
		}
	]
}
```

## Built-in shaders

You can view all the built-in shaders, along with their parameters and related descriptions, at [here](./builtin/index.md).
