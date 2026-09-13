# judgeLine

每一个judgeLine（判定线）都含有以下字段：

<table><thead><tr><th style="text-align: center">字段名</th><th style="text-align: center">类型</th><th style="text-align: center">描述</th></tr></thead><tbody><tr><td style="text-align: center">bpm</td><td style="text-align: center">float</td><td style="text-align: center">该判定线的bpm值</td></tr><tr><td style="text-align: center">notesAbove</td><td style="text-align: center">JsonArray</td><td style="text-align: center">正面下落的音符</td></tr><tr><td style="text-align: center">notesBelow</td><td style="text-align: center">JsonArray</td><td style="text-align: center">反面下落的音符</td></tr><tr><td style="text-align: center">speedEvents</td><td style="text-align: center">JsonArray</td><td style="text-align: center">速度事件</td></tr><tr><td style="text-align: center">judgeLineMoveEvents</td><td style="text-align: center">JsonArray</td><td style="text-align: center">移动事件</td></tr><tr><td style="text-align: center">judgeLineRotateEvents</td><td style="text-align: center">JsonArray</td><td style="text-align: center">旋转事件</td></tr><tr><td style="text-align: center">judgeLineDisappearEvents</td><td style="text-align: center">JsonArray</td><td style="text-align: center">透明度事件</td></tr></tbody></table>

-   **注意: 所有事件及Note的有关时间的项, 单位都为 `1.875 / bpm` s**
-   **这里我们定义:**
    -   “宽度单位” 为 `0.05625 * 谱面渲染范围宽度`
    -   “高度单位” 为 `0.6 * 谱面渲染范围高度`
-   [事件](./event.md)
-   [Note](./note.md)
