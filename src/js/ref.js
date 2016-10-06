let instance = null;

export default class Ref {

	constructor() {
		if(!instance) {
			instance = this;
		}

		this.lastResult = -1;

		return instance;
	}

	draw() {
		this.lastResult = -1;
	}

	score(players) {
		// Shift player 1 move one place to the right
		const player1ShiftedLastMove = 0 === players[0].lastMove ? 2 : players[0].lastMove - 1;

		// If p1 shifted === p1, then p1 wins, else p2 wins
		this.lastResult = player1ShiftedLastMove === players[1].lastMove ? 0 : 1;

		players[this.lastResult].score++;
	}

	judge(players) {
		if (players[0].lastMove === players[1].lastMove) {
			this.draw();
		} else {
			this.score(players);
		}

		return this.lastResult;
	} 
}