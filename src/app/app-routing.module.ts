import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GameMatchComponent } from './game-match/views/game-match.component';

const routes: Routes = [
  {path: 'game-match', component: GameMatchComponent},
  { path: '**', redirectTo: 'game-match', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
