# Event

本页将介绍判定线事件下的所有事件。

## speedEvent

<table><thead><tr><th style="text-align: center">字段名</th><th style="text-align: center">类型</th><th style="text-align: center">描述</th><th style="text-align: center">单位</th></tr></thead><tbody><tr><td style="text-align: center">startTime</td><td style="text-align: center">float</td><td style="text-align: center">事件的开始时间</td><td style="text-align: center"><code>1.875 / bpm</code></td></tr><tr><td style="text-align: center">endTime</td><td style="text-align: center">float</td><td style="text-align: center">事件的结束时间</td><td style="text-align: center"><code>1.875 / bpm</code></td></tr><tr><td style="text-align: center">value</td><td style="text-align: center">float</td><td style="text-align: center">事件的值</td><td style="text-align: center">高度单位</td></tr><tr><td style="text-align: center">floorPosition</td><td style="text-align: center">float</td><td style="text-align: center">速度事件开始时判定线共计以流过的速度 (仅方便计算, 高版本不存在)</td><td style="text-align: center">高度单位</td></tr></tbody></table>

## judgeLineMoveEvent

<table><thead><tr><th style="text-align: center">字段名</th><th style="text-align: center">类型</th><th style="text-align: center">描述</th><th style="text-align: center">单位</th></tr></thead><tbody><tr><td style="text-align: center">startTime</td><td style="text-align: center">float</td><td style="text-align: center">事件的开始时间</td><td style="text-align: center"><code>1.875 / bpm</code></td></tr><tr><td style="text-align: center">endTime</td><td style="text-align: center">float</td><td style="text-align: center">事件的结束时间</td><td style="text-align: center"><code>1.875 / bpm</code></td></tr></tbody></table>

-   `formatVersion` 为 `1`

<table><thead><tr><th style="text-align: center">字段名</th><th style="text-align: center">类型</th><th style="text-align: center">描述</th><th style="text-align: center">单位</th></tr></thead><tbody><tr><td style="text-align: center">start</td><td style="text-align: center">int</td><td style="text-align: center">事件的开始坐标</td><td style="text-align: center">-</td></tr><tr><td style="text-align: center">end</td><td style="text-align: center">int</td><td style="text-align: center">事件的结束坐标</td><td style="text-align: center">-</td></tr></tbody></table>

-   坐标计算 (Python):
    
    -   `x = (v - v % 1000) // 1000`
    -   `y = v % 1000`
    -   单位:
        -   `x` `1 / 880` 谱面渲染范围宽度
        -   `y` `1 / 520` 谱面渲染范围高度
-   转化为formatVersion为3的坐标 (python):
    
    -   原事件以 `e` 表示, 新事件以 `ne` 表示
    -   `ne.start = (e.start - e.start % 1000) // 1000`
    -   `ne.end = (e.end - e.end % 1000) // 1000`
    -   `ne.start2 = e.start % 1000`
    -   `ne.end2 = e.end % 1000`
-   `formatVersion` 为 `3`
    

<table><thead><tr><th style="text-align: center">字段名</th><th style="text-align: center">类型</th><th style="text-align: center">描述</th><th style="text-align: center">单位</th></tr></thead><tbody><tr><td style="text-align: center">start</td><td style="text-align: center">float</td><td style="text-align: center">事件的开始x坐标</td><td style="text-align: center">谱面渲染范围宽度</td></tr><tr><td style="text-align: center">end</td><td style="text-align: center">float</td><td style="text-align: center">事件的结束x坐标</td><td style="text-align: center">谱面渲染范围宽度</td></tr><tr><td style="text-align: center">start2</td><td style="text-align: center">float</td><td style="text-align: center">事件的开始y坐标</td><td style="text-align: center">谱面渲染范围高度</td></tr><tr><td style="text-align: center">end2</td><td style="text-align: center">float</td><td style="text-align: center">事件的结束y坐标</td><td style="text-align: center">谱面渲染范围高度</td></tr></tbody></table>

### judgeLineRotateEvent

<table><thead><tr><th style="text-align: center">字段名</th><th style="text-align: center">类型</th><th style="text-align: center">描述</th><th style="text-align: center">单位</th></tr></thead><tbody><tr><td style="text-align: center">startTime</td><td style="text-align: center">int</td><td style="text-align: center">事件的开始时间</td><td style="text-align: center"><code>1.875 / bpm</code></td></tr><tr><td style="text-align: center">endTime</td><td style="text-align: center">int</td><td style="text-align: center">事件的结束时间</td><td style="text-align: center"><code>1.875 / bpm</code></td></tr><tr><td style="text-align: center">start</td><td style="text-align: center">float</td><td style="text-align: center">事件的开始值</td><td style="text-align: center">角度</td></tr><tr><td style="text-align: center">end</td><td style="text-align: center">float</td><td style="text-align: center">事件的结束值</td><td style="text-align: center">角度</td></tr></tbody></table>

### judgeLineDisappearEvent

<table><thead><tr><th style="text-align: center">字段名</th><th style="text-align: center">类型</th><th style="text-align: center">描述</th><th style="text-align: center">单位</th></tr></thead><tbody><tr><td style="text-align: center">startTime</td><td style="text-align: center">float</td><td style="text-align: center">事件的开始时间</td><td style="text-align: center"><code>1.875 / bpm</code></td></tr><tr><td style="text-align: center">endTime</td><td style="text-align: center">float</td><td style="text-align: center">事件的结束时间</td><td style="text-align: center"><code>1.875 / bpm</code></td></tr><tr><td style="text-align: center">start</td><td style="text-align: center">float</td><td style="text-align: center">事件的开始值</td><td style="text-align: center">-</td></tr><tr><td style="text-align: center">end</td><td style="text-align: center">float</td><td style="text-align: center">事件的结束值</td><td style="text-align: center">-</td></tr></tbody></table>
