import {NgModule}            from '@angular/core';
import {RouterModule,Routes}        from '@angular/router';
import { CreateSportEventComponent } from './../sport-event/sport-event.create.component'
import { CreatedSportEventComponent } from './../sport-event/sport-event.created.component'
import { GoingSportEventComponent } from './../sport-event/sport-event.going.component'
import { SportEventAllComponent } from './../sport-event/sport-event.all.component'
import { SportEventComponent } from './../sport-event/sport-event.component'
import { SportEventDetailComponent } from './../sport-event/sport-event-detail.component'
import { NearSportEventComponent } from './../sport-event/sport-event.near.component'


const sportEventsRoutes: Routes = [
  {
    path: '',
    component: SportEventComponent,
    children: [
      {
        path: '',
        children: [
          { path: 'createsportevent', component: CreateSportEventComponent},
          { path: 'createdsportevents', component: CreatedSportEventComponent },
          { path: 'goingsportevents', component: GoingSportEventComponent},
          { path: 'allsportevents', component: SportEventAllComponent},
          { path: 'nearsportevents', component: NearSportEventComponent},
          { path: 'detail/:id', component: SportEventDetailComponent},
        ]
      }
    ]
  }
];



@NgModule({
    imports: [RouterModule.forChild(sportEventsRoutes)],
    exports: [RouterModule] 
})
export class SportEventRoutingModule {

}