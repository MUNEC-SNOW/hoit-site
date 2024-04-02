import { Component } from '@angular/core'
import { TranslatePipe } from '@/pipes/translate/translate.pipe'

@Component({
    selector: 'app-crush',
    standalone: true,
    templateUrl: './crush.component.html',
    styleUrl: './crush.component.scss',
    imports: [TranslatePipe]
})
export class CrushComponent {

}
