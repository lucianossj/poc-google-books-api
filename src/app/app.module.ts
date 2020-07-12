import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { AngularFireModule } from '@angular/fire';

import { NgxPaginationModule } from 'ngx-pagination';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SearchCardModule } from './search-card/search-card.module';
import { FoundBooksModule } from './found-books/found-books.module';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { NavbarComponent } from './navbar/navbar.component';
import { FavoritesModule } from './favorites/favorites.module';

const firebaseConfig = {
  apiKey: "AIzaSyDpVlGqUcMk7P6IzCiiDJSMMn9xDPAtY7g",
  authDomain: "studied-source-282521.firebaseapp.com",
  databaseURL: "https://studied-source-282521.firebaseio.com",
  projectId: "studied-source-282521",
  storageBucket: "studied-source-282521.appspot.com",
  messagingSenderId: "393217229425",
  appId: "1:393217229425:web:1645e9aa783f43cb1191d0"
};

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LoginComponent,
    NavbarComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    SearchCardModule,
    FoundBooksModule,
    FavoritesModule,
    AngularFireModule.initializeApp(firebaseConfig),
    NgxPaginationModule
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
