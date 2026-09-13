# Windows 构建

Windows 上有两条工具链，二选一即可：

| 工具链 | 适合 | 页面 |
| --- | --- | --- |
| MSVC | 默认，和 Visual Studio 生成工具一起装，链接最省事 | [Windows MSVC](./Windows_Msvc.md) |
| GNU（MinGW-w64） | 已经用 MSYS2 / MinGW 的话 | [Windows GNU](./Windows_Gnu.md) |

## 两条都一样的部分

1. 装 Rust（`cargo -V` 能出版本号）；没装的话看[安装 cargo](./cargo.md#windows-msvc-工具链)。
2. 克隆仓库：

```bash
git clone https://github.com/LuteRenxaer/Phira-Vrenxz.git
cd Phira-Vrenxz
```

3. 构建：

```bash
cargo build --release -p Phira-Vrenxz-main
```

4. 产物在 `target\release\Phira-Vrenxz-main.exe`。

## 运行

程序会从 exe 所在目录往上找 `assets/`，找到就把工作目录切过去 —— 直接在仓库里运行（`target\release\` 就在 `assets/` 下面）**不用**复制资源。

要把 exe 拷给别人玩的话，把 `assets/` 放在 exe 同目录下一起拷；首次运行会自动生成 `data/`。

## 常见问题

- 报错 `LINK : fatal error LNK1181: cannot open input file 'kernel32.lib'`：缺 Windows SDK，检查 Visual Studio 安装时有没有勾上 Windows SDK。
- 报错 `failed to send request`、卡在下载：构建脚本要从 GitHub 取 prpr-avc 的静态库，网络不通就会失败，见[静态库](./StaticLib.md)。
- 启动后闪退：确认 `assets/` 在 exe 上层或同层目录里（见上面「运行」）。
