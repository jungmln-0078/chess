let checkColor = (piece) => {
    if (piece == '_') {
        return 'null';
    } 
    let black = ['♜','♞','♝','♛','♚','♟︎'];
    let white = ['♖','♘','♗','♕','♔','♙'];
    if (black.includes(piece)) {
        return 'black';
    } else if (white.includes(piece)) {
        return 'white';
    }
}

export default checkColor;