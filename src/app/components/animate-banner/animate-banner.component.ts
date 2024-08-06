import { AfterViewInit, Component, ElementRef, ViewChild } from '@angular/core';

@Component({
  selector: 'app-animate-banner',
  standalone: true,
  imports: [],
  templateUrl: './animate-banner.component.html',
  styleUrl: './animate-banner.component.scss'
})
export class AnimateBannerComponent implements AfterViewInit {
    @ViewChild('bannerWrapper') bannerWrapper!: ElementRef<HTMLDivElement>
    bannerWidth = 0
    bannerLeft = 0
    initMouseLeft = 0

    calculatedPosition(mouseLeft: number, maxOffset = 10): number {
        return - (mouseLeft  - this.initMouseLeft) * maxOffset / this.bannerWidth;
    }

    ngAfterViewInit(): void {
        const bW = this.bannerWrapper.nativeElement
        this.bannerWidth = bW.offsetWidth
        this.bannerLeft = bW.offsetLeft
        this.initMouseLeft = bW.offsetLeft

        bW.addEventListener('mouseenter', (e) => {
            e.stopPropagation()
            this.initMouseLeft = e.pageX - this.bannerLeft;
            this.startListener()
        })

        bW.addEventListener('mouseleave', (e) => {
            e.stopPropagation()

        })
    }

    function(event: MouseEvent) {
        event.stopPropagation()
        const mouseLeft = event.pageX - this.bannerLeft;
        const children = Array.from(this.bannerWrapper.nativeElement.children)
        children.forEach((child, index) => {
            switch(index) {
                case 1:
                case 2:
                    child.querySelector('img')!.style.setProperty('transform', `translate(${this.calculatedPosition(mouseLeft, 7)}px, 0px)`);break;
                case 3:
                case 4:
                    child.querySelector('img')!.style.setProperty('transform', `translate(${this.calculatedPosition(mouseLeft, 20)}px, 0px)`);break;
                case 5:
                    child.querySelector('img')!.style.setProperty('transform', `translate(${this.calculatedPosition(mouseLeft, 182)}px, ${this.calculatedPosition(mouseLeft, 7)}px)`);break;
                case 6:
                    child.querySelector('img')!.style.setProperty('transform', `translate(${this.calculatedPosition(mouseLeft, 12)}px, 0px)`);break;
                case 7:
                    child.querySelector('img')!.style.setProperty('transform', `translate(${this.calculatedPosition(mouseLeft, 50)}px, 0px)`);break;
                case 8:
                    child.querySelector('img')!.style.setProperty('transform', `translate(${this.calculatedPosition(mouseLeft, 73)}px, 0px)`);break;
                case 9:
                    child.querySelector('img')!.style.setProperty('transform', `translate(${this.calculatedPosition(mouseLeft, 48)}px, ${this.calculatedPosition(mouseLeft, 24)}px)`);break;
                case 10:
                    child.querySelector('img')!.style.setProperty('transform', `translate(${this.calculatedPosition(mouseLeft, 60)}px, ${this.calculatedPosition(mouseLeft, 30)}px)`);break;
                case 11:
                    child.querySelector('img')!.style.setProperty('transform', `translate(${this.calculatedPosition(mouseLeft, 82)}px, 0px)`);break;
                case 12:
                    child.querySelector('img')!.style.setProperty('transform', `translate(${this.calculatedPosition(mouseLeft, 121)}px, 0px)`);break;
                case 13:
                    child.querySelector('video')!.style.setProperty('transform', `translate(${this.calculatedPosition(mouseLeft, 592)}px, 0px)`);break;
                case 14:
                    child.querySelector('img')!.style.setProperty('transform', `translate(${this.calculatedPosition(mouseLeft, 182)}px, 0px)`);break;
                case 15:
                    child.querySelector('img')!.style.setProperty('transform', `translate(${this.calculatedPosition(mouseLeft, 170)}px, 0px)`);break;
                case 16:
                    child.querySelector('img')!.style.setProperty('transform', `translate(${this.calculatedPosition(mouseLeft, 182)}px, ${this.calculatedPosition(mouseLeft, 80)}px)`);break;
                case 17:
                    child.querySelector('img')!.style.setProperty('transform', `translate(${this.calculatedPosition(mouseLeft, 333)}px, ${this.calculatedPosition(mouseLeft, 12)}px)`);break;
                case 18:
                    child.querySelector('img')!.style.setProperty('transform', `translate(${this.calculatedPosition(mouseLeft, 183)}px, 0px)`);break;
                case 19:
                    child.querySelector('video')!.style.setProperty('transform', `translate(${this.calculatedPosition(mouseLeft, 282)}px, 0px)`);break;
                case 20:
                    child.querySelector('video')!.style.setProperty('transform', `translate(${0 - this.calculatedPosition(mouseLeft, 777)}px, 0px)`);break;
                    default: break;
            }
        })
    }

    startListener() {
        this.bannerWrapper.nativeElement.addEventListener('mousemove', this.function.bind(this))
    }
}
