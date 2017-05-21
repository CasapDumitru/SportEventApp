import { NgModule } from '@angular/core';
import { AccountComponent } from './account.component';
import { CommonModule} from '@angular/common';
import { RouterModule } from '@angular/router';
import { AgmCoreModule } from 'angular2-google-maps/core/core-module';
import { FormsModule }   from '@angular/forms';


@NgModule({
  declarations: [AccountComponent],
  imports: [CommonModule,RouterModule,AgmCoreModule,FormsModule]
})
export class AccountModule { }