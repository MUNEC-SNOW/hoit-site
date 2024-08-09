import { Route } from '@angular/router'
import { CssGalleryComponent } from './css-gallery.component'

export default [
    {
        path: '',
        component: CssGalleryComponent,
        children: [
            {
                path: 'pikaqu',
                title: 'Pikaqu Pic Made By CSS',
                loadComponent: () => import('./pikaqu/pikaqu.component').then(m => m.PikaquComponent)
            },
            {
                path: 'dvd-bouncing',
                title: 'CSS Gallery',
                loadComponent: () => import('./dvd-bouncing/dvd-bouncing.component').then(m => m.DvdBouncingComponent)
            },
            {
                path: 'sphere',
                title: 'Sphere Pic Made By CSS',
                loadComponent: () => import('./sphere/sphere.component').then(m => m.SphereComponent)
            }
        ],
    },
] as Route[]