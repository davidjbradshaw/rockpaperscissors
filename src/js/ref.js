import { MOVES, DRAW, P1WIN, P2WIN } from './consts';

function score(players) {
	// Shift player 1 move one place to the right
	const player1ShiftedMove = 0 === players[0].move ? MOVES.length - 1 : players[0].move - 1;

	// If p1 shifted === p2, then p1 wins, else p2 wins
	const result = player1ShiftedMove === players[1].move ? P1WIN : P2WIN;

	players[result].score++;

	return result;
}

export function judge(players) {
	return players[0].move === players[1].move ?
		DRAW:
		score(players);
} 
