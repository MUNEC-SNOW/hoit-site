import { ChangeDetectorRef, OnDestroy, Pipe, PipeTransform } from '@angular/core';
import { Subscription } from 'rxjs';
import { I18nService } from '@/services';

@Pipe({
    name: 'translate',
    standalone: true
})
export class TranslatePipe implements PipeTransform, OnDestroy {
    value = ''
    onLangChange: Subscription | undefined
    constructor(private translate: I18nService, private _ref: ChangeDetectorRef) {}

    transform(value: any): string {
        console.log(value);
        if (!this.onLangChange) {
            this.onLangChange = this.translate.getLang().subscribe(lang_key => {
                this.value = this.translate.getTranslate(lang_key, value)
                // this._ref.
            });
        }
        console.log(this.value);
        return this.value;
    }

    ngOnDestroy(): void {
        this.onLangChange = undefined
    }
}
