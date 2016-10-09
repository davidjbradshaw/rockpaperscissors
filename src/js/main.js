require('../css/main.scss');
import { MOVES } from './consts';
import Player from './player';
import Game from './game';

import { addListener, getById } from './utils';
import { ie8forEach } from './ie8';

const playerImages = [
	getById('player0Image'),
	getById('player1Image')
];

const playerScores = [
	getById('player0Score'),
	getById('player1Score')
];

const resultText = getById('result');

const game = new Game([
	new Player('Player 1'),
	new Player('Player 2')
]);


function displayImage(player, idx) {
	playerImages[idx].src = player.moveImage;
}

function displayScore(player, idx) {
	playerScores[idx].innerHTML = player.score;
}

function display(game) {
	game.players.forEach(
		(player, idx) => {
			displayImage(player, idx);
			displayScore(player, idx);
		}
	);

	resultText.innerHTML = game.summary;
}


ie8forEach();

// Display starting position
game.players.forEach(	(player, idx) => displayImage(player, idx) ); 

addListener('computer', 'click', () => display( game.computer() ));
addListener('reset', 'click', () => display( game.reset() ));

MOVES.forEach( 
	(move, idx) => addListener(move.name.toLowerCase(), 'click', () => display( game.manual(idx) ))
);
