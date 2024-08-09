import { Route } from '@angular/router'
import { InfoComponent } from './info.component'

export default [
    {
        path: '',
        component: InfoComponent,
        children: [
            {
                path: 'crush',
                title: 'Crush',
                loadComponent: () => import('./crush/crush.component').then(m => m.CrushComponent)
            },
            {
                path: 'css-gallery',
                title: 'CSS Gallery',
                loadChildren: () => import('./css-gallery/css-gallery.routing')
            }
        ],
    },
] as Route[]