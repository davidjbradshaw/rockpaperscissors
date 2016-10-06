require('../css/main.scss');
import { MOVES, NUMER_OF_GAMES } from './consts';
import Player from './player';
import Ref from './ref';

const p1Img = document.getElementById('player1Image');
const p2Img = document.getElementById('player2Image');

const p1Score = document.getElementById('player1Score');
const p2Score = document.getElementById('player2Score');

const resultText = document.getElementById('result');
let result = 0;

const players = [
	new Player('Player 1'),
	new Player('Player 2')
]

const ref = new Ref;

// Set starting images
p1Img.src=MOVES[0].img1;
p2Img.src=MOVES[0].img2;

function playGame() {
	players.forEach( player => player.play() );
	result = ref.judge(players);
}

function displayResult() {
	p1Img.src=MOVES[players[0].move].img1;
	p2Img.src=MOVES[players[1].move].img2;

	p1Score.innerHTML = players[0].score;
	p2Score.innerHTML = players[1].score;

	
	switch (result) {
	case -1:
		resultText.innerHTML = 'Draw';
		break;
	case 0:
		resultText.innerHTML = `${players[0].moveName} beat ${players[1].moveName}`;
		break;
	case 1:
		resultText.innerHTML = `${players[1].moveName} beat ${players[0].moveName}`;
		break;
	}
		
}

for (let game = 0 ; game < NUMER_OF_GAMES ; game++ ) {
	playGame();
	displayResult();
}