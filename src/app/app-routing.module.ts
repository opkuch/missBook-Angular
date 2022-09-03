import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { BookAppComponent } from "./pages/book-app/book-app.component";
import { HomeComponent } from "./pages/home/home.component";
import { BookDetailsComponent } from './pages/book-details/book-details.component';
import { SignupComponent } from './pages/signup/signup.component';

const routes: Routes = [
    {
        path: "explore",
        component: BookAppComponent,
        children: [
          {
            path: ':id',
            component: BookDetailsComponent
          }
        ]
    },

    // { path: "about", component: AboutComponent },
    {
      path: 'signup', component: SignupComponent
    },
    { path: "home", component: HomeComponent },
    { path: "", redirectTo: "/home", pathMatch: "full" },
    //   { path: "**", component: PageNotFoundComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {useHash: true})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
