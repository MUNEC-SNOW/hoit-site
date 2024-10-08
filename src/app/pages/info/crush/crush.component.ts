import { Component } from '@angular/core'
import { TranslatePipe } from '@/pipes/translate/translate.pipe'
import { GALLERY_ITEM } from '@/types'
import { GalleryComponent } from '@/components/gallery/gallery.component'

@Component({
    selector: 'kkw-crush',
    standalone: true,
    templateUrl: './crush.component.html',
    styleUrl: './crush.component.scss',
    imports: [TranslatePipe, GalleryComponent]
})
export class CrushComponent {
    images: Array<GALLERY_ITEM> = [
        { src: './assets/imgs/pikaqu.webp', title: 'Pikaqu', routerLink: 'pikaqu'},
        { src: './assets/imgs/dvd.webp', title: 'DVD Bouncing', routerLink: 'dvd-bouncing'},
        { src: './assets/imgs/home.webp', title: 'Panel 3', routerLink: 'pikaqu'},
        { src: './assets/imgs/hq_sm.webp', title: 'Panel 4', routerLink: 'pikaqu'},
    ]
}
