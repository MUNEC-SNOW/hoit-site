import { Component } from '@angular/core'
import { TranslatePipe } from '@/pipes/translate/translate.pipe'
import { GALLERY_ITEM } from '@/types'
import { GalleryComponent } from '@/components/gallery/gallery.component'

@Component({
    selector: 'app-crush',
    standalone: true,
    templateUrl: './crush.component.html',
    styleUrl: './crush.component.scss',
    imports: [TranslatePipe, GalleryComponent]
})
export class CrushComponent {
    images: Array<GALLERY_ITEM> = [
        { src: './assets/imgs/pikaqu.svg', title: 'ColdChase', routerLink: 'pikaqu'},
        { src: 'https://dribbble.s3.amazonaws.com/users/322/screenshots/980517/icehut_sm.jpg', title: 'Panel 2', routerLink: 'pikaqu'},
        { src: 'https://dribbble.s3.amazonaws.com/users/322/screenshots/943660/hq_sm.jpg', title: 'Panel 3', routerLink: 'pikaqu'},
        { src: 'https://dribbble.s3.amazonaws.com/users/322/screenshots/599584/home.jpg', title: 'Panel 4', routerLink: 'pikaqu'},
    ]
}
