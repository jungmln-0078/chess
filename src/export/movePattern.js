// white , black
// [x, y]
let pawnFirstMove = [[-2, 0],[-1, 0], [1, 0], [2, 0]];
let pawn = [[-1, 0], [1, 0]];
let pawnAttack = [[-1, 1], [-1, -1], [1, -1], [1, 1]];
let king = [[-1, -1], [-1, 0], [-1, 1], [0, -1], [0, 1], [1, -1], [1, 0], [1, 1]];
let knight = [[-1, 2], [1, 2], [2, 1], [2, -1], [1, -2], [-1, -2], [-2, 1], [-2, -1]];
export default { pawnFirstMove, pawn, pawnAttack, king, knight };