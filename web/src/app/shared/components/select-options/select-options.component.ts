import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-select-options',
  templateUrl: './select-options.component.html',
  styleUrls: ['./select-options.component.scss']
})
export class SelectOptionsComponent implements OnInit {

  selected = 'none';

  constructor() { }

  ngOnInit(): void {
  }

}
