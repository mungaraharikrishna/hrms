import { Routes } from '@angular/router';

export const routes: Routes = [
    {
        path: '',
        redirectTo: 'dashboard',
        pathMatch: 'full'
    },
    {
        path: 'dashboard',
        loadComponent: () => import('./views/dashboard/dashboard').then(m => m.Dashboard),
        data: {
            title: 'Dashboard',
            breadcrumb: 'Dashboard'
        }
    }
];
