# macOS

## 准备阶段

1. 确保系统安装了 cargo 和 命令行工具 ，可以在终端使用 `cargo -V` 检查系统是否安装了
   cargo，如果没有安装，请点击 [这里](./cargo.md#macos) 按步骤安装构建工具
2. 从 GitHub 下载源码到本地：
    - 使用 git 工具，在终端输入 `git clone https://github.com/LuteRenxaer/Phira-Vrenxz.git` 将仓库克隆到本地。
    - 您也可以在 Phira-Vrenxz 仓库页面点击 Code 按钮选择 `Download ZIP` 将代码下载到本地，随后将代码解压到本地任意目录。
    - __如果您无法连接到 GitHub，您也可以使用 git 加速网站提供的加速地址克隆与下载。__
    - __若您要构建指定版本的 Phira-Vrenxz，请前往 [release](https://github.com/LuteRenxaer/Phira-Vrenxz/releases) 页面在 Assets
      中选择下载 `Source code (tar.gz)` 到本地，解压到任意路径即可。__
    - __警告：为了防止玄学问题，我们不建议路径中包含除了 ASCII 编码包含字符以外的任何字符。__
3. 静态库文件：参阅[静态库](./StaticLib.md#获取)页。

## 开始构建

1. 打开终端，切换到代码根目录
2. 输入 `cargo build --release -p Phira-Vrenxz-main` ，直到编译完成。
3. 资源目录：程序启动时会从 exe 所在目录往上找含 `assets/` 的目录并把工作目录切过去，所以在仓库里直接运行（`target/release/` 就在 `assets/` 下面）**不需要**复制资源；只有把 exe 单独拷出去发布时，才需要在 exe 同级目录放一份 `assets/`。
   检查资源文件是否完整。

- __注意：在此文档编写时，代码目录下的资源文件并不完整，如果您发现主程序闪退，您可以前往 [release](https://github.com/LuteRenxaer/Phira-Vrenxz/releases)
  页面下载任意版本的 Windows 或 Linux 压缩包，获取缺失的资源文件__

## 常见问题

Q. 构建输出 `failed to connect to GitHub`

A.
请检查网络环境，或者把 [prpr-miniquad](https://github.com/Mivik/prpr-miniquad)、[prpr-macroquad](https://github.com/Mivik/prpr-macroquad)、[sasa](https://github.com/Mivik/sasa)
以及[phira-mp](https://github.com/TeamFlos/phira-mp) 的源代码逐一下载到本地并在 `Cargo.toml` 指定上述 crates 的 path（如
`prpr-miniquad = { path = "../../prpr-miniquad" }`） 然后重新构建

其余，请补充