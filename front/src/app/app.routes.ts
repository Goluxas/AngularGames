import { Routes } from '@angular/router';
import { Level1Component } from './level1/level1.component';
import { Level2Component } from './level2/level2.component';
import { Level3Component } from './level3/level3.component';
import { Level4Component } from './level4/level4.component';
import { Level5Component } from './level5/level5.component';
import { TictactoeComponent } from './tictactoe/tictactoe.component';

export const routes: Routes = [
  { path: 'level1', component: Level1Component },
  { path: 'level2', component: Level2Component },
  { path: 'level3', component: Level3Component },
  { path: 'level4', component: Level4Component },
  { path: 'level5', component: Level5Component },
  { path: 'tictactoe', component: TictactoeComponent },

  { path: '', pathMatch: 'full', redirectTo: 'tictactoe' },
];
