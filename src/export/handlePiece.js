import patterns from './movePattern';
import checkColor from './checkColor';
function promotion(state, payload) {
	if (payload.x == 0) {
		state.board[payload.x][payload.y].text = '♕';
	} else if (payload.x == 7) {
		state.board[payload.x][payload.y].text = '♛';
	}
}
function checkPawnAttack(state, payload) {
	let pawn = patterns.pawnAttack;
	let i = 0 + (payload.color == 'white' ? 0 : 2);
	for (let idx = i; idx < i + 2; ++idx) {
		let idxX = payload.x + pawn[idx][0];
		let idxY = payload.y + pawn[idx][1];
		let chkX = (idxX <= 7) && (idxX >= 0);
		let chkY = (idxY <= 7) && (idxY >= 0);
		if (chkX && chkY) {
			if (state.board[idxX][idxY].text != '_' && !(checkColor(state.board[idxX][idxY].text) == state.turn)) {
				state.board[idxX][idxY].moveable = true;
			}
		}
	}
}
function checkPawn(state, payload) {
	checkPawnAttack(state, payload);
	if ((payload.color == 'white' && payload.x == 6) || (payload.color == 'black' && payload.x == 1)) {
		let pawn = patterns.pawnFirstMove;
		let i = 0 + (payload.color == 'white' ? 0 : 2);
		for (let idx = i; idx < pawn.length; ++idx) {
			let idxX = payload.x + pawn[idx][0];
			let idxY = payload.y + pawn[idx][1]; 
			let chkX = (idxX <= 7) && (idxX >= 0);
			let chkY = (idxY <= 7) && (idxY >= 0);
			if (chkX && chkY) {
				if (state.board[idxX][idxY].text != '_') {
					continue;
				}
				state.board[idxX][idxY].moveable = true;
			}
		}
	} else {
		let pawn = patterns.pawn;
		let i = 0 + (payload.color == 'white' ? 0 : 1);
		for (let idx = i; idx < i + 1; ++idx) {
			let idxX = payload.x + pawn[idx][0];
			let idxY = payload.y + pawn[idx][1];
			let chkX = (idxX <= 7) && (idxX >= 0);
			let chkY = (idxY <= 7) && (idxY >= 0);
			if (chkX && chkY) {
				if (state.board[idxX][idxY].text != '_') {
					continue;
				}
				state.board[idxX][idxY].moveable = true;
			}
		}
	}
}
function checkKing(state, payload) {
	let king = patterns.king;
	for (let i = 0; i < king.length; ++i) {
		let idxX = payload.x + king[i][0];
		let idxY = payload.y + king[i][1];
		let chkX = (idxX <= 7) && (idxX >= 0);
		let chkY = (idxY <= 7) && (idxY >= 0);
		if (chkX && chkY) {
			if (checkColor(state.board[idxX][idxY].text) == state.turn) {
				continue;
			}
			state.board[idxX][idxY].moveable = true;
		}
	}
}
function checkKnight(state, payload) {
	let knight = patterns.knight;
	for (let i = 0; i < knight.length; ++i) {
		let idxX = payload.x + knight[i][0];
		let idxY = payload.y + knight[i][1];
		let chkX = (idxX <= 7) && (idxX >= 0);
		let chkY = (idxY <= 7) && (idxY >= 0);
		if (chkX && chkY) {
			if (checkColor(state.board[idxX][idxY].text) == state.turn) {
				continue;
			}
			state.board[idxX][idxY].moveable = true;
		}
	}
}
function checkRook(state, payload) {
	for (let i = payload.x + 1; i < 8; ++i) {
		let chkX = (i <= 7) && (i >= 0);
		let chkY = (payload.y <= 7) && (payload.y >= 0);
		if (chkX && chkY) {
			if (state.board[i][payload.y].text != '_' && checkColor(state.board[i][payload.y].text) == state.turn) {
				break;
			}
			state.board[i][payload.y].moveable = true;
			if (state.board[i][payload.y].text != '_') {
				break;
			}
		}
	}
	for (let i = payload.x - 1; i > -1; --i) {
		let chkX = (i <= 7) && (i >= 0);
		let chkY = (payload.y <= 7) && (payload.y >= 0);
		if (chkX && chkY) {
			if (state.board[i][payload.y].text != '_' && checkColor(state.board[i][payload.y].text) == state.turn) {
				break;
			}
			state.board[i][payload.y].moveable = true;
			if (state.board[i][payload.y].text != '_') {
				break;
			}
		}
	}
	for (let i = payload.y + 1; i < 8; ++i) {
		let chkX = (payload.x <= 7) && (payload.x >= 0);
		let chkY = (i <= 7) && (i >= 0);
		if (chkX && chkY) {
			if (state.board[payload.x][i].text != '_' && checkColor(state.board[payload.x][i].text) == state.turn) {
				break;
			}
			state.board[payload.x][i].moveable = true;
			if (state.board[payload.x][i].text != '_') {
				break;
			}
		}
	}
	for (let i = payload.y - 1; i > -1; --i) {
		let chkX = (payload.x <= 7) && (payload.x >= 0);
		let chkY = (i <= 7) && (i >= 0);
		if (chkX && chkY) {
			if (state.board[payload.x][i].text != '_' && checkColor(state.board[payload.x][i].text) == state.turn) {
				break;
			}
			state.board[payload.x][i].moveable = true;
			if (state.board[payload.x][i].text != '_') {
				break;
			}
		}
	}
}
function checkBishop(state, payload) {
	for (let i = 1; i < 8 - payload.y; ++i) {
		let idxX = payload.x + i * -1;
		let idxY = payload.y + i;
		let chkX = (idxX <= 7) && (idxX >= 0);
		let chkY = (idxY <= 7) && (idxY >= 0);
		if (chkX && chkY) {
			if (state.board[idxX][idxY].text != '_' && checkColor(state.board[idxX][idxY].text) == state.turn) {
				break;
			}
			state.board[idxX][idxY].moveable = true;
			if (state.board[idxX][idxY].text != '_') {
				break;
			}
		}
	}
	for (let i = 1; i < 8 - payload.y; ++i) {
		let idxX = payload.x + i;
		let idxY = payload.y + i;
		let chkX = (idxX <= 7) && (idxX >= 0);
		let chkY = (idxY <= 7) && (idxY >= 0);
		if (chkX && chkY) {
			if (state.board[idxX][idxY].text != '_' && checkColor(state.board[idxX][idxY].text) == state.turn) {
				break;
			}
			state.board[idxX][idxY].moveable = true;
			if (state.board[idxX][idxY].text != '_') {
				break;
			}
		}
	}
	for (let i = 1; i < payload.y + 1; ++i) {
		let idxX = payload.x + i * -1;
		let idxY = payload.y + i * -1;
		let chkX = (idxX <= 7) && (idxX >= 0);
		let chkY = (idxY <= 7) && (idxY >= 0);
		if (chkX && chkY) {
			if (state.board[idxX][idxY].text != '_' && checkColor(state.board[idxX][idxY].text) == state.turn) {
				break;
			}
			state.board[idxX][idxY].moveable = true;
			if (state.board[idxX][idxY].text != '_') {
				break;
			}
		}
	}
	for (let i = 1; i < payload.y + 1; ++i) {
		let idxX = payload.x + i;
		let idxY = payload.y + i * -1;
		let chkX = (idxX <= 7) && (idxX >= 0);
		let chkY = (idxY <= 7) && (idxY >= 0);
		if (chkX && chkY) {
			if (state.board[idxX][idxY].text != '_' && checkColor(state.board[idxX][idxY].text) == state.turn) {
				break;
			}
			state.board[idxX][idxY].moveable = true;
			if (state.board[idxX][idxY].text != '_') {
				break;
			}
		}
	}
}
function checkQueen(state, payload) {
	checkRook(state, payload);
	checkBishop(state, payload);
}
export default { checkPawn, promotion, checkKing, checkKnight, checkRook, checkBishop, checkQueen };
