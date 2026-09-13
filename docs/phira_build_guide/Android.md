# Android

仓库里已经带了完整的 Android 外壳工程（`Android/`，Java + Kotlin DSL 的 Gradle 脚本），编完原生库直接打包就行，不需要像原版 Phira 那样手工往官方 APK 里替换 .so。

## 需要准备

- JDK 17 及以上（仓库自带 Gradle wrapper 9.5.0）
- Android SDK：platform 37（`compileSdk` / `targetSdk` 都是 37）与 build-tools
- Android NDK：用于 `cargo ndk` 交叉编译，建议 r27 及以上
- Rust 的 Android 目标：`rustup target add aarch64-linux-android x86_64-linux-android`
- `cargo install cargo-ndk`

## 一、告诉 Gradle SDK 在哪

在 `Android/local.properties` 里写 SDK 路径（这个文件不进 git，需要自己建）：

```properties
sdk.dir=D:\\Android\\Sdk
```

或者设环境变量 `ANDROID_HOME` / `ANDROID_SDK_ROOT`。

## 二、编原生库（.so）

在仓库根目录执行，产物直接落到 jniLibs 里：

```bash
cargo ndk -t arm64-v8a -t x86_64 -o Android/app/src/main/jniLibs build --release -p Phira-Vrenxz
```

`app/build.gradle.kts` 里的 `abiFilters` 是 `arm64-v8a`（真机）与 `x86_64`（模拟器），两个都要编。要支持 32 位老设备再加 `-t armeabi-v7a`，并同步往 `abiFilters` 里加。

crate 名是 `Phira-Vrenxz`、`[lib] name = "phira_vrenxz"`，所以库名是 `libphira_vrenxz.so`（Java 侧 `MainActivity.LIBRARY_NAME` 就是这个名字）。需要好游快爆等 feature 时加 `--features Phira-Vrenxz/hykb`。

## 三、放资源

Android 端读的是 APK 里的 `assets/`（miniquad 走 AAssetManager），也就是 `Android/app/src/main/assets/`；仓库根目录的 `assets/` 是桌面端用的，两份要各自维护：

```powershell
Copy-Item -Path assets/* -Destination Android/app/src/main/assets/ -Recurse -Force
```

## 四、打包与安装

```bash
cd Android
./gradlew :app:assembleDebug        # Windows 上用 gradlew.bat
adb install -r app/build/outputs/apk/debug/app-debug.apk
```

APK 在 `Android/app/build/outputs/apk/debug/app-debug.apk`。

## 说明

- `minSdk 23`（Android 6.0），`targetSdk / compileSdk 37`；版本号在 `Android/app/build.gradle.kts` 的 `versionName`。
- `AndroidManifest.xml` 里关掉了硬件加速（`hardwareAccelerated=false`），避免 MuMu 之类模拟器 HWUI 崩溃。
- 打包用 `useLegacyPackaging = true`，.so 从 APK 解压加载，兼容 Android 6.0，也方便随时替换。
- 只换 .so 的话：覆盖 `jniLibs/<abi>/libphira_vrenxz.so` 后重新打包即可，不用改任何 Java 代码。
- 工程内部结构（JNI 契约、各 Java 类的职责）见仓库里的 `Android/README.md`。
