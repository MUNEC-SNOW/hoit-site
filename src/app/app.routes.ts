import { Routes } from '@angular/router';
import { NotFoundComponent } from './pages/info/not-found/not-found.component';

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
        loadChildren: () => import('./pages/info/info-routing')
    },
    {
        path: '**',
        redirectTo: '/not-found',
    }
]
