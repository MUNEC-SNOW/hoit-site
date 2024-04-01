import { ClickStopPropagationDirective } from '@/directives/click-stop-propagation.directive'
import { I18nService } from '@/services'
import { TRANSLATION_LANG_KEY, translationLangList } from '@/types'
import { Component } from '@angular/core'

@Component({
    selector: 'app-international',
    standalone: true,
    imports: [ClickStopPropagationDirective],
    templateUrl: './international.component.html',
    styleUrl: './international.component.scss'
})
export class InternationalComponent {
    langList = translationLangList
    showLangList = false
    constructor(private i18n: I18nService) { }

    changeLang(lang: TRANSLATION_LANG_KEY) {
        this.i18n.setLang(lang)
        this.changeShowLangList()
    }

    changeShowLangList() {
        this.showLangList = !this.showLangList
    }
}
