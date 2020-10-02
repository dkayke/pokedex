import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CardDetailComponent } from './components/views/card-detail/card-detail.component';
import { CardListComponent } from './components/views/card-list/card-list.component';

const routes: Routes = [
  {
    path: 'cards', children: [
      { path: '', component: CardListComponent },
      { path: ':id', component: CardDetailComponent }
    ]
  },
  { path: '**', redirectTo: 'cards' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
