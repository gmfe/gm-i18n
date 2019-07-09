import {createInitializer} from './initializer'
import {IDENTIFIER} from './constant'

export * from './initializer'
export * from './translator'
export * from './storage'
export * from './util'
export * from './constant'

// 浏览器环境， 做下初始化
if (typeof exports !== 'object') {
  const initGmI18n = (projectName = window.__platform) => {
    const script = document.querySelector('script[src$="gm-i18n.js"]')
    if (!projectName) {
      projectName = script.dataset.project
      if (!projectName) {
        console.error('gm-i18n初始化需提供项目名，请提供 __platform 或 data-project')
        return
      }
    }
    const baseUrl = script.src.split(/\/\/|\//)[1]
    const initializer = window[IDENTIFIER.INITIALIZER_IDENTIFIER] = createInitializer(baseUrl, projectName)
    initializer.loadVersionJS()
  }
  initGmI18n()
}
