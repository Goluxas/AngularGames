import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'playerName',
  standalone: true,
})
export class PlayerIntoNamePipe implements PipeTransform {
  private playerNames = ['', 'X', 'O'];

  transform(player: number, ...args: unknown[]): string {
    if (player < 0 || player > 2) {
      throw new Error('Invalid player');
    }

    return this.playerNames[player];
  }
}
