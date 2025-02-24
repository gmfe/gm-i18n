// 支持的外文
const SUPPORT_FOREIGN_LANGUAGES = [
  {value: 'zh-HK', text: '繁體中文', desc: '繁体中文'},
  {value: 'en', text: 'English', desc: '英语'},
  {value: 'th', text: 'ภาษาไทย', desc: '泰语'},
  {value: 'ug', text: 'ئۇيغۇر', desc: '维吾尔语'},
  {value: 'kh', text: 'ប្រទេសកម្ពុជា', desc: '柬埔寨'},
  { value: 'ina', text: 'Indonesia', desc: '印尼' },
  { value: 'burmese', text: 'မိုန်မာရ်', desc: '缅甸' }
]

const SUPPORT_LANGUAGES = [
  {value: 'zh', text: '简体中文', desc: '简体中文'},
  ...SUPPORT_FOREIGN_LANGUAGES
]

const KEYS = {
  STORAGE_LANG_CODE_KEY: 'guanmai_language'
}

const IDENTIFIER = {
  VERSION_IDENTIFIER: '__gm_language_version',
  INITIALIZER_IDENTIFIER: '__gm_language_initializer',
  GLOBAL_IDENTIFIER: 'gmI18n'
}

const GETTER = {
  STORAGE_KEY (projectName, languageCode) {
    return `__gm_language_storage#${projectName}#${languageCode}`
  },
  VERSION_URL (baseUrl, projectName) {
    return `//${baseUrl}/build/${projectName}/locales/language_version.js`
  },
  LANGUAGE_URL (baseUrl, projectName, languageCode) {
    return `//${baseUrl}/build/${projectName}/locales/${languageCode}.js`
  }
}

// 脚本用的
const SUPPORT_PROJECTS = [
  {value: 'pa', text: '采购app'},
  {value: 'supplier', text: '供应商app'},
  {value: 'driver', text: '司机app'},
  {value: 'bshop', text: 'bshop商城'},
  {value: 'station', text: 'station'},
  {value: 'manage', text: 'manage'},
  {value: 'upms', text: '用户管理系统'},
  {value: 'mes', text: '分拣软件'},
  {value: 'cshop', text: 'c端商城'},
  {value: 'club', text: '团长小程序'},
  {value: 'bshopv2', text: 'bshop新ui'},
  { value: 'sonicMerchantCenter', text: '速麦通入门版' },
  { value: 'sonicSortingSystem', text: '速麦通分拣端' },
  { value: 'q_mes', text: '新架构工位屏' },
  { value: 'q_erp', text: '新架构erp' },
  { value: 'q_wsm', text: 'wsm' },
]
const getLanguageDesc = (code) => {
  const res = SUPPORT_LANGUAGES.find((lng) => lng.value === code) || {}
  return res.desc
}

const getProjectDesc = (value) => {
  const res = SUPPORT_PROJECTS.find((project) => project.value === value) || {}
  return res.text
}

export {
  SUPPORT_LANGUAGES, SUPPORT_FOREIGN_LANGUAGES, KEYS, GETTER, IDENTIFIER,
  getLanguageDesc, getProjectDesc, SUPPORT_PROJECTS
}
