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
                path: 'css-gallery-two',
                title: 'CSS Gallery',
                loadComponent: () => import('../info/css-gallery/css-gallery-two/css-gallery-two.component').then(m => m.CssGalleryTwoComponent)
            }
        ],
    },
] as Route[]