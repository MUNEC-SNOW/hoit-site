import { ChangeDetectorRef, OnDestroy, Pipe, PipeTransform } from '@angular/core'
import { Subscription } from 'rxjs'
import { I18nService } from '@/services'
import { TRANSLATION_TEXT_KEY } from '@/types'

@Pipe({
    name: 'translate',
    pure: false,
    standalone: true
})
export class TranslatePipe implements PipeTransform, OnDestroy {
    value = ''
    onLangChange: Subscription | undefined
    constructor(private translate: I18nService, private _ref: ChangeDetectorRef) {}

    transform(value: TRANSLATION_TEXT_KEY): string {
        if (!this.onLangChange) {
            this.onLangChange = this.translate.getLang().subscribe(lang_key => {
                this.value = this.translate.getTranslate(lang_key, value)
                this._ref.markForCheck()
            })
        }
        return this.value
    }

    ngOnDestroy(): void {
        this.onLangChange?.unsubscribe()
    }
}
