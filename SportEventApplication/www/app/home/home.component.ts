import { Component } from '@angular/core';
import { Http } from '@angular/http';
import { Router } from '@angular/router';
//import { AuthHttp } from 'angular2-jwt';


@Component({
  selector: 'home',
  templateUrl: "app/home/home.component.html",
  styleUrls :['app/home/home.style.css'],
})

export class HomeComponent {
  jwt: string;
  decodedJwt: string;
  response: string;
  api: string;

  constructor(public router: Router, public http: Http, /*public authHttp: AuthHttp*/) {
    this.jwt = localStorage.getItem('id_token');
    //this.decodedJwt = this.jwt && window.jwt_decode(this.jwt);
  }

  logout() {
    console.log("LOGOUT");
    localStorage.removeItem('id_token');
  }

  ngOnInit(): void {
      if(localStorage.getItem('id_token')==null)
        this.router.navigate(['login']);
        console.log("HOME!!!");
        console.log(this.jwt);

    }
  
}