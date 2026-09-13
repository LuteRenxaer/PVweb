# RPE谱面根目录结构

**警告：以下所有内容从编写开始时间（2024.7.25）最新RPE版本1.4.1开始编写，更早的加入版本等信息全部待补充。**

## 谱面根目录结构

### BPMList

`BPMList` 是一个 `JsonArray` 类型字段，包含若干个 `JsonObject`。 每个JsonObject包含以下字段：

<table><thead><tr><th style="text-align: center">字段名</th><th style="text-align: center">类型</th><th style="text-align: center">说明</th><th style="text-align: center">加入版本</th></tr></thead><tbody><tr><td style="text-align: center">bpm</td><td style="text-align: center">float</td><td style="text-align: center">BPM值</td><td style="text-align: center">-</td></tr><tr><td style="text-align: center">startTime</td><td style="text-align: center"><a href="./beat.html">beat</a></td><td style="text-align: center">BPM开始时间</td><td style="text-align: center">-</td></tr></tbody></table>

### META

`META` 是一个 `JsonObject` 类型字段，包含以下字段：

<table><thead><tr><th style="text-align: center">字段名</th><th style="text-align: center">类型</th><th style="text-align: center">说明</th><th style="text-align: center">加入版本</th></tr></thead><tbody><tr><td style="text-align: center">RPEVersion</td><td style="text-align: center">int</td><td style="text-align: center">RPE版本，100~160</td><td style="text-align: center">-</td></tr><tr><td style="text-align: center">background</td><td style="text-align: center">string</td><td style="text-align: center">背景图片相对于谱面根目录路径</td><td style="text-align: center">-</td></tr><tr><td style="text-align: center">charter</td><td style="text-align: center">string</td><td style="text-align: center">谱师名义</td><td style="text-align: center">-</td></tr><tr><td style="text-align: center">composer</td><td style="text-align: center">string</td><td style="text-align: center">曲师</td><td style="text-align: center">-</td></tr><tr><td style="text-align: center">id</td><td style="text-align: center">string</td><td style="text-align: center">谱面ID，在RPE中用于识别谱面</td><td style="text-align: center">-</td></tr><tr><td style="text-align: center">illustration</td><td style="text-align: center">string</td><td style="text-align: center">曲绘画师</td><td style="text-align: center">141</td></tr><tr><td style="text-align: center">level</td><td style="text-align: center">string</td><td style="text-align: center">谱面等级</td><td style="text-align: center">-</td></tr><tr><td style="text-align: center">name</td><td style="text-align: center">string</td><td style="text-align: center">谱面名称</td><td style="text-align: center">-</td></tr><tr><td style="text-align: center">offset</td><td style="text-align: center">int</td><td style="text-align: center">音乐偏移，单位为毫秒</td><td style="text-align: center">-</td></tr><tr><td style="text-align: center">song</td><td style="text-align: center">string</td><td style="text-align: center">音乐文件相对于谱面根目录路径</td><td style="text-align: center">-</td></tr></tbody></table>

-   `offset` 字段为负数时，音乐应该在谱面开始前 `-offset` 毫秒时播放；为正数时，音乐应该在谱面开始后 `offset` 毫秒时播放。
-   `id` 字段在RPE自动生成时为 `long`，实际上这个值可以随便篡改为任何字符，所以在实际谱面中存储方式为 `string` 类型。
-   **RPE 1.5.0 ~ RPE 1.6.0 之间的版本（不含RPE 1.6.0，含Alpha版本），META中的 `RPEVersion` 字段保持为 `150`，没有被更改。**
-   **RPE 1.6.1 版本，META中的 `RPEVersion` 字段的值保持为 `160`，没有被更改。**

### chartTime

*模拟器不需要本属性。*

-   `chartTime` 是一个 `double` 类型字段，值的时间单位是秒，表示谱面编辑时长，在 `141` 版本加入。
-   在RPE中，如果谱师在30秒内没有编辑谱面，则该值将不再变动，下次开始编辑后继续计时。（特性被移除）
-   如果RPE失去焦点，RPE仍会继续计时，若RPE重新获得焦点，计时将回溯至失去焦点时的时间。

### judgeLineGroup

*模拟器不需要本属性。*

-   `judgeLineGroup` 是一个 `string[]` 类型字段；
-   每一个 `string` 为一个判定线组。
-   *实际行为待补充。*

### judgeLineList

-   `judgeLineList` 是一个 `JsonArray` 类型字段，包含若干个 [JudgeLine](judgeLine.md)。

### multiLineString

*模拟器不需要本属性。*

-   `multiLineString` 是一个 `string` 类型字段，在RPE中多线编辑时使用，以空格分割，每个数字代表一个判定线。
-   `multiLineString` 中也可能含有 `:` , `1:20` 将选中 `1` 到 `20` 号的所有判定线。

### multiScale

*模拟器不需要本属性。*

-   `multiScale` 是一个 `float`，在RPE中用于缩放多线编辑页面的大小。

### xybind

*模拟器没必要读取本属性。*

-   `xybind` 是一个 `bool` ，用于指示本谱面是否启用了XY绑定。
-   若为 `true`，则表示启用了XY绑定，则每一个 `XEvent` 一定有一个对应同等长度的 `YEvent`。
