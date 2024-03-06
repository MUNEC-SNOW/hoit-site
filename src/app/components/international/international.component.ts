import { I18nService } from '@/services'
import { TRANSLATION_LANG_KEY } from '@/types'
import { Component } from '@angular/core'

@Component({
    selector: 'app-international',
    standalone: true,
    imports: [],
    templateUrl: './international.component.html',
    styleUrl: './international.component.scss'
})
export class InternationalComponent {

    constructor(private i18n: I18nService) { }

    changeLang(lang: TRANSLATION_LANG_KEY) {
        this.i18n.setLang(lang)
    }

}
