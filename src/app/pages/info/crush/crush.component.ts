import { Component } from '@angular/core'
import { HeaderComponent } from '@/components/header/header.component'

@Component({
    selector: 'app-crush',
    standalone: true,
    templateUrl: './crush.component.html',
    styleUrl: './crush.component.scss',
    imports: [HeaderComponent]
})
export class CrushComponent {

}
