import { Component } from '@angular/core';

@Component({
  selector: 'app-level2',
  standalone: true,
  imports: [],
  templateUrl: './level2.component.html',
  styleUrl: './level2.component.scss',
})
export class Level2Component {
  public boardContent: number[][];
  private playerNames: string[];
  private currentPlayer: number;
  private currentWinner: number;

  private CLEAR_BOARD_STATE = [
    [0, 0, 0],
    [0, 0, 0],
    [0, 0, 0],
  ];

  constructor() {
    this.playerNames = ['', 'X', 'O'];
    this.boardContent = this.CLEAR_BOARD_STATE;
    this.currentPlayer = 1;
    this.currentWinner = 0;
  }

  public set(col: number, row: number): void {
    if (this.currentWinner !== 0 || this.boardContent[row][col] !== 0) return;

    this.boardContent[row][col] = this.currentPlayer;
    this.currentPlayer = this.currentPlayer === 1 ? 2 : 1;
  }

  public getPlayerName(col: number, row: number): string {
    return this.playerNames[this.boardContent[row][col]];
  }

  public getStyle(col: number, row: number): string {
    if (this.getPlayerName(col, row) === '') return '';

    return `occupied-${this.getPlayerName(col, row).toLowerCase()}`;
  }

  restart(): void {
    console.log('Clicked restart');
    this.boardContent = this.CLEAR_BOARD_STATE;
    this.currentWinner = 0;
    this.currentPlayer = 1;
  }
}
