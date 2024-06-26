import { Component } from '@angular/core';

@Component({
  selector: 'app-level2',
  standalone: true,
  imports: [],
  templateUrl: './level2.component.html',
  styleUrl: './level2.component.scss',
})
export class Level2Component {
  // ! operator suppresses typescript error about not initializing in constructor
  // because we initialize in restart(), which is called in the constructor
  public boardContent!: number[][];
  private currentPlayer!: number;
  public currentWinner!: number;

  public playerNames: string[];

  constructor() {
    this.playerNames = ['', 'X', 'O'];
    this.restart();
  }

  public set(col: number, row: number): void {
    if (this.currentWinner !== 0 || this.boardContent[row][col] !== 0) return;

    this.boardContent[row][col] = this.currentPlayer;
    this.currentPlayer = this.currentPlayer === 1 ? 2 : 1;

    this.currentWinner = this.getWinner();
  }

  public getPlayerName(col: number, row: number): string {
    return this.playerNames[this.boardContent[row][col]];
  }

  public getStyle(col: number, row: number): string {
    if (this.getPlayerName(col, row) === '') return '';

    return `occupied-${this.getPlayerName(col, row).toLowerCase()}`;
  }

  restart(): void {
    this.boardContent = [
      [0, 0, 0],
      [0, 0, 0],
      [0, 0, 0],
    ];
    this.currentWinner = 0;
    this.currentPlayer = 1;
  }

  /**
   * Gets the player (1 or 2) that has won the game
   * @returns Player (1 or 2) that has won, or 0 if there is no winner (yet)
   */
  private getWinner(): number {
    let winner = true;

    // check verticals
    // NOTE: this is overcomplicated. just use ifs
    for (let col = 0; col < 3; col++) {
      let top_player = this.boardContent[0][col];
      winner = true;

      if (top_player === 0) continue;

      for (let row = 1; row < 3; row++) {
        if (this.boardContent[row][col] !== top_player) {
          winner = false;
          break;
        }
      }

      if (winner) return top_player;
    }

    // check horizontals
    for (let row = 0; row < 3; row++) {
      let left_player = this.boardContent[row][0];
      winner = true;

      if (left_player === 0) continue;

      for (let col = 1; col < 3; col++) {
        if (this.boardContent[row][col] !== left_player) {
          winner = false;
          break;
        }
      }

      if (winner) return left_player;
    }

    // check diagonals
    if (
      this.boardContent[0][0] !== 0 &&
      this.boardContent[0][0] == this.boardContent[1][1] &&
      this.boardContent[1][1] == this.boardContent[2][2]
    ) {
      return this.boardContent[0][0];
    }
    if (
      this.boardContent[0][2] !== 0 &&
      this.boardContent[0][2] == this.boardContent[1][1] &&
      this.boardContent[1][1] == this.boardContent[2][0]
    ) {
      return this.boardContent[0][2];
    }

    // no early return = no winner
    return 0;
  }
}
