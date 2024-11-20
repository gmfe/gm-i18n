import { getCurrentLng } from './storage'

// const prefix = '${'
// const suffix = '}'
const regex = /\$\{(.+?)\}/g
const separator = '__'

class Translator {
  // { zh: { key: '' }, zh-HK: {} }
  // 肯定有zh
  constructor() {
    this.resources = {}
  }

  _getSimplifiedChineseTpl(key) {
    return this.resources['zh'][key]
  }
  _getCurrentResource() {
    return this.resources[Translator.lng] || {}
  }
  initLanguage() {
    Translator.lng = getCurrentLng()
  }
  t(...args) {
    return this.translate(...args)
  }
  translate(key, data) {
    let tpl = this._getCurrentResource()[key]
    // fallback zh
    if (!tpl) {
      tpl = this._getSimplifiedChineseTpl(key)
    }
    if (!tpl) {
      if (regex.test(key)) {
        console.error(`插值${key}找不到对应模板，请检查或使用 i18n-m sync 同步`)
        return null
      } else {
        // 取key的场景
        tpl = key.split(separator).pop()
      }
    }

    let result = tpl.replace(regex, (match, $0) => {
      return data[$0]
    })
    return result
  }
  // 可以给库文件调用
  loadResources(resources) { // languageCode, resource
    this.resources = resources
  }
  // 多语js script 调用
  // 为了合并配置平台的json文件以及本地的json文件，新增scheduler为了调度合并顺序
  // 按照当前的实现方式会先加载配置平台文件，再执行程序代码，所以没加调度判断的话可能会造成本地json覆盖配置平台json问题
  loadResource(languageCode, resource, scheduler) {
    const prevResources = (this.resources[languageCode] || {})
    this.resources[languageCode] = scheduler ? scheduler(prevResources, resource) : {
      ...prevResources,
      ...(resource || {})
    }
  }
  // 打包中文调用
  loadSimplifiedChinese(resource) {
    this.initLanguage()
    this.resources['zh'] = resource
  }
}
Translator.lng = 'zh'

// 默认的项目 translator
const appTranslator = new Translator()
const t = (...args) => appTranslator.translate(...args)
// 兼容
const i18next = {
  t(...args) {
    return t(...args)
  }
}
export {
  i18next, t, appTranslator, Translator
}
