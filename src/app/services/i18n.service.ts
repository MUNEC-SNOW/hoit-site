import { Injectable } from '@angular/core'
import { BehaviorSubject, Observable } from 'rxjs'
import {
    TRANSLATION_LANG_KEY,
    TRANSLATION_TEXT_KEY,
    translation
} from '@/types'

@Injectable({
    providedIn: 'root'
})
export class I18nService {
    lang = new BehaviorSubject<TRANSLATION_LANG_KEY>('en-US')
    private currentLang: TRANSLATION_LANG_KEY = 'en-US'
    constructor() { }

    setLang(lang: TRANSLATION_LANG_KEY): void {
        if(this.currentLang === lang) {
            return
        }
        this.currentLang = lang
        this.lang.next(lang)
    }

    getLang(): Observable<TRANSLATION_LANG_KEY> {
        return this.lang.asObservable()
    }

    getTranslate(lang_key: TRANSLATION_LANG_KEY, lang: TRANSLATION_TEXT_KEY) {
        return translation[lang_key][lang]
    }
}



