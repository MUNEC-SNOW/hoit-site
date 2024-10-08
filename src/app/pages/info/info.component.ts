import { ChangeDetectionStrategy, Component } from '@angular/core'
import { RouterOutlet } from '@angular/router'
import { AnimateBannerComponent } from "@/components/animate-banner/animate-banner.component";

@Component({
    selector: 'kkw-info',
    standalone: true,
    changeDetection: ChangeDetectionStrategy.OnPush,
    templateUrl: './info.component.html',
    styleUrl: './info.component.scss',
    imports: [
        RouterOutlet,
        AnimateBannerComponent
    ]
})
export class InfoComponent {
    title = 'hoit-site'
    constructor() {}
}
