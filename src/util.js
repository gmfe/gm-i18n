import {getCurrentLng} from './storage'
import {SUPPORT_FOREIGN_LANGUAGES} from './constant'

const isSimplifiedChinese = (code = getCurrentLng()) => {
  return code === 'zh'
}
const isTraditionalChinese = (code = getCurrentLng()) => {
  return code === 'zh-HK'
}
const isValidForeignLanguage = (code) => {
  return !!SUPPORT_FOREIGN_LANGUAGES.find((lng) => lng.value === code)
}
const isEnglish = (code = getCurrentLng()) => {
  return code === 'en'
}

// 数字转英文序数词
const number2Ordinal = (number) => {
  if (typeof number !== 'number' || isSimplifiedChinese()) {
    return number
  }
  function getSuffix () {
    let b = number % 10
    return (~~(number % 100 / 10) === 1) ? 'th'
      : (b === 1) ? 'st'
        : (b === 2) ? 'nd'
          : (b === 3) ? 'rd' : 'th'
  }
  return `${number}${getSuffix()}`
}
export {
  number2Ordinal, isEnglish, isSimplifiedChinese, isTraditionalChinese, isValidForeignLanguage
}
