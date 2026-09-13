# 构建指南

Phira-Vrenxz 的源码在 [LuteRenxaer/Phira-Vrenxz](https://github.com/LuteRenxaer/Phira-Vrenxz)。这一页讲怎么把它编出来；如果你只是想玩，直接下 [Releases](https://github.com/LuteRenxaer/Phira-Vrenxz/releases) 里的包就行。

## 环境要求

- **Rust**：官方推荐 nightly，stable 一般也能编过（没有锁定工具链文件，用默认的就行）
- **桌面端**：Windows 需要 MSVC（Visual Studio 生成工具）或 MinGW-w64；Linux 需要 ALSA、GTK3 等系统库；macOS 需要 Xcode 命令行工具
- **Android**：JDK 17 及以上、Android SDK（platform 37）、Android NDK（用于 `cargo ndk`）；Gradle 用仓库里自带的 wrapper（9.5.0），不用另外装
- **必须从克隆下来的仓库构建**：工作区里带了两个 vendor 依赖（`vendor/prpr-miniquad`、vendor/phira-mp），Cargo 里也配了 `[patch]`，单独把某个 crate 拎出去编会失败。

## 快速开始（桌面端）

```bash
git clone https://github.com/LuteRenxaer/Phira-Vrenxz.git
cd Phira-Vrenxz

# 直接跑（debug）
cargo run -p Phira-Vrenxz-main

# 发布构建
cargo build --release -p Phira-Vrenxz-main
```

产物在 `target/release/Phira-Vrenxz-main.exe`（Windows）或 `target/release/Phira-Vrenxz-main`（Linux、macOS）。

## 运行时的几个注意点

- **资源目录**：程序启动时会从可执行文件所在目录往上找，遇到含 `assets/` 的目录就把工作目录切过去。所以在仓库里直接跑（`target/release/` 就在 `assets/` 下面）**不需要**额外复制资源；只有把 exe 单独拷出去发布时，才需要在 exe 同级目录放一份 `assets/`。
- **数据目录**：首次运行会自动创建 `data/`，账号、设置、谱面库、缓存都在里面。
- **功能开关**：`Phira-Vrenxz-main` 默认打开 `video`（视频谱面 / 解锁动画）与 `chat`（多人房间聊天输入框）；想少编点依赖可以加 `--no-default-features`。
- **旧数据**：换版本后第一次启动会检查本机有没有旧版 PhirLie / Phira-Vrenxz 的 data 目录并询问是否同步；也可以在 设置 → 存储与重置 里手动同步。

## 分平台步骤

| 平台 | 页面 |
| --- | --- |
| Windows（MSVC 工具链） | [Windows MSVC](./Windows_Msvc.md) |
| Windows（GNU 工具链） | [Windows GNU](./Windows_Gnu.md) |
| Linux | [Linux](./Linux.md) |
| macOS | [macOS](./macOS.md) |
| iOS | [iOS](./iOS.md) |
| Android | [Android](./Android.md) |
| OpenHarmony | [OpenHarmony](./OpenHarmony.md) |

还有两页通用内容：[安装 cargo / Rust 工具链](./cargo.md)、[静态库（prpr-avc）](./StaticLib.md)。

## 工作区里都有什么

| 目录 | 说明 |
| --- | --- |
| `prpr` / `prpr-l10n` / `prpr-avc` / `prpr-pbc` | 引擎与配套库 |
| `Phira-Vrenxz` | 游戏本体（lib，`libphira_vrenxz`，Android 上就是它编出的 .so） |
| `Phira-Vrenxz-main` | 桌面端可执行程序 |
| `Phira-Vrenxz-monitor` | 服务器监控用的图形小工具 |
| `Android` | Android 外壳工程（Java + Gradle） |
| `vendor` | 打了补丁的 miniquad 与 phira-mp |
