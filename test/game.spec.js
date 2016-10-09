import { MOVES, RESET, DRAWN, P1WIN, P2WIN, NOWIN } from '../src/js/consts';
import Game from '../src/js/game';
import sinon from 'sinon/pkg/sinon';

describe('Game object', () => {

	function mockPlayers() {
		return [{
				name: 'Test 1',
				score: 1,
				move: 1,
				play: sinon.spy(),
				moveName: 'Spock'
			}, {
				name: 'Test 2',
				score: 2,
				move: 2,
				play: sinon.spy(),
				moveName: 'Lizard'
			}
		];
	} 

	it('Create game', () => {
		const game = new Game(mockPlayers());
		expect(game.result).to.equal(null);
	});

	describe('Play', () => {
		it('computer game', () => {
			const game = new Game(mockPlayers());
			game.computer();
			game.players.forEach( player => expect(player.play.called).to.be.true );
		});

		it('manual game', () => {
			const game = new Game(mockPlayers());
			game.manual(1);
			expect(game.players[1].play.called).to.be.true;
		});
	});

	it('Reset game', () => {
		const game = new Game(mockPlayers());
		game.reset();
		game.players.forEach( player => {
			expect(player.score).to.equal(0);
			expect(player.move).to.equal(0);
		});
	});


	describe('Game Summary', () => {
		function testSummary(result) {
			const game = new Game(mockPlayers());
			game.result = result;
			return game.summary;
		}

		it('(DRAWN)', () => expect(testSummary(DRAWN)).to.equal('Draw') );
		it('(NOWIN)', () => expect(testSummary(NOWIN)).to.equal('No Winner') );
		it('(RESET)', () => expect(testSummary(RESET)).to.equal('Scores reset') );
		it('(P1WIN)', () => expect(testSummary(P1WIN)).to.equal('Test 1 wins - Spock beat Lizard') );
		it('(P2WIN)', () => expect(testSummary(P2WIN)).to.equal('Test 2 wins - Spock lost to Lizard') );
	});


	describe('Judge game', () => {
		function testPlay(p1Move, p2Move, winner) {
			const game = new Game(mockPlayers());

			game.players[0].move = p1Move;
			game.players[1].move = p2Move;
			game.judge();

			expect( game.result ).to.equal(winner);
		}

		it('to be a draw', () => testPlay(0, 0, DRAWN) );
		it(`${MOVES[1].name} to beat ${MOVES[0].name}`, () => testPlay(1, 0, P1WIN) );
		it(`${MOVES[2].name} to beat ${MOVES[1].name}`, () => testPlay(2, 1, P1WIN) );
		// it(`${MOVES[0].name} to beat ${MOVES[2].name}`, () => testPlay(0, 2, P1WIN) );
		it(`Player 2 to win`, () => testPlay(0, 1, P2WIN) );
	});

});
