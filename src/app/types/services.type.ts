export const translation = {
    'en-US': {
        hello: 'hello'
    },
    'zh-CN': {
        hello: '你好'
    },
    'zh-HK': {
        hello: '你好'
    }
} as const

export const translationLangList = [{
    code: 'en-US',
    name: 'English'
},
{
    code: 'zh-CN',
    name: '中文',
},
{
    code: 'zh-HK',
    name: '中文(繁体)'
}] as const

export const translation_lang_key = Object.keys(translation) as Array<TRANSLATION_LANG_KEY>

export declare type TRANSLATION_LANG_KEY = keyof typeof translation
export declare type TRANSLATION_TEXT_KEY = keyof typeof translation[keyof typeof translation]
