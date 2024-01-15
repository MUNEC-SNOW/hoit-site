import { AfterViewInit, ChangeDetectionStrategy, Component, OnDestroy } from '@angular/core'
import { Subscription } from 'rxjs'
import Parallax from 'parallax-js'
import { Router } from '@angular/router'

@Component({
    selector: 'app-not-found',
    standalone: true,
    imports: [],
    templateUrl: './not-found.component.html',
    changeDetection: ChangeDetectionStrategy.OnPush,
    styleUrl: './not-found.component.scss'
})
export class NotFoundComponent implements AfterViewInit, OnDestroy {
    hoverEvent: Subscription | undefined
    parallaxInstance: Parallax | undefined

    constructor(private router: Router) {}

    toProfile(): void {
        this.router.navigate(['/crush'])
    }

    ngAfterViewInit(): void {
        const scene = document.getElementById('scene')
        document.title = '404 not found'
        if(scene) {
            this.parallaxInstance = new Parallax(scene)
        }
    }

    ngOnDestroy(): void {
        document.title = 'hoit-site'
        this.hoverEvent?.unsubscribe()
        this.parallaxInstance = undefined
    }
}
