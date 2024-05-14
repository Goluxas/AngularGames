import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';

const API_BASE = 'http://localhost:5000/tictactoe';

interface Move {
  player: Number;
  position: Number;
}

interface TicTacToeState {
  _id: string;
  board: [number];
  winner: number;
  currentPlayer: number;
  moveHistory: [Move];
  createdAt: Date;
  updatedAt: Date;
}

@Injectable({
  providedIn: 'root',
})
export class BoardService {
  private currentGame?: TicTacToeState;

  constructor(private http: HttpClient) {}

  public get boardContent(): number[][] | undefined {
    if (!this.currentGame?.board) {
      return undefined;
    }

    let boardContent: number[][] = [];
    for (let i = 0; i < this.currentGame.board.length; i++) {
      let row = Math.floor(i / 3);
      let col = i % 3;
      if (i % 3 === 0) {
        boardContent.push([]);
      }
      boardContent[row][col] = this.currentGame.board[i];
    }

    return boardContent;
  }

  public get winnerIdx() {
    return this.currentGame?.winner || 0;
  }

  private handleError(error: HttpErrorResponse) {
    if (error.status === 400) {
      return throwError(
        () => new Error('Rules violation. Non-blocking error.')
      );
    } else {
      return throwError(() => {
        console.error(error);
        return new Error('Server Error');
      });
    }
  }

  public set(col: number, row: number): void {
    this.http
      .post<TicTacToeState>(API_BASE + `/${this.currentGame?._id}`, {
        player: this.currentGame?.currentPlayer,
        row: row,
        col: col,
      })
      .pipe(catchError(this.handleError))
      .subscribe((gamestate) => {
        this.currentGame = gamestate;
      });
  }

  public restart(): void {
    this.http.get<TicTacToeState>(API_BASE + '/new').subscribe((gamestate) => {
      this.currentGame = gamestate;
    });
  }
}
