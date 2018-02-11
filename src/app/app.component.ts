import { Component, OnInit, OnDestroy } from '@angular/core';
import { AppService } from './app.service';
import { Subscription } from 'rxjs/Subscription';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit, OnDestroy {
  title = 'mini toolKit';
  isOpen: Boolean;
  sideNavSub: Subscription;

  constructor(private appSvc: AppService) {

  }

  ngOnInit() {
    this.sideNavSub = this.appSvc.sideNavToggle.subscribe(((isOpen) => {
      this.isOpen = isOpen;
    }).bind(this));
  }

  ngOnDestroy() {
    this.sideNavSub.unsubscribe();
  }
}
