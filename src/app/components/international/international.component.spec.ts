import { ComponentFixture, TestBed } from '@angular/core/testing'

import { InternationalComponent } from './international.component'
import { HttpClientTestingModule } from '@angular/common/http/testing'

describe('InternationalComponent', () => {
    let component: InternationalComponent
    let fixture: ComponentFixture<InternationalComponent>

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            imports: [InternationalComponent, HttpClientTestingModule]
        }).compileComponents()

        fixture = TestBed.createComponent(InternationalComponent)
        component = fixture.componentInstance
        fixture.detectChanges()
    })

    it('should create', () => {
        expect(component).toBeTruthy()
    })
})
