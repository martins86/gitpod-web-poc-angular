import { Component, OnInit, EventEmitter, Output } from '@angular/core';

import { Router } from '@angular/router';

import { AuthService } from './../../../infrastructure/auth/auth.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  @Output()
  toggleSideBarForMe: EventEmitter<any> = new EventEmitter();

  constructor(private authService: AuthService, private router: Router) {}

  ngOnInit(): void {}

  //TODO: test
  toggleSideBar() {
    this.toggleSideBarForMe.emit();
  }

  //TODO: test
  logout() {
    this.authService.clearStorage();
    this.router.navigate(['/login']);
  }

}
