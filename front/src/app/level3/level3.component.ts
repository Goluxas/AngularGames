import { Component } from '@angular/core';
import { Level2Component } from '../level2/level2.component';

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

  public getCells(): number[] {
    return [0, 1, 2];
  }
}
