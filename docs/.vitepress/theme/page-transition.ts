import type { Router } from 'vitepress'

/**
 * 页面过渡：
 * 1. 路由切换时给 <html> 挂 class，CSS 播「淡出上移 -> 新页面淡入」；
 * 2. 顶部一条细进度条，点链接后出现、页面到位后收起（给一个「正在过去」的即时反馈）。
 *
 * 用的是 VitePress 自己的路由钩子（onBeforeRouteChange / onAfterRouteChange），
 * 不是 vue-router 的 beforeEach —— VitePress 的 router 只暴露这两个回调。
 * 用户在系统里关了动效（prefers-reduced-motion: reduce）就整个跳过。
 */
const LEAVE_MS = 170
const ENTER_MS = 420

const CLASS_LEAVE = 'pv-page-leave'
const CLASS_ENTER = 'pv-page-enter'
const CLASS_LOADING = 'pv-page-loading'

type RouteHooks = {
  onBeforeRouteChange?: (href: string, options?: unknown) => unknown
  onAfterRouteChange?: (href: string, options?: unknown) => unknown
  onAfterRouteChanged?: (href: string, options?: unknown) => unknown
}

export function setupPageTransition(router: Router) {
  if (typeof window === 'undefined') return

  const hooks = router as unknown as RouteHooks
  const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)')
  const root = document.documentElement

  const play = (className: string, duration: number) => {
    root.classList.remove(className)
    // 强制一次重排，保证连续切页时动画能重新触发
    void root.offsetWidth
    root.classList.add(className)
    window.setTimeout(() => root.classList.remove(className), duration)
  }

  hooks.onBeforeRouteChange = async (href: string) => {
    // 只变 hash 的跳转不动画（比如首页的目录锚点）
    if (reduceMotion.matches || href.split('#')[0] === window.location.pathname) return
    play(CLASS_LEAVE, LEAVE_MS)
    root.classList.add(CLASS_LOADING)
    await new Promise((resolve) => window.setTimeout(resolve, LEAVE_MS))
  }

  hooks.onAfterRouteChange = () => {
    root.classList.remove(CLASS_LEAVE)
    root.classList.remove(CLASS_LOADING)
    if (reduceMotion.matches) return
    play(CLASS_ENTER, ENTER_MS)
  }
}
