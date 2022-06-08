import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

import { Router } from '@angular/router';
import { Information } from 'src/app/interfaces/information.interface';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-step-two',
  templateUrl: './step-two.component.html',
  styleUrls: ['./step-two.component.scss']
})
export class StepTwoComponent implements OnInit {

  _minDate: Date = new Date();
  _maxDate: Date = new Date();
  _formData: Information = {};
  _statusItems: any[] = [];

  _notValid: boolean = false;
  _submitted = false;

  _informationForm!: FormGroup;

  get _informationFormControl() {
    return this._informationForm.controls;
  }

  constructor(private _router: Router, private _dataService: DataService, private _formBuilder: FormBuilder) {

  }

  createFormGroup() {
    this._informationForm = this._formBuilder.group({
      amount: [null, Validators.required],
      date: ['', Validators.required],
      status: ['', Validators.required],
      fund: ['', Validators.required],
    })
  }
  initData() {
    this._statusItems = this._dataService.statusItems;
  }

  setOldValue() {
    setTimeout(() => {
      this._dataService.information$.subscribe(d => {
        if (d.amount) this._informationForm.controls['amount'].setValue(d.amount)
        if (d.date) this._informationForm.controls['date'].setValue(d.date)
        if (d.status) this._informationForm.controls['status'].setValue(d.status)
        if (d.fund) this._informationForm.controls['fund'].setValue(d.fund)
      })
    }, 50);
  }

  ngOnInit(): void {
    this._setCalendarMinMax()
    this.createFormGroup()
    this.initData()
  }

  ngAfterViewInit(): void {
    this.setOldValue()
  }

  _setCalendarMinMax() {
    this._minDate = new Date();
    this._maxDate = new Date();
    this._maxDate.setDate(this._maxDate.getDate() + 5);
  }
  _handlePrevStep() {
    this._router.navigate(['step-one'])
  }
  _handleNextStep() {
    this._submitted = true;
    const { amount, date, status, fund } = this._informationForm.value;
    if (this._informationForm.valid) {
      this._dataService.information$.next({ amount, date, status, fund })
      this._router.navigate(['step-three'])
    }

  }
  
  validateField(field: string) {
    if ((this._informationFormControl[field].touched || this._submitted) && this._informationFormControl[field].errors?.required) {
      return true
    }
    return false;
  }
}
