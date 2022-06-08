import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { MenuItem } from 'primeng/api';
import { BehaviorSubject } from 'rxjs';
import { DataService } from './services/data.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class AppComponent implements OnInit {

  stepItems: MenuItem[] = [];
  activeIndex: number = 0;

  constructor() {}
  
  ngOnInit(): void {
    this.initSteps();
  }

  initSteps() {
    this.stepItems = [
      {
        label: 'Step one',
        routerLink: 'step-one',
        command: () => {
          this.activeIndex = 0;
        },
      },
      {
        label: 'Step Two',
        routerLink: 'step-two',
        command: () => {
          this.activeIndex = 1;
        },
      },
      {
        label: 'Step three',
        routerLink: 'step-three',
        command: () => {
          this.activeIndex = 2;
        },
      },
      {
        label: 'Step four',
        routerLink: 'step-four',
        command: () => {
          this.activeIndex = 3;
        },
      }
    ];
  }
}
