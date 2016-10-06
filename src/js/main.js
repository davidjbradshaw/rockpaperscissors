require('../css/main.scss');
import { NUMER_OF_GAMES } from './consts';
import Player from './player';

const players = [
	new Player('foo'),
	new Player('bar')
]

while (players[0].score < NUMER_OF_GAMES) {
	players[0].score++;

	players.forEach( player => player.play() );

	players.forEach(player => console.log(`${player.name}: ${player.lastMoveName} `));
}
