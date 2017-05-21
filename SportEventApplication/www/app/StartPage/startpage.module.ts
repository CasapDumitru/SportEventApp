import { NgModule } from '@angular/core';
import { StartPageComponent } from './startpage.component';
import { AgmCoreModule } from 'angular2-google-maps/core/core-module';
import { CommonModule} from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [StartPageComponent],
  imports: [FormsModule,CommonModule,RouterModule,AgmCoreModule.forRoot({
      apiKey: 'AIzaSyCOFjbmcn99Ri2wFYU-YVCWERFTk3mVBmA'
    })]
})

export class StartPageModule { }