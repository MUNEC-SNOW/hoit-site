export const langList = [
    {
        name: 'EN',
        code: 'en'
    },
    {
        name: 'FI',
        code: 'fi'
    },
    {
        name: '简',
        code: 'cn'
    },
    {
        name: '繁',
        code: 'hk'
    }
] as const

export declare type LANG_OPTIONS = typeof langList[number]['code']
export declare interface Translations {
    [key: string]: string;
}