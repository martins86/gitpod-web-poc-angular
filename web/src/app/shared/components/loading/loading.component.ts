import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-loading',
  templateUrl: './loading.component.html',
  styleUrls: ['./loading.component.scss'],
})
export class LoadingComponent implements OnInit {
  constructor() {}

  loadingMode = false;

  ngOnInit(): void {}

  //TODO: teste
  loadingOn() {
    this.loadingMode = true;
  }

  //TODO: teste
  loadingOff() {
    this.loadingMode = false;
  }
}
