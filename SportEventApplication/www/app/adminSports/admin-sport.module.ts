import { NgModule } from '@angular/core';
import { AdminSportComponent } from './admin-sport.component';
import { CommonModule} from '@angular/common';
import { RouterModule } from '@angular/router';
import { SportService } from './../sport/sport.service';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [AdminSportComponent],
  imports: [CommonModule,RouterModule,FormsModule],
  providers:[SportService]
})

export class AdminSportModule { }