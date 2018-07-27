import i18next from 'i18next'

// 数字转英文序数词
const number2Ordinal = (number) => {
  if (typeof number !== 'number' || i18next.language === 'zh') {
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
const isEnglish = () => {
  return i18next.language === 'en'
}
export {
  number2Ordinal, isEnglish
}
