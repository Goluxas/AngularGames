import { PlayerIntoNamePipe } from './player-into-name.pipe';

describe('PlayerIntoNamePipe', () => {
  const pipe = new PlayerIntoNamePipe();

  it('create an instance', () => {
    expect(pipe).toBeTruthy();
  });

  it('transforms 1 into X', () => {
    expect(pipe.transform(1)).toBe('X');
  });

  it('transforms 2 into O', () => {
    expect(pipe.transform(2)).toBe('O');
  });

  describe('Error cases', () => {
    it('throws on invalid player ID', () => {
      expect(() => pipe.transform(3)).toThrow();
    });
  });
});
