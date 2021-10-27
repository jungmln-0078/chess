let checkPiece = (piece) => {
    if (piece == '♜' || piece == '♖') {
        return 'rook';
    } else if (piece == '♞' || piece == '♘') {
        return 'knight';
    } else if (piece == '♝' || piece == '♗') {
        return 'bishop';
    } else if (piece == '♛' || piece == '♕') {
        return 'queen';
    } else if (piece == '♚' || piece == '♔') {
        return 'king';
    } else if (piece == '♟︎' || piece == '♙') {
        return 'pawn';
    } else {
        return 'null';
    }
}

export default checkPiece;