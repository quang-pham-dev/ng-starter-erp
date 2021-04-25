import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
    {
        path: 'home',
        loadChildren: () => import('./pages/home/home.module').then((m) => m.HomeModule)
        // loadChildren: async () => (await import('@features/home/pages/home/home.module')).HomeModule
        // canActivate: [UnauthGuard]
    },
    {
        path: 'dashboard',
        loadChildren: () =>
            import('./pages/dashboard/dashboard.module').then((m) => m.DashboardModule)
        // loadChildren: async () => (await import('@features/home/pages/dashboard/dashboard.module')).DashboardModule
        // canActivate: [UnauthGuard]
    },
    {
        path: '**',
        pathMatch: 'full',
        redirectTo: 'dashboard'
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class HomeRoutingModule {}
