import { MOVES } from './consts';

export default class Player {

	constructor(name) {
		this.name = name;
		this.score = 0;
		this.lastMove = -1;
	}
	
	play() {
		return this.lastMove = Math.floor( Math.random() * MOVES.length );
	}

	get lastMoveName() {
		return MOVES[this.lastMove].name;
	}

}

