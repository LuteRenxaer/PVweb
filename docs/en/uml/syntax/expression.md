# Expression

表达式是由 `Float`, 变量, 运算符和函数组成的. 表达式经过计算是 `Float` 类型的值.

## Operators

The operators that can be used are:

-   `+`: Addition
-   `-`: Subtraction
-   `*`: Multiplication
-   `/`: Division
-   `()`: Parentheses, used to change the order of operations
-   `==`: Is equal to, `1` if true, `0` otherwise.
-   `! =`: If not equal, value is `1` if true, `0` otherwise.
-   `>`: Is more than, `1` if true, `0` otherwise.
-   `<`: Is less than, `1` if true, `0` otherwise.
-   `>=`: Is more than or equal to, `1` if true, `0` otherwise.
-   `<=`: Is less than or equal to, `1` if true, `0` otherwise.

## 函数

可以使用的函数有:

-   `sin(x)`: 正弦函数
-   `cos(x)`: 余弦函数
-   `tan(x)`: 正切函数
-   `abs(x)`: Absolute value function
-   `exp(x)`: 指数函数
-   `atan2(x)`: 反正切函数
-   `ln(x)`: 自然对数函数
-   `sig(x)`: 符号函数, `x` 为 `+0` 或正数时返回 `1`, 为 `-0` 或负数时返回 `-1`
-   `step(x, y)`: 阶跃函数, `x < y` 为 `0` 时返回 `1`, 否则返回 `0`
-   `floor(x)`: 向下取整函数
-   `ceil(x)`: 向上取整函数
-   `round(x)`: 四舍五入函数
-   `max(x, y...)`: 最大值函数
-   `min(x, y...)`: 最小值函数
-   `clamp(x, min, max)`: 将 `x` 限制在 `min` 和 `max` 之间

其中三角函数和反三角函数使用弧度制.
