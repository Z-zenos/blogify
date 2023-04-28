import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './layouts/header/header.component';
import { CategoryBoxComponent } from './layouts/category-box/category-box.component';
import { FooterComponent } from './layouts/footer/footer.component';
import { HomeComponent } from './pages/home/home.component';
import { SingleCategoryComponent } from './pages/single-category/single-category.component';
import { SinglePostComponent } from './pages/single-post/single-post.component';
import { SubscriptionComponent } from './forms/subscription/subscription.component';
import { NgOptimizedImage } from "@angular/common";
import { AngularFireModule } from "@angular/fire/compat";
import { environment } from "../environments/environment";
import { AngularFirestoreModule } from "@angular/fire/compat/firestore";
import { PostCardComponent } from './components/post-card/post-card.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatIconModule } from "@angular/material/icon";
import { TagComponent } from './components/tag/tag.component';
import { SimpleCardComponent } from './components/simple-card/simple-card.component';
import { MemoryComponent } from './games/memory/memory.component';
import { BadgeComponent } from './components/badge/badge.component';
import { BannerComponent } from './components/banner/banner.component';
import { ScrollColorDirective } from './directives/scroll-color.directive';
import { PaginationComponent } from './components/pagination/pagination.component';
import { PostContentComponent } from './components/post-content/post-content.component';
import { CommentsModule } from './modules/comments.module';
import { HttpClientModule } from '@angular/common/http';
import { CKEditorModule } from '@ckeditor/ckeditor5-angular';
import { FormsModule } from '@angular/forms';
import { SharedComponentsModule } from './modules/shared-components.module';
import { AboutMeComponent } from './pages/about-me/about-me.component';
import { IconComponent } from './components/icon/icon.component';
import { SpecialCardComponent } from './components/special-card/special-card.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    CategoryBoxComponent,
    FooterComponent,
    HomeComponent,
    SingleCategoryComponent,
    SinglePostComponent,
    SubscriptionComponent,
    PostCardComponent,
    TagComponent,
    SimpleCardComponent,
    MemoryComponent,
    BadgeComponent,
    BannerComponent,
    ScrollColorDirective,
    PaginationComponent,
    PostContentComponent,
    AboutMeComponent,
    IconComponent,
    SpecialCardComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgOptimizedImage,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFirestoreModule,
    BrowserAnimationsModule,
    MatIconModule,
    CommentsModule,
    HttpClientModule,
    CKEditorModule,
    FormsModule,
    SharedComponentsModule
  ],
  providers: [],
  bootstrap: [AppComponent],
  exports: []
})
export class AppModule { }
