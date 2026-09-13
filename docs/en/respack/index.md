# Respack

In prpr, you can customize the respack. The respack consists of how the notes look, particle effects, hit sound effects, etc. You can find premade respacks, or you choose to make one yourself. The file structure of the respack is explained in detailed below.

## Structure

A Respack is a single zip archive containing the configuration file `info.yml` and other resource files. Some of the resource files are required and some are optional.

### Resource files

The resource files must include:

-   `click.png` and `click_mh.png`: The note skin for click notes, `mh` represents simultaneous clicks.
-   `drag.png` and `drag_mh.png`: The note skin for drag notes, `mh` represents simultaneous drags.
-   `flick.png` and `flick_mh.png`: The note skin for flick notes, `mh` represents simultaneous flicks.
-   `hold.png` and `hold_mh.png`: The note skin for hold notes, `mh` represents simultaneous holds.
-   `hit_fx.png`: The image for hit effect.

The resource files can also include (If they are not included, the default will be used):

-   `click.ogg`, `drag.ogg` and `flick.ogg`: The sound effects for the corresponding notes, note that the sampling rate must be 44100 Hz, or else it will cause crashes during rendering (prpr-render).
-   `ending.ogg`：结算界面背景音乐。

### Configuration file

The configuration file uses yml format, with the following required fields (using a default respack as an example):

```yml
name: Default
author: "Mivik & MisaLiu"
hitFx: [5, 6]
holdAtlas: [50, 50]
holdAtlasMH: [50, 110]
```

-   `name`: The name of the respack.
-   `author`: The author/creator of the respack.
-   `description`: The description/introduction of the respack.
-   `hitFx`: The frame count of the width and height of the hit effect. Hit effects are stored as multiple frames in a single image, thus, it is necessary to specify the number of horizontal and vertical frames in the image. For example, in [this image](image/hit_fx.jpg), the horizontal and vertical frame count is 5 and 6 respectively (the last row is not very visible, but it is present there) (the image uses a black background for the ease of viewing, but a transparent background should be used when creating a respack).
-   `holdAtlas`: The height of the tail and head of the hold image. The note skin of the hold is **an image**, it has the tail section, middle section and the head section, from top to bottom of the image. The 2 numbers of `holdAtlas` specify the height of the tail and head respectively in the image. For example, in [this image](image/hold.png), the height of the tail and head section are both 50 pixels.
-   `holdAtlasMH`: Similar to the previous bullet point, specifies the related details for simultaneous holds.

In addition, there are these optional fields:

-   `hitFxDuration` (float, default value: `0.5`): The duration of the hit effect in seconds.
-   `hitFxScale` (float, default value: `1.0`): The scale of the hit effect.
-   `hitFxRotate` (bool, default value: `false`): Whether the hit effect rotates with the note.
-   `hitFxTinted` (bool, default value: `true`): Whether the hit effect is colored according to the color of the judgement line.
-   `hideParticles` (bool, default value: `false`): Whether the hit effect particles are hidden.
-   `holdKeepHead` (bool, default value: `false`): Whether to keep showing the hold’s head section once it touches the line.
-   `holdRepeat` (bool. default value: `false`): Whether the middle section of the hold is repetitively stretched. [The below shows 3 images](image/hold_repeat.jpg), the hold’s image on the left, the image of how the hold will look like when `holdRepeat` is false on the middle, and the image of how the hold will look like when `holdRepeat` is true on the right.
-   `holdCompact`（布尔值，默认 `false`）：是否把 Hold 的头部和尾部与 Hold 中间重叠(将锚点居中)。还是用上面的 [示例](image/hold_repeat.jpg)，如果不开启 `holdCompact`，效果就会是左边第一张图，Hold 的头尾是和中间隔开的；而右边两张图都是开启了 `holdCompact` 的效果；
-   `colorPerfect` (Hexadecimal color code, default value: `0xe1ffec9f`): The color of the judgement line when it is still AP (All Perfect).
-   `colorGood` (Hexadecimal color code, default value: `0xebb4e1ff`): The color of the judgement line when it is still FC (Full Combo).
