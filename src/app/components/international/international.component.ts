import { ClickStopPropagationDirective } from '@/directives/click-stop-propagation.directive'
import { I18nService, LANG_OPTIONS, langList } from '@/services'
import { Component } from '@angular/core'

@Component({
    selector: 'app-international',
    standalone: true,
    imports: [ClickStopPropagationDirective],
    templateUrl: './international.component.html',
    styleUrl: './international.component.scss'
})
export class InternationalComponent {
    langListDisplay = langList
    showLangList = false
    constructor(private i18n: I18nService) { }

    changeLang(lang: LANG_OPTIONS) {
        this.i18n.use(lang)
        this.changeShowLangList()
    }

    changeShowLangList() {
        this.showLangList = !this.showLangList
    }
}
