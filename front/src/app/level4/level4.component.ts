import { Component, OnInit } from '@angular/core';
import { Cell, Level3Component } from '../level3/level3.component';
import { BoardService } from './board.service';

@Component({
  selector: 'app-level4',
  standalone: true,
  imports: [],
  templateUrl: './level4.component.html',
  styleUrl: './level4.component.scss',
})
export class Level4Component implements OnInit {
  public playerNames: string[] = ['', 'X', 'O'];
  private boardContent: number[][] = [];

  constructor(private board: BoardService) {}

  ngOnInit(): void {
    this.boardContent = this.board.boardContent;
  }

  public getPlayerName(col: number, row: number): string {
    return this.playerNames[this.boardContent[row][col]];
  }

  public getStyle(col: number, row: number): string {
    if (this.getPlayerName(col, row) === '') return '';

    return `occupied-${this.getPlayerName(col, row).toLowerCase()}`;
  }

  public getCells(): Cell[][] {
    let cells: Cell[][] = [];

    for (let row = 0; row < 3; row++) {
      cells.push([]);
      for (let col = 0; col < 3; col++) {
        let cell: Cell = {
          class: this.getStyle(col, row),
          playerName: this.getPlayerName(col, row),
        };

        cells[row][col] = cell;
      }
    }

    return cells;
  }

  restart(): void {
    this.board.restart();
    this.boardContent = this.board.boardContent;
  }

  currentWinner(): number {
    return this.board.winnerIdx;
  }

  set(col: number, row: number) {
    this.board.set(col, row);
  }
}
