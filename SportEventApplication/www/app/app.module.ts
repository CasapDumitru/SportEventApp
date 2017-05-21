import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { HttpModule } from '@angular/http';
import { AppRoutingModule } from './app-routing.module';
import { RouterModule } from '@angular/router';
import { NotFoundModule } from './not-found/not-found.module';
import { StartPageModule } from './StartPage/startpage.module';
import { LoginModule } from './login/login.module';
import { AdminModule } from './admin/admin.module';
import { AdminHomeModule } from './adminHome/admin-home.module';

@NgModule({
    imports: [BrowserModule,HttpModule, AppRoutingModule,NotFoundModule,LoginModule,StartPageModule,AdminModule,AdminHomeModule],
    declarations: [AppComponent],
    bootstrap: [AppComponent]
})


export class AppModule {
}