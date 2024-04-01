import { EventEmitter, Injectable } from '@angular/core'
import { HttpClient } from '@angular/common/http'
import { Observable, map, of, take } from 'rxjs'
import { LANG_OPTIONS, Translations } from '@/types'

@Injectable({
    providedIn: 'root'
})
export class I18nService {
    private currentLang = 'en'
    private translations: Translations | null = null
    public onTranslationChange = new EventEmitter<Translations>()

    constructor(private http: HttpClient) {
        this.loadTranslations(this.currentLang)
    }

    /** Changes the language */
    public use(language: LANG_OPTIONS): void {
        this.currentLang = language
        this.loadTranslations(language)
    }

    /** Translates a key asynchronously */
    public get(key: string): Observable<string> {
        if (this.translations) {
            return of(this.translations[key])
        }
        return this.onTranslationChange.pipe(
            take(1),
            map((translations) => translations[key])
        )
    }

    /** Loads the translations for the given language */
    private loadTranslations(language: string): void {
        this.translations = null
        this.http
            .get<Translations>(`assets/i18n/${language}.json`)
            .subscribe((translations) => {
                this.translations = translations
                this.onTranslationChange.emit(translations)
            })
    }
}



