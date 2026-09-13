# Differences from Phira

Phira-Vrenxz is a fork of [Phira](https://github.com/TeamFlos/phira). The chart standard, judgement and core gameplay are unchanged; the work went into the UI and a set of things you can adjust yourself. The list below is grouped by area and comes from the project's release notes on GitHub.

## Interface

- UI scale: menus, fonts and touch areas scale together, the background does not
- Profile page restyled in a parallelogram style, shadows removed
- Card-based menus and lists; the multiplayer room page was redesigned
- Pause screen reworked
- New "Custom" section in settings: UI position, home UI offset, accent colour and more
- "Legacy home mode": switch back to the old home background and music
- Score display on by default, off on low resolution to save performance

## Charts

- Export supports the .pez format
- Batch chart download
- Bundled charts
- Fixed a crash in the chart library

## Input and judgement

- Replaced the system input box with an in-game one
- Fixed copy and paste in the input box
- Fixed drag / flick keyboard judgement and stuck keys with IMEs

## Other

- Fixed crashes with video playback and unlock animations
- Bundled XC-SIM (requires sign-in)
- Removed the console window on Windows
- Android packages are provided since v1.3.0

## In the source, not in any release yet

These are already in the source tree but **not included in any published build**, so you have to build from source to use them:

- Multiplayer: a built-in Phira-MP client with room list and room codes, host chart picking, ready-up, results and spectating, and in-room chat. Self-hosted servers are supported
- Redesigned multiplayer room, lobby, spectating and results screens
- Legacy data sync: on startup the game looks for an old PhirLie / Phira-Vrenxz data folder and offers to sync it. The prompt only appears once; afterwards use **Settings → Storage → Sync legacy data**

## Release notes

What changed in each version: [Release notes](./changelog.md).
