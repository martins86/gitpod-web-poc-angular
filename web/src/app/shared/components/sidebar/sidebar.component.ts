import { Component, OnInit, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit {

  @Output()
  closeSideBarForMe: EventEmitter<any> = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
  }

  //TODO: test
  closeSideBar() {
    this.closeSideBarForMe.emit();
  }
}
