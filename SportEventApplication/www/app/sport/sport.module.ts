import { NgModule } from '@angular/core';
import { SportComponent } from './sport.component';
import { CommonModule} from '@angular/common';
import { RouterModule } from '@angular/router';
import { SearchPipe } from './search-pipe';
import { Pipe } from '@angular/core';
import { SportService } from './sport.service';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [SportComponent,SearchPipe],
  imports: [CommonModule,RouterModule,FormsModule],
  providers:[SportService]
})

export class SportModule { }