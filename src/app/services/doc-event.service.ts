import { Injectable } from '@angular/core'
import { fromEvent } from 'rxjs'

@Injectable({
    providedIn: 'root'
})
export class DocEventService {
    centerHeight: number = 0
    centerWidth: number = 0

    constructor() {
        fromEvent(document, 'resize').subscribe(() => {
            this.centerHeight = window.innerHeight / 2
            this.centerWidth = window.innerWidth / 2
            console.log(this.centerHeight, this.centerWidth)

        })
    }

}
