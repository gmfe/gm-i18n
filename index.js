import i18next from 'i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

function i18nextInit(i18nextConfig) {
    const defaultConfig = {
        // 检测浏览器语言
        detection: {
            //  使用的检测方法,官方提供
            order: ['cookie', 'navigator'],
            // keys or params to lookup language from
            lookupCookie: 'guanmai_language'
        },

        // 当前语言包没提供翻译文件的时候,使用的默认语言
        fallbackLng: 'zh',
        // 没找到key的时候,做以下处理
        parseMissingKeyHandler: function (key) {
            const arr = key.split('#');
            return arr[arr.length - 1];
        },

        // 初始化是,加载的命名空间json文件
        ns: ['default'],
        // 默认命名空间
        defaultNS: 'default',

        // key分隔符
        keySeparator: '#',
        //命名空间分割符
        nsSeparator: '@',

        interpolation: {
            prefix: '${',
            suffix: '}'
        },

        // 如果使用后端加载资源，则将其设置为false - 通过这种方式可以在初始化之后调用i18next.t。
        // initImmediate: false,
        debug: false
    };
    i18next.use(LanguageDetector).init({
        ...defaultConfig,
        ...i18nextConfig
    });
}

export {
    i18nextInit,
    i18next
}