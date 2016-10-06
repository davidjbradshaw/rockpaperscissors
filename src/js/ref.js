let instance = null;

export default class Ref {

	constructor() {
		if(!instance) {
			instance = this;
		}

		this.result = -1;

		return instance;
	}

	draw() {
		return this.result = -1;
	}

	score(players) {
		// Shift player 1 move one place to the right
		const player1Shiftedmove = 0 === players[0].move ? 2 : players[0].move - 1;

		// If p1 shifted === p2, then p1 wins, else p2 wins
		const result = player1Shiftedmove === players[1].move ? 0 : 1;

		players[result].score++;

		return this.result = result;
	}

	judge(players) {
		return players[0].move === players[1].move ?
			this.draw() :
			this.score(players);
	} 
}