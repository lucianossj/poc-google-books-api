import { Component } from '@angular/core';
import { LocalStorageEnum } from './enum/local-storage.enum';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'poc-sgoogle-books-api';

  constructor() {}

  public isUserLogged(): boolean {
    return !!localStorage.getItem(LocalStorageEnum.USER);
  }

}
