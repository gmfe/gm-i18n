import i18next from 'i18next'
import Cookie from 'js-cookie'

const GUAIMAI_LANGUAGE = 'guanmai_language'

const getDefaultLng = () => Cookie.get(GUAIMAI_LANGUAGE) || window.navigator.language.slice(0, 2)
const setLngInCookie = (lng) => Cookie.set(GUAIMAI_LANGUAGE, lng)

function i18nextInit (i18nextConfig) {
  const defaultConfig = {
    lng: getDefaultLng(),
    // 当前语言包没提供翻译文件的时候,使用的默认语言
    fallbackLng: 'zh',
    // 没找到key的时候,做以下处理
    parseMissingKeyHandler: function (key) {
      const arr = key.split('#')
      return arr[arr.length - 1]
    },

    // 初始化是,加载的命名空间json文件
    ns: ['default'],
    // 默认命名空间
    defaultNS: 'default',

    // key分隔符
    keySeparator: '#',
    // 命名空间分割符
    nsSeparator: '@',

    interpolation: {
      prefix: '${',
      suffix: '}'
    },

    // 如果使用后端加载资源，则将其设置为false - 通过这种方式可以在初始化之后调用i18next.t。
    // initImmediate: false,
    debug: false
  }
  i18next.init({
    ...defaultConfig,
    ...i18nextConfig
  })
}
export * from './util'
export {
  i18nextInit,
  i18next,
  getDefaultLng,
  setLngInCookie
}
