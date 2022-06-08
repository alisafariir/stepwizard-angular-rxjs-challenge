import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { Router } from '@angular/router';
import { User } from 'src/app/interfaces/user.interface';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-step-three',
  templateUrl: './step-three.component.html',
  styleUrls: ['./step-three.component.scss']
})
export class StepThreeComponent implements OnInit {

  _userItems: User[] = []

  constructor(private _router: Router, private _dataService: DataService) { }

  ngOnInit() {
    this._userItems = this._dataService.userItems;
  }

  _handleSelectUser(user: User) {
    this._dataService.user$.next(user);
    this._router.navigate(['step-four']);
    
  }

  _handlePrevStep(){
    this._router.navigate(['step-two']);

  }
}
