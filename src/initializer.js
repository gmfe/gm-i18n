import {getCurrentLng} from './storage'
import { GETTER, IDENTIFIER } from './constant'

const createInitializer = (baseUrl, projectName) => {
  const versionUrl = `${GETTER.VERSION_URL(baseUrl, projectName)}?random=${Math.random()}`
  return {
    loadVersionJS () {
      const curLanguageCode = getCurrentLng()
      if (curLanguageCode === 'zh') {
        return
      }
      // 加载对应语言的版本文件
      document.write(`<script src="${versionUrl}" ></script>`)
      document.write(`<script> window['${IDENTIFIER.INITIALIZER_IDENTIFIER}'].loadLanguageJS() </script>`)
    },
    loadLanguageJS () {
      const curLanguageCode = getCurrentLng()
      if (curLanguageCode === 'zh') {
        return
      }
      const serverVersion = window[IDENTIFIER.VERSION_IDENTIFIER]
      if (!serverVersion) {
        console.error(`多语版本文件[${versionUrl}]未加载或加载出错！`)
        return
      }
      const version = serverVersion[curLanguageCode]
      if (!version) {
        // 每个项目的多语支持情况不同 可能对应语言并没有发布cdn
        // 会 fallback 到 zh
        return
      }
      let localLanguage = null
      const storageKey = GETTER.STORAGE_KEY(projectName, curLanguageCode)
      try {
        localLanguage = JSON.parse(window.localStorage.getItem(storageKey))
      } catch (e) {
        window.localStorage.removeItem(storageKey)
      }
      if (localLanguage && localLanguage.version === version) {
        // eslint-disable-next-line
        window.eval(localLanguage.script)
      } else {
        // 1. eval 初始化 gm-i18n resource
        // 2. 写入 STORAGE_KEY { version, script }
        document.write(`<script src="${GETTER.LANGUAGE_URL(baseUrl, projectName, curLanguageCode)}?version=${version}"></script>`)
      }
    }
  }
}

export {
  createInitializer
}
