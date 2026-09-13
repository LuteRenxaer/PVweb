---
layout: home

hero:
  name: Phira-Vrenxz
  tagline: "Phira 的分支，基于 Rust 开发，玩法受 Phigros 启发。"
  image:
    src: /logo.png
    alt: Phira-Vrenxz
  actions:
    - theme: brand
      text: "下载"
      link: /#download
    - theme: alt
      text: "文档"
      link: /chart-standard/
    - theme: alt
      text: "GitHub"
      link: https://github.com/LuteRenxaer/Phira-Vrenxz

---

## 下载 {#download}

预编译版本发布在 GitHub Releases。当前最新为 v1.3.15fix（2026-08-23），更新内容是修复 bug 并新增谱面 Phira-Firefly Tutorial EX。

<div class="pv-cards">
  <div class="pv-card">
    <div class="pv-card-title">Windows 桌面端</div>
    <div class="pv-card-file">PhirLie_v1.3.15_PC_fix.zip</div>
    <div class="pv-card-meta">268.9 MB，解压后运行里面的可执行文件</div>
    <a class="pv-btn pv-btn-primary" href="https://github.com/LuteRenxaer/Phira-Vrenxz/releases/download/Release_version_1315fix/PhirLie_v1.3.15_PC_fix.zip">下载 PC 版</a>
  </div>
  <div class="pv-card">
    <div class="pv-card-title">Android</div>
    <div class="pv-card-file">PhirLie_v1.3.15_fix.apk</div>
    <div class="pv-card-meta">243.4 MB，直接安装，首次需要允许「未知来源」</div>
    <a class="pv-btn pv-btn-primary" href="https://github.com/LuteRenxaer/Phira-Vrenxz/releases/download/Release_version_1315fix/PhirLie_v1.3.15_fix.apk">下载 APK</a>
  </div>
  <div class="pv-card">
    <div class="pv-card-title">从源码构建</div>
    <div class="pv-card-file">cargo run -p Phira-Vrenxz-main</div>
    <div class="pv-card-meta">需要 Rust，推荐 nightly；Android 还需要 SDK 与 NDK</div>
    <a class="pv-btn" href="phira_build_guide/">构建指南</a>
  </div>
</div>

历史版本和更新日志在 [Releases](https://github.com/LuteRenxaer/Phira-Vrenxz/releases)，也可以看[版本更新记录](/changes/changelog)。

> 最新的发行版是 v1.3.15fix（2026-08-23），发布于多人联机之前 —— 房间、观战这些目前只在源码里，需要自行构建。改动清单一并放在[与 Phira 的区别](/changes/)里。

## 多人联机 {#multiplayer}

游戏里自带 Phira-MP 客户端，也支持自建服务器。

| | |
| --- | --- |
| 游戏服务器 | frp-bid.com:19936 |
| Web API | 110.42.63.208:31206 |
| 端口约定 | Web 端口 = 游戏端口 + 1 |

房间列表：<http://110.42.63.208:31206/api/rooms>

进入房间的步骤：

1. 打开游戏，在主菜单点「多人游戏」。
2. 填服务器地址（默认已经填好官方服务器），点连接。
3. 创建房间，或者从公共房间列表加入。房间号由不超过 20 位的大小写字母、数字以及 <code>-</code> <code>_</code> 组成。
4. 房主选谱，其他人点「准备」，房主开始游戏。打完自动结算，也可以观战。

自建服务器用 <code>phira-mp-server</code>，客户端在「多人游戏 → 连接」里把地址改成自己的域名或 IP 即可。房间、封禁、维护这些管理接口在游戏端口 +1 的 HTTP 服务上（<code>/api/*</code> 与 <code>/ws</code>）。

## 联系我们 {#contact}

- QQ 群：**1103288774**
- GitHub：<https://github.com/LuteRenxaer/Phira-Vrenxz>
- 问题反馈与建议：[Issues](https://github.com/LuteRenxaer/Phira-Vrenxz/issues)

## 常见问题 {#faq}

<details class="pv-faq" open>
  <summary>换了新版本，旧数据怎么办？</summary>
  <div class="pv-faq-body">

启动后游戏会检查本机有没有旧版 PhirLie / Phira-Vrenxz 的 <code>data</code> 目录，找到就会问要不要同步。选「同步旧数据」会先备份当前的 <code>data.json</code>，再把旧数据合并过来，然后提示重新启动游戏。

这个提示只出现一次；之后想同步可以在 **设置 → 存储与重置 → 同步旧版本数据** 里手动点。

  </div>
</details>

<details class="pv-faq">
  <summary>和原版 Phira 有什么区别？</summary>
  <div class="pv-faq-body">

Phira-Vrenxz 是 Phira 的分支，谱面标准、判定和核心玩法保持一致，在此基础上重做了界面，加入了多人联机。账号沿用 Phira 的线上账号。

  </div>
</details>

<details class="pv-faq">
  <summary>谱面放在哪里？</summary>
  <div class="pv-faq-body">

两种方式：在游戏内「谱面库」导入 <code>.pez</code> / <code>.json</code> / 压缩包；或者手动放进 <code>data/charts/custom</code>（自制）与 <code>data/charts/download</code>（下载）。导出支持 <code>.pez</code>。

  </div>
</details>

<details class="pv-faq">
  <summary>开源与许可</summary>
  <div class="pv-faq-body">

游戏本体以 **GPL-3.0** 许可开源，源码在 [GitHub](https://github.com/LuteRenxaer/Phira-Vrenxz)。它是 [Phira](https://github.com/TeamFlos/phira) 的分支，玩法受 Phigros 启发。文档内容来自 [TeamFlos/phira-docs](https://github.com/TeamFlos/phira-docs)（CC BY 4.0），说明见[关于本文档](/about)。

  </div>
</details>
