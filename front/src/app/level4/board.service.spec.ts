import { TestBed } from '@angular/core/testing';

import { BoardService } from './board.service';

describe('BoardService', () => {
  let service: BoardService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BoardService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('can set pieces on the board', () => {
    service.set(0, 0);
    expect(service.boardContent[0][0]).toBe(1);

    service.set(1, 0);
    expect(service.boardContent[0][1]).toBe(2);
  });

  it('ignores multiple sets on the same cell', () => {
    service.set(0, 0);
    expect(service.boardContent[0][0]).toBe(1);

    service.set(0, 0);
    expect(service.boardContent[0][0]).toBe(1);
  });

  it('identifies winning column', () => {
    // Build this board
    // X O .
    // X O .
    // X . .
    service.set(0, 0); // X
    service.set(1, 0); // "discard" O
    service.set(0, 1);
    service.set(1, 1);
    service.set(0, 2);

    expect(service.winnerIdx).toBe(1);
  });

  it('identifies winning row', () => {
    // Build this board
    // X X X
    // O . .
    // O . .
    service.set(0, 0); // X
    service.set(0, 1); // "discard" O
    service.set(1, 0);
    service.set(0, 2);
    service.set(2, 0);

    expect(service.winnerIdx).toBe(1);
  });

  it('identifies winning diagonal', () => {
    // Build this board
    // X . .
    // O X .
    // O . X
    service.set(0, 0); // X
    service.set(0, 1); // "discard" O
    service.set(1, 1);
    service.set(0, 2);
    service.set(2, 2);

    expect(service.winnerIdx).toBe(1);
  });

  it('clears the board on restart', () => {
    service.set(0, 0);

    service.restart();

    // Filter row arrays to only include non-zero cells
    // Then filter the board to any rows that have more than 0 non-zero cells
    // NOTE: Could this be done with any()? (Does any exist in typescript?)
    expect(
      service.boardContent.filter(
        (row) => row.filter((cell) => cell !== 0).length > 0
      ).length
    ).toBe(0);
  });
});
