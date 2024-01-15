import { AfterViewInit, Component, OnDestroy } from '@angular/core'
import { Subscription, fromEvent } from 'rxjs'

@Component({
    selector: 'app-not-found',
    standalone: true,
    imports: [],
    templateUrl: './not-found.component.html',
    styleUrl: './not-found.component.scss'
})
export class NotFoundComponent implements AfterViewInit, OnDestroy {
    hoverEvent: Subscription | undefined

    ngAfterViewInit(): void {
        const scene = document.getElementById('scene')
        if(scene) {
            this.hoverEvent = fromEvent(document, 'mouseover').subscribe((e) => {
                console.log(e, 1111)

            })
        }
    }

    ngOnDestroy(): void {
        this.hoverEvent?.unsubscribe()
    }
}
