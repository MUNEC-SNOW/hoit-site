import { ChangeDetectionStrategy, Component } from '@angular/core'
import { RouterOutlet } from '@angular/router'
import { ShareModule } from './share.module'
import { I18nService } from '@/services'
import { TRANSLATION_LANG_KEY } from '@/types'

@Component({
    selector: 'app-root',
    standalone: true,
    imports: [
        ShareModule,
        RouterOutlet
    ],
    changeDetection: ChangeDetectionStrategy.OnPush,
    templateUrl: './app.component.html',
    styleUrl: './app.component.scss'
})
export class AppComponent {
    title = 'hoit-site'
    constructor(private i18n: I18nService) {}

    changeLang(lang: TRANSLATION_LANG_KEY) {
        this.i18n.setLang(lang)
    }
}
