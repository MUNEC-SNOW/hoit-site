import { TestBed } from '@angular/core/testing'
import { I18nService } from './i18n.service'

describe('I18nService', () => {
    let service: I18nService

    beforeEach(() => {
        TestBed.configureTestingModule({})
        service = TestBed.inject(I18nService)
    })

    it('should be created', () => {
        expect(service).toBeTruthy()
    })

    it('get lang Observable', () => {
        let serviceSubject = service.getLang().subscribe(value => {
            expect(value).toEqual('en-US')
        })
        expect(serviceSubject).toBeDefined()
        serviceSubject.unsubscribe()
        service.setLang('zh-CN')
        serviceSubject = service.getLang().subscribe(value => {
            expect(value).toEqual('zh-CN')
        })
    })
})
