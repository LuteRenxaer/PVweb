# Build guide

Phira-Vrenxz lives at [LuteRenxaer/Phira-Vrenxz](https://github.com/LuteRenxaer/Phira-Vrenxz). This section covers building it from source; if you just want to play, grab a build from [Releases](https://github.com/LuteRenxaer/Phira-Vrenxz/releases).

## Requirements

- **Rust**: nightly is recommended, stable usually works too (there is no pinned toolchain file).
- **Desktop**: on Windows you need the MSVC build tools or MinGW-w64; on Linux, ALSA and GTK3 and friends; on macOS, the Xcode command line tools.
- **Android**: JDK 17+, Android SDK (platform 37), the Android NDK (used by `cargo ndk`). Gradle comes from the wrapper in the repo (9.5.0).
- **Build from a clone of the repository**: the workspace ships vendored dependencies (`vendor/prpr-miniquad`, `vendor/phira-mp`) and a `[patch]` entry, so building a single crate outside the repo will not work.

## Quick start (desktop)

```bash
git clone https://github.com/LuteRenxaer/Phira-Vrenxz.git
cd Phira-Vrenxz

# run a debug build
cargo run -p Phira-Vrenxz-main

# release build
cargo build --release -p Phira-Vrenxz-main
```

The binary ends up in `target/release/Phira-Vrenxz-main.exe` (Windows) or `target/release/Phira-Vrenxz-main` (Linux, macOS).

## Things to know at runtime

- **Assets**: on startup the game walks up from the executable looking for a directory that contains `assets/`, and switches its working directory there. Running from inside the repo (`target/release/` sits below `assets/`) therefore needs **no copying**; only if you ship the executable elsewhere do you need to put an `assets/` folder next to it.
- **Data**: `data/` is created on first run; account, settings, chart library and cache live there.
- **Feature flags**: `Phira-Vrenxz-main` enables `video` (chart videos / unlock animations) and `chat` (the multiplayer chat box) by default; use `--no-default-features` to build with less.
- **Legacy data**: the first launch after upgrading looks for an old PhirLie / Phira-Vrenxz `data` folder and offers to sync it; you can also do it later from Settings.

## Per-platform steps

| Platform | Page |
| --- | --- |
| Windows (MSVC) | [Windows MSVC](./Windows_Msvc.md) |
| Windows (GNU) | [Windows GNU](./Windows_Gnu.md) |
| Linux | [Linux](./Linux.md) |
| macOS | [macOS](./macOS.md) |
| iOS | [iOS](./iOS.md) |
| Android | [Android](./Android.md) |
| OpenHarmony | [OpenHarmony](./OpenHarmony.md) |

Two further pages: [installing cargo / the Rust toolchain](./cargo.md) and [static libraries (prpr-avc)](./StaticLib.md).

## What is in the workspace

| Directory | What it is |
| --- | --- |
| `prpr` / `prpr-l10n` / `prpr-avc` / `prpr-pbc` | Engine and its libraries |
| `Phira-Vrenxz` | The game itself (lib `libphira_vrenxz`; on Android this is what becomes the .so) |
| `Phira-Vrenxz-main` | Desktop executable |
| `Phira-Vrenxz-monitor` | A small companion GUI tool |
| `Android` | Android shell project (Java + Gradle) |
| `vendor` | Patched miniquad and phira-mp |
