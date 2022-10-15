import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { BookAppComponent } from "./pages/book-app/book-app.component";
import { HomeComponent } from "./pages/home/home.component";
import { BookDetailsComponent } from './pages/book-details/book-details.component';
import { SignupComponent } from './pages/signup/signup.component';
import { SigninComponent } from './pages/signin/signin.component';
import { BookResolver } from './services/book-resolver/book.resolver';
import { AuthGuard } from './guards/auth.guard';
import { BookEditComponent } from './pages/book-edit/book-edit.component';

const routes: Routes = [
    {
        path: "explore",
        component: BookAppComponent,
        children: [
          {
            path: 'edit',
            component: BookEditComponent,
            canActivate: [AuthGuard]
          },
          {
            path: 'edit/:id',
            component: BookEditComponent,
            canActivate: [AuthGuard],
            resolve: {book: BookResolver}
          },
          {
            path: ':id',
            component: BookDetailsComponent,
            canActivate: [AuthGuard],
            resolve: {book: BookResolver}
          }
        ]
    },

    // { path: "about", component: AboutComponent },
    { path: 'signup', component: SignupComponent },
    { path: 'signin', component: SigninComponent },
    { path: "home", component: HomeComponent },
    { path: "", redirectTo: "/home", pathMatch: "full" },
    { path: "**", component: HomeComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {useHash: true})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
