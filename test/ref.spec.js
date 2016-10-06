import Ref from '../src/js/ref';
import Player from '../src/js/player';
import { MOVES } from '../src/js/consts';

describe('Judge game', () => {

	const ref = new Ref;
	
	function setupPLayers() {
		return [
				new Player('Test Player 1'),
				new Player('Test Player 2')
			]
	}

	it('to be a draw', () => {
		const players = setupPLayers();

		players[0].lastMove = 0;
		players[1].lastMove = 0;

		expect( ref.judge(players) ).to.equal(-1);
	});

	it(`${MOVES[1].name} to beat ${MOVES[0].name}`, () => {
		const players = setupPLayers();

		players[0].lastMove = 1;
		players[1].lastMove = 0;

		expect( ref.judge(players) ).to.equal(0);
	});

	it(`${MOVES[2].name} to beat ${MOVES[1].name}`, () => {
		const players = setupPLayers();

		players[0].lastMove = 2;
		players[1].lastMove = 1;

		expect( ref.judge(players) ).to.equal(0);
	});

	it(`${MOVES[0].name} to beat ${MOVES[1].name}`, () => {
		const players = setupPLayers();

		players[0].lastMove = 0;
		players[1].lastMove = 2;

		expect( ref.judge(players) ).to.equal(0);
	});

	it(`Player 2 to win`, () => {
		const players = setupPLayers();

		players[0].lastMove = 2;
		players[1].lastMove = 0;

		expect( ref.judge(players) ).to.equal(1);
	});
});
