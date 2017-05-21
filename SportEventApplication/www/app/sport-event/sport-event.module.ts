import { NgModule } from '@angular/core';
import { SportEventComponent } from './sport-event.component';
import { CommonModule} from '@angular/common';
import { RouterModule } from '@angular/router';
import { AgmCoreModule } from 'angular2-google-maps/core/core-module';
import { SportEventRoutingModule } from './sport-event-routing.module';
import { CreateSportEventComponent } from './../sport-event/sport-event.create.component'
import { CreatedSportEventComponent } from './../sport-event/sport-event.created.component'
import { GoingSportEventComponent } from './../sport-event/sport-event.going.component'
import { SportEventAllComponent } from './../sport-event/sport-event.all.component'
import { SportEventDetailComponent } from './../sport-event/sport-event-detail.component'
import { NearSportEventComponent } from './../sport-event/sport-event.near.component'
import { InfiniteScrollModule } from 'angular2-infinite-scroll';
import { FormsModule } from '@angular/forms';
import { Ng2DatetimePickerModule } from 'ng2-datetime-picker';
import { ImageUploadModule } from 'ng2-imageupload';

@NgModule({
  declarations: [SportEventComponent,CreateSportEventComponent,CreatedSportEventComponent,GoingSportEventComponent,
                 SportEventAllComponent,SportEventDetailComponent,NearSportEventComponent],
  imports: [Ng2DatetimePickerModule,FormsModule,InfiniteScrollModule,SportEventRoutingModule,CommonModule,RouterModule,AgmCoreModule.forRoot({
      apiKey: 'AIzaSyCOFjbmcn99Ri2wFYU-YVCWERFTk3mVBmA'
    }),ImageUploadModule]
})

export class SportEventModule { }