require('../css/main.scss');
import { NUMER_OF_GAMES } from './consts';
import Player from './player';
import Ref from './ref';

const players = [
	new Player('foo'),
	new Player('bar')
]

const ref = new Ref;

for (let game = 0 ; game < NUMER_OF_GAMES ; game++ ) {
	players.forEach( player => player.play() );
	ref.judge(players);
}

console.log (`Final score ${players[0].name}:${players[0].score} ${players[1].name}:${players[1].score} `)