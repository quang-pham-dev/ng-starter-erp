import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
    {
        path: 'login',
        loadChildren: () => import('./pages/login/login.module').then((m) => m.LoginModule)
        // loadChildren: async () => (await import('@ore/auth/pages/login/login.module')).LoginModule
        // canActivate: [UnauthGuard]
    },
    {
        path: 'registration',
        loadChildren: () =>
            import('./pages/registration/registration.module').then((m) => m.RegistrationModule)
        // loadChildren: async () => (await import('@tcore/auth/pages/registration/registration.module')).RegistrationModule
        // canActivate: [UnauthGuard]
    },
    {
        path: 'email-confirm',
        loadChildren: () =>
            import('./pages/email-confirm/email-confirm.module').then((m) => m.EmailConfirmModule)
        // loadChildren: async () => (await import('@core/auth/pages/email-confirm/email-confirm.module')).EmailConfirmModule
        // canActivate: [AuthGuard]
    },
    {
        path: '**',
        pathMatch: 'full',
        redirectTo: 'login'
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class AuthRoutingModule {}
