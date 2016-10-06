import { moves } from './consts';

export default class Player {

	constructor(name) {
		this.name = name;
		this.score = 0;
	}
	
	play() {
		return Math.floor( Math.random() * moves.length );
	}

}

