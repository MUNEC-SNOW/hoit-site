import { Route } from '@angular/router'
import { CssGalleryComponent } from './css-gallery/css-gallery.component'

export default [
    {
        path: '',
        component: CssGalleryComponent,
        children: [
            {
                path: 'pikaqu',
                title: 'Pikaqu Pic Made By CSS',
                loadComponent: () => import('./css-gallery/pikaqu/pikaqu.component').then(m => m.PikaquComponent)
            },
            {
                path: 'dvd-bouncing',
                title: 'CSS Gallery',
                loadComponent: () => import('./css-gallery/dvd-bouncing/dvd-bouncing.component').then(m => m.DvdBouncingComponent)
            }
        ],
    },
] as Route[]