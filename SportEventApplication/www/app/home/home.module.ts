import { NgModule } from '@angular/core';
import { HomeComponent } from './home.component';
import { CommonModule} from '@angular/common';
import { RouterModule } from '@angular/router';
import { LandingModule } from './../landing/landing.module';
import { SportModule } from './../sport/sport.module';
import { StartPageModule } from './../StartPage/startpage.module';
import { AccountModule } from './../account/account.module';
import { SportEventModule } from './../sport-event/sport-event.module';
import { HomeRoutingModule } from './home-routing.module';
import { SocialModule } from './../socialpage/social.module';


@NgModule({
  declarations: [HomeComponent],
  imports: [CommonModule,RouterModule,HomeRoutingModule,SportModule,StartPageModule,AccountModule,
            SportEventModule,LandingModule,SocialModule]
})

export class HomeModule { }



