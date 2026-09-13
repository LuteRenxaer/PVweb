# Android

The repository ships a complete Android shell (`Android/`, Java plus Kotlin-DSL Gradle scripts), so you build the native library and package it - no hand-patching of an official APK like upstream Phira.

## Requirements

- JDK 17 or newer (the repo's Gradle wrapper is 9.5.0)
- Android SDK: platform 37 (`compileSdk` and `targetSdk` are both 37) and build-tools
- Android NDK for `cargo ndk` (r27 or newer recommended)
- Rust targets: `rustup target add aarch64-linux-android x86_64-linux-android`
- `cargo install cargo-ndk`

## 1. Point Gradle at your SDK

Create `Android/local.properties` (not tracked by git):

```properties
sdk.dir=D:\\Android\\Sdk
```

or set `ANDROID_HOME` / `ANDROID_SDK_ROOT`.

## 2. Build the native library

From the repository root, dropping the result straight into jniLibs:

```bash
cargo ndk -t arm64-v8a -t x86_64 -o Android/app/src/main/jniLibs build --release -p Phira-Vrenxz
```

The ABIs match `abiFilters` in `app/build.gradle.kts`: `arm64-v8a` (devices) and `x86_64` (emulators). Add `-t armeabi-v7a` (and the matching entry) if you need 32-bit devices.

The crate is `Phira-Vrenxz` with `[lib] name = "phira_vrenxz"`, so the library is `libphira_vrenxz.so` - the name `MainActivity.LIBRARY_NAME` loads. Use `--features Phira-Vrenxz/hykb` for extra features such as HYKB.

## 3. Assets

On Android the game reads from the APK's `assets/` (via AAssetManager), i.e. `Android/app/src/main/assets/`. The `assets/` in the repository root is the desktop copy, so keep both in sync:

```powershell
Copy-Item -Path assets/* -Destination Android/app/src/main/assets/ -Recurse -Force
```

## 4. Package and install

```bash
cd Android
./gradlew :app:assembleDebug        # gradlew.bat on Windows
adb install -r app/build/outputs/apk/debug/app-debug.apk
```

The APK is written to `Android/app/build/outputs/apk/debug/app-debug.apk`.

## Notes

- `minSdk 23` (Android 6.0), `targetSdk / compileSdk 37`; the version is set by `versionName` in `Android/app/build.gradle.kts`.
- Hardware acceleration is disabled in `AndroidManifest.xml` to avoid HWUI crashes on emulators such as MuMu.
- `useLegacyPackaging = true` keeps the .so extracted from the APK, which suits Android 6.0 and lets you swap it freely.
- To swap only the library, overwrite `jniLibs/<abi>/libphira_vrenxz.so` and repackage - no Java changes needed.
- The JNI contract and the classes in the shell are documented in `Android/README.md`.
