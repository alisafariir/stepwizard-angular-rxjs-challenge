import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { Router } from '@angular/router';
import { Information } from 'src/app/interfaces/information.interface';
import { User } from 'src/app/interfaces/user.interface';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-step-four',
  templateUrl: './step-four.component.html',
  styleUrls: ['./step-four.component.scss']
})
export class StepFourComponent implements OnInit {
  _image: string = ''
  _information: Information = {}
  _user: User = {}

  constructor(private dataService: DataService, private router: Router) { }

  ngOnInit() {
    this.initData()
  }

  initData() {
    this.dataService.image$.subscribe(i => this._image = i);
    this.dataService.information$.subscribe(i => this._information = i)
    this.dataService.user$.subscribe(u => this._user = u)
  }

  _handleDone() {
    this.dataService.image$.next("")
    this.dataService.information$.next({})
    this.dataService.user$.next({})
    this.router.navigate(['step-one']);
  }
}
