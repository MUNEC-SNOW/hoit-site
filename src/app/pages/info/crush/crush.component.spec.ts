import { ComponentFixture, TestBed } from '@angular/core/testing'

import { CrushComponent } from './crush.component'
import { HttpClientTestingModule } from '@angular/common/http/testing'

describe('CrushComponent', () => {
    let component: CrushComponent
    let fixture: ComponentFixture<CrushComponent>

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            imports: [CrushComponent, HttpClientTestingModule]
        }).compileComponents()

        fixture = TestBed.createComponent(CrushComponent)
        component = fixture.componentInstance
        fixture.detectChanges()
    })

    it('should create', () => {
        expect(component).toBeTruthy()
    })
})
