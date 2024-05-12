import { PlayerNameIntoClassPipe } from './player-name-into-class.pipe';

describe('PlayerNameIntoClassPipe', () => {
  it('create an instance', () => {
    const pipe = new PlayerNameIntoClassPipe();
    expect(pipe).toBeTruthy();
  });
});
