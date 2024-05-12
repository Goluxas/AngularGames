import { PlayerNameIntoClassPipe } from './player-name-into-class.pipe';

describe('PlayerNameIntoClassPipe', () => {
  const pipe = new PlayerNameIntoClassPipe();

  it('create an instance', () => {
    expect(pipe).toBeTruthy();
  });

  it('transforms input to occupied-{input}, lowercase', () => {
    expect(pipe.transform('X')).toBe('occupied-x');
    expect(pipe.transform('O')).toBe('occupied-o');
    expect(pipe.transform('')).toBe('occupied-');
    expect(pipe.transform('ZeBrA')).toBe('occupied-zebra');
  });
});
