import { Route } from '@angular/router';

export const rootRoutes: Route[] = [
    {
        path: '',
        redirectTo: 'auth',
        pathMatch: 'full'
    },
    {
        path: '',
        children: [
            {
                path: 'home',
                loadChildren: () => import('@features/home/home.module').then((m) => m.HomeModule)
            },
            {
                path: 'auth',
                loadChildren: () => import('@core/auth/auth.module').then((m) => m.AuthModule)
            }
        ]
    },
    {
        path: '**',
        loadChildren: () => import('@core/not-found/not-found.module').then((m) => m.NotFoundModule)
    }
];
