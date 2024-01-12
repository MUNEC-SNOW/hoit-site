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

export declare type TRANSLATION_LANG_KEY = keyof typeof translation
export declare type TRANSLATION_TEXT_KEY = keyof typeof translation[keyof typeof translation]
