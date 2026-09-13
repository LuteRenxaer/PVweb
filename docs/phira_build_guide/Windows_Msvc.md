# Windows MSVC（依赖 MSVC，即Microsoft Visual C++）

## 准备阶段

1. 确保系统安装了 cargo，可以在命令提示符（cmd）或者 PowerShell 使用 `cargo -V` 检查系统是否安装了 cargo。如果提示以下信息：
    - `'cargo' 不是内部或外部命令，也不是可运行的程序或批处理文件。`
    - `cargo : 无法将“cargo”项识别为 cmdlet、函数、脚本文件或可运行程序的名称。请检查名称的拼写，如果包括路径，请确保路径正确，然后再试一次。`
    - 请点击 [这里](./cargo.md#windows-msvc-工具链) 按步骤安装构建工具
2. 从 GitHub 下载源码到本地：
    - 若您安装了 git 工具，请使用 `git clone https://github.com/LuteRenxaer/Phira-Vrenxz.git` 将仓库克隆到本地。
    - 若您没有安装 git 工具，您也可以在 Phira-Vrenxz 仓库页面点击 Code 按钮选择 `Download ZIP` 将代码下载到本地，随后将代码解压到本地任意目录。
    - __如果您无法连接到 GitHub，您也可以使用 git 加速网站提供的加速地址克隆与下载。__
    - __若您要构建指定版本的 Phira-Vrenxz，请前往 release 页面在 Assets 中选择下载 `Source code(zip)` 到本地，解压到任意路径即可。__
    - __警告：为了防止玄学问题，我们不建议路径中包含除了 ASCII 编码包含字符以外的任何字符。__
3. 静态库文件：参阅[静态库](./StaticLib.md#获取)页。
4. 确认您拥有 `x64 Native Tools Command Prompt for VS 20**`，若无此环境，但是已经安装了 cargo，请考虑单独安装
   `Visual Studio 20xx`，并在安装时安装 `MSVC` 与 `Windows SDK` 组件，安装完成后您将会拥有
   `x64 Native Tools Command Prompt for VS 20**` 环境。
   - 若您还未拥有cargo，请按照第一步安装 cargo，安装完成后您将会拥有 `x64 Native Tools Command Prompt for VS 20**` 环境。

## 开始构建

1. 打开 `x64 Native Tools Command Prompt for VS 20**`， 切换到代码根目录（如 `D:\phira\` ），**注意，不是普通的命令提示符（cmd）或者
   PowerShell**
2. 在 `x64 Native Tools Command Prompt for VS 20**` 中使用 `cargo build --release -p Phira-Vrenxz-main` ，如果您在编译过去的版本，在
   `openssl-sys(build)` 时，终端将会停滞很长一段时间，请不要退出，这是正常的。
3. 构建完成后，在 `.\target\release\` 目录下您可以找到编译完成的主程序
4. 资源目录：程序启动时会从 exe 所在目录往上找含 `assets/` 的目录并切过去，所以在仓库里直接运行（`target/release/` 就在 `assets/` 下面）**不需要**复制资源；只有把 exe 单独拷出去发布时，才需要在 exe 同级目录放一份 `assets/`。

- 仓库里的 `assets/` 是完整的；编译期需要 prpr-avc 的静态库，构建脚本会自动去拉，拉不动时见[静态库](./StaticLib.md)。

## 常见问题

Q. 报错 `failed to send request: 操作超时`

A. 请检查网络环境，确保您可以正常访问 GitHub

Q. 报错 `failed to send request: 无法解析服务器的名称或地址`

A. 检查 DNS 或更换 DNS，更换后请刷新 DNS 缓存

Q. 构建过程中报错包含 `note: LINK : fatal error LNK1181: cannot open input file 'kernel32.lib'`

A. 缺失 Windows SDK，请检查是否正确安装 Windows SDK 后再试

Q. 不够具有挑战性

A. 有空多写点代码