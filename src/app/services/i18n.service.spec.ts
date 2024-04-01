import {
    HttpClientTestingModule,
    HttpTestingController,
} from '@angular/common/http/testing'
import { TestBed } from '@angular/core/testing'

import { I18nService, Translations } from './i18n.service'

const englishTranslations = { hello: 'hello' }
const chineseTranslations = { hello: '你好' }

describe('TranslateService', () => {
    let translateService: I18nService
    let controller: HttpTestingController

    function flushEnglishTranslations(): void {
        controller
            .expectOne({ method: 'GET', url: 'assets/i18n/en.json' })
            .flush(englishTranslations)
    }

    function flushChineseTranslations(): void {
        controller
            .expectOne({ method: 'GET', url: 'assets/i18n/cn.json' })
            .flush(chineseTranslations)
    }

    beforeEach(() => {
        TestBed.configureTestingModule({
            imports: [HttpClientTestingModule],
            providers: [I18nService],
        })
        translateService = TestBed.inject(I18nService)
        controller = TestBed.inject(HttpTestingController)
    })

    it('loads the translations initially', () => {
        flushEnglishTranslations()
        expect().nothing()
        controller.verify()
    })

    it('changes the language', () => {
        flushEnglishTranslations()

        translateService.use('cn')
        flushChineseTranslations()
        expect().nothing()
    })

    it('translates a key, translations already loaded', () => {
        flushEnglishTranslations()

        let actualTranslation: string | undefined
        translateService.get('hello').subscribe((translation) => {
            actualTranslation = translation
        })
        expect(actualTranslation).toBe('hello')
    })

    it('translates a key, translations need to be loaded', () => {
        let actualTranslation: string | undefined
        translateService.get('hello').subscribe((translation) => {
            actualTranslation = translation
        })

        expect(actualTranslation).toBe(undefined)
        flushEnglishTranslations()
        expect(actualTranslation).toBe('hello')
    })

    it('translates a key and completes the observable', () => {
        const next = jasmine.createSpy('next')
        const complete = jasmine.createSpy('complete')
        translateService.get('hello').subscribe(next, fail, complete)

        flushEnglishTranslations()
        translateService.use('cn')
        flushChineseTranslations()

        expect(next).toHaveBeenCalledTimes(1)
        expect(complete).toHaveBeenCalledTimes(1)
    })

    it('emits on translation change', () => {
        const actualTranslations: Translations[] = []
        translateService.onTranslationChange.subscribe(
            (translations: Translations) => {
                actualTranslations.push(translations)
            }
        )

        flushEnglishTranslations()
        translateService.use('cn')
        flushChineseTranslations()

        expect(actualTranslations).toEqual([
            englishTranslations,
            chineseTranslations,
        ])
    })
})