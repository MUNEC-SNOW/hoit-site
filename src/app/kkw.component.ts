import { ChangeDetectionStrategy, Component } from '@angular/core'
import { RouterOutlet } from '@angular/router'
import { InternationalComponent } from '@/components/international/international.component'
@Component({
    selector: 'kkw-root',
    standalone: true,
    changeDetection: ChangeDetectionStrategy.OnPush,
    templateUrl: './kkw.component.html',
    styleUrl: './kkw.component.scss',
    imports: [
        RouterOutlet,
        InternationalComponent,
    ]
})
export class KkwComponent {
    title = 'hoit-site'
    constructor() {}
}
