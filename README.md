# gm-i18n
🇻🇳🇺🇸国际化

## 发布CDN
ssh gate => cd /data/frontend_release/gm-i18n
然后： npm run deploy
## CHANGELOG
### V2
getDefaultLng -> getCurrentLng
setLngInCookie -> setCurrentLng
i18next.changeLanguage -> setCurrentLng

提供 `SUPPORT_LANGUAGES` `SUPPORT_FOREIGN_LANGUAGES` `isSimplifiedChinese` 等方法 
