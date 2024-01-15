import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { TranslatePipe } from './pipes/translate.pipe'
import { RouterLink } from '@angular/router'

@NgModule({
    declarations: [],
    imports: [
        CommonModule,
        RouterLink,
        TranslatePipe
    ],
    exports: [
        CommonModule,
        RouterLink,
        TranslatePipe
    ]
})
export class ShareModule { }
