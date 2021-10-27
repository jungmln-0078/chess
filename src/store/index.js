import { createStore } from 'vuex'
import handlePiece from '../export/handlePiece';
export default createStore({
  state: {
    board: [
      [{ text:'♜', moveable: false }, { text:'♞', moveable: false }, { text:'♝', moveable: false }, { text:'♛', moveable: false }, { text:'♚', moveable: false }, { text:'♝', moveable: false }, { text:'♞', moveable: false }, { text:'♜', moveable: false }],
      [{ text:'♟︎', moveable: false }, { text:'♟︎', moveable: false }, { text:'♟︎', moveable: false }, { text:'♟︎', moveable: false }, { text:'♟︎', moveable: false }, { text:'♟︎', moveable: false }, { text:'♟︎', moveable: false }, { text:'♟︎', moveable: false }],
      [{ text:'_', moveable: false }, { text:'_', moveable: false }, { text:'_', moveable: false }, { text:'_', moveable: false }, { text:'_', moveable: false }, { text:'_', moveable: false }, { text:'_', moveable: false }, { text:'_', moveable: false }],
      [{ text:'_', moveable: false }, { text:'_', moveable: false }, { text:'_', moveable: false }, { text:'_', moveable: false }, { text:'_', moveable: false }, { text:'_', moveable: false }, { text:'_', moveable: false }, { text:'_', moveable: false }],
      [{ text:'_', moveable: false }, { text:'_', moveable: false }, { text:'_', moveable: false }, { text:'_', moveable: false }, { text:'_', moveable: false }, { text:'_', moveable: false }, { text:'_', moveable: false }, { text:'_', moveable: false }],
      [{ text:'_', moveable: false }, { text:'_', moveable: false }, { text:'_', moveable: false }, { text:'_', moveable: false }, { text:'_', moveable: false }, { text:'_', moveable: false }, { text:'_', moveable: false }, { text:'_', moveable: false }],
      [{ text:'♙', moveable: false }, { text:'♙', moveable: false }, { text:'♙', moveable: false }, { text:'♙', moveable: false }, { text:'♙', moveable: false }, { text:'♙', moveable: false }, { text:'♙', moveable: false }, { text:'♙', moveable: false }],
      [{ text:'♖', moveable: false }, { text:'♘', moveable: false }, { text:'♗', moveable: false }, { text:'♕', moveable: false }, { text:'♔', moveable: false }, { text:'♗', moveable: false }, { text:'♘', moveable: false }, { text:'♖', moveable: false }]
    ],
    turn: 'white',
    piece: '',
    bRookMoved: false,
    bKingMoved: false,
    wRookMoved: false,
    wKingMoved: false,
    isGameEnded: false
  },
  mutations: {
    resetMoveable(state) {
      for (let i = 0; i < state.board.length; ++i) {
        for (let j = 0; j < state.board[i].length; ++j) {
          state.board[i][j].moveable = false;
        }
      }
    },
    movePiece(state, payload) {
      let pieceVal = state.piece.split(' ');
      if (pieceVal[0] == state.turn && state.board[payload.x][payload.y].moveable) {
        state.board[Number(pieceVal[2])][Number(pieceVal[3])].text = '_';
        state.board[payload.x][payload.y].text = pieceVal[4];
        state.piece = '';
        switch (pieceVal[1]) {
          case 'king':
            state.turn == 'white' ? state.wKingMoved = true : state.bKingMoved = true;
            break;
          case 'rook':
            state.turn == 'white' ? state.wRookMoved = true : state.bRookMoved = true;
            break;
          case 'pawn':
            handlePiece.promotion(state, payload);
            break;
        }
        state.turn = state.turn == 'white' ? 'black' : 'white';
        for (let i = 0; i < state.board.length; ++i) {
          for (let j = 0; j < state.board[i].length; ++j) {
            state.board[i][j].moveable = false;
          }
        }
      }
    },
    showMoveable(state, payload) {
      state.piece = `${payload.color} ${payload.piece} ${payload.x} ${payload.y} ${payload.pieceChar}`;
      switch (payload.piece) {
        case 'pawn':
          handlePiece.checkPawn(state, payload);
          break;
        case 'king':
          handlePiece.checkKing(state, payload);
          break;
        case 'knight':
          handlePiece.checkKnight(state, payload);
          break;
        case 'rook':
          handlePiece.checkRook(state, payload);
          break;
        case 'bishop':
          handlePiece.checkBishop(state, payload);
          break;
        case 'queen':
          handlePiece.checkQueen(state, payload);
          break;
      }
    }
  },
  actions: {
  },
  modules: {
  }
})
