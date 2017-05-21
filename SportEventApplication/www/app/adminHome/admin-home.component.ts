import { Component } from '@angular/core';
import { Http } from '@angular/http';
import { Router } from '@angular/router';


@Component({
  selector: 'adminhome',
  templateUrl: "app/adminHome/admin-home.component.html",
})

export class AdminHomeComponent {

  constructor(public router: Router) {}

  logout() {
    console.log("LOGOUT");
    localStorage.removeItem('admin_id');
  }

  ngOnInit(): void {
      if(localStorage.getItem('admin_id')==null)
        this.router.navigate(['admin']);
        console.log("HOME!!!");
    }
  
}