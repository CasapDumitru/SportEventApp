import { NgModule } from '@angular/core';
import { LandingRoutingModule } from './landing-routing.module';
import { LandingComponent } from './landing.component';
import { AgmCoreModule } from 'angular2-google-maps/core/core-module';


@NgModule({
  imports: [LandingRoutingModule],
  declarations: [LandingComponent]
})

export class LandingModule { }
