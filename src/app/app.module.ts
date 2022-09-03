import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

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
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
