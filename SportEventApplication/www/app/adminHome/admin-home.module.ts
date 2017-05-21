import { NgModule } from '@angular/core';
import { AdminHomeComponent } from './admin-home.component';
import { CommonModule} from '@angular/common';
import { RouterModule } from '@angular/router';
import { AdminSportModule } from './../adminsports/admin-sport.module';
import { AdminSportEventModule } from './../adminsportevents/admin-sportevents.module';
import { AdminHomeRoutingModule } from './admin-home-routing.module';


@NgModule({
  declarations: [AdminHomeComponent],
  imports: [CommonModule,RouterModule,AdminSportEventModule,AdminSportModule,AdminHomeRoutingModule]
})

export class AdminHomeModule { }