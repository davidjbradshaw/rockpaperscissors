import { judge } from '../src/js/ref';
import Player from '../src/js/player';
import { MOVES } from '../src/js/consts';

describe('Judge game', () => {

	function testPlay(p1Move, p2Move, winner) {
		const players = [
			new Player('Test Player 1'),
			new Player('Test Player 2')
		]

		players[0].move = p1Move;
		players[1].move = p2Move;

		expect( judge(players) ).to.equal(winner);
	}

	it('to be a draw', () => {
		testPlay(0, 0, -1);
	});

	it(`${MOVES[1].name} to beat ${MOVES[0].name}`, () => {
		testPlay(1, 0, 0);
	});

	it(`${MOVES[2].name} to beat ${MOVES[1].name}`, () => {
		testPlay(2, 1, 0);
	});

	it(`${MOVES[0].name} to beat ${MOVES[1].name}`, () => {
		testPlay(0, 2, 0);
	});

	it(`Player 2 to win`, () => {
		testPlay(2, 0, 1);
	});
});
