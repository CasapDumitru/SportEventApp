import { NgModule } from '@angular/core';
import { AdminSportEventComponent } from './admin-sportevents.component';
import { CommonModule} from '@angular/common';
import { RouterModule } from '@angular/router';
import { SportEventService } from './../sport-event/sport-event.service';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [AdminSportEventComponent],
  imports: [CommonModule,RouterModule,FormsModule],
  providers:[SportEventService]
})

export class AdminSportEventModule { }