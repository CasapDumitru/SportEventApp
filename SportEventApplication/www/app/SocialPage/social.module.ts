import { NgModule } from '@angular/core';
import { SocialComponent } from './social.component';
import { FriendsComponent } from './friends.component';
import { AllUserComponent } from './all-user.component';
import { DetailUserComponent } from './detail-user.component';
import { SocialRoutingModule } from './social.routing-module';
import { CommonModule} from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule }   from '@angular/forms';
import { InfiniteScrollModule } from 'angular2-infinite-scroll';


@NgModule({
  declarations: [SocialComponent,AllUserComponent,FriendsComponent,DetailUserComponent],
  imports: [CommonModule,RouterModule,FormsModule,SocialRoutingModule,InfiniteScrollModule]
})
export class SocialModule { }