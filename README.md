# Phira-Vrenxz 官网 + 文档站

用 [VitePress](https://vitepress.dev/) 搭的静态站点：首页是官网（特性 / 下载 / 多人联机 / FAQ），文档放在同一套框架里，中英双语、自带本地搜索、暗色主题、侧边栏与「本页目录」。

## 目录结构

```
phira_docs_site/
├─ package.json                 # 只有 vitepress 一个依赖
├─ docs/
│  ├─ .vitepress/
│  │  ├─ config.mts             # 站点配置：导航、页脚、搜索、i18n（改标题/下载页链接也在这里）
│  │  ├─ sidebars.ts            # 侧边栏（中文按 SUMMARY 结构，英文沿用原 mdBook 英文目录）
│  │  ├─ theme/custom.css       # 品牌配色、首页卡片 / FAQ 样式
│  │  ├─ theme/index.ts         # 默认主题 + 上面的 css
│  │  └─ dist/                  # 构建产物（要部署的就是这个目录）
│  ├─ public/                   # 直接按根路径提供的静态文件（logo、favicon、文档里链接的图片）
│  ├─ index.md                  # 官网首页（hero / features / 下载 / 联机 / FAQ）
│  ├─ about.md                  # 关于本文档（来源与许可）
│  ├─ chart-standard/ uml/ respack/ event/ chart-management/ phira_build_guide/ dev-incident/
│  └─ en/                       # 英文版（结构同上）
```

## 常用命令

```bash
npm install          # 安装依赖（只要一次）
npm run dev          # 本地开发预览，默认 http://localhost:5173
npm run build        # 构建到 docs/.vitepress/dist
npm run preview      # 本地预览构建产物
```

> 站点是 SPA 式的静态站，**直接双击 dist/index.html 打开不行**（模块会被 file:// 拦掉，本地搜索也取不到索引），请用 `npm run preview` 或任意静态服务器 / 托管。

## 部署

- 把 `docs/.vitepress/dist` 整个目录传到静态托管（GitHub Pages / Nginx / 宝塔 / OSS 都行），入口是 `index.html`。
- 如果绑到**子路径**（例如 `https://example.com/phira-vrenxz/`），要在 `docs/.vitepress/config.mts` 里加一行 `base: '/phira-vrenxz/'` 再重新构建，否则资源路径会 404。

## 日常维护

| 想改什么 | 改哪里 |
| --- | --- |
| 发新版本：版本号、文件名、大小、下载链接 | `docs/index.md` 的 `## 下载` 一节（英文页是 `docs/en/index.md`） |
| 首页首屏文案 / 特性卡片 | `docs/index.md` 顶部的 frontmatter（`hero:` / `features:`） |
| 服务器地址、进房步骤 | `docs/index.md` 的 `## 多人联机` 一节 |
| 顶部导航、页脚、搜索、主题色 | `docs/.vitepress/config.mts` / `theme/custom.css` |
| Logo / 图标 | `docs/public/logo.png`（建议 192×192）、`docs/public/favicon.png` |
| QQ 群号 / 联系方式 | 首页 `docs/index.md` 的 `## 联系我们`，以及 `config.mts` 里中文与英文两处 `footer.message` |
| 品牌配色（灰蓝渐变） | `docs/.vitepress/theme/custom.css` 顶部的 `--pv-gray-*` / `--pv-blue-*` 与 `--vp-home-hero-name-background` |
| 文档正文 | 直接改 `docs/**.md`（英文在 `docs/en/**`）；新加页面记得往 `docs/.vitepress/sidebars.ts` 里补一条 |

## 文档来源与许可

- 文档内容与结构来自 [TeamFlos/phira-docs](https://github.com/TeamFlos/phira-docs)，以 **CC BY 4.0** 许可提供，转载/修改请保留署名（页面页脚已注明）。
- 中文文档直接取自上游仓库的 `src/**.md`；英文文档是把上游构建出来的英文页面转成 Markdown —— **上游英文本身没翻完**，缺的页面用中文原样补齐（保证结构一致、语言切换不 404）。
- 游戏本体 [Phira-Vrenxz](https://github.com/LuteRenxaer/Phira-Vrenxz) 以 **GPL-3.0** 许可开源。

## 已知注意

- `config.mts` 里开了 `ignoreDeadLinks: true`：移植过来的文档里有上游遗留的死链（指向上游构建里不存在的文件），不想因此构建失败。构建后可以自己跑一遍链接检查。
- 本地搜索的索引在构建时生成，新增/修改文档后要重新 `npm run build` 才会更新。

## 在 cmd / PowerShell 里跑（别在默认目录跑）

`npm` 报 `ENOENT: Could not read package.json` 只有一个原因：**当前目录不是本项目**。先进项目目录：

```bat
cd /d C:\Users\Administrator\Desktop\phira_docs_site
npm run preview          :: 预览已构建好的站点，http://localhost:4173/
npm run dev              :: 开发模式（改完即时刷新），http://localhost:5173/
npm run build            :: 重新构建到 docs/.vitepress/dist
```

不想敲命令的话，直接双击项目里的：

- **`启动预览.bat`** —— 自动装依赖 / 缺产物就先构建，然后起预览并打开浏览器（4173）
- **`开发预览.bat`** —— 开发模式，适合边改边看（5173）

两个脚本都会先 `cd /d "%~dp0"` 切到项目目录，所以放在哪、从哪双击都不会再出现 ENOENT。

## 改完之后看不到变化？

`npm run preview` 起的是「预览已构建产物」的服务器，**它不会自动读取新的构建**。流程是：

```bat
npm run build      :: 先重新构建
npm run preview    :: 再（重新）起预览；如果预览已经在跑，先 Ctrl+C 关掉再起
```

`npm run dev` 没有这个问题，改完即时生效。

## 切页动画

主题里加了一层路由过渡：切换页面时内容区淡出上移、新页面淡入，导航栏和侧边栏保持不动（`.VPContent` 上播 `pv-page-*` 两个 class 对应的动画）。

- 实现：`docs/.vitepress/theme/page-transition.ts`（用 VitePress 的 `onBeforeRouteChange` / `onAfterRouteChange` 钩子，注意**不是** vue-router 的 `beforeEach`），样式在 `theme/custom.css` 末尾；
- 只变 hash 的同页锚点、以及系统开了「减少动效」时不播放；
- 想调节奏就改 `page-transition.ts` 里的 `LEAVE_MS` / `ENTER_MS`，想换效果改 `custom.css` 里的 `@keyframes pv-page-in`。

## 部署（已配好）

| | |
| --- | --- |
| 仓库 | <https://github.com/LuteRenxaer/phiravrenxz> |
| 线上地址 | <https://luterenxaer.github.io/phiravrenxz/> |
| 发布方式 | 推送到 `main` 自动构建并部署（`.github/workflows/deploy.yml`，走 GitHub Pages 的 GitHub Actions 发布源） |

- 站点挂在**子路径** `/phiravrenxz/` 下，所以 `docs/.vitepress/config.mts` 里有 `base: '/phiravrenxz/'`；以后若绑到自己的域名（根路径），把 `BASE` 改成 `'/'` 再重新构建即可。
- 本地预览跟着 base 走：`npm run preview` 后访问 <http://localhost:4173/phiravrenxz/>。
- 改完文档：`git add -A && git commit -m "..." && git push`，剩下的交给 Actions（约 1 分钟）。