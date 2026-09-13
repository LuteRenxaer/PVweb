---
layout: home

hero:
  name: Phira-Vrenxz
  tagline: "A fork of Phira, written in Rust, inspired by Phigros."
  image:
    src: /logo.png
    alt: Phira-Vrenxz
  actions:
    - theme: brand
      text: "Download"
      link: /en/#download
    - theme: alt
      text: "Docs"
      link: /en/respack/
    - theme: alt
      text: "GitHub"
      link: https://github.com/LuteRenxaer/Phira-Vrenxz

---

## Download {#download}

Pre-built binaries are on GitHub Releases. Latest is v1.3.15fix (2026-08-23).

<div class="pv-cards">
  <div class="pv-card">
    <div class="pv-card-title">Windows desktop</div>
    <div class="pv-card-file">PhirLie_v1.3.15_PC_fix.zip</div>
    <div class="pv-card-meta">268.9 MB, unzip and run the executable inside</div>
    <a class="pv-btn pv-btn-primary" href="https://github.com/LuteRenxaer/Phira-Vrenxz/releases/download/Release_version_1315fix/PhirLie_v1.3.15_PC_fix.zip">Download for PC</a>
  </div>
  <div class="pv-card">
    <div class="pv-card-title">Android</div>
    <div class="pv-card-file">PhirLie_v1.3.15_fix.apk</div>
    <div class="pv-card-meta">243.4 MB, install directly (allow unknown sources once)</div>
    <a class="pv-btn pv-btn-primary" href="https://github.com/LuteRenxaer/Phira-Vrenxz/releases/download/Release_version_1315fix/PhirLie_v1.3.15_fix.apk">Download APK</a>
  </div>
  <div class="pv-card">
    <div class="pv-card-title">Build from source</div>
    <div class="pv-card-file">cargo run -p Phira-Vrenxz-main</div>
    <div class="pv-card-meta">Requires Rust (nightly recommended); Android also needs the SDK and NDK</div>
    <a class="pv-btn" href="phira_build_guide/">Build guide</a>
  </div>
</div>

All versions and release notes: [Releases](https://github.com/LuteRenxaer/Phira-Vrenxz/releases), or see the [release notes](/en/changes/changelog).

> The latest release is v1.3.15fix (2026-08-23) and predates the multiplayer work — rooms, spectating and the like currently only exist in the source tree. See [Differences from Phira](/en/changes/) for the full list.

## Multiplayer {#multiplayer}

| | |
| --- | --- |
| Game server | frp-bid.com:19936 |
| Web API | 110.42.63.208:31206 |
| Port rule | web port = game port + 1 |

Room list: <http://110.42.63.208:31206/api/rooms>

1. Open the game and click **Multiplayer** in the main menu.
2. Enter the server address (the official one is pre-filled) and connect.
3. Create a room or join one from the public room list. Room IDs allow up to 20 letters, digits, <code>-</code> and <code>_</code>.
4. The host picks a chart, everyone readies up and the host starts. Results are automatic, and you can spectate.

To self-host, run <code>phira-mp-server</code> and point the client at your own address. The admin HTTP / WebSocket service runs on game port + 1 (<code>/api/*</code> and <code>/ws</code>).

## Contact {#contact}

- QQ group: **1103288774**
- GitHub: <https://github.com/LuteRenxaer/Phira-Vrenxz>
- Issues: <https://github.com/LuteRenxaer/Phira-Vrenxz/issues>

## FAQ {#faq}

<details class="pv-faq" open>
  <summary>What happens to my old data after upgrading?</summary>
  <div class="pv-faq-body">

On startup the game looks for an old PhirLie / Phira-Vrenxz <code>data</code> folder and asks whether to sync it. Your current <code>data.json</code> is backed up first, the old data is merged in, and you are asked to restart.

The prompt appears once; afterwards use **Settings → Storage → Sync legacy data**.

  </div>
</details>

<details class="pv-faq">
  <summary>Licence</summary>
  <div class="pv-faq-body">

Released under **GPL-3.0**. A fork of [Phira](https://github.com/TeamFlos/phira), inspired by Phigros. The documentation comes from [TeamFlos/phira-docs](https://github.com/TeamFlos/phira-docs) (CC BY 4.0).

  </div>
</details>
