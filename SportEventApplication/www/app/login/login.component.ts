import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Http } from '@angular/http';
import 'rxjs/Rx';
import { Headers, RequestOptions } from '@angular/http';



@Component({
  selector: 'login',
  templateUrl: "app/login/login.component.html"
})
export class LoginComponent {
  constructor(public router: Router, public http: Http) {
  }
  
  login(event, username, password) {
    event.preventDefault();
    console.log("Login!!!!!")
    console.log(username);
    console.log(password);
    this.http.get('http://localhost:61957/api/account/login/'+ username + '/' +password )
                   .map(res => res.json()).toPromise().then(
                     ac => {
                       console.log(ac),
                        localStorage.setItem('id_token', ac.Id)
                        this.router.navigate(['home']);
                     }
                   ).catch(error => console.log(error.text()));
    
    
    
    /*let body = JSON.stringify({ username, password });
    this.http.post('http://localhost:3001/sessions/create', body, { headers: contentHeaders })
      .subscribe(
        response => {
          localStorage.setItem('id_token', response.json().id_token);
          this.router.navigate(['home']);
        },
        error => {
          alert(error.text());
          console.log(error.text());
        }
      );*/
  }

  signup(event) {
    event.preventDefault();
    this.router.navigate(['signup']);
  }
}