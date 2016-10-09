require('../css/main.scss');
import { MOVES } from './consts';
import Player from './player';
import Game from './game';
import { display, displayStartingImages } from './display';
import { addListener } from './utils';
import { ie8forEach } from './ie8';

const game = new Game([
	new Player('Player 1'),
	new Player('Player 2')
]);

function bindButtons() {
	addListener('computer', 'click', () => display( game.computer() ));
	addListener('reset', 'click', () => display( game.reset() ));
}


function init() {
	ie8forEach();
	displayStartingImages(game);
	bindButtons();
}

init();


MOVES.forEach( 
	(move, idx) => addListener(move.name.toLowerCase(), 'click', () => display( game.manual(idx) ))
);
