import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'playerClass',
  standalone: true,
})
export class PlayerNameIntoClassPipe implements PipeTransform {
  transform(player: string, ...args: unknown[]): string {
    return `occupied-${player.toLowerCase()}`;
  }
}
