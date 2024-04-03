import { Component, ElementRef, Input, AfterViewInit, ViewChild } from '@angular/core'
import { GALLERY_ITEM } from '@/types'

@Component({
    selector: 'app-gallery',
    standalone: true,
    imports: [],
    templateUrl: './gallery.component.html',
    styleUrl: './gallery.component.scss'
})
export class GalleryComponent implements AfterViewInit {
    @Input() images: Array<GALLERY_ITEM> = []
    @ViewChild('galleryWrapper') galleryWrapper!: ElementRef<HTMLDivElement>

    ngAfterViewInit(): void {
        const gW = this.galleryWrapper.nativeElement
        const scrollDistance = (gW.scrollWidth - gW.clientWidth ) >> 1
        gW.scrollTo({
            behavior: 'instant',
            left: scrollDistance
        })
    }
}
