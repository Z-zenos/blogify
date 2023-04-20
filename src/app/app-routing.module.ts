import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {HomeComponent} from "./pages/home/home.component";
import {SingleCategoryComponent} from "./pages/single-category/single-category.component";
import {SinglePostComponent} from "./pages/single-post/single-post.component";
import {TermsConditionsComponent} from "./pages/terms-conditions/terms-conditions.component";
import {AboutUsComponent} from "./pages/about-us/about-us.component";
import {ContactComponent} from "./pages/contact/contact.component";

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'category', component: SingleCategoryComponent },
  { path: 'post', component: SinglePostComponent },

  { path: 'terms-conditions', component: TermsConditionsComponent },
  { path: 'about', component: AboutUsComponent },
  { path: 'contact', component: ContactComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
