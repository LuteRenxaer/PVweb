/**
 * 滚动到可见位置时淡入上移（只在首页用）。
 *
 * 进来先给首页正文的直接子元素打上 .pv-reveal，再用 IntersectionObserver 依次加 .pv-in；
 * 万一脚本没跑起来（禁用 JS、异常等），元素本来就没有 .pv-reveal，内容照常显示 —— 不会白屏。
 */
const REVEAL = 'pv-reveal'
const REVEAL_IN = 'pv-in'

export function setupScrollReveal() {
  if (typeof window === 'undefined') return
  if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return
  if (!('IntersectionObserver' in window)) return

  const mark = () => {
    const container = document.querySelector('.VPHome .vp-doc')
    if (!container) return false
    // VitePress 会把首页正文包几层 div，往下钻到真正装内容的那一层
    let scope: Element = container
    while (scope.children.length === 1 && scope.firstElementChild) {
      scope = scope.firstElementChild
    }
    const targets = Array.from(scope.children).filter(
      (el) => !el.classList.contains(REVEAL) && !el.classList.contains('pv-cards')
    )
    if (!targets.length) return false
    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (!entry.isIntersecting) continue
          entry.target.classList.add(REVEAL_IN)
          observer.unobserve(entry.target)
        }
      },
      { rootMargin: '0px 0px -8% 0px', threshold: 0.05 }
    )
    targets.forEach((el, i) => {
      el.classList.add(REVEAL)
      // 同一屏里的几个元素错开一点，别一起蹦出来
      el.style.setProperty('--pv-reveal-delay', Math.min(i, 6) * 45 + 'ms')
      observer.observe(el)
    })
    return true
  }

  // 首页是客户端路由过来的，等 DOM 更新后再打标
  const tryMark = (attempt = 0) => {
    if (mark()) return
    if (attempt < 10) window.setTimeout(() => tryMark(attempt + 1), 120)
  }
  window.setTimeout(() => tryMark(), 0)

  // 每次路由变化都重新打标（首页来回切也能用）
  window.addEventListener('popstate', () => window.setTimeout(() => tryMark(), 200))
}
