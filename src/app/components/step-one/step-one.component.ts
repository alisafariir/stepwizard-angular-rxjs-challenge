import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Message } from 'primeng/api';
import { ConvertorService } from 'src/app/services/convertor.service';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-step-one',
  templateUrl: './step-one.component.html',
  styleUrls: ['./step-one.component.scss']
})
export class StepOneComponent {

  _image: string = ''
  _messages: Message[] = [];

  constructor(private _router: Router, private _dataService: DataService, private _convertorService: ConvertorService) {
    this._dataService.image$.subscribe(i => {
      if (i) this._image = i;
    })
  }

  _handleOnSelectImage(e: any) {
    this._messages = [];
    this._convertorService.toBase64(e.files[0]).then((base64: string) => {
      this._image = base64;
      this._dataService.image$.next(this._image)
    })
  }

  _handleNextStep() {
    this._messages = [];

    if (this._image) {
      this._router.navigate(['step-two'])

    } else {
      this._messages.push({ severity: 'error', summary: 'Please choose an image' })
    }

  }
  _handleRemoveImage() {
    this._image = '';
    this._dataService.image$.next('')
  }
}
