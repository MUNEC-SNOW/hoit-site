import { Routes } from '@angular/router'
import { NotFoundComponent } from './pages/not-found/not-found.component'

export const routes: Routes = [
    {
        path: '',
        redirectTo: '/info/crush',
        pathMatch: 'full'
    },
    {
        path: 'not-found',
        component: NotFoundComponent
    },
    {
        path: 'info',
        loadChildren: () => import('./pages/info/info.routing')
    },
    {
        path: '**',
        redirectTo: '/not-found',
    }
]
