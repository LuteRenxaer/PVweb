import DefaultTheme from 'vitepress/theme'
import './custom.css'
import { setupPageTransition } from './page-transition'
import { setupScrollReveal } from './reveal'

export default {
  extends: DefaultTheme,
  enhanceApp({ router }: { router: any }) {
    setupPageTransition(router)
    setupScrollReveal()
  },
}
