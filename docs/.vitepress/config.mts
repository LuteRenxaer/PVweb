import { defineConfig } from 'vitepress'
import { sidebarZh, sidebarEn } from './sidebars'

const REPO = 'https://github.com/LuteRenxaer/Phira-Vrenxz'
const RELEASES = REPO + '/releases'

// GitHub Pages 项目站的地址是 https://<用户>.github.io/PVweb/，所以要带这个 base。
// 绑到自己的域名（根路径）或本地预览时不想要它的话，把它改成 '/' 再重新构建即可。
const BASE = '/PVweb/'

const navZh = [
  { text: '首页', link: '/' },
  { text: '下载', link: '/#download' },
  { text: '多人联机', link: '/#multiplayer' },
  { text: '联系我们', link: '/#contact' },
  { text: '常见问题', link: '/#faq' },
  {
    text: '文档',
    items: [
      { text: '谱面标准', link: '/chart-standard/' },
      { text: '谱面管理', link: '/chart-management/' },
      { text: '谱面文件格式', link: '/chart-standard/chart-format/' },
      { text: 'UML 文档', link: '/uml/' },
      { text: '资源包', link: '/respack/' },
      { text: '活动指南', link: '/event/' },
      { text: '构建指南', link: '/phira_build_guide/' },
      { text: '改动内容', link: '/changes/' },
      { text: '关于本文档', link: '/about' },
    ],
  },
]

const navEn = [
  { text: 'Home', link: '/en/' },
  { text: 'Download', link: '/en/#download' },
  { text: 'Multiplayer', link: '/en/#multiplayer' },
  { text: 'Contact', link: '/en/#contact' },
  { text: 'FAQ', link: '/en/#faq' },
  { text: 'Docs', link: '/en/respack/' },
]

export default defineConfig({
  base: BASE,
  title: 'Phira-Vrenxz',
  description: 'Phira-Vrenxz（PhirLie）是一个社区驱动的节奏游戏，基于 Rust，是 Phira 的分支、玩法受 Phigros 启发。提供 Windows / Android 下载、多人联机服务器与谱面标准文档。',
  lang: 'zh-CN',
  // 文档是移植过来的，里面难免有指向上游旧文件的死链：构建时不因此失败，
  // 改完再单独跑链接检查（见 README）。
  ignoreDeadLinks: true,
  head: [
    ['link', { rel: 'icon', type: 'image/png', href: BASE + 'favicon.png' }],
    ['link', { rel: 'apple-touch-icon', href: BASE + 'logo.png' }],
    ['meta', { name: 'theme-color', content: '#4c84ff' }],
    ['meta', { property: 'og:title', content: 'Phira-Vrenxz' }],
    ['meta', { property: 'og:description', content: '社区驱动的节奏游戏，基于 Rust，Phira 的分支。' }],
    ['meta', { property: 'og:image', content: BASE + 'logo.png' }],
  ],
  themeConfig: {
    logo: '/logo.png',
    siteTitle: 'Phira-Vrenxz',
    outline: { level: [2, 3], label: '本页目录' },
    docFooter: { prev: '上一篇', next: '下一篇' },
    darkModeSwitchLabel: '外观',
    returnToTopLabel: '回到顶部',
    sidebarMenuLabel: '目录',
    lastUpdated: { text: '最后更新' },
    search: {
      provider: 'local',
      options: {
        translations: {
          button: { buttonText: '搜索文档', buttonAriaLabel: '搜索文档' },
          modal: {
            noResultsText: '没有找到结果',
            resetButtonTitle: '清除查询',
            footer: { selectText: '选择', navigateText: '切换', closeText: '关闭' },
          },
        },
      },
    },
    socialLinks: [{ icon: 'github', link: REPO, ariaLabel: 'GitHub' }],
    footer: {
      message:
        'GPL-3.0 开源 · QQ 群 1103288774 · <a href="' +
        REPO +
        '" target="_blank" rel="noopener">' +
        REPO.replace('https://', '') +
        '</a>' +
        ' · 文档来自 <a href="https://github.com/TeamFlos/phira-docs" target="_blank" rel="noopener">TeamFlos/phira-docs</a>（CC BY 4.0）',
      copyright: '社区驱动的节奏游戏 · 致谢 Phira 与 prpr 引擎',
    },
    nav: navZh,
    sidebar: sidebarZh,
    editLink: {
      pattern: REPO + '/edit/main/:path',
      text: '在 GitHub 上改进此页',
    },
  },
  locales: {
    root: {
      label: '简体中文',
      lang: 'zh-CN',
      themeConfig: {
        nav: navZh,
        sidebar: sidebarZh,
        outline: { level: [2, 3], label: '本页目录' },
        docFooter: { prev: '上一篇', next: '下一篇' },
        editLink: { pattern: REPO + '/edit/main/docs/:path', text: '在 GitHub 上改进此页' },
      },
    },
    en: {
      label: 'English',
      lang: 'en-US',
      link: '/en/',
      themeConfig: {
        nav: navEn,
        sidebar: sidebarEn,
        outline: { level: [2, 3], label: 'On this page' },
        docFooter: { prev: 'Previous', next: 'Next' },
        editLink: { pattern: REPO + '/edit/main/docs/:path', text: 'Edit this page on GitHub' },
        footer: {
          message:
            'GPL-3.0 · QQ group 1103288774 · <a href="' +
            REPO +
            '" target="_blank" rel="noopener">' +
            REPO.replace('https://', '') +
            '</a>' +
            ' · Docs based on <a href="https://github.com/TeamFlos/phira-docs" target="_blank" rel="noopener">TeamFlos/phira-docs</a> (CC BY 4.0)',
          copyright: 'A community-driven rhythm game · Thanks to Phira and the prpr engine',
        },
      },
    },
  },
})
