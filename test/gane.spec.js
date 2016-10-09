import { RESET, DRAW, P1WIN, P2WIN } from '../src/js/consts';
import Game from '../src/js/game';
import sinon from 'sinon/pkg/sinon';

describe('Game object', () => {

	function mockPlayers() {
		return [{
				name: 'Test 1',
				score: 2,
				move: 2,
				play: sinon.spy(),
				moveName: 'spock'
			}, {
				name: 'Test 2',
				score: 2,
				move: 2,
				play: sinon.spy(),
				moveName: 'lizard'
			}
		];
	} 

	function testSummary(result) {
		const game = new Game(mockPlayers());
		game.result = result;
		return game.summary;
	}

	it('Create game', () => {
		const game = new Game(mockPlayers());
		expect(game.result).to.equal(null);
	});

	it('Play computer game', () => {
		const game = new Game(mockPlayers());
		game.computer();
		game.players.forEach( player => expect(player.play.called).to.be.true );
	});

	it('Play manual game', () => {
		const game = new Game(mockPlayers());
		game.manual(1);
		expect(game.players[1].play.called).to.be.true;
	});

	it('Reset game', () => {
		const game = new Game(mockPlayers());
		game.reset();
		game.players.forEach( player => {
			expect(player.score).to.equal(0);
			expect(player.move).to.equal(0);
		});
	});

	it('Summary (RESET)', () => {
		expect(testSummary(RESET)).to.equal('Scores reset');
	});

	it('Summary (Draw)', () => {
		expect(testSummary(DRAW)).to.equal('Draw');
	});

	it('Summary (P1WIN)', () => {
		expect(testSummary(P1WIN)).to.equal('Test 1 wins - spock beat lizard');
	});

	it('Summary (P2WIN )', () => {
		expect(testSummary(P2WIN )).to.equal('Test 2 wins - spock lost to lizard');
	});

});
