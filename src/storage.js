
import Cookie from 'js-cookie'
import {KEYS, SUPPORT_LANGUAGES} from './constant'

const verifyLanguageCode = (code) => {
  let language = SUPPORT_LANGUAGES.find(item => item.value === code)
  let validCode = 'zh'
  if (language) {
    validCode = language.value
  }
  return validCode
}

const getCurrentLng = () => {
  let curCode = Cookie.get(KEYS.STORAGE_LANG_CODE_KEY) || window.localStorage.getItem(KEYS.STORAGE_LANG_CODE_KEY)
  if (!curCode) {
    curCode = window.navigator.language.slice(0, 2)
  }
  return verifyLanguageCode(curCode)
}
const setCurrentLng = (lngCode) => {
  let validCode = verifyLanguageCode(lngCode)

  window.localStorage.setItem(KEYS.STORAGE_LANG_CODE_KEY, validCode)
}
export {
  getCurrentLng, setCurrentLng
}
