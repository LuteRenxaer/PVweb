# Windows

There are two toolchains on Windows; pick one:

| Toolchain | When | Page |
| --- | --- | --- |
| MSVC | The default, comes with the Visual Studio build tools | [Windows MSVC](./Windows_Msvc.md) |
| GNU (MinGW-w64) | If you already use MSYS2 / MinGW | [Windows GNU](./Windows_Gnu.md) |

## Shared steps

1. Install Rust (check with `cargo -V`); see [installing cargo](./cargo.md) otherwise.
2. Clone the repository:

```bash
git clone https://github.com/LuteRenxaer/Phira-Vrenxz.git
cd Phira-Vrenxz
```

3. Build:

```bash
cargo build --release -p Phira-Vrenxz-main
```

4. The binary is at `target\release\Phira-Vrenxz-main.exe`.

## Running

The game walks up from the executable looking for `assets/` and switches its working directory there, so running from inside the repo needs no copying.

If you hand the executable to someone else, copy an `assets/` folder next to it; `data/` is created on first run.

## Common problems

- `LNK1181: cannot open input file 'kernel32.lib'`: the Windows SDK is missing - re-run the Visual Studio installer and include it.
- `failed to send request` or a build stuck downloading: the build script fetches the prpr-avc static libraries from GitHub; see [static libraries](./StaticLib.md).
- Instant crash on start: make sure `assets/` sits next to or above the executable.
