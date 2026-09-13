# 音符

音符是谱面的主要构造之一，示例如下：

```text
n1 0 0.500 -40.000 1 0
# 1.00
& 1.00

n2 0 0.250 2.000 -320.000 1 0
# 1.00
& 1.00
```

## 字段说明

-   `n`开头行为音符行，`n`后面的数字代表音符类型，对照如下：

<table><thead><tr><th style="text-align: center">字段值</th><th style="text-align: center">描述</th></tr></thead><tbody><tr><td style="text-align: center">1</td><td style="text-align: center">Tap</td></tr><tr><td style="text-align: center">2</td><td style="text-align: center">Hold</td></tr><tr><td style="text-align: center">3</td><td style="text-align: center">Flick</td></tr><tr><td style="text-align: center">4</td><td style="text-align: center">Drag</td></tr></tbody></table>

-   除了`n2` 外，格式如下：

```text
n类型 所属判定线 打击拍 X坐标 是否从下方下落 是否为假note
# 速度倍率
& 宽度倍率
```

-   `n2`（Hold）格式如下：

```text
n2 所属判定线 开始拍 结束拍 X坐标 是否从下方下落 是否为假note
# 速度倍率
& 宽度倍率
```

-   `是否从下方下落`属性为 `2` 时从下方下落，为`1`时从上方下落。
-   `是否为假note`属性为 `1` 时为假note。
