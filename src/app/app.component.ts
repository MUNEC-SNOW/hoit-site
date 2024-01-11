import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ShareModule } from './share.module';

@Component({
    selector: 'app-root',
    standalone: true,
    imports: [
        ShareModule,
        RouterOutlet
    ],
    templateUrl: './app.component.html',
    styleUrl: './app.component.scss'
})
export class AppComponent {
    title = 'hoit-site';
}
