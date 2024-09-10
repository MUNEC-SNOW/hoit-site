import { TranslatePipe } from '@/pipes/translate/translate.pipe'
import { Component } from '@angular/core'
import { RouterLink, RouterOutlet } from '@angular/router'

@Component({
    selector: 'kkw-css-gallery',
    standalone: true,
    imports: [
        RouterOutlet,
        RouterLink,
        TranslatePipe
    ],
    templateUrl: './css-gallery.component.html',
    styleUrl: './css-gallery.component.scss'
})
export class CssGalleryComponent {
    routerButtons: { name: string, link: string, id: string }[] = [
        { name: 'pikaqu', link: 'pikaqu', id: 'link'},
        { name: 'dvdBouncing', link: 'dvd-bouncing', id: 'dvd-bouncing'},
        { name: 'sphere', link: 'sphere', id: 'sphere'},
    ]
}
