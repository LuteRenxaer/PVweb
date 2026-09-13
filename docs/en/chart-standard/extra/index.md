# 扩展特性文档

prpr not only supports the official Phigros, ‘pec’, and ‘rpe’ chart format, but also added some unique features. These chart features can only be used in prpr and other clients that built on top of prpr. These features include:

-   [Effects](./effect/index.md)
-   [Video Background](./video/index.md)

The configuration of chart features need to be saved in `extra.json` which can be found in the root directory of the zip file. In order to use the chart features, you need to edit the JSON file manually. If you don’t know what JSON is, see [JSON Tutorial](http://c.biancheng.net/json/).

## BPM Config

**Before making any configurations, you need to set the BPM of the song/track in `extra.json`**. For example:

```json
{
   "bpm": [
      { "time": [0, 0, 1], "bpm" : 200.0 },
      { "time": [10, 1, 2], "bpm" : 250.0 }
   ],
   ...
}
```

This shows that the song has an initial BPM of `200`, the BPM then changes to `250` at the 10.5 beat.

## Animation variables

Animation variables are often used in charts. For example, in RPE, the X coordinate change event is actually the X coordinate as an animation variable.

There are 2 formats for prpr’s animation variables. The first is for a constant value, which means that the variable will not change and will always have the same value. This format is applied just for the ease of filling up the fields. The second format is the same as the one in RPE and is composed of multiple `Event`. The format of a single `Event` is shown below:

```json
{
	"startTime": [0, 0, 1],
	"endTime": [0, 0, 1],
	"easingType": 2,
	"easingLeft": 0.0,
	"easingRight": 1.0,
	"start": ...,
	"end": ...
}
```

where `startTime` and `endTime` are the event’s start time and end time respectively; `easingType` is the type of easing; `easingLeft` and `easingRight` are optional, it represents the start and end position of the ease.

`start` and `end` represent the values at the beginning and end of the time. The type of the value here depends on the type of the animation variable itself, which can be any of the following types:

-   `float`: a single decimal.
-   `vec2`: 2 decimal representing a 2D vector, represented as an array.
-   `color`: 4 integers (0-255) that represents a color, the format is `[R, G, B, A]`.

For example, the following animation variable will vary linearly from `0` to `1` over a given time period:

```json
[
	{
		"startTime": [2, 0, 1],
		"endTime": [4, 0, 1],
		"easingType": 2,
		"start": 0.0,
		"end": 0.1
	}
]
```
