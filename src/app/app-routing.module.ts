import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CardDetailComponent } from './components/views/card-detail/card-detail.component';
import { CardListComponent } from './components/views/card-list/card-list.component';

const routes: Routes = [
  {
    path: '',
    component: CardListComponent
  },
  {
    path: 'card/detail',
    component: CardDetailComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
