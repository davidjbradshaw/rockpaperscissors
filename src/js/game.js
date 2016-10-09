import { MOVES, NOWIN, RESET, DRAWN, P1WIN, P2WIN } from './consts';

export default class game {
	constructor(players) {
		this.players = players;
		this.result = null;
	}

	computer() {
		this.players.forEach( player => player.play() );
		this.judge();

		return this;
	}

	manual(move) {
		this.players[0].move = move;
		this.players[1].play();
		this.judge();

		return this;
	}

	reset() {
		this.players.forEach( player => player.score = player.move = 0 );
		this.result = RESET;
	}


	judge() {
		this.players[0].move === this.players[1].move ?
			this.result = DRAWN:
			this.score();
	}

	score() {
		const p1 = this.players[0];
		const p2 = this.players[1];

		this.result = NOWIN;
		this.didWin(p1, p2, P1WIN);
		this.didWin(p2, p1, P2WIN);
	}

	didWin(p1, p2, winner) {
		let shifted = p1.move - 1;

		if (-1 === shifted) shifted = MOVES.length - 1;

		if (shifted === p2.move) {
			p1.score++;
			this.result = winner;
		}
	}


	get summary() {
		let msg = ''

		switch (this.result) {
		case DRAWN:
			msg = 'Draw';
			break;
		case NOWIN:
			msg = 'No Winner';
			break;
		case P1WIN:
			msg = `${this.players[0].name} wins - ${this.players[0].moveName} beat ${this.players[1].moveName}`;
			break;
		case P2WIN:
			msg = `${this.players[1].name} wins - ${this.players[0].moveName} lost to ${this.players[1].moveName}`;
			break;
		case RESET:
			msg = 'Scores reset';
		}

		return msg;
	}
}
