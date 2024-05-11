import { Routes } from '@angular/router';
import { Level1Component } from './level1/level1.component';
import { Level2Component } from './level2/level2.component';

export const routes: Routes = [
  { path: 'level1', component: Level1Component },
  { path: 'level2', component: Level2Component },

  { path: '', pathMatch: 'full', redirectTo: 'level1' },
];
