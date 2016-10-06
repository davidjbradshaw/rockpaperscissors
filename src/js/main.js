require('../css/main.scss');
import { MOVES, NUMER_OF_GAMES } from './consts';
import Player from './player';
import Ref from './ref';

const players = [
	new Player('foo'),
	new Player('bar')
]

const ref = new Ref;

document.getElementById('player1Image').src=MOVES[0].img1;

document.getElementById('player2Image').src=MOVES[0].img2;

function playGame() {
	players.forEach( player => player.play() );
	ref.judge(players);
}

function displayResult() {

}

for (let game = 0 ; game < NUMER_OF_GAMES ; game++ ) {
	playGame();
	displayResult();
}