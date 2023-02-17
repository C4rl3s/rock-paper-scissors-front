import { OnInit } from '@angular/core';
import { Component } from '@angular/core';
import { Move, MoveImg } from '../models/Move';
import { Result } from '../models/Result';
import { GameMatchService } from '../services/game-match.service';

@Component({
  selector: 'app-game-match',
  templateUrl: './game-match.component.html',
  styleUrls: ['./game-match.component.scss']
})
export class GameMatchComponent implements OnInit{

  playerMoveImg: string;
  ComputerMoveImg: string;
  winnerMessage: string = '';
  winnerMessageColour: string;
  wins:number = 0;
  losses:number = 0;
  draws:number = 0;

  constructor(
    private gameMatchService: GameMatchService
  ) { }

  ngOnInit(): void {
    this.loadScoreBoard();
  }

  playRock(){
    this.play(Move.Rock);
  }

  playPaper(){
    this.play(Move.Paper);
  }

  playScissors(){
    this.play(Move.Scissors);
  }

  play(move: Move): void{
    this.gameMatchService.playMatch(move).subscribe({
      next: (response) => {
        this.setMovesDataToShow(response);
        this.setResultDataToShow(response.result);
        this.loadScoreBoard();
      }
    });
  }

  setMovesDataToShow(response: any) {
    this.playerMoveImg = this.getMoveImg(response.playerMove);
    this.ComputerMoveImg = this.getMoveImg(response.computerMove);
  }

  getMoveImg(move: Move): string {
    if (move === Move.Rock) return MoveImg.Rock;
    if (move === Move.Paper) return MoveImg.Paper;

    return MoveImg.Scissors;
  }

  setResultDataToShow(result: string) {
    if (result === Result.Player) {
      this.winnerMessage = 'You win!';
      this.winnerMessageColour = 'green';
    }
    if (result === Result.Computer) {
      this.winnerMessage = 'You lose...';
      this.winnerMessageColour = 'red';
    }
    if (result === Result.Draw) {
      this.winnerMessage = 'Draw!';
      this.winnerMessageColour = 'yellow';
    }
  }

  getColor() {
    return this.winnerMessageColour;
  }

  loadScoreBoard() {
    this.gameMatchService.getMatchSummary().subscribe({
      next: (response) => {
        this.wins = response.wins;
        this.losses = response.losses;
        this.draws = response.draws;
      }
    });
  }
}
