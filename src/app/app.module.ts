import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AngularFireModule } from '@angular/fire/compat';
import { AngularFirestoreModule } from '@angular/fire/compat/firestore';
import { AngularFireAuthModule } from '@angular/fire/compat/auth';
import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToastrModule } from 'ngx-toastr';
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
import { LoaderComponent } from './cmps/loader/loader.component';
import { BookEditComponent } from './pages/book-edit/book-edit.component';
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
    LoaderComponent,
    BookEditComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
    AngularFirestoreModule,
    AngularFireAuthModule,
    BrowserAnimationsModule,
    ToastrModule.forRoot({ preventDuplicates: true })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
