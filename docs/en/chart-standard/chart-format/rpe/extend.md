# 扩展参数

## attachUI

`attachUI` 是RPE独有特性，它允许你使用判定线绑定UI元素，使你可以控制UI的位置，透明度，大小等。  
属性对应UI元素列表：

<table><thead><tr><th style="text-align: center">值</th><th style="text-align: center">对应UI元素</th><th style="text-align: center">RPE设置中对应数字</th><th style="text-align: center">锚点</th><th style="text-align: center">注</th></tr></thead><tbody><tr><td style="text-align: center">pause</td><td style="text-align: center">暂停按钮</td><td style="text-align: center">1</td><td style="text-align: center">左上角</td><td style="text-align: center">-</td></tr><tr><td style="text-align: center">combonumber</td><td style="text-align: center">连击数</td><td style="text-align: center">2</td><td style="text-align: center">中心</td><td style="text-align: center">绑定此UI会使此UI透明度受到Alpha事件影响，默认连击大于等于 <code>3</code> 时才会显示</td></tr><tr><td style="text-align: center">combo</td><td style="text-align: center">连击数下的 <code>combo</code> 文字</td><td style="text-align: center">3</td><td style="text-align: center">中心</td><td style="text-align: center">同上</td></tr><tr><td style="text-align: center">score</td><td style="text-align: center">分数</td><td style="text-align: center">4</td><td style="text-align: center">右上角</td><td style="text-align: center">-</td></tr><tr><td style="text-align: center">bar</td><td style="text-align: center">进度条</td><td style="text-align: center">5</td><td style="text-align: center">左侧中心</td><td style="text-align: center"><code>RPE 1.4.0</code> 及以前，此属性绑定的为曲名左侧的白色竖条</td></tr><tr><td style="text-align: center">name</td><td style="text-align: center">谱面名称</td><td style="text-align: center">6</td><td style="text-align: center">左下角</td><td style="text-align: center">-</td></tr><tr><td style="text-align: center">level</td><td style="text-align: center">谱面等级</td><td style="text-align: center">7</td><td style="text-align: center">右下角</td><td style="text-align: center">-</td></tr></tbody></table>

-   在UI被绑定后，判定线将会自动隐藏，UI可以通过类似于子线的方式进行操作，不同的是可以操作UI角度和透明度；判定线实际位置仍然不变。

## anchor

`anchor` 是RPE独有特性，它允许你设置判定线的锚点，它的设计是为文字事件服务的。

-   在RPE中，此设置在顶栏工具栏第二页中，两个数值用空格分割。
-   它是一个 `float[2]`，两个值对应材质的 `x` 和 `y` 坐标。
-   `x` 默认为 `0.5`，即中心，`1` 时判定线纹理向左移，`0` 时判定线纹理向右移。
-   `y` 默认为 `0.5`，即中心，`1` 时判定线纹理向下移，`0` 时判定线纹理向上移。
-   此字段同样可以影响自定义纹理的位置

## Texture

RPE允许设置判定线的 `Texture` 字段来修改判定线的纹理，当判定线的纹理被修改后，判定线颜色不再受到AP/FC判定线颜色指示影响。

