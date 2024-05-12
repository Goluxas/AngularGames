import { Component } from '@angular/core';
import { BoardService } from '../level4/board.service';
import { PlayerIntoNamePipe } from './player-into-name.pipe';
import { PlayerNameIntoClassPipe } from './player-name-into-class.pipe';

@Component({
  selector: 'app-level5',
  standalone: true,
  templateUrl: './level5.component.html',
  styleUrl: './level5.component.scss',
  imports: [PlayerIntoNamePipe, PlayerNameIntoClassPipe],
})
export class Level5Component {
  constructor(public board: BoardService) {}
}
