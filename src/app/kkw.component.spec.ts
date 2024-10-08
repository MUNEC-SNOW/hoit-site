import { TestBed } from '@angular/core/testing'
import { KkwComponent } from './kkw.component'
import { HttpClientTestingModule } from '@angular/common/http/testing'

describe('KkwComponent', () => {
    let app: KkwComponent
    beforeEach(async () => {
        await TestBed.configureTestingModule({
            imports: [KkwComponent, HttpClientTestingModule],
        }).compileComponents()
        const fixture = TestBed.createComponent(KkwComponent)
        app = fixture.componentInstance
    })

    it('should create the app', () => {
        expect(app).toBeTruthy()
    })

    it('should have the \'hoit-site\' title', () => {
        expect(app.title).toEqual('hoit-site')
    })
})
