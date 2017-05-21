/*import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot } from '@angular/router';
import { SportComponent } from './sport.component';
import { SportService } from './sport.service';

@Injectable()
export class SportResolveService implements Resolve<SportComponent> {

  constructor(private service: SportService) {}

  resolve(route: ActivatedRouteSnapshot) {
    console.log("REzolve now");
    return this.service.setInterest(15);
  }*

}*/ 