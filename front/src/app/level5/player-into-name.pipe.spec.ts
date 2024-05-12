import { PlayerIntoNamePipe } from './player-into-name.pipe';

describe('PlayerIntoNamePipe', () => {
  it('create an instance', () => {
    const pipe = new PlayerIntoNamePipe();
    expect(pipe).toBeTruthy();
  });
});
