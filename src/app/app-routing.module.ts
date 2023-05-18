import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from "./pages/home/home.component";
import { SingleCategoryComponent } from "./pages/single-category/single-category.component";
import { SinglePostComponent } from "./pages/single-post/single-post.component";
import { AboutMeComponent } from './pages/about-me/about-me.component';
import { PrintPostComponent } from './pages/print-post/print-post.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'category', component: SingleCategoryComponent },
  { path: 'post', component: SinglePostComponent },
  { path: 'print-post', component: PrintPostComponent },
  { path: 'about-me/:category', component: AboutMeComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {
    scrollPositionRestoration: 'top'
  })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
