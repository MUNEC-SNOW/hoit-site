import { Routes } from '@angular/router'
import { NotFoundComponent } from './pages/info/not-found/not-found.component'
import { CrushComponent } from './pages/info/crush/crush.component'

export const routes: Routes = [
    {
        path: '',
        redirectTo: '/crush',
        pathMatch: 'full'
    },
    {
        path: 'not-found',
        component: NotFoundComponent
    },
    {
        path: 'crush',
        component: CrushComponent,
    },
    {
        path: 'css-gallery',
        loadChildren: () => import('./pages/info/info-routing')
    },
    {
        path: '**',
        redirectTo: '/not-found',
    }
]
