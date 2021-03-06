import { Component, OnInit, HostListener } from '@angular/core';
import { AuthService } from '../guards/auth.service';
import { UserModel } from '../guards/models/user.model';
import { LocalStorageEnum } from '../enum/local-storage.enum';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  public navbarOpen = false;
  public clicked = false;
  public element: any;

  public user: UserModel;

  constructor(public auth: AuthService) { }

  ngOnInit(): void {
    this.getUserInfo();
  }

  public toggleNavbar(): void {
    this.navbarOpen = !this.navbarOpen;
  }

  public getUserInfo(): void {
    this.user = JSON.parse(localStorage.getItem(LocalStorageEnum.USER));
  }

}