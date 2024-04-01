import { Component } from '@angular/core'
import { ClickStopPropagationDirective } from '@/directives'
import { I18nService } from '@/services'
import { LANG_OPTIONS, langList } from '@/types'

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
