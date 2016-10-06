import { MOVES } from './consts';

export default class Player {

	constructor(name) {
		this.name = name;
		this.score = 0;
		this.move = -1;
	}
	
	play() {
		return this.move = Math.floor( Math.random() * MOVES.length );
	}

	get moveName() {
		return MOVES[this.move].name;
	}

}
