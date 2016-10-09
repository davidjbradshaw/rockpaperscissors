import { MOVES } from './consts';

export default class Player {

	constructor(name) {
		this.name = name;
		this.score = 0;
		this.move = 0;
		this.idx = this.constructor.count++;
	}
	
	play() {
		return this.move = Math.floor( Math.random() * MOVES.length );
	}

	get moveName() {
		return MOVES[this.move].name;
	}

	get moveImage() {
		return MOVES[this.move].img[this.idx];
	}
}

Player.count = 0;
