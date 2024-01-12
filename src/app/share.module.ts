import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { TranslatePipe } from './pipes/translate.pipe'

@NgModule({
    declarations: [],
    imports: [
        CommonModule,
        TranslatePipe
    ],
    exports: [
        CommonModule,
        TranslatePipe
    ]
})
export class ShareModule { }
