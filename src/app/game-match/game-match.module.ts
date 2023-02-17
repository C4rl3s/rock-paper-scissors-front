import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GameMatchComponent } from './views/game-match.component';
import { HttpClientModule } from '@angular/common/http';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';


@NgModule({
  declarations: [GameMatchComponent],
  imports: [
    CommonModule,
    HttpClientModule,
    MatButtonModule,
    MatCardModule
  ]
})
export class GameMatchModule { }
