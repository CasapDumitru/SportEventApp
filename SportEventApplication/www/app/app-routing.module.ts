import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { NotFoundComponent } from './not-found/not-found.component'
import { StartPageComponent } from './StartPage/startpage.component'
import { LoginComponent } from './login/login.component';
import { AdminLoginComponent } from './admin/admin-login.component';

export const routes: Routes = [
    
    {   path: '404', component: NotFoundComponent },
    {   path: 'login', component: StartPageComponent},
    {   path: 'admin',component: AdminLoginComponent},
    {   
        path: 'adminHome',
        loadChildren : 'app/adminHome/admin-home.module#AdminHomeModule'
    },
    {   path: '',   redirectTo: 'login', pathMatch: 'full' },
    {
        path: 'home',
        loadChildren: 'app/home/home.module#HomeModule'
    },
    {   path: '**', redirectTo: '/404' }
];


@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule {
    
}