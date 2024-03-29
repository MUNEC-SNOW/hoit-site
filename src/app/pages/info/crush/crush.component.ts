import { Component } from '@angular/core'
import { HeaderComponent } from '@/components/header/header.component'
import { TranslatePipe } from '@/pipes/translate.pipe'

@Component({
    selector: 'app-crush',
    standalone: true,
    templateUrl: './crush.component.html',
    styleUrl: './crush.component.scss',
    imports: [HeaderComponent, TranslatePipe]
})
export class CrushComponent {

}
