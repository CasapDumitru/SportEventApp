import {NgModule}            from '@angular/core';
import {RouterModule,Routes}        from '@angular/router';
import { AdminHomeComponent }    from './admin-home.component';
import { AdminSportComponent } from './../adminsports/admin-sport.component';
import { AdminSportEventComponent } from './../adminsportevents/admin-sportevents.component';

const homeRoutes: Routes = [
  {
    path: '',
    component: AdminHomeComponent,
    children: [
      {
        path: '',
        children: [
          { path: 'adminSport', component: AdminSportComponent},
          { path: 'adminSportEvent', component: AdminSportEventComponent}
        ]
      }
    ]
  }
];


@NgModule({
    imports: [RouterModule.forChild(homeRoutes)],
    exports: [RouterModule] 
})
export class AdminHomeRoutingModule {

}