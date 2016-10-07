require('../css/main.scss');
import { MOVES, RESET, DRAW, P1WIN, P2WIN } from './consts';
import Player from './player';
import { judge } from './ref';
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
	displayResult(judge(players));
}

function playManualGame(move) {
	players[0].move = move;
	players[1].play();
	displayResult(judge(players));
}

function reset(){
	players.forEach( player => player.score = player.move = 0 );
	displayResult(RESET);
}

function displayImages() {
	p1Img.src=MOVES[players[0].move].img1;
	p2Img.src=MOVES[players[1].move].img2;
}

function displayScore() {
	p1Score.innerHTML = players[0].score;
	p2Score.innerHTML = players[1].score;
}

function displaySummary(result) {
	switch (result) {
	case DRAW:
		resultText.innerHTML = 'Draw';
		break;
	case P1WIN:
		resultText.innerHTML = `${players[0].name} wins - ${players[0].moveName} beat ${players[1].moveName}`;
		break;
	case P2WIN:
		resultText.innerHTML = `${players[1].name} wins - ${players[0].moveName} lost to ${players[1].moveName}`;
		break;
	case RESET:
		resultText.innerHTML = 'Scores reset';
	}	
}

function displayResult(result) {
	displayImages();
	displayScore();
	displaySummary(result);
}

function addListener(objName,evt,func){
	const obj = document.getElementById(objName);
	if ('addEventListener' in window) obj.addEventListener(evt,func, false);
	else if ('attachEvent' in window) obj.attachEvent('on'+evt,func); // IE8
}

ie8forEach();

displayImages(); // Display starting position

addListener('computer', 'click', playComputerGame);
addListener('reset', 'click', reset);

['rock', 'paper', 'scissors'].forEach( 
	(move, idx) => addListener(move, 'click', () => playManualGame(idx))
);


