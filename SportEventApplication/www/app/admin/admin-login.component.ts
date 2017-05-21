import { Component } from "@angular/core";
import { Router} from "@angular/router";
import { AdminService} from './admin.service';


@Component( {
    selector: 'admin-login',
    templateUrl:'app/admin/admin-login.component.html',
    providers: [AdminService]
})

export class AdminLoginComponent{

     constructor(private adminService: AdminService, private router: Router ){}    

    loginUserName : string;
    loginPassword : string;
    loginId: number;
    loginFail : boolean = false;

    login(username,password ) {
        console.log(event);
        console.log(username);
        console.log(password);

        this.adminService.login(username,password).then(
            log => {
                 console.log(log),
                 localStorage.setItem('admin_id', log.Id)
                 this.router.navigate(['adminHome']);
            }
        ).catch( error => {
            console.log(error.text());
            this.loginFail = true;
        })
    }
}