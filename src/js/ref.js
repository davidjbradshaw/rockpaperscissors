const DRAW = -1

export default class Ref {
	static score(players) {
		// Shift player 1 move one place to the right
		const player1Shiftedmove = 0 === players[0].move ? 2 : players[0].move - 1;

		// If p1 shifted === p2, then p1 wins, else p2 wins
		const result = player1Shiftedmove === players[1].move ? 0 : 1;

		players[result].score++;

		return result;
	}

	static judge(players) {
		return players[0].move === players[1].move ?
			DRAW:
			this.score(players);
	} 
}