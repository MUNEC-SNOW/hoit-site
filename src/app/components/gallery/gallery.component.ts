import { Component, Input } from '@angular/core'
import { GALLERY_ITEM } from '@/types'

@Component({
    selector: 'app-gallery',
    standalone: true,
    imports: [],
    templateUrl: './gallery.component.html',
    styleUrl: './gallery.component.scss'
})
export class GalleryComponent {
    @Input() images: Array<GALLERY_ITEM> = []
}
