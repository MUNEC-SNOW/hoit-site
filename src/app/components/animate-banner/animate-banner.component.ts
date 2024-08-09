import { NgOptimizedImage } from '@angular/common';
import { AfterViewInit, Component, ElementRef, OnDestroy, ViewChild } from '@angular/core';
import { Subscription, fromEvent, map } from 'rxjs';

@Component({
    selector: 'app-animate-banner',
    standalone: true,
    imports: [NgOptimizedImage],
    templateUrl: './animate-banner.component.html',
    styleUrl: './animate-banner.component.scss'
})
export class AnimateBannerComponent implements AfterViewInit, OnDestroy {
    @ViewChild('bannerWrapper') bannerWrapper!: ElementRef<HTMLDivElement>
    mouseMoveSubscription!: Subscription
    mouseLeaveSubscription!: Subscription
    mouseEnterSubscription!: Subscription

    children: Element[] = []
    initTransforms: string[] = []
    transformMatches: RegExpMatchArray[] = []
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
        this.children = Array.from(this.bannerWrapper.nativeElement.children)
        this.initTransforms = this.children.map((child, index) => child.querySelector(index === 13 || index === 19 || index === 20 ? 'video' : 'img')!.style.transform)
        this.transformMatches = this.initTransforms.map(transform => transform.match(/translate\(([^)]+)\)/)!)

        const mouseEnter$ = fromEvent<MouseEvent>(bW, 'mouseenter').pipe(
            map(event => {
                event.stopPropagation()
                return event
            })
        )

        const mouseLeave$ = fromEvent<MouseEvent>(bW, 'mouseleave').pipe(
            map(event => {
                event.stopPropagation()
                return event
            })
        )

        const mouseMove$ = fromEvent<MouseEvent>(bW, 'mousemove').pipe(
            map(event => {
                event.stopPropagation()
                return event
            })
        );

        this.mouseEnterSubscription = mouseEnter$.subscribe(event => {
            this.initMouseLeft = event.pageX - this.bannerLeft
        })

        this.mouseMoveSubscription = mouseMove$.subscribe(event => {
            const mouseLeft = event.pageX - this.bannerLeft
            this.children.forEach((child, index) => {
                let transformX = 0, transformY = 0;
                switch (index) {
                    case 1:
                    case 2:
                        transformX = this.calculatedPosition(mouseLeft, 7);
                        break;
                    case 3:
                    case 4:
                        transformX = this.calculatedPosition(mouseLeft, 20);
                        break;
                    case 5:
                        transformX = this.calculatedPosition(mouseLeft, 182);
                        transformY = this.calculatedPosition(mouseLeft, 7);
                        break;
                    case 6:
                        transformX = this.calculatedPosition(mouseLeft, 12);
                        break;
                    case 7:
                        transformX = this.calculatedPosition(mouseLeft, 50);
                        break;
                    case 8:
                        transformX = this.calculatedPosition(mouseLeft, 73);
                        break;
                    case 9:
                        transformX = this.calculatedPosition(mouseLeft, 48);
                        transformY = this.calculatedPosition(mouseLeft, 24);
                        break;
                    case 10:
                        transformX = this.calculatedPosition(mouseLeft, 60);
                        transformY = this.calculatedPosition(mouseLeft, 30);
                        break;
                    case 11:
                        transformX = this.calculatedPosition(mouseLeft, 82);
                        break;
                    case 12:
                        transformX = this.calculatedPosition(mouseLeft, 121);
                        break;
                    case 13:
                        transformX = this.calculatedPosition(mouseLeft, 592);
                        break;
                    case 14:
                        transformX = this.calculatedPosition(mouseLeft, 182);
                        break;
                    case 15:
                        transformX = this.calculatedPosition(mouseLeft, 170);
                        break;
                    case 16:
                        transformX = this.calculatedPosition(mouseLeft, 182);
                        transformY = this.calculatedPosition(mouseLeft, 80);
                        break;
                    case 17:
                        transformX = this.calculatedPosition(mouseLeft, 213);
                        transformY = this.calculatedPosition(mouseLeft, 12);
                        break;
                    case 18:
                        transformX = this.calculatedPosition(mouseLeft, 300);
                        break;
                    case 19:
                        transformX = this.calculatedPosition(mouseLeft, 32);
                        break;
                    case 20:
                        transformX = this.calculatedPosition(mouseLeft, 35);
                        break;
                    default:
                        return;
                }

                const element = child.querySelector(index === 13 || index === 19 || index === 20 ? 'video' : 'img')!
                let currentX = 0, currentY = 0;
                const [x, y] = this.transformMatches[index]![1].split(',').map(val => parseFloat(val));
                currentX = x || 0;
                currentY = y || 0;

                const newX = currentX - transformX;
                const newY = currentY - transformY;
                if (element) {
                    element.style.setProperty('transform', `translate(${newX}px, ${newY}px) rotate(0deg) scale(1)`);
                }
            });
        });

        this.mouseLeaveSubscription = mouseLeave$.subscribe((e) => {
            this.clearListener.bind(this)();
        })
    }

    ngOnDestroy(): void {
        this.mouseMoveSubscription.unsubscribe()
        this.mouseLeaveSubscription.unsubscribe()
        this.mouseEnterSubscription.unsubscribe()
    }

    clearListener() {
        const duration = 300;
        const interval = 10;
        const steps = duration / interval;
        const currentTransforms = this.children.map((child, index) => child.querySelector(index === 13 || index === 19 || index === 20 ? 'video' : 'img')!.style.transform)

        this.children.forEach((child, index) => {
            const [ initX, initY ] = this.transformMatches[index]![1].split(',').map(parseFloat)
            const endX = initX || 0
            const endY = initY || 0
            let [ currentX, currentY ] = currentTransforms[index].match(/translate\(([^)]+)\)/)![1].split(',').map(parseFloat)
            const stepX = (currentX - endX) / steps
            const stepY = (currentY - endY) / steps

            if (index > 0 && index <= 20) {
                const childElement = child.querySelector('img') || child.querySelector('video');
                if (!childElement) return;

                const timer = setInterval(() => {
                    currentX -= stepX;
                    currentY -= stepY;
                    childElement.style.transform = `translate(${currentX}px, ${currentY}px) rotate(0deg) scale(1)`;
                    if (Math.abs(currentX - endX) < Math.abs(stepX) || Math.abs(currentY - endY) < Math.abs(stepY)) {
                        clearInterval(timer);
                        childElement.style.setProperty('transform', this.initTransforms[index])
                    }
                }, interval);
            }
        });
    }
}
