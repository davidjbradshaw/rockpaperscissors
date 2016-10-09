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

	it('Starting last move to be rock', () => {
		const player = new Player('Test Player');
		expect(player.move).to.equal(0);
	});

	for (let MOVE = 0 ; MOVE !== MOVES.length ; MOVE++) {
		it('moveName = ' + MOVES[MOVE].name, () => {
			const player = new Player('Test Player');
			player.move = MOVE;
			expect(player.moveName).to.equal(MOVES[MOVE].name);
		});
		
		it('moveImage = ' + MOVES[MOVE].name, () => {
			Player.count = 0; // Reset class instance counter
			const player = new Player('Test Player');
			player.move = MOVE;
			expect(player.moveImage).to.equal(MOVES[MOVE].img[0]);
		});
	}

});
