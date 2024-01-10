import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { CoreModule } from './core.module';

@Component({
    selector: 'app-root',
    standalone: true,
    imports: [
        CommonModule,
        CoreModule,
        RouterOutlet
        ],
    templateUrl: './app.component.html',
    styleUrl: './app.component.scss'
})
export class AppComponent {
    title = 'hoit-site';
}
