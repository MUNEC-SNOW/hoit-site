import { TestBed } from '@angular/core/testing'
import { AppComponent } from './app.component'
import { HttpClientTestingModule } from '@angular/common/http/testing'

describe('AppComponent', () => {
    let app: AppComponent
    beforeEach(async () => {
        await TestBed.configureTestingModule({
            imports: [AppComponent, HttpClientTestingModule],
        }).compileComponents()
        const fixture = TestBed.createComponent(AppComponent)
        app = fixture.componentInstance
    })

    it('should create the app', () => {
        expect(app).toBeTruthy()
    })

    it('should have the \'hoit-site\' title', () => {
        expect(app.title).toEqual('hoit-site')
    })
})
