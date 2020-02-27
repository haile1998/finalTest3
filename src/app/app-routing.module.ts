import { HomeComponent } from './home/home.component';
import { ReadedBookComponent } from './readed-book/readed-book.component';
import { ReadingBookComponent } from './reading-book/reading-book.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule, ActivatedRoute } from '@angular/router';


const routes: Routes = [
  {
    path: '',
    component: HomeComponent
  },
  {
    path: 'reading',
    component: ReadingBookComponent
  },
  {
    path: 'readed',
    component: ReadedBookComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
