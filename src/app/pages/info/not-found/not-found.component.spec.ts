import { ComponentFixture, TestBed } from '@angular/core/testing'

import { NotFoundComponent } from './not-found.component'

describe('NotFoundComponent', () => {
    let component: NotFoundComponent
    let fixture: ComponentFixture<NotFoundComponent>

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            imports: [NotFoundComponent]
        })
            .compileComponents()

        fixture = TestBed.createComponent(NotFoundComponent)
        component = fixture.componentInstance
        fixture.detectChanges()
    })

    it('should create', () => {
        expect(component).toBeTruthy()
    })

    it('parallaxInstance has instance', () => {
        expect(component.parallaxInstance).toBeDefined()
    })

    it('should have the \'404 not found\' title', () => {
        expect(document.title).toEqual('404 not found')
    })
})
