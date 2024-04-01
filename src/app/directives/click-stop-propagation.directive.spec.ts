import { Component } from '@angular/core'
import { ClickStopPropagationDirective } from './click-stop-propagation.directive'
import { ComponentFixture, TestBed } from '@angular/core/testing'

@Component({
    template: `
    <button (click)="fatherClick()">
        <button
            id="fake-btn-1"
            [appClickStopPropagation]
            (click)="fakeClick()"
        >123</button>
    </button>
    `,
})
class HostComponent {
    a = 0
    fatherClick() {
        this.a = 1
    }

    fakeClick() {

    }

    getA() {
        return this.a
    }
}

describe('ClickStopPropagationDirective', () => {
    let fixture: ComponentFixture<HostComponent>
    let button: HTMLButtonElement

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            declarations: [HostComponent],
            imports: [ClickStopPropagationDirective],
        }).compileComponents()

        fixture = TestBed.createComponent(HostComponent)
        fixture.detectChanges()

        button = document.getElementById('fake-btn-1') as HTMLButtonElement
    })

    it('should create an instance', () => {
        const directive = new ClickStopPropagationDirective()
        expect(directive).toBeTruthy()
    })

    it('should not have propagation', () => {
        button.click()
        fixture.detectChanges()
        expect(fixture.componentInstance.getA()).toBe(0)
    })
})
