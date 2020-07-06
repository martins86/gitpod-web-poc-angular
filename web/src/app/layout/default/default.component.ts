import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-default',
  templateUrl: './default.component.html',
  styleUrls: ['./default.component.scss']
})
export class DefaultComponent implements OnInit {

  sideBarOpen = false;

  constructor() { }

  ngOnInit(): void {
  }

  //TODO: test
  sideBarToggle() {
    this.sideBarOpen = !this.sideBarOpen;
  }

  //TODO: test
  closeSideBar() {
    this.sideBarOpen = false;
  }

}
