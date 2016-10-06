import { MOVES } from '../src/js/consts';
import Player from '../src/js/player';


describe('Player object', () => {

	it('Player makes a move', () => {
		const player = new Player('Test Player');
		const move = player.play();
		expect(move > -1 && move < MOVES.length).to.equal(true);
	});

	it('Starting score to be zero', () => {
		const player = new Player('Test Player');
		expect(player.score).to.equal(0);
	});

	it('Starting last move to be unset', () => {
		const player = new Player('Test Player');
		expect(player.lastMove).to.equal(-1);
	});

	for (let MOVE = 0 ; MOVE !== MOVES.length ; MOVE++) {
		it('LastMoveName = ' + MOVES[MOVE].name, () => {
			const player = new Player('Test Player');
			player.lastMove = MOVE
			expect(player.lastMoveName).to.equal(MOVES[MOVE].name);
		});
	}

});
