import { Component } from '@angular/core';
import { BoardService } from './board.service';
import { PlayerIntoNamePipe } from '../level5/player-into-name.pipe';
import { PlayerNameIntoClassPipe } from '../level5/player-name-into-class.pipe';

@Component({
  selector: 'app-tictactoe',
  standalone: true,
  templateUrl: './tictactoe.component.html',
  styleUrl: './tictactoe.component.scss',
  imports: [PlayerIntoNamePipe, PlayerNameIntoClassPipe],
})
export class TictactoeComponent {
  constructor(public board: BoardService) {
    this.board.restart();
  }
}
