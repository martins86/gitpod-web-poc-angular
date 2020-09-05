import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-data-picker',
  templateUrl: './data-picker.component.html',
  styleUrls: ['./data-picker.component.scss'],
})
export class DataPickerComponent implements OnInit {

  date = new FormControl(new Date());

  constructor() { }

  ngOnInit(): void {
  }

}
