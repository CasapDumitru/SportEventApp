import {NgModule}            from '@angular/core';
import {RouterModule,Routes}        from '@angular/router';
import { SocialComponent } from './../socialpage/social.component'
import { AllUserComponent } from './../socialpage/all-user.component'
import { FriendsComponent } from './../socialpage/friends.component'
import { DetailUserComponent } from './../socialpage/detail-user.component'

const socialRoutes: Routes = [
  {
    path: '',
    component: SocialComponent,
    children: [
      {
        path: '',
        children: [
          { path: 'all-users', component: AllUserComponent},
          { path: 'friends', component: FriendsComponent },
          { path: 'detailFriend/:id', component: DetailUserComponent},
        ]
      }
    ]
  }
];


@NgModule({
    imports: [RouterModule.forChild(socialRoutes)],
    exports: [RouterModule] 
})
export class SocialRoutingModule {

}