import { NgModule } from '@angular/core';
import { LoginComponent } from './login.component';
import { CommonModule} from '@angular/common';
import { RouterModule } from '@angular/router';

@NgModule({
    declarations: [LoginComponent],
    imports: [CommonModule,RouterModule]
})

export class LoginModule { }