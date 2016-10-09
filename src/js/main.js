require('../css/main.scss');
import Player from './player';
import Game from './game';
import start from './ui';
import { ie8forEach } from './ie8';

ie8forEach();

start( new Game([
	new Player('Player 1'),
	new Player('Player 2')
]));
