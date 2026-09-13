# Video Background

In prpr, you can play a video in the background, but the audio will not be played. However, since most videos have a large file size and the upload limit for prpr charts is 10MB, charts that have large BGA may not be uploaded. If you need to have a video background, it is recommended that the video background is used for small animations and compressed (including but not limited to removing audio).

## Format

You need to add a `videos` field in the `extra.json` file, whose content is an array of `Video`.

### Video

The format for a single `Video` is as shown below:

```json
{
	"path": "bga.mp4",
	"time": [0, 0, 1],
	"scale": "cropCenter",
	"alpha": 1.0,
	"dim": 0.3
}
```

The `path` field is mandatory to be filled in, and it should point to the file path of the video, the other four fields are optional.

`time` indicates the start time of the video in terms of beat numbers.

`scale` indicates how the video is scaled. When making a chart, you need to consider how the chart will look at different aspect ratios. For this purpose, the `scale` field has 3 options available:

-   `cropCenter` (default): Scales up the video uniformly until it fills the screen.
-   `inside`: Scales down the video uniformly, ensures that the entire video is shown within the screen.
-   `fit`: Forcefully stretch the video to the entire screen.

`alpha` 和 `dim` 分别代表视频的不透明度（若透明，则会显示下方的曲绘）和昏暗程度，他们都是 [`动画变量`](../index.md#动画变量)。
