import { Route } from '@angular/router'
import { CrushComponent } from './crush/crush.component'

export default [
    {
        path: '',
        component: CrushComponent,
        children: [
            {
                path: 'first-meet',
                title: 'Hi! Crush',
                loadComponent: () => import('../info/crush/crush.component').then(m => m.CrushComponent)
            },
        ]
    }
] as Route[]