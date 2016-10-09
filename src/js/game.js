import { RESET, DRAW, P1WIN, P2WIN } from './consts';

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

	}

	get summary() {
		let msg = ''

		switch (this.result) {
		case DRAW:
			msg = 'Draw';
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