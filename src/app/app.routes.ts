import { Routes } from '@angular/router';

export const routes: Routes = [
    {
        path: '',
        loadComponent: () => import('./shared/layouts/layouts.component'),
        children: [{
            path: 'home',
            loadComponent: () => import('./pages/home/home.component'),
        },
        {
            path: 'order',
            loadComponent: () => import('./pages/order/order.component') 
        },
        {
            path: 'details/:idorden',
            loadComponent: () => import('./pages/details/details.component'),
        },


        {
            path: '',
            redirectTo: 'home',
            pathMatch: 'full',
        }
        ]
    }
];
