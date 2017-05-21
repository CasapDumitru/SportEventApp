import {NgModule}            from '@angular/core';
import {RouterModule,Routes}        from '@angular/router';
import { SportComponent } from './../sport/sport.component'
import { StartPageComponent } from './../StartPage/startpage.component'
import { AccountComponent } from './../account/account.component'
import { SportEventComponent } from './../sport-event/sport-event.component'
import { HomeComponent }    from './home.component';
import { LandingComponent } from './../landing/landing.component';
import { AllUserComponent }    from './../socialpage/all-user.component';


const homeRoutes: Routes = [
  {
    path: '',
    component: HomeComponent,
    children: [
      {
        path: '',
        children: [
          { path: 'sport', component: SportComponent},
          { path: 'account', component: AccountComponent},
          { path: 'landing', component: LandingComponent},
          { path: 'social', 
            loadChildren: 'app/socialpage/social.module#SocialModule'
          },
          {
             path: 'sportevent',
             loadChildren: 'app/sport-event/sport-event.module#SportEventModule'
          },
        ]
      }
    ]
  }
];

@NgModule({
    imports: [RouterModule.forChild(homeRoutes)],
    exports: [RouterModule] 
})
export class HomeRoutingModule {

}
