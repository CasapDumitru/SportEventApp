import { NgModule } from '@angular/core';
import { AgmCoreModule } from 'angular2-google-maps/core/core-module';


@NgModule({

  imports: [AgmCoreModule.forRoot({
      apiKey: 'AIzaSyCOFjbmcn99Ri2wFYU-YVCWERFTk3mVBmA'
    })]
})

export class GoogleMapModule { }