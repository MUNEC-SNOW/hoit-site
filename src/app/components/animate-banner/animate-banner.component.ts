import { NgOptimizedImage } from '@angular/common';
import { AfterViewInit, Component, ElementRef, OnDestroy, ViewChild } from '@angular/core';
import { Subscription, fromEvent, map, switchMap, takeUntil } from 'rxjs';

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

        this.mouseMoveSubscription = mouseMove$.subscribe(event => {
            const mouseLeft = event.pageX - this.bannerLeft;
            const children = Array.from(this.bannerWrapper.nativeElement.children);
            children.forEach((child, index) => {
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

                const element = child.querySelector(index === 13 || index === 19 || index === 20 ? 'video' : 'img');
                if (element) {
                    element.style.setProperty('transform', `translate(${transformX}px, ${transformY}px)`);
                }
            });
        });

        this.mouseLeaveSubscription = mouseLeave$.subscribe((e) => {
            this.clearListener(e)
        })
    }

    ngOnDestroy(): void {
        this.mouseMoveSubscription.unsubscribe()
        this.mouseLeaveSubscription.unsubscribe()
    }

    clearListener(event: MouseEvent) {
        let startValue = this.calculatedPosition(event.pageX - this.bannerLeft);
        const children = Array.from(this.bannerWrapper.nativeElement.children)
        children.forEach((child, index) => {
            let endValue = 0
            let duration = 200
            let interval = 50
            let steps = duration / interval
            let stepValue = (startValue - endValue) / steps
            let currentValue = startValue;
            if (index > 0 && index <= 20) {
                let timer = setInterval(() => {
                    currentValue -= stepValue;
                    const childElement = child.querySelector('img') || child.querySelector('video')
                    childElement!.style.setProperty('transform', `translate(0px, 0px)`)
                    if (Math.abs(currentValue - endValue) < Math.abs(stepValue)) {
                        clearInterval(timer)
                        const targetOffset = index === 13
                            ? 'translate(580.645px, 0px)'
                            : index === 17
                                ? 'translate(120.774px, 0px)'
                                : index === 18
                                    ? 'translate(-120.774px, 0px)'
                                    : index === 19
                                        ? 'translate(250.839px, 0px)'
                                        : index === 20
                                            ? 'translate(-812.903px, 0px)'
                                            : 'translate(0px, 0px)'
                        childElement!.style.setProperty('transform', targetOffset)
                    }
                }, interval);
            }
        })
    }
}
