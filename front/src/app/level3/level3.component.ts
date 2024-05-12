import { Component } from '@angular/core';
import { Level2Component } from '../level2/level2.component';

export interface Cell {
  class: string;
  playerName: string;
}

@Component({
  selector: 'app-level3',
  standalone: true,
  imports: [],
  templateUrl: './level3.component.html',
  styleUrl: './level3.component.scss',
})
export class Level3Component extends Level2Component {
  public cellIndices = [0, 1, 2];

  constructor() {
    super();
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
}
