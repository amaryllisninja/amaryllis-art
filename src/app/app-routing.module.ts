import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { IllustrationComponent } from './illustration/illustration.component';
import { ComicComponent } from './comic/comic.component';
import { CharacterDesignComponent } from './character-design/character-design.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { ScheduleComponent } from './schedule/schedule.component';
import { ContactComponent } from './contact/contact.component';
import { CommissionComponent } from './commission/commission.component';


const routes: Routes = [
  { path: 'illustration', component: IllustrationComponent },
  { path: 'comic', component: ComicComponent },
  { path: 'character-design', component: CharacterDesignComponent },
  { path: 'character-design', component: CharacterDesignComponent },
  { path: 'schedule', component: ScheduleComponent },
  { path: 'commission', component: CommissionComponent },
  { path: 'contact', component: ContactComponent },
  { path: '',   redirectTo: '/illustration', pathMatch: 'full' },
  { path: '**', component: PageNotFoundComponent },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes),
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
