import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AngularFireModule } from '@angular/fire/compat';
import { AngularFirestoreModule } from '@angular/fire/compat/firestore';
import { AngularFireAuthModule } from '@angular/fire/compat/auth';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app-root/app.component';
import { BookNavbarComponent } from './cmps/book-navbar/book-navbar.component';
import { BookHeaderComponent } from './cmps/book-header/book-header.component';
import { BookLogoComponent } from './cmps/book-logo/book-logo.component';
import { HomeComponent } from './pages/home/home.component';
import { BookListComponent } from './cmps/book-list/book-list.component';
import { BookPreviewComponent } from './cmps/book-preview/book-preview.component';
import { BookAppComponent } from './pages/book-app/book-app.component';
import { HeroComponent } from './cmps/hero/hero.component';
import { DiscoverComponent } from './cmps/discover/discover.component';
import { ExploreBtnComponent } from './cmps/explore-btn/explore-btn.component';
import { UserNavbarComponent } from './cmps/user-navbar/user-navbar.component';
import { FilterComponent } from './cmps/filter/filter.component';
import { BookDetailsComponent } from './pages/book-details/book-details.component';
import { SignupComponent } from './pages/signup/signup.component';
import { environment } from '../environments/environment';
import { SigninComponent } from './pages/signin/signin.component';

const firebaseConfig = {
  apiKey: "AIzaSyApUkhOG6XKFLhBOz5PAu8e2DblfiYhIEg",
  authDomain: "missbooks-13d4f.firebaseapp.com",
  projectId: "missbooks-13d4f",
  storageBucket: "missbooks-13d4f.appspot.com",
  messagingSenderId: "632164729990",
  appId: "1:632164729990:web:4bb5c778ffbb054dc1fd07",
  measurementId: "G-NSVEWWXF1G"
};
@NgModule({
  declarations: [
    AppComponent,
    BookNavbarComponent,
    BookHeaderComponent,
    BookLogoComponent,
    HomeComponent,
    BookListComponent,
    BookPreviewComponent,
    BookAppComponent,
    HeroComponent,
    DiscoverComponent,
    ExploreBtnComponent,
    UserNavbarComponent,
    FilterComponent,
    BookDetailsComponent,
    SignupComponent,
    SigninComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
    AngularFirestoreModule,
    AngularFireAuthModule, 
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
