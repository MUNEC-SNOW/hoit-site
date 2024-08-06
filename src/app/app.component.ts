import { ChangeDetectionStrategy, Component } from '@angular/core'
import { RouterOutlet } from '@angular/router'
import { InternationalComponent } from '@/components/international/international.component'
import { AnimateBannerComponent } from "@/components/animate-banner/animate-banner.component";

@Component({
    selector: 'app-root',
    standalone: true,
    changeDetection: ChangeDetectionStrategy.OnPush,
    templateUrl: './app.component.html',
    styleUrl: './app.component.scss',
    imports: [
        RouterOutlet,
        InternationalComponent,
        AnimateBannerComponent
    ]
})
export class AppComponent {
    title = 'hoit-site'
    constructor() {}
}
