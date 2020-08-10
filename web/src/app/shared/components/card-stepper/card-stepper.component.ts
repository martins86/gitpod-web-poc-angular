import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-card-stepper',
  templateUrl: './card-stepper.component.html',
  styleUrls: ['./card-stepper.component.scss']
})
export class CardStepperComponent implements OnInit {
  isLinear = true;
  assetsTickerFormGroup: FormGroup;
  assetsTypeFormGroup: FormGroup;

  constructor(private _formBuilder: FormBuilder) {}

  ngOnInit() {
    this.assetsTickerFormGroup = this._formBuilder.group({
      assetsTickerValidate: ['', Validators.required]
    });
    this.assetsTypeFormGroup = this._formBuilder.group({
      assetsTypeValidate: ['', Validators.required]
    });
  }

}