-   若不使用[scaleXEvents](./extendEvent.md#scalexevents)和[scaleYEvents](./extendEvent.md#scaleyevents)，修改判定线纹理大小，则默认缩放为 `1`。
-   若纹理为一个GIF动图，则会受到[gifEvents](./extendEvent.md#gifevents)的影响。（`150`版本开始支持）

## easingType

`easingType` 是RPE用于对应缓动的数字标识，对照表如下：

<table><thead><tr><th style="text-align: center">值</th><th style="text-align: center">对应缓动</th><th style="text-align: center">注</th></tr></thead><tbody><tr><td style="text-align: center">1</td><td style="text-align: center">Linear</td><td style="text-align: center">-</td></tr><tr><td style="text-align: center">2</td><td style="text-align: center">Out Sine</td><td style="text-align: center">-</td></tr><tr><td style="text-align: center">3</td><td style="text-align: center">In Sine</td><td style="text-align: center">-</td></tr><tr><td style="text-align: center">4</td><td style="text-align: center">Out Quad</td><td style="text-align: center">-</td></tr><tr><td style="text-align: center">5</td><td style="text-align: center">In Quad</td><td style="text-align: center">-</td></tr><tr><td style="text-align: center">6</td><td style="text-align: center">In Out Sine</td><td style="text-align: center">-</td></tr><tr><td style="text-align: center">7</td><td style="text-align: center">In Out Quad</td><td style="text-align: center">-</td></tr><tr><td style="text-align: center">8</td><td style="text-align: center">Out Cubic</td><td style="text-align: center">-</td></tr><tr><td style="text-align: center">9</td><td style="text-align: center">In Cubic</td><td style="text-align: center">-</td></tr><tr><td style="text-align: center">10</td><td style="text-align: center">Out Quart</td><td style="text-align: center">-</td></tr><tr><td style="text-align: center">11</td><td style="text-align: center">In Quart</td><td style="text-align: center">-</td></tr><tr><td style="text-align: center">12</td><td style="text-align: center">In Out Cubic</td><td style="text-align: center">-</td></tr><tr><td style="text-align: center">13</td><td style="text-align: center">In Out Quart</td><td style="text-align: center">-</td></tr><tr><td style="text-align: center">14</td><td style="text-align: center">Out Quint</td><td style="text-align: center">-</td></tr><tr><td style="text-align: center">15</td><td style="text-align: center">In Quint</td><td style="text-align: center">-</td></tr><tr><td style="text-align: center">16</td><td style="text-align: center">Out Expo</td><td style="text-align: center">-</td></tr><tr><td style="text-align: center">17</td><td style="text-align: center">In Expo</td><td style="text-align: center">-</td></tr><tr><td style="text-align: center">18</td><td style="text-align: center">Out Circ</td><td style="text-align: center">-</td></tr><tr><td style="text-align: center">19</td><td style="text-align: center">In Circ</td><td style="text-align: center">-</td></tr><tr><td style="text-align: center">20</td><td style="text-align: center">Out Back</td><td style="text-align: center">-</td></tr><tr><td style="text-align: center">21</td><td style="text-align: center">In Back</td><td style="text-align: center">-</td></tr><tr><td style="text-align: center">22</td><td style="text-align: center">In Out Circ</td><td style="text-align: center">-</td></tr><tr><td style="text-align: center">23</td><td style="text-align: center">In Out Back</td><td style="text-align: center">-</td></tr><tr><td style="text-align: center">24</td><td style="text-align: center">Out Elastic</td><td style="text-align: center">-</td></tr><tr><td style="text-align: center">25</td><td style="text-align: center">In Elastic</td><td style="text-align: center">-</td></tr><tr><td style="text-align: center">26</td><td style="text-align: center">Out Bounce</td><td style="text-align: center">-</td></tr><tr><td style="text-align: center">27</td><td style="text-align: center">In Bounce</td><td style="text-align: center">-</td></tr><tr><td style="text-align: center">28</td><td style="text-align: center">In Out Bounce</td><td style="text-align: center">-</td></tr><tr><td style="text-align: center">29</td><td style="text-align: center">In Out Elastic</td><td style="text-align: center">无法在速度事件使用</td></tr></tbody></table>

-   RPE 1.7.0版本恢复了29号缓动的使用。

你可以在[这个网站](https://easings.net/zh-cn)查看它们的函数等信息。

### Python 缓动示例

```python
import math
import typing

ease_funcs:list[typing.Callable[[float], float]] = [
  lambda t: t, # linear - 1
  lambda t: math.sin((t * math.pi) / 2), # out sine - 2
  lambda t: 1 - math.cos((t * math.pi) / 2), # in sine - 3
  lambda t: 1 - (1 - t) * (1 - t), # out quad - 4
  lambda t: t ** 2, # in quad - 5
  lambda t: -(math.cos(math.pi * t) - 1) / 2, # io sine - 6
  lambda t: 2 * (t ** 2) if t < 0.5 else 1 - (-2 * t + 2) ** 2 / 2, # io quad - 7
  lambda t: 1 - (1 - t) ** 3, # out cubic - 8
  lambda t: t ** 3, # in cubic - 9
  lambda t: 1 - (1 - t) ** 4, # out quart - 10
  lambda t: t ** 4, # in quart - 11
  lambda t: 4 * (t ** 3) if t < 0.5 else 1 - (-2 * t + 2) ** 3 / 2, # io cubic - 12
  lambda t: 8 * (t ** 4) if t < 0.5 else 1 - (-2 * t + 2) ** 4 / 2, # io quart - 13
  lambda t: 1 - (1 - t) ** 5, # out quint - 14
  lambda t: t ** 5, # in quint - 15
  lambda t: 1 if t == 1 else 1 - 2 ** (-10 * t), # out expo - 16
  lambda t: 0 if t == 0 else 2 ** (10 * t - 10), # in expo - 17
  lambda t: (1 - (t - 1) ** 2) ** 0.5, # out circ - 18
  lambda t: 1 - (1 - t ** 2) ** 0.5, # in circ - 19
  lambda t: 1 + 2.70158 * ((t - 1) ** 3) + 1.70158 * ((t - 1) ** 2), # out back - 20
  lambda t: 2.70158 * (t ** 3) - 1.70158 * (t ** 2), # in back - 21
  lambda t: (1 - (1 - (2 * t) ** 2) ** 0.5) / 2 if t < 0.5 else (((1 - (-2 * t + 2) ** 2) ** 0.5) + 1) / 2, # io circ - 22
  lambda t: ((2 * t) ** 2 * ((2.5949095 + 1) * 2 * t - 2.5949095)) / 2 if t < 0.5 else ((2 * t - 2) ** 2 * ((2.5949095 + 1) * (t * 2 - 2) + 2.5949095) + 2) / 2, # io back - 23
  lambda t: 0 if t == 0 else (1 if t == 1 else 2 ** (-10 * t) * math.sin((t * 10 - 0.75) * (2 * math.pi / 3)) + 1), # out elastic - 24
  lambda t: 0 if t == 0 else (1 if t == 1 else - 2 ** (10 * t - 10) * math.sin((t * 10 - 10.75) * (2 * math.pi / 3))), # in elastic - 25
  lambda t: 7.5625 * (t ** 2) if (t < 1 / 2.75) else (7.5625 * (t - (1.5 / 2.75)) * (t - (1.5 / 2.75)) + 0.75 if (t < 2 / 2.75) else (7.5625 * (t - (2.25 / 2.75)) * (t - (2.25 / 2.75)) + 0.9375 if (t < 2.5 / 2.75) else (7.5625 * (t - (2.625 / 2.75)) * (t - (2.625 / 2.75)) + 0.984375))), # out bounce - 26
  lambda t: 1 - (7.5625 * ((1 - t) ** 2) if ((1 - t) < 1 / 2.75) else (7.5625 * ((1 - t) - (1.5 / 2.75)) * ((1 - t) - (1.5 / 2.75)) + 0.75 if ((1 - t) < 2 / 2.75) else (7.5625 * ((1 - t) - (2.25 / 2.75)) * ((1 - t) - (2.25 / 2.75)) + 0.9375 if ((1 - t) < 2.5 / 2.75) else (7.5625 * ((1 - t) - (2.625 / 2.75)) * ((1 - t) - (2.625 / 2.75)) + 0.984375)))), # in bounce - 27
  lambda t: (1 - (7.5625 * ((1 - 2 * t) ** 2) if ((1 - 2 * t) < 1 / 2.75) else (7.5625 * ((1 - 2 * t) - (1.5 / 2.75)) * ((1 - 2 * t) - (1.5 / 2.75)) + 0.75 if ((1 - 2 * t) < 2 / 2.75) else (7.5625 * ((1 - 2 * t) - (2.25 / 2.75)) * ((1 - 2 * t) - (2.25 / 2.75)) + 0.9375 if ((1 - 2 * t) < 2.5 / 2.75) else (7.5625 * ((1 - 2 * t) - (2.625 / 2.75)) * ((1 - 2 * t) - (2.625 / 2.75)) + 0.984375))))) / 2 if t < 0.5 else (1 +(7.5625 * ((2 * t - 1) ** 2) if ((2 * t - 1) < 1 / 2.75) else (7.5625 * ((2 * t - 1) - (1.5 / 2.75)) * ((2 * t - 1) - (1.5 / 2.75)) + 0.75 if ((2 * t - 1) < 2 / 2.75) else (7.5625 * ((2 * t - 1) - (2.25 / 2.75)) * ((2 * t - 1) - (2.25 / 2.75)) + 0.9375 if ((2 * t - 1) < 2.5 / 2.75) else (7.5625 * ((2 * t - 1) - (2.625 / 2.75)) * ((2 * t - 1) - (2.625 / 2.75)) + 0.984375))))) / 2, # io bounce - 28
  lambda t: 0 if t == 0 else (1 if t == 0 else (-2 ** (20 * t - 10) * math.sin((20 * t - 11.125) * ((2 * math.pi) / 4.5))) / 2 if t < 0.5 else (2 ** (-20 * t + 10) * math.sin((20 * t - 11.125) * ((2 * math.pi) / 4.5))) / 2 + 1) # io elastic - 29
]
```
