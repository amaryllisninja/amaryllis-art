import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { IllustrationComponent } from './illustration/illustration.component';
import { ComicComponent } from './comic/comic.component';
import { MasonryGalleryModule } from 'ngx-masonry-gallery';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { CharacterDesignComponent } from './character-design/character-design.component';
import { ScheduleComponent } from './schedule/schedule.component';
import { ContactComponent } from './contact/contact.component';
import { CommissionComponent } from './commission/commission.component';

@NgModule({
  declarations: [
    AppComponent,
    IllustrationComponent,
    ComicComponent,
    PageNotFoundComponent,
    CharacterDesignComponent,
    ScheduleComponent,
    ContactComponent,
    CommissionComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MasonryGalleryModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
