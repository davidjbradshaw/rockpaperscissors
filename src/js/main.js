require('../css/main.scss');
import { MOVES } from './consts';
import Player from './player';
import Ref from './ref';
import { ie8forEach } from './ie8';

const p1Img = document.getElementById('player1Image');
const p2Img = document.getElementById('player2Image');

const p1Score = document.getElementById('player1Score');
const p2Score = document.getElementById('player2Score');

const resultText = document.getElementById('result');

const players = [
	new Player('Player 1'),
	new Player('Player 2')
]

function playComputerGame() {
	players.forEach( player => player.play() );
	displayResult(Ref.judge(players));
}

function playManualGame(move) {
	players[0].move = move;
	players[1].play();
	displayResult(Ref.judge(players));
}

function reset(){
	players.forEach( player => player.score = player.move = 0 );
	displayResult();
}

function displayResult(result) {
	p1Img.src=MOVES[players[0].move].img1;
	p2Img.src=MOVES[players[1].move].img2;

	p1Score.innerHTML = players[0].score;
	p2Score.innerHTML = players[1].score;

	switch (result) {
	case -1:
		resultText.innerHTML = 'Draw';
		break;
	case 0:
		resultText.innerHTML = `${players[0].name} wins - ${players[0].moveName} beat ${players[1].moveName}`;
		break;
	case 1:
		resultText.innerHTML = `${players[1].name} wins - ${players[0].moveName} lost to ${players[1].moveName}`;
		break;
	default:
		resultText.innerHTML = 'Scores reset';
	}
}

function setStartImages() {
	p1Img.src=MOVES[0].img1;
	p2Img.src=MOVES[0].img2;
}

function addListener(obj,evt,func){
	if ('addEventListener' in window) obj.addEventListener(evt,func, false);
	else if ('attachEvent' in window) obj.attachEvent('on'+evt,func); // IE8
}

ie8forEach();

setStartImages();

addListener(document.getElementById('computer'), 'click', playComputerGame);
addListener(document.getElementById('reset'), 'click', reset);

['rock', 'paper', 'scissors'].forEach( 
	(move, idx) => addListener(document.getElementById(move), 'click', () => playManualGame(idx))
);


