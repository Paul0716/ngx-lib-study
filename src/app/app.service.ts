import { Injectable } from '@angular/core';
import { Subject } from 'rxjs/Subject';

@Injectable()
export class AppService {
  sideNavToggle: Subject<Boolean> = new Subject<Boolean>();

  constructor() {

  }

  toggleSideNav(isOpen: Boolean) {
    this.sideNavToggle.next(isOpen);
  }

}
